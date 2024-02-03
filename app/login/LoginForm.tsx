"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Working");
    setIsLoading(true);
    console.log(data);
  };

  return (
    <>
      <Heading title="Sign in to Mina~Shop" />
      <Button
        outline
        label="Continue with Google"
        icon={AiOutlineGoogle}
        onClick={() => console.log("Google")}
      />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />

      <Button
        label={isLoading ? "Loading" : "Login"}
        onClick={handleSubmit(onSubmit)}
      />

      <p className="text-sm text-center">
        Don't have an account?{" "}
        <Link href="/register" className="underline">
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default LoginForm;