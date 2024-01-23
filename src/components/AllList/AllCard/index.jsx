// AllCard.js
import style from "./style.module.scss"

export const AllCard = ({ title, message, category, id, removeNote }) => {
  return (
    <div className={`${style.todoCard} 
    ${category === "homework" ? style.blue : style.orange}`}>

      <h3 className="title two">{title}</h3>
      <p className="paragraph">{message}</p>

      <button onClick={() => removeNote(id)} className="btn small">delete</button>
        
      
    </div>
  );                                                                                                                          
};
