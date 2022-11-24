const JobOffersModel = require('../models/joboffers.model');

const getJobOffersService = async () => {
    console.log("Buscando ofertas laborales... Aguarde por favor.");
    const jobOffers = await JobOffersModel.find();
    console.log("Datos de Ofertas Laborales obtenido " + jobOffers)
    return jobOffers;
}

module.exports = getJobOffersService;