// _runtime/10711_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10708_OverlapRemovalRefiner.js";
import _mod10712 from "metro/10712__.js";
import _mod10713 from "metro/10713__.js";
import _mod10714 from "metro/10714__.js";
import _mod10715 from "metro/10715__.js";
import _mod10716 from "metro/10716__.js";
import _mod10717 from "metro/10717__.js";

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
fn(_mod10712);
const regExp = fn(_mod10713);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10714 = fn(_mod10714);
fn(_mod10715);
fn(_mod10716);
const _isNativeReflectConstruct = fn(_mod10717);

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
  refiners5.push(new module_10714.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10714.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
