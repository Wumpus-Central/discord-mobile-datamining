// === Module 12129: includeCommonConfiguration ===

// Module 12129 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 12126 */;
import _mod12130 from "module_12130" /* 12130 */;
import _mod12131 from "module_12131" /* 12131 */;
import _mod12132 from "module_12132" /* 12132 */;
import _mod12133 from "module_12133" /* 12133 */;
import _mod12134 from "module_12134" /* 12134 */;
import _mod12135 from "module_12135" /* 12135 */;

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
fn(_mod12130);
const regExp = fn(_mod12131);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_12132 = fn(_mod12132);
fn(_mod12133);
fn(_mod12134);
const _isNativeReflectConstruct = fn(_mod12135);

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
  refiners5.push(new module_12132.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_12132.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}