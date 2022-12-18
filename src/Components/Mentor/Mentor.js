import NavBar from "../NavBar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import "./Mentor.css"
const Mentor = () => {
  const [mentorData, setMentorData] = useState([]);
  const navigate = useNavigate();
  const getData = () => {
    fetch("https://63899fddc5356b25a203ee0c.mockapi.io/mentor", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setMentorData(data));
  };
  useEffect(() => getData(), []);

  const DeleteUser = (id) => {
    fetch(`https://63899fddc5356b25a203ee0c.mockapi.io/mentor/${id}`, {
      method: "DELETE",
    }).then((data) => getData(data));
  };
  return (
    <div>
      <NavBar />
      <div className="container my-3">
        <h2 className="text-center my-3">Mentor Details</h2>
        <div className="row my-4">
          {mentorData.map((data, index) => (
            <div
              className="card my-3 mx-2 cardss"
              key={index}
              style={{ maxWidth: "540px" }}
            >
              <div className="row g-0">
                <div className="col-md-4 d-flex imgs">
                  <img
                    src={data.pic}
                    className="img-fluid rounded-start img-card"
                    alt={data.name}
                  />
                </div>
                <div className="col-md-8 ">
                  <div className="card-body">
                    <h3 className="card-title p-2">{data.name}</h3>
                   <div className="m-2">
                   <p className="card-text p-1"><b>Mentor-ID:</b> {data.id}</p>
                    <p className="card-text p-1"><b>Email:</b> {data.email}</p>
                    <p className="card-text p-1"><b>Subject:</b> {data.subject}</p>
                   </div>
                    <div className="card-footers">
                      <div className="button1 d-flex">
                        <IconButton
                          aria-label="Edit"
                          onClick={() => navigate(`editmentor/${data.id}`)}
                        >
                          <EditIcon color="primary" />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          color="error"
                          onClick={() => DeleteUser(data.id)}
                        >
                          <DeleteIcon color="error" />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="button d-flex my-5">
          <Button
            variant="primary"
            className="col-6"
            onClick={() => navigate("/addmentor")}
          >
            Add New Mentor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
