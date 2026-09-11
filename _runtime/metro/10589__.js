// _runtime/metro/10589__.js
import includeCommonConfiguration from "../10557_includeCommonConfiguration.js";
import _mod10563 from "10563__.js";
import JPStandardParser2 from "../10590_JPStandardParser.js";
import _mod10592 from "10592__.js";
import _mod10593 from "10593__.js";
import _mod10594 from "10594__.js";
import _mod10595 from "10595__.js";
import _mod10596 from "10596__.js";
import _mod10597 from "10597__.js";
import _mod10598 from "10598__.js";
import _mod10599 from "10599__.js";

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
  parsers.unshift(new module_10593.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod10592);
const module_10593 = fn(_mod10593);
fn(_mod10594);
fn(_mod10595);
fn(_mod10596);
fn(_mod10597);
fn(_mod10598);
const regExp = fn(_mod10599);
const _isNativeReflectConstruct = fn(_mod10563);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10593.default());
const chrono = new require("10517__.js").Chrono(configuration);
const chrono1 = new require("10517__.js").Chrono(createConfiguration(true));

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
