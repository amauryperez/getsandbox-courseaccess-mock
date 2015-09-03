var consts = {
    MS_PER_DAY: 86400000
};

var generate = function generate() {
    var numResults = 365,
        date = new Date();
        
    var results = {
        "1": {
            "Course Offering": {}
        }
    };
        
    for(var i = 0; i < numResults; i++){
        results["1"]["Course Offering"][date.getTime() - consts.MS_PER_DAY * i] = Math.round(Math.random() * 1000);
    }
    
    return results;
};

module.exports = {
    'consts': consts,
    'generate': generate
}