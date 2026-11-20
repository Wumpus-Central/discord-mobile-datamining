// === Module 11374: ? ===

// Module 11374
import _mod11324 from "module_11324" /* 11324 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 11331 */;
import _mod11375 from "module_11375" /* 11375 */;
import _mod11377 from "module_11377" /* 11377 */;
import _mod11378 from "module_11378" /* 11378 */;
import _mod11379 from "module_11379" /* 11379 */;
import _mod11380 from "module_11380" /* 11380 */;
import _mod11381 from "module_11381" /* 11381 */;
import _mod11382 from "module_11382" /* 11382 */;

const require = globalThis.__r;

function createConfiguration() {
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: null, refiners: null };
  items = [new regExp.default(flag2), , , ];
  const _default = new regExp.default(flag2);
  items[1] = new _isNativeReflectConstruct.default();
  const _default1 = new _isNativeReflectConstruct.default();
  items[2] = new _isNativeReflectConstruct.default();
  const _default2 = new _isNativeReflectConstruct.default();
  items[3] = new _isNativeReflectConstruct.default();
  obj.parsers = items;
  const _default3 = new _isNativeReflectConstruct.default();
  const items1 = [new _isNativeReflectConstruct.default(), ];
  const _default4 = new _isNativeReflectConstruct.default();
  items1[1] = new _isNativeReflectConstruct.default();
  obj.refiners = items1;
  return includeCommonConfiguration.includeCommonConfiguration(obj, flag);
}
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
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  parsers.push(new _isNativeReflectConstruct.default());
  const parsers1 = tmp.parsers;
  const _default = new _isNativeReflectConstruct.default();
  parsers1.push(new _isNativeReflectConstruct.default());
  return tmp;
}
const regExp = fn(_mod11324);
fn(_mod11375);
fn(_mod11377);
fn(_mod11378);
fn(_mod11379);
fn(_mod11380);
fn(_mod11381);
const _isNativeReflectConstruct = fn(_mod11382);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
parsers.push(new _isNativeReflectConstruct.default());
let parsers1 = configuration.parsers;
let _default = new _isNativeReflectConstruct.default();
let obj = {
  enumerable: true,
  get() {
    return require("module_11291").Chrono;
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
parsers1.push(new _isNativeReflectConstruct.default());
const chrono = new require("module_11291").Chrono(configuration);
const chrono1 = new require("module_11291").Chrono(createConfiguration(true));

export function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
}
export function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
}
export { createCasualConfiguration };
export { createConfiguration };
export const Chrono = require("module_11291").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;