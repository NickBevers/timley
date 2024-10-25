'use client';
import React from "react";
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import Button from "../button/Button";
import { FormGroup } from "./FormComponents";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("We don't know who you are without this.").min(2, "We don't think this is your email"),
  password: Yup.string().required('You forgot your password.'),
});

const LoginForm: React.FC = () => {
  const handleSubmit = (values: Yup.InferType<typeof LoginSchema>) => {
    console.log("Login form submitted", values);
  }

  return (
    <div className="h-full flex grow items-center justify-center">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          handleSubmit(values as Yup.InferType<typeof LoginSchema>);
        }}
      >
        <Form className="flex flex-col gap-4 w-3/5 h-fit mx-auto justify-center">
          <h1>Login</h1>

          <FormGroup>
            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="hello@timley.com" className="py-2 px-4 outline-none border-[1px] w-full"/>
          </FormGroup>

          <FormGroup>
            <label htmlFor="password">Password</label>
            <Field name="password" placeholder="Password" type="password" className="py-2 px-4 outline-none border-[1px] w-full" />
          </FormGroup>
          <Button type="submit" label="Log in"/>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;