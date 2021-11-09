import "./App.css";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page3 from "./Components/Page3";
import { CardContent, Container } from "@material-ui/core";
import Temporary from "./Components/Temporary";
import FormValidate from "./Components/FormValidate";
import RegistrationForm from "./Components/RegistrationForm";
import { Card } from "@material-ui/core";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/">
          <Card>
            <CardContent>
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
            </CardContent>
          </Card>
        </Route>

        <Container>
          <Route exact path="/page3">
            <Page3 />
          </Route>
        </Container>

        <Route exact path="/temporary">
          <Temporary />
        </Route>

        <Route exact path="/formvalidate">
          <FormValidate />
        </Route>

        <Route exact path="/registrationform">
          <RegistrationForm />
        </Route>
      </Router>
    </>
  );
}

export default App;
