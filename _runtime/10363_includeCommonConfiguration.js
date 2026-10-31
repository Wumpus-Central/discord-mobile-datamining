// _runtime/10363_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10360_OverlapRemovalRefiner.js";
import _mod10364 from "metro/10364__.js";
import _mod10365 from "metro/10365__.js";
import _mod10366 from "metro/10366__.js";
import _mod10367 from "metro/10367__.js";
import _mod10368 from "metro/10368__.js";
import _mod10369 from "metro/10369__.js";

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
fn(_mod10364);
const regExp = fn(_mod10365);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10366 = fn(_mod10366);
fn(_mod10367);
fn(_mod10368);
const _isNativeReflectConstruct = fn(_mod10369);

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
  refiners5.push(new module_10366.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10366.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}
