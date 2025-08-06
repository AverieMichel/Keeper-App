import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { Zoom } from '@mui/material';

function CreateArea(props) {
  const [createNote, setCreateNote] = useState({
    title: '',
    content: ''
  });

  const [isExpanded, setExpanded] = useState(false);

  function newNote(event) {
    const {name, value} = event.target;
    setCreateNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function expand() {
    setExpanded(true);
  }

  function submitNote(event) {
    props.onAdd(createNote);
    setCreateNote({
      title:'',
      content:''
    });
    // console.log(createNote)
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && 
        <input 
        onChange={newNote} 
        value={createNote.title} 
        name="title" 
        placeholder="Title" />}

        <textarea
         onChange={newNote} 
         value={createNote.content} 
         onClick={expand}
         name="content" 
         placeholder="Take a note..." 
         rows= {isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
