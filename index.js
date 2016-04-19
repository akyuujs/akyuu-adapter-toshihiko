/**
 * XadillaX created at 2016-04-19 15:42:44 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

var Model = require("toshihiko/lib/model");
var T = require("toshihiko");

Model.prototype.nextId = function(callback) {
    this.toshihiko.nextSequence(this.name, callback);
};

exports.create = function(config) {
    var toshihiko = new T.Toshihiko(config.database, config.username, config.password, config);
    toshihiko.TYPE = T.Type;

    toshihiko.nextSequence = function(name, callback) {
        toshihiko.execute(
            "INSERT INTO `_sequence` (`name`) VALUES('{name}') ON DUPLICATE KEY ".assign({
                name: name
            }) + "UPDATE `id` = LAST_INSERT_ID(`id` + 1)",

            function(err, info) {
                if (err) return callback(err);
                callback(null, info.insertId);
            });
    };

    return toshihiko;
};
