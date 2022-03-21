import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     amount: "",
  //     date: "",
  //   });

  //   const titleChangeHandler = (e) => {
  //     setUserInput((prevState) => {
  //       return {
  //         ...prevState, //pull out all key value pair and add it to new object
  //         enteredTitle: e.target.value,
  //       };
  //     });
  //   };

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: amount,
      date: new Date(date),
    };

    console.log(expenseData);

    setEnteredTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="row">
        <div className="input-box">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={enteredTitle}
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
            value={amount}
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
            value={date}
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
