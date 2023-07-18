import "./Form.css";
import { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

const Form = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    var selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
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
        {file && <div className="name">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default Form;
