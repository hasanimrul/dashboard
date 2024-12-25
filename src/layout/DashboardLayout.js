import Sidebar from "../components/shared/Sidebar/Sidebar";
import Header from "../components/shared/Header/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {

  return (
    <div className="lg:flex md:flex items-start overflow-hidden w-full">
      <Sidebar  />
      <div className="w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
