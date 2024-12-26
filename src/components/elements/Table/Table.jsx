import React, { useState } from "react";

const Table = ({ tableData }) => {
  const [checkedRows, setCheckedRows] = useState([]);

  const handleCheckboxChange = (index) => {
    setCheckedRows((prevChecked) =>
      prevChecked.includes(index)
        ? prevChecked.filter((i) => i !== index)
        : [...prevChecked, index]
    );
  };

  return (
    <div className="dark:bg-gray-800 bg-white rounded-xl shadow-sm  w-full lg:p-6">
      {/* Table Header */}
      <div className="flex lg:flex-row md:flex-row flex-col gap-3 lg:items-center justify-between mb-4  w-full">
        <div className="flex lg:items-center justify-between flex-wrap lg:flex-nowrap gap-4 lg:bg-[#F9FAF5] lg:dark:bg-gray-700 p-2 rounded w-full whitespace-nowrap">
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-500 dark:text-white rounded-lg text-sm font-medium">
            All hires{" "}
            <span className="ml-2 bg-yellow-400 p-1 rounded text-xs">60</span>
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-white">
            Employees{" "}
            <span className="ml-2 bg-gray-100 dark:bg-gray-500 p-1 rounded  text-xs">
              10
            </span>
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-white">
            Global Payroll{" "}
            <span className="ml-2 bg-gray-100 dark:bg-gray-500 p-1 rounded  text-xs">
              20
            </span>
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-white">
            Contractors{" "}
            <span className="ml-2 bg-gray-100 dark:bg-gray-500 p-1 rounded  text-xs">
              20
            </span>
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-white">
            Direct Employees{" "}
            <span className="ml-2 bg-gray-100 dark:bg-gray-500 p-1 rounded   text-xs">
              10
            </span>
          </button>
        </div>
        <div className="flex items-center gap-4 p-2 w-full whitespace-nowrap">
          <button className="bg-[#E5F9A9] hover:bg-[#d9f089] text-black px-4 py-2 rounded-lg flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add New
          </button>
          <button className="border dark:border-gray-400  px-4 py-2 rounded-lg flex items-center gap-2">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.61664 18.875C9.21664 18.875 8.82498 18.775 8.45831 18.575C7.72498 18.1667 7.28331 17.425 7.28331 16.5917V12.175C7.28331 11.7583 7.00831 11.1333 6.74998 10.8167L3.63331 7.51667C3.10831 6.99167 2.70831 6.09167 2.70831 5.41667V3.5C2.70831 2.16667 3.71665 1.125 4.99998 1.125H16C17.2666 1.125 18.2916 2.15 18.2916 3.41667V5.25C18.2916 6.125 17.7666 7.11667 17.275 7.60833L13.6666 10.8C13.3166 11.0917 13.0416 11.7333 13.0416 12.25V15.8333C13.0416 16.575 12.575 17.4333 11.9916 17.7833L10.8416 18.525C10.4666 18.7583 10.0416 18.875 9.61664 18.875ZM4.99998 2.375C4.41665 2.375 3.95831 2.86667 3.95831 3.5V5.41667C3.95831 5.725 4.20831 6.325 4.52498 6.64167L7.69998 9.98333C8.12498 10.5083 8.54165 11.3833 8.54165 12.1667V16.5833C8.54165 17.125 8.91665 17.3917 9.07498 17.475C9.42498 17.6667 9.84998 17.6667 10.175 17.4667L11.3333 16.725C11.5666 16.5833 11.8 16.1333 11.8 15.8333V12.25C11.8 11.3583 12.2333 10.375 12.8583 9.85L16.425 6.69167C16.7083 6.40833 17.05 5.73333 17.05 5.24167V3.41667C17.05 2.84167 16.5833 2.375 16.0083 2.375H4.99998Z"
                fill="#70747B"
              />
              <path
                d="M5.5 8.95834C5.38333 8.95834 5.275 8.925 5.16666 8.86667C4.875 8.68334 4.78333 8.29167 4.96666 8L9.075 1.41667C9.25833 1.125 9.64166 1.03334 9.93333 1.21667C10.225 1.4 10.3167 1.78334 10.1333 2.075L6.025 8.65834C5.90833 8.85 5.70833 8.95834 5.5 8.95834Z"
                fill="#70747B"
              />
            </svg>
            Filters
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto w-full">
        <table className="w-full p-6">
          <thead className="rounded-3xl border border-gray-200 dark:border-gray-700  w-full whitespace-nowrap px-4">
            <tr className="">
              <th className="">
                <input type="checkbox" />
              </th>
              <th className="text-left text-sm font-medium text-gray-500 dark:text-white">
                Name
              </th>
              <th className=" px-2 py-4 text-left text-sm font-medium text-gray-500 dark:text-white">
                Employment ID
              </th>
              <th className="px-2 py-4 text-left text-sm font-medium text-gray-500 dark:text-white">
                Type of hire
              </th>
              <th className="px-2 py-4 text-left text-sm font-medium text-gray-500 dark:text-white">
                Country
              </th>
              <th className="px-2 py-4 text-left text-sm font-medium text-gray-500 dark:text-white">
                License use
              </th>
              <th className="px-2 py-4 text-left text-sm font-medium text-gray-500 dark:text-white">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="w-full whitespace-nowrap">
            {tableData.map((data, i) => {
              return (
                <tr
                  key={i}
                  className={`w-full ${
                    checkedRows.includes(i)
                      ? "bg-[#F9FAF5] dark:bg-gray-700 rounded-lg"
                      : ""
                  }`}
                >
                  <td className="w-8 p-4">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={checkedRows.includes(i)}
                      onChange={() => handleCheckboxChange(i)}
                    />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={data.img} alt="" className="l" />
                      <span className="text-sm font-medium dark:text-white">
                        {data.name}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 dark:text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{data.empId}</span>
                      <svg
                        className=""
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.899994"
                          y="0.5"
                          width="10.2941"
                          height="9.66667"
                          rx="1.5"
                          stroke="#70747B"
                        />
                        <rect
                          x="5.60605"
                          y="5.8334"
                          width="10.2941"
                          height="9.66667"
                          rx="1.5"
                          stroke="#70747B"
                        />
                      </svg>
                    </div>
                  </td>
                  <td className="p-4 text-sm dark:text-white">
                    {data.position}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={data.flag}
                        alt={data.country}
                        className=" rounded-sm"
                      />
                      <span className="text-sm dark:text-white">
                        {data.country}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-24 h-2  rounded-full dark:bg-gray-500 bg-gray-200`}
                      >
                        <div
                          className={`${i === 0 && "w-1/5"} ${
                            i === 1 && "w-4/5"
                          } ${i === 2 && "w-4/5"} ${i === 3 && "w-3/5"} ${
                            i === 4 && "w-4/5"
                          } ${i === 5 && "w-3/5"} ${
                            i === 0 && "bg-[#F41E7E]"
                          } ${i === 1 && "bg-[#5A05FF]"} ${
                            i === 2 && "bg-[#38B2F5]"
                          } ${i === 3 && "bg-[#FF9800]"} ${
                            i === 4 && "bg-[#38B2F5]"
                          } ${i === 5 && "bg-[#FF9800]"} h-2 rounded-full`}
                        ></div>
                      </div>
                      <span className="text-sm dark:text-white">
                        {data.license}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 flex flex-col items-end">
                    <h3
                      className={`px-3 py-1 flex items-center gap-2 ${
                        data.status === "Draft" && "bg-[#FCCE44] text-white"
                      } ${
                        data.status === "New Hire" && "bg-[#D9F27E] text-black"
                      }  rounded text-sm`}
                    >
                      {data.status === "Draft" ? (
                        <svg
                          width="6"
                          height="6"
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="3" cy="3" r="3" fill="white" />
                        </svg>
                      ) : (
                        <svg
                          width="6"
                          height="6"
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="3" cy="3" r="3" fill="#393C43" />
                        </svg>
                      )}

                      <span>{data.status}</span>
                    </h3>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
