import React, { useState } from 'react'
import { useLoaderData } from 'react-router'
import { toast } from 'react-toastify'
import { el } from 'zod/locales'
import { deletePost } from '../api/postApi'

async function hdlDelete(id) {

    try{ 
      const res = await deletePost(id)
      toast.success(res.message)
    }catch (err){
      toast.error(err.message)
    }
}

function TodolistPage() {
  const [add, setAdd] = useState()

  const Todolist = useLoaderData()
  console.log(Todolist)



  return (
    <div className='w-100 h-120 border rounded-2xl bg-slate-100 p-4 flex flex-col justify-center shadow-2xl'>
      <h1 className='font-bold text-3xl pb-10'>MyTodo</h1>
      <div className='flex justify-between'>
        <input placeholder='new task' type="text" name="" id="" />
        <p className=' w-20 border rounded-2xl text-center bg-amber-400 '>add</p>
      </div>
      <hr className='mt-10 text-gray-400' />
        
        <div>
         {Todolist.map((el)=>(
          <div key={el.id} className='flex gap-1 my-2'>
            <input type="checkbox" defaultChecked={el.isdone}/>

            <p className='flex-1 '>{el.content}</p>
            <button className=' border rounded-2xl w-15 bg-blue-300'>edit</button>
            <button  onClick={()=>hdlDelete(el.id)}  className='border rounded-2xl bg-red-500 text-white w-7 h-7 my-auto'>x</button>
            
          </div>
         ))}

        </div>


    </div>
  )
}

export default TodolistPage