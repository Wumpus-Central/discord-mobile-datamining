// _runtime/metro/11443__.js
import includeCommonConfiguration from "../11411_includeCommonConfiguration.js";
import _mod11417 from "11417__.js";
import JPStandardParser2 from "../11444_JPStandardParser.js";
import _mod11446 from "11446__.js";
import _mod11447 from "11447__.js";
import _mod11448 from "11448__.js";
import _mod11449 from "11449__.js";
import _mod11450 from "11450__.js";
import _mod11451 from "11451__.js";
import _mod11452 from "11452__.js";
import _mod11453 from "11453__.js";

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
  parsers.unshift(new module_11447.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod11446);
const module_11447 = fn(_mod11447);
fn(_mod11448);
fn(_mod11449);
fn(_mod11450);
fn(_mod11451);
fn(_mod11452);
const regExp = fn(_mod11453);
const _isNativeReflectConstruct = fn(_mod11417);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_11447.default());
const chrono = new require("11371__.js").Chrono(configuration);
const chrono1 = new require("11371__.js").Chrono(createConfiguration(true));

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
export const Chrono = require("11371__.js").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
