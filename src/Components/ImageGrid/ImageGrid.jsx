import useFirestore from "../../Hooks/useFirestore";
import "./ImageGrid.css";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => (
          <div
            whileHover={{ opacity: 1 }}
            className="image-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img src={doc.url} alt="uploaded pic" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
