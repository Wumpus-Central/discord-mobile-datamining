// _runtime/10098_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10095_OverlapRemovalRefiner.js";
import _mod10099 from "metro/10099__.js";
import _mod10100 from "metro/10100__.js";
import _mod10101 from "metro/10101__.js";
import _mod10102 from "metro/10102__.js";
import _mod10103 from "metro/10103__.js";
import _mod10104 from "metro/10104__.js";

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
fn(_mod10099);
const regExp = fn(_mod10100);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10101 = fn(_mod10101);
fn(_mod10102);
fn(_mod10103);
const _isNativeReflectConstruct = fn(_mod10104);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  parsers.unshift(new _isNativeReflectConstruct.default());
  const refiners = parsers.refiners;
  const _default = new _isNativeReflectConstruct.default();
  refiners.unshift(new _isNativeReflectConstruct.default());
  const refiners1 = parsers.refiners;
  const _default1 = new _isNativeReflectConstruct.default();
  refiners1.unshift(new regExp.default());
  const refiners2 = parsers.refiners;
  const _default2 = new regExp.default();
  refiners2.unshift(new OverlapRemovalRefiner.default());
  const refiners3 = parsers.refiners;
  const _default3 = new OverlapRemovalRefiner.default();
  refiners3.push(new regExp.default());
  const refiners4 = parsers.refiners;
  const _default4 = new regExp.default();
  refiners4.push(new OverlapRemovalRefiner.default());
  const refiners5 = parsers.refiners;
  const _default5 = new OverlapRemovalRefiner.default();
  refiners5.push(new module_10101.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10101.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
