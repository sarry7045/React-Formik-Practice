import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { AiOutlineSend } from "react-icons/ai";
import { Card, CardContent, Typography } from "@material-ui/core";

function FormValidate() {

  
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    website: "",
    comment: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is Required!"),
    email: yup
      .string()
      .required("Email is Required!")
      .email("Please Enter Valid Email"),
    password: yup.string().required("Password is Required!").min(8),
    website: yup.string().required("Website is Required!"),
    comment: yup.string().required("Comment is Required!"),
    confirmPassword: yup
      .string()
      .required("Required Field!")
      .oneOf([yup.ref("password"), null], "Password Much Match"),
  });

  const handleSubmit = (values) => {
    console.log("Values", values);
  };

  return (
    <>
      <div className="container my-4">
        <h4 className="text-center my-4">
          Form with Formik and Yup Validation
        </h4>

        <div className="col-md-8 offset-md-2">
          <Card>
            <CardContent>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {alert(JSON.stringify(values, null,"Message Sent")); handleSubmit(values) }}
              >
                <Form>
                  <div className="col-md-12 mt-4">
                    <label style={{ fontSize: "1.1rem" }}>Your Name:</label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className="form-control"
                    />
                    <p className="text-danger">
                      {" "}
                      <ErrorMessage name="name" />{" "}
                    </p>
                  </div>
                  <div className="col-md-12 mt-4">
                    <label style={{ fontSize: "1.1rem" }}>Your Email:</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className="form-control"
                    />
                    <p className="text-danger">
                      {" "}
                      <ErrorMessage name="email" />{" "}
                    </p>
                  </div>
                  <div className="col-md-12 mt-4">
                    <label style={{ fontSize: "1.1rem" }}>Your Password:</label>
                    <Field
                      type="text"
                      name="password"
                      placeholder="Enter Your Password"
                      className="form-control"
                    />
                    <p className="text-danger">
                      {" "}
                      <ErrorMessage name="password" />{" "}
                    </p>
                  </div>
                  <div className="col-md-12 mt-4">
                    <label style={{ fontSize: "1.1rem" }}>
                      Confirm Password:
                    </label>
                    <Field
                      type="text"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="form-control"
                    />
                    <p className="text-danger">
                      {" "}
                      <ErrorMessage name="confirmPassword" />{" "}
                    </p>
                  </div>
                  <div className="col-md-12 mt-4">
                    <label style={{ fontSize: "1.1rem" }}>Your Website:</label>
                    <Field
                      type="text"
                      name="website"
                      placeholder="Enter Your Website Name"
                      className="form-control"
                    />
                    <p className="text-danger">
                      {" "}
                      <ErrorMessage name="website" />{" "}
                    </p>
                  </div>
                  <div className="col-md-12 mt-4">
                    <label style={{ fontSize: "1.1rem" }}>Your Comment:</label>{" "}
                    <Field
                      type="text"
                      name="comment"
                      placeholder="Enter Your Comment"
                      className="form-control"
                    />
                    <p className="text-danger">
                      {" "}
                      <ErrorMessage name="comment" />{" "}
                    </p>
                  </div>{" "}
                  <div className="col-md-12 mt-4">
                    <button className="btn btn-primary btn-black" type="submit">
                      Submit Details
                    </button>
                  </div>
                </Form>
              </Formik>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default FormValidate;
