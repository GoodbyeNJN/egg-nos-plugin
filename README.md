# egg-nos-plugin

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-nos-plugin.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-nos-plugin
[travis-image]: https://img.shields.io/travis/eggjs/egg-nos-plugin.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-nos-plugin
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-nos-plugin.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-nos-plugin?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-nos-plugin.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-nos-plugin
[snyk-image]: https://snyk.io/test/npm/egg-nos-plugin/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-nos-plugin
[download-image]: https://img.shields.io/npm/dm/egg-nos-plugin.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-nos-plugin

<!--
Description here.
-->
This plugin is based on [@xgheaven/nos-node-sdk](https://github.com/XGHeaven/nos-node-sdk). You can easily operate Netease Object Storage through this plugin.

## Install

```bash
$ npm i egg-nos-plugin --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.nos = {
  enable: true,
  package: 'egg-nos-plugin',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.nos = {
  accessKey: 'your-access-key',
  accessSecret: 'your-access-secret',
  endpoint: 'http://nos-eastchina1.126.net',
  defaultBucket: 'nos-test',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->
You can use `app.nos` or `ctx.nos` to access NOS client instance.

```js
app.nos.listBucket();

ctx.nos.listObject();
```

See more documention at [@xgheaven/nos-node-sdk](https://github.com/XGHeaven/nos-node-sdk).

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
