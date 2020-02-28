'use strict';

const { NosClient } = require('@xgheaven/nos-node-sdk');
const assert = require('assert');

const NOS = Symbol('NosClient')
exports.NOS = NOS

module.exports = app => {
  const { nos } = app.config;

  assert(nos.accessKey && nos.accessSecret && nos.endpoint);

  const client = new NosClient(nos);

  app.beforeStart(async () => {
    await client.listBucket();
    app.coreLogger.info('[egg-nos] init instance success');
  });

  app[NOS] = client;
};
