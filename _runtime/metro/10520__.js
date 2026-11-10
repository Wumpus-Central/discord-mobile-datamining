// _runtime/metro/10520__.js
import includeCommonConfiguration from "../10488_includeCommonConfiguration.js";
import _mod10494 from "10494__.js";
import JPStandardParser2 from "../10521_JPStandardParser.js";
import _mod10523 from "10523__.js";
import _mod10524 from "10524__.js";
import _mod10525 from "10525__.js";
import _mod10526 from "10526__.js";
import _mod10527 from "10527__.js";
import _mod10528 from "10528__.js";
import _mod10529 from "10529__.js";
import _mod10530 from "10530__.js";

const require = globalThis.__r;

function createConfiguration() {
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: null, refiners: null };
  items = [new JPStandardParser.default(), , , ,];
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
  parsers.unshift(new module_10524.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod10523);
const module_10524 = fn(_mod10524);
fn(_mod10525);
fn(_mod10526);
fn(_mod10527);
fn(_mod10528);
fn(_mod10529);
const regExp = fn(_mod10530);
const _isNativeReflectConstruct = fn(_mod10494);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10524.default());
const chrono = new require("10448__.js").Chrono(configuration);
const chrono1 = new require("10448__.js").Chrono(createConfiguration(true));

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
export const Chrono = require("10448__.js").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
