// _runtime/10538_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10535_OverlapRemovalRefiner.js";
import _mod10539 from "metro/10539__.js";
import _mod10540 from "metro/10540__.js";
import _mod10541 from "metro/10541__.js";
import _mod10542 from "metro/10542__.js";
import _mod10543 from "metro/10543__.js";
import _mod10544 from "metro/10544__.js";

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
fn(_mod10539);
const regExp = fn(_mod10540);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10541 = fn(_mod10541);
fn(_mod10542);
fn(_mod10543);
const _isNativeReflectConstruct = fn(_mod10544);

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
  refiners5.push(new module_10541.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10541.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
