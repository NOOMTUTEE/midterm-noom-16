import React, { useState } from 'react'



function TodolistPage() {
  const [add, setAdd] = useState()


  return (
    <div className='w-100 h-120 border rounded-2xl bg-slate-100 p-4 flex flex-col justify-center shadow-2xl'>
      <h1 className='font-bold text-3xl pb-10'>MyTodo</h1>
      <div className='flex justify-between'>
        <input placeholder='new task' type="text" name="" id="" />
        <p className=' w-20 border rounded-2xl text-center bg-amber-400 '>add</p>
      </div>
      <hr className='mt-10 text-gray-400' />

      
    </div>
  )
}

export default TodolistPage