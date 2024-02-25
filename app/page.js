"use client";
import React, { useEffect, useState } from "react";
import Filter from "./components/filter";
import ProductList from "./components/productList";
import Info from "./components/info";
const Homepage = () => {
  const url = "https://mocki.io/v1/ae832675-0711-48a0-8665-a186cd0e8489";
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const fetchData = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res.devices);
        setFilterData(res.devices);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const categoryChange = (category) => {
    if (category != "Show All") {
      setFilterData(data.filter((item) => item.category === category));
    } else {
      setFilterData(data);
    }
  };

  const sortChange = (sortBy) => {
    if (sortBy == "A-Z") {
      const sorted = [...filterData].sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 0
      );
      setFilterData(sorted);
    } else {
      const sorted = [...filterData]
        .sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 0
        )
        .reverse();
      setFilterData(sorted);
    }
  };
  return (
    <div>
      <Filter categoryChange={categoryChange} sortChange={sortChange}></Filter>
      <ProductList filterData={filterData}></ProductList>
      <Info></Info>
    </div>
  );
};

export default Homepage;
