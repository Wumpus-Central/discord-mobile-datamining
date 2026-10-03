// _runtime/10197_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10194_OverlapRemovalRefiner.js";
import _mod10198 from "metro/10198__.js";
import _mod10199 from "metro/10199__.js";
import _mod10200 from "metro/10200__.js";
import _mod10201 from "metro/10201__.js";
import _mod10202 from "metro/10202__.js";
import _mod10203 from "metro/10203__.js";

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
fn(_mod10198);
const regExp = fn(_mod10199);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10200 = fn(_mod10200);
fn(_mod10201);
fn(_mod10202);
const _isNativeReflectConstruct = fn(_mod10203);

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
  refiners5.push(new module_10200.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10200.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
