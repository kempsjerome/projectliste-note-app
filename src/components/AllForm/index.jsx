import React, { useState } from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import style from "./style.module.scss"

export const AllForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("homework")

  const submit = (e) => {
    e.preventDefault();
    if (title !== "" && message !== "") {
      addNote(title, message, category);
      setTitle("");
      setMessage("");


    }
  }



  return (
    <div className={style.formBox}>
      <h2 className="title two">Enregitre une note</h2>
      <form onSubmit={submit}>
        <Input
          label="titre"
          placeholder="titre"
          type="text"
          id="title"
          value={title}
          setValue={setTitle}
        />

        <Textarea
          label="message"
          placeholder="message"
          id="message"
          value={message}
          setValue={setMessage}

        ></Textarea>
        <select id="category" onChange={(e) => setCategory(e.target.value)}>
          <option value="homework">Homework</option>
          <option value="note">Note</option>
        </select>


        <button className="btn larger full" type="submit">Creer une note</button>
      </form>
    </div>
  );
};
