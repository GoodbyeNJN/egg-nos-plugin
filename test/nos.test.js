'use strict';

const mock = require('egg-mock');

describe('test/nos.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/nos-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, nos')
      .expect(200);
  });
});
