// === Module 10204: ? ===

// Module 10204
import _mod10190 from "module_10190" /* 10190 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10197 */;
import _mod10202 from "module_10202" /* 10202 */;
import _mod10205 from "module_10205" /* 10205 */;
import _mod10206 from "module_10206" /* 10206 */;
import _mod10208 from "module_10208" /* 10208 */;
import _mod10209 from "module_10209" /* 10209 */;
import _mod10210 from "module_10210" /* 10210 */;
import _mod10211 from "module_10211" /* 10211 */;
import _mod10212 from "module_10212" /* 10212 */;
import _mod10213 from "module_10213" /* 10213 */;
import _mod10214 from "module_10214" /* 10214 */;
import _mod10215 from "module_10215" /* 10215 */;
import { Chrono } from "module_10157" /* 10157 */;

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
  items = [new module_10202.default(), , , , , , ];
  new module_10202.default();
  items[1] = new module_10190.default(flag2);
  new module_10190.default(flag2);
  items[2] = new module_10205.default();
  new module_10205.default();
  items[3] = new module_10208.default();
  new module_10208.default();
  items[4] = new module_10213.default();
  new module_10213.default();
  items[5] = new module_10206.default();
  new module_10206.default();
  items[6] = new module_10215.default();
  new module_10215.default();
  items1 = [new module_10209.default(), ];
  new module_10209.default();
  items1[1] = new module_10210.default();
  new module_10210.default();
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
  const _default = new module_10212.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10211.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10214.default();
  unshift3(_default2);
  return tmp;
}
const module_10190 = fn(_mod10190);
const module_10202 = fn(_mod10202);
const module_10205 = fn(_mod10205);
const module_10206 = fn(_mod10206);
const module_10208 = fn(_mod10208);
const module_10209 = fn(_mod10209);
const module_10210 = fn(_mod10210);
const module_10211 = fn(_mod10211);
const module_10212 = fn(_mod10212);
const module_10213 = fn(_mod10213);
const module_10214 = fn(_mod10214);
const module_10215 = fn(_mod10215);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10212.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10211.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10214.default();
unshift3(_default2);
const chrono = new Chrono(configuration);
const chrono1 = new require("module_10157").Chrono(createConfiguration(true));
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