import "./App.css";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page2 from "./Components/Page2";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/">
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-5 my-4 mx-2">
                <SignUp />
              </div>
              <div className="col-md-6 my-4 mx-4">
                <img
                  className="container  w-100 my-4"
                  src="Image/Sign-up.svg"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </Route>
        <Route exact path="/page2">
          <Page2 />
        </Route>
      </Router>
    </>
  );
}

export default App;
