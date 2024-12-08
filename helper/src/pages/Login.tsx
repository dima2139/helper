import { Button, Input } from "antd";
import axios from "axios";
import { useState } from "react";


function Login() {

    const handleLoginClick = () => {
        axios
        .post('http://13.60.50.42/login', {Login : loginInputValue, Password: passwordInputValue})
        .then((response) => {
            setLoginInputValue("")
            setPasswordInputValue("")
        })
        .catch((err) => {
          
        });
      };
    
    const [loginInputValue, setLoginInputValue] = useState("");
    const [passwordInputValue, setPasswordInputValue] = useState("");
    
        // Step 2: Handle input changes
        const handleLoginInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setLoginInputValue(event.target.value); // Update state with the current input value
        };

        const handlePasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPasswordInputValue(event.target.value); // Update state with the current input value
        };
    
    return (
        <>  
            <b>Login</b>
            <Input size="large" type="text" value={loginInputValue} onChange={handleLoginInputChange} />
            <b>Password</b>
            <Input size="large" type="text" value={passwordInputValue} onChange={handlePasswordInputChange} />
            <Button onClick={handleLoginClick}>Login</Button>
        </>
    );
  }

export default Login