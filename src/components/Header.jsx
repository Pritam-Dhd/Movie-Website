import React from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <div className="flex gap-4">
          <MenuItem title="home" address="/" Icon={AiFillHome} />
          <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
        </div>
        <div className="flex items-center gap-5">
          <DarkModeSwitch/>
        <Link href="/" className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-blue-600 py-1 px-2 rounded-lg">Movie DB</span>
        </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
