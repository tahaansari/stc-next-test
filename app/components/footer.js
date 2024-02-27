import React from "react";
import "../assets/scss/footer.scss";
import logo from "../assets/images/logo-white.svg";
import Image from "next/image";
import Link from "next/link";

export default function footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-1">
            <Link href="/">
              <Image width={100} height={100} src={logo} alt="STC logo" priority={false}></Image>
            </Link>
          </div>
          <div className="col-12 col-lg-5 order-3 order-lg-2">
            <span className="footer__copyright">©2023 stc Bahrain. All Rights Reserved.</span>
          </div>
          <div className="col-12 col-lg-6 order-lg-3">
            <ul className="nav footer__nav">
              <li className="nav-item">
                <Link className="nav-link footer__nav-link active" aria-current="page" href="/">
                  Important documents
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link footer__nav-link" href="/">
                  Privacy policy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link footer__nav-link" href="/">
                  Terms & conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
