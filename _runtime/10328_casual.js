// _runtime/10328_casual.js
import _mod10157 from "metro/10157__.js";
import _mod10190 from "metro/10190__.js";
import includeCommonConfiguration2 from "10197_includeCommonConfiguration.js";
import _mod10329 from "metro/10329__.js";
import _mod10331 from "metro/10331__.js";
import _mod10332 from "metro/10332__.js";
import _mod10333 from "metro/10333__.js";
import _mod10334 from "metro/10334__.js";
import _mod10335 from "metro/10335__.js";
import _mod10336 from "metro/10336__.js";
import _mod10337 from "metro/10337__.js";
import _mod10338 from "metro/10338__.js";
import _mod10339 from "metro/10339__.js";
import _mod10340 from "metro/10340__.js";
import _mod10341 from "metro/10341__.js";
import _mod10342 from "metro/10342__.js";
import _mod10343 from "metro/10343__.js";
import _mod10344 from "metro/10344__.js";
import _mod10345 from "metro/10345__.js";
import _mod10346 from "metro/10346__.js";

function createConfiguration() {
  let items;
  let items1;
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = false;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10190.default(flag2), , , , , , , , ,];
  new module_10190.default(flag2);
  items[1] = new module_10329.default();
  new module_10329.default();
  items[2] = new module_10331.default();
  new module_10331.default();
  items[3] = new module_10332.default();
  new module_10332.default();
  items[4] = new module_10343.default();
  new module_10343.default();
  items[5] = new module_10334.default();
  new module_10334.default();
  items[6] = new module_10335.default();
  new module_10335.default();
  items[7] = new module_10336.default(flag);
  new module_10336.default(flag);
  items[8] = new module_10337.default(flag);
  new module_10337.default(flag);
  items[9] = new module_10338.default(flag);
  new module_10338.default(flag);
  items1 = [new module_10346.default(), ,];
  new module_10346.default();
  items1[1] = new module_10340.default();
  new module_10340.default();
  items1[2] = new module_10339.default();
  new module_10339.default();
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
    flag = false;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10341.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10342.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10333.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10344.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10345.default();
  unshift5(_default4);
  return tmp;
}
const module_10329 = fn(_mod10329);
const module_10331 = fn(_mod10331);
const module_10332 = fn(_mod10332);
const module_10333 = fn(_mod10333);
const module_10334 = fn(_mod10334);
const module_10335 = fn(_mod10335);
const module_10336 = fn(_mod10336);
const module_10337 = fn(_mod10337);
const module_10338 = fn(_mod10338);
const module_10339 = fn(_mod10339);
const module_10340 = fn(_mod10340);
const module_10341 = fn(_mod10341);
const module_10342 = fn(_mod10342);
const module_10343 = fn(_mod10343);
const module_10344 = fn(_mod10344);
const module_10190 = fn(_mod10190);
const module_10345 = fn(_mod10345);
const module_10346 = fn(_mod10346);
const Chrono = _mod10157.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10341.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10342.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10333.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10344.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10345.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10157.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10157.Chrono(createConfiguration(false, true));

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
export const casual = chrono;
export const strict = chrono1;
export const GB = chrono2;
