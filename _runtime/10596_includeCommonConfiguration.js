// _runtime/10596_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10593_OverlapRemovalRefiner.js";
import _mod10597 from "metro/10597__.js";
import _mod10598 from "metro/10598__.js";
import _mod10599 from "metro/10599__.js";
import _mod10600 from "metro/10600__.js";
import _mod10601 from "metro/10601__.js";
import _mod10602 from "metro/10602__.js";

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
fn(_mod10597);
const regExp = fn(_mod10598);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10599 = fn(_mod10599);
fn(_mod10600);
fn(_mod10601);
const _isNativeReflectConstruct = fn(_mod10602);

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
  refiners5.push(new module_10599.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10599.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
