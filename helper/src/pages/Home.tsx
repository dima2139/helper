import Category from "../components/Category";
import './../App.css';
import axios from "axios";
import { useState, useEffect } from 'react';

function Home() {
const [data, setData] = useState([]);
const [error, setError] = useState();

useEffect(() => {
  const fetchData = () => {
    axios
      .get('http://localhost:3001/categories')
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  fetchData();
}, []);

  return (
    <div>
      <b>Categories</b>
      <div className="container">
        {data.map((i) => <Category props={i} />)}
      </div>
    </div>
    );
  }

export default Home
