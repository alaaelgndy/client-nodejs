/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.PermissionSetsController;
const PermissionSets = testerlib.PermissionSets;
const SinglePermissionSetsItem = testerlib.SinglePermissionSetsItem;
const UserAssignmentsToPermissionSet = testerlib.UserAssignmentsToPermissionSet;

describe("PermissionSetsController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Get all Permission Sets
     */
    it("should testTestGetAllPermissionSets response", function testTestGetAllPermissionSetsTest(done) {
        controller.getAllPermissionSets(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = 'application/json';
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"success": true, "data": [{"id": 1, "name": "Admin user", "assignment_count": 1}, {"id": 2, "name": "Regular user", "assignment_count": 3}, {"id": 3, "name": "Manager", "assignment_count": 0}]}, false, true, false));
            done();
        }).catch(() => undefined);
    });

});
