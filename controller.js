
// This is the only function that will be called by the endpoint.
function print(req, res){
    res.send("Hello... Never gonna give you up, never gonna let you down in Heroku!");
}


module.exports = print;