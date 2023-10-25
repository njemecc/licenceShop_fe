"use client";
import "./admin.css";

//hooks
import { useEffect } from "react";

//components
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";

//redux
import { useSelector } from "react-redux";

const page = () => {
  const activeMenu = useSelector((state) => state.admin.activeMenu);

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent content="Settings" position="Top">
          <button
            type="button"
            className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white "
            style={{ background: "blue", borderRadius: "50%" }}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
          Sidebar
        </div>
      ) : (
        <div className="w-0 dark:bg-secodary-dark-bg"> Sidevar w-0</div>
      )}
      <div
        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
          activeMenu ? "md:ml-72" : "flex-2"
        }`}
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full"></div>
      </div>
    </div>
  );
};

export default page;
