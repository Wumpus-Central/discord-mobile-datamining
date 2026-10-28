// _runtime/10285_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10282_OverlapRemovalRefiner.js";
import _mod10286 from "metro/10286__.js";
import _mod10287 from "metro/10287__.js";
import _mod10288 from "metro/10288__.js";
import _mod10289 from "metro/10289__.js";
import _mod10290 from "metro/10290__.js";
import _mod10291 from "metro/10291__.js";

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
fn(_mod10286);
const regExp = fn(_mod10287);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10288 = fn(_mod10288);
fn(_mod10289);
fn(_mod10290);
const _isNativeReflectConstruct = fn(_mod10291);

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
  refiners5.push(new module_10288.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10288.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
