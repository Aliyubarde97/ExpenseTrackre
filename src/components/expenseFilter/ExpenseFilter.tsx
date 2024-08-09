import { categories } from "../../App"

interface Props{
    onSelectCategory:(category:string) => void
}

 
const ExpenseFilter = ({onSelectCategory}:Props) => {
  return (
    <>
     <div className="max-w-md p-6 mb-6">
                    <select id="categories" onChange={(event) => onSelectCategory(event.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                             {categories.map(category=> <option key={category} value={category}>{category}</option>)}
                         </select>
                </div> 
    </>
  )
}

export default ExpenseFilter