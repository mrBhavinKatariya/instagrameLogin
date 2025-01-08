import React from "react";
import InstaLogin from "./Component/instaLogin";
import FaceBookLogin from "./Component/facebookLogin";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";

// Define the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element={<InstaLogin />} /> {/* Default route */}
      <Route path="facebooklogin" element={<FaceBookLogin />} /> {/* Facebook login route */}
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
