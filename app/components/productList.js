import Link from "next/link";
import Image from "next/image";
import tag from "../assets/images/tag.svg";
import "../assets/scss/productList.scss";

export default function productList({ filterData }) {
  return (
    <div className="productList">
      <div className="container">
        <div className="row">
          {filterData.map((item, index) => {
            let price = item.price;
            var digits = price.toString().split(".");

            return (
              <div key={index} className="productList__col col-12 col-md-6 col-lg-4">
                <div className="productList__card card text-center shadow-lg">
                  {item.offer != "" ? <div className="productList__offer"> {item.offer} </div> : ""}
                  <div>
                    <span className="productList__brand">{item.brand}</span>
                    <h2 className="productList__name">{item.name}</h2>
                  </div>
                  <div className="">
                    <Image
                      loader={() => item.img}
                      className="productList__img img-fluid"
                      src={item.img}
                      alt="Product Image"
                      width={500}
                      height={500}
                    />
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
                      <Image className="me-2" src={tag} alt="Product Price" />
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
                      <Image className="me-2" src={tag} alt="Product Image" />
                      Full price:
                      {item.full_price != "" ? (
                        <strong className="productList__full-price">{item.full_price} BD </strong>
                      ) : (
                        ""
                      )}
                      VAT inclusive
                    </p>
                  )}

                  <Link href="/" className="productList__btn btn btn-outline-primary">
                    {item.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
