import React from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  return (
    <form>
      <div className="row">
        <div className="input-box">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="input-box">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            className="form-control"
          />
        </div>
        <div className="input-box">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            className="form-control"
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
