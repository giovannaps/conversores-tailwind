"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <main className="p-10 text-center space-y-6">
      <h1 className="text-4xl font-bold">Bem-vindo ao App de Conversão</h1>
      <p className="text-lg max-w-xl mx-auto">
        Este aplicativo oferece ferramentas simples para converter valores de moeda, temperatura e medidas de comprimento. Com os links abaixo, acesse diferentes medições.
      </p>
      <nav className="flex justify-center gap-x-6 mt-6">
  <Link href="/conversor-dolar" className="text-white underline hover:text-gray-300">
    Conversor de Dólar
  </Link>
  <Link href="/conversor-temperatura" className="text-white underline hover:text-gray-300">
    Conversor de Temperatura
  </Link>
  <Link href="/conversor-comprimento" className="text-white underline hover:text-gray-300">
    Conversor de Comprimento
  </Link>
  <Link href="/sobre" className="text-white underline hover:text-gray-300">
    Sobre
  </Link>
</nav>

    </main>
  );
}


export function Sobre() {
  return (
    <main className="p-10 text-center space-y-4">
      <h1 className="text-3xl font-bold">Sobre Mim</h1>
      <p className="max-w-xl mx-auto">
     
      </p>
    </main>
  );
}

export function ConversorDolar() {
  const taxa = 5.20;
  const [real, setReal] = useState(0);
  const [dolar, setDolar] = useState(0);

  useEffect(() => {
    setDolar(real / taxa);
  }, [real]);

  useEffect(() => {
    setReal(dolar * taxa);
  }, [dolar]);

  return (
    <main className="p-10 text-center space-y-4">
      <h1 className="text-3xl font-bold">Conversor Dólar - Real</h1>
      <div className="space-y-2">
        <input
          type="number"
          value={real}
          onChange={(e) => setReal(Number(e.target.value))}
          className="border rounded p-2"
          placeholder="Valor em Reais"
        />
        <input
          type="number"
          value={dolar}
          onChange={(e) => setDolar(Number(e.target.value))}
          className="border rounded p-2"
          placeholder="Valor em Dólares"
        />
      </div>
    </main>
  );
}


export function ConversorTemperatura() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  useEffect(() => {
    setFahrenheit((celsius * 9) / 5 + 32);
  }, [celsius]);

  useEffect(() => {
    setCelsius(((fahrenheit - 32) * 5) / 9);
  }, [fahrenheit]);

  return (
    <main className="p-10 text-center space-y-4">
      <h1 className="text-3xl font-bold">Conversor de Temperatura</h1>
      <div className="space-y-2">
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(Number(e.target.value))}
          className="border rounded p-2"
          placeholder="Celsius (ºC)"
        />
        <input
          type="number"
          value={fahrenheit}
          onChange={(e) => setFahrenheit(Number(e.target.value))}
          className="border rounded p-2"
          placeholder="Fahrenheit (ºF)"
        />
      </div>
    </main>
  );
}


export function ConversorComprimento() {
  const [metros, setMetros] = useState(0);
  const [pes, setPes] = useState(0);

  useEffect(() => {
    setPes(metros * 3.28084);
  }, [metros]);

  useEffect(() => {
    setMetros(pes / 3.28084);
  }, [pes]);

  return (
    <main className="p-10 text-center space-y-4">
      <h1 className="text-3xl font-bold">Conversor de Comprimento</h1>
      <div className="space-y-2">
        <input
          type="number"
          value={metros}
          onChange={(e) => setMetros(Number(e.target.value))}
          className="border rounded p-2"
          placeholder="Metros"
        />
        <input
          type="number"
          value={pes}
          onChange={(e) => setPes(Number(e.target.value))}
          className="border rounded p-2"
          placeholder="Pés"
        />
      </div>
    </main>
  );
}