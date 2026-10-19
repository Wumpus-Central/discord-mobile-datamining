// === Module 10221: ? ===

// Module 10221
import _mod10162 from "module_10162" /* 10162 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 10169 */;
import _mod10222 from "module_10222" /* 10222 */;
import _mod10223 from "module_10223" /* 10223 */;
import _mod10224 from "module_10224" /* 10224 */;
import _mod10225 from "module_10225" /* 10225 */;
import _mod10226 from "module_10226" /* 10226 */;
import _mod10228 from "module_10228" /* 10228 */;
import _mod10229 from "module_10229" /* 10229 */;
import _mod10230 from "module_10230" /* 10230 */;
import _mod10231 from "module_10231" /* 10231 */;
import _mod10232 from "module_10232" /* 10232 */;
import _mod10233 from "module_10233" /* 10233 */;
import _mod10234 from "module_10234" /* 10234 */;
import _mod10235 from "module_10235" /* 10235 */;
import _mod10236 from "module_10236" /* 10236 */;
import _mod10237 from "module_10237" /* 10237 */;
import _mod10238 from "module_10238" /* 10238 */;

const require = globalThis.__r;

function createConfiguration() {
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: null, refiners: null };
  const items = [new regExp.default(flag2), , , , , , , , , ];
  const _default = new regExp.default(flag2);
  items[1] = new _isNativeReflectConstruct.default();
  const _default1 = new _isNativeReflectConstruct.default();
  items[2] = new _isNativeReflectConstruct.default();
  const _default2 = new _isNativeReflectConstruct.default();
  items[3] = new _isNativeReflectConstruct.default();
  const _default3 = new _isNativeReflectConstruct.default();
  items[4] = new _isNativeReflectConstruct.default();
  const _default4 = new _isNativeReflectConstruct.default();
  items[5] = new _isNativeReflectConstruct.default();
  const _default5 = new _isNativeReflectConstruct.default();
  items[6] = new _isNativeReflectConstruct.default();
  const _default6 = new _isNativeReflectConstruct.default();
  items[7] = new _isNativeReflectConstruct.default(flag);
  const _default7 = new _isNativeReflectConstruct.default(flag);
  items[8] = new _isNativeReflectConstruct.default(flag);
  const _default8 = new _isNativeReflectConstruct.default(flag);
  items[9] = new _isNativeReflectConstruct.default(flag);
  obj.parsers = items;
  const _default9 = new _isNativeReflectConstruct.default(flag);
  const items1 = [new _isNativeReflectConstruct.default(), ];
  const _default10 = new _isNativeReflectConstruct.default();
  items1[1] = new _isNativeReflectConstruct.default();
  obj.refiners = items1;
  return includeCommonConfiguration.includeCommonConfiguration(obj, flag);
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
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  parsers.unshift(new _isNativeReflectConstruct.default());
  const parsers1 = tmp.parsers;
  const _default = new _isNativeReflectConstruct.default();
  parsers1.unshift(new _isNativeReflectConstruct.default());
  const parsers2 = tmp.parsers;
  const _default1 = new _isNativeReflectConstruct.default();
  parsers2.unshift(new _isNativeReflectConstruct.default());
  const parsers3 = tmp.parsers;
  const _default2 = new _isNativeReflectConstruct.default();
  parsers3.unshift(new _isNativeReflectConstruct.default());
  const parsers4 = tmp.parsers;
  const _default3 = new _isNativeReflectConstruct.default();
  parsers4.unshift(new _isNativeReflectConstruct.default());
  const parsers5 = tmp.parsers;
  const _default4 = new _isNativeReflectConstruct.default();
  parsers5.unshift(new _isNativeReflectConstruct.default());
  return tmp;
}
fn(_mod10222);
fn(_mod10223);
fn(_mod10224);
fn(_mod10225);
const regExp = fn(_mod10162);
fn(_mod10226);
fn(_mod10228);
fn(_mod10229);
fn(_mod10230);
fn(_mod10231);
fn(_mod10232);
fn(_mod10233);
fn(_mod10234);
fn(_mod10235);
fn(_mod10236);
fn(_mod10237);
const _isNativeReflectConstruct = fn(_mod10238);
const chrono = new require("module_10129").Chrono(createCasualConfiguration());
const chrono1 = new require("module_10129").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10129").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;