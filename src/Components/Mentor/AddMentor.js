import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import NavBar from "../NavBar";

const DataValidationSchema = yup.object({
  id: yup.number().required(),
  name: yup.string().required().min(4),
  email: yup.string().email().required().min(8),
  pic: yup.string().url().required().min(5),
  subject: yup.string().required().min(3),
});

const AddMentor = () => {
  const navigate = useNavigate();
  const { handleBlur, handleChange, values, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        id: "",
        name: "",
        email: "",
        pic: "",
        subject: "",
      },
      validationSchema: DataValidationSchema,
      onSubmit: (values) => {
        console.log("form values", values);
        addData(values);
      },
    });
  const addData = (values) => {
    fetch("https://63899fddc5356b25a203ee0c.mockapi.io/mentor", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-type": "application/json" },
    }).then(() => navigate("/mentor"));
  };

  return (
    <div>
      <NavBar />
      <section className="container my-5">
        <Form onSubmit={handleSubmit} className="add-student">
          <TextField
            label="Mentor ID"
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
            label="Mentor Image url"
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
            label="Subject Name"
            variant="outlined"
            type="text"
            value={values.subject}
            name="subject"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.subject && errors.subject}
            helperText={
              touched.subject && errors.subject ? errors.subject : null
            }
          />

          <Button variant="contained" type="submit">
            Add Mentor
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default AddMentor;
