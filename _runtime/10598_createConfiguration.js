// _runtime/10598_createConfiguration.js
import regExp from "10475_regExp.js";
import includeCommonConfiguration from "10482_includeCommonConfiguration.js";
import _isNativeReflectConstruct2 from "10487__isNativeReflectConstruct.js";
import _isNativeReflectConstruct3 from "10599__isNativeReflectConstruct.js";
import _isNativeReflectConstruct4 from "10601__isNativeReflectConstruct.js";
import _isNativeReflectConstruct5 from "10603__isNativeReflectConstruct.js";
import _isNativeReflectConstruct6 from "10604__isNativeReflectConstruct.js";
import _isNativeReflectConstruct7 from "10605__isNativeReflectConstruct.js";
import _isNativeReflectConstruct8 from "10606__isNativeReflectConstruct.js";
import _isNativeReflectConstruct9 from "10607__isNativeReflectConstruct.js";
import _isNativeReflectConstruct10 from "10608__isNativeReflectConstruct.js";
import _isNativeReflectConstruct11 from "10609__isNativeReflectConstruct.js";
import _isNativeReflectConstruct12 from "10610__isNativeReflectConstruct.js";
import _isNativeReflectConstruct13 from "10611__isNativeReflectConstruct.js";
import _isNativeReflectConstruct14 from "10612__isNativeReflectConstruct.js";
import { ReferenceWithTimezone } from "10449_ReferenceWithTimezone.js";

function createConfiguration(flag) {
  const obj = { parsers: null, refiners: null };
  const items = [new mod9.default(), , , , , ,];
  const _default = new mod9.default();
  items[1] = new mod8.default(true);
  const _default1 = new mod8.default(true);
  items[2] = new mod.default();
  const _default2 = new mod.default();
  items[3] = new mod2.default();
  const _default3 = new mod2.default();
  items[4] = new mod7.default();
  const _default4 = new mod7.default();
  items[5] = new mod3.default(flag);
  const _default5 = new mod3.default(flag);
  items[6] = new mod4.default();
  obj[0] = items;
  const _default6 = new mod4.default();
  const items1 = [new mod6.default()];
  const _default7 = new mod6.default();
  items1[1] = new mod5.default();
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
let closure_3 = fn(_isNativeReflectConstruct3);
let closure_4 = fn(_isNativeReflectConstruct4);
let _isNativeReflectConstruct = fn(_isNativeReflectConstruct5);
let closure_6 = fn(_isNativeReflectConstruct6);
let closure_7 = fn(_isNativeReflectConstruct7);
let closure_8 = fn(_isNativeReflectConstruct8);
let closure_9 = fn(_isNativeReflectConstruct9);
_isNativeReflectConstruct = fn(_isNativeReflectConstruct10);
_isNativeReflectConstruct = fn(_isNativeReflectConstruct11);
let closure_12 = fn(_isNativeReflectConstruct12);
_isNativeReflectConstruct = fn(_isNativeReflectConstruct13);
let closure_14 = fn(regExp);
_isNativeReflectConstruct = fn(_isNativeReflectConstruct14);
let closure_16 = fn(_isNativeReflectConstruct2);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
parsers.unshift(new _isNativeReflectConstruct.default());
let parsers1 = configuration.parsers;
let _default = new _isNativeReflectConstruct.default();
const obj1 = {
  enumerable: true,
  get() {
    return ReferenceWithTimezone /* ReferenceWithTimezone */.ReferenceWithTimezone;
  },
};
const obj2 = {
  enumerable: true,
  get() {
    return require("metro/10451__.js").Meridiem;
  },
};
const obj3 = {
  enumerable: true,
  get() {
    return require("metro/10451__.js").Weekday;
  },
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
const chrono = new require("Chrono").Chrono(configuration);
const chrono1 = new require("Chrono").Chrono(createConfiguration(true));

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
export const Chrono = ReferenceWithTimezone /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingResult = ReferenceWithTimezone /* ReferenceWithTimezone */.ParsingComponents;
export const ParsingComponents = ReferenceWithTimezone /* ReferenceWithTimezone */.ParsingComponents;
export const ReferenceWithTimezone = ReferenceWithTimezone /* ReferenceWithTimezone */.ReferenceWithTimezone;
export const Meridiem = require("metro/10451__.js").Meridiem;
export const Weekday = require("metro/10451__.js").Weekday;
export const casual = chrono;
export const strict = chrono1;
