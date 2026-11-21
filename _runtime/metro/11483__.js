// _runtime/metro/11483__.js
import includeCommonConfiguration from "../11451_includeCommonConfiguration.js";
import _mod11457 from "11457__.js";
import JPStandardParser2 from "../11484_JPStandardParser.js";
import _mod11486 from "11486__.js";
import _mod11487 from "11487__.js";
import _mod11488 from "11488__.js";
import _mod11489 from "11489__.js";
import _mod11490 from "11490__.js";
import _mod11491 from "11491__.js";
import _mod11492 from "11492__.js";
import _mod11493 from "11493__.js";

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
  parsers.unshift(new module_11487.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod11486);
const module_11487 = fn(_mod11487);
fn(_mod11488);
fn(_mod11489);
fn(_mod11490);
fn(_mod11491);
fn(_mod11492);
const regExp = fn(_mod11493);
const _isNativeReflectConstruct = fn(_mod11457);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_11487.default());
const chrono = new require("11411__.js").Chrono(configuration);
const chrono1 = new require("11411__.js").Chrono(createConfiguration(true));

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
export const Chrono = require("11411__.js").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
