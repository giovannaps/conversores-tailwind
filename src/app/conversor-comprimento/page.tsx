"use client";
import { useState } from "react";

export default function ConversorComprimento() {
  const [metros, setMetros] = useState("");
  const [pes, setPes] = useState("");
  const [polegadas, setPolegadas] = useState("");

  function onMetrosChange(valor: string) {
    setMetros(valor);
    const num = parseFloat(valor);
    if (!isNaN(num)) {
      setPes((num * 3.28084).toFixed(2)); 
      setPolegadas((num * 39.3701).toFixed(2)); 
    } else {
      setPes("");
      setPolegadas("");
    }
  }

  function onPesChange(valor: string) {
    setPes(valor);
    const num = parseFloat(valor);
    if (!isNaN(num)) {
      setMetros((num / 3.28084).toFixed(2)); 
      setPolegadas((num * 12).toFixed(2)); 
    } else {
      setMetros("");
      setPolegadas("");
    }
  }

  function onPolegadasChange(valor: string) {
    setPolegadas(valor);
    const num = parseFloat(valor);
    if (!isNaN(num)) {
      setMetros((num / 39.3701).toFixed(2)); 
      setPes((num / 12).toFixed(2)); 
    } else {
      setMetros("");
      setPes("");
    }
  }

  return (
    <main className="p-10 text-center space-y-6">
      <h1 className="text-3xl font-bold">Conversor de Comprimento</h1>
      <div className="space-y-4">
        <div>
          <label className="block">Metros (m):</label>
          <input
            type="number"
            value={metros}
            onChange={(e) => onMetrosChange(e.target.value)}
            className="border rounded px-3 py-1"
          />
        </div>
        <div>
          <label className="block">Pés (ft):</label>
          <input
            type="number"
            value={pes}
            onChange={(e) => onPesChange(e.target.value)}
            className="border rounded px-3 py-1"
          />
        </div>
        <div>
          <label className="block">Polegadas (in):</label>
          <input
            type="number"
            value={polegadas}
            onChange={(e) => onPolegadasChange(e.target.value)}
            className="border rounded px-3 py-1"
          />
        </div>
      </div>
    </main>
  );
}