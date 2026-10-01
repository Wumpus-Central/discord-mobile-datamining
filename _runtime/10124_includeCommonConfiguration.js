// === Module 10124: includeCommonConfiguration ===

// Module 10124 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10121 */;
import _mod10125 from "module_10125" /* 10125 */;
import _mod10126 from "module_10126" /* 10126 */;
import _mod10127 from "module_10127" /* 10127 */;
import _mod10128 from "module_10128" /* 10128 */;
import _mod10129 from "module_10129" /* 10129 */;
import _mod10130 from "module_10130" /* 10130 */;

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
fn(_mod10125);
const regExp = fn(_mod10126);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10127 = fn(_mod10127);
fn(_mod10128);
fn(_mod10129);
const _isNativeReflectConstruct = fn(_mod10130);

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
  refiners5.push(new module_10127.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10127.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};