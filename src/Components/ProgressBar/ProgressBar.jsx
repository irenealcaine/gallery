import useStorage from "../../Hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(url, progress);

  return <div className="progress-bar">progress</div>;
};

export default ProgressBar;
