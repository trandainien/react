import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 200,
      date: "2/2/2022",
    },
    {
      id: 2,
      title: "Bike Insurance",
      amount: 200,
      date: "3/2/2022",
    },
    {
      id: 3,
      title: "Motor Insurance",
      amount: 200,
      date: "4/2/2022",
    },
    {
      id: 4,
      title: "House Insurance",
      amount: 200,
      date: "2/2/2022",
    },
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        amount={expenses[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
