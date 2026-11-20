// === Module 11363: ? ===

// Module 11363
import includeCommonConfiguration from "includeCommonConfiguration" /* 11331 */;
import _mod11337 from "module_11337" /* 11337 */;
import JPStandardParser2 from "JPStandardParser" /* 11364 */;
import _mod11366 from "module_11366" /* 11366 */;
import _mod11367 from "module_11367" /* 11367 */;
import _mod11368 from "module_11368" /* 11368 */;
import _mod11369 from "module_11369" /* 11369 */;
import _mod11370 from "module_11370" /* 11370 */;
import _mod11371 from "module_11371" /* 11371 */;
import _mod11372 from "module_11372" /* 11372 */;
import _mod11373 from "module_11373" /* 11373 */;

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
  parsers.unshift(new module_11367.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod11366);
const module_11367 = fn(_mod11367);
fn(_mod11368);
fn(_mod11369);
fn(_mod11370);
fn(_mod11371);
fn(_mod11372);
const regExp = fn(_mod11373);
const _isNativeReflectConstruct = fn(_mod11337);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_11367.default());
const chrono = new require("module_11291").Chrono(configuration);
const chrono1 = new require("module_11291").Chrono(createConfiguration(true));

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
export const Chrono = require("module_11291").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;