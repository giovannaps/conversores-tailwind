"use client";
import { useState } from "react";

export default function ConversorDolar() {
  const cotacao = 5.25; 
  const [real, setReal] = useState("");
  const [dolar, setDolar] = useState("");

  function onRealChange(valor: string) {
    setReal(valor);
    const num = parseFloat(valor);
    if (!isNaN(num)) {
      setDolar((num / cotacao).toFixed(2));
    } else {
      setDolar("");
    }
  }

  function onDolarChange(valor: string) {
    setDolar(valor);
    const num = parseFloat(valor);
    if (!isNaN(num)) {
      setReal((num * cotacao).toFixed(2));
    } else {
      setReal("");
    }
  }

  return (
    <main className="p-10 text-center space-y-6">
      <h1 className="text-3xl font-bold">Conversor de Dólar</h1>
      <div className="space-y-4">
        <div>
          <label className="block">Reais (R$):</label>
          <input
            type="number"
            value={real}
            onChange={(e) => onRealChange(e.target.value)}
            className="border rounded px-3 py-1"
          />
        </div>
        <div>
          <label className="block">Dólares (US$):</label>
          <input
            type="number"
            value={dolar}
            onChange={(e) => onDolarChange(e.target.value)}
            className="border rounded px-3 py-1"
          />
        </div>
        <p className="text-sm text-gray-500">Cotação fixa do dia 14/04/25: 1 USD = R$ 5,25</p>
      </div>
    </main>
  );
}