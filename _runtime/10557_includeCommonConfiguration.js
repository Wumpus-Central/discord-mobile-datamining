// _runtime/10557_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10554_OverlapRemovalRefiner.js";
import _mod10558 from "metro/10558__.js";
import _mod10559 from "metro/10559__.js";
import _mod10560 from "metro/10560__.js";
import _mod10561 from "metro/10561__.js";
import _mod10562 from "metro/10562__.js";
import _mod10563 from "metro/10563__.js";

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
fn(_mod10558);
const regExp = fn(_mod10559);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10560 = fn(_mod10560);
fn(_mod10561);
fn(_mod10562);
const _isNativeReflectConstruct = fn(_mod10563);

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
  refiners5.push(new module_10560.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10560.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
