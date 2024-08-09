import { useState } from 'react';
import './App.css'
import Form from './components/form/Form'
import TableList from './components/tablelist/TableList'
import ExpenseFilter from './components/expenseFilter/ExpenseFilter';

export const categories = ['Groceries', 'Utilities', 'Entertainment']
function App() {
  const [SelectCategory, setSelectCategory] = useState("")

  const [expenses, setExpenses] = useState([
    { id: 1, Description: 'aa', Amount: 10, category: "Utilities" },
    { id: 2, Description: 'bb', Amount: 10, category: "Utilities" },
    { id: 3, Description: 'cc', Amount: 10, category: "Utilities" },
    { id: 4, Description: 'dd', Amount: 10, category: "Utilities" },

  ]);
  const visibleExpenses = SelectCategory ? expenses.filter((e) => e.category === SelectCategory) : expenses;
     
  return (
    <>
      <Form onSubmit={expense => setExpenses([...expenses, {
        ...expense, id: expenses.length + 1}])} />
      <ExpenseFilter onSelectCategory={category => setSelectCategory(category)} />
      <TableList expenses={visibleExpenses  } onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} />

    </>
  )
}

export default App
 