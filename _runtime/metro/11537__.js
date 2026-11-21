// === Module 11537: ? ===

// Module 11537
import includeCommonConfiguration from "includeCommonConfiguration" /* 11451 */;
import _mod11453 from "module_11453" /* 11453 */;
import _mod11528 from "module_11528" /* 11528 */;
import _mod11529 from "module_11529" /* 11529 */;
import _mod11531 from "module_11531" /* 11531 */;
import _mod11532 from "module_11532" /* 11532 */;
import _mod11533 from "module_11533" /* 11533 */;
import _mod11534 from "module_11534" /* 11534 */;
import _mod11535 from "module_11535" /* 11535 */;
import _mod11536 from "module_11536" /* 11536 */;

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
const regExp = fn(_mod11453);
fn(_mod11528);
fn(_mod11529);
fn(_mod11531);
fn(_mod11532);
fn(_mod11533);
fn(_mod11534);
fn(_mod11535);
const _isNativeReflectConstruct = fn(_mod11536);
const configuration = createConfiguration();
let parsers = configuration.parsers;
parsers.unshift(new _isNativeReflectConstruct.default());
const chrono = new require("module_11411").Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
let _default = new _isNativeReflectConstruct.default();
let obj = {
  enumerable: true,
  get() {
    return require("module_11411").Chrono;
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
const chrono1 = new require("module_11411").Chrono(configuration1);
const chrono2 = new require("module_11411").Chrono(createConfiguration());

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
export const Chrono = require("module_11411").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const hant = chrono;
export const casual = chrono1;
export const strict = chrono2;