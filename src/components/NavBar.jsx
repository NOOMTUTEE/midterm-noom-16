import { NavLink,Outlet } from "react-router" 

function NavBar(){
    return(
      

        <nav className='bg-amber-200 w-full '>
            <div className='flex justify-between'>
            <p className='ml-5 pt-5 font-bold text-3xl'>WELCOM TO</p>
            <div>
            <NavLink className= {({ isActive }) => isActive ? 'mr-5 pt-10 font-bold text-3xl':null}>Login
            </NavLink>
            </div>
            </div>

       
        </nav>
        
    )
}

export default NavBar