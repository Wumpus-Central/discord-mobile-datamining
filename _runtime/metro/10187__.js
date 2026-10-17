// === Module 10187: ? ===

// Module 10187
import includeCommonConfiguration from "includeCommonConfiguration" /* 10155 */;
import _mod10161 from "module_10161" /* 10161 */;
import JPStandardParser2 from "JPStandardParser" /* 10188 */;
import _mod10190 from "module_10190" /* 10190 */;
import _mod10191 from "module_10191" /* 10191 */;
import _mod10192 from "module_10192" /* 10192 */;
import _mod10193 from "module_10193" /* 10193 */;
import _mod10194 from "module_10194" /* 10194 */;
import _mod10195 from "module_10195" /* 10195 */;
import _mod10196 from "module_10196" /* 10196 */;
import _mod10197 from "module_10197" /* 10197 */;

const require = globalThis.__r;

function createConfiguration() {
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: null, refiners: null };
  const items = [new JPStandardParser.default(), , , , ];
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
  const items1 = [new _isNativeReflectConstruct.default(), , ];
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
  parsers.unshift(new module_10191.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod10190);
const module_10191 = fn(_mod10191);
fn(_mod10192);
fn(_mod10193);
fn(_mod10194);
fn(_mod10195);
fn(_mod10196);
const regExp = fn(_mod10197);
const _isNativeReflectConstruct = fn(_mod10161);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10191.default());
const chrono = new require("module_10115").Chrono(configuration);
const chrono1 = new require("module_10115").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10115").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;