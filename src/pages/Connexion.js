import React, { useContext, useState } from "react";
import { getCookie, setCookie, apiUrl, apiKey, apiBaseUrl } from "../components/utils";
import Axios from "axios";
import "../styles/Connexion.css";
import logo from "../assets/LOGO2 2.png";
import { DocsContext } from "../components/DocsContext";
import mailIcon from '../assets/Vectormail.png'
import pwdIcon from '../assets/Vectorpwd.png'

function Connexion() {
  const { setLogged } = useContext(DocsContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const isLog = Boolean(getCookie("msfb-logged"));

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.get(apiUrl.login
    //   , {
    //   user: {
    //     username: username,
    //     password: password
    //   },
    //   apiKey: apiKey.public
    // }
    ).then((response) => {
      if(response.data.length > 0) {
        var found = false;
        response.data.forEach(element => {
          if(element.username === username ||  element.email === username) {
            found = true;
          }
        });

        if(found) {
          setCookie("msfb-user-data", JSON.stringify(response.data[0]));
          setCookie("msfb-logged", JSON.stringify(true));
          setLogged(true);
        }
        else {
          alert("Identifiant ou mot de passe incorrecte")
        }
        
      }
      else {
        alert("Identifiant ou mot de passe incorrecte")
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
            <p>CONNEXION</p>

            <label htmlFor="email">
            <img src={mailIcon} alt=""/>
              <input
                type={"email"}
                autoComplete="off"
                placeholder="Email"
                name="mail"
                id="email"
                onChange={(e) => { setUsername(e.target.value) }}
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

            <span>Mot de passe oublié?</span>
            <a href="/my-safe-box/Register">S'inscrire</a>
            <button type="submit">Se connecter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
