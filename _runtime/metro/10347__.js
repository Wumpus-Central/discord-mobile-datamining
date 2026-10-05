// === Module 10347: ? ===

// Module 10347
import _mod10190 from "module_10190" /* 10190 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10197 */;
import _mod10202 from "module_10202" /* 10202 */;
import _mod10348 from "module_10348" /* 10348 */;
import _mod10350 from "module_10350" /* 10350 */;
import _mod10351 from "module_10351" /* 10351 */;
import _mod10352 from "module_10352" /* 10352 */;
import { Chrono } from "module_10157" /* 10157 */;

const require = globalThis.__r;

let items;
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
  let items;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: items, refiners: [] };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10202.default(), , , , ];
  new module_10202.default();
  items[1] = new module_10190.default(flag);
  new module_10190.default(flag);
  items[2] = new module_10350.default();
  new module_10350.default();
  items[3] = new module_10348.default();
  new module_10348.default();
  items[4] = new module_10351.default();
  new module_10351.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10352.default();
  unshift(_default5);
  return result;
}
function createConfiguration() {
  let items;
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: items, refiners: [] };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10202.default(), , , , ];
  new module_10202.default();
  items[1] = new module_10190.default(flag2);
  new module_10190.default(flag2);
  items[2] = new module_10350.default();
  new module_10350.default();
  items[3] = new module_10348.default();
  new module_10348.default();
  items[4] = new module_10351.default();
  new module_10351.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10190 = fn(_mod10190);
const module_10202 = fn(_mod10202);
const module_10348 = fn(_mod10348);
const module_10350 = fn(_mod10350);
const module_10351 = fn(_mod10351);
const module_10352 = fn(_mod10352);
const chrono = new require("module_10157").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10202.default();
items = [_default, , , , ];
const _default1 = new module_10190.default(true);
items[1] = _default1;
const _default2 = new module_10350.default();
items[2] = _default2;
const _default3 = new module_10348.default();
items[3] = _default3;
const _default4 = new module_10351.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10157").Chrono;

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
export const casual = chrono;
export const strict = chrono1;