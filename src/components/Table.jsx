import React from "react";

export default function Table({ head, data, name, setCurr }) {
  const vs = ["days", "items", "dailyrate"];
  const md = ["startingbonus", "invitationreward"];
  return (
    <div className={"table " + name}>
      <div className="head">
        {head.map((h, hInd) => (
          <p
            className={
              "head-item " +
              h.key +
              " " +
              (vs.includes(h.key.toLowerCase())
                ? "vs"
                : md.includes(h.key.toLocaleLowerCase())
                ? "md"
                : "")
            }
            key={hInd}
          >
            {h.name}
          </p>
        ))}
      </div>
      <div className="body">
        {data.map((prd, pInd) => {
          return (
            <div className="row" key={pInd}>
              {Object.entries(prd).map(([key, value], ind) => {
                return (
                  <p
                    onClick={() => {
                      if (setCurr) setCurr(pInd + 1);
                      navigator.clipboard.writeText(value);
                    }}
                    className={
                      "cell " +
                      key +
                      " " +
                      (vs.includes(key.toLowerCase())
                        ? "vs"
                        : md.includes(key.toLocaleLowerCase())
                        ? "md"
                        : "")
                    }
                    key={ind}
                  >
                    {value}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
