// _runtime/10251_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10248_OverlapRemovalRefiner.js";
import _mod10252 from "metro/10252__.js";
import _mod10253 from "metro/10253__.js";
import _mod10254 from "metro/10254__.js";
import _mod10255 from "metro/10255__.js";
import _mod10256 from "metro/10256__.js";
import _mod10257 from "metro/10257__.js";

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
fn(_mod10252);
const regExp = fn(_mod10253);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10254 = fn(_mod10254);
fn(_mod10255);
fn(_mod10256);
const _isNativeReflectConstruct = fn(_mod10257);

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
  refiners5.push(new module_10254.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10254.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
