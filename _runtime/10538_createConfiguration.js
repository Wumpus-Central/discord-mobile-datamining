// _runtime/10538_createConfiguration.js
import regExp from "10479_regExp.js";
import includeCommonConfiguration from "10486_includeCommonConfiguration.js";
import _isNativeReflectConstruct from "10539__isNativeReflectConstruct.js";
import _isNativeReflectConstruct2 from "10540__isNativeReflectConstruct.js";
import _isNativeReflectConstruct3 from "10541__isNativeReflectConstruct.js";
import _isNativeReflectConstruct4 from "10542__isNativeReflectConstruct.js";
import _isNativeReflectConstruct5 from "10543__isNativeReflectConstruct.js";
import _isNativeReflectConstruct6 from "10545__isNativeReflectConstruct.js";
import _isNativeReflectConstruct7 from "10546__isNativeReflectConstruct.js";
import _isNativeReflectConstruct8 from "10547__isNativeReflectConstruct.js";
import _isNativeReflectConstruct9 from "10548__isNativeReflectConstruct.js";
import _isNativeReflectConstruct10 from "10549__isNativeReflectConstruct.js";
import _isNativeReflectConstruct11 from "10550__isNativeReflectConstruct.js";
import _isNativeReflectConstruct12 from "10551__isNativeReflectConstruct.js";
import _isNativeReflectConstruct13 from "10552__isNativeReflectConstruct.js";
import _isNativeReflectConstruct14 from "10553__isNativeReflectConstruct.js";
import _isNativeReflectConstruct15 from "10554__isNativeReflectConstruct.js";
import _isNativeReflectConstruct16 from "10555__isNativeReflectConstruct.js";
import { ReferenceWithTimezone } from "10453_ReferenceWithTimezone.js";

function createConfiguration(flag) {
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: null, refiners: null };
  const items = [new mod5.default(flag2), , , , , , , , ,];
  const _default = new mod5.default(flag2);
  items[1] = new mod6.default();
  const _default1 = new mod6.default();
  items[2] = new mod8.default();
  const _default2 = new mod8.default();
  items[3] = new mod9.default();
  const _default3 = new mod9.default();
  items[4] = new mod7.default();
  const _default4 = new mod7.default();
  items[5] = new mod12.default();
  const _default5 = new mod12.default();
  items[6] = new mod10.default();
  const _default6 = new mod10.default();
  items[7] = new mod11.default(flag);
  const _default7 = new mod11.default(flag);
  items[8] = new mod16.default(flag);
  const _default8 = new mod16.default(flag);
  items[9] = new mod17.default(flag);
  obj[0] = items;
  const _default9 = new mod17.default(flag);
  const items1 = [new mod2.default()];
  const _default10 = new mod2.default();
  items1[1] = new mod.default();
  obj[1] = items1;
  return includeCommonConfiguration.includeCommonConfiguration(obj, flag);
}
let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: null };
      obj[0] = __esModule;
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
  parsers.unshift(new mod3.default());
  const parsers1 = tmp.parsers;
  const _default = new mod3.default();
  parsers1.unshift(new mod4.default());
  const parsers2 = tmp.parsers;
  const _default1 = new mod4.default();
  parsers2.unshift(new mod13.default());
  const parsers3 = tmp.parsers;
  const _default2 = new mod13.default();
  parsers3.unshift(new mod9.default());
  const parsers4 = tmp.parsers;
  const _default3 = new mod9.default();
  parsers4.unshift(new mod15.default());
  const parsers5 = tmp.parsers;
  const _default4 = new mod15.default();
  parsers5.unshift(new mod14.default());
  return tmp;
}
let closure_3 = fn(_isNativeReflectConstruct);
let closure_4 = fn(_isNativeReflectConstruct2);
let closure_5 = fn(_isNativeReflectConstruct3);
let closure_6 = fn(_isNativeReflectConstruct4);
let closure_7 = fn(regExp);
let closure_8 = fn(_isNativeReflectConstruct5);
let closure_9 = fn(_isNativeReflectConstruct6);
let closure_10 = fn(_isNativeReflectConstruct7);
let closure_11 = fn(_isNativeReflectConstruct8);
let closure_12 = fn(_isNativeReflectConstruct9);
let closure_13 = fn(_isNativeReflectConstruct10);
let closure_14 = fn(_isNativeReflectConstruct11);
let closure_15 = fn(_isNativeReflectConstruct12);
let closure_16 = fn(_isNativeReflectConstruct13);
let closure_17 = fn(_isNativeReflectConstruct14);
let closure_18 = fn(_isNativeReflectConstruct15);
let closure_19 = fn(_isNativeReflectConstruct16);
const chrono = new require("Chrono").Chrono(createCasualConfiguration());
const chrono1 = new require("Chrono").Chrono(createConfiguration(true));

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
export const Chrono = ReferenceWithTimezone /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingResult = ReferenceWithTimezone /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingComponents = ReferenceWithTimezone /* ReferenceWithTimezone */.ParsingComponents;
export const ReferenceWithTimezone = ReferenceWithTimezone /* ReferenceWithTimezone */.ReferenceWithTimezone;
export const Meridiem = require("metro/10455__.js").Meridiem;
export const Weekday = require("metro/10455__.js").Weekday;
export const casual = chrono;
export const strict = chrono1;
