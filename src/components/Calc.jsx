import React, { useState } from "react";
import { products } from "../data";
export default function Calc() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [p, setP] = useState(1);
  return (
    <div className="calc">
      <div className="field">
        <span>Product</span>
        <input
          type="number"
          className="small"
          value={p}
          onChange={(e) => setP(+e.target.value.at(-1) || 1)}
        />
      </div>
      <div className="field">
        <span>B</span>
        <input
          type="number"
          value={a}
          onChange={(e) => setA(+e.target.value || "")}
        />
      </div>

      <div className="field">
        <span>C</span>
        <input
          type="number"
          value={b}
          onChange={(e) => setB(+e.target.value || "")}
        />
      </div>
      <div className="field">
        <span>D</span>
        <input
          type="number"
          value={c}
          onChange={(e) => setC(+e.target.value || "")}
        />
      </div>

      <div
        className="result"
        onClick={() => {
          navigator.clipboard.writeText(
            `daily: ${(
              perc(10, products[p - 1]) * a +
              perc(5, products[p - 1]) * b +
              perc(2, products[p - 1]) * c
            ).toFixed(2)},\ntotal:${(
              (perc(10, products[p - 1]) * a +
                perc(5, products[p - 1]) * b +
                perc(2, products[p - 1]) * c) *
              products[0].days
            ).toFixed(3)}`
          );
        }}
      >
        <p>
          <span className="text">Daily</span>
          <span className="value">
            {(
              perc(10, products[p - 1]) * a +
              perc(5, products[p - 1]) * b +
              perc(2, products[p - 1]) * c
            ).toFixed(2)}
          </span>
        </p>
        <p>
          <span className="text">Total:</span>
          <span className="value">
            {(
              (perc(10, products[p - 1]) * a +
                perc(5, products[p - 1]) * b +
                perc(2, products[p - 1]) * c) *
              products[0].days
            ).toFixed(3)}
          </span>
        </p>
      </div>
    </div>
  );
}

function perc(per, prd) {
  //   const map = { B: 10, C: 5, D: 2 };
  return ((prd.dailyIncome / 100) * per).toFixed(1);
}
