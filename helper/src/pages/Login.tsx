import { Button, Input } from "antd";
import axios from "axios";
import { useState } from "react";


function Login() {

    const handleLoginClick = () => {
        axios
        .post('http://localhost:3001/login', {Login : "dima"})
        .then((response) => {
            setInputValue("")
        })
        .catch((err) => {
          
        });
      };
    
    const [inputValue, setInputValue] = useState("");
    
        // Step 2: Handle input changes
        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value); // Update state with the current input value
        };
    
    return (
        <>  
            <b>Login</b>
            <Input size="large" type="text" value={inputValue} onChange={handleInputChange} />
            <b>Password</b>
            <Input size="large" />
            <Button onClick={handleLoginClick}>Login</Button>
        </>
    );
  }

export default Login