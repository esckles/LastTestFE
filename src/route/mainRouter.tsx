import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AuthLayout from "../Layout/AuthLayout";
import Createaccoutscreennotification from "../Page/Auth/Createaccoutscreennotification";
import Dashboard from "../Page/Dashboard/Dashboard";
import Signin from "../Page/Auth/Signin";
import Signup from "../Page/Auth/Signup";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Signup />,
      },
      {
        index: true,
        path: "create-account-notification",
        element: <Createaccoutscreennotification />,
      },
      {
        index: true,
        path: "signin/:token",
        element: <Signin />,
      },
      {
        index: true,
        path: "signin",
        element: <Signin />,
      },
    ],
  },
  {
    path: "/dash",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
