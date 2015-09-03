var generateCourseAccessData = require('course-access-data.js').generate,
    toolAccessConsts = require('course-access-data.js').consts;

/**
 *  /d2l/api/adp/unstable/aggregatedEvents
 */

Sandbox.define('/d2l/api/adp/unstable/aggregatedEvents/{id}/{orgId}/Course Offering','GET', function(req, res) {
    var result = generateCourseAccessData(req.params.orgId);
    
    res.type('application/json');
    res.status(200);
    res.json(result);
})