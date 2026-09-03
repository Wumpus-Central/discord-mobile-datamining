// === Module 10636: createCasualConfiguration ===

// Module 10636 (createCasualConfiguration)
import regExp2 from "regExp" /* 10479 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 10486 */;
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 10491 */;
import _isNativeReflectConstruct3 from "_isNativeReflectConstruct" /* 10637 */;
import _isNativeReflectConstruct4 from "_isNativeReflectConstruct" /* 10639 */;
import _isNativeReflectConstruct5 from "_isNativeReflectConstruct" /* 10640 */;
import _isNativeReflectConstruct6 from "_isNativeReflectConstruct" /* 10641 */;

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: null };
      obj[0] = __esModule;
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
  obj[0] = items;
  obj[1] = [];
  const result = includeCommonConfiguration.includeCommonConfiguration(obj, false);
  const parsers = result.parsers;
  const _default4 = new _isNativeReflectConstruct.default();
  parsers.unshift(new mod.default());
  return result;
}
function createConfiguration(flag) {
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
  obj[0] = items;
  obj[1] = [];
  return includeCommonConfiguration.includeCommonConfiguration(obj, flag);
}
const regExp = fn(regExp2);
let _isNativeReflectConstruct = fn(_isNativeReflectConstruct2);
_isNativeReflectConstruct = fn(_isNativeReflectConstruct3);
_isNativeReflectConstruct = fn(_isNativeReflectConstruct4);
_isNativeReflectConstruct = fn(_isNativeReflectConstruct5);
let closure_8 = fn(_isNativeReflectConstruct6);
const chrono = new require("Chrono").Chrono(createCasualConfiguration());
const obj4 = { parsers: null, refiners: null };
let items = [new _isNativeReflectConstruct.default(), , , , ];
let _default = new _isNativeReflectConstruct.default();
const obj1 = {
  enumerable: true,
  get() {
    return require(10453) /* ReferenceWithTimezone */.ReferenceWithTimezone;
  }
};
const obj2 = {
  enumerable: true,
  get() {
    return require(10455).Meridiem;
  }
};
const obj3 = {
  enumerable: true,
  get() {
    return require(10455).Weekday;
  }
};
items[1] = new regExp.default(true);
let _default1 = new regExp.default(true);
items[2] = new _isNativeReflectConstruct.default();
let _default2 = new _isNativeReflectConstruct.default();
items[3] = new _isNativeReflectConstruct.default();
let _default3 = new _isNativeReflectConstruct.default();
items[4] = new _isNativeReflectConstruct.default();
obj4[0] = items;
obj4[1] = [];
const chrono1 = new require("Chrono").Chrono(includeCommonConfiguration.includeCommonConfiguration(obj4, true));

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
export const Chrono = require(10453) /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingResult = require(10453) /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingComponents = require(10453) /* ReferenceWithTimezone */.ParsingComponents;
export const ReferenceWithTimezone = require(10453) /* ReferenceWithTimezone */.ReferenceWithTimezone;
export const Meridiem = require(10455).Meridiem;
export const Weekday = require(10455).Weekday;
export const casual = chrono;
export const strict = chrono1;