// === Module 10316: ? ===

// Module 10316
import _mod10203 from "module_10203" /* 10203 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10210 */;
import _mod10317 from "module_10317" /* 10317 */;
import _mod10319 from "module_10319" /* 10319 */;
import _mod10320 from "module_10320" /* 10320 */;
import _mod10321 from "module_10321" /* 10321 */;
import _mod10322 from "module_10322" /* 10322 */;
import _mod10323 from "module_10323" /* 10323 */;
import _mod10324 from "module_10324" /* 10324 */;
import _mod10325 from "module_10325" /* 10325 */;
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
  items = [new module_10203.default(flag2), , , , ];
  new module_10203.default(flag2);
  items[1] = new module_10317.default();
  new module_10317.default();
  items[2] = new module_10319.default();
  new module_10319.default();
  items[3] = new module_10322.default();
  new module_10322.default();
  items[4] = new module_10325.default();
  new module_10325.default();
  items1 = [new module_10320.default(), ];
  new module_10320.default();
  items1[1] = new module_10321.default();
  new module_10321.default();
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
  const _default = new module_10323.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10324.default();
  push2(_default1);
  return tmp;
}
const module_10203 = fn(_mod10203);
const module_10317 = fn(_mod10317);
const module_10319 = fn(_mod10319);
const module_10320 = fn(_mod10320);
const module_10321 = fn(_mod10321);
const module_10322 = fn(_mod10322);
const module_10323 = fn(_mod10323);
const module_10324 = fn(_mod10324);
const module_10325 = fn(_mod10325);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10323.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10324.default();
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