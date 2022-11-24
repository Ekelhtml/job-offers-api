
const addJobOffersService = require("../services/addJobOffersService");
const getJobOffersService = require("../services/getJobOffersService" );
const deleteJobOffersService = require("../services/deleteJobOffersService" );
const editJobOffers = require("../services/updateJobOffersService" );
const {validationResult} = require("express-validator");


const addJobOffers = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }
    try {
        await addJobOffersService(req);
        res.json({message: "La oferta ha sido agregado con exito :D"})
    } catch (error) {
        const msg = error.message
        res.json({message: "Ha ocurrido un error " + msg})
        next(error.message);
    }
}

const getJobOffers = async (req, res, next) => {
    try {
        const jobOffers = await getJobOffersService();
        console.log(jobOffers);
        res.json({jobOffers})
    } catch (error) {
        next(error)
    }
}

const deleteJobOffers = async (req, res, next) => {
    try {
        await deleteJobOffersService(req);
        res.json({message: "La oferta de trabajo se ha eliminado con exito."})
    } catch (error) {
        next(error);
    }
}

const updateJobOffers = async (req, res, next) => {
    try {
        await editJobOffers(req);
        res.json({message: "La oferta de trabajo se ha modificado con exito."})
    } catch (error) {
        next(error);
    }
}

module.exports = {getJobOffers, addJobOffers, deleteJobOffers, updateJobOffers};