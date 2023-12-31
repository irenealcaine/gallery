import "./Modal.css";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    setSelectedImg(null);
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="enlarged pic" />
    </div>
  );
};

export default Modal;
