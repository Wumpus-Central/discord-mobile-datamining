// _runtime/10770_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10767_OverlapRemovalRefiner.js";
import _mod10771 from "metro/10771__.js";
import _mod10772 from "metro/10772__.js";
import _mod10773 from "metro/10773__.js";
import _mod10774 from "metro/10774__.js";
import _mod10775 from "metro/10775__.js";
import _mod10776 from "metro/10776__.js";

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
fn(_mod10771);
const regExp = fn(_mod10772);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10773 = fn(_mod10773);
fn(_mod10774);
fn(_mod10775);
const _isNativeReflectConstruct = fn(_mod10776);

export function includeCommonConfiguration(parsers) {
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
  refiners5.push(new module_10773.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10773.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}
