import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CurrencyTracker from "./components/tracker/CurrencyTracker";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/currency-exchange" element={<CurrencyTracker />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
