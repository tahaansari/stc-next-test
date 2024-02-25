import React from "react";
import "../assets/scss/footer.scss";
import logo from "../assets/images/logo-white.svg";
import Image from "next/image";

export default function footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-1">
            <a href="javascript:void(0)">
              <Image src={logo}></Image>
            </a>
          </div>
          <div className="col-12 col-lg-5 order-3 order-lg-2">
            <span className="footer__copyright">©2023 stc Bahrain. All Rights Reserved.</span>
          </div>
          <div className="col-12 col-lg-6 order-lg-3">
            <ul className="nav footer__nav">
              <li className="nav-item">
                <a className="nav-link footer__nav-link active" aria-current="page" href="javascript:void(0)">
                  Important documents
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link footer__nav-link" href="javascript:void(0)">
                  Privacy policy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link footer__nav-link" href="javascript:void(0)">
                  Terms & conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
