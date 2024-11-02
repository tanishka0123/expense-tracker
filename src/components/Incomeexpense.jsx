import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Incomeexpense() {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const incomearr = amount.filter((item)=>item>=0);
  const income=incomearr.reduce((acc,item)=>(acc+=item),0).toFixed(2)

  const expensearr = amount.filter((item)=>item<0);
  const expense=expensearr.reduce((acc,item)=>(acc+=item),0).toFixed(2)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          ${expense}
        </p>
      </div>
    </div>
  );
}

export default Incomeexpense;
