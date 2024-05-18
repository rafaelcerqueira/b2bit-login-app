import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/b2bit-logo.png";
import axios from "axios";


const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [erro, setError] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://api.homologation.cliqdrive.com.br/auth/login", {
                email,
                password
            },
            {
                headers: {
                    Accept: "application/json;version=v1_web",
                    "Content-Type": "application/json"
                }
            }
            );

            localStorage.setItem("accessToken", response.data.accessToken);

            console.log(response.data);
        } catch (error) {
            setError("Usuário ou senha inválidos");
        }
    };

    return (
        <div className="card-container">
            <img src={logo} alt="B2Bit" />
            <form className="form" onSubmit={handleSubmit}>
                <label className="login_label" htmlFor="email" >E-mail</label>
                <input
                    id="email"
                    type="email"
                    placeholder="@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className="login_label" htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="***************"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="submit-btn" type="submit">Sign In</button>
                {erro && <p>{erro}</p>}
            </form>
        </div>
    );


}

export default Login;