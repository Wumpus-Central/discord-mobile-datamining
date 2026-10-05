// _runtime/metro/10313__.js
import _mod10190 from "10190__.js";
import includeCommonConfiguration2 from "../10197_includeCommonConfiguration.js";
import _mod10202 from "10202__.js";
import _mod10314 from "10314__.js";
import _mod10316 from "10316__.js";
import _mod10318 from "10318__.js";
import _mod10319 from "10319__.js";
import _mod10320 from "10320__.js";
import _mod10321 from "10321__.js";
import _mod10322 from "10322__.js";
import _mod10323 from "10323__.js";
import _mod10324 from "10324__.js";
import _mod10325 from "10325__.js";
import _mod10326 from "10326__.js";
import _mod10327 from "10327__.js";
import { Chrono } from "10157__.js";

const require = globalThis.__r;

function createConfiguration(flag) {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10202.default(), , , , , ,];
  new module_10202.default();
  items[1] = new module_10190.default(true);
  new module_10190.default(true);
  items[2] = new module_10314.default();
  new module_10314.default();
  items[3] = new module_10316.default();
  new module_10316.default();
  items[4] = new module_10325.default();
  new module_10325.default();
  items[5] = new module_10319.default(flag);
  new module_10319.default(flag);
  items[6] = new module_10320.default();
  new module_10320.default();
  items1 = [new module_10322.default()];
  new module_10322.default();
  items1[1] = new module_10321.default();
  new module_10321.default();
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
  const _default = new module_10323.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10324.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10318.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10326.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10327.default();
  unshift5(_default4);
  return tmp;
}
const module_10314 = fn(_mod10314);
const module_10316 = fn(_mod10316);
const module_10318 = fn(_mod10318);
const module_10319 = fn(_mod10319);
const module_10320 = fn(_mod10320);
const module_10321 = fn(_mod10321);
const module_10322 = fn(_mod10322);
const module_10323 = fn(_mod10323);
const module_10324 = fn(_mod10324);
const module_10325 = fn(_mod10325);
const module_10326 = fn(_mod10326);
const module_10190 = fn(_mod10190);
const module_10327 = fn(_mod10327);
const module_10202 = fn(_mod10202);
const configuration = createConfiguration(false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10323.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10324.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10318.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10326.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10327.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new require("10157__.js").Chrono(createConfiguration(true));
const Chrono_export = require("10157__.js").Chrono;

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
export { Chrono_export as Chrono };
export const ParsingResult = require("ReferenceWithTimezone").ParsingResult;
export const ParsingComponents = require("ReferenceWithTimezone").ParsingComponents;
export const ReferenceWithTimezone = require("ReferenceWithTimezone").ReferenceWithTimezone;
export const Meridiem = require("Meridiem").Meridiem;
export const Weekday = require("Meridiem").Weekday;
export const casual = chrono;
export const strict = chrono1;
