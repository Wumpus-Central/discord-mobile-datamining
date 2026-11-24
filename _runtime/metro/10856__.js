// === Module 10856: ? ===

// Module 10856
import includeCommonConfiguration from "includeCommonConfiguration" /* 10770 */;
import _mod10772 from "module_10772" /* 10772 */;
import _mod10847 from "module_10847" /* 10847 */;
import _mod10848 from "module_10848" /* 10848 */;
import _mod10850 from "module_10850" /* 10850 */;
import _mod10851 from "module_10851" /* 10851 */;
import _mod10852 from "module_10852" /* 10852 */;
import _mod10853 from "module_10853" /* 10853 */;
import _mod10854 from "module_10854" /* 10854 */;
import _mod10855 from "module_10855" /* 10855 */;

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
const regExp = fn(_mod10772);
fn(_mod10847);
fn(_mod10848);
fn(_mod10850);
fn(_mod10851);
fn(_mod10852);
fn(_mod10853);
fn(_mod10854);
const _isNativeReflectConstruct = fn(_mod10855);
const configuration = createConfiguration();
let parsers = configuration.parsers;
parsers.unshift(new _isNativeReflectConstruct.default());
const chrono = new require("module_10730").Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
let _default = new _isNativeReflectConstruct.default();
let obj = {
  enumerable: true,
  get() {
    return require("module_10730").Chrono;
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
const chrono1 = new require("module_10730").Chrono(configuration1);
const chrono2 = new require("module_10730").Chrono(createConfiguration());

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
export const Chrono = require("module_10730").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const hant = chrono;
export const casual = chrono1;
export const strict = chrono2;