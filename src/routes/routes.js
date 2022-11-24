const express = require("express");
const router = express.Router();
const {body}= require("express-validator");
const {getJobOffers, addJobOffers, deleteJobOffers, updateJobOffers} = require("../controller/jobOffersController");
const logMiddlware = require("../utils/middleware/logMiddleware");
  
  //router.post("/Usuario", body('name').isLength({ min: 5 }).withMessage("Nombre debe tener mas de tres caracteres"), agregarUsuario);
  router.post(
    "/jobOffers",
    body('title',"Por favor ingrese un titulo de oferta").exists(),
    body('title',"Tipo de dato incorrecto").isString(),
    body('description',"Por favor ingrese una descripcion de oferta").exists(),
    body('description',"Tipo de dato incorrecto").isString(),
    body('job_requirements',"Por favor ingrese requisitos de oferta").exists(),
    body('job_requirements',"Tipo de dato incorrecto").isString(),
    body('job_availability',"Por favor ingrese dispopnibilidad horaria de la oferta").exists(),
    body('job_availability',"Tipo de dato incorrecto").isString(),
    

    // async (req, res, next) => {
    //     const errors = validationResult(req);
    //     if (!errors.isEmpty()) {
    //         return res.status(400).json({ errors: errors.array() })
    //     }
    //     next()
    // },
    addJobOffers);

  var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
  };
  
  router.use(requestTime);
  
  router.get("/jobOffers", logMiddlware, getJobOffers);
  router.delete("/jobOffers/:_id", deleteJobOffers)
  router.put("/jobOffers/:_id", updateJobOffers);

  module.exports = router;