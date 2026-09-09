// === Module 10500: includeCommonConfiguration ===

// Module 10500 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10497 */;
import _mod10501 from "module_10501" /* 10501 */;
import _mod10502 from "module_10502" /* 10502 */;
import _mod10503 from "module_10503" /* 10503 */;
import _mod10504 from "module_10504" /* 10504 */;
import _mod10505 from "module_10505" /* 10505 */;
import _mod10506 from "module_10506" /* 10506 */;

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
fn(_mod10501);
const regExp = fn(_mod10502);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10503 = fn(_mod10503);
fn(_mod10504);
fn(_mod10505);
const _isNativeReflectConstruct = fn(_mod10506);

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
  refiners5.push(new module_10503.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10503.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};