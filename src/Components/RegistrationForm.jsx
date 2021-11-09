import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
import { Card, CardContent, Typography } from "@material-ui/core";

function RegistrationForm() {
  const initialValues = {
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    date: "",
    income: "",
    about: "",
    social: [],
    hobbies: [],
    file: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    phone: yup
      .number()
      .required("Phone is Required ")
      .min(10, "Altest 10 Digit"),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .min(8)
      .required("Password is Required"),
    confirmPassword: yup
      .string()
      .required("Required!")
      .oneOf([yup.ref("password"), null], "Password Must Match"),
    gender: yup.string().required("Gender is Required!"),
    date: yup.date().required("Date of Birth is Required!"),
    income: yup.string().required("Field is Required!"),
    about: yup
      .string()
      .max(20, "Too long String")
      .min(8, "To Sort String")
      .required("About is Required!"),
    social: yup
      .array()
      .of(
        yup
          .string("String is Required!")
          .min(4, "Too Short String")
          .max(20, "Too Long String")
          .required("Required Field!")
      )
      .min(1, "Atleast one Social Media is Required!")
      .required("Required Field!"),
    hobbies: yup
      .array()
      .of(
        yup
          .string("String is Required!")
          .min(4, "Too Short String")
          .max(20, "Too Long String")
          .required("Required Field!")
      )
      .min(1, "Atleast one Hobby is Required!")
      .required("Required Field!"),
    file: yup.string().required("Upload Your Photo"),
  });

  const handleSubmit = (values) => {
    console.log("values", values);
    alert(JSON.stringify(values, null, "Message Sent"));
  };
  return (
    <>
      <Typography className="my-4 text-center" variant="h5">
        Create a New Account{" "}
      </Typography>
      <div className="container my-4">
        <div className="col-md-8 offset-md-2">
          <Card>
            <CardContent>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmit(values)}
              >
                {({ values, setFieldValue }) => (
                  <Form>
                    <label style={{ fontSize: "1.1rem" }}>Name:</label>
                    <Field name="name" className="form-control" type="text" />
                    <p className="text-danger">
                      {" "}
                      <ErrorMessage name="name" />
                    </p>

                    <br />

                    <label style={{ fontSize: "1.1rem" }}>Phone:</label>
                    <Field
                      name="phone"
                      className="form-control"
                      type="number"
                    />
                    <p className="text-danger">
                      {" "}
                      <ErrorMessage name="phone" />
                    </p>
                    <br />

                    <label style={{ fontSize: "1.1rem" }}>Password:</label>
                    <Field
                      name="password"
                      className="form-control"
                      type="password"
                    />
                    <p className="text-danger">
                      {" "}
                      <ErrorMessage name="password" />
                    </p>
                    <br />

                    <label style={{ fontSize: "1.1rem" }}>
                      Confirm Password:
                    </label>
                    <Field
                      name="confirmPassword"
                      className="form-control"
                      type="confirmPassword"
                    />
                    <p className="text-danger">
                      {" "}
                      <ErrorMessage name="confirmPassword" />
                    </p>
                    <br />

                    <label style={{ fontSize: "1.1rem" }}>Gender:</label>
                    <p className="text-danger">
                      {" "}
                      <ErrorMessage name="gender" />
                    </p>

                    <label style={{ fontSize: "1.1rem" }}>Male:</label>
                    <Field
                      name="gender"
                      className="my-2 mx-4"
                      type="radio"
                      value="Male"
                    />
                    <br />

                    <label style={{ fontSize: "1.1rem" }}>Female:</label>
                    <Field
                      name="gender"
                      className="my-4 mx-2"
                      type="radio"
                      value="Female"
                    />

                    <br />
                    <br />

                    <label style={{ fontSize: "1.1rem" }}>Date:</label>
                    <Field name="date" className="form-control" type="date" />
                    <p className="text-danger">
                      {" "}
                      <ErrorMessage name="date" />
                    </p>
                    <br />

                    <label style={{ fontSize: "1.1rem" }}>Income:</label>
                    <Field name="income" className="form-control" as="select">
                      <option value="0">0</option>
                      <option value="1">10000-20000</option>
                      <option value="10">20000-25000</option>
                      <option value="100">25000-30000</option>
                    </Field>
                    <p className="text-danger">
                      {" "}
                      <ErrorMessage name="income" />
                    </p>
                    <br />

                    <label style={{ fontSize: "1.1rem" }}>About:</label>
                    <Field
                      name="about"
                      className="form-control"
                      as="textarea"
                    />
                    <p className="text-danger">
                      {" "}
                      <ErrorMessage name="about" />
                    </p>
                    <br />

                    {/* <label style={{ fontSize: "1.1rem" }}>Social:</label>
                  <p className="text-danger">
                    {" "}
                    <ErrorMessage name="social" />
                  </p>
                  <br />
           
                  <label style={{ fontSize: "1.1rem" }}>Meta:</label>
                  <Field
                    name="social[0]"
                    className="form-control"
                    type="text"
                  />
                  <p className="text-danger">
                    {" "}
                    <ErrorMessage name="social.0" />
                  </p>
                  <br />
          
                  <label style={{ fontSize: "1.1rem" }}>Instagram:</label>
                  <Field
                    name="social[1]"
                    className="form-control"
                    type="text"
                  />
                  <p className="text-danger">
                    {" "}
                    <ErrorMessage name="social.1" />
                  </p>
                  <br /> */}

                    <input
                      type="file"
                      className="form-control "
                      onChange={(event) => {
                        setFieldValue("file", event.target.files[0]);
                      }}
                    />
                    <FieldArray
                      name="hobbies"
                      className="form-control"
                      render={(arrayHelpers) => (
                        <div>
                          {values.hobbies && values.hobbies.length > 0 ? (
                            values.hobbies.map((hobby, index) => (
                              <div key={index}>
                                <Field name={`hobbies.${index}`} />
                                <p className="text-danger">
                                  {" "}
                                  <ErrorMessage name={`hobbies.${index}`} />
                                </p>
                                <div className="container text-center">
                                  <button
                                    className="btn btn-dark mx-4 my-4"
                                    type="button"
                                    onClick={() => arrayHelpers.remove(index)}
                                  >
                                    -
                                  </button>
                                </div>
                                <div className="container text-center">
                                  <button
                                    type="button"
                                    className="btn btn-dark"
                                    onClick={() =>
                                      arrayHelpers.insert(index, "")
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="container text-center">
                              <button
                                type="button"
                                className="btn btn-dark   my-4  "
                                onClick={() => arrayHelpers.push("")}
                              >
                                Add a Hobbies
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    />
                    <p className="text-danger">
                      {" "}
                      <ErrorMessage name={"hobbies"} />
                    </p>
                    <div className="container text-center my-4">
                      <button
                        className="btn btn-primary my-4 text-right"
                        type="submit"
                      >
                        Submit Details
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;
