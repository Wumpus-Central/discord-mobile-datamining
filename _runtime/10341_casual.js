// === Module 10341: casual ===

// Module 10341 (casual)
import _mod10170 from "module_10170" /* 10170 */;
import _mod10203 from "module_10203" /* 10203 */;
import includeCommonConfiguration2 from "includeCommonConfiguration" /* 10210 */;
import _mod10342 from "module_10342" /* 10342 */;
import _mod10344 from "module_10344" /* 10344 */;
import _mod10345 from "module_10345" /* 10345 */;
import _mod10346 from "module_10346" /* 10346 */;
import _mod10347 from "module_10347" /* 10347 */;
import _mod10348 from "module_10348" /* 10348 */;
import _mod10349 from "module_10349" /* 10349 */;
import _mod10350 from "module_10350" /* 10350 */;
import _mod10351 from "module_10351" /* 10351 */;
import _mod10352 from "module_10352" /* 10352 */;
import _mod10353 from "module_10353" /* 10353 */;
import _mod10354 from "module_10354" /* 10354 */;
import _mod10355 from "module_10355" /* 10355 */;
import _mod10356 from "module_10356" /* 10356 */;
import _mod10357 from "module_10357" /* 10357 */;
import _mod10358 from "module_10358" /* 10358 */;
import _mod10359 from "module_10359" /* 10359 */;

function createConfiguration() {
  let items;
  let items1;
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = false;
  }
  const obj = { parsers: items, refiners: items1 };
  const includeCommonConfiguration = includeCommonConfiguration2.includeCommonConfiguration;
  items = [new module_10203.default(flag2), , , , , , , , , ];
  new module_10203.default(flag2);
  items[1] = new module_10342.default();
  new module_10342.default();
  items[2] = new module_10344.default();
  new module_10344.default();
  items[3] = new module_10345.default();
  new module_10345.default();
  items[4] = new module_10356.default();
  new module_10356.default();
  items[5] = new module_10347.default();
  new module_10347.default();
  items[6] = new module_10348.default();
  new module_10348.default();
  items[7] = new module_10349.default(flag);
  new module_10349.default(flag);
  items[8] = new module_10350.default(flag);
  new module_10350.default(flag);
  items[9] = new module_10351.default(flag);
  new module_10351.default(flag);
  items1 = [new module_10359.default(), , ];
  new module_10359.default();
  items1[1] = new module_10353.default();
  new module_10353.default();
  items1[2] = new module_10352.default();
  new module_10352.default();
  return includeCommonConfiguration(obj, flag);
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
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const tmp = createConfiguration(false, flag);
  const parsers = tmp.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10354.default();
  unshift(_default);
  const parsers1 = tmp.parsers;
  const unshift2 = parsers1.unshift;
  const _default1 = new module_10355.default();
  unshift2(_default1);
  const parsers2 = tmp.parsers;
  const unshift3 = parsers2.unshift;
  const _default2 = new module_10346.default();
  unshift3(_default2);
  const parsers3 = tmp.parsers;
  const unshift4 = parsers3.unshift;
  const _default3 = new module_10357.default();
  unshift4(_default3);
  const parsers4 = tmp.parsers;
  const unshift5 = parsers4.unshift;
  const _default4 = new module_10358.default();
  unshift5(_default4);
  return tmp;
}
const module_10342 = fn(_mod10342);
const module_10344 = fn(_mod10344);
const module_10345 = fn(_mod10345);
const module_10346 = fn(_mod10346);
const module_10347 = fn(_mod10347);
const module_10348 = fn(_mod10348);
const module_10349 = fn(_mod10349);
const module_10350 = fn(_mod10350);
const module_10351 = fn(_mod10351);
const module_10352 = fn(_mod10352);
const module_10353 = fn(_mod10353);
const module_10354 = fn(_mod10354);
const module_10355 = fn(_mod10355);
const module_10356 = fn(_mod10356);
const module_10357 = fn(_mod10357);
const module_10203 = fn(_mod10203);
const module_10358 = fn(_mod10358);
const module_10359 = fn(_mod10359);
const Chrono = _mod10170.Chrono;
const configuration = createConfiguration(false, false);
let parsers = configuration.parsers;
let unshift = parsers.unshift;
let _default = new module_10354.default();
unshift(_default);
let parsers1 = configuration.parsers;
let unshift2 = parsers1.unshift;
let _default1 = new module_10355.default();
unshift2(_default1);
let parsers2 = configuration.parsers;
let unshift3 = parsers2.unshift;
let _default2 = new module_10346.default();
unshift3(_default2);
let parsers3 = configuration.parsers;
let unshift4 = parsers3.unshift;
let _default3 = new module_10357.default();
unshift4(_default3);
let parsers4 = configuration.parsers;
let unshift5 = parsers4.unshift;
let _default4 = new module_10358.default();
unshift5(_default4);
const chrono = new Chrono(configuration);
const chrono1 = new _mod10170.Chrono(createConfiguration(true, false));
const chrono2 = new _mod10170.Chrono(createConfiguration(false, true));

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