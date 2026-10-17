// === Module 10286: ? ===

// Module 10286
import _mod10115 from "module_10115" /* 10115 */;
import _mod10148 from "module_10148" /* 10148 */;
import includeCommonConfiguration from "includeCommonConfiguration" /* 10155 */;
import _mod10287 from "module_10287" /* 10287 */;
import _mod10289 from "module_10289" /* 10289 */;
import _mod10290 from "module_10290" /* 10290 */;
import _mod10291 from "module_10291" /* 10291 */;
import _mod10292 from "module_10292" /* 10292 */;
import _mod10293 from "module_10293" /* 10293 */;
import _mod10294 from "module_10294" /* 10294 */;
import _mod10295 from "module_10295" /* 10295 */;
import _mod10296 from "module_10296" /* 10296 */;
import _mod10297 from "module_10297" /* 10297 */;
import _mod10298 from "module_10298" /* 10298 */;
import _mod10299 from "module_10299" /* 10299 */;
import _mod10300 from "module_10300" /* 10300 */;
import _mod10301 from "module_10301" /* 10301 */;
import _mod10302 from "module_10302" /* 10302 */;
import _mod10303 from "module_10303" /* 10303 */;
import _mod10304 from "module_10304" /* 10304 */;

function createConfiguration() {
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = false;
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
  const items1 = [new _isNativeReflectConstruct.default(), , ];
  const _default10 = new _isNativeReflectConstruct.default();
  items1[1] = new _isNativeReflectConstruct.default();
  const _default11 = new _isNativeReflectConstruct.default();
  items1[2] = new _isNativeReflectConstruct.default();
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
    flag = false;
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
  return tmp;
}
fn(_mod10287);
fn(_mod10289);
fn(_mod10290);
fn(_mod10291);
fn(_mod10292);
fn(_mod10293);
fn(_mod10294);
fn(_mod10295);
fn(_mod10296);
fn(_mod10297);
fn(_mod10298);
fn(_mod10299);
fn(_mod10300);
fn(_mod10301);
fn(_mod10302);
const regExp = fn(_mod10148);
fn(_mod10303);
const _isNativeReflectConstruct = fn(_mod10304);
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
parsers.unshift(new _isNativeReflectConstruct.default());
let parsers1 = configuration.parsers;
let _default = new _isNativeReflectConstruct.default();
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
const chrono = new _mod10115.Chrono(configuration);
const chrono1 = new _mod10115.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10115.Chrono(createConfiguration(false, true));

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
export const casual = chrono;
export const strict = chrono1;
export const GB = chrono2;