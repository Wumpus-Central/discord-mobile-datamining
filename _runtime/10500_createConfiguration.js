// _runtime/10500_createConfiguration.js
import includeCommonConfiguration from "10468_includeCommonConfiguration.js";
import _isNativeReflectConstruct from "10474__isNativeReflectConstruct.js";
import JPStandardParser from "10501_JPStandardParser.js";
import _isNativeReflectConstruct2 from "10503__isNativeReflectConstruct.js";
import _mod10504 from "metro/10504__.js";
import regExp from "10505_regExp.js";
import regExp2 from "10506_regExp.js";
import _isNativeReflectConstruct3 from "10507__isNativeReflectConstruct.js";
import _isNativeReflectConstruct4 from "10508__isNativeReflectConstruct.js";
import _isNativeReflectConstruct5 from "10509__isNativeReflectConstruct.js";
import regExp3 from "10510_regExp.js";
import { ReferenceWithTimezone } from "10435_ReferenceWithTimezone.js";

function createConfiguration(flag) {
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: null, refiners: null };
  const items = [new mod.default(), , , ,];
  const _default = new mod.default();
  items[1] = new mod3.default();
  const _default1 = new mod3.default();
  items[2] = new mod8.default();
  const _default2 = new mod8.default();
  items[3] = new mod4.default();
  const _default3 = new mod4.default();
  items[4] = new mod5.default();
  obj[0] = items;
  const _default4 = new mod5.default();
  const items1 = [new mod7.default(), ,];
  const _default5 = new mod7.default();
  items1[1] = new mod6.default();
  const _default6 = new mod6.default();
  items1[2] = new mod2.default();
  obj[1] = items1;
  const result = includeCommonConfiguration.includeCommonConfiguration(obj, flag);
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  parsers.unshift(new module_10504.default());
  return tmp;
}
let closure_3 = fn(JPStandardParser);
let closure_4 = fn(_isNativeReflectConstruct2);
const module_10504 = fn(_mod10504);
let closure_6 = fn(regExp);
let closure_7 = fn(regExp2);
let closure_8 = fn(_isNativeReflectConstruct3);
let closure_9 = fn(_isNativeReflectConstruct4);
let closure_10 = fn(_isNativeReflectConstruct5);
let closure_11 = fn(regExp3);
let closure_12 = fn(_isNativeReflectConstruct);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10504.default());
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
export const Chrono = ReferenceWithTimezone /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingResult = ReferenceWithTimezone /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingComponents = ReferenceWithTimezone /* ReferenceWithTimezone */.ParsingComponents;
export const ReferenceWithTimezone = ReferenceWithTimezone /* ReferenceWithTimezone */.ReferenceWithTimezone;
export const Meridiem = require("metro/10437__.js").Meridiem;
export const Weekday = require("metro/10437__.js").Weekday;
export const casual = chrono;
export const strict = chrono1;
