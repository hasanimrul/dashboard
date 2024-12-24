import React, { useEffect, useState } from "react";

const Header = ({ showBtn }) => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  console.log("window.innerWidth, showBtn", window.innerWidth, showBtn);

  return (
    <div className=" px-6 py-4 border-b dark:border-gray-400 w-full">
      <div className="max-w-7xl flex lg:flex-row md:flex-row flex-col lg:items-center items-start gap-3 justify-between">
       
          {/* Search Bar */}
          <div className="relative max-w-xl lg:w-full md:w-full">
            <input
              type="search"
              placeholder="Search"
              className="w-full px-4 py-2 pl-10 bg-[#F9FAF5] dark:bg-transparent rounded-lg border border-gray-200 dark:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16666 17.2917C4.68332 17.2917 1.04166 13.65 1.04166 9.16669C1.04166 4.68335 4.68332 1.04169 9.16666 1.04169C13.65 1.04169 17.2917 4.68335 17.2917 9.16669C17.2917 13.65 13.65 17.2917 9.16666 17.2917ZM9.16666 2.29169C5.37499 2.29169 2.29166 5.37502 2.29166 9.16669C2.29166 12.9584 5.37499 16.0417 9.16666 16.0417C12.9583 16.0417 16.0417 12.9584 16.0417 9.16669C16.0417 5.37502 12.9583 2.29169 9.16666 2.29169Z"
                  fill="#718096"
                />
                <path
                  d="M16.8 18.9917C16.7333 18.9917 16.6667 18.9833 16.6083 18.975C16.2167 18.925 15.5083 18.6583 15.1083 17.4667C14.9 16.8417 14.975 16.2167 15.3167 15.7417C15.6583 15.2667 16.2333 15 16.8917 15C17.7417 15 18.4083 15.325 18.7083 15.9C19.0083 16.475 18.925 17.2083 18.45 17.9167C17.8583 18.8083 17.2167 18.9917 16.8 18.9917ZM16.3 17.075C16.4417 17.5083 16.6417 17.725 16.775 17.7417C16.9083 17.7583 17.1583 17.6 17.4167 17.225C17.6583 16.8667 17.675 16.6083 17.6167 16.4917C17.5583 16.375 17.325 16.25 16.8917 16.25C16.6333 16.25 16.4417 16.3333 16.3333 16.475C16.2333 16.6167 16.2167 16.8333 16.3 17.075Z"
                  fill="#718096"
                />
              </svg>
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-2 bg-[#F9FAF5] dark:bg-gray-700 px-4 py-2 rounded">
            <button
              className={`px-4  py-2 rounded-lg flex items-center gap-2 ${
                theme === "light"
                  ? "bg-[#E5F5D9] text-gray-700"
                  : "text-gray-500"
              }`}
              onClick={() => toggleTheme("light")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99999 16.0416C6.66666 16.0416 3.95833 13.3333 3.95833 9.99998C3.95833 6.66665 6.66666 3.95831 9.99999 3.95831C13.3333 3.95831 16.0417 6.66665 16.0417 9.99998C16.0417 13.3333 13.3333 16.0416 9.99999 16.0416ZM9.99999 5.20831C7.35833 5.20831 5.20833 7.35831 5.20833 9.99998C5.20833 12.6416 7.35833 14.7916 9.99999 14.7916C12.6417 14.7916 14.7917 12.6416 14.7917 9.99998C14.7917 7.35831 12.6417 5.20831 9.99999 5.20831Z"
                  fill="#222222"
                />
                <path
                  d="M9.99999 19.1333C9.54166 19.1333 9.16666 18.7916 9.16666 18.3333V18.2666C9.16666 17.8083 9.54166 17.4333 9.99999 17.4333C10.4583 17.4333 10.8333 17.8083 10.8333 18.2666C10.8333 18.725 10.4583 19.1333 9.99999 19.1333ZM15.95 16.7833C15.7333 16.7833 15.525 16.7 15.3583 16.5416L15.25 16.4333C14.925 16.1083 14.925 15.5833 15.25 15.2583C15.575 14.9333 16.1 14.9333 16.425 15.2583L16.5333 15.3666C16.8583 15.6916 16.8583 16.2166 16.5333 16.5416C16.375 16.7 16.1667 16.7833 15.95 16.7833ZM4.04999 16.7833C3.83333 16.7833 3.62499 16.7 3.45833 16.5416C3.13333 16.2166 3.13333 15.6916 3.45833 15.3666L3.56666 15.2583C3.89166 14.9333 4.41666 14.9333 4.74166 15.2583C5.06666 15.5833 5.06666 16.1083 4.74166 16.4333L4.63333 16.5416C4.47499 16.7 4.25833 16.7833 4.04999 16.7833ZM18.3333 10.8333H18.2667C17.8083 10.8333 17.4333 10.4583 17.4333 9.99998C17.4333 9.54165 17.8083 9.16665 18.2667 9.16665C18.725 9.16665 19.1333 9.54165 19.1333 9.99998C19.1333 10.4583 18.7917 10.8333 18.3333 10.8333ZM1.73333 10.8333H1.66666C1.20833 10.8333 0.833328 10.4583 0.833328 9.99998C0.833328 9.54165 1.20833 9.16665 1.66666 9.16665C2.12499 9.16665 2.53333 9.54165 2.53333 9.99998C2.53333 10.4583 2.19166 10.8333 1.73333 10.8333ZM15.8417 4.99165C15.625 4.99165 15.4167 4.90831 15.25 4.74998C14.925 4.42498 14.925 3.89998 15.25 3.57498L15.3583 3.46665C15.6833 3.14165 16.2083 3.14165 16.5333 3.46665C16.8583 3.79165 16.8583 4.31665 16.5333 4.64165L16.425 4.74998C16.2667 4.90831 16.0583 4.99165 15.8417 4.99165ZM4.15833 4.99165C3.94166 4.99165 3.73333 4.90831 3.56666 4.74998L3.45833 4.63331C3.13333 4.30831 3.13333 3.78331 3.45833 3.45831C3.78333 3.13331 4.30833 3.13331 4.63333 3.45831L4.74166 3.56665C5.06666 3.89165 5.06666 4.41665 4.74166 4.74165C4.58333 4.90831 4.36666 4.99165 4.15833 4.99165ZM9.99999 2.53331C9.54166 2.53331 9.16666 2.19165 9.16666 1.73331V1.66665C9.16666 1.20831 9.54166 0.833313 9.99999 0.833313C10.4583 0.833313 10.8333 1.20831 10.8333 1.66665C10.8333 2.12498 10.4583 2.53331 9.99999 2.53331Z"
                  fill="#222222"
                />
              </svg>
              Light
            </button>
            <button
              className={`px-4  py-2 rounded-lg flex items-center gap-2 ${
                theme === "dark"
                  ? "bg-[#E5F5D9] text-gray-700"
                  : "text-gray-500"
              }`}
              onClick={() => toggleTheme("dark")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.69167 10.35C1.99167 14.6417 5.63334 18.1334 9.99167 18.325C13.0667 18.4584 15.8167 17.025 17.4667 14.7667C18.15 13.8417 17.7833 13.225 16.6417 13.4334C16.0833 13.5334 15.5083 13.575 14.9083 13.55C10.8333 13.3834 7.5 9.97503 7.48334 5.95003C7.475 4.8667 7.7 3.8417 8.10834 2.90836C8.55834 1.87503 8.01667 1.38336 6.975 1.82503C3.675 3.2167 1.41667 6.54169 1.69167 10.35Z"
                  stroke="#718096"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Dark
            </button>
          </div>

        {/* Notification & Profile */}
        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <div className=" flex items-center gap-4">
            <button className="">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="19.5"
                  stroke="#A0AEC0"
                />
                <path
                  d="M20 18.7666C19.6583 18.7666 19.375 18.4833 19.375 18.1416V15.3666C19.375 15.025 19.6583 14.7416 20 14.7416C20.3417 14.7416 20.625 15.025 20.625 15.3666V18.1416C20.625 18.4916 20.3417 18.7666 20 18.7666Z"
                  fill="#718096"
                />
                <path
                  d="M20.0167 26.9583C17.8667 26.9583 15.725 26.6167 13.6833 25.9333C12.925 25.6833 12.35 25.1417 12.1 24.4583C11.85 23.775 11.9333 22.9917 12.3417 22.3083L13.4 20.5417C13.6333 20.15 13.8417 19.4167 13.8417 18.9583V17.2083C13.8417 13.8 16.6083 11.0333 20.0167 11.0333C23.425 11.0333 26.1917 13.8 26.1917 17.2083V18.9583C26.1917 19.4083 26.4 20.15 26.6333 20.5417L27.6917 22.3083C28.0833 22.9583 28.15 23.7333 27.8917 24.4417C27.6333 25.15 27.0667 25.6917 26.35 25.9333C24.3083 26.625 22.1667 26.9583 20.0167 26.9583ZM20.0167 12.2917C17.3 12.2917 15.0917 14.5 15.0917 17.2167V18.9667C15.0917 19.6417 14.825 20.6167 14.475 21.1917L13.4167 22.9667C13.2 23.325 13.15 23.7083 13.275 24.0417C13.4 24.375 13.6833 24.625 14.0833 24.7583C17.9167 26.0333 22.1333 26.0333 25.9667 24.7583C26.325 24.6417 26.6 24.375 26.725 24.025C26.8583 23.675 26.8167 23.2917 26.625 22.9667L25.5667 21.2C25.2167 20.625 24.95 19.65 24.95 18.975V17.225C24.9417 14.5 22.7333 12.2917 20.0167 12.2917Z"
                  fill="#718096"
                />
                <path
                  d="M20 29.0833C19.1083 29.0833 18.2333 28.7167 17.6 28.0833C16.9667 27.45 16.6 26.575 16.6 25.6833H17.85C17.85 26.25 18.0833 26.8 18.4833 27.2C18.8833 27.6 19.4333 27.8333 20 27.8333C21.1833 27.8333 22.15 26.8667 22.15 25.6833H23.4C23.4 27.5583 21.875 29.0833 20 29.0833Z"
                  fill="#718096"
                />
                <rect x="28" width="12" height="12" rx="6" fill="#F96767" />
                <path
                  d="M33.9261 8.55966C33.6449 8.55966 33.3942 8.51136 33.174 8.41477C32.9553 8.31818 32.7813 8.18395 32.652 8.01207C32.5241 7.83878 32.4545 7.63778 32.4432 7.40909H32.9801C32.9915 7.54972 33.0398 7.67116 33.125 7.77344C33.2102 7.87429 33.3217 7.95241 33.4595 8.00781C33.5973 8.06321 33.75 8.09091 33.9176 8.09091C34.1051 8.09091 34.2713 8.05824 34.4162 7.9929C34.5611 7.92756 34.6747 7.83665 34.7571 7.72017C34.8395 7.60369 34.8807 7.46875 34.8807 7.31534C34.8807 7.15483 34.8409 7.01349 34.7614 6.89134C34.6818 6.76776 34.5653 6.67116 34.4119 6.60156C34.2585 6.53196 34.071 6.49716 33.8494 6.49716H33.5V6.02841H33.8494C34.0227 6.02841 34.1747 5.99716 34.3054 5.93466C34.4375 5.87216 34.5405 5.78409 34.6143 5.67045C34.6896 5.55682 34.7273 5.4233 34.7273 5.26989C34.7273 5.12216 34.6946 4.99361 34.6293 4.88423C34.5639 4.77486 34.4716 4.68963 34.3523 4.62855C34.2344 4.56747 34.0952 4.53693 33.9347 4.53693C33.7841 4.53693 33.642 4.56463 33.5085 4.62003C33.3764 4.67401 33.2685 4.75284 33.1847 4.85653C33.1009 4.95881 33.0554 5.08239 33.0483 5.22727H32.5369C32.5455 4.99858 32.6143 4.7983 32.7436 4.62642C32.8729 4.45312 33.0419 4.31818 33.2507 4.22159C33.4609 4.125 33.6918 4.0767 33.9432 4.0767C34.2131 4.0767 34.4446 4.13139 34.6378 4.24077C34.831 4.34872 34.9794 4.49148 35.0831 4.66903C35.1868 4.84659 35.2386 5.03835 35.2386 5.24432C35.2386 5.49006 35.174 5.69957 35.0447 5.87287C34.9169 6.04616 34.7429 6.16619 34.5227 6.23295V6.26705C34.7983 6.3125 35.0135 6.42969 35.1683 6.61861C35.3232 6.80611 35.4006 7.03835 35.4006 7.31534C35.4006 7.55256 35.3359 7.76562 35.2067 7.95455C35.0788 8.14205 34.9041 8.28977 34.6825 8.39773C34.4609 8.50568 34.2088 8.55966 33.9261 8.55966Z"
                  fill="#FAFAFA"
                />
              </svg>
            </button>
            <button className="">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="19.5"
                  stroke="#A0AEC0"
                />
                <path
                  d="M20.133 19.6834C20.108 19.6834 20.0913 19.6834 20.0663 19.6834C20.0247 19.675 19.9663 19.675 19.9163 19.6834C17.4997 19.6084 15.6747 17.7084 15.6747 15.3667C15.6747 12.9834 17.6163 11.0417 19.9997 11.0417C22.383 11.0417 24.3247 12.9834 24.3247 15.3667C24.3164 17.7084 22.483 19.6084 20.158 19.6834C20.1497 19.6834 20.1413 19.6834 20.133 19.6834ZM19.9997 12.2917C18.308 12.2917 16.9247 13.675 16.9247 15.3667C16.9247 17.0334 18.2247 18.375 19.883 18.4334C19.9247 18.425 20.0413 18.425 20.1497 18.4334C21.783 18.3584 23.0663 17.0167 23.0747 15.3667C23.0747 13.675 21.6913 12.2917 19.9997 12.2917Z"
                  fill="#718096"
                />
                <path
                  d="M20.1413 28.7916C18.508 28.7916 16.8663 28.375 15.6247 27.5416C14.4663 26.775 13.833 25.725 13.833 24.5833C13.833 23.4416 14.4663 22.3833 15.6247 21.6083C18.1247 19.95 22.1747 19.95 24.658 21.6083C25.808 22.375 26.4497 23.425 26.4497 24.5666C26.4497 25.7083 25.8163 26.7666 24.658 27.5416C23.408 28.375 21.7747 28.7916 20.1413 28.7916ZM16.3163 22.6583C15.5163 23.1916 15.083 23.875 15.083 24.5916C15.083 25.3 15.5247 25.9833 16.3163 26.5083C18.3913 27.9 21.8913 27.9 23.9663 26.5083C24.7663 25.975 25.1997 25.2916 25.1997 24.575C25.1997 23.8666 24.758 23.1833 23.9663 22.6583C21.8913 21.275 18.3913 21.275 16.3163 22.6583Z"
                  fill="#718096"
                />
              </svg>
            </button>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <h3 className="font-medium dark:text-white text-gray-900">
                Benjamin
              </h3>
              <p className="text-sm text-gray-500">Newyork, USA</p>
            </div>
            <button className="flex items-center gap-2">
              <img
                src="/assets/img/benjamin.png"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4533 4.77167H6.81914H3.54664C2.98664 4.77167 2.70664 5.44833 3.10331 5.845L6.12498 8.86667C6.60914 9.35083 7.39664 9.35083 7.88081 8.86667L9.02998 7.7175L10.9025 5.845C11.2933 5.44833 11.0133 4.77167 10.4533 4.77167Z"
                  fill="#718096"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;