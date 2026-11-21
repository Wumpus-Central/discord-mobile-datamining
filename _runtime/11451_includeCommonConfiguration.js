// _runtime/11451_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "11448_OverlapRemovalRefiner.js";
import _mod11452 from "metro/11452__.js";
import _mod11453 from "metro/11453__.js";
import _mod11454 from "metro/11454__.js";
import _mod11455 from "metro/11455__.js";
import _mod11456 from "metro/11456__.js";
import _mod11457 from "metro/11457__.js";

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
fn(_mod11452);
const regExp = fn(_mod11453);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_11454 = fn(_mod11454);
fn(_mod11455);
fn(_mod11456);
const _isNativeReflectConstruct = fn(_mod11457);

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
  refiners5.push(new module_11454.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_11454.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}
