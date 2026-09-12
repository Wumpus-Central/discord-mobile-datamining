// _runtime/metro/10628__.js
import includeCommonConfiguration from "../10596_includeCommonConfiguration.js";
import _mod10602 from "10602__.js";
import JPStandardParser2 from "../10629_JPStandardParser.js";
import _mod10631 from "10631__.js";
import _mod10632 from "10632__.js";
import _mod10633 from "10633__.js";
import _mod10634 from "10634__.js";
import _mod10635 from "10635__.js";
import _mod10636 from "10636__.js";
import _mod10637 from "10637__.js";
import _mod10638 from "10638__.js";

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
  parsers.unshift(new module_10632.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod10631);
const module_10632 = fn(_mod10632);
fn(_mod10633);
fn(_mod10634);
fn(_mod10635);
fn(_mod10636);
fn(_mod10637);
const regExp = fn(_mod10638);
const _isNativeReflectConstruct = fn(_mod10602);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10632.default());
const chrono = new require("10556__.js").Chrono(configuration);
const chrono1 = new require("10556__.js").Chrono(createConfiguration(true));

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
export const Chrono = require("ReferenceWithTimezone").ParsingComponents;
export const ParsingResult = require("ReferenceWithTimezone").ParsingComponents;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
