// === Module 9952: ? ===

// Module 9952
import includeCommonConfiguration from "includeCommonConfiguration" /* 9920 */;
import _mod9926 from "module_9926" /* 9926 */;
import JPStandardParser2 from "JPStandardParser" /* 9953 */;
import _mod9955 from "module_9955" /* 9955 */;
import _mod9956 from "module_9956" /* 9956 */;
import _mod9957 from "module_9957" /* 9957 */;
import _mod9958 from "module_9958" /* 9958 */;
import _mod9959 from "module_9959" /* 9959 */;
import _mod9960 from "module_9960" /* 9960 */;
import _mod9961 from "module_9961" /* 9961 */;
import _mod9962 from "module_9962" /* 9962 */;

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
  parsers.unshift(new module_9956.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod9955);
const module_9956 = fn(_mod9956);
fn(_mod9957);
fn(_mod9958);
fn(_mod9959);
fn(_mod9960);
fn(_mod9961);
const regExp = fn(_mod9962);
const _isNativeReflectConstruct = fn(_mod9926);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_9956.default());
const chrono = new require("module_9880").Chrono(configuration);
const chrono1 = new require("module_9880").Chrono(createConfiguration(true));

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
export const Chrono = require("module_9880").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;