import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem({ title, amount, date }) {
  const clickHandler = () => {
    console.log("clicked!!!");
  };

  return (
    <div className="expense-item">
      <div className="left">
        <ExpenseDate title={title} date={date} />
      </div>
      <div className="right">
        <div>${amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </div>
  );
}

export default ExpenseItem;
