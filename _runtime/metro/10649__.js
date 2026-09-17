// === Module 10649: ? ===

// Module 10649
import includeCommonConfiguration from "includeCommonConfiguration" /* 10617 */;
import _mod10623 from "module_10623" /* 10623 */;
import JPStandardParser2 from "JPStandardParser" /* 10650 */;
import _mod10652 from "module_10652" /* 10652 */;
import _mod10653 from "module_10653" /* 10653 */;
import _mod10654 from "module_10654" /* 10654 */;
import _mod10655 from "module_10655" /* 10655 */;
import _mod10656 from "module_10656" /* 10656 */;
import _mod10657 from "module_10657" /* 10657 */;
import _mod10658 from "module_10658" /* 10658 */;
import _mod10659 from "module_10659" /* 10659 */;

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
  parsers.unshift(new module_10653.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod10652);
const module_10653 = fn(_mod10653);
fn(_mod10654);
fn(_mod10655);
fn(_mod10656);
fn(_mod10657);
fn(_mod10658);
const regExp = fn(_mod10659);
const _isNativeReflectConstruct = fn(_mod10623);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10653.default());
const chrono = new require("module_10577").Chrono(configuration);
const chrono1 = new require("module_10577").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10577").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;