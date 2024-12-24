import React from "react";
import Table from "../../elements/Table/Table";
import MetricsCard from "../../elements/MetricsCard/MetricsCard";

const Dashboard = () => {
  const tableData = [
    {
      img: "/assets/img/luhutan.png",
      name: "Luhutan Imin",
      empId: "L8RQSC",
      position: "Employee",
      country: "Australia",
      flag: "/assets/img/australia.png",
      color: "#F41E7E",
      license: "1/5",
      status: "Draft",
    },
    {
      img: "/assets/img/robert.png",
      name: "Robert Fox",
      empId: "N9KMON",
      position: "Global Payroll",
      country: "India",
      flag: "/assets/img/india.png",
      color: "#5A05FF",
      license: "4/5",
      status: "New Hire",
    },
    {
      img: "/assets/img/eleanor.png",
      name: "Eleanor Pena",
      empId: "K8LOVN",
      position: "Contrctors",
      country: "Iceland",
      flag: "/assets/img/iceland.png",
      color: "#38B2F5",
      license: "4/5",
      status: "New Hire",
    },
    {
      img: "/assets/img/leslie.png",
      name: "Leslie Alexander",
      empId: "K8LOVN",
      position: "Employee",
      country: "Lebanon",
      flag: "/assets/img/lebanon.png",
      color: "#FF9800",
      license: "3/5",
      status: "Draft",
    },
    {
      img: "/assets/img/devon.png",
      name: "Devon Lane",
      empId: "DH5FXE",
      position: "Employee",
      country: "United Kingdom",
      flag: "/assets/img/uk.png",
      color: "#38B2F5",
      license: "4/5",
      status: "New Hire",
    },
    {
      img: "/assets/img/jenny.png",
      name: "Jenny Wilson",
      empId: "AKXS6T",
      position: "Contrctors",
      flag: "/assets/img/croatia.png",
      color: "#FF9800",
      country: "Croatia",
      license: "3/5",
      status: "Draft",
    },
  ];
  return (
    <div className="p-8 text-black">
      {/* Header Section */}
      <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:items-center gap-5 mb-8 text-black">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Open Hiring
          </h1>
          <p className="text-gray-500 text-sm">
            Overview of your company's various hirings
          </p>
        </div>
        <button className="bg-[#E5F9A9] hover:bg-[#d9f089] px-4 py-2 rounded-lg flex items-center gap-2 max-w-max">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7167 18.5417H7.28332C3.19165 18.5417 1.44165 16.7917 1.44165 12.7V12.5917C1.44165 8.89167 2.89998 7.10833 6.16665 6.8C6.49998 6.775 6.81665 7.025 6.84998 7.36667C6.88332 7.70833 6.63332 8.01667 6.28332 8.05C3.66665 8.29167 2.69165 9.525 2.69165 12.6V12.7083C2.69165 16.1 3.89165 17.3 7.28332 17.3H12.7167C16.1083 17.3 17.3083 16.1 17.3083 12.7083V12.6C17.3083 9.50833 16.3167 8.275 13.65 8.05C13.3083 8.01667 13.05 7.71667 13.0833 7.375C13.1167 7.03333 13.4083 6.775 13.7583 6.80833C17.075 7.09167 18.5583 8.88333 18.5583 12.6083V12.7167C18.5583 16.7917 16.8083 18.5417 12.7167 18.5417Z"
              fill="#222222"
            />
            <path
              d="M10 13.125C9.65833 13.125 9.375 12.8417 9.375 12.5V3.01666C9.375 2.675 9.65833 2.39166 10 2.39166C10.3417 2.39166 10.625 2.675 10.625 3.01666V12.5C10.625 12.8417 10.3417 13.125 10 13.125Z"
              fill="#222222"
            />
            <path
              d="M12.7916 5.5C12.6333 5.5 12.475 5.44167 12.35 5.31667L9.99997 2.96667L7.64997 5.31667C7.40831 5.55834 7.0083 5.55834 6.76664 5.31667C6.52497 5.075 6.52497 4.675 6.76664 4.43334L9.55831 1.64167C9.79997 1.4 10.2 1.4 10.4416 1.64167L13.2333 4.43334C13.475 4.675 13.475 5.075 13.2333 5.31667C13.1166 5.44167 12.95 5.5 12.7916 5.5Z"
              fill="#222222"
            />
          </svg>
          Export Report
        </button>
      </div>

      {/* Metrics Cards */}
      <div className="max-w-max">
        <MetricsCard />
      </div>

      {/* Table Section */}
      <Table tableData={tableData} />
    </div>
  );
};

export default Dashboard;