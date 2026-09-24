// _runtime/10816_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10813_OverlapRemovalRefiner.js";
import _mod10817 from "metro/10817__.js";
import _mod10818 from "metro/10818__.js";
import _mod10819 from "metro/10819__.js";
import _mod10820 from "metro/10820__.js";
import _mod10821 from "metro/10821__.js";
import _mod10822 from "metro/10822__.js";

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
fn(_mod10817);
const regExp = fn(_mod10818);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10819 = fn(_mod10819);
fn(_mod10820);
fn(_mod10821);
const _isNativeReflectConstruct = fn(_mod10822);

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
  refiners5.push(new module_10819.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10819.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
