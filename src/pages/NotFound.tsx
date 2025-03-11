
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { Button } from "../components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-2 text-8xl font-bold text-steam-accent">404</h1>
        <p className="mb-6 text-2xl font-medium text-white">Oops! Page not found</p>
        <p className="mb-8 max-w-md text-gray-400">
          The page you're looking for doesn't exist or has been moved. Check the URL or go back to the homepage.
        </p>
        <Button className="bg-steam-accent text-white hover:bg-steam-accent/90" size="lg">
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
