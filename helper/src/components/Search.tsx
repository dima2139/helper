import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";

function Search() {

    const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate('/serviceList'); // Redirects to the login page
  };
    return (
        <div>
            <Input size="large" />
            <Button size="large" onClick={handleSearchClick}>Search</Button>
        </div>
    );
  }

export default Search