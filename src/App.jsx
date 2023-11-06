import { useState } from "react";
import Product from "./components/Product";
import Table from "./components/Table";
import { products, vipList, bonusList } from "./data";
import Calc from "./components/Calc";
function App() {
  const [show, setShow] = useState(-1);
  const [curr, setCurr] = useState(1);
  const head = [
    { key: "name", name: "Name" },
    { key: "cost", name: "Cost" },
    { key: "daily", name: "Daily" },
    { key: "totalRevenu", name: "Total" },
    { key: "days", name: "Dys" },
    { key: "invitationReward", name: "Invite" },
    { key: "startingBonus", name: "Bonus" },
    { key: "items", name: "I" },
    { key: "dailyRate", name: "DR" },
    { key: "totalRate", name: "TR" },
  ];
  return (
    <>
      {/* {products.map((prd, index) => (
        <Product
          prd={prd}
          key={index}
          show={show}
          setShow={setShow}
          index={index}
        />
      ))} */}

      <Table head={head} data={products} setCurr={setCurr} />
      <div className="tables">
        <Table
          head={[
            { key: "", name: "Vip Lvl" },
            { key: "", name: "Team" },
            { key: "", name: "Bonus" },
          ]}
          name="vip"
          data={vipList}
        />
        <Table
          head={[
            { key: "", name: "Team" },
            { key: "", name: "Bonus" },
          ]}
          name="bonus"
          data={bonusList}
        />
        <Calc curr={curr} />
      </div>
    </>
  );
}

export default App;
