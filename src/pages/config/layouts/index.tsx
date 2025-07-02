import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayoutWrapper } from "./main/main";
import { Home } from "../../Home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutWrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
]);
export const RouterProviderHook = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
