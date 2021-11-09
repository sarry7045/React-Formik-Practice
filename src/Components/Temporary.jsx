import React from "react";
import { Container, Card, CardContent, Grid, Button } from "@material-ui/core";
import {
  AiFillCaretUp,
  AiFillCaretRight,
  AiFillCaretLeft,
  AiFillCaretDown,
  AiFillPlayCircle,
} from "react-icons/ai";
import "../Components/Temporary.css";

function Temporary() {
  return (
    <>
      <Container className="my-4">
        <Card>
          <CardContent className="Heading">
            <h3 style={{ marginTop: "1rem" }} className="text-center">
              <span>I</span>XAR <span>R</span>OBOCTIC <span>S</span>OLUTIONS
            </h3>
          </CardContent>
        </Card>
      </Container>
      <Container className="text-center my-4">
        <Button
          className="startbutton text-center my-4 mx-2"
          variant="contained"
        >
          <AiFillPlayCircle />
          Start
        </Button>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-5 my-4">
              <img
                className="container  w-100 my-4"
                src="Image/image.png"
                alt="Image"
              />
            </div>
            <div className="col-md-6 my-4 mx-4">
              <h3
                className="text-center"
                style={{ marginLeft: "15rem", size: "2rem" }}
              >
                Gimbal Control's
              </h3>
              <h4
                className="text-center"
                style={{ marginLeft: "15rem", marginTop: "3rem" }}
              >
                Crawler
              </h4>

              <CardContent className="my-4 mx-4 direction">
                <Button
                  className="button1 text-center my-4 mx-2"
                  variant="contained"
                >
                  <AiFillCaretUp size="1.3rem" />
                  Top
                </Button>

                <Button
                  className="button2 text-center  mx-2"
                  variant="contained"
                >
                  <AiFillCaretRight size="1.3rem" />
                  Right
                </Button>
                <Button
                  className="button3 text-center  mx-2"
                  variant="contained"
                >
                  <AiFillCaretLeft size="1.3rem" />
                  Left
                </Button>
                <Button
                  className="button4 text-center  mx-2"
                  variant="contained"
                >
                  <AiFillCaretDown size="1.3rem" />
                  Down
                </Button>
              </CardContent>

              <h2 className="text-center" style={{ marginLeft: "15rem" }}>
                Circuit Digest
              </h2>
              <h4
                className="text-center"
                style={{ marginLeft: "15rem", marginTop: "3rem" }}
              >
                Surveillance Robot
              </h4>

              <CardContent className="my-4 mx-4 direction">
                <Button
                  className="button1 text-center my-4 mx-2"
                  variant="contained"
                >
                  <AiFillCaretUp size="1.3rem" />
                  Top
                </Button>
                <Button
                  className="button2 text-center  mx-2"
                  variant="contained"
                >
                  <AiFillCaretRight size="1.3rem" />
                  Right
                </Button>
                <Button
                  className="button3 text-center  mx-2"
                  variant="contained"
                >
                  <AiFillCaretLeft size="1.3rem" />
                  Left
                </Button>
                <Button
                  className="button4 text-center  mx-2"
                  variant="contained"
                >
                  <AiFillCaretDown size="1.3rem" />
                  Down
                </Button>
              </CardContent>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Temporary;
