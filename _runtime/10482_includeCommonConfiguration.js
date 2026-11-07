// === Module 10482: includeCommonConfiguration ===

// Module 10482 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10479 */;
import _mod10483 from "module_10483" /* 10483 */;
import _mod10484 from "module_10484" /* 10484 */;
import _mod10485 from "module_10485" /* 10485 */;
import _mod10486 from "module_10486" /* 10486 */;
import _mod10487 from "module_10487" /* 10487 */;
import _mod10488 from "module_10488" /* 10488 */;

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
fn(_mod10483);
const regExp = fn(_mod10484);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10485 = fn(_mod10485);
fn(_mod10486);
fn(_mod10487);
const _isNativeReflectConstruct = fn(_mod10488);

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
  refiners5.push(new module_10485.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10485.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
}