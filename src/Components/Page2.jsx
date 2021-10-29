import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const CustomeTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomeCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomeSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

function Page2() {
  return (
    <div className="container mt-3 my-4">
      <Formik
        initialValues={{
          name: "",
          email: "",
          acceptedTerms: false,
          specialPower: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, " Must be Atleast 3 Character")
            .max(15, "Must be 15 Character or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid Email Address")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], " You Must accept Terms and Conditions"),
          specialPower: Yup.string()
            .oneOf(
              ["Flight ", "Invisibility", "Other"],
              "Invalid Special Power"
            )
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000);
        }}
      >
        {(props) => (
          <Form>
            <h1>Sign Up</h1>
            <CustomeTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Name"
            />
            <CustomeTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Name@gmail.com"
            />
            <CustomeSelect label="Special Power" name="specialpower">
              <option value="">Select a Special Power</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </CustomeSelect>
            <CustomeCheckBox name="acceptedTerms">
              I Accept Terms and Conditions
            </CustomeCheckBox>
            <button type="submit">
              {" "}
              {props.isSubmitting ? "Loading" : "Submit"}{" "}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Page2;
