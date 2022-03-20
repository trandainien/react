import "./ExpenseItem.css";

function ExpenseItem({ title, amount, date }) {
  const clickHandler = () => {
    console.log("clicked!!!");
  };

  return (
    <div className="expense-item">
      <div className="left">
        <div>{date}</div>
        <h2>{title}</h2>
      </div>
      <div className="right">
        <div>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </div>
  );
}

export default ExpenseItem;
