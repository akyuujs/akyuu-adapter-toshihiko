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
| dialect|          | default to `"mysql"`, see [Toshihiko's document](http://toshihiko.readthedocs.io/en/latest/getting-started/#installation) |
| ...    |          | see [Toshihiko's document](http://toshihiko.readthedocs.io/en/latest/getting-started/#installation) |

### A Probably Demo Configuration File

**Filename:** ./config/default/connections.js

```js
module.exports = {
    main: {
        adapter: "toshihiko",
        dialect: "mysql",
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
