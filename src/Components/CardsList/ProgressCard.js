import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./ProgressCard.css";

const ProgressCard = () => {
  const cardData = [
    {
      heading: "Web Development",
      value: 90,
      variant: "success",
    },
    {
      heading: "DataScience",
      value: 85,
      variant: "info",
    },
    {
      heading: "Cyber Security",
      value: 80,
      variant: "warning",
    },
    {
      heading: "Software Testing",
      value: 75,
      variant: "danger",
    },
  ];
  return (
    <>
      <div className=" m-3 my-3">
        <h2 className="mb-4">DashBoard</h2>

        <div className="row progress-card">
          {cardData.map((data, index) => (
            <div key={index} className="col">
              <div className="card cardss h-100">
                <h6 className="card-title p-2">{data.heading}</h6>
                <div className="progress-div px-2">
                  <ProgressBar now={data.value} variant={data.variant} />
                </div>

                <div className="d-flex ptag">
                  <p className="p-2">{data.value}%</p>
                  <p>This Year</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProgressCard;
