// === Module 10343: includeCommonConfiguration ===

// Module 10343 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10340 */;
import _mod10344 from "module_10344" /* 10344 */;
import _mod10345 from "module_10345" /* 10345 */;
import _mod10346 from "module_10346" /* 10346 */;
import _mod10347 from "module_10347" /* 10347 */;
import _mod10348 from "module_10348" /* 10348 */;
import _mod10349 from "module_10349" /* 10349 */;

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
fn(_mod10344);
const regExp = fn(_mod10345);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10346 = fn(_mod10346);
fn(_mod10347);
fn(_mod10348);
const _isNativeReflectConstruct = fn(_mod10349);

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
  refiners5.push(new module_10346.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10346.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}