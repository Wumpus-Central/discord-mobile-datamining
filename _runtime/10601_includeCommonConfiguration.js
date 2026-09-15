// _runtime/10601_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "10598_OverlapRemovalRefiner.js";
import _mod10602 from "metro/10602__.js";
import _mod10603 from "metro/10603__.js";
import _mod10604 from "metro/10604__.js";
import _mod10605 from "metro/10605__.js";
import _mod10606 from "metro/10606__.js";
import _mod10607 from "metro/10607__.js";

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
fn(_mod10602);
const regExp = fn(_mod10603);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10604 = fn(_mod10604);
fn(_mod10605);
fn(_mod10606);
const _isNativeReflectConstruct = fn(_mod10607);

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
  refiners5.push(new module_10604.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10604.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
