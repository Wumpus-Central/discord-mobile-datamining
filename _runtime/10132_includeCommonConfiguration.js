// _runtime/10132_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10129_OverlapRemovalRefiner.js";
import _mod10133 from "metro/10133__.js";
import _mod10134 from "metro/10134__.js";
import _mod10135 from "metro/10135__.js";
import _mod10136 from "metro/10136__.js";
import _mod10137 from "metro/10137__.js";
import _mod10138 from "metro/10138__.js";

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
fn(_mod10133);
const regExp = fn(_mod10134);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10135 = fn(_mod10135);
fn(_mod10136);
fn(_mod10137);
const _isNativeReflectConstruct = fn(_mod10138);

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
  refiners5.push(new module_10135.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10135.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
