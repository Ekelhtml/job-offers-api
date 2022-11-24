const JobOffersModel = require("../models/joboffers.model");

const editJobOffers = async (req) => {
    const jobOffer = req.body;
    const  {_id}  = req.params;
    console.log(_id);
    const updateJobOffers = await JobOffersModel.findById(_id).exec();
    console.log(updateJobOffers);
    if(!updateJobOffers) throw new Error("Oferta Laboral no Existe.");
    updateJobOffers.title = jobOffer.title;
    updateJobOffers.description = jobOffer.description;
    updateJobOffers.job_requirements = jobOffer.job_requirements;
    updateJobOffers.job_availability = jobOffer.job_availability;
    updateJobOffers.vacancy_closed = jobOffer.vacancy_closed;
    await updateJobOffers.save();
};

module.exports = editJobOffers;