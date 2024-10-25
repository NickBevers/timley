import React from "react";
import RegisterForm from "@/components/forms/RegisterForm";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2">
      {/* REGISTER FORM */}
      <RegisterForm />

      {/* IMAGE/COLOUR */}
      <div className="h-screen flex flex-col gap-4 justify-center place-items-center bg-teal-700 text-white">
        <h1 className="max-w-[70%] text-center">Welcome to Timley</h1>
        <p className="text-left text-xl">you&apos;re just a few clicks away from managing your time.</p>
      </div>
    </div>
  );
};

export default LoginPage;
