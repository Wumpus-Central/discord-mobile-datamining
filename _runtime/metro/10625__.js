// === Module 10625: ? ===

// Module 10625
import includeCommonConfiguration from "includeCommonConfiguration" /* 10538 */;
import _mod10540 from "module_10540" /* 10540 */;
import _mod10609 from "module_10609" /* 10609 */;
import _mod10611 from "module_10611" /* 10611 */;
import _mod10612 from "module_10612" /* 10612 */;
import _mod10613 from "module_10613" /* 10613 */;
import _mod10614 from "module_10614" /* 10614 */;
import _mod10626 from "module_10626" /* 10626 */;
import _mod10627 from "module_10627" /* 10627 */;
import _mod10628 from "module_10628" /* 10628 */;

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
const regExp = fn(_mod10540);
fn(_mod10626);
fn(_mod10609);
fn(_mod10611);
fn(_mod10612);
fn(_mod10613);
fn(_mod10614);
fn(_mod10627);
const _isNativeReflectConstruct = fn(_mod10628);
const configuration = createConfiguration();
let parsers = configuration.parsers;
parsers.unshift(new _isNativeReflectConstruct.default());
const chrono = new require("module_10498").Chrono(configuration);
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
const chrono1 = new require("module_10498").Chrono(configuration1);
const chrono2 = new require("module_10498").Chrono(createConfiguration());

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