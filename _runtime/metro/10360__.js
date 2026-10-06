// === Module 10360: ? ===

// Module 10360
import _mod10203 from "module_10203" /* 10203 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10210 */;
import _mod10215 from "module_10215" /* 10215 */;
import _mod10361 from "module_10361" /* 10361 */;
import _mod10363 from "module_10363" /* 10363 */;
import _mod10364 from "module_10364" /* 10364 */;
import _mod10365 from "module_10365" /* 10365 */;
import { Chrono } from "module_10170" /* 10170 */;

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
  items = [new module_10215.default(), , , , ];
  new module_10215.default();
  items[1] = new module_10203.default(flag);
  new module_10203.default(flag);
  items[2] = new module_10363.default();
  new module_10363.default();
  items[3] = new module_10361.default();
  new module_10361.default();
  items[4] = new module_10364.default();
  new module_10364.default();
  const result = includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const unshift = parsers.unshift;
  const _default5 = new module_10365.default();
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
  items = [new module_10215.default(), , , , ];
  new module_10215.default();
  items[1] = new module_10203.default(flag2);
  new module_10203.default(flag2);
  items[2] = new module_10363.default();
  new module_10363.default();
  items[3] = new module_10361.default();
  new module_10361.default();
  items[4] = new module_10364.default();
  new module_10364.default();
  return includeCommonConfiguration(obj, flag);
}
const module_10203 = fn(_mod10203);
const module_10215 = fn(_mod10215);
const module_10361 = fn(_mod10361);
const module_10363 = fn(_mod10363);
const module_10364 = fn(_mod10364);
const module_10365 = fn(_mod10365);
const chrono = new require("module_10170").Chrono(createCasualConfiguration());
const obj7 = { parsers: items, refiners: [] };
let includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
const _default = new module_10215.default();
items = [_default, , , , ];
const _default1 = new module_10203.default(true);
items[1] = _default1;
const _default2 = new module_10363.default();
items[2] = _default2;
const _default3 = new module_10361.default();
items[3] = _default3;
const _default4 = new module_10364.default();
items[4] = _default4;
const chrono1 = new Chrono(includeCommonConfiguration(obj7, true));
const Chrono_export = require("module_10170").Chrono;

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