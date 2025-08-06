import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Note(props) {
  return (
    <div onClick={()=>{
      props.onDelete(props.id);
    }} className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button><DeleteForeverIcon/></button>
    </div>
  );
}

export default Note;
