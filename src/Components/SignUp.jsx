import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";

function SignUp() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
    >
      {(formik) => (
        <div className="my-4">
          <strong>
            {" "}
            <h1 className="my-4 font-weight-bold-display-4 text-center">
              SIGN-UP
            </h1>
          </strong>

          <Form>
            <strong>
              {" "}
              <TextField label="First Name: " name="firstName" type="text" />
            </strong>
            <strong>
              {" "}
              <TextField label="Last Name: " name="lastName" type="text" />
            </strong>
            <strong>
              <TextField label="Email: " name="email" type="text" />
            </strong>
            <strong>
              {" "}
              <TextField label="Password: " name="password" type="text" />
            </strong>
            <strong>
              {" "}
              <TextField
                label="Confirm Password: "
                name="confirmPassword"
                type="text"
              />
            </strong>
            <strong>
              <button className="btn btn-dark mt-3 " type="submit">
                Register
              </button>
            </strong>
            <strong>
              <button className="btn btn-danger mt-3 ml-3 mx-2" type="reset">
                Reset
              </button>
            </strong>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default SignUp;
