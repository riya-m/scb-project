
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import scbLogo from '../../assets/scb-logo.png';

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // const navigate = useNavigate();
    const [errorMessage,setErrorMessage] = useState('');

    const handleClick = () => {
        // navigate('/dashboard');
    };

    return(
        <div className="loginSection">
            <div className="loginCard">
                <img
                    src={scbLogo}
                    className="scbLogo"
                    alt="Standard Chartered"
                    width="240px"
                    height="120px"
                />
                <h2>Welcome</h2>
                <form>
                    <input type="email"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                    />
                    <input type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                    />
                    <p className="error">{errorMessage}</p>
                    <button className="loginBtn" onClick={handleClick} type="button">Login</button>
                </form>
            </div>
        </div>
    );

};

export default Login;
