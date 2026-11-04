// _runtime/10541_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10538_OverlapRemovalRefiner.js";
import _mod10542 from "metro/10542__.js";
import _mod10543 from "metro/10543__.js";
import _mod10544 from "metro/10544__.js";
import _mod10545 from "metro/10545__.js";
import _mod10546 from "metro/10546__.js";
import _mod10547 from "metro/10547__.js";

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
fn(_mod10542);
const regExp = fn(_mod10543);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10544 = fn(_mod10544);
fn(_mod10545);
fn(_mod10546);
const _isNativeReflectConstruct = fn(_mod10547);

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
  refiners5.push(new module_10544.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10544.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}
