"use client";

import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
});

export default function FormComponent() {
  const [email, setemail] = useState<string>("");
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      username: usernameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
    };

    try {
      formSchema.parse(formData);
      console.log("Form data is valid:", formData);
      router.push("/success");

      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0]] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[30vw] mt-20">
      <div className="mb-8">
        <input
          type="text"
          id="username"
          name="username"
          ref={usernameRef}
          placeholder="Enter User Name"
          className="bg-slate-200 w-full h-16 rounded-full px-8 py-4 text-xl"
        />
        {errors.username && (
          <p className="text-red-600 text-lg text-left">ⓘ {errors.username}</p>
        )}
      </div>

      <div className="mb-8">
        <input
          type="text"
          id="email"
          name="email"
          ref={emailRef}
          placeholder="Enter User Email"
          onChange={(e) => setemail(e.target.value)}
          className="bg-slate-200 w-full h-16 rounded-full px-8 py-4 text-xl"
        />
        {errors.email && (
          <p className="text-red-600  text-lg text-left">ⓘ {errors.email}</p>
        )}
      </div>

      <button
        className="black_button w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={email === ""}
      >
        Submit
      </button>
    </form>
  );
}
