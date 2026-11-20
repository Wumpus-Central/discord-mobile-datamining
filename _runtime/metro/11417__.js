// === Module 11417: ? ===

// Module 11417
import includeCommonConfiguration from "includeCommonConfiguration" /* 11331 */;
import _mod11333 from "module_11333" /* 11333 */;
import _mod11408 from "module_11408" /* 11408 */;
import _mod11409 from "module_11409" /* 11409 */;
import _mod11411 from "module_11411" /* 11411 */;
import _mod11412 from "module_11412" /* 11412 */;
import _mod11413 from "module_11413" /* 11413 */;
import _mod11414 from "module_11414" /* 11414 */;
import _mod11415 from "module_11415" /* 11415 */;
import _mod11416 from "module_11416" /* 11416 */;

const require = globalThis.__r;

function createConfiguration() {
  const obj = { parsers: null, refiners: null };
  items = [new _isNativeReflectConstruct.default(), , , , ];
  const _default = new _isNativeReflectConstruct.default();
  items[1] = new _isNativeReflectConstruct.default();
  const _default1 = new _isNativeReflectConstruct.default();
  items[2] = new _isNativeReflectConstruct.default();
  const _default2 = new _isNativeReflectConstruct.default();
  items[3] = new _isNativeReflectConstruct.default();
  const _default3 = new _isNativeReflectConstruct.default();
  items[4] = new _isNativeReflectConstruct.default();
  obj.parsers = items;
  const _default4 = new _isNativeReflectConstruct.default();
  const items1 = [new _isNativeReflectConstruct.default(), ];
  const _default5 = new _isNativeReflectConstruct.default();
  items1[1] = new _isNativeReflectConstruct.default();
  obj.refiners = items1;
  const result = includeCommonConfiguration.includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof regExp.default));
  return result;
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
  const tmp = createConfiguration();
  const parsers = tmp.parsers;
  parsers.unshift(new _isNativeReflectConstruct.default());
  return tmp;
}
const regExp = fn(_mod11333);
fn(_mod11408);
fn(_mod11409);
fn(_mod11411);
fn(_mod11412);
fn(_mod11413);
fn(_mod11414);
fn(_mod11415);
const _isNativeReflectConstruct = fn(_mod11416);
const configuration = createConfiguration();
let parsers = configuration.parsers;
parsers.unshift(new _isNativeReflectConstruct.default());
const chrono = new require("module_11291").Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
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
parsers1.unshift(new _isNativeReflectConstruct.default());
const chrono1 = new require("module_11291").Chrono(configuration1);
const chrono2 = new require("module_11291").Chrono(createConfiguration());

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
export const hant = chrono;
export const casual = chrono1;
export const strict = chrono2;