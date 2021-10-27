import "./App.css";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <SignUp />
        </div>
        <div className="col-md-7">
          <img
            className="container img-fluid w-100"
            src="Image/Sign-up.svg"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
