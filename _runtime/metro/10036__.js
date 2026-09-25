// === Module 10036: ? ===

// Module 10036
import _mod9913 from "module_9913" /* 9913 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 9920 */;
import _mod9925 from "module_9925" /* 9925 */;
import _mod10037 from "module_10037" /* 10037 */;
import _mod10039 from "module_10039" /* 10039 */;
import _mod10041 from "module_10041" /* 10041 */;
import _mod10042 from "module_10042" /* 10042 */;
import _mod10043 from "module_10043" /* 10043 */;
import _mod10044 from "module_10044" /* 10044 */;
import _mod10045 from "module_10045" /* 10045 */;
import _mod10046 from "module_10046" /* 10046 */;
import _mod10047 from "module_10047" /* 10047 */;
import _mod10048 from "module_10048" /* 10048 */;
import _mod10049 from "module_10049" /* 10049 */;
import _mod10050 from "module_10050" /* 10050 */;

const require = globalThis.__r;

function createConfiguration(flag) {
  const obj = { parsers: null, refiners: null };
  const items = [new _isNativeReflectConstruct.default(), , , , , , ];
  const _default = new _isNativeReflectConstruct.default();
  items[1] = new regExp.default(true);
  const _default1 = new regExp.default(true);
  items[2] = new _isNativeReflectConstruct.default();
  const _default2 = new _isNativeReflectConstruct.default();
  items[3] = new _isNativeReflectConstruct.default();
  const _default3 = new _isNativeReflectConstruct.default();
  items[4] = new _isNativeReflectConstruct.default();
  const _default4 = new _isNativeReflectConstruct.default();
  items[5] = new _isNativeReflectConstruct.default(flag);
  const _default5 = new _isNativeReflectConstruct.default(flag);
  items[6] = new _isNativeReflectConstruct.default();
  obj.parsers = items;
  const _default6 = new _isNativeReflectConstruct.default();
  const items1 = [new _isNativeReflectConstruct.default(), ];
  const _default7 = new _isNativeReflectConstruct.default();
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
  const tmp = createConfiguration(false);
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
  return tmp;
}
fn(_mod10037);
fn(_mod10039);
fn(_mod10041);
fn(_mod10042);
fn(_mod10043);
fn(_mod10044);
fn(_mod10045);
fn(_mod10046);
fn(_mod10047);
fn(_mod10048);
fn(_mod10049);
const regExp = fn(_mod9913);
fn(_mod10050);
const _isNativeReflectConstruct = fn(_mod9925);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new _isNativeReflectConstruct.default());
let parsers1 = configuration.parsers;
let _default = new _isNativeReflectConstruct.default();
let obj = {
  enumerable: true,
  get() {
    return require("module_9880").Chrono;
  }
};
const obj2 = {
  enumerable: true,
  get() {
    return require("ReferenceWithTimezone").ParsingResult;
  }
};
const obj3 = {
  enumerable: true,
  get() {
    return require("ReferenceWithTimezone").ParsingComponents;
  }
};
const obj4 = {
  enumerable: true,
  get() {
    return require("ReferenceWithTimezone").ReferenceWithTimezone;
  }
};
const obj5 = {
  enumerable: true,
  get() {
    return require("Meridiem").Meridiem;
  }
};
const obj6 = {
  enumerable: true,
  get() {
    return require("Meridiem").Weekday;
  }
};
parsers1.unshift(new _isNativeReflectConstruct.default());
let parsers2 = configuration.parsers;
let _default1 = new _isNativeReflectConstruct.default();
parsers2.unshift(new _isNativeReflectConstruct.default());
let parsers3 = configuration.parsers;
let _default2 = new _isNativeReflectConstruct.default();
parsers3.unshift(new _isNativeReflectConstruct.default());
let parsers4 = configuration.parsers;
let _default3 = new _isNativeReflectConstruct.default();
parsers4.unshift(new _isNativeReflectConstruct.default());
const chrono = new require("module_9880").Chrono(configuration);
const chrono1 = new require("module_9880").Chrono(createConfiguration(true));

export { createCasualConfiguration };
export { createConfiguration };
export const parse = function parse(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parse(arg0, arg1, arg2);
};
export const parseDate = function parseDate(arg0, arg1, arg2) {
  const casual = exports.casual;
  return casual.parseDate(arg0, arg1, arg2);
};
export const Chrono = require("module_9880").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;