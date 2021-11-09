import { Container, Card, CardContent, TextField } from "@material-ui/core";
import { Field, Form, Formik, FormikValues, FormikConfig } from "formik";
import React from "react";
// import {CheckboxWithLabel} from "formik-material-ui"
import { object, mixed, number } from "yup";

function Page4() {
  
  return (
    <>
      <Container>
        <Card className="my-4">
          <CardContent>
            <Formik validationSchema={object({
              money: mixed().when("millionare", {
                is: true, then: number().required().min(1_000_000),
              otherwise: number().required( )})
            })} initialValues={{ firstName: "", lastName: "", millionare: false, money: 0, description: "" }} onSubmit={() => { }}>
              <Form autoComplete="off">
                <div><Field name="firstName" component={TextField} label="First Name"/>
                <Field name="lastName" component={TextField} label="Last Name"/>
                <Field name="millionare" type="checkbox"  Label={{ label:"I am a Millionare" }}/></div>
                      <div><Field name="money" type="number" component={TextField} label="All the money i have"/></div>
                      <div><Field name="description" component={TextField} label="Description"/></div>

                
              </Form>
          </Formik>
          </CardContent>
    
        </Card>
      </Container>
    </>
  );
}



export default Page4;
