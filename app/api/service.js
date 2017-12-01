
function headerParserService(req, res){
    res.send({
        ipaddress : req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        language  : req.headers["accept-language"].split(",")[0],
        software  : req.headers["user-agent"].split(")")[0].split("(")[1]
    });
}

module.exports = {
    headerParserService : headerParserService
};