import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    var selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setError("Selecciona una imagen (png o jpeg)");
    }
  };

  return (
    <form className="form">
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default Form;
