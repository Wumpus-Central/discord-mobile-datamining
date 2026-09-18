// === Module 10743: ? ===

// Module 10743
import includeCommonConfiguration from "includeCommonConfiguration" /* 10711 */;
import _mod10717 from "module_10717" /* 10717 */;
import JPStandardParser2 from "JPStandardParser" /* 10744 */;
import _mod10746 from "module_10746" /* 10746 */;
import _mod10747 from "module_10747" /* 10747 */;
import _mod10748 from "module_10748" /* 10748 */;
import _mod10749 from "module_10749" /* 10749 */;
import _mod10750 from "module_10750" /* 10750 */;
import _mod10751 from "module_10751" /* 10751 */;
import _mod10752 from "module_10752" /* 10752 */;
import _mod10753 from "module_10753" /* 10753 */;

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
  parsers.unshift(new module_10747.default());
  return tmp;
}
const JPStandardParser = fn(JPStandardParser2);
fn(_mod10746);
const module_10747 = fn(_mod10747);
fn(_mod10748);
fn(_mod10749);
fn(_mod10750);
fn(_mod10751);
fn(_mod10752);
const regExp = fn(_mod10753);
const _isNativeReflectConstruct = fn(_mod10717);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new module_10747.default());
const chrono = new require("module_10671").Chrono(configuration);
const chrono1 = new require("module_10671").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10671").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;