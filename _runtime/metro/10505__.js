// _runtime/metro/10505__.js
import includeCommonConfiguration from "../10473_includeCommonConfiguration.js";
import _mod10479 from "10479__.js";
import JPStandardParser2 from "../10506_JPStandardParser.js";
import _mod10508 from "10508__.js";
import _mod10509 from "10509__.js";
import _mod10510 from "10510__.js";
import _mod10511 from "10511__.js";
import _mod10512 from "10512__.js";
import _mod10513 from "10513__.js";
import _mod10514 from "10514__.js";
import _mod10515 from "10515__.js";

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
  parsers.unshift(new module_10509.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod10508);
const module_10509 = fn(_mod10509);
fn(_mod10510);
fn(_mod10511);
fn(_mod10512);
fn(_mod10513);
fn(_mod10514);
const regExp = fn(_mod10515);
const _isNativeReflectConstruct = fn(_mod10479);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10509.default());
const chrono = new require("10433__.js").Chrono(configuration);
const chrono1 = new require("10433__.js").Chrono(createConfiguration(true));

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
