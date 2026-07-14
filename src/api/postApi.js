
import { toast } from "react-toastify"
import api from "./mainApi"

export const getallPosts = async()=>{
    try{
        const res = await api.get("/todosv2")
        return res.data 
    } catch (error) {
        console.log(error)
        toast.error("cannot get posts")
    }
}
export const deletePost = async(id)=>{
    try{
        const res = await api.delete(`/todosv2/delete/${id}`)
        return res.data 
    } catch (error) {
        console.log(error)
        toast.error("cannot get posts")
    }
}
