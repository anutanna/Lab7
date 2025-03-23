import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Go Back Home</Link>
    </section>
  );
};

export default NotFound;
