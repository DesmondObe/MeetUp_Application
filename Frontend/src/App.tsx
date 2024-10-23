import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import TermsPage from "./pages/TermsPage";
import AuthPage from "./pages/AuthPage";
import SignupPage from"./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import GettingStartedPage from "./pages/GettingStartedPage";
import "./App.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Protected from "./components/Auth/Protected";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
        {
          path: "/terms-of-service",
          element: <TermsPage />,
        },
        {
          path: "/auth",
          element: <AuthPage />,
        },
                {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/getting-started",
          element: (
            // <Protected>
            <GettingStartedPage />
            // </Protected>
          ),
        },
        {
          path: "/login",
          element: <LoginPage />,
        },

      ],
    },
    
  ]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
