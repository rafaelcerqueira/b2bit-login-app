import React from "react";
import "./Form.css";
import logo from "../assets/logo-azul.png";

function Form() {
    return (
        <div className="card-container">
            <img className="logo" src={logo} alt="logo azul" />

            <form className="form" action="">

                <label className="login_label" htmlFor="email">E-mail</label>
                <input type="text" placeholder="@gmail.com" id="email" />
                <label className="login_label" htmlFor="password">Password</label>
                <input type="password" placeholder="**********" id="password"/>
   
                <input type="submit" value="Sign In" id="submit-btn" />
            </form>
        </div>
    );
}

export default Form;