'use client';
import React from "react";
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("We don't know who you are without this.").min(2, "We don't think this is your email"),
  password: Yup.string().required('You forgot your password.'),
});

const LoginForm: React.FC = () => {
  const handleSubmit = (values: Yup.InferType<typeof LoginSchema>) => {
    console.log("Login form submitted", values);
  }

  return (
    <div className="flex gap-0">
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <Field name="username" placeholder="Username" />
          <Field name="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;