// _runtime/metro/10579__.js
import includeCommonConfiguration from "../10547_includeCommonConfiguration.js";
import _mod10553 from "10553__.js";
import JPStandardParser2 from "../10580_JPStandardParser.js";
import _mod10582 from "10582__.js";
import _mod10583 from "10583__.js";
import _mod10584 from "10584__.js";
import _mod10585 from "10585__.js";
import _mod10586 from "10586__.js";
import _mod10587 from "10587__.js";
import _mod10588 from "10588__.js";
import _mod10589 from "10589__.js";

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
  parsers.unshift(new module_10583.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod10582);
const module_10583 = fn(_mod10583);
fn(_mod10584);
fn(_mod10585);
fn(_mod10586);
fn(_mod10587);
fn(_mod10588);
const regExp = fn(_mod10589);
const _isNativeReflectConstruct = fn(_mod10553);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10583.default());
const chrono = new require("10507__.js").Chrono(configuration);
const chrono1 = new require("10507__.js").Chrono(createConfiguration(true));

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
export const Chrono = require("10507__.js").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
