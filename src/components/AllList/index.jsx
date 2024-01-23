import { NoteNumber } from "../NoteNumber";
import { AllCard } from "./AllCard";
import style from "./style.module.scss"; // Correction de l'importation

export const AllList = ({ listNotes, removeNote }) => {
  console.log(listNotes);

  return (
    <div className={style.todoList}>
      <h2 className="title one">Liste de note</h2>
      <NoteNumber listNote={listNotes} />
      {listNotes.length > 0 ? (
        <ul>
          {listNotes.map((note) => {
            const { title, message, category, id } = note;
            return <AllCard key={id} id={id} title={title} message={message} category={category} removeNote={removeNote} />;
          })}
        </ul>
      ) : (
        <p>Create Your First Note</p>
      )}

    </div>
  );
};
