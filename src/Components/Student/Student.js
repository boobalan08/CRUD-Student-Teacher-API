import React, { useEffect, useState } from "react";
import "./Student.css";
import NavBar from "../NavBar";
import Table from "react-bootstrap/Table";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Student = () => {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    fetch("https://63899fddc5356b25a203ee0c.mockapi.io/student", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setTableData(data));
  };
  useEffect(() => getData(), []);

  const DeleteUser = (id) => {
    fetch(`https://63899fddc5356b25a203ee0c.mockapi.io/student/${id}`, {
      method: "DELETE",
    }).then((data)=>getData(data));
  };

  return (
    <div>
      <NavBar />
      <h2 className="text-center mt-3">Student List</h2>
      <div className="container">
        <Table>
          <thead>
            <tr>
              <th>Roll.no</th>
              <th>Name</th>
              <th>Email</th>
              <th>HTML</th>
              <th>CSS</th>
              <th>JS</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.html}</td>
                <td>{data.css}</td>
                <td>{data.javascript}</td>
                <td>
                  <div className="button1 d-flex">
                    <IconButton
                      aria-label="delete"
                      onClick={() => navigate(`editstudent/${data.id}`)}
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
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="button d-flex">
        <Button variant="primary" className="col-6" onClick={()=>navigate('/addstudent')}>
Add New Student
        </Button>
      </div>
    </div>
  );
};

export default Student;
