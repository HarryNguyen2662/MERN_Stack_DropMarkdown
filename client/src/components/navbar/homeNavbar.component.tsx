import { Link } from "react-router-dom";
import { Logo } from "../logo/logo.component";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const HomeNavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-500 to-yellow-500 animate-pulse py-4 px-4 md:px-0">
      <div className="container mx-auto lg:flex sm:px-6 lg:px-8 flex gap-3 items-center justify-between">
        <Link to="/">
          <div className="text-white drop-shadow-xl animate-bounce">
            <Logo />
          </div>
        </Link>

        <div className="self-end gap-6 hidden lg:flex justify-end">

          <Link
            className="text-white drop-shadow-md hover:scale-110 hover:text-yellow-300 transition ease-in-out"
            to="/login">
            Login
          </Link>

          <Link
            className="text-pink-200 drop-shadow-md hover:scale-110 hover:text-blue-400 transition ease-in-out"
            to="/signup">
            SignUp
          </Link>

          <Link
            className="text-yellow-300 drop-shadow-md hover:scale-110 hover:text-pink-500 transition ease-in-out"
            to="/code">
            Code
          </Link>

          <Link
            className="text-blue-400 drop-shadow-md hover:scale-110 hover:text-yellow-200 transition ease-in-out"
            to="/disclaimer">
            Disclaimer
          </Link>

        </div>

        <div className="text-right lg:hidden">

          <Menu
            as="div"
            className="relative inline-block text-left bg-white bg-opacity-20 backdrop-blur-sm rounded-full shadow-lg ring-2 ring-pink-500 ring-opacity-50 transition duration-150 ease-in-out hover:ring-yellow-500 focus:outline-none" >

            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-full bg-white bg-opacity-10 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-20">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 animate-spin">

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />

                </svg>

              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">

              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                <div className="px-1 py-1 ">

                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/disclaimer"
                        className={`${active ? "bg-pink-500 text-white" : "text-gray-900"} 
                        group flex w-full items-center rounded-md px-2 py-2 text-sm transition ease-in-out hover:scale-105 hover:bg-yellow-500 hover:text-gray-900`}>
                        Disclaimer
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/code"
                        className={`${active ? "bg-blue-500 text-white" : "text-gray-900"}
                        group flex w-full items-center rounded-md px-2 py-2 text-sm transition ease-in-out hover:scale-105 hover:bg-pink-500 hover:text-gray-900`}>
                        Code
                      </Link>
                    )}
                  </Menu.Item>

                </div>

                <div className="px-1 py-1">

                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/login"
                        className={`${active ? "bg-yellow-400 text-white" : "text-gray-900"}
                        group flex w-full items-center rounded-md px-2 py-2 text-sm transition ease-in-out hover:scale-105 hover:bg-blue-400 hover:text-white`}>
                        Sign In
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/signup"
                        className={`${active ? "bg-pink-500 text-white" : "text-gray-900"}
                        group flex w-full items-center rounded-md px-2 py-2 text-sm transition ease-in-out hover:scale-105 hover:bg-yellow-500 hover:text-gray-900`}>
                        Sign Up
                      </Link>
                    )}
                  </Menu.Item>

                </div>

              </Menu.Items>

            </Transition>

          </Menu>

        </div>

      </div>
    </nav>
  );
};