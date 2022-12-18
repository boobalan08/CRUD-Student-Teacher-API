import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const DataValidationSchema = yup.object({
  id: yup.number().required(),
  name: yup.string().required().min(4),
  email: yup.string().email().required().min(8),
  pic: yup.string().url().required().min(8),
  subject: yup.string().required().min(1),
});
export const EditMentor = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://63899fddc5356b25a203ee0c.mockapi.io/mentor/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id]);

  return <div>{data ? <EditMentorForm data={data} /> : "Loading"}</div>;
};

const EditMentorForm = ({ data }) => {
  const navigate = useNavigate();
  const { handleBlur, handleChange, values, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        id: data.id,
        name: data.name,
        email: data.email,
        pic: data.pic,
        subject: data.subject,
      },
      validationSchema: DataValidationSchema,
      onSubmit: (updateValues) => {
        console.log("value",updateValues)
        EditData(updateValues);
      },
    });
  const EditData = (updateValues) => {
    fetch(`https://63899fddc5356b25a203ee0c.mockapi.io/mentor/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(updateValues),
      headers: { "Content-type": "application/json" },
    }).then(() => navigate("/mentor"));
  };

  return (
    <section className="container my-5">
      <Form onSubmit={handleSubmit} className="add-student">
        <TextField
          label="Mentor-Id"
          variant="outlined"
          type="number"
          value={values.id}
          name="id"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.id && errors.id}
          helperText={touched.id && errors.id ? errors.id : null}
        />
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          value={values.name}
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name}
          helperText={touched.name && errors.name ? errors.name : null}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={values.email}
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
          helperText={touched.email && errors.email ? errors.email : null}
        />
        <TextField
          label="Mentor Image"
          variant="outlined"
          type="url"
          value={values.pic}
          name="pic"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.pic && errors.pic}
          helperText={touched.pic && errors.pic ? errors.pic : null}
        />
        <TextField
          label="subject Mark"
          variant="outlined"
          type="text"
          value={values.subject}
          name="subject"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.subject && errors.subject}
          helperText={touched.subject && errors.subject ? errors.subject : null}
        />
        <Button variant="contained" type="submit">
          Update Mentor Details
        </Button>
      </Form>
    </section>
  );
};
