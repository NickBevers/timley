import React, { ComponentProps } from "react";
import { Field, ErrorMessage } from "formik";

export const FormGroup: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div className="flex flex-col gap-1 w-full justify-center" {...props}>
      {children}
    </div>
  );
}

export const FormField: React.FC<ComponentProps<typeof Field>> = ({...props}) => {
  return <Field {...props} className="rounded-sm py-2 px-4 outline-none border-[1px] w-full" />
}

export const FormLabel: React.FC<React.HTMLProps<HTMLLabelElement>> = ({ children, ...props }) => {
  return (
    <label className="font-medium pl-1" {...props}>
      {children}
    </label>
  );
}

export const FormError : React.FC<ComponentProps<typeof ErrorMessage>> = ({ ...props }) => {
  return <ErrorMessage {...props} >{
    (msg) => <div className="text-danger font-semibold pl-1">{msg}</div>
  }</ErrorMessage>
}