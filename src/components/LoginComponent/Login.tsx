import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/b2bit-logo.png";
import "./Login.css";


const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values: any) => {
        try {
            const response = await axios.post(
                "https://api.homologation.cliqdrive.com.br/auth/login/", 
                {
                    email: values.email,
                    password: values.password
                },
                {
                    headers: {
                        Accept: "application/json;version=v1_web",
                        "Content-Type": "application/json"
                    }
                }
            );

            localStorage.setItem("accessToken", response.data.tokens.access);
            navigate("/profile");

        } catch (error) {
            console.error("Failed to login", error);
        }
    }

    return (
        <div>
            <div className="card-container">
                <img src={logo} alt="B2Bit Logo" className="logo" />
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validate={(values) => {
                        const errors: any = {};
                        if (!values.email) {
                            errors.email = "Campo obrigatório";
                        }
                        if (!values.password) {
                            errors.password = "Campo obrigatório";
                        }
                        return errors;
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form className="form">
                        <div className="form-group">
                            <label 
                                className="login_label" 
                                htmlFor="email"
                            >E-mail</label>
                            <Field type="email" name="email" id="email" placeholder="@gmail.com" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div className="form-group">
                            <label
                                className="login_label" 
                                htmlFor="password"
                            >Password</label>
                            <Field type="password" name="password" id="password" placeholder="****************" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <button className="submit-btn" type="submit">Sign In</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );


}

export default Login;