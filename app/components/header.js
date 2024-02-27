import Image from "next/image";
import logo from "../assets/images/logo.svg";
import "../assets/scss/header.scss";
import Link from "next/link";

export default function header() {
  return (
    <header className="header fixed-top">
      <div className="header__topbar">
        <div className="container">
          <div className="d-flex justify-content-between">
            <ul className="nav">
              <li className="nav-item">
                <Link
                  className="nav-link header__topbar-nav-link header__topbar-nav-link--active"
                  aria-current="page"
                  href="/"
                >
                  Personal
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header__topbar-nav-link" href="/">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header__topbar-nav-link" href="/">
                  Wholesale
                </Link>
              </li>
            </ul>
            <ul className="nav d-none d-lg-block">
              <li className="nav-item">
                <Link className="nav-link header__topbar-right-link" aria-current="page" href="/">
                  Quickpay & Recharge
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="header__navbar navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container">
          <Link className="navbar-brand py-0" href="/">
            <Image width={100} height={100} src={logo} alt="STC logo" priority="false" />
          </Link>

          <div className="d-flex align-items-center">
            <div className="header__navbar-right d-lg-none">
              <div>
                <Link className="header__navbar-icon border-start border-end" href="/">
                  <i className="bi bi-search"></i>
                </Link>
              </div>
              <div>
                <Link className="header__navbar-icon border-end" href="/">
                  <i className="bi bi-cart3"></i>
                </Link>
              </div>
              <div>
                <Link className="header__navbar-login" href="/">
                  <span className="ms-4">Login</span> <i className="ms-3 bi bi-arrow-right-square"></i>
                </Link>
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
                <Link className="nav-link header__navbar-item" href="/">
                  Deals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header__navbar-item" href="/">
                  Devices
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header__navbar-item" href="/">
                  Mobile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header__navbar-item" href="/">
                  Internet
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header__navbar-item" href="/">
                  Gaming
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header__navbar-item" href="/">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header__navbar-item" href="/">
                  Sales & Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header__navbar-item" href="/">
                  5G
                </Link>
              </li>
            </ul>
            <div className="header__navbar-right d-none d-lg-flex">
              <div>
                <Link className="header__navbar-icon border-start border-end" href="/">
                  <i className="bi bi-search"></i>
                </Link>
              </div>
              <div>
                <Link className="header__navbar-icon border-end" href="/">
                  <i className="bi bi-cart3"></i>
                </Link>
              </div>
              <div>
                <Link className="header__navbar-login" href="/">
                  <span className="ms-4">Login</span> <i className="ms-3 bi bi-arrow-right-square"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
