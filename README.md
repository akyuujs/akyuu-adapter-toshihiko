# akyuu-adapter-toshihiko

Toshihiko adapter for [Akyuujs](https://github.com/akyuujs/akyuu).

## Installation

```sh
$ npm install --save -d akyuu-adapter-toshihiko
```

## Configuration

Make sure you have a `connections` section in your configuration file(s).

And its `adapter` should be `toshihiko`.

| option | required | remark |
|--------|----------|--------|
| adapter| ✓        | must be `toshihiko` |
| database | ✓      | database name |
| username | ✓      | username of MySQL |
| password | ✓     | passowrd of MySQL |
| host |           | host of MySQL |
| port |           | port of MySQL |
| cache |          | same as [Toshihiko's document](https://github.com/XadillaX/Toshihiko#initialize) |
| ... |            | same as [mysql's document](https://www.npmjs.com/package/mysql#pool-options) |

### A Probably Demo Configuration File

**Filename:** ./config/default/connections.js

```js
module.exports = {
    main: {
        adapter: "toshihiko",
        database: "test",
        username: "root",
        password: "",
        host: "127.0.0.1",
        port: 3306,

        showSql: true,
        charset: "utf8mb4_bin"
    }
};
```
