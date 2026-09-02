// === Module 10525: createConfiguration ===

// Module 10525 (createConfiguration)
import regExp from "regExp" /* 10475 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 10482 */;
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 10526 */;
import _isNativeReflectConstruct3 from "_isNativeReflectConstruct" /* 10528 */;
import _isNativeReflectConstruct4 from "_isNativeReflectConstruct" /* 10529 */;
import _isNativeReflectConstruct5 from "_isNativeReflectConstruct" /* 10530 */;
import _isNativeReflectConstruct6 from "_isNativeReflectConstruct" /* 10531 */;
import _isNativeReflectConstruct7 from "_isNativeReflectConstruct" /* 10532 */;
import _isNativeReflectConstruct8 from "_isNativeReflectConstruct" /* 10533 */;

function createConfiguration(flag, arg1) {
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: null, refiners: null };
  const items = [new mod.default(flag2), , , ];
  const _default = new mod.default(flag2);
  items[1] = new mod2.default();
  const _default1 = new mod2.default();
  items[2] = new mod3.default();
  const _default2 = new mod3.default();
  items[3] = new mod6.default();
  obj[0] = items;
  const _default3 = new mod6.default();
  const items1 = [new mod4.default(), ];
  const _default4 = new mod4.default();
  items1[1] = new mod5.default();
  obj[1] = items1;
  return includeCommonConfiguration.includeCommonConfiguration(obj, flag);
}
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
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  parsers.push(new _isNativeReflectConstruct.default());
  const parsers1 = tmp.parsers;
  const _default = new _isNativeReflectConstruct.default();
  parsers1.push(new _isNativeReflectConstruct.default());
  return tmp;
}
let closure_3 = fn(regExp);
let closure_4 = fn(_isNativeReflectConstruct2);
let closure_5 = fn(_isNativeReflectConstruct3);
let closure_6 = fn(_isNativeReflectConstruct4);
let closure_7 = fn(_isNativeReflectConstruct5);
let closure_8 = fn(_isNativeReflectConstruct6);
let _isNativeReflectConstruct = fn(_isNativeReflectConstruct7);
_isNativeReflectConstruct = fn(_isNativeReflectConstruct8);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
parsers.push(new _isNativeReflectConstruct.default());
let parsers1 = configuration.parsers;
let _default = new _isNativeReflectConstruct.default();
const obj1 = {
  enumerable: true,
  get() {
    return require(10449) /* ReferenceWithTimezone */.ReferenceWithTimezone;
  }
};
const obj2 = {
  enumerable: true,
  get() {
    return require(10451).Meridiem;
  }
};
const obj3 = {
  enumerable: true,
  get() {
    return require(10451).Weekday;
  }
};
parsers1.push(new _isNativeReflectConstruct.default());
const chrono = new require("Chrono").Chrono(configuration);
const chrono1 = new require("Chrono").Chrono(createConfiguration(true));

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
export const Chrono = require(10449) /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingResult = require(10449) /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingComponents = require(10449) /* ReferenceWithTimezone */.ParsingComponents;
export const ReferenceWithTimezone = require(10449) /* ReferenceWithTimezone */.ReferenceWithTimezone;
export const Meridiem = require(10451).Meridiem;
export const Weekday = require(10451).Weekday;
export const casual = chrono;
export const strict = chrono1;