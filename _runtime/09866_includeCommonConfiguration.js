// _runtime/09866_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "09863_OverlapRemovalRefiner.js";
import _mod9867 from "metro/09867__.js";
import _mod9868 from "metro/09868__.js";
import _mod9869 from "metro/09869__.js";
import _mod9870 from "metro/09870__.js";
import _mod9871 from "metro/09871__.js";
import _mod9872 from "metro/09872__.js";

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
fn(_mod9867);
const regExp = fn(_mod9868);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_9869 = fn(_mod9869);
fn(_mod9870);
fn(_mod9871);
const _isNativeReflectConstruct = fn(_mod9872);

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
  refiners5.push(new module_9869.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_9869.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
