import React from "react";

import "../styles/styles.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  // name: "",
  // email: "",
  // password: "",
  // password2: "",

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "El nommbre debe de ser de un minimo de 2 carateres")
            .max(15, "El nommbre debe de ser menor de 15 carateres")
            .required(),
          email: Yup.string().email().required(),
          password: Yup.string().min(6, "Minimo de 6 letras").required(),
          password2: Yup.string()
            .oneOf([Yup.ref("password")], "Las contraseñas no son iguales")
            .required(),
        })}
      >
        {(handleReset) => (
          <Form>
            <MyTextInput label="Nombre" name="name" placeholder="Omar" />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="o@gmail.com"
            />

            <MyTextInput
              label="Password"
              name="password"
              type="password"
              placeholder="****"
            />

            <MyTextInput
              label="Password2"
              name="password2"
              type="password"
              placeholder="****"
            />

            <button type="submit">Create</button>
            {/* <button type="button" onClick={handleReset}>
              Reset form
            </button> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};
