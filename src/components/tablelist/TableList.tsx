

interface expense {
    id:number,
    Description:string,
    Amount:number,
    category:string
}
interface Props{
        expenses:expense[];
        onDelete:(id: number) => void

    }
const TableList = ({expenses, onDelete }:Props) => {
    if(expenses.length === 0) return null;


    return (
        <>
            <div className="overflow-x-auto">
                <table className="w-full mx-auto bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead className="">
                        <tr>
                            <th className="px-6 py-3 bg-gray-200 text-gray-700 uppercase text-sm font-bold text-left border border-b">Description</th>
                            <th className="px-6 py-3 bg-gray-200 text-gray-700 uppercase text-sm font-bold text-left border border-b">Amount</th>
                            <th className="px-6 py-3 bg-gray-200 text-gray-700 uppercase text-sm font-bold text-left border border-b">Categories</th>
                            <th className="px-6 py-3 bg-gray-200 text-gray-700 uppercase text-sm font-bold text-left border border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {expenses.map(expense => <tr key={expense.id}>
                            <td className="px-6 py-4 border  border-b">{expense.Description}</td>
                            <td className="px-6 py-4 border  border-b">{expense.Amount}</td>
                            <td className="px-6 py-4 border  border-b">{expense.category}</td>
                            <td onClick={() => onDelete(expense.id)} className="px-6 py-4 border border-b">
                                <button className="text-red-500 border focus:outline-none border py-2 px-4 rounded-md hover:bg-red-700 hover:text-white ">Delete</button>
                            </td>

                        </tr>)}
                       

                        
                    </tbody>
                    <tfoot>
                        <tr>
                        <td>Total</td>
                        <td>${expenses.reduce((acc, expense) => expense.Amount +acc, 0)}</td>
                        <td></td>
                        <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

export default TableList