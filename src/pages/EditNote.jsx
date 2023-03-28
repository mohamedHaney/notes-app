import {Link,useParams,useNavigate} from "react-router-dom"
import{IoIosArrowBack} from "react-icons/io"
import{AiTwotoneDelete} from "react-icons/ai"
import { useState } from "react"
import useCreateDate from "../components/useCreateDate"
const EditNote = ({notes,setnotes}) => {
  const {id}=useParams()
  const note=notes.find((item)=>item.id==id)
  const [title,setTitle]=useState(note.title)
  const [details,setdetails]=useState(note.details)
  const date = useCreateDate()
  const navigate=useNavigate()
  const handelform=(e)=>{
    e.preventDefault()
    if(title&&details){
      const newnote={...note,title,details,date}
      const newnotes=notes.map(item=>{
        if(item.id==id){
          item=newnote
        }
        return item
      })
      setnotes(newnotes)
    }
    navigate("/notes-app")
  }
  const handleDelete=()=>{
    if(window.confirm("Are You Sure To Delete")){
    const newnotes=notes.filter(item=>item.id != id)
    setnotes(newnotes)
    navigate("/notes-app")
    }
  }
  return (
    <section>
    <header className='create-note__header'>
    <Link to="/notes-app" className="btn"> <IoIosArrowBack /> </Link>
    <button className="btn lg primary" onClick={handelform}>Save</button>
    <button className="btn danger" onClick={handleDelete}><AiTwotoneDelete/></button>
    </header>
    <form className="create-note__form" onSubmit={handelform}>
    <input type="text" placeholder="Title" autoFocus value={title} onChange={(e)=>setTitle(e.target.value)}></input>
    <textarea rows={28} placeholder="Note Details..." value={details} onChange={(e)=>setdetails(e.target.value)}></textarea>
    </form>
    </section>
  )
}
export default EditNote