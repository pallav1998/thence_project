import Image from "next/image";
import React from "react";
import Product_Logo from "../../../Images/Product_Logo.png";
import FormComponent from "./_components/FormComponent";
import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-[100vh] bg-white p-4 text-black">
      <div className="flex p-4 justify-between items-center">
        <Image
          className="ml-8 h-8"
          src={Product_Logo}
          height={40}
          width={130}
          alt="Product_Logo"
        />

        <button className="white_button">
          <Link href="/">X</Link>
        </button>
      </div>

      <div className="justify-center flex flex-col items-center text-center mt-20">
        <p className="text-orange-500 text-3xl font-serif">Registration Form</p>
        <h1 className="text-6xl text-center mb-8 w-1/2">
          Start your Success Journey here!
        </h1>

        <FormComponent />
      </div>
    </div>
  );
}
