// _runtime/metro/10350__.js
import includeCommonConfiguration from "../10318_includeCommonConfiguration.js";
import _mod10324 from "10324__.js";
import JPStandardParser2 from "../10351_JPStandardParser.js";
import _mod10353 from "10353__.js";
import _mod10354 from "10354__.js";
import _mod10355 from "10355__.js";
import _mod10356 from "10356__.js";
import _mod10357 from "10357__.js";
import _mod10358 from "10358__.js";
import _mod10359 from "10359__.js";
import _mod10360 from "10360__.js";

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
  parsers.unshift(new module_10354.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod10353);
const module_10354 = fn(_mod10354);
fn(_mod10355);
fn(_mod10356);
fn(_mod10357);
fn(_mod10358);
fn(_mod10359);
const regExp = fn(_mod10360);
const _isNativeReflectConstruct = fn(_mod10324);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10354.default());
const chrono = new require("10278__.js").Chrono(configuration);
const chrono1 = new require("10278__.js").Chrono(createConfiguration(true));

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
export const Chrono = require("10278__.js").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
