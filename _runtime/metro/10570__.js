// _runtime/metro/10570__.js
import includeCommonConfiguration from "../10538_includeCommonConfiguration.js";
import _mod10544 from "10544__.js";
import JPStandardParser2 from "../10571_JPStandardParser.js";
import _mod10573 from "10573__.js";
import _mod10574 from "10574__.js";
import _mod10575 from "10575__.js";
import _mod10576 from "10576__.js";
import _mod10577 from "10577__.js";
import _mod10578 from "10578__.js";
import _mod10579 from "10579__.js";
import _mod10580 from "10580__.js";

function createConfiguration() {
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: null, refiners: null };
  const items = [new JPStandardParser.default(), , , ,];
  const _default = new JPStandardParser.default();
  items[1] = new regExp.default();
  const _default1 = new regExp.default();
  items[2] = new regExp.default();
  const _default2 = new regExp.default();
  items[3] = new regExp.default();
  const _default3 = new regExp.default();
  items[4] = new _isNativeReflectConstruct.default();
  obj.parsers = items;
  const _default4 = new _isNativeReflectConstruct.default();
  const items1 = [new _isNativeReflectConstruct.default(), ,];
  const _default5 = new _isNativeReflectConstruct.default();
  items1[1] = new _isNativeReflectConstruct.default();
  const _default6 = new _isNativeReflectConstruct.default();
  items1[2] = new _isNativeReflectConstruct.default();
  obj.refiners = items1;
  const result = includeCommonConfiguration.includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof _isNativeReflectConstruct.default));
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  parsers.unshift(new module_10574.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod10573);
const module_10574 = fn(_mod10574);
fn(_mod10575);
fn(_mod10576);
fn(_mod10577);
fn(_mod10578);
fn(_mod10579);
const regExp = fn(_mod10580);
const _isNativeReflectConstruct = fn(_mod10544);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10574.default());
const chrono = new require("10498__.js").Chrono(configuration);
const chrono1 = new require("10498__.js").Chrono(createConfiguration(true));

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
