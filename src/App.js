import "./App.css";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5 my-4 mx-4">
            <SignUp />
          </div>
          <div className="col-md-6 my-4 mx-4">
            <img
              className="container img-fluid w-100"
              src="Image/Sign-up.svg"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
