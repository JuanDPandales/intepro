import ReactDOM from "react-dom/client";
import App from "../src/App.jsx";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import HomePage from "./components/HomePage.jsx";
import SignUp from "./components/sessions/SignUp.jsx";
import AccLog from "./components/sessions/AccLog.jsx";
import HeroSection from "./components/HeroSection.jsx";
import About from "./components/About.jsx";
import Carrito from "./components/Carrito.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <AccLog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/carrito",
        element: <Carrito />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
