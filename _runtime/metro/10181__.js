// === Module 10181: ? ===

// Module 10181
import _mod10083 from "module_10083" /* 10083 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 10090 */;
import _mod10182 from "module_10182" /* 10182 */;
import _mod10184 from "module_10184" /* 10184 */;
import _mod10186 from "module_10186" /* 10186 */;
import _mod10187 from "module_10187" /* 10187 */;
import _mod10188 from "module_10188" /* 10188 */;
import _mod10189 from "module_10189" /* 10189 */;
import _mod10190 from "module_10190" /* 10190 */;
import _mod10191 from "module_10191" /* 10191 */;
import _mod10192 from "module_10192" /* 10192 */;
import _mod10193 from "module_10193" /* 10193 */;
import _mod10194 from "module_10194" /* 10194 */;
import _mod10195 from "module_10195" /* 10195 */;

const require = globalThis.__r;

function createConfiguration() {
  if (flag === undefined) {
    flag = true;
  }
  const obj = { parsers: null, refiners: null };
  const items = [new regExp.default(true), , , , , ];
  const _default = new regExp.default(true);
  items[1] = new _isNativeReflectConstruct.default();
  const _default1 = new _isNativeReflectConstruct.default();
  items[2] = new _isNativeReflectConstruct.default();
  const _default2 = new _isNativeReflectConstruct.default();
  items[3] = new _isNativeReflectConstruct.default();
  const _default3 = new _isNativeReflectConstruct.default();
  items[4] = new _isNativeReflectConstruct.default(flag);
  const _default4 = new _isNativeReflectConstruct.default(flag);
  items[5] = new _isNativeReflectConstruct.default();
  obj.parsers = items;
  const _default5 = new _isNativeReflectConstruct.default();
  const items1 = [new _isNativeReflectConstruct.default(), ];
  const _default6 = new _isNativeReflectConstruct.default();
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
fn(_mod10182);
fn(_mod10184);
fn(_mod10186);
fn(_mod10187);
fn(_mod10188);
fn(_mod10189);
fn(_mod10190);
fn(_mod10191);
fn(_mod10192);
fn(_mod10193);
fn(_mod10194);
const regExp = fn(_mod10083);
const _isNativeReflectConstruct = fn(_mod10195);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new _isNativeReflectConstruct.default());
let parsers1 = configuration.parsers;
let _default = new _isNativeReflectConstruct.default();
let obj = {
  enumerable: true,
  get() {
    return require("module_10050").Chrono;
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
const chrono = new require("module_10050").Chrono(configuration);
const chrono1 = new require("module_10050").Chrono(createConfiguration(true));

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
export const Chrono = require("module_10050").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;