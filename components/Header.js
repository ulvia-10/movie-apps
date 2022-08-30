import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="w-full bg-gradient-to-r from-slate-800 to-slate-700  fixed h-[60px]">
      <Link href="/Home">
        <div className="flex gap-2 justify-center items-center h-full max-w-xl cursor-pointer active:scale-120">
          <h1 className="text-white font-extrabold text-2xl">WATCHING </h1>
          <span className="text-red-700 font-extrabold text-2xl">ME</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
