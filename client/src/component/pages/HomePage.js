import React, { useEffect } from "react";
import "../../App.css";
import axios from "axios";

import { useState } from "react";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const allData = await axios.get("http://localhost:5000/api/data");
        console.log(allData.data);
        setData(allData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchdata();
  }, []);

  return (
    <>
      <h1>All</h1>

      {data.map((item) => (
        <div key={item._id} className="card">
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h3 className="card-title text-center">{item.title}</h3>
            <ul>
              <h6>Country : {item.country}</h6>
              <h6>Intensity : {item.intensity}</h6>
              <h6>Likelihood : {item.likelihood}</h6>
              <h6>Relevance : {item.relevance}</h6>
              {/* <h6>Year : {item.year}</h6> */}
              <h6>Topic :{item.topic}</h6>
              <h6>Region : {item.region}</h6>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomePage;
