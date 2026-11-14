// _runtime/metro/11497__.js
import includeCommonConfiguration from "../11465_includeCommonConfiguration.js";
import _mod11471 from "11471__.js";
import JPStandardParser2 from "../11498_JPStandardParser.js";
import _mod11500 from "11500__.js";
import _mod11501 from "11501__.js";
import _mod11502 from "11502__.js";
import _mod11503 from "11503__.js";
import _mod11504 from "11504__.js";
import _mod11505 from "11505__.js";
import _mod11506 from "11506__.js";
import _mod11507 from "11507__.js";

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
  parsers.unshift(new module_11501.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod11500);
const module_11501 = fn(_mod11501);
fn(_mod11502);
fn(_mod11503);
fn(_mod11504);
fn(_mod11505);
fn(_mod11506);
const regExp = fn(_mod11507);
const _isNativeReflectConstruct = fn(_mod11471);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_11501.default());
const chrono = new require("11425__.js").Chrono(configuration);
const chrono1 = new require("11425__.js").Chrono(createConfiguration(true));

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
export const Chrono = require("11425__.js").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
