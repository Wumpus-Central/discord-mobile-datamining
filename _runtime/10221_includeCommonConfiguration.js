// _runtime/10221_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10218_OverlapRemovalRefiner.js";
import _mod10222 from "metro/10222__.js";
import _mod10223 from "metro/10223__.js";
import _mod10224 from "metro/10224__.js";
import _mod10225 from "metro/10225__.js";
import _mod10226 from "metro/10226__.js";
import _mod10227 from "metro/10227__.js";

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
fn(_mod10222);
const regExp = fn(_mod10223);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10224 = fn(_mod10224);
fn(_mod10225);
fn(_mod10226);
const _isNativeReflectConstruct = fn(_mod10227);

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
  refiners5.push(new module_10224.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10224.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
