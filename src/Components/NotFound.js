import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="text-center mt-5">404 Error</h1>

          <div className="btn mt-3">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/home")}
            >
              Back to DashBoard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
