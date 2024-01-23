import style from "./style.module.scss"
export const Textarea = ({ label, id, placeholder, value, setValue }) => {
    return (
      <div className={style.textareaBox}>
        <label htmlFor={id}>{label}</label>
        <textarea
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    );
  };
  