// _runtime/10180_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10177_OverlapRemovalRefiner.js";
import _mod10181 from "metro/10181__.js";
import _mod10182 from "metro/10182__.js";
import _mod10183 from "metro/10183__.js";
import _mod10184 from "metro/10184__.js";
import _mod10185 from "metro/10185__.js";
import _mod10186 from "metro/10186__.js";

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
fn(_mod10181);
const regExp = fn(_mod10182);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10183 = fn(_mod10183);
fn(_mod10184);
fn(_mod10185);
const _isNativeReflectConstruct = fn(_mod10186);

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
  refiners5.push(new module_10183.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10183.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
