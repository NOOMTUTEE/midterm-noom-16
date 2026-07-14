import apit from "./mainApi"

export const getallPosts = async()=>{
    try{
        const res = await api.get("/TodolistPage.jsx")
        return res.data 
    } catch (error) {
        console.log(error)
        toast.error("cannot get posts")
    }
}