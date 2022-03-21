import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput({
      ...userInput, //pull out all key value pair and add it to new object
      enteredTitle: e.target.value,
    });
  };

  const amountChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      amount: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      date: e.target.value,
    });
  };

  return (
    <form>
      <div className="row">
        <div className="input-box">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="input-box">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            className="form-control"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="input-box">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            className="form-control"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="btn">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
