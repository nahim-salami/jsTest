import React, { useContext, useState } from "react";
import { getCookie, setCookie, apiUrl, apiKey, apiBaseUrl } from "../components/utils";
import Axios from "axios";
import "../styles/Connexion.css";
import logo from "../assets/LOGO2 2.png";
import { DocsContext } from "../components/DocsContext";
import mailIcon from '../assets/Vectormail.png'
import pwdIcon from '../assets/Vectorpwd.png'

function Register() {
  const { setLogged } = useContext(DocsContext);
  const [username, setUsername] = useState("");
  const [useremail, setUsermail] = useState("");
  const [useradress, setUseradress] = useState("");
  const [password, setPassword] = useState("");
  // const isLog = Boolean(getCookie("msfb-logged"));

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.get(apiUrl.register, 
      {
        username: username,
        password: password,
        email: useremail,
        adress: useradress,
        id: Math.random() * 100 * 900,
        apiKey: apiKey.public
    }
    ).then((response) => {
      if(response.data.length > 0) {
        setCookie("msfb-user-data", JSON.stringify(response.data[0]));
        setCookie("msfb-logged", JSON.stringify(true));
        setLogged(true);
      }
    })
  };

  return (
    <div className="Connexion">
      <div className="wrapper">
        <div className="logo-part">
          <img src={logo} className="signin-logo" alt="Logo" />
        </div>
        <div className="form-wrapper">
          <form method="POST" onSubmit={handleSubmit}>
            <p>REGISTER</p>

            <label htmlFor="username">
            <img alt=""/>
              <input
                type={"text"}
                autoComplete="off"
                placeholder="Username"
                name="nername"
                id="username"
                onChange={(e) => { setUsername(e.target.value) }}
              />
            </label>

            <label htmlFor="adresse">
            <img alt=""/>
              <input
                type={"text"}
                autoComplete="off"
                placeholder="Adresse"
                name="adresse"
                id="adresse"
                onChange={(e) => { setUseradress(e.target.value) }}
              />
            </label>

            <label htmlFor="email">
            <img src={mailIcon} alt=""/>
              <input
                type={"email"}
                autoComplete="off"
                placeholder="Email"
                name="mail"
                id="email"
                onChange={(e) => { setUsermail(e.target.value) }}
              />
            </label>

            <label htmlFor="password" >
            <img src={pwdIcon} alt=""/>
              <input
                type="password"
                placeholder="Mot de passe"
                required
                name="password"
                id="password"
                onChange={(e) => { setPassword(e.target.value) }} 
              />
            </label>

            <button type="submit">S'inscrire</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
