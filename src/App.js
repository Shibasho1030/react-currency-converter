// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [beforeCurrency, setBeforeCurrency] = useState("USD");
  const [afterCurrency, setAfterCurrency] = useState("USD");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();

      async function changeCalculator() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://api.frankfurter.dev/v2/rates?base=${beforeCurrency}&quotes=${afterCurrency}`,
          );
          if (!res.ok) throw new Error("Something went wrong with fetching");
          console.log(res);

          const data = (await res.json())[0];
          if (!data || !data.rate)
            throw new Error("Something went wrong with data");

          console.log(data);
          setOutput(+amount * data.rate);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      setOutput("");
      setError("");
      if (beforeCurrency === afterCurrency) return setOutput(amount);
      if (!amount) return;
      changeCalculator();

      return function () {
        controller.abort();
      };
    },
    [amount, beforeCurrency, afterCurrency],
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        disabled={isLoading}
      />
      <select
        value={beforeCurrency}
        onChange={(e) => setBeforeCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="JPY">JPY</option>
      </select>
      <select
        value={afterCurrency}
        onChange={(e) => setAfterCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="JPY">JPY</option>
      </select>
      {isLoading && !error && <Loading />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && amount && (
        <p>
          {output} {afterCurrency}
        </p>
      )}
    </div>
  );
}

function Loading() {
  return <p>Loading...</p>;
}

function ErrorMessage({ message }) {
  return <p>{message}</p>;
}
