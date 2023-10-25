//styles
import "./spinner.css";

//components
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <Spinner className="spinner" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loading;
