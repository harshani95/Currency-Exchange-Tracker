const { default: axios } = require("axios");

const getAllCurrency = async(req,resp) => {
    try{
        const currencyNames = await axios.get(`https://openexchangerates.org/api/currencies.json?app_id=${process.env.APP_ID}`)
        const data = currencyNames.data;
        return resp.status(200).json(data);
    }

    catch(err){
        return resp.status(500).json({err: "An error occured"})
    }
    
}

const convertCurrency = async(req,resp) => {
    const { date, sourceCurrency, targetCurrency, amountInSourceCurrency } = req.query;

    try{
        const currencyConvert = await axios.get(`https://openexchangerates.org/api/historical/${date}.json?app_id=${process.env.APP_ID}`);
        const currencyData = currencyConvert.data;

        if (!currencyData || response.status !== 200) {
            throw new Error("Unable to fetch exchange rates");
          }

        const rates = data.rates;

        if (
            !rates.hasOwnProperty(sourceCurrency) ||
            !rates.hasOwnProperty(targetCurrency)
          ) {
            throw new Error(
              "The entered sourceCurrency and targetCurrency are not available"
            );
          }

          const currencyNames = await axios.get(`https://openexchangerates.org/api/currencies.json?app_id=${process.env.APP_ID}`);
          const currencyNamesdata = currencyNames.data;

    
    const sourceCurrencyName = currencyNamesdata[sourceCurrency];
    
    const targetCurrencyName = currencyNamesdata[targetCurrency];

    
    const sourceRate = rates[sourceCurrency];
    const targetRate = rates[targetCurrency];

    const targetValue = (targetRate / sourceRate) * amountInSourceCurrency;

    return resp.json({
      amountInTargetCurrency: targetValue,
      sourceCurrencyName,
      targetCurrencyName,
    });
    
    }

    catch(err){
        return resp.status(500).json({err: "An error occured"})
    }
    
}

module.exports = {
  getAllCurrency,
  convertCurrency};
