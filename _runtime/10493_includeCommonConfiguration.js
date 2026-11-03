// === Module 10493: includeCommonConfiguration ===

// Module 10493 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10490 */;
import _mod10494 from "module_10494" /* 10494 */;
import _mod10495 from "module_10495" /* 10495 */;
import _mod10496 from "module_10496" /* 10496 */;
import _mod10497 from "module_10497" /* 10497 */;
import _mod10498 from "module_10498" /* 10498 */;
import _mod10499 from "module_10499" /* 10499 */;

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
fn(_mod10494);
const regExp = fn(_mod10495);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10496 = fn(_mod10496);
fn(_mod10497);
fn(_mod10498);
const _isNativeReflectConstruct = fn(_mod10499);

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
  refiners5.push(new module_10496.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10496.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}