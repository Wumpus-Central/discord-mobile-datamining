// === Module 11389: includeCommonConfiguration ===

// Module 11389 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 11386 */;
import _mod11390 from "module_11390" /* 11390 */;
import _mod11391 from "module_11391" /* 11391 */;
import _mod11392 from "module_11392" /* 11392 */;
import _mod11393 from "module_11393" /* 11393 */;
import _mod11394 from "module_11394" /* 11394 */;
import _mod11395 from "module_11395" /* 11395 */;

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
fn(_mod11390);
const regExp = fn(_mod11391);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_11392 = fn(_mod11392);
fn(_mod11393);
fn(_mod11394);
const _isNativeReflectConstruct = fn(_mod11395);

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
  refiners5.push(new module_11392.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_11392.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}