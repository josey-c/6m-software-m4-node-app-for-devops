
// This is the only function that will be called by the endpoint.
function print(req, res){
    res.send("Hello I'm Joseph! Developed in Heroku!");
}

module.exports = print;