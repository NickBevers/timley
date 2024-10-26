'use client';
import React from "react";
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Button from "../button/Button";
import { FormGroup, FormField, FormLabel, FormError } from "./FormComponents";
import { useRouter } from 'next/navigation';

const RegisterSchema = Yup.object().shape({
  firstname: Yup.string().required('What should we call you?').min(1, "Sorry, we didn't think your name was this short.").max(50, 'Your name is too great for our systems to handle!'),
  lastname: Yup.string().required('Please provide your lastname as well').min(2, "Sorry, we didn't think your name was this short.").max(80, 'Your name is too great for our systems to handle!'),
  email: Yup.string().required("We don't know who you are without this.").min(2, "We don't think this is your email"),
  password: Yup.string().required('You forgot your password.'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
});

const LoginForm: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (values: Yup.InferType<typeof RegisterSchema>) => {
    console.log("Login form submitted", values);
  }

  return (
    <div className="h-full flex grow items-center justify-center">
      <Formik
        initialValues={{ firstname: '', lastname: '',  email: '', password: '', confirmPassword: ''}}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          handleSubmit(values as Yup.InferType<typeof RegisterSchema>);
        }}
      >
        <Form className="flex flex-col gap-4 lg:gap-8 3xl:gap-12 w-3/5 h-fit mx-auto justify-center">
          <h2>Register</h2>

          <div className="flex gap-4">
            <FormGroup>
              <FormLabel htmlFor="firstname">Firstname</FormLabel>
              <FormField name="firstname" placeholder="John" className="py-2 px-4 outline-none border-[1px] w-full"/>
              <FormError name="firstname">{msg => <div>{msg}</div>}</FormError>
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="lastname">Lastname</FormLabel>
              <FormField name="lastname" placeholder="Doe"/>
              <FormError name="lastname">{msg => <div>{msg}</div>}</FormError>
            </FormGroup>
          </div>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormField name="email" placeholder="hello@timley.com"/>
            <FormError name="email">{msg => <div>{msg}</div>}</FormError>
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormField name="password" placeholder="Password" type="password" />
            <FormError name="password">{msg => <div>{msg}</div>}</FormError>
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="confirmPassword">Confirm password</FormLabel>
            <FormField name="confirmPassword" placeholder="Password (again)" type="password" />
            <FormError name="confirmPassword">{msg => <div>{msg}</div>}</FormError>
          </FormGroup>

          <div className="flex flex-col gap-0">
            <Button type="submit" label="I want in!"/>
            <Button variant="secondary" type="button" label="I already have an account" onClick={(e) => {
              e.preventDefault();
              router.push('/login');
            }}/>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;