// _runtime/metro/10240__.js
import _mod10190 from "10190__.js";
import includeCommonConfiguration2 from "../10197_includeCommonConfiguration.js";
import _mod10241 from "10241__.js";
import _mod10243 from "10243__.js";
import _mod10244 from "10244__.js";
import _mod10245 from "10245__.js";
import _mod10246 from "10246__.js";
import _mod10247 from "10247__.js";
import _mod10248 from "10248__.js";
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
  items = [new module_10190.default(flag2), , ,];
  new module_10190.default(flag2);
  items[1] = new module_10241.default();
  new module_10241.default();
  items[2] = new module_10243.default();
  new module_10243.default();
  items[3] = new module_10246.default();
  new module_10246.default();
  items1 = [new module_10244.default()];
  new module_10244.default();
  items1[1] = new module_10245.default();
  new module_10245.default();
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
  const _default = new module_10247.default();
  push(_default);
  const parsers1 = tmp.parsers;
  const push2 = parsers1.push;
  const _default1 = new module_10248.default();
  push2(_default1);
  return tmp;
}
const module_10190 = fn(_mod10190);
const module_10241 = fn(_mod10241);
const module_10243 = fn(_mod10243);
const module_10244 = fn(_mod10244);
const module_10245 = fn(_mod10245);
const module_10246 = fn(_mod10246);
const module_10247 = fn(_mod10247);
const module_10248 = fn(_mod10248);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let push = parsers.push;
let _default = new module_10247.default();
push(_default);
let parsers1 = configuration.parsers;
let push2 = parsers1.push;
let _default1 = new module_10248.default();
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
