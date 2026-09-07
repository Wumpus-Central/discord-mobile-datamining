// === Module 10473: includeCommonConfiguration ===

// Module 10473 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10470 */;
import _mod10474 from "module_10474" /* 10474 */;
import _mod10475 from "module_10475" /* 10475 */;
import _mod10476 from "module_10476" /* 10476 */;
import _mod10477 from "module_10477" /* 10477 */;
import _mod10478 from "module_10478" /* 10478 */;
import _mod10479 from "module_10479" /* 10479 */;

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
fn(_mod10474);
const regExp = fn(_mod10475);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10476 = fn(_mod10476);
fn(_mod10477);
fn(_mod10478);
const _isNativeReflectConstruct = fn(_mod10479);

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
  refiners5.push(new module_10476.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10476.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};