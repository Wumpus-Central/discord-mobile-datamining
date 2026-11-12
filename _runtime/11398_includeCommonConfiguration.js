// === Module 11398: includeCommonConfiguration ===

// Module 11398 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 11395 */;
import _mod11399 from "module_11399" /* 11399 */;
import _mod11400 from "module_11400" /* 11400 */;
import _mod11401 from "module_11401" /* 11401 */;
import _mod11402 from "module_11402" /* 11402 */;
import _mod11403 from "module_11403" /* 11403 */;
import _mod11404 from "module_11404" /* 11404 */;

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
fn(_mod11399);
const regExp = fn(_mod11400);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_11401 = fn(_mod11401);
fn(_mod11402);
fn(_mod11403);
const _isNativeReflectConstruct = fn(_mod11404);

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
  refiners5.push(new module_11401.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_11401.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}