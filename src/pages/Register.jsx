
import React from 'react'

function Register() {
  return (
    <div className='pt-60 m-auto w-full h-screen flex justify-center item-center '>
            <div className='w-100 h-120 border rounded-2xl bg-slate-100 p-4 flex flex-col gap4 justify-center shadow-2xl'>
                <form >

                <div>
                
                    <h1 className='font-bold text-4xl text-center'>Register</h1>
                    <p className='text-xl pt-2 text-gray-500 text-center'>สร้างบัญชีผู้ใช้ใหม่สำหรับเข้าสอบ</p>

                    <input placeholder='🧑‍💼username' className='outline-1 rounded-2xl text-xl p-2 flex mt-8 w-full'
                        type="text"
                        name="username"
                        
                        
                        />
                </div>
                <div>

                    <input placeholder='🔐password' className='outline-1 rounded-2xl text-xl p-2 flex mt-8 w-full'
                        type="password" 
                        name="password"
                      
                        />
                </div>
                <div>

                    <input placeholder='🛡️confirm password' className='outline-1 rounded-2xl text-xl p-2 flex mt-8 w-full'
                        type="password" 
                        name="password"
                      
                        />
                </div>
                <button className='bg-blue-500 mt-10 rounded-2xl font-bold h-10 text-white w-full mb-4 ' >SIGN UP</button>
                <div className='text-center'>
                <span className=' justify-center mt-5 text-gray-500' >Already have account?</span>
                <span className='hover:text-blue-500 font-bold text-blue-500'>Log In</span>
                 </div>
                <div>
                    
                </div>
                </form> 
            </div>
        </div>
  )
}

export default Register