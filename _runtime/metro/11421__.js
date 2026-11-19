// === Module 11421: ? ===

// Module 11421
import includeCommonConfiguration from "includeCommonConfiguration" /* 11389 */;
import _mod11395 from "module_11395" /* 11395 */;
import JPStandardParser2 from "JPStandardParser" /* 11422 */;
import _mod11424 from "module_11424" /* 11424 */;
import _mod11425 from "module_11425" /* 11425 */;
import _mod11426 from "module_11426" /* 11426 */;
import _mod11427 from "module_11427" /* 11427 */;
import _mod11428 from "module_11428" /* 11428 */;
import _mod11429 from "module_11429" /* 11429 */;
import _mod11430 from "module_11430" /* 11430 */;
import _mod11431 from "module_11431" /* 11431 */;

const require = globalThis.__r;

function createConfiguration() {
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: null, refiners: null };
  items = [new JPStandardParser.default(), , , , ];
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
  parsers.unshift(new module_11425.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod11424);
const module_11425 = fn(_mod11425);
fn(_mod11426);
fn(_mod11427);
fn(_mod11428);
fn(_mod11429);
fn(_mod11430);
const regExp = fn(_mod11431);
const _isNativeReflectConstruct = fn(_mod11395);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_11425.default());
const chrono = new require("module_11349").Chrono(configuration);
const chrono1 = new require("module_11349").Chrono(createConfiguration(true));

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
export const Chrono = require("module_11349").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;