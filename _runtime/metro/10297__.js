// === Module 10297: ? ===

// Module 10297
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10210 */;
import _mod10212 from "module_10212" /* 10212 */;
import _mod10281 from "module_10281" /* 10281 */;
import _mod10283 from "module_10283" /* 10283 */;
import _mod10284 from "module_10284" /* 10284 */;
import _mod10285 from "module_10285" /* 10285 */;
import _mod10286 from "module_10286" /* 10286 */;
import _mod10298 from "module_10298" /* 10298 */;
import _mod10299 from "module_10299" /* 10299 */;
import _mod10300 from "module_10300" /* 10300 */;
import { Chrono } from "module_10170" /* 10170 */;

const require = globalThis.__r;

function createConfiguration() {
  let items;
  let items1;
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10281.default(), , , , ];
  new module_10281.default();
  items[1] = new module_10284.default();
  new module_10284.default();
  items[2] = new module_10286.default();
  new module_10286.default();
  items[3] = new module_10285.default();
  new module_10285.default();
  items[4] = new module_10283.default();
  new module_10283.default();
  items1 = [new module_10299.default(), ];
  new module_10299.default();
  items1[1] = new module_10300.default();
  new module_10300.default();
  const result = includeCommonConfiguration(obj);
  const refiners = result.refiners;
  result.refiners = refiners.filter((item) => !(item instanceof module_10212.default));
  return result;
}
const fn = this && this.__importDefault || ((__esModule) => {
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
  const _default = new module_10298.default();
  unshift(_default);
  return tmp;
}
const module_10212 = fn(_mod10212);
const module_10298 = fn(_mod10298);
const module_10281 = fn(_mod10281);
const module_10283 = fn(_mod10283);
const module_10284 = fn(_mod10284);
const module_10285 = fn(_mod10285);
const module_10286 = fn(_mod10286);
const module_10299 = fn(_mod10299);
const module_10300 = fn(_mod10300);
const configuration = createConfiguration();
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10298.default();
unshift(_default);
const chrono = new Chrono(configuration);
const configuration1 = createConfiguration();
const parsers1 = configuration1.parsers;
const unshift2 = parsers1.unshift;
const _default1 = new module_10298.default();
unshift2(_default1);
const chrono2 = new Chrono(configuration1);
const chrono1 = new require("module_10170").Chrono(createConfiguration());
const Chrono_export = require("module_10170").Chrono;

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