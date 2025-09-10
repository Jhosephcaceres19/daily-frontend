import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const SignupForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <Formik
        initialValues={{ userName: "", password: "" }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .max(10, "⚠️ No debe tener más de 10 caracteres")
            .required("⚠️ Este campo es requerido"),
          password: Yup.string()
            .max(10, "⚠️ No debe tener más de 10 caracteres")
            .required("⚠️ Este campo es requerido"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ isSubmitting }) => (
          <Form className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-2xl">
            <h1 className="text-3xl font-bold text-center text-violet-700">
              Registro Daily
            </h1>
            <p className="text-center text-gray-500 text-sm">
              Completa los campos para registrarte
            </p>

            {/* Username */}
            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre de Usuario
              </label>
              <Field
                name="userName"
                type="text"
                placeholder="Zerocool"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-violet-400 focus:border-violet-400"
              />
              <ErrorMessage
                name="userName"
                component="div"
                className="mt-1 text-sm text-red-600 font-medium"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <Field
                name="password"
                type="password"
                placeholder="********"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-violet-400 focus:border-violet-400"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="mt-1 text-sm text-red-600 font-medium"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 rounded-lg font-semibold text-white bg-violet-600 hover:bg-violet-700 transition-all duration-300 shadow-md disabled:opacity-50"
            >
              {isSubmitting ? "Registrando..." : "Registrar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
