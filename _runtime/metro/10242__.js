// _runtime/metro/10242__.js
import includeCommonConfiguration2 from "../10210_includeCommonConfiguration.js";
import _mod10216 from "10216__.js";
import _mod10243 from "10243__.js";
import _mod10245 from "10245__.js";
import _mod10246 from "10246__.js";
import _mod10247 from "10247__.js";
import _mod10248 from "10248__.js";
import _mod10249 from "10249__.js";
import _mod10250 from "10250__.js";
import _mod10251 from "10251__.js";
import _mod10252 from "10252__.js";
import { Chrono } from "10170__.js";

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10243.default(), , , ,];
  new module_10243.default();
  items[1] = new module_10247.default();
  new module_10247.default();
  items[2] = new module_10252.default();
  new module_10252.default();
  items[3] = new module_10248.default();
  new module_10248.default();
  items[4] = new module_10249.default();
  new module_10249.default();
  items1 = [new module_10251.default(), ,];
  new module_10251.default();
  items1[1] = new module_10250.default();
  new module_10250.default();
  items1[2] = new module_10245.default();
  new module_10245.default();
  const result = includeCommonConfiguration(obj, flag);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10216.default));
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10246.default();
  unshift(_default);
  return tmp;
}
const module_10243 = fn(_mod10243);
const module_10245 = fn(_mod10245);
const module_10246 = fn(_mod10246);
const module_10247 = fn(_mod10247);
const module_10248 = fn(_mod10248);
const module_10249 = fn(_mod10249);
const module_10250 = fn(_mod10250);
const module_10251 = fn(_mod10251);
const module_10252 = fn(_mod10252);
const module_10216 = fn(_mod10216);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10246.default();
unshift(_default);
const chrono = new Chrono(configuration);
const chrono1 = new require("10170__.js").Chrono(createConfiguration(true));
const Chrono_export = require("10170__.js").Chrono;

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
export const casual = chrono;
export const strict = chrono1;
