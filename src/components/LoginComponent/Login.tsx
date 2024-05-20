import React, { useState, FC } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import logo from "../../assets/b2bit-logo.png";
import "./Login.css";

const Login: FC = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    interface AxiosError extends Error {
        response?: {
          status: number;
        };
    }

    const initalValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Email inválido").required("Campo obrigatório"),
        password: Yup.string().required("Campo obrigatório"),
    });

    const handleSubmit = async (values: any) => {
        try {
            const response = await axios.post("https://api.homologation.cliqdrive.com.br/auth/login/",
                {
                    email: values.email,
                    password: values.password,
                },
                {
                    headers: {
                        Accept: "application/json;version=v1_web",
                        "Content-Type": "application/json",
                    },
                }
            );

            localStorage.setItem("accessToken", response.data.tokens.access);
            navigate("/profile");

        } catch (err) {
            if ((err as AxiosError).response?.status === 400) {
                setErrorMessage("Usuário ou senha inválidos");
            } else {
                setErrorMessage("Erro ao realizar login");
            }
        }   
    }


    return (
        <div>
            <div className="card-container">
                <img src={logo} alt="B2Bit Logo" className="logo" />
                <Formik
                    initialValues={initalValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form className="form">
                        <div className="form-group">
                            <label 
                                className="login_label" 
                                htmlFor="email"
                            >E-mail</label>
                            <Field type="email" name="email" id="email" placeholder="@gmail.com" />
                            <ErrorMessage name="email" component="div" className="error"/>
                        </div>
                        <div className="form-group">
                            <label
                                className="login_label" 
                                htmlFor="password"
                            >Password</label>
                            <Field type="password" name="password" id="password" placeholder="****************" />
                            <ErrorMessage name="password" component="div" className="error"/>
                        </div>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <button className="submit-btn" type="submit">Sign In</button>
                    </Form>
                    )}                     
                    
                </Formik>
            </div>
        </div>
    );
    
}

export default Login;