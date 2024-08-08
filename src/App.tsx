import { useState } from 'react';
import './App.css'
import Form from './components/form/Form'
import TableList from './components/tablelist/TableList'

function App() {

  const [expenses, setexpenses] = useState([
    {id: 1, Description:'aa', Amount:10, categories:"Utilitiez",},
    {id: 2, Description:'bb', Amount:10, categories:"Utilitiez",},
    {id: 3, Description:'cc', Amount:10, categories:"Utilitiez",},
    {id: 4, Description:'dd', Amount:10, categories:"Utilitiez",},

  ]);

  return (
    <>
    <Form/>
    <TableList  expenses={expenses} onDelete={(id) => setexpenses(expenses.filter(e => e.id !== id))} />
      
    </>
  )
}

export default App
