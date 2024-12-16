import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CurrencyTracker = () => {
  const [date, setDate] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [currencyNames, setCurrencyNames] = useState([]);
  const [amountInSourceCurrency, setamountInSourceCurrency] = useState(0);
  const [amountInTargetCurrency, setamountInTargetCurrency] = useState(0);
  const [sourceCurrencyName, setsourceCurrencyName] = useState("");
  const [targetCurrencyName, settargetCurrencyName] = useState("");

  const getAllCurrency = async () => {
    try {
      const responce = await axios.get(
        "http://localhost:3000/api/v1/currency/getAll"
      );
      setCurrencyNames(responce.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCurrency();
  }, []);

  const convertCurrencyTogetAmount = async (event) => {
    event.preventDefault();

    try {
      const responce = await axios.get(
        "http://localhost:3000/api/v1/currency/convert",
        // /convert",
        {
          params: {
            date,
            sourceCurrency,
            targetCurrency,
            amountInSourceCurrency,
          },
        }
      );
      console.log(responce.data);

      const { amountInTargetCurrency } = responce.data;

      const { sourceCurrencyName, targetCurrencyName } = responce.data;
      setsourceCurrencyName(sourceCurrencyName);
      settargetCurrencyName(targetCurrencyName);
      setamountInTargetCurrency(amountInTargetCurrency);
    } catch (err) {
      console.error(err);
    }
  };

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
                  <input
                    type="date"
                    id="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              <br />

              <div className="input-group mb-3">
                <label className="input-group-text">Source Currency</label>
                <select
                  className="form-select"
                  id="inputGroupSelect01"
                  value={sourceCurrency}
                  onChange={(e) => setSourceCurrency(e.target.value)}
                >
                  <option selected>Select Source Currency</option>
                  {Object.keys(currencyNames).map((currency) => (
                    <option className=" p-1" key={currency} value={currency}>
                      {currencyNames[currency]}
                    </option>
                  ))}
                </select>
              </div>
              <br />

              <div className="input-group mb-3">
                <label className="input-group-text">Target Currency</label>
                <select
                  className="form-select"
                  id="inputGroupSelect01"
                  value={targetCurrency}
                  onChange={(e) => setTargetCurrency(e.target.value)}
                >
                  <option selected>Select Target Currency</option>
                  {Object.keys(currencyNames).map((currency) => (
                    <option className=" p-1" key={currency} value={currency}>
                      {currencyNames[currency]}
                    </option>
                  ))}
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
                  <input
                    type="number"
                    id="number"
                    className="form-control"
                    value={amountInSourceCurrency}
                    onChange={(e) => setamountInSourceCurrency(e.target.value)}
                  />
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
              <button
                className="btn btn-dark"
                onClick={convertCurrencyTogetAmount}
                style={{ marginRight: "20px" }}
              >
                Get the target Currency
              </button>
              <Link to={"/"} className="btn btn-warning">
                Cancel
              </Link>
            </div>

            <div>
              <span> {amountInSourceCurrency}</span> {sourceCurrencyName} is
              equal to
              <span> {amountInTargetCurrency.toFixed(2)}</span>{" "}
              {targetCurrencyName}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyTracker;
