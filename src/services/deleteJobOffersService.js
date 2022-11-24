const JobOffersModel = require('../models/joboffers.model');


const deleteJobOffersService = async (req) => {  
    const { _id } = req.params  
    const deleteJobOffers = await JobOffersModel.findById(_id).exec();
    console.log(deleteJobOffers);
    if(!deleteJobOffers)throw new Error("Oferta Laboral no Existe.");
    await JobOffersModel.deleteOne({_id: _id })

};

module.exports = deleteJobOffersService;