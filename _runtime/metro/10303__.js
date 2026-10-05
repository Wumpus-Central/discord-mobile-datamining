// _runtime/metro/10303__.js
import _mod10190 from "10190__.js";
import includeCommonConfiguration2 from "../10197_includeCommonConfiguration.js";
import _mod10304 from "10304__.js";
import _mod10306 from "10306__.js";
import _mod10307 from "10307__.js";
import _mod10308 from "10308__.js";
import _mod10309 from "10309__.js";
import _mod10310 from "10310__.js";
import _mod10311 from "10311__.js";
import _mod10312 from "10312__.js";
import { Chrono } from "10157__.js";

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
  items = [new module_10190.default(flag2), , , ,];
  new module_10190.default(flag2);
  items[1] = new module_10304.default();
  new module_10304.default();
  items[2] = new module_10306.default();
  new module_10306.default();
  items[3] = new module_10309.default();
  new module_10309.default();
  items[4] = new module_10312.default();
  new module_10312.default();
  items1 = [new module_10307.default()];
  new module_10307.default();
  items1[1] = new module_10308.default();
  new module_10308.default();
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
  const push = parsers.push;
  const _default = new module_10310.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10311.default();
  push2(_default1);
  return tmp;
}
const module_10190 = fn(_mod10190);
const module_10304 = fn(_mod10304);
const module_10306 = fn(_mod10306);
const module_10307 = fn(_mod10307);
const module_10308 = fn(_mod10308);
const module_10309 = fn(_mod10309);
const module_10310 = fn(_mod10310);
const module_10311 = fn(_mod10311);
const module_10312 = fn(_mod10312);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10310.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10311.default();
push2(_default1);
const chrono = new Chrono(configuration);
const chrono1 = new require("10157__.js").Chrono(createConfiguration(true));
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
export const casual = chrono;
export const strict = chrono1;
