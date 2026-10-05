// _runtime/10267_hant.js
import includeCommonConfiguration2 from "10197_includeCommonConfiguration.js";
import _mod10199 from "metro/10199__.js";
import _mod10268 from "metro/10268__.js";
import _mod10270 from "metro/10270__.js";
import _mod10271 from "metro/10271__.js";
import _mod10272 from "metro/10272__.js";
import _mod10273 from "metro/10273__.js";
import _mod10274 from "metro/10274__.js";
import _mod10275 from "metro/10275__.js";
import _mod10277 from "metro/10277__.js";
import _mod10278 from "metro/10278__.js";
import _mod10279 from "metro/10279__.js";
import _mod10280 from "metro/10280__.js";
import _mod10281 from "metro/10281__.js";
import _mod10282 from "metro/10282__.js";
import _mod10283 from "metro/10283__.js";
import _mod10284 from "metro/10284__.js";
import { Chrono } from "metro/10157__.js";

const require = globalThis.__r;
let hasOwnProperty;

const self = this;
function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10275.default(), , , , , , , , ,];
  new module_10275.default();
  items[1] = new module_10268.default();
  new module_10268.default();
  items[2] = new module_10278.default();
  new module_10278.default();
  items[3] = new module_10271.default();
  new module_10271.default();
  items[4] = new module_10280.default();
  new module_10280.default();
  items[5] = new module_10273.default();
  new module_10273.default();
  items[6] = new module_10279.default();
  new module_10279.default();
  items[7] = new module_10272.default();
  new module_10272.default();
  items[8] = new module_10277.default();
  new module_10277.default();
  items[9] = new module_10270.default();
  new module_10270.default();
  items1 = [new module_10281.default()];
  new module_10281.default();
  items1[1] = new module_10282.default();
  new module_10282.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10199.default));
  return result;
}
let tmp = this && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create
    ? (arg0, __esModule, arg2, arg3) => {
        function get() {
          return __esModule[closure_1];
        }
        let closure_0 = __esModule;
        let closure_1 = arg2;
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
        let tmp3 = ownPropertyDescriptor;
        if (tmp3) {
          let tmp4;
          if ("get" in ownPropertyDescriptor) {
            tmp4 = !__esModule.__esModule;
          } else {
            tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
          }
          tmp3 = !tmp4;
        }
        if (!tmp3) {
          ownPropertyDescriptor = { enumerable: true, get };
          const obj = { enumerable: true, get };
        }
        Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
      }
    : (arg0, arg1, arg2, arg3) => {
        let tmp = arg3;
        if (undefined === arg3) {
          tmp = arg2;
        }
        arg0[tmp] = arg1[arg2];
      };
}
let closure_4 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  const _Object2 = Object;
  tmp3 = Object.create
    ? (arg0, value) => {
        const obj = { enumerable: true, value };
        Object.defineProperty(arg0, "default", obj);
      }
    : (arg0, arg1) => {
        arg0.default = arg1;
      };
}
let closure_5 = tmp3;
let fn = self && self.__importStar;
if (!fn) {
  fn = function t(arg0) {
    fn =
      Object.getOwnPropertyNames ||
      ((obj) => {
        const items = [];
        for (const key10005 in obj) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          if (!hasOwnProperty.call(obj, key10005)) {
            continue;
          } else {
            items[items.length] = key10005;
            continue;
          }
          continue;
        }
        return items;
      });
    return fn(arg0);
  };
  fn = (__esModule) => {
    const tmp = __esModule;
    if (tmp) {
      if (__esModule.__esModule) {
        return __esModule;
      }
    }
    const obj = {};
    if (null != __esModule) {
      let num;
      const arr = fn(__esModule);
      for (let num = 0; num < arr.length; num = num + 1) {
        if ("default" !== arr[num]) {
          let tmp5 = closure_4(obj, __esModule, arr[num]);
        }
      }
    }
    closure_5(obj, __esModule);
    return obj;
  };
}
const fn2 =
  (self && self.__importDefault) ||
  ((__esModule) => {
    let tmp2;
    const tmp = __esModule;
    if (!tmp) {
      tmp2 = { default: __esModule };
      const obj = { default: __esModule };
    } else {
      tmp2 = __esModule;
    }
    return tmp2;
  });
function createCasualConfiguration() {
  const tmp = createConfiguration();
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10274.default();
  unshift(_default);
  return tmp;
}
const module_10199 = fn2(_mod10199);
const module_10268 = fn2(_mod10268);
const module_10270 = fn2(_mod10270);
const module_10271 = fn2(_mod10271);
const module_10272 = fn2(_mod10272);
const module_10273 = fn2(_mod10273);
const module_10274 = fn2(_mod10274);
const module_10275 = fn2(_mod10275);
const module_10277 = fn2(_mod10277);
const module_10278 = fn2(_mod10278);
const module_10279 = fn2(_mod10279);
const module_10280 = fn2(_mod10280);
const module_10281 = fn2(_mod10281);
const module_10282 = fn2(_mod10282);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10274.default();
let arr = unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("metro/10157__.js").Chrono(createConfiguration());
const Chrono_export = require("metro/10157__.js").Chrono;

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
export { Chrono_export as Chrono };
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const hant = fn(_mod10283);
export const hans = fn(_mod10284);
export const casual = chrono;
export const strict = chrono1;
