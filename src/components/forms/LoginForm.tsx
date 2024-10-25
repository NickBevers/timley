'use client';
import React from "react";
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Button from "../button/Button";
import { FormGroup, FormField } from "./FormComponents";
import { useRouter } from 'next/navigation';

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("We don't know who you are without this.").min(2, "We don't think this is your email"),
  password: Yup.string().required('You forgot your password.'),
});

const LoginForm: React.FC = () => {
  const router = useRouter();

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
            <FormField name="email" placeholder="hello@timley.com"/>
          </FormGroup>

          <FormGroup>
            <label htmlFor="password">Password</label>
            <FormField name="password" placeholder="Password" type="password" />
          </FormGroup>

          <div className="flex flex-col gap-0">
            <Button variant="primary" type="submit" label="Log in"/>
            <Button variant="secondary" label="First time here?" onClick={() => router.push('/register')}/>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;