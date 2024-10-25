import React from "react";

export const FormGroup: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full justify-center" {...props}>
      {children}
    </div>
  );
}