import LoginForm from "@/components/forms/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2 shrink-0">
      {/* 3D STOPWATCH or SMTH */}
      <div className="h-screen flex flex-col gap-4 justify-center place-items-center bg-main text-white">
        <h1 className="max-w-[70%] text-center">Welcome to Timley</h1>
        <p className="text-left">you&apos;re just a few clicks away from managing your time.</p>
      </div>

      {/* LOGIN FORM */}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
