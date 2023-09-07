import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "../pages/Dashboard";
import AddCategory from "../pages/AddCategory";
import ManageCategories from "../pages/ManageCategories";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/add-category",
        element: <AddCategory></AddCategory>,
      },
      {
        path: "/manage-categories",
        element: <ManageCategories></ManageCategories>,
      },
    ],
  },
]);
