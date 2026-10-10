// _runtime/09855_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "09852_OverlapRemovalRefiner.js";
import _mod9856 from "metro/09856__.js";
import _mod9857 from "metro/09857__.js";
import _mod9858 from "metro/09858__.js";
import _mod9859 from "metro/09859__.js";
import _mod9860 from "metro/09860__.js";
import _mod9861 from "metro/09861__.js";

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
fn(_mod9856);
const regExp = fn(_mod9857);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_9858 = fn(_mod9858);
fn(_mod9859);
fn(_mod9860);
const _isNativeReflectConstruct = fn(_mod9861);

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
  refiners5.push(new module_9858.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_9858.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
