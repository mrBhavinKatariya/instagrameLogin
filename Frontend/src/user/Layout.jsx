import React from "react";
import { Outlet } from "react-router-dom";
import Coundown from "../Component/coundown";

function Layout() {
  return (
    <>
      <Coundown />
      <Outlet />
    </>
  );
}

export default Layout;
