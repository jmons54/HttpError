"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const presets_1 = require("ts-jest/presets");
const config = {
    transform: Object.assign({}, presets_1.defaults.transform),
};
exports.default = config;
