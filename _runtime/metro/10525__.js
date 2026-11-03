// === Module 10525: ? ===

// Module 10525
import includeCommonConfiguration from "includeCommonConfiguration" /* 10493 */;
import _mod10499 from "module_10499" /* 10499 */;
import JPStandardParser2 from "JPStandardParser" /* 10526 */;
import _mod10528 from "module_10528" /* 10528 */;
import _mod10529 from "module_10529" /* 10529 */;
import _mod10530 from "module_10530" /* 10530 */;
import _mod10531 from "module_10531" /* 10531 */;
import _mod10532 from "module_10532" /* 10532 */;
import _mod10533 from "module_10533" /* 10533 */;
import _mod10534 from "module_10534" /* 10534 */;
import _mod10535 from "module_10535" /* 10535 */;

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
  parsers.unshift(new module_10529.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod10528);
const module_10529 = fn(_mod10529);
fn(_mod10530);
fn(_mod10531);
fn(_mod10532);
fn(_mod10533);
fn(_mod10534);
const regExp = fn(_mod10535);
const _isNativeReflectConstruct = fn(_mod10499);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10529.default());
const chrono = new require("module_10453").Chrono(configuration);
const chrono1 = new require("module_10453").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10453").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;