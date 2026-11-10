// === Module 10488: includeCommonConfiguration ===

// Module 10488 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10485 */;
import _mod10489 from "module_10489" /* 10489 */;
import _mod10490 from "module_10490" /* 10490 */;
import _mod10491 from "module_10491" /* 10491 */;
import _mod10492 from "module_10492" /* 10492 */;
import _mod10493 from "module_10493" /* 10493 */;
import _mod10494 from "module_10494" /* 10494 */;

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
fn(_mod10489);
const regExp = fn(_mod10490);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10491 = fn(_mod10491);
fn(_mod10492);
fn(_mod10493);
const _isNativeReflectConstruct = fn(_mod10494);

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
  refiners5.push(new module_10491.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10491.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}