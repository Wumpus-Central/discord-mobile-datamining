// _runtime/10727_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10724_OverlapRemovalRefiner.js";
import _mod10728 from "metro/10728__.js";
import _mod10729 from "metro/10729__.js";
import _mod10730 from "metro/10730__.js";
import _mod10731 from "metro/10731__.js";
import _mod10732 from "metro/10732__.js";
import _mod10733 from "metro/10733__.js";

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
fn(_mod10728);
const regExp = fn(_mod10729);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10730 = fn(_mod10730);
fn(_mod10731);
fn(_mod10732);
const _isNativeReflectConstruct = fn(_mod10733);

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
  refiners5.push(new module_10730.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10730.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
