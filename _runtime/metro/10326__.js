// === Module 10326: ? ===

// Module 10326
import _mod10203 from "module_10203" /* 10203 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10210 */;
import _mod10215 from "module_10215" /* 10215 */;
import _mod10327 from "module_10327" /* 10327 */;
import _mod10329 from "module_10329" /* 10329 */;
import _mod10331 from "module_10331" /* 10331 */;
import _mod10332 from "module_10332" /* 10332 */;
import _mod10333 from "module_10333" /* 10333 */;
import _mod10334 from "module_10334" /* 10334 */;
import _mod10335 from "module_10335" /* 10335 */;
import _mod10336 from "module_10336" /* 10336 */;
import _mod10337 from "module_10337" /* 10337 */;
import _mod10338 from "module_10338" /* 10338 */;
import _mod10339 from "module_10339" /* 10339 */;
import _mod10340 from "module_10340" /* 10340 */;
import { Chrono } from "module_10170" /* 10170 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10215.default(), , , , , , ];
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
  items1 = [new module_10335.default(), ];
  new module_10335.default();
  items1[1] = new module_10334.default();
  new module_10334.default();
  return includeCommonConfiguration(obj, flag);
}
const fn = this && this.__importDefault || ((__esModule) => {
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
const chrono1 = new require("module_10170").Chrono(createConfiguration(true));
const Chrono_export = require("module_10170").Chrono;

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