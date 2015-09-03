var consts = {
    MS_PER_DAY: 86400000
};

var generate = function generate(offering) {
    var numResults = 365,
        date = new Date();
        
    var results = {
        offering: {
            "Course Offering": {}
        }
    };
        
    for(var i = 0; i < numResults; i++){
        results[offering]["Course Offering"][date.getDate() - consts.MS_PER_DAY * i] = Math.round(Math.random() * 1000);
    }
    
    return results;
};

module.exports = {
    'consts': consts,
    'generate': generate
}