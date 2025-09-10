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
      <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2">
        <h1 className="text-5xl font-extrabold">Registro daily</h1>

        <Form className=" self-stretch space-y-3 bg-sky-300 p-3 rounded-2xl">
          <div>
            <label htmlFor="userName" className="text-sm sr-only">
              Nombre de Usuario
            </label>
            <Field
              name="userName"
              type="text"
              placeholder="Username"
              className="w-full rounded-md focus:ring bg-white p-2"
            />
            <ErrorMessage name="userName" className="text-red-500" />
          </div>

          <div>
            <label htmlFor="password" className="text-sm sr-only">
              Contrasena
            </label>
            <Field
              name="password"
              type="password"
              placeholder="password"
              className="w-full rounded-md focus:ring bg-white p-2"
            />
            <ErrorMessage name="password" className="text-red-500" />
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold rounded text-amber-50 bg-violet-600"
          >
            Registrar
          </button>
        </Form>
      </div>
    </Formik>
  );
};
