import React, { useState } from "react";
import Form from "./Components/Form/Form.jsx";
import ImageGrid from "./Components/ImageGrid/ImageGrid.jsx";
import Modal from "./Components/Modal/Modal.jsx";
import Title from "./Components/Title/Title.jsx";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <Form />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
