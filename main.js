var generateCourseAccessData = require('course-access-data.js').generate,
    toolAccessConsts = require('course-access-data.js').consts;

/**
 *  /d2l/api/adp/unstable/aggregatedEvents
 */

Sandbox.define('/d2l/api/adp/unstable/aggregatedEvents/{id}/{orgId}/Course Offering','GET', function(req, res) {
    var startTime = req.query.startTime === undefined ? 
            Math.max(0, new Date().getTime() - toolAccessConsts.MS_PER_DAY * toolAccessConsts.MAX_RESULTS) : 
            parseInt(req.query.startTime),
            
        endTime = req.query.endTime === undefined ? 
            new Date().getTime() : 
            parseInt(req.query.endTime);
    
    
    var result = generateCourseAccessData(req.params.orgId, startTime, endTime);
    
    res.type('application/json');
    res.status(200);
    res.json(result);
})