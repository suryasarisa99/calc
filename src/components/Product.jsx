import { useState } from "react";

export default function Product({ prd, show, setShow, index }) {
  const [level, setLevel] = useState("B");
  const [count, setCount] = useState(0);
  function handleFormSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="prd">
      <div
        className="head"
        onClick={() => setShow((prv) => (prv == index ? -1 : index))}
      >
        <div className="cost">{prd.cost}</div>
        <div className="name">{prd.name}</div>
      </div>

      {show == index && (
        <div className="body">
          <div className="data">
            <div className="items">
              <div className="item">
                <Text t="Days:" /> {prd.days}
              </div>
              <div className="item">
                <Text t="Items:" />
                <Value v={prd.items} />
              </div>
            </div>
            <div className="item">
              <Text t="Daily:" />
              <Value v={prd.dailyIncome} />
              <span className="rate">{prd.dailyRate}%</span>
            </div>

            <div className="item">
              <Text t={"Total:"} />
              <Value v={prd.totalRevenu} />
              <span className="rate">{prd.totalRate}%</span>
            </div>

            <div className="item">
              <Text t="Bonus:" />
              <Value v={prd.startingBonus} />
            </div>

            <div className="item">
              <Text t="InviteReward" />
              <Value v={prd.invitationReward} />
            </div>
          </div>

          <div className="data">
            <form action="" onSubmit={handleFormSubmit}>
              <input
                type="text"
                className="lvl"
                value={level}
                onChange={(e) => {
                  let ch = e.target.value.toUpperCase().at(-1);
                  if (ch <= "D" && ch >= "B") setLevel(ch);
                }}
              />
              <input
                className="num"
                type="number"
                value={count}
                onChange={(e) => setCount(+e.target.value || "")}
              />
              {/* <button>submit</button> */}
            </form>
            <div className="item">
              Invite Per day: {(perc(level, prd) * count).toFixed(2)}
            </div>
            <div className="item">
              Invite total: {(perc(level, prd) * count * prd.days).toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Text({ t }) {
  return <span className="placeholder">{t}</span>;
}

function Value({ v }) {
  return <span className="value">{v}</span>;
}

function perc(level, prd) {
  const map = { B: 10, C: 5, D: 2 };
  return ((prd.dailyIncome / 100) * map[level]).toFixed(1);
}
