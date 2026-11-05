// === Module 10547: includeCommonConfiguration ===

// Module 10547 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10544 */;
import _mod10548 from "module_10548" /* 10548 */;
import _mod10549 from "module_10549" /* 10549 */;
import _mod10550 from "module_10550" /* 10550 */;
import _mod10551 from "module_10551" /* 10551 */;
import _mod10552 from "module_10552" /* 10552 */;
import _mod10553 from "module_10553" /* 10553 */;

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
fn(_mod10548);
const regExp = fn(_mod10549);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10550 = fn(_mod10550);
fn(_mod10551);
fn(_mod10552);
const _isNativeReflectConstruct = fn(_mod10553);

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
  refiners5.push(new module_10550.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10550.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}