// _runtime/metro/09839__.js
import includeCommonConfiguration from "../09807_includeCommonConfiguration.js";
import _mod9813 from "09813__.js";
import JPStandardParser2 from "../09840_JPStandardParser.js";
import _mod9842 from "09842__.js";
import _mod9843 from "09843__.js";
import _mod9844 from "09844__.js";
import _mod9845 from "09845__.js";
import _mod9846 from "09846__.js";
import _mod9847 from "09847__.js";
import _mod9848 from "09848__.js";
import _mod9849 from "09849__.js";

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
  parsers.unshift(new module_9843.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod9842);
const module_9843 = fn(_mod9843);
fn(_mod9844);
fn(_mod9845);
fn(_mod9846);
fn(_mod9847);
fn(_mod9848);
const regExp = fn(_mod9849);
const _isNativeReflectConstruct = fn(_mod9813);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_9843.default());
const chrono = new require("09767__.js").Chrono(configuration);
const chrono1 = new require("09767__.js").Chrono(createConfiguration(true));

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
export const Chrono = require("09767__.js").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
