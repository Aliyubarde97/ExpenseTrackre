import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, useForm } from 'react-hook-form'
import {number, string, z} from 'zod'



const schema = z.object({
  description:string().min(3, {message:'please enter the description'}),
  amount:number({invalid_type_error:'Amount is Required'}).min(100,{message:'Minimum amount must be 100'}),
  categories:string().min(1, {message:'You must choose one'})




})
const Form = () => {

type FormData = z.infer<typeof schema>

  const {register, handleSubmit, formState:{errors}} = useForm<FormData>({resolver:zodResolver(schema)})
  const onsubmit = (data:FieldValues) => console.log(data);
  
  return (
    <>
      <div className="bg-gray-100 p-6">

        <div className="max-w-md mx-auto bg-white p-4 px-2 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">ITEMS FORMS</h2>

          <form action="" method="" onSubmit={handleSubmit(onsubmit)}>
            {/* <!-- Text Input --> */}
            <div className="mb-4">
              <label htmlFor="textInput" className="block text-sm  font-medium text-gray-700">Description</label>
              <input type="text" {...register('description')} id="description" 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                {errors.description &&
                 ( <p className='text-red-500'>{errors.description.message}</p>)
               }
            </div>

            {/* <!-- Number Input --> */}
            <div className="mb-4">
              <label htmlFor="numberInput" className="block text-sm font-medium text-gray-700">Amount</label>
              <input type="number" id="amount"  {...register('amount', {valueAsNumber:true})}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                {errors.amount && (
                  <p className='text-red-500'>{errors.amount.message}</p>
                )}
            </div>

            {/* <!-- Select Dropdown --> */}
            <div className="mb-4">
              <label htmlFor="selectOption" className="block text-sm font-medium text-gray-700">Categories</label>
              <select id="categories"  {...register('categories')}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  
                <option value="">Choose an option</option>
                <option value="Groceries">Groceries</option>
                <option value="Utility">Utility</option>
                <option value="Entertainment">Entertainment</option>
                
              </select>
              {errors.categories && (
                    <p className='text-red-500'>{errors.categories.message}</p>
                  )}
            </div>

            {/* <!-- Submit Button --> */}
            <div>
              <button type="submit" 
                 className="w-[30%] bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Submit
              </button>
            </div>
          </form>
        </div>
</div>
      </>
      )
}

      export default Form