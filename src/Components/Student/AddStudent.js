import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Form from 'react-bootstrap/Form';
import NavBar from '../NavBar';

const DataValidationSchema = yup.object({
  id: yup.number().required(),
  name: yup.string().required().min(4),
 email: yup.string().email().required().min(8),
 html: yup.number().required().min(1),
 css: yup.number().required().min(1),
 javascript: yup.number().required().min(1),
});


const AddStudent = () => {
  const navigate = useNavigate();
  const { handleBlur, handleChange, values, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
      id:"",
      name:"",
      email:"",
      html:"",
      css:"",
      javascript:"",
      },
      validationSchema: DataValidationSchema,
      onSubmit: (values) => {
        console.log("form values", values);
        addData(values);
      },
    });
    const addData = (values) => {
      fetch("https://63899fddc5356b25a203ee0c.mockapi.io/student", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json" },
      }).then(() => navigate("/student"));
    };

  return (
  <div>
    <NavBar/>
  <section className="container my-5">
  <Form onSubmit={handleSubmit} className="add-student">
       <TextField
        label="Roll.No"
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
        label="Html Mark"
        variant="outlined"
        type="number"
        value={values.html}
        name="html"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.html && errors.html}
        helperText={touched.html && errors.html ? errors.html : null}
      />
       <TextField
        label="Css Mark"
        variant="outlined"
        type="number"
        value={values.css}
        name="css"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.css && errors.css}
        helperText={touched.css && errors.css ? errors.css : null}
      />
       <TextField
        label="Javascript Mark"
        variant="outlined"
        type="number"
        value={values.javascript}
        name="javascript"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.javascript && errors.javascript}
        helperText={touched.javascript && errors.javascript ? errors.javascript : null}
      />
        <Button variant="contained" type="submit">
        Add Student
      </Button>
    </Form>
  </section>
  </div>
  
  )
}

export default AddStudent