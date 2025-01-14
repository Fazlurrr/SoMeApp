"use client";
import Link from "next/link";
import React from "react";
import { useTheme } from "../ThemeProvider";
import { Button } from "@nextui-org/react";
import { IoSunny, IoMoon } from "react-icons/io5";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="top-0 w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="font-bold text-xl">
          <Link href="/">SoMeApp</Link>
        </div>
        <div className="flex space-x-24">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/register" className="text-gray-700 hover:text-gray-900">
            Register
          </Link>
          <Link href="/login" className="text-gray-700 hover:text-gray-900">
            Login
          </Link>
        </div>
        <div>
          <Button onPress={toggleTheme}>
            {theme === "light" ? <IoMoon /> : <IoSunny />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
