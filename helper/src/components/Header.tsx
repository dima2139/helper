import { Button, Select } from "antd";
import Search from "./Search";
import images from "../assets/images";
import { useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login'); // Redirects to the login page
  };
  const handleLogoClick = () => {
    navigate('/'); // Redirects to the login page
  };
    return (
     <div>
        <img onClick={handleLogoClick} src={images["logo-image"]} alt="Girl in a jacket" width="50" height="50"></img>
        <Select></Select>
        <Search />
        <Button onClick={handleLoginClick} >Account for Clients</Button>
        <Button onClick={handleLoginClick} >Account for Specialists</Button>
     </div>
    );
  }

export default Header