// === Module 10217: ? ===

// Module 10217
import _mod10203 from "module_10203" /* 10203 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10210 */;
import _mod10215 from "module_10215" /* 10215 */;
import _mod10218 from "module_10218" /* 10218 */;
import _mod10219 from "module_10219" /* 10219 */;
import _mod10221 from "module_10221" /* 10221 */;
import _mod10222 from "module_10222" /* 10222 */;
import _mod10223 from "module_10223" /* 10223 */;
import _mod10224 from "module_10224" /* 10224 */;
import _mod10225 from "module_10225" /* 10225 */;
import _mod10226 from "module_10226" /* 10226 */;
import _mod10227 from "module_10227" /* 10227 */;
import _mod10228 from "module_10228" /* 10228 */;
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
  items = [new module_10215.default(), , , , , , ];
  new module_10215.default();
  items[1] = new module_10203.default(flag2);
  new module_10203.default(flag2);
  items[2] = new module_10218.default();
  new module_10218.default();
  items[3] = new module_10221.default();
  new module_10221.default();
  items[4] = new module_10226.default();
  new module_10226.default();
  items[5] = new module_10219.default();
  new module_10219.default();
  items[6] = new module_10228.default();
  new module_10228.default();
  items1 = [new module_10222.default(), ];
  new module_10222.default();
  items1[1] = new module_10223.default();
  new module_10223.default();
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
  const unshift = parsers.unshift;
  const _default = new module_10225.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10224.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10227.default();
  unshift3(_default2);
  return tmp;
}
const module_10203 = fn(_mod10203);
const module_10215 = fn(_mod10215);
const module_10218 = fn(_mod10218);
const module_10219 = fn(_mod10219);
const module_10221 = fn(_mod10221);
const module_10222 = fn(_mod10222);
const module_10223 = fn(_mod10223);
const module_10224 = fn(_mod10224);
const module_10225 = fn(_mod10225);
const module_10226 = fn(_mod10226);
const module_10227 = fn(_mod10227);
const module_10228 = fn(_mod10228);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10225.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10224.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10227.default();
unshift3(_default2);
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