import React from "react";
import {
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  TextField,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import { Form, Formik, Field, useField, ErrorMessage } from "formik";
import { array, boolean, mixed, number, object, string } from "yup";
import * as Yup from "yup";

const initialValues = {
  fullName: "",
  initialInvestment: 0,
  investmentRisk: [],
  commentAboutInvestmentRisk: "",
  dependents: -1,
  acceptedTermsAndConditions: false,
};

function Page3() {
  return (
    <>
      <div className="container my-4">
        <Card>
          <CardContent>
            <Typography variant="h5"> New Account </Typography>

            <Formik
              validationSchema={object({
                fullName: string().required("Required Filled!").min(2).max(100),
                initialInvestment: number()
                  .required("Required Filled!")
                  .min(100),
                dependents: number().required().min(0).max(5),
                acceptedTermsAndConditions: boolean().oneOf([true]),
                investmentRisk: array(
                  string().oneOf(["High", "Medium", "Low"])
                ).min(1),
                commentAboutInvestmentRisk: mixed().when("investmentRisk", {
                  is: "High",
                  then: string().required().min(20).max(200),
                  otherwise: string().min(20).max(100),
                }),
              })}
              initialValues={initialValues}
              onSubmit={(values, formikHelpers) => {
                console.log(values);
                console.log(formikHelpers);
              }}
            >
              {({ values, errors, touched, isSubmitting, isValidating }) => (
                <Form className="text-center my-4">
                  <Box marginBottom={2}>
                    <FormGroup>
                      <Field name="fullName" as={TextField} label="Full Name" />
                      <ErrorMessage name="fullName" />
                      {/* {touched.fullName && errors.fullName ? errors.fullName: null } */}
                    </FormGroup>
                  </Box>
                  <FormGroup>
                    <Field
                      className="my-2"
                      name="initialInvestment"
                      type="number"
                      as={TextField}
                      label="Initial Investment"
                    />{" "}
                    <ErrorMessage name="initialInvestment" />
                  </FormGroup>

                  {/* <FormControlLabel control={<Checkbox />} label="Secondary" value="High"  /> */}
                  <Box marginBottom={2}>
                    <h6 className="my-4 text-start"> Select Risk Level:</h6>
                    <FormGroup className="my-2">
                      <Field
                        className="mx-2"
                        name="investmentRisk"
                        value="High"
                        type="checkbox"
                        label="High"
                      />
                      <Field
                        className="mx-2 my-2"
                        name="investmentRisk"
                        value="Medium"
                        type="checkbox"
                      />
                      <Field
                        className="mx-2"
                        name="investmentRisk"
                        value="Low"
                        type="checkbox"
                      />{" "}
                    </FormGroup>
                    <ErrorMessage name="investmentRisk" />
                  </Box>
                  <FormGroup>
                    {" "}
                    <Field
                      name="commentAboutInvestmentRisk"
                      as={TextField}
                      multiline
                      // rows={3}
                      // rowsMax={10}
                      label="Comments"
                    />{" "}
                    <ErrorMessage name="commentAboutInvestmentRisk" />
                  </FormGroup>
                  <h6 className="my-4 text-start"> Dependents:</h6>
                  <FormGroup>
                    <Field name="dependents" as={TextField} select>
                      <MenuItem value={-1}>Select..</MenuItem>
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Field>{" "}
                    <ErrorMessage name="dependents" />
                  </FormGroup>
                  <h6 className="my-4 text-start">Terms and Conditons:</h6>
                  <FormGroup className="my-2 text-center">
                    <Field name="acceptedTermsAndConditions" type="checkbox" />{" "}
                    <ErrorMessage name="acceptedTermsAndConditions" />
                  </FormGroup>
                  <Button type="submit" disabled={isSubmitting || isValidating}>
                    Submit
                  </Button>

                  <pre>{JSON.stringify(errors, null, 4)}</pre>
                  <pre>{JSON.stringify(values, null, 4)}</pre>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Page3;
