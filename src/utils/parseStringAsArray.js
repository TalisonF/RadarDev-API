module.exports = 
    function parseStringAsArray(arrayAsString){
        return arrayAsString.split(",").map(index => index.trim())
    }
