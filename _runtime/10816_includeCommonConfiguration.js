// === Module 10816: includeCommonConfiguration ===

// Module 10816 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10813 */;
import _mod10817 from "module_10817" /* 10817 */;
import _mod10818 from "module_10818" /* 10818 */;
import _mod10819 from "module_10819" /* 10819 */;
import _mod10820 from "module_10820" /* 10820 */;
import _mod10821 from "module_10821" /* 10821 */;
import _mod10822 from "module_10822" /* 10822 */;

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
fn(_mod10817);
const regExp = fn(_mod10818);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10819 = fn(_mod10819);
fn(_mod10820);
fn(_mod10821);
const _isNativeReflectConstruct = fn(_mod10822);

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
  refiners5.push(new module_10819.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10819.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};