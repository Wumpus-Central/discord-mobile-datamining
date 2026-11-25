// === Module 10869: includeCommonConfiguration ===

// Module 10869 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10866 */;
import _mod10870 from "module_10870" /* 10870 */;
import _mod10871 from "module_10871" /* 10871 */;
import _mod10872 from "module_10872" /* 10872 */;
import _mod10873 from "module_10873" /* 10873 */;
import _mod10874 from "module_10874" /* 10874 */;
import _mod10875 from "module_10875" /* 10875 */;

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
fn(_mod10870);
const regExp = fn(_mod10871);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10872 = fn(_mod10872);
fn(_mod10873);
fn(_mod10874);
const _isNativeReflectConstruct = fn(_mod10875);

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
  refiners5.push(new module_10872.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10872.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}