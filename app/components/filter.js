import "../assets/scss/filter.scss";

export default function filter(props) {
  // category
  const changeCategory = (e) => {
    document.querySelector("#category").innerHTML = e.target.innerHTML;
    props.categoryChange(e.target.innerHTML);
  };
  // name
  const changeSort = (e) => {
    document.querySelector("#sortby").innerHTML = e.target.innerHTML;
    props.sortChange(e.target.innerHTML);
  };

  return (
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
                <a className="dropdown-item" href="#" onClick={changeCategory}>
                  Show All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={changeCategory}>
                  Smartphones
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={changeCategory}>
                  tablets
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={changeCategory}>
                  accessories
                </a>
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
                <a className="dropdown-item" href="#" onClick={changeSort}>
                  A-Z
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={changeSort}>
                  Z-A
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
