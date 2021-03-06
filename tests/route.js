var request = require('supertest');
describe('checks the status of the server', function () {
    var server;
    beforeEach(function () {
        server = require('../app');
    });
   
    it('responds to /', function testSlash(done) {
        request(server)
                .get('/')
                .expect(200, done);
    });
    it('404 everything else', function testPath(done) {
        request(server)
                .get('/foo/bar')
                .expect(404, done);
    });
});