// === Module 10401: ? ===

// Module 10401
import _mod10244 from "module_10244" /* 10244 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 10251 */;
import _mod10256 from "module_10256" /* 10256 */;
import _mod10402 from "module_10402" /* 10402 */;
import _mod10404 from "module_10404" /* 10404 */;
import _mod10405 from "module_10405" /* 10405 */;
import _mod10406 from "module_10406" /* 10406 */;

const require = globalThis.__r;

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
function createCasualConfiguration() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: null, refiners: null };
  const items = [new _isNativeReflectConstruct.default(), , , , ];
  const _default = new _isNativeReflectConstruct.default();
  items[1] = new regExp.default(flag);
  const _default1 = new regExp.default(flag);
  items[2] = new _isNativeReflectConstruct.default();
  const _default2 = new _isNativeReflectConstruct.default();
  items[3] = new _isNativeReflectConstruct.default();
  const _default3 = new _isNativeReflectConstruct.default();
  items[4] = new _isNativeReflectConstruct.default();
  obj.parsers = items;
  obj.refiners = [];
  const result = includeCommonConfiguration.includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const _default4 = new _isNativeReflectConstruct.default();
  parsers.unshift(new _isNativeReflectConstruct.default());
  return result;
}
function createConfiguration() {
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: null, refiners: null };
  const items = [new _isNativeReflectConstruct.default(), , , , ];
  const _default = new _isNativeReflectConstruct.default();
  items[1] = new regExp.default(flag2);
  const _default1 = new regExp.default(flag2);
  items[2] = new _isNativeReflectConstruct.default();
  const _default2 = new _isNativeReflectConstruct.default();
  items[3] = new _isNativeReflectConstruct.default();
  const _default3 = new _isNativeReflectConstruct.default();
  items[4] = new _isNativeReflectConstruct.default();
  obj.parsers = items;
  obj.refiners = [];
  return includeCommonConfiguration.includeCommonConfiguration(obj, flag);
}
const regExp = fn(_mod10244);
fn(_mod10256);
fn(_mod10402);
fn(_mod10404);
fn(_mod10405);
const _isNativeReflectConstruct = fn(_mod10406);
const chrono = new require("module_10211").Chrono(createCasualConfiguration());
const obj7 = { parsers: null, refiners: null };
let items = [new _isNativeReflectConstruct.default(), , , , ];
let _default = new _isNativeReflectConstruct.default();
let obj = {
  enumerable: true,
  get() {
    return require("module_10211").Chrono;
  }
};
const obj2 = {
  enumerable: true,
  get() {
    return require("ReferenceWithTimezone").ParsingResult;
  }
};
const obj3 = {
  enumerable: true,
  get() {
    return require("ReferenceWithTimezone").ParsingComponents;
  }
};
const obj4 = {
  enumerable: true,
  get() {
    return require("ReferenceWithTimezone").ReferenceWithTimezone;
  }
};
const obj5 = {
  enumerable: true,
  get() {
    return require("Meridiem").Meridiem;
  }
};
const obj6 = {
  enumerable: true,
  get() {
    return require("Meridiem").Weekday;
  }
};
items[1] = new regExp.default(true);
let _default1 = new regExp.default(true);
items[2] = new _isNativeReflectConstruct.default();
let _default2 = new _isNativeReflectConstruct.default();
items[3] = new _isNativeReflectConstruct.default();
let _default3 = new _isNativeReflectConstruct.default();
items[4] = new _isNativeReflectConstruct.default();
obj7.parsers = items;
obj7.refiners = [];
const chrono1 = new require("module_10211").Chrono(includeCommonConfiguration.includeCommonConfiguration(obj7, true));

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
export const Chrono = require("module_10211").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;