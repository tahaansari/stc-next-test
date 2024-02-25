import React from "react";
import tag from "../assets/images/tag.svg";
import "../assets/scss/productList.scss";

export default function productList(props) {
  return (
    <div className="productList">
      <div className="container">
        <div className="row">
          {props.filterData.map((item, index) => {
            let price = item.price;
            var digits = price.toString().split(".");
            // var realDigits = digits.map(Number);
            // console.log(realDigits);
            return (
              <div key={index} className="productList__col col-12 col-md-6 col-lg-4">
                <div className="productList__card card text-center shadow-lg">
                  {item.offer != "" ? <div className="productList__offer"> {item.offer} </div> : ""}
                  <div>
                    <span className="productList__brand">{item.brand}</span>
                    <h2 className="productList__name">{item.name}</h2>
                  </div>
                  <div className="">
                    <img className="productList__img img-fluid" src={item.img} alt="" />
                  </div>
                  <span className="productList__starting-from">Started from</span>
                  <div className="productList__price">
                    <sup className="productList__price-currency">BD</sup>
                    <strong className="productList__big-price">{digits[0]}</strong>
                    <sup className="productList__price-paise">
                      <strong>.{digits[1]}</strong>
                    </sup>
                    <sub className="productList__price-period">/mo</sub>
                  </div>

                  {item.discount_price != "" ? (
                    <p className="productList__price-box">
                      <img className="me-2" src={tag} alt="" />
                      Full price:
                      {item.full_price != "" ? (
                        <span className="productList__full-price productList__full-price--linethrough ms-2">
                          {item.full_price} BD
                        </span>
                      ) : (
                        ""
                      )}
                      {item.discount_price != "" ? (
                        <strong className="productList__discounted-price"> BD {item.discount_price} </strong>
                      ) : (
                        ""
                      )}
                      VAT inclusive
                    </p>
                  ) : (
                    <p className="productList__price-box">
                      <img className="me-2" src={tag} alt="" />
                      Full price:
                      {item.full_price != "" ? (
                        <strong className="productList__full-price">{item.full_price} BD </strong>
                      ) : (
                        ""
                      )}
                      VAT inclusive
                    </p>
                  )}

                  <a href="#" className="productList__btn btn btn-outline-primary">
                    {item.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
