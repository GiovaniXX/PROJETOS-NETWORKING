import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Enviando os dados..." + username + " " + password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre-me
          </label>
          <a href="#">Esqueci minha senha</a>
        </div>
        <button>Acessar</button>
        <div className="signup-link">
          <p>
            <span>Não tem conta?</span>{" "}
            <span>
              <a href="#">Cadastre-se</a>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
