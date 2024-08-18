import Image from "next/image";
import React from "react";
import Product_Logo from "../../../../Images/Product_Logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex p-4 border-2 border-gray_border_color rounded-full justify-between items-center">
      <Image
        className="ml-8 h-8"
        src={Product_Logo}
        height={40}
        width={130}
        alt="Product_Logo"
      />
      <div>
        <button className="white_button mr-4">
          <Link href="/login">Get Projects</Link>
        </button>
        <button className="black_button">
          <Link href="/login"> Onboard Talent</Link>
        </button>
      </div>
    </div>
  );
}
