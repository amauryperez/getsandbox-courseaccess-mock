var consts = {
    MS_PER_DAY: 86400000,
    MAX_RESULTS: 365
};

var generate = function generate(orgUnit, roleId, start, end) {
    var results = {},
        startDate = new Date(start).setUTCHours(0,0,0,0),
        endDate = new Date(end).setUTCHours(0,0,0,0),
        dateDiff = endDate - startDate,
        roleIds = [];
        
    if (roleId){
        roleIds.push(roleId);
    }
    else {
        for(var i = 0; i < 25; i++) {
            roleIds.push(i + 578);
        }
    }

    results[orgUnit] = {
        "Course Offering": {}
    };
    
    numVals = Math.floor(dateDiff / consts.MS_PER_DAY);

    for(var j = 0; j < roleIds.length; j++){
        results[orgUnit]["Course Offering"][roleIds[j]] = {};
        
        for(var k = numVals; k >= 0; k--){
            results[orgUnit]["Course Offering"][roleIds[j].toString][endDate - consts.MS_PER_DAY * k] = (Math.round(Math.random() * 1000)).toString();
        }
    }
    
    return results;
};

module.exports = {
    'consts': consts,
    'generate': generate
};