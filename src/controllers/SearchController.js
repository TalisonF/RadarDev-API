const knex = require("../mysql");
const parseStringAsArray = require("../utils/parseStringAsArray");
const CalcDistance = require("../utils/CalcDistance")
module.exports = {
    async index (req,res){
        const { latitude, longitude , techs} = req.query;
        const techsArray = parseStringAsArray(techs);
        let devs = await knex('devs').select("*");

        devs = devs.filter((dev)=>{
            let contains = false;
            techsArray.map(tech => contains =  dev.techs.includes(tech))
            return contains
        })

        devs = devs.filter(dev => {
            dev.distance = CalcDistance(dev.latitude,dev.longitude, latitude,longitude)
            return (dev.distance < 15)
        })

        res.json(devs)
    }
}