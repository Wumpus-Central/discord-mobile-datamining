// _runtime/11404_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "11401_OverlapRemovalRefiner.js";
import _mod11405 from "metro/11405__.js";
import _mod11406 from "metro/11406__.js";
import _mod11407 from "metro/11407__.js";
import _mod11408 from "metro/11408__.js";
import _mod11409 from "metro/11409__.js";
import _mod11410 from "metro/11410__.js";

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
fn(_mod11405);
const regExp = fn(_mod11406);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_11407 = fn(_mod11407);
fn(_mod11408);
fn(_mod11409);
const _isNativeReflectConstruct = fn(_mod11410);

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
  refiners5.push(new module_11407.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_11407.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}
