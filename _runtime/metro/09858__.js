// _runtime/metro/09858__.js
import includeCommonConfiguration from "../09826_includeCommonConfiguration.js";
import _mod9832 from "09832__.js";
import JPStandardParser2 from "../09859_JPStandardParser.js";
import _mod9861 from "09861__.js";
import _mod9862 from "09862__.js";
import _mod9863 from "09863__.js";
import _mod9864 from "09864__.js";
import _mod9865 from "09865__.js";
import _mod9866 from "09866__.js";
import _mod9867 from "09867__.js";
import _mod9868 from "09868__.js";

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
  parsers.unshift(new module_9862.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod9861);
const module_9862 = fn(_mod9862);
fn(_mod9863);
fn(_mod9864);
fn(_mod9865);
fn(_mod9866);
fn(_mod9867);
const regExp = fn(_mod9868);
const _isNativeReflectConstruct = fn(_mod9832);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_9862.default());
const chrono = new require("09786__.js").Chrono(configuration);
const chrono1 = new require("09786__.js").Chrono(createConfiguration(true));

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
export const Chrono = require("09786__.js").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
