// _runtime/metro/10284__.js
import includeCommonConfiguration2 from "../10197_includeCommonConfiguration.js";
import _mod10199 from "10199__.js";
import _mod10268 from "10268__.js";
import _mod10270 from "10270__.js";
import _mod10271 from "10271__.js";
import _mod10272 from "10272__.js";
import _mod10273 from "10273__.js";
import _mod10285 from "10285__.js";
import _mod10286 from "10286__.js";
import _mod10287 from "10287__.js";
import { Chrono } from "10157__.js";

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10268.default(), , , ,];
  new module_10268.default();
  items[1] = new module_10271.default();
  new module_10271.default();
  items[2] = new module_10273.default();
  new module_10273.default();
  items[3] = new module_10272.default();
  new module_10272.default();
  items[4] = new module_10270.default();
  new module_10270.default();
  items1 = [new module_10286.default()];
  new module_10286.default();
  items1[1] = new module_10287.default();
  new module_10287.default();
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
  const _default = new module_10285.default();
  unshift(_default);
  return tmp;
}
const module_10199 = fn(_mod10199);
const module_10285 = fn(_mod10285);
const module_10268 = fn(_mod10268);
const module_10270 = fn(_mod10270);
const module_10271 = fn(_mod10271);
const module_10272 = fn(_mod10272);
const module_10273 = fn(_mod10273);
const module_10286 = fn(_mod10286);
const module_10287 = fn(_mod10287);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10285.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10285.default();
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
export const hans = chrono;
export const casual = chrono2;
export const strict = chrono1;
