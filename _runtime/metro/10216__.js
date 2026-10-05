// _runtime/metro/10216__.js
import _mod10190 from "10190__.js";
import includeCommonConfiguration2 from "../10197_includeCommonConfiguration.js";
import _mod10217 from "10217__.js";
import _mod10218 from "10218__.js";
import _mod10219 from "10219__.js";
import _mod10220 from "10220__.js";
import _mod10221 from "10221__.js";
import _mod10222 from "10222__.js";
import _mod10224 from "10224__.js";
import _mod10225 from "10225__.js";
import _mod10226 from "10226__.js";
import _mod10227 from "10227__.js";
import _mod10228 from "10228__.js";
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
  items = [new module_10190.default(flag2), , , , , ,];
  new module_10190.default(flag2);
  items[1] = new module_10225.default();
  new module_10225.default();
  items[2] = new module_10219.default();
  new module_10219.default();
  items[3] = new module_10224.default();
  new module_10224.default();
  items[4] = new module_10226.default();
  new module_10226.default();
  items[5] = new module_10227.default();
  new module_10227.default();
  items[6] = new module_10222.default();
  new module_10222.default();
  items1 = [new module_10220.default()];
  new module_10220.default();
  items1[1] = new module_10221.default();
  new module_10221.default();
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
  const _default = new module_10217.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10218.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10228.default();
  unshift3(_default2);
  return tmp;
}
const module_10217 = fn(_mod10217);
const module_10218 = fn(_mod10218);
const module_10190 = fn(_mod10190);
const module_10219 = fn(_mod10219);
const module_10220 = fn(_mod10220);
const module_10221 = fn(_mod10221);
const module_10222 = fn(_mod10222);
const module_10224 = fn(_mod10224);
const module_10225 = fn(_mod10225);
const module_10226 = fn(_mod10226);
const module_10227 = fn(_mod10227);
const module_10228 = fn(_mod10228);
const configuration = createConfiguration(false, true);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10217.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10218.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10228.default();
unshift3(_default2);
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
