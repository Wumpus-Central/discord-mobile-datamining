// _runtime/metro/10301__.js
import _mod10203 from "10203__.js";
import includeCommonConfiguration2 from "../10210_includeCommonConfiguration.js";
import _mod10302 from "10302__.js";
import _mod10304 from "10304__.js";
import _mod10306 from "10306__.js";
import _mod10307 from "10307__.js";
import _mod10308 from "10308__.js";
import _mod10309 from "10309__.js";
import _mod10310 from "10310__.js";
import _mod10311 from "10311__.js";
import _mod10312 from "10312__.js";
import _mod10313 from "10313__.js";
import _mod10314 from "10314__.js";
import _mod10315 from "10315__.js";
import { Chrono } from "10170__.js";

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10203.default(true), , , , ,];
  new module_10203.default(true);
  items[1] = new module_10302.default();
  new module_10302.default();
  items[2] = new module_10304.default();
  new module_10304.default();
  items[3] = new module_10313.default();
  new module_10313.default();
  items[4] = new module_10307.default(flag);
  new module_10307.default(flag);
  items[5] = new module_10308.default();
  new module_10308.default();
  items1 = [new module_10310.default()];
  new module_10310.default();
  items1[1] = new module_10309.default();
  new module_10309.default();
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
  const tmp = createConfiguration(false);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10311.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10312.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10306.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10314.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10315.default();
  unshift5(_default4);
  return tmp;
}
const module_10302 = fn(_mod10302);
const module_10304 = fn(_mod10304);
const module_10306 = fn(_mod10306);
const module_10307 = fn(_mod10307);
const module_10308 = fn(_mod10308);
const module_10309 = fn(_mod10309);
const module_10310 = fn(_mod10310);
const module_10311 = fn(_mod10311);
const module_10312 = fn(_mod10312);
const module_10313 = fn(_mod10313);
const module_10314 = fn(_mod10314);
const module_10203 = fn(_mod10203);
const module_10315 = fn(_mod10315);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10311.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10312.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10306.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10314.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10315.default();
unshift5(_default4);
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
