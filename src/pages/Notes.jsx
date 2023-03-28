import { useEffect, useState } from 'react';
import {AiOutlineSearch,AiOutlinePlus} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Noteitem from '../components/Noteitem';
import {AiOutlineClose} from 'react-icons/ai'
const Notes = ({notes}) => {
  const [showSearch,setShowSearch]=useState(false)
  const [text,setText]=useState("")
  const [filteredNotes , setFilteredNotes]=useState(notes)
  const handleSearch=()=>{
    setFilteredNotes(notes.filter(note=>{
      if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
        return note
      }
    }))
  }
  useEffect(handleSearch,[text])
  return (
    <section>
      <header className='notes__header'>
      {!showSearch &&<h2>My Notes</h2>}
      {showSearch&&<input type="text" autoFocus value={text} onChange={(e)=> {setText(e.target.value) ;handleSearch()}} placeholder='KeyWord...'/> }
      <button className='btn' onClick={()=>setShowSearch(prev=>!prev)}>
      {showSearch ?<AiOutlineClose onClick={()=> {window.location.href='/Notes-App'}} />
      : <AiOutlineSearch/>} </button>
      </header>
      <div className='notes__container'>
      {filteredNotes.map(note=> <Noteitem key={note.id} note={note}/>)}
      {filteredNotes.length==0 && <p className='empty__notes'>No Notes Found.</p>}
      </div>
      <Link to="/create-note" className='btn add__btn'> <AiOutlinePlus /> </Link>
    </section>
  )
}
export default Notes