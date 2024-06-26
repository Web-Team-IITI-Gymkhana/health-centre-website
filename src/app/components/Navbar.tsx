import React, { useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const Menu = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Gallery', path: '/Gallery' },
    { id: 4, name: 'Contact Us', path: '/Contact' },
    { id: 6, name: 'Feedback Form', path: '/ContactForm' },
  ];

  const handleSignInRedirect = () => {
    window.location.href = '/login';
  };

  const isAdmin = session?.user?.email === 'chandakashmi004@gmail.com';

  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/';
  };

  return (
    <div className="bg-blue-300 shadow-md w-full">
      <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto w-full">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
          <span className="text-blue-800">HEALTH</span>
          <span className="text-blue-500"> CENTER</span>
        </h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="w-6 h-6 text-black" />
            ) : (
              <MenuIcon className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
        <ul className="hidden md:flex gap-4 lg:gap-8">
          {Menu.map((item) => (
            <li key={item.id} className="hover:text-purple-800 cursor-pointer hover:scale-105 transition-all ease-in-out">
              <Link href={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
          {isAdmin && (
            <li className="hover:text-purple-800 cursor-pointer hover:scale-105 transition-all ease-in-out">
              <Link href="/admin">
                Admin
              </Link>
            </li>
          )}
        </ul>
        <div className="hidden md:block">
          {status === "authenticated" ? (
            <button
              onClick={handleSignOut}
              className="bg-slate-900 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-md"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={handleSignInRedirect}
              className="bg-slate-900 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-md"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
      {isOpen && (
        <ul className="md:hidden bg-blue-300 p-4 space-y-2">
          {Menu.map((item) => (
            <li key={item.id} className="hover:text-purple-800 cursor-pointer hover:scale-105 transition-all ease-in-out py-2">
              <Link href={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
          {isAdmin && (
            <li className="hover:text-purple-800 cursor-pointer hover:scale-105 transition-all ease-in-out py-2">
              <Link href="/admin">
                Admin
              </Link>
            </li>
          )}
          <li className="py-2">
            {status === "authenticated" ? (
              <button
                onClick={handleSignOut}
                className="bg-slate-900 text-white px-6 py-2 rounded-md w-full"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={handleSignInRedirect}
                className="bg-slate-900 text-white px-6 py-2 rounded-md w-full"
              >
                Sign In
              </button>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
