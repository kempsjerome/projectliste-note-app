import style from "./style.module.scss";

export const Input = ({ label, id, type, placeholder, value, setValue }) => {
  return (
    <div className={style.inputBox}>
      <label htmlFor={id}>{label}</label>
      <input 
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
