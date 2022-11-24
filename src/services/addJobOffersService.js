const axios = require("axios");
const JobOffersModel = require('../models/joboffers.model');

const addJobOffersService = async (req) => {
    
    const jobOffer = req.body;
    const resp = await axios.get("https://v6.exchangerate-api.com/v6/977f1755da5eba0cc4cda6aa/latest/ARS");

    const amountUSD = jobOffer.salary[0].amount * resp.data.conversion_rates.USD;
    const currencyUSD = 'USD';

    const amountCLP = jobOffer.salary[0].amount * resp.data.conversion_rates.CLP;
    const currencyCLP = 'CLP';

    console.log("Salary USD: " + amountUSD + " " + currencyUSD )
    console.log("Salary CLP: " + amountCLP + " " + currencyCLP )

    jobOffer.salary.push({amount: amountUSD, currency: currencyUSD}, {amount: amountCLP, currency: currencyCLP})

    console.log(jobOffer)

    const newJobOffer = new JobOffersModel(jobOffer);
    await newJobOffer.save();

};
module.exports = addJobOffersService;