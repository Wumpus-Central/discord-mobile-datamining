// _runtime/metro/11363__.js
import includeCommonConfiguration from "../11331_includeCommonConfiguration.js";
import _mod11337 from "11337__.js";
import JPStandardParser2 from "../11364_JPStandardParser.js";
import _mod11366 from "11366__.js";
import _mod11367 from "11367__.js";
import _mod11368 from "11368__.js";
import _mod11369 from "11369__.js";
import _mod11370 from "11370__.js";
import _mod11371 from "11371__.js";
import _mod11372 from "11372__.js";
import _mod11373 from "11373__.js";

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
  parsers.unshift(new module_11367.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod11366);
const module_11367 = fn(_mod11367);
fn(_mod11368);
fn(_mod11369);
fn(_mod11370);
fn(_mod11371);
fn(_mod11372);
const regExp = fn(_mod11373);
const _isNativeReflectConstruct = fn(_mod11337);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_11367.default());
const chrono = new require("11291__.js").Chrono(configuration);
const chrono1 = new require("11291__.js").Chrono(createConfiguration(true));

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
export const Chrono = require("11291__.js").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
