// _runtime/metro/09887__.js
import includeCommonConfiguration from "../09855_includeCommonConfiguration.js";
import _mod9861 from "09861__.js";
import JPStandardParser2 from "../09888_JPStandardParser.js";
import _mod9890 from "09890__.js";
import _mod9891 from "09891__.js";
import _mod9892 from "09892__.js";
import _mod9893 from "09893__.js";
import _mod9894 from "09894__.js";
import _mod9895 from "09895__.js";
import _mod9896 from "09896__.js";
import _mod9897 from "09897__.js";

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
  parsers.unshift(new module_9891.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod9890);
const module_9891 = fn(_mod9891);
fn(_mod9892);
fn(_mod9893);
fn(_mod9894);
fn(_mod9895);
fn(_mod9896);
const regExp = fn(_mod9897);
const _isNativeReflectConstruct = fn(_mod9861);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_9891.default());
const chrono = new require("09815__.js").Chrono(configuration);
const chrono1 = new require("09815__.js").Chrono(createConfiguration(true));

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
export const Chrono = require("09815__.js").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
