// _runtime/10228_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10225_OverlapRemovalRefiner.js";
import _mod10229 from "metro/10229__.js";
import _mod10230 from "metro/10230__.js";
import _mod10231 from "metro/10231__.js";
import _mod10232 from "metro/10232__.js";
import _mod10233 from "metro/10233__.js";
import _mod10234 from "metro/10234__.js";

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
fn(_mod10229);
const regExp = fn(_mod10230);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10231 = fn(_mod10231);
fn(_mod10232);
fn(_mod10233);
const _isNativeReflectConstruct = fn(_mod10234);

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
  refiners5.push(new module_10231.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10231.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
