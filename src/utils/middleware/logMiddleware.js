
const logMiddlware= (req,res,next) => {
    const name = req.headers.name;
    if (!name ){
        res.json({message:"Identifiquese"})
    }
    console.log( "Solicitud de usuarios " + name + " a las "  + new Date(req.requestTime) +'');
    next()
}

module.exports=logMiddlware