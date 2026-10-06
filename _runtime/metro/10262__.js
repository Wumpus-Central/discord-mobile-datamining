// _runtime/metro/10262__.js
import _mod10203 from "10203__.js";
import includeCommonConfiguration2 from "../10210_includeCommonConfiguration.js";
import _mod10263 from "10263__.js";
import _mod10264 from "10264__.js";
import _mod10265 from "10265__.js";
import _mod10266 from "10266__.js";
import _mod10267 from "10267__.js";
import _mod10269 from "10269__.js";
import _mod10270 from "10270__.js";
import _mod10271 from "10271__.js";
import _mod10272 from "10272__.js";
import _mod10273 from "10273__.js";
import _mod10274 from "10274__.js";
import _mod10275 from "10275__.js";
import _mod10276 from "10276__.js";
import _mod10277 from "10277__.js";
import _mod10278 from "10278__.js";
import _mod10279 from "10279__.js";

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10203.default(flag2), , , , , , , , ,];
  new module_10203.default(flag2);
  items[1] = new module_10267.default();
  new module_10267.default();
  items[2] = new module_10270.default();
  new module_10270.default();
  items[3] = new module_10271.default();
  new module_10271.default();
  items[4] = new module_10269.default();
  new module_10269.default();
  items[5] = new module_10274.default();
  new module_10274.default();
  items[6] = new module_10272.default();
  new module_10272.default();
  items[7] = new module_10273.default(flag);
  new module_10273.default(flag);
  items[8] = new module_10278.default(flag);
  new module_10278.default(flag);
  items[9] = new module_10279.default(flag);
  new module_10279.default(flag);
  items1 = [new module_10264.default()];
  new module_10264.default();
  items1[1] = new module_10263.default();
  new module_10263.default();
  return includeCommonConfiguration(obj, flag);
}
const fn =
  (this && this.__importDefault) ||
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
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10265.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10266.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10275.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10271.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10277.default();
  unshift5(_default4);
  const parsers5 = tmp.parsers;
  const unshift6 = parsers5.unshift;
  const _default5 = new module_10276.default();
  unshift6(_default5);
  return tmp;
}
const module_10263 = fn(_mod10263);
const module_10264 = fn(_mod10264);
const module_10265 = fn(_mod10265);
const module_10266 = fn(_mod10266);
const module_10203 = fn(_mod10203);
const module_10267 = fn(_mod10267);
const module_10269 = fn(_mod10269);
const module_10270 = fn(_mod10270);
const module_10271 = fn(_mod10271);
const module_10272 = fn(_mod10272);
const module_10273 = fn(_mod10273);
const module_10274 = fn(_mod10274);
const module_10275 = fn(_mod10275);
const module_10276 = fn(_mod10276);
const module_10277 = fn(_mod10277);
const module_10278 = fn(_mod10278);
const module_10279 = fn(_mod10279);
const chrono = new require("10170__.js").Chrono(createCasualConfiguration());
const chrono1 = new require("10170__.js").Chrono(createConfiguration(true));

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
export const Chrono = require("10170__.js").Chrono;
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
