import React from "react";
import IconButton from '@mui/material/IconButton';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import "./Cards.css"
const Cards = () => {
  const cardData = [
    {
      icon: <PlayLessonIcon color="success"/>,
      title: "Self Paced Courses",
      content: "Learn & Upskill via Online Courses and Doubt Clarification",
    },
    {
      icon: <LiveTvIcon color="success"/>,
      title: "LIVE Classes",
      content: "Live Classes offering Guaranteed Job Placement Support",
    },
  ];
  return (
    <section className="cards mx-3 my-5">
        
      <h2 className="my-3 text-center">
        What A-Z offers you?
      </h2>
    
      <div className="row">
        {cardData.map((data,index)=>
      <div className="col" key={index}>
          <div className="card cardss mt-3" >
            <div className="card-headers"><IconButton>{data.icon}</IconButton></div>
            <div className="card-body">
                <h5 className="card-title text-success">
                    {data.title}
                </h5>
                <p className="card-text text-success">{data.content}</p>
            </div>
        </div>
      </div>
        )}
      </div>
    </section>
  );
};

export default Cards;
