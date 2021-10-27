import React from "react";
import { Formik, Form} from "formik";
import TextField from "./TextField";
import * as Yup from "yup";

function SignUp() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Mus be 15 characters or less")
      .required("Required"),

    lastName: Yup.string()
      .max(15, "Mus be 15 characters or less")
      .required("Required"),

    email: Yup.string().email("Email is Invalid").required("Email Required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password Required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password much Match")
      .required("Confirm Password is Required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {formik => (
        <div className="my-4">
          <strong>
            {" "}
            <h2 className="my-4 font-weight-bold-display-4 text-center">
              SIGN-UP
            </h2>
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
              <TextField label="Password: " name="password" type="password" />
            </strong>
            <strong>
              {" "}
              <TextField
                label="Confirm Password: "
                name="confirmPassword"
                type="password"
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
