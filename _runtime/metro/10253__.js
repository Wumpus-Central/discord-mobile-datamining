// === Module 10253: ? ===

// Module 10253
import _mod10203 from "module_10203" /* 10203 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10210 */;
import _mod10254 from "module_10254" /* 10254 */;
import _mod10256 from "module_10256" /* 10256 */;
import _mod10257 from "module_10257" /* 10257 */;
import _mod10258 from "module_10258" /* 10258 */;
import _mod10259 from "module_10259" /* 10259 */;
import _mod10260 from "module_10260" /* 10260 */;
import _mod10261 from "module_10261" /* 10261 */;
import { Chrono } from "module_10170" /* 10170 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10203.default(flag2), , , ];
  new module_10203.default(flag2);
  items[1] = new module_10254.default();
  new module_10254.default();
  items[2] = new module_10256.default();
  new module_10256.default();
  items[3] = new module_10259.default();
  new module_10259.default();
  items1 = [new module_10257.default(), ];
  new module_10257.default();
  items1[1] = new module_10258.default();
  new module_10258.default();
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
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  const push = parsers.push;
  const _default = new module_10260.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10261.default();
  push2(_default1);
  return tmp;
}
const module_10203 = fn(_mod10203);
const module_10254 = fn(_mod10254);
const module_10256 = fn(_mod10256);
const module_10257 = fn(_mod10257);
const module_10258 = fn(_mod10258);
const module_10259 = fn(_mod10259);
const module_10260 = fn(_mod10260);
const module_10261 = fn(_mod10261);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10260.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10261.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10170").Chrono(createConfiguration(true));
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