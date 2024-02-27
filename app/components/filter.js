"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../assets/scss/filter.scss";
import ProductList from "./productList";

export default function filter({ initData }) {
  const [data, setData] = useState(initData);
  const [filterData, setFilterData] = useState(initData);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // SORT BY CATEGORY
  const changeCategory = (e) => {
    document.querySelector("#category").innerHTML = e.target.innerHTML;
    console.log(data);
    if (e.target.innerHTML != "Show All") {
      setFilterData(data.filter((item) => item.category === e.target.innerHTML));
    } else {
      setFilterData(data);
    }
  };

  // SORT BY NAME
  const changeSort = (e) => {
    document.querySelector("#sortby").innerHTML = e.target.innerHTML;
    if (e.target.innerHTML == "A-Z") {
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
    <>
      <div className="filter border-bottom">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="dropdown">
              <button
                className="filter__btn filter__btn--category btn btn-light dropdown-toggle btn-lg"
                type="button"
                id="category"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <Link className="dropdown-item" href="/" onClick={changeCategory}>
                    Show All
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/" onClick={changeCategory}>
                    Smartphones
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/" onClick={changeCategory}>
                    tablets
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/" onClick={changeCategory}>
                    accessories
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="filter__btn filter__btn--sort btn btn-light dropdown-toggle btn-lg"
                type="button"
                id="sortby"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <Link className="dropdown-item" href="/" onClick={changeSort}>
                    A-Z
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/" onClick={changeSort}>
                    Z-A
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ProductList filterData={filterData}></ProductList>
    </>
  );
}
