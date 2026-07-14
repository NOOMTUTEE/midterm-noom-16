import React from 'react'
import { useState } from 'react'
import { useUserStore } from '../stores/userStore'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
// import axios from 'axios'
import api from '../api/mainApi'



function LoginPage() {

    const [formData, setFormData] = useState({
        username: '',
        passwiord: '',
    })

    const setUser =  useUserStore(state => state.setUser)
    const setToken =  useUserStore(state => state.setToken)
    
    const navigate = useNavigate()

    const hdlChange =  (e) => {
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

        const hdlLogin = async (e) => {
            e.preventDefault()
            // console.log('formData', formData)
            try {
                const res = await api.post('auth/login', formData)
                console.log('res', res)
                const {token, username} = res.data
                setUser(username)
                setToken(token)
                navigate('/TodolisPage')
                toast.success('Yeah')
            } catch (error) {
                console.log('error', error)
                toast.error('Login Failed!!')
            }
        }

    return (
        <div className='pt-60 m-auto w-full h-screen flex justify-center item-center '>
            <div className='w-100 h-120 border rounded-2xl bg-slate-100 p-4 flex flex-col gap4 justify-center shadow-2xl'>
                <form onSubmit={hdlLogin}>

                <div>
                
                    <h1 className='font-bold text-4xl text-center'>Welcom</h1>
                    <p className='text-xl pt-2 text-gray-500 text-center'>ล็อกอินเพื่อเข้าสู่ระบบทดสอบ Frontend Dev</p>

                    <input placeholder='🧑‍💼username' className='outline-1 rounded-2xl text-xl p-2 flex mt-8 w-full'
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={hdlChange}
                        />
                </div>
                <div>

                    <input placeholder='🔐password' className='outline-1 rounded-2xl text-xl p-2 flex mt-8 w-full'
                        type="password" 
                        name="password"
                        value={formData.password}
                        onChange={hdlChange}
                        />
                </div>
                <button className='bg-blue-500 mt-10 rounded-2xl font-bold h-10 text-white w-full mb-4 ' >LOG IN</button>
                <div className='text-center'>
                <span className=' justify-center mt-5 text-gray-500' >Don't have an account?</span>
                <span className='hover:text-blue-500 font-bold text-blue-500'>Register</span>
                 </div>
                <div>
                    
                </div>
                </form> 
            </div>
        </div>
    )
}

export default LoginPage