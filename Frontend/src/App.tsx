import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import TermsPage from "./pages/TermsPage";
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
