import {Link,useNavigate} from "react-router-dom"
import{IoIosArrowBack} from "react-icons/io"
import { useState } from "react"
import {v4 as uuid} from "uuid"
import useCreateDate from "../components/useCreateDate"
const CreateNote = ({setnotes}) => {
  const [title,settitle]=useState("")
  const [details,setdetails]=useState("")
  const date =useCreateDate()
  const navigate =useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(title&&details){
      const note={id:uuid(),title,details,date}
      setnotes(prevNote=>[note,...prevNote])
      navigate("/")
    }
  }
  return (
    <section>
    <header className='create-note__header'>
    <Link to="/" className="btn"> <IoIosArrowBack /> </Link>
    <button className="btn lg primary" onClick={handleSubmit}>Save</button>
    </header>
    <form className="create-note__form" onSubmit={handleSubmit}>
    <input type="text" placeholder="Title" autoFocus value={title} onChange={(e)=>settitle(e.target.value)}></input>
    <textarea rows={28} value={details} onChange={(e)=>setdetails(e.target.value)} placeholder="Note Details..."></textarea>
    </form>
    </section>
  )
}
export default CreateNote