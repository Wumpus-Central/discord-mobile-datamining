// === Module 10822: ? ===

// Module 10822
import _mod10763 from "module_10763" /* 10763 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 10770 */;
import _mod10823 from "module_10823" /* 10823 */;
import _mod10824 from "module_10824" /* 10824 */;
import _mod10825 from "module_10825" /* 10825 */;
import _mod10826 from "module_10826" /* 10826 */;
import _mod10827 from "module_10827" /* 10827 */;
import _mod10829 from "module_10829" /* 10829 */;
import _mod10830 from "module_10830" /* 10830 */;
import _mod10831 from "module_10831" /* 10831 */;
import _mod10832 from "module_10832" /* 10832 */;
import _mod10833 from "module_10833" /* 10833 */;
import _mod10834 from "module_10834" /* 10834 */;
import _mod10835 from "module_10835" /* 10835 */;
import _mod10836 from "module_10836" /* 10836 */;
import _mod10837 from "module_10837" /* 10837 */;
import _mod10838 from "module_10838" /* 10838 */;
import _mod10839 from "module_10839" /* 10839 */;

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
  items = [new regExp.default(flag2), , , , , , , , , ];
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
fn(_mod10823);
fn(_mod10824);
fn(_mod10825);
fn(_mod10826);
const regExp = fn(_mod10763);
fn(_mod10827);
fn(_mod10829);
fn(_mod10830);
fn(_mod10831);
fn(_mod10832);
fn(_mod10833);
fn(_mod10834);
fn(_mod10835);
fn(_mod10836);
fn(_mod10837);
fn(_mod10838);
const _isNativeReflectConstruct = fn(_mod10839);
const chrono = new require("module_10730").Chrono(createCasualConfiguration());
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