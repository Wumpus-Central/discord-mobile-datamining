// _runtime/10210_includeCommonConfiguration.js
import _mod10207 from "metro/10207__.js";
import _mod10211 from "metro/10211__.js";
import _mod10212 from "metro/10212__.js";
import _mod10213 from "metro/10213__.js";
import _mod10214 from "metro/10214__.js";
import _mod10215 from "metro/10215__.js";
import _mod10216 from "metro/10216__.js";

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
const module_10211 = fn(_mod10211);
const module_10212 = fn(_mod10212);
const module_10207 = fn(_mod10207);
const module_10213 = fn(_mod10213);
const module_10214 = fn(_mod10214);
const module_10215 = fn(_mod10215);
const module_10216 = fn(_mod10216);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers) {
  parsers = parsers.parsers;
  const unshift = parsers.unshift;
  const _default = new module_10215.default();
  unshift(_default);
  const refiners = parsers.refiners;
  const unshift2 = refiners.unshift;
  const _default1 = new module_10216.default();
  unshift2(_default1);
  const refiners1 = parsers.refiners;
  const unshift3 = refiners1.unshift;
  const _default2 = new module_10212.default();
  unshift3(_default2);
  const refiners2 = parsers.refiners;
  const unshift4 = refiners2.unshift;
  const _default3 = new module_10207.default();
  unshift4(_default3);
  const refiners3 = parsers.refiners;
  const push = refiners3.push;
  const _default4 = new module_10211.default();
  push(_default4);
  const refiners4 = parsers.refiners;
  const push2 = refiners4.push;
  const _default5 = new module_10207.default();
  push2(_default5);
  const refiners5 = parsers.refiners;
  const push3 = refiners5.push;
  const _default6 = new module_10213.default();
  push3(_default6);
  const refiners6 = parsers.refiners;
  const push4 = refiners6.push;
  const _default7 = new module_10214.default(flag);
  push4(_default7);
  return parsers;
};
