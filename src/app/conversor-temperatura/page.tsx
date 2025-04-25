"use client";
import { useState } from "react";

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState<string>("");
  const [fahrenheit, setFahrenheit] = useState<string>("");

  function onCelsiusChange(valor: string) {
    setCelsius(valor);
    const num = parseFloat(valor);
    if (!isNaN(num)) {
      setFahrenheit(((num * 9) / 5 + 32).toFixed(2)); // Convertendo para string
    } else {
      setFahrenheit("");
    }
  }

  function onFahrenheitChange(valor: string) {
    setFahrenheit(valor);
    const num = parseFloat(valor);
    if (!isNaN(num)) {
      setCelsius(((num - 32) * 5) / 9).toFixed(2).toString(); // Convertendo para string
    } else {
      setCelsius("");
    }
  }

  return (
    <main className="p-10 text-center space-y-6">
      <h1 className="text-3xl font-bold">Conversor de Temperatura</h1>
      <div className="space-y-4">
        <div>
          <label className="block">Celsius (°C):</label>
          <input
            type="number"
            value={celsius}
            onChange={(e) => onCelsiusChange(e.target.value)}
            className="border rounded px-3 py-1"
          />
        </div>
        <div>
          <label className="block">Fahrenheit (°F):</label>
          <input
            type="number"
            value={fahrenheit}
            onChange={(e) => onFahrenheitChange(e.target.value)}
            className="border rounded px-3 py-1"
          />
        </div>
      </div>
    </main>
  );
}