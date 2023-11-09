import React, { useEffect, useReducer, useRef, useState } from "react";
import { products } from "../data";
export default function Calc({ curr }) {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [p, setP] = useState(1);

  const [daily, setDaily] = useState(0);
  const [plan, setPlan] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [yearly, setYearly] = useState(0);

  useEffect(() => {
    const daily = (
      perc(10, products[p - 1]) * a +
      perc(5, products[p - 1]) * (a ? a * b : b) +
      perc(2, products[p - 1]) * (a * b ? a * b * c : c)
    ).toFixed(2);
    setDaily(daily);
    setPlan((daily * products[p - 1].days).toFixed(3));
    setMonthly((daily * 30).toFixed(3));
    setYearly((daily * 365).toFixed(3));
  }, [a, b, c, p]);

  useEffect(() => {
    setP(curr);
  }, [curr]);

  return (
    <div className="calc">
      <div className="field">
        <span>Product</span>
        <input
          type="number"
          className="small"
          value={p}
          onChange={(e) => {
            let value =
              +e.target.value.at(-1) >= 7 ? 1 : +e.target.value.at(-1) || 1;
            setP(value);
          }}
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
          navigator.clipboard.writeText(`daily: ${daily},\ntotal: ${plan}`);
        }}
      >
        <p>
          <span className="text">Daily</span>
          <span
            className="value"
            onClick={(e) => {
              e.stopPropagation();
              navigator.clipboard.writeText(`daily: ${daily}`);
            }}
          >
            {daily} +{/* income: {daily + products[p - 1].dailyIncome} */}
          </span>
        </p>
        <p>
          <span className="text">Total:</span>
          <span
            className="value"
            onClick={(e) => {
              e.stopPropagation();
              navigator.clipboard.writeText(`total: ${plan}`);
            }}
          >
            {plan}
          </span>
        </p>
        <p>
          <span className="text">Monthly:</span>
          <span
            className="value"
            onClick={(e) => {
              e.stopPropagation();
              navigator.clipboard.writeText(`MOnthly: ${monthly}`);
            }}
          >
            {monthly}
          </span>
        </p>
        <p>
          <span className="text">Yearly:</span>
          <span
            className="value"
            onClick={(e) => {
              e.stopPropagation();
              navigator.clipboard.writeText(`Yearly: ${yearly}`);
            }}
          >
            {yearly}
          </span>
        </p>
      </div>
    </div>
  );
}

function perc(per, prd) {
  //   const map = { B: 10, C: 5, D: 2 };
  return ((prd.dailyIncome / 100) * per).toFixed(3);
}
