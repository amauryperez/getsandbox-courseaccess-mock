var consts = {
    MS_PER_DAY: 86400000
};

var generate = function generate(orgUnit) {
    var results = {},
        numResults = 365,
        date = new Date();

    for(var i = 0; i < numResults; i++){
        results[orgUnit]["Course Offering"][date.getTime() - consts.MS_PER_DAY * i] = Math.round(Math.random() * 1000);
    }
    
    return results;
};

module.exports = {
    'consts': consts,
    'generate': generate
}