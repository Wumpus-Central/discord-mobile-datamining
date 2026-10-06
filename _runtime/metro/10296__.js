// _runtime/metro/10296__.js
import includeCommonConfiguration2 from "../10210_includeCommonConfiguration.js";
import _mod10212 from "10212__.js";
import _mod10287 from "10287__.js";
import _mod10288 from "10288__.js";
import _mod10290 from "10290__.js";
import _mod10291 from "10291__.js";
import _mod10292 from "10292__.js";
import _mod10293 from "10293__.js";
import _mod10294 from "10294__.js";
import _mod10295 from "10295__.js";
import { Chrono } from "10170__.js";

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10288.default(), , , ,];
  new module_10288.default();
  items[1] = new module_10291.default();
  new module_10291.default();
  items[2] = new module_10293.default();
  new module_10293.default();
  items[3] = new module_10292.default();
  new module_10292.default();
  items[4] = new module_10290.default();
  new module_10290.default();
  items1 = [new module_10294.default()];
  new module_10294.default();
  items1[1] = new module_10295.default();
  new module_10295.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10212.default));
  return result;
}
const fn =
  (this && this.__importDefault) ||
  ((__esModule) => {
    let tmp2;
    const tmp = __esModule;
    if (!tmp) {
      tmp2 = { default: __esModule };
      const obj = { default: __esModule };
    } else {
      tmp2 = __esModule;
    }
    return tmp2;
  });
function createCasualConfiguration() {
  const tmp = createConfiguration();
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10287.default();
  unshift(_default);
  return tmp;
}
const module_10212 = fn(_mod10212);
const module_10287 = fn(_mod10287);
const module_10288 = fn(_mod10288);
const module_10290 = fn(_mod10290);
const module_10291 = fn(_mod10291);
const module_10292 = fn(_mod10292);
const module_10293 = fn(_mod10293);
const module_10294 = fn(_mod10294);
const module_10295 = fn(_mod10295);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10287.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10287.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("10170__.js").Chrono(createConfiguration());
const Chrono_export = require("10170__.js").Chrono;

export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export { createCasualConfiguration };
export { createConfiguration };
export { Chrono_export as Chrono };
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;
