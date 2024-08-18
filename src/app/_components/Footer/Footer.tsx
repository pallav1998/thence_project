import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex p-6 border-2 bg-stone-200 rounded-3xl justify-between items-center">
      <p>© Talup 2024. All right Reserved.</p>
      <div>
        <Link href="/" className="underline mr-8">
          Terms & Condition
        </Link>
        <Link href="/" className="underline">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
