
import Sidebar from "../components/shared/Sidebar/Sidebar";
import Header from "../components/shared/Header/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {


  console.log("window.innerWidth dashboard", window.innerWidth);
  return (
    <div className="flex">
      <Sidebar  />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
