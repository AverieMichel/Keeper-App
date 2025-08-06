import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  //array to store the notes object
  const [notesArray, setNotesArray] = useState([]);
  //function to add the note to the array
  function addNewNote (createNote) {
    // console.log('adding new note')
    setNotesArray((prevNotes)=>{
      return [...prevNotes, createNote]
    });
    console.log(notesArray);
  }



  function deleteNote(id) {
    setNotesArray((prevNotes)=>{
      return prevNotes.filter((note, index)=>{
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNewNote} />
      {/* mapping through the notesArray to dipsplay each object seperately and send over each value
      i.e the index of each item, the title and the content. */}
      {/* {notesArray.map((noteItem, index)=>{
        <Note onDelete={deleteNote} key={index} id={index} title={noteItem.title} content={noteItem.content} />
      })} */}
        {notesArray.map((noteItem, index) => (
        <Note
          onDelete={deleteNote}
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
