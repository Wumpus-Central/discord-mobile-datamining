// === Module 10802: ? ===

// Module 10802
import includeCommonConfiguration from "includeCommonConfiguration" /* 10770 */;
import _mod10776 from "module_10776" /* 10776 */;
import JPStandardParser2 from "JPStandardParser" /* 10803 */;
import _mod10805 from "module_10805" /* 10805 */;
import _mod10806 from "module_10806" /* 10806 */;
import _mod10807 from "module_10807" /* 10807 */;
import _mod10808 from "module_10808" /* 10808 */;
import _mod10809 from "module_10809" /* 10809 */;
import _mod10810 from "module_10810" /* 10810 */;
import _mod10811 from "module_10811" /* 10811 */;
import _mod10812 from "module_10812" /* 10812 */;

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
  parsers.unshift(new module_10806.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod10805);
const module_10806 = fn(_mod10806);
fn(_mod10807);
fn(_mod10808);
fn(_mod10809);
fn(_mod10810);
fn(_mod10811);
const regExp = fn(_mod10812);
const _isNativeReflectConstruct = fn(_mod10776);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10806.default());
const chrono = new require("module_10730").Chrono(configuration);
const chrono1 = new require("module_10730").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10730").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;