import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import TodolistPage from "../pages/TodolistPage";
// import TodolistPage from "../components/TodolistPage";



const router =createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: LoginPage
            },
            {
                path: '/TodolisPage',
                Component: TodolistPage,
            }
            
        ]
    }
])

export default router