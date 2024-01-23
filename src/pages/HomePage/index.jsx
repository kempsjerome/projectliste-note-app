

import React from "react";
 import { AllForm} from "../../components/AllForm";
import { AllList } from "../../components/AllList";
import style from "./style.module.scss"

export const HomePage = ({listNotes ,addNote,removeNote}) => {
  return (
    <main className="container1">
      <div className={style.flexBox}>

        
      <AllForm addNote={addNote}/>
      <AllList listNotes ={listNotes} removeNote={removeNote}/>

      </div>

    </main>
  );
};
