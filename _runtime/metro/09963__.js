// === Module 9963: ? ===

// Module 9963
import includeCommonConfiguration from "includeCommonConfiguration" /* 9931 */;
import _mod9937 from "module_9937" /* 9937 */;
import JPStandardParser2 from "JPStandardParser" /* 9964 */;
import _mod9966 from "module_9966" /* 9966 */;
import _mod9967 from "module_9967" /* 9967 */;
import _mod9968 from "module_9968" /* 9968 */;
import _mod9969 from "module_9969" /* 9969 */;
import _mod9970 from "module_9970" /* 9970 */;
import _mod9971 from "module_9971" /* 9971 */;
import _mod9972 from "module_9972" /* 9972 */;
import _mod9973 from "module_9973" /* 9973 */;

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
const chrono = new require("module_9891").Chrono(configuration);
const chrono1 = new require("module_9891").Chrono(createConfiguration(true));

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
export const Chrono = require("module_9891").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;