"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Product_Logo from "../../../Images/Product_Logo.png";
import { useRouter } from "next/navigation";

export default function page() {
  const [count, setCount] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [count]);

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
      </div>

      <div className="justify-center flex flex-col items-center text-center mt-20">
        <Image
          className="mb-12"
          src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png"
          height={100}
          width={100}
          alt="Product_Logo"
        />
        <p className="text-orange-500 text-3xl font-serif">
          Successfully Submitted
        </p>
        <h1 className="text-6xl text-center mb-8">Congratulations</h1>
        <p className="text-3xl font-serif w-1/2 text-slate-500">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates.
        </p>

        <p className="text-xl text-slate-700 mt-72">
          Redirecting you to HomePage in <b>{count} Seconds</b>
        </p>
      </div>
    </div>
  );
}
