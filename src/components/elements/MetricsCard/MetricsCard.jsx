import React from "react";

const MetricsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 mb-8 w-full">
      {/* Total Applied Card */}
      <div className="dark:bg-gray-800 p-6 rounded-xl shadow-sm w-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#E5F9A9] p-2 rounded-lg">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4999 2.33328C7.44328 2.33328 4.95828 4.81828 4.95828 7.87495C4.95828 10.8733 7.30328 13.3 10.36 13.405C10.4533 13.3933 10.5466 13.3933 10.6166 13.405C10.64 13.405 10.6516 13.405 10.6749 13.405C10.6866 13.405 10.6866 13.405 10.6983 13.405C13.685 13.3 16.03 10.8733 16.0416 7.87495C16.0416 4.81828 13.5566 2.33328 10.4999 2.33328Z"
                  fill="#222222"
                />
                <path
                  d="M16.4267 16.5083C13.1717 14.3383 7.86332 14.3383 4.58499 16.5083C3.10332 17.5 2.28665 18.8417 2.28665 20.2767C2.28665 21.7117 3.10332 23.0417 4.57332 24.0217C6.20665 25.1183 8.35332 25.6667 10.5 25.6667C12.6467 25.6667 14.7933 25.1183 16.4267 24.0217C17.8967 23.03 18.7133 21.7 18.7133 20.2533C18.7017 18.8183 17.8967 17.4883 16.4267 16.5083Z"
                  fill="#222222"
                />
                <path
                  d="M23.3216 8.56334C23.5083 10.8267 21.8983 12.81 19.67 13.0783C19.6583 13.0783 19.6583 13.0783 19.6466 13.0783H19.6116C19.5416 13.0783 19.4716 13.0783 19.4133 13.1017C18.2816 13.16 17.2433 12.7983 16.4616 12.1333C17.6633 11.06 18.3516 9.45 18.2116 7.7C18.13 6.755 17.8033 5.89167 17.3133 5.15667C17.7566 4.935 18.27 4.795 18.795 4.74834C21.0816 4.55 23.1233 6.25334 23.3216 8.56334Z"
                  fill="#222222"
                />
                <path
                  d="M25.655 19.355C25.5617 20.4867 24.8383 21.4667 23.625 22.1317C22.4583 22.7733 20.9883 23.0767 19.53 23.0417C20.37 22.2833 20.86 21.3383 20.9533 20.335C21.07 18.8883 20.3817 17.5 19.005 16.3917C18.2233 15.7733 17.3133 15.2833 16.3217 14.9217C18.9 14.175 22.1433 14.6767 24.1383 16.2867C25.2117 17.15 25.76 18.235 25.655 19.355Z"
                  fill="#222222"
                />
              </svg>
            </div>
            <span className="font-medium dark:text-white">Total Applied</span>
          </div>
          <button className="text-black dark:text-white">•••</button>
        </div>
        <div className="flex items-end justify-between gap-2">
          <div>
            <h3 className="text-4xl font-semibold mb-1 dark:text-white">920</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Applied last year were{" "}
              <span className="text-black dark:text-gray-300">780</span> <br /> candidate
            </p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xs text-gray-400 mt-2">Last Month</p>
            <div className="flex items-center text-black text-sm bg-[#F9FAF5] py-1.5 px-3 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clipRule="evenodd"
                />
              </svg>
              +2.68%
            </div>
          </div>
        </div>
      </div>
      {/* Total Invitation Card */}
      <div className="dark:bg-gray-800 p-6 rounded-xl shadow-sm w-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="border border-[#FCCE44] p-2 rounded-lg">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8333 4.08328H8.16667C4.66667 4.08328 2.33333 5.83328 2.33333 9.91662V18.0833C2.33333 22.1666 4.66667 23.9166 8.16667 23.9166H19.8333C23.3333 23.9166 25.6667 22.1666 25.6667 18.0833V9.91662C25.6667 5.83328 23.3333 4.08328 19.8333 4.08328ZM20.3817 11.1883L16.73 14.1049C15.96 14.7233 14.98 15.0266 14 15.0266C13.02 15.0266 12.0283 14.7233 11.27 14.1049L7.61833 11.1883C7.245 10.8849 7.18667 10.3249 7.47833 9.95161C7.78167 9.57828 8.33 9.50828 8.70333 9.81161L12.355 12.7283C13.2417 13.4399 14.7467 13.4399 15.6333 12.7283L19.285 9.81161C19.6583 9.50828 20.2183 9.56661 20.51 9.95161C20.8133 10.3249 20.755 10.8849 20.3817 11.1883Z"
                  fill="#FCCE44"
                />
              </svg>
            </div>
            <span className="font-medium dark:text-white">Total Invitation</span>
          </div>
          <button className="text-black dark:text-white">•••</button>
        </div>
        <div className="flex items-end justify-between gap-2">
          <div>
            <h3 className="text-4xl font-semibold mb-1 dark:text-white">54</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total invitation last year were{" "}
              <span className="text-black dark:text-gray-300">1025</span> <br /> employee
            </p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xs text-gray-400 mt-2">Last Month</p>
            <div className="flex items-center text-black text-sm bg-[#F9FAF5] py-1.5 px-3 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clipRule="evenodd"
                />
              </svg>
              +4.87%
            </div>
          </div>
        </div>
      </div>

      {/* Total Hiring Card */}
      <div className="dark:bg-gray-800 p-6 rounded-xl shadow-sm w-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="border border-[#FCCE44] p-2 rounded-lg">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.76828 1.16672H13.2533C14.0466 1.16672 14.6883 1.82005 14.6883 2.62505V4.22338C14.6883 4.80672 14.3266 5.53005 13.965 5.89172L10.8849 8.66838C10.4533 9.03005 10.1733 9.75338 10.1733 10.3367V13.4634C10.1733 13.8951 9.88162 14.4784 9.53162 14.7001L8.51662 15.3651C7.58328 15.9484 6.28828 15.2951 6.28828 14.1284V10.2667C6.28828 9.75338 5.99662 9.10005 5.71662 8.73838L2.98662 5.82172C2.62495 5.46005 2.33328 4.80672 2.33328 4.37505V2.69505C2.33328 1.82005 2.97495 1.16672 3.76828 1.16672Z"
                  fill="#FCCE44"
                />
                <path
                  d="M19.8333 2.33328H17.0333C16.7066 2.33328 16.4499 2.58995 16.4499 2.91662C16.4499 3.47662 16.4499 4.22328 16.4499 4.22328C16.4499 5.37828 15.8316 6.50995 15.2249 7.12828L12.0516 9.96328C12.0166 10.0449 11.9583 10.1616 11.9233 10.2549V13.4633C11.9233 14.5249 11.2933 15.6799 10.4299 16.2049L9.47328 16.8233C8.93661 17.1616 8.34161 17.3249 7.74661 17.3249C7.20995 17.3249 6.67328 17.1849 6.18328 16.9166C5.55744 16.57 5.09051 16.0406 4.81531 15.4203C4.69911 15.1583 4.66662 14.8695 4.66662 14.5829V11.9116C4.66662 11.7599 4.60828 11.6083 4.49162 11.5033L3.32495 10.3366C2.96328 9.96328 2.33328 10.2199 2.33328 10.7449V19.8333C2.33328 23.0533 4.94662 25.6666 8.16662 25.6666H19.8333C23.0533 25.6666 25.6666 23.0533 25.6666 19.8333V8.16662C25.6666 4.94662 23.0533 2.33328 19.8333 2.33328ZM20.9999 20.7083H12.8333C12.3549 20.7083 11.9583 20.3116 11.9583 19.8333C11.9583 19.3549 12.3549 18.9583 12.8333 18.9583H20.9999C21.4783 18.9583 21.8749 19.3549 21.8749 19.8333C21.8749 20.3116 21.4783 20.7083 20.9999 20.7083ZM20.9999 16.0416H15.1666C14.6883 16.0416 14.2916 15.6449 14.2916 15.1666C14.2916 14.6883 14.6883 14.2916 15.1666 14.2916H20.9999C21.4783 14.2916 21.8749 14.6883 21.8749 15.1666C21.8749 15.6449 21.4783 16.0416 20.9999 16.0416Z"
                  fill="#FCCE44"
                />
              </svg>
            </div>
            <span className="font-medium dark:text-white">Total Hiring</span>
          </div>
          <button className="text-black dark:text-white">•••</button>
        </div>
        <div className="flex items-end justify-between gap-2">
          <div>
            <h3 className="text-4xl font-semibold mb-1 dark:text-white">84</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total hiring year were <span className="text-black dark:text-gray-300">72</span>{" "}
              <br />
              hiring
            </p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xs text-gray-400 mt-2">Last Month</p>
            <div className="flex items-center text-black text-sm bg-[#F9FAF5] py-1.5 px-3 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clipRule="evenodd"
                />
              </svg>
              +9.12%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsCard;
