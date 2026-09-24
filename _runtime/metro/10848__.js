// _runtime/metro/10848__.js
import includeCommonConfiguration from "../10816_includeCommonConfiguration.js";
import _mod10822 from "10822__.js";
import JPStandardParser2 from "../10849_JPStandardParser.js";
import _mod10851 from "10851__.js";
import _mod10852 from "10852__.js";
import _mod10853 from "10853__.js";
import _mod10854 from "10854__.js";
import _mod10855 from "10855__.js";
import _mod10856 from "10856__.js";
import _mod10857 from "10857__.js";
import _mod10858 from "10858__.js";

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
  parsers.unshift(new module_10852.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod10851);
const module_10852 = fn(_mod10852);
fn(_mod10853);
fn(_mod10854);
fn(_mod10855);
fn(_mod10856);
fn(_mod10857);
const regExp = fn(_mod10858);
const _isNativeReflectConstruct = fn(_mod10822);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10852.default());
const chrono = new require("10776__.js").Chrono(configuration);
const chrono1 = new require("10776__.js").Chrono(createConfiguration(true));

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
export const Chrono = require("10776__.js").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
