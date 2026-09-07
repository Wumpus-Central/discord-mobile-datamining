// === Module 10579: ? ===

// Module 10579
import _mod10466 from "module_10466" /* 10466 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 10473 */;
import _mod10580 from "module_10580" /* 10580 */;
import _mod10582 from "module_10582" /* 10582 */;
import _mod10583 from "module_10583" /* 10583 */;
import _mod10584 from "module_10584" /* 10584 */;
import _mod10585 from "module_10585" /* 10585 */;
import _mod10586 from "module_10586" /* 10586 */;
import _mod10587 from "module_10587" /* 10587 */;
import _mod10588 from "module_10588" /* 10588 */;

function createConfiguration() {
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: null, refiners: null };
  const items = [new regExp.default(flag2), , , , ];
  const _default = new regExp.default(flag2);
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
const regExp = fn(_mod10466);
fn(_mod10580);
fn(_mod10582);
fn(_mod10583);
fn(_mod10584);
fn(_mod10585);
fn(_mod10586);
fn(_mod10587);
const _isNativeReflectConstruct = fn(_mod10588);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
parsers.push(new _isNativeReflectConstruct.default());
let parsers1 = configuration.parsers;
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
parsers1.push(new _isNativeReflectConstruct.default());
const chrono = new require("module_10433").Chrono(configuration);
const chrono1 = new require("module_10433").Chrono(createConfiguration(true));

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
export const casual = chrono;
export const strict = chrono1;