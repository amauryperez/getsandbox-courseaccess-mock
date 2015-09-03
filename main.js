var generateCourseAccessData = require('course-access-data.js').generate,
    toolAccessConsts = require('course-access-data.js').consts;

/**
 *  /d2l/api/adp/unstable/aggregatedEvents
 */

Sandbox.define('/d2l/api/adp/unstable/aggregatedEvents','GET', function(req, res) {
    var result = generateCourseAccessData("1");
    
    res.type('application/json');
    res.status(200);
    res.json(result);
})