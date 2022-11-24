const { Schema, model } = require("mongoose");

const JobOffersSchema = new Schema({
    title: {type: String, require: [true, "La oferta de trabajo requiere un título"]},
    description: {type: String, require: [true, "La oferta de trabajo requiere una descripción"]},
    job_requirements: {type: String, require: [true, "La oferta de trabajo requiere los requisitos"]},
    job_availability: {type: String, require: [true, "La oferta de trabajo requiere una disponibilidad"]},
    salary: {type:[{ amount: Number, 
        currency: {type: String, enum: ['USD', 'ARS', 'CLP'], require: true} }], 
        require:[true, "La oferta de trabajo requiere un Salario"]},
    vacancy_closed: {type: Boolean, default:false},
    created_at: {type: Date, default: Date.now}
});

const JobOffersModel= model('joboffers', JobOffersSchema);
module.exports= JobOffersModel;