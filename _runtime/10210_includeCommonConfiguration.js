// _runtime/10210_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10207_OverlapRemovalRefiner.js";
import _mod10211 from "metro/10211__.js";
import _mod10212 from "metro/10212__.js";
import _mod10213 from "metro/10213__.js";
import _mod10214 from "metro/10214__.js";
import _mod10215 from "metro/10215__.js";
import _mod10216 from "metro/10216__.js";

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
fn(_mod10211);
const regExp = fn(_mod10212);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10213 = fn(_mod10213);
fn(_mod10214);
fn(_mod10215);
const _isNativeReflectConstruct = fn(_mod10216);

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
  refiners5.push(new module_10213.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10213.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
