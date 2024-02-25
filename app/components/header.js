import Image from "next/image";
import logo from "../assets/images/logo.svg";
import "../assets/scss/header.scss";

export default function header() {
  return (
    <header className="header fixed-top">
      <div className="header__topbar">
        <div className="container">
          <div className="d-flex justify-content-between">
            <ul className="nav">
              <li className="nav-item">
                <a
                  className="nav-link header__topbar-nav-link header__topbar-nav-link--active"
                  aria-current="page"
                  href="javascript:void(0)"
                >
                  Personal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header__topbar-nav-link" href="javascript:void(0)">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header__topbar-nav-link" href="javascript:void(0)">
                  Wholesale
                </a>
              </li>
            </ul>
            <ul className="nav d-none d-lg-block">
              <li className="nav-item">
                <a className="nav-link header__topbar-right-link" aria-current="page" href="javascript:void(0)">
                  Quickpay & Recharge
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="header__navbar navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container">
          <a className="navbar-brand py-0" href="javascript:void(0)">
            <Image src={logo} alt="STC logo" />
          </a>

          <div className="d-flex align-items-center">
            <div className="header__navbar-right d-lg-none">
              <div>
                <a className="header__navbar-icon border-start border-end" href="#">
                  <i className="bi bi-search"></i>
                </a>
              </div>
              <div>
                <a className="header__navbar-icon border-end" href="#">
                  <i className="bi bi-cart3"></i>
                </a>
              </div>
              <div>
                <a className="header__navbar-login" href="#">
                  <span className="ms-4">Login</span> <i className="ms-3 bi bi-arrow-right-square"></i>
                </a>
              </div>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="header__nav-ul navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link header__navbar-item" href="javascript:void(0)">
                  Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header__navbar-item" href="javascript:void(0)">
                  Devices
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header__navbar-item" href="javascript:void(0)">
                  Mobile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header__navbar-item" href="javascript:void(0)">
                  Internet
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header__navbar-item" href="javascript:void(0)">
                  Gaming
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header__navbar-item" href="javascript:void(0)">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header__navbar-item" href="javascript:void(0)">
                  Sales & Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link header__navbar-item" href="javascript:void(0)">
                  5G
                </a>
              </li>
            </ul>
            <div className="header__navbar-right d-none d-lg-flex">
              <div>
                <a className="header__navbar-icon border-start border-end" href="#">
                  <i className="bi bi-search"></i>
                </a>
              </div>
              <div>
                <a className="header__navbar-icon border-end" href="#">
                  <i className="bi bi-cart3"></i>
                </a>
              </div>
              <div>
                <a className="header__navbar-login" href="#">
                  <span className="ms-4">Login</span> <i className="ms-3 bi bi-arrow-right-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
