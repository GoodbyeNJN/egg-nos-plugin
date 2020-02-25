'use strict';

/**
 * egg-nos-plugin default config
 * @member Config#nos
 * @property {String} accessKey - access key
 * @property {String} accessSecret - access secret
 * @property {String} endpoint - endpoint，不同地域不同
 * @property {String} defaultBucket - 默认的 Bucket，如果不设置，那么需要在单独的每次请求中进行设置
 */
exports.nos = {
  accessKey: 'your-access-key',
  accessSecret: 'your-access-secret',
  endpoint: 'http://nos-eastchina1.126.net',
  defaultBucket: 'nos-test',
};
