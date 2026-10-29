// _runtime/10318_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10315_OverlapRemovalRefiner.js";
import _mod10319 from "metro/10319__.js";
import _mod10320 from "metro/10320__.js";
import _mod10321 from "metro/10321__.js";
import _mod10322 from "metro/10322__.js";
import _mod10323 from "metro/10323__.js";
import _mod10324 from "metro/10324__.js";

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
fn(_mod10319);
const regExp = fn(_mod10320);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10321 = fn(_mod10321);
fn(_mod10322);
fn(_mod10323);
const _isNativeReflectConstruct = fn(_mod10324);

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
  refiners5.push(new module_10321.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10321.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}
