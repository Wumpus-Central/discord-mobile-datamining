// _runtime/11465_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "11462_OverlapRemovalRefiner.js";
import _mod11466 from "metro/11466__.js";
import _mod11467 from "metro/11467__.js";
import _mod11468 from "metro/11468__.js";
import _mod11469 from "metro/11469__.js";
import _mod11470 from "metro/11470__.js";
import _mod11471 from "metro/11471__.js";

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
fn(_mod11466);
const regExp = fn(_mod11467);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_11468 = fn(_mod11468);
fn(_mod11469);
fn(_mod11470);
const _isNativeReflectConstruct = fn(_mod11471);

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
  refiners5.push(new module_11468.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_11468.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}
