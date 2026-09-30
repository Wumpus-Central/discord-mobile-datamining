// === Module 10132: includeCommonConfiguration ===

// Module 10132 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10129 */;
import _mod10133 from "module_10133" /* 10133 */;
import _mod10134 from "module_10134" /* 10134 */;
import _mod10135 from "module_10135" /* 10135 */;
import _mod10136 from "module_10136" /* 10136 */;
import _mod10137 from "module_10137" /* 10137 */;
import _mod10138 from "module_10138" /* 10138 */;

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
fn(_mod10133);
const regExp = fn(_mod10134);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10135 = fn(_mod10135);
fn(_mod10136);
fn(_mod10137);
const _isNativeReflectConstruct = fn(_mod10138);

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
  refiners5.push(new module_10135.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10135.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};