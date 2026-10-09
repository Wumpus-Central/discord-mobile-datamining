// _runtime/09826_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "09823_OverlapRemovalRefiner.js";
import _mod9827 from "metro/09827__.js";
import _mod9828 from "metro/09828__.js";
import _mod9829 from "metro/09829__.js";
import _mod9830 from "metro/09830__.js";
import _mod9831 from "metro/09831__.js";
import _mod9832 from "metro/09832__.js";

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
fn(_mod9827);
const regExp = fn(_mod9828);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_9829 = fn(_mod9829);
fn(_mod9830);
fn(_mod9831);
const _isNativeReflectConstruct = fn(_mod9832);

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
  refiners5.push(new module_9829.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_9829.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};
