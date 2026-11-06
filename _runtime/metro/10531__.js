// _runtime/metro/10531__.js
import includeCommonConfiguration from "../10499_includeCommonConfiguration.js";
import _mod10505 from "10505__.js";
import JPStandardParser2 from "../10532_JPStandardParser.js";
import _mod10534 from "10534__.js";
import _mod10535 from "10535__.js";
import _mod10536 from "10536__.js";
import _mod10537 from "10537__.js";
import _mod10538 from "10538__.js";
import _mod10539 from "10539__.js";
import _mod10540 from "10540__.js";
import _mod10541 from "10541__.js";

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
  parsers.unshift(new module_10535.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod10534);
const module_10535 = fn(_mod10535);
fn(_mod10536);
fn(_mod10537);
fn(_mod10538);
fn(_mod10539);
fn(_mod10540);
const regExp = fn(_mod10541);
const _isNativeReflectConstruct = fn(_mod10505);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10535.default());
const chrono = new require("10459__.js").Chrono(configuration);
const chrono1 = new require("10459__.js").Chrono(createConfiguration(true));

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
export const Chrono = require("10459__.js").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
