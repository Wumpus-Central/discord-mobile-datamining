// _runtime/metro/10633__.js
import includeCommonConfiguration from "../10601_includeCommonConfiguration.js";
import _mod10607 from "10607__.js";
import JPStandardParser2 from "../10634_JPStandardParser.js";
import _mod10636 from "10636__.js";
import _mod10637 from "10637__.js";
import _mod10638 from "10638__.js";
import _mod10639 from "10639__.js";
import _mod10640 from "10640__.js";
import _mod10641 from "10641__.js";
import _mod10642 from "10642__.js";
import _mod10643 from "10643__.js";

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
  parsers.unshift(new module_10637.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod10636);
const module_10637 = fn(_mod10637);
fn(_mod10638);
fn(_mod10639);
fn(_mod10640);
fn(_mod10641);
fn(_mod10642);
const regExp = fn(_mod10643);
const _isNativeReflectConstruct = fn(_mod10607);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10637.default());
const chrono = new require("10561__.js").Chrono(configuration);
const chrono1 = new require("10561__.js").Chrono(createConfiguration(true));

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
export const Chrono = require("10561__.js").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
