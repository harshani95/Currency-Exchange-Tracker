import { Link } from "react-router-dom";

const CurrencyTracker = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <br />
            <form>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label className="col-form-label">Date</label>
                </div>
                <div className="col-auto">
                  <input type="date" id="date" className="form-control" />
                </div>
              </div>
              <br />

              <div className="input-group mb-3">
                <label className="input-group-text">Source Currency</label>
                <select className="form-select" id="inputGroupSelect01">
                  <option selected>Select Source Currency</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <br />

              <div className="input-group mb-3">
                <label className="input-group-text">Target Currency</label>
                <select className="form-select" id="inputGroupSelect01">
                  <option selected>Select Target Currency</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <br />

              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label className="col-form-label">
                    Source Currency Amount
                  </label>
                </div>
                <div className="col-auto">
                  <input type="number" id="number" className="form-control" />
                </div>
              </div>
            </form>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <button className="btn btn-dark" style={{ marginRight: "20px" }}>
                Get the target Currency
              </button>
              <Link to={"/home"} className="btn btn-warning">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyTracker;
