import CuurrencyExchange from "../../assets/images/currency-exchange.webp";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <br />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={CuurrencyExchange}
              alt="Currency Exchange Image"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="text-center">Convert Your Currencies Today</h2>
            <br />
            <p>
              Welcome to &quot;Convert Your Currencies Today !&quot; This
              application allows you to easily convert currencies based on the
              latest exchange rates. Whether you&apos;re planning a trip,
              managing your finances, or simply curious about the value of your
              money in different currencies, this tool is here to help.
            </p>
            <br />
            <button
              className="btn btn-success btn-lg col-6 d-flex justify-content-center align-items-center"
              onClick={() => navigate("/currency-exchange")}
              style={{ alignSelf: "end", marginTop: "5px" }}
            >
              Currency Calculate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
