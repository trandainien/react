import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";
import NewExpense from "./components/NewExpense/NewExpense";
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
    <Card>
      <NewExpense />
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default App;
