// _runtime/metro/09963__.js
import includeCommonConfiguration from "../09931_includeCommonConfiguration.js";
import _mod9937 from "09937__.js";
import JPStandardParser2 from "../09964_JPStandardParser.js";
import _mod9966 from "09966__.js";
import _mod9967 from "09967__.js";
import _mod9968 from "09968__.js";
import _mod9969 from "09969__.js";
import _mod9970 from "09970__.js";
import _mod9971 from "09971__.js";
import _mod9972 from "09972__.js";
import _mod9973 from "09973__.js";

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
  parsers.unshift(new module_9967.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod9966);
const module_9967 = fn(_mod9967);
fn(_mod9968);
fn(_mod9969);
fn(_mod9970);
fn(_mod9971);
fn(_mod9972);
const regExp = fn(_mod9973);
const _isNativeReflectConstruct = fn(_mod9937);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_9967.default());
const chrono = new require("09891__.js").Chrono(configuration);
const chrono1 = new require("09891__.js").Chrono(createConfiguration(true));

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
export const Chrono = require("09891__.js").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
