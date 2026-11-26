// _runtime/10915_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10912_OverlapRemovalRefiner.js";
import _mod10916 from "metro/10916__.js";
import _mod10917 from "metro/10917__.js";
import _mod10918 from "metro/10918__.js";
import _mod10919 from "metro/10919__.js";
import _mod10920 from "metro/10920__.js";
import _mod10921 from "metro/10921__.js";

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
fn(_mod10916);
const regExp = fn(_mod10917);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10918 = fn(_mod10918);
fn(_mod10919);
fn(_mod10920);
const _isNativeReflectConstruct = fn(_mod10921);

export function includeCommonConfiguration(parsers) {
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
  refiners5.push(new module_10918.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10918.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}
