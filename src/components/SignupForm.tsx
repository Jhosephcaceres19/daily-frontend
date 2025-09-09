import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const SignupForm = () => {
  return (
    <Formik
      initialValues={{ userName: "", password: "" }}
      validationSchema={Yup.object({
        userName: Yup.string()
          .max(10, "No debe ser mas de 10 caracteres")
          .required("Requerido"),
        password: Yup.string()
          .max(10, "No debe tener mas de 10 caracteres")
          .required("Requerido"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="userName">Nombre de Usuario</label>
        <Field name="userName" type="text" />
        <ErrorMessage name="userName" />

        <label htmlFor="password">Contrasena</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />

        <button type="submit">Registrar</button>
      </Form>
    </Formik>
  );
};
