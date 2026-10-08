// _runtime/09807_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "09804_OverlapRemovalRefiner.js";
import _mod9808 from "metro/09808__.js";
import _mod9809 from "metro/09809__.js";
import _mod9810 from "metro/09810__.js";
import _mod9811 from "metro/09811__.js";
import _mod9812 from "metro/09812__.js";
import _mod9813 from "metro/09813__.js";

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
fn(_mod9808);
const regExp = fn(_mod9809);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_9810 = fn(_mod9810);
fn(_mod9811);
fn(_mod9812);
const _isNativeReflectConstruct = fn(_mod9813);

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
  refiners5.push(new module_9810.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_9810.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
