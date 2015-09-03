var consts = {
    MS_PER_DAY: 86400000
};

var generate = function generate(orgUnit, start, end) {
    var results = {},
        numResults = 365,
        startDate = new Date(start).setUTCHours(0,0,0,0),
        endDate = new Date(end).setUTCHours(0,0,0,0),
        dateDiff = endDate - startDate;

    results[orgUnit] = {
        "Course Offering": {}
    };

    for(var i = 0; i < numResults && i * consts.MS_PER_DAY <= dateDiff; i++){
        results[orgUnit]["Course Offering"][endDate - consts.MS_PER_DAY * i] = Math.round(Math.random() * 1000);
    }
    
    return results;
};

module.exports = {
    'consts': consts,
    'generate': generate
}