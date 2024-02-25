import "../assets/scss/info.scss";

export default function info() {
  return (
    <div className="info">
      <div className="container">
        <div className="info__content">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <div>
              <h2 className="info__title">Important to know</h2>
              <p className="info__desc">The Must-know legal bits and details about this service.</p>
            </div>
            <button type="button" className="info__btn btn btn-lg btn-outline-light">
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
