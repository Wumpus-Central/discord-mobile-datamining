// _runtime/metro/10326__.js
import _mod10203 from "10203__.js";
import includeCommonConfiguration2 from "../10210_includeCommonConfiguration.js";
import _mod10215 from "10215__.js";
import _mod10327 from "10327__.js";
import _mod10329 from "10329__.js";
import _mod10331 from "10331__.js";
import _mod10332 from "10332__.js";
import _mod10333 from "10333__.js";
import _mod10334 from "10334__.js";
import _mod10335 from "10335__.js";
import _mod10336 from "10336__.js";
import _mod10337 from "10337__.js";
import _mod10338 from "10338__.js";
import _mod10339 from "10339__.js";
import _mod10340 from "10340__.js";
import { Chrono } from "10170__.js";

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10215.default(), , , , , ,];
  new module_10215.default();
  items[1] = new module_10203.default(true);
  new module_10203.default(true);
  items[2] = new module_10327.default();
  new module_10327.default();
  items[3] = new module_10329.default();
  new module_10329.default();
  items[4] = new module_10338.default();
  new module_10338.default();
  items[5] = new module_10332.default(flag);
  new module_10332.default(flag);
  items[6] = new module_10333.default();
  new module_10333.default();
  items1 = [new module_10335.default()];
  new module_10335.default();
  items1[1] = new module_10334.default();
  new module_10334.default();
  return includeCommonConfiguration(obj, flag);
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10336.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10337.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10331.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10339.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10340.default();
  unshift5(_default4);
  return tmp;
}
const module_10327 = fn(_mod10327);
const module_10329 = fn(_mod10329);
const module_10331 = fn(_mod10331);
const module_10332 = fn(_mod10332);
const module_10333 = fn(_mod10333);
const module_10334 = fn(_mod10334);
const module_10335 = fn(_mod10335);
const module_10336 = fn(_mod10336);
const module_10337 = fn(_mod10337);
const module_10338 = fn(_mod10338);
const module_10339 = fn(_mod10339);
const module_10203 = fn(_mod10203);
const module_10340 = fn(_mod10340);
const module_10215 = fn(_mod10215);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10336.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10337.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10331.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10339.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10340.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("10170__.js").Chrono(createConfiguration(true));
const Chrono_export = require("10170__.js").Chrono;

export { createCasualConfiguration };
export { createConfiguration };
export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export { Chrono_export as Chrono };
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
