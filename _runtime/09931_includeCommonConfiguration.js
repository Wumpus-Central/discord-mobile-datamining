// === Module 9931: includeCommonConfiguration ===

// Module 9931 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 9928 */;
import _mod9932 from "module_9932" /* 9932 */;
import _mod9933 from "module_9933" /* 9933 */;
import _mod9934 from "module_9934" /* 9934 */;
import _mod9935 from "module_9935" /* 9935 */;
import _mod9936 from "module_9936" /* 9936 */;
import _mod9937 from "module_9937" /* 9937 */;

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
fn(_mod9932);
const regExp = fn(_mod9933);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_9934 = fn(_mod9934);
fn(_mod9935);
fn(_mod9936);
const _isNativeReflectConstruct = fn(_mod9937);

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
  refiners5.push(new module_9934.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_9934.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};