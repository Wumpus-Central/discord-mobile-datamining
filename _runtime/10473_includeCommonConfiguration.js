// _runtime/10473_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10470_OverlapRemovalRefiner.js";
import _mod10474 from "metro/10474__.js";
import _mod10475 from "metro/10475__.js";
import _mod10476 from "metro/10476__.js";
import _mod10477 from "metro/10477__.js";
import _mod10478 from "metro/10478__.js";
import _mod10479 from "metro/10479__.js";

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
fn(_mod10474);
const regExp = fn(_mod10475);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10476 = fn(_mod10476);
fn(_mod10477);
fn(_mod10478);
const _isNativeReflectConstruct = fn(_mod10479);

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
  refiners5.push(new module_10476.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10476.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
