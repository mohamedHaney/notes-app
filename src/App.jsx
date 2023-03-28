
import {BrowserRouter,Routes,Route,json} from 'react-router-dom'
import CreateNote from './pages/CreateNote';
import EditNote from "./pages/EditNote"
import Notes from "./pages/Notes"
import {useEffect, useState}  from 'react';
const App = () => {
    const [notes,setnotes]=useState(JSON.parse(localStorage.getItem("notes"))||[])
    useEffect(()=>{
      localStorage.setItem("notes",JSON.stringify(notes))
    },[notes])
  return (
    <div id='app'>
    <BrowserRouter>
      <Routes>
        <Route path="/Notes-App" element={<Notes notes = {notes}/>} />
        <Route path="/create-note" element={<CreateNote setnotes={setnotes}/>} />
        <Route path="/edit-note/:id" element={<EditNote notes={notes} setnotes={setnotes}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App