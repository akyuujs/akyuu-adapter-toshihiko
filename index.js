/**
 * XadillaX created at 2016-04-19 15:42:44 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

var template = require("lodash.template");
var Model = require("toshihiko/lib/model");
var T = require("toshihiko");

const SEQUENCE_TEMPLATE = template(
    "INSERT INTO `_sequence` (`name`) VALUES('<%= name %>') ON DUPLICATE KEY UPDATE `id` = LAST_INSERT_ID(`id` + 1)");

Model.prototype.nextId = function(callback) {
    this.toshihiko.nextSequence(this.name, callback);
};

exports.create = function(config) {
    config.dialect = config.dialect || "mysql";
    var toshihiko = new T.Toshihiko(config.dialect, config);
    toshihiko.TYPE = T.Type;

    if(config.dialect === "mysql") {
        toshihiko.nextSequence = function(name, callback) {
            toshihiko.execute(SEQUENCE_TEMPLATE({ name: name }), function(err, info) {
                if(err) return callback(err);
                callback(null, info.insertId);
            });
        };
    }

    return toshihiko;
};
