
const TableList = () => {

    
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
                <tr className="">  
                    <td className="px-6 py-4 border  border-b">Sample Item 1</td>  
                    <td className="px-6 py-4 border border-b">$100</td>  
                    <td className="px-6 py-4 border border-b">Category A</td>  
                    <td className="px-6 py-4 border border-b">  
                        <button className="text-red-500 border focus:outline-none border py-2 px-4 rounded-md hover:bg-red-700 hover:text-white ">Delete</button>  
                    </td>  
                </tr>  
               
                <tr>  
                    <td className="px-6 py-4 border border-b">Total</td>  
                    <td className="px-6 py-4 border border-b">$100</td>  
                    
                </tr>  
            </tbody>  
        </table>  
  </div>
  </>
  )
}

export default TableList