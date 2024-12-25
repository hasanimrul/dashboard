import React, { useState } from "react";
import { Link } from "react-router";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarItems = [
    {
      title: "Home",
      icon: "/assets/svg/home.svg",
    },
    {
      title: "Team",
      icon: "/assets/svg/team.svg",
    },
    {
      title: "Hire & Onboard",
      icon: "/assets/svg/hire.svg",
    },
    {
      title: "Payroll",
      icon: "/assets/svg/payroll.svg",
    },
    {
      title: "Time Tracking",
      icon: "/assets/svg/time.svg",
    },
    {
      title: "Benefits",
      icon: "/assets/svg/benefits.svg",
    },
    {
      title: "Notification",
      icon: "/assets/svg/Notification.svg",
    },
    {
      title: "Settings",
      icon: "/assets/svg/Setting.svg",
    },
  ];

  return (
    <div className="relative">
      {/* Toggle Button for Small Devices */}
      <button
        className="md:hidden lg:hidden flex items-center gap-2 absolute top-1 left-2 text-black dark:text-white z-50 w-full"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <p className="">Click to open sidebar</p>
      </button>

      <div
        className={`lg:w-64 md:w-64 w-full h-full md:flex lg:flex flex-col border-r border-gray-200 dark:border-gray-400 text-black fixed md:relative lg:relative top-0 left-0 bg-white dark:bg-gray-800 z-50 ${
          isSidebarOpen ? "block" : "hidden"
        } `}
      >
        <button
          className="md:hidden lg:hidden p-4 text-black dark:text-white z-50"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center justify-between w-full py-6 px-4"
        >
          <svg
            width="48"
            height="46"
            viewBox="0 0 48 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.6254 25.2106C29.9538 27.229 34.4211 28.2312 38.1968 28.034C38.2196 28.0329 38.2413 28.0306 38.2642 28.0291L38.5352 1.19167C38.5447 0.242786 37.4854 -0.327381 36.6991 0.203582L14.1242 15.4337C15.9531 18.9182 20.1764 22.6692 25.6254 25.2106Z"
              fill="#D9F27E"
            />
            <path
              d="M37.2537 30.6108C33.3158 30.6108 28.85 29.5306 24.5463 27.524C18.6094 24.7554 14.1448 20.8068 11.9985 16.8678L0.52015 24.6115C-0.376588 25.2163 -0.05191 26.609 1.02029 26.7548L20.2963 29.3761C21.4306 29.5302 22.4708 30.0901 23.2244 30.9518L36.0307 45.5954C36.7429 46.4095 38.0838 45.9136 38.0948 44.8319L38.2387 30.5861C37.914 30.6009 37.5863 30.6108 37.2537 30.6108Z"
              fill="#D9F27E"
            />
            <path
              d="M37.2537 28.5784C33.3158 28.5784 28.8496 27.4982 24.5463 25.4916C14.4211 20.7696 8.56719 12.616 11.2193 6.92878C13.8719 1.24158 23.881 0.485667 34.0062 5.20762C37.3188 6.75217 40.3211 8.75537 42.6882 11.0006C43.1997 11.4859 43.221 12.2936 42.7361 12.8052C42.2508 13.3163 41.4431 13.338 40.9316 12.8527C38.7617 10.7943 35.9934 8.95063 32.9272 7.52102C24.3937 3.54128 15.512 3.76394 13.5327 8.00784C11.5539 12.2514 17.0915 19.1984 25.6254 23.1785C29.9538 25.197 34.4181 26.2006 38.1968 26.0016C41.6863 25.8189 44.1094 24.6435 45.0198 22.6917C45.9691 20.6566 45.0506 18.3325 44.1132 16.7408C43.7554 16.1337 43.9575 15.3511 44.565 14.9933C45.1724 14.6356 45.955 14.838 46.3124 15.4451C48.0773 18.441 48.4401 21.398 47.3332 23.7708C46.0049 26.6189 42.8077 28.3169 38.3301 28.551C37.9765 28.5692 37.6172 28.5784 37.2537 28.5784Z"
              fill="#D9F27E"
            />
          </svg>
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-semibold dark:text-white">HUREN</h1>
            <p className="text-sm text-gray-500 mt-1">Human Resource</p>
          </div>
        </Link>

        {/* Menu Section */}
        <div className="px-3 flex flex-col h-full">
          <h4 className="text-sm font-medium text-gray-500 dark:text-white px-3 mb-4">
            MENU
          </h4>

          {/* Navigation Items */}
          <nav className="space-y-1">
            {sidebarItems.slice(0, 6).map((item, i) => {
              return (
                <a
                  key={i}
                  href="/"
                  className={`flex items-center gap-3  px-3 py-3 text-gray-600 dark:hover:text-gray-600 dark:text-white rounded-lg hover:bg-[#D9F27E] hover:border-r-4 hover:border-black hover:dark:border-white hover:dark:font-bold hover:font-bold hover:text-black group`}
                >
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className="group-hover:invert"
                  />
                  <span className="text-[14px]">{item.title}</span>
                </a>
              );
            })}
          </nav>

          <nav className="space-y-1 mt-20">
            {sidebarItems.slice(6, 8).map((item, i) => {
              return (
                <a
                  key={i}
                  href="/"
                  className={`flex items-center gap-3 px-3 py-3 text-gray-600 dark:hover:text-gray-600 dark:text-white rounded-lg hover:bg-[#D9F27E] hover:border-r-4 hover:border-black  hover:dark:border-white hover:dark:font-bold hover:font-bold hover:text-black  group`}
                >
                  <img
                    className="group-hover:invert invert-0"
                    src={item.icon}
                    alt={`${item.title} icon`}
                  />
                  <span className="text-[14px]">{item.title}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* User Profile */}
        <div className="mt-auto p-2 border-t border-gray-200 dark:border-gray-400">
          <div className="flex items-center justify-between p-2 bg-[#F9FAF5] dark:bg-gray-700 rounded-lg cursor-pointer">
            <div className="flex items-center">
              <img
                src="/assets/img/ariyan-rooben.png"
                alt="Profile"
                className="w-10 h-10 rounded mr-3"
              />
              <div>
                <div className="font-medium whitespace-nowrap dark:text-white">
                  Ariyan Rooben
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-300">
                  Web Designer
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <svg
                className="w-4 h-4 dark:invert"
                fill="none"
                stroke="#222222"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>

              <svg
                className="w-4 h-4 dark:invert"
                fill="none"
                stroke="#222222"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Upgrade Card */}
        <div className="p-4">
          <div className="bg-gray-900 rounded-xl p-4 text-white text-center">
            <h3 className="text-lg font-semibold mb-4">
              Upgrade to pro for get all features
            </h3>
            <img
              src="/assets/img/fly-toon.png"
              alt="Upgrade illustration"
              className="mx-auto mb-4"
            />
            <button className="w-full py-2 px-4 bg-[#E5F7BD] text-black rounded-lg font-medium hover:bg-[#d8f09e] transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
