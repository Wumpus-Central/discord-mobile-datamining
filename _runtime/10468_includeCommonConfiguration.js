// _runtime/10468_includeCommonConfiguration.js
import OverlapRemovalRefiner from "10465_OverlapRemovalRefiner.js";
import regExp from "10469_regExp.js";
import regExp2 from "10470_regExp.js";
import _mod10471 from "metro/10471__.js";
import _isNativeReflectConstruct from "10472__isNativeReflectConstruct.js";
import _isNativeReflectConstruct2 from "10473__isNativeReflectConstruct.js";
import _isNativeReflectConstruct3 from "10474__isNativeReflectConstruct.js";

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: null };
      obj[0] = __esModule;
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
let closure_0 = fn(regExp);
let closure_1 = fn(regExp2);
let closure_2 = fn(OverlapRemovalRefiner);
let closure_3 = fn(_mod10471);
let closure_4 = fn(_isNativeReflectConstruct);
let closure_5 = fn(_isNativeReflectConstruct2);
let closure_6 = fn(_isNativeReflectConstruct3);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  parsers.unshift(new mod6.default());
  const refiners = parsers.refiners;
  const _default = new mod6.default();
  refiners.unshift(new mod7.default());
  const refiners1 = parsers.refiners;
  const _default1 = new mod7.default();
  refiners1.unshift(new mod2.default());
  const refiners2 = parsers.refiners;
  const _default2 = new mod2.default();
  refiners2.unshift(new mod3.default());
  const refiners3 = parsers.refiners;
  const _default3 = new mod3.default();
  refiners3.push(new mod.default());
  const refiners4 = parsers.refiners;
  const _default4 = new mod.default();
  refiners4.push(new mod3.default());
  const refiners5 = parsers.refiners;
  const _default5 = new mod3.default();
  refiners5.push(new mod4.default());
  const refiners6 = parsers.refiners;
  const _default6 = new mod4.default();
  refiners6.push(new mod5.default(flag));
  return parsers;
};
