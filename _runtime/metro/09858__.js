// === Module 9858: ? ===

// Module 9858
import includeCommonConfiguration from "includeCommonConfiguration" /* 9826 */;
import _mod9832 from "module_9832" /* 9832 */;
import JPStandardParser2 from "JPStandardParser" /* 9859 */;
import _mod9861 from "module_9861" /* 9861 */;
import _mod9862 from "module_9862" /* 9862 */;
import _mod9863 from "module_9863" /* 9863 */;
import _mod9864 from "module_9864" /* 9864 */;
import _mod9865 from "module_9865" /* 9865 */;
import _mod9866 from "module_9866" /* 9866 */;
import _mod9867 from "module_9867" /* 9867 */;
import _mod9868 from "module_9868" /* 9868 */;

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
  parsers.unshift(new module_9862.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod9861);
const module_9862 = fn(_mod9862);
fn(_mod9863);
fn(_mod9864);
fn(_mod9865);
fn(_mod9866);
fn(_mod9867);
const regExp = fn(_mod9868);
const _isNativeReflectConstruct = fn(_mod9832);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_9862.default());
const chrono = new require("module_9786").Chrono(configuration);
const chrono1 = new require("module_9786").Chrono(createConfiguration(true));

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
export const Chrono = require("module_9786").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;