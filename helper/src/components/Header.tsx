import { Button, Select } from "antd";
import Search from "./Search";
import images from "../assets/images";

function Header() {
    return (
     <div>
        <img src={images["logo-image"]} alt="Girl in a jacket" width="50" height="50"></img>
        <Select></Select>
        <Search />
        <Button>Account for Clients</Button>
        <Button>Account for Specialists</Button>
     </div>
    );
  }

export default Header