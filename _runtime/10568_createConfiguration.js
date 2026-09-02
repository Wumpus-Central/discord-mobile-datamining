// _runtime/10568_createConfiguration.js
import includeCommonConfiguration from "10482_includeCommonConfiguration.js";
import regExp from "10484_regExp.js";
import _isNativeReflectConstruct2 from "10559__isNativeReflectConstruct.js";
import _isNativeReflectConstruct3 from "10560__isNativeReflectConstruct.js";
import _isNativeReflectConstruct4 from "10562__isNativeReflectConstruct.js";
import _isNativeReflectConstruct5 from "10563__isNativeReflectConstruct.js";
import _isNativeReflectConstruct6 from "10564__isNativeReflectConstruct.js";
import _isNativeReflectConstruct7 from "10565__isNativeReflectConstruct.js";
import _isNativeReflectConstruct8 from "10566__isNativeReflectConstruct.js";
import _isNativeReflectConstruct9 from "10567__isNativeReflectConstruct.js";
import { ReferenceWithTimezone } from "10449_ReferenceWithTimezone.js";

function createConfiguration() {
  const obj = { parsers: null, refiners: null };
  const items = [new mod.default(), , , ,];
  const _default = new mod.default();
  items[1] = new mod3.default();
  const _default1 = new mod3.default();
  items[2] = new mod5.default();
  const _default2 = new mod5.default();
  items[3] = new mod4.default();
  const _default3 = new mod4.default();
  items[4] = new mod2.default();
  obj[0] = items;
  const _default4 = new mod2.default();
  const items1 = [new mod6.default()];
  const _default5 = new mod6.default();
  items1[1] = new mod7.default();
  obj[1] = items1;
  const result = includeCommonConfiguration.includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((arg0) => !(arg0 instanceof mod.default));
  return result;
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
  const tmp = createConfiguration();
  const parsers = tmp.parsers;
  parsers.unshift(new _isNativeReflectConstruct.default());
  return tmp;
}
let closure_3 = fn(regExp);
const _isNativeReflectConstruct = fn(_isNativeReflectConstruct2);
let closure_5 = fn(_isNativeReflectConstruct3);
let closure_6 = fn(_isNativeReflectConstruct4);
let closure_7 = fn(_isNativeReflectConstruct5);
let closure_8 = fn(_isNativeReflectConstruct6);
let closure_9 = fn(_isNativeReflectConstruct7);
let closure_10 = fn(_isNativeReflectConstruct8);
let closure_11 = fn(_isNativeReflectConstruct9);
const configuration = createConfiguration();
let parsers = configuration.parsers;
parsers.unshift(new _isNativeReflectConstruct.default());
const chrono = new require("Chrono").Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
let _default = new _isNativeReflectConstruct.default();
const obj1 = {
  enumerable: true,
  get() {
    return ReferenceWithTimezone /* ReferenceWithTimezone */.ReferenceWithTimezone;
  },
};
const obj2 = {
  enumerable: true,
  get() {
    return require("metro/10451__.js").Meridiem;
  },
};
const obj3 = {
  enumerable: true,
  get() {
    return require("metro/10451__.js").Weekday;
  },
};
parsers1.unshift(new _isNativeReflectConstruct.default());
const chrono1 = new require("Chrono").Chrono(configuration1);
const chrono2 = new require("Chrono").Chrono(createConfiguration());

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
export const Chrono = ReferenceWithTimezone /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingResult = ReferenceWithTimezone /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingComponents = ReferenceWithTimezone /* ReferenceWithTimezone */.ParsingComponents;
export const ReferenceWithTimezone = ReferenceWithTimezone /* ReferenceWithTimezone */.ReferenceWithTimezone;
export const Meridiem = require("metro/10451__.js").Meridiem;
export const Weekday = require("metro/10451__.js").Weekday;
export const hant = chrono;
export const casual = chrono1;
export const strict = chrono2;
