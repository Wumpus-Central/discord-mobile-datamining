// === Module 10810: includeCommonConfiguration ===

// Module 10810 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10807 */;
import _mod10811 from "module_10811" /* 10811 */;
import _mod10812 from "module_10812" /* 10812 */;
import _mod10813 from "module_10813" /* 10813 */;
import _mod10814 from "module_10814" /* 10814 */;
import _mod10815 from "module_10815" /* 10815 */;
import _mod10816 from "module_10816" /* 10816 */;

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
fn(_mod10811);
const regExp = fn(_mod10812);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10813 = fn(_mod10813);
fn(_mod10814);
fn(_mod10815);
const _isNativeReflectConstruct = fn(_mod10816);

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
  refiners5.push(new module_10813.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10813.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};