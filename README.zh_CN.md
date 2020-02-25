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
本插件是 [@xgheaven/nos-node-sdk](https://github.com/XGHeaven/nos-node-sdk) 的简单封装，用于操作网易云对象存储。

## 依赖说明

### 依赖的 egg 版本

egg-nos-plugin 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->
[@xgheaven/nos-node-sdk](https://github.com/XGHeaven/nos-node-sdk)

## 开启插件

```js
// config/plugin.js
exports.nos = {
  enable: true,
  package: 'egg-nos-plugin',
};
```

## 使用场景

可以通过 `app.nos` 或者 `ctx.nos` 获取到 NOS 客户端实例。

```js
app.nos.listBucket();

ctx.nos.listObject();
```

使用文档参见 [@xgheaven/nos-node-sdk](https://github.com/XGHeaven/nos-node-sdk)。

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
