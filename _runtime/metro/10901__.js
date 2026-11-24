// _runtime/metro/10901__.js
import _mod10730 from "10730__.js";
import _mod10763 from "10763__.js";
import includeCommonConfiguration from "../10770_includeCommonConfiguration.js";
import _mod10902 from "10902__.js";
import _mod10904 from "10904__.js";
import _mod10905 from "10905__.js";
import _mod10906 from "10906__.js";
import _mod10907 from "10907__.js";
import _mod10908 from "10908__.js";
import _mod10909 from "10909__.js";
import _mod10910 from "10910__.js";
import _mod10911 from "10911__.js";
import _mod10912 from "10912__.js";
import _mod10913 from "10913__.js";
import _mod10914 from "10914__.js";
import _mod10915 from "10915__.js";
import _mod10916 from "10916__.js";
import _mod10917 from "10917__.js";
import _mod10918 from "10918__.js";
import _mod10919 from "10919__.js";

function createConfiguration() {
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = false;
  }
  const obj = { parsers: null, refiners: null };
  items = [new regExp.default(flag2), , , , , , , , ,];
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
  const items1 = [new _isNativeReflectConstruct.default(), ,];
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
fn(_mod10902);
fn(_mod10904);
fn(_mod10905);
fn(_mod10906);
fn(_mod10907);
fn(_mod10908);
fn(_mod10909);
fn(_mod10910);
fn(_mod10911);
fn(_mod10912);
fn(_mod10913);
fn(_mod10914);
fn(_mod10915);
fn(_mod10916);
fn(_mod10917);
const regExp = fn(_mod10763);
fn(_mod10918);
const _isNativeReflectConstruct = fn(_mod10919);
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
const chrono = new _mod10730.Chrono(configuration);
const chrono1 = new _mod10730.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10730.Chrono(createConfiguration(false, true));

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
export const casual = chrono;
export const strict = chrono1;
export const GB = chrono2;
