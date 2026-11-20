// _runtime/11331_includeCommonConfiguration.js
import OverlapRemovalRefiner2 from "11328_OverlapRemovalRefiner.js";
import _mod11332 from "metro/11332__.js";
import _mod11333 from "metro/11333__.js";
import _mod11334 from "metro/11334__.js";
import _mod11335 from "metro/11335__.js";
import _mod11336 from "metro/11336__.js";
import _mod11337 from "metro/11337__.js";

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
fn(_mod11332);
const regExp = fn(_mod11333);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_11334 = fn(_mod11334);
fn(_mod11335);
fn(_mod11336);
const _isNativeReflectConstruct = fn(_mod11337);

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
  refiners5.push(new module_11334.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_11334.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}
