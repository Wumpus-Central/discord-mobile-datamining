// === Module 10587: ? ===

// Module 10587
import includeCommonConfiguration from "includeCommonConfiguration" /* 10500 */;
import _mod10502 from "module_10502" /* 10502 */;
import _mod10571 from "module_10571" /* 10571 */;
import _mod10573 from "module_10573" /* 10573 */;
import _mod10574 from "module_10574" /* 10574 */;
import _mod10575 from "module_10575" /* 10575 */;
import _mod10576 from "module_10576" /* 10576 */;
import _mod10588 from "module_10588" /* 10588 */;
import _mod10589 from "module_10589" /* 10589 */;
import _mod10590 from "module_10590" /* 10590 */;

function createConfiguration() {
  const obj = { parsers: null, refiners: null };
  const items = [new _isNativeReflectConstruct.default(), , , , ];
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
const regExp = fn(_mod10502);
fn(_mod10588);
fn(_mod10571);
fn(_mod10573);
fn(_mod10574);
fn(_mod10575);
fn(_mod10576);
fn(_mod10589);
const _isNativeReflectConstruct = fn(_mod10590);
const configuration = createConfiguration();
let parsers = configuration.parsers;
parsers.unshift(new _isNativeReflectConstruct.default());
const chrono = new require("module_10460").Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
let _default = new _isNativeReflectConstruct.default();
const obj1 = {
  enumerable: true,
  get() {
    return require("ReferenceWithTimezone").ReferenceWithTimezone;
  }
};
const obj2 = {
  enumerable: true,
  get() {
    return require("Meridiem").Meridiem;
  }
};
const obj3 = {
  enumerable: true,
  get() {
    return require("Meridiem").Weekday;
  }
};
parsers1.unshift(new _isNativeReflectConstruct.default());
const chrono1 = new require("module_10460").Chrono(configuration1);
const chrono2 = new require("module_10460").Chrono(createConfiguration());

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
export const Chrono = require("ReferenceWithTimezone").ParsingComponents;
export const ParsingResult = require("ReferenceWithTimezone").ParsingComponents;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const hans = chrono;
export const casual = chrono1;
export const strict = chrono2;