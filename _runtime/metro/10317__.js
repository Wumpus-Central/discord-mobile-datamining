// _runtime/metro/10317__.js
import includeCommonConfiguration from "../10285_includeCommonConfiguration.js";
import _mod10291 from "10291__.js";
import JPStandardParser2 from "../10318_JPStandardParser.js";
import _mod10320 from "10320__.js";
import _mod10321 from "10321__.js";
import _mod10322 from "10322__.js";
import _mod10323 from "10323__.js";
import _mod10324 from "10324__.js";
import _mod10325 from "10325__.js";
import _mod10326 from "10326__.js";
import _mod10327 from "10327__.js";

const require = globalThis.__r;

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
  parsers.unshift(new module_10321.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod10320);
const module_10321 = fn(_mod10321);
fn(_mod10322);
fn(_mod10323);
fn(_mod10324);
fn(_mod10325);
fn(_mod10326);
const regExp = fn(_mod10327);
const _isNativeReflectConstruct = fn(_mod10291);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10321.default());
const chrono = new require("10245__.js").Chrono(configuration);
const chrono1 = new require("10245__.js").Chrono(createConfiguration(true));

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
export const Chrono = require("10245__.js").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
