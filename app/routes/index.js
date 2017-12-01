var api = require("../api/service");

module.exports = function(app, db){
    app.route("/").get(function(req, res){
        res.render('index');
    });    
    app.route("/api/whoami").get(function(req, res){
        return api.headerParserService(req, res);
    });
};