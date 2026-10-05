// _runtime/metro/10283__.js
import includeCommonConfiguration2 from "../10197_includeCommonConfiguration.js";
import _mod10199 from "10199__.js";
import _mod10274 from "10274__.js";
import _mod10275 from "10275__.js";
import _mod10277 from "10277__.js";
import _mod10278 from "10278__.js";
import _mod10279 from "10279__.js";
import _mod10280 from "10280__.js";
import _mod10281 from "10281__.js";
import _mod10282 from "10282__.js";
import { Chrono } from "10157__.js";

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10275.default(), , , ,];
  new module_10275.default();
  items[1] = new module_10278.default();
  new module_10278.default();
  items[2] = new module_10280.default();
  new module_10280.default();
  items[3] = new module_10279.default();
  new module_10279.default();
  items[4] = new module_10277.default();
  new module_10277.default();
  items1 = [new module_10281.default()];
  new module_10281.default();
  items1[1] = new module_10282.default();
  new module_10282.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10199.default));
  return result;
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
  const tmp = createConfiguration();
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10274.default();
  unshift(_default);
  return tmp;
}
const module_10199 = fn(_mod10199);
const module_10274 = fn(_mod10274);
const module_10275 = fn(_mod10275);
const module_10277 = fn(_mod10277);
const module_10278 = fn(_mod10278);
const module_10279 = fn(_mod10279);
const module_10280 = fn(_mod10280);
const module_10281 = fn(_mod10281);
const module_10282 = fn(_mod10282);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10274.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10274.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("10157__.js").Chrono(createConfiguration());
const Chrono_export = require("10157__.js").Chrono;

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
export const hant = chrono;
export const casual = chrono2;
export const strict = chrono1;
