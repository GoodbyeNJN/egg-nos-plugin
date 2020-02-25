'use strict';

const { NosClient } = require('@xgheaven/nos-node-sdk');
const assert = require('assert');

module.exports = app => {
  const { nos } = app.config;

  assert(nos.accessKey && nos.accessSecret && nos.endpoint);

  const client = new NosClient(nos);

  app.beforeStart(async () => {
    await client.listBucket();
    app.coreLogger.info('[egg-nos] init instance success');
  });

  app.nos = client;
};
