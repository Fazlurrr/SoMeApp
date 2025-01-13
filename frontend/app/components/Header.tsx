import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 w-full flex items-center justify-evenly top-0 bg-opacity-80 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/register">
              <p className="cursor-pointer hover:text-gray-300">Register</p>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <p className="cursor-pointer hover:text-gray-300">Login</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
