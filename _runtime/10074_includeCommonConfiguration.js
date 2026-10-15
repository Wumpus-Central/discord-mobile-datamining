// === Module 10074: includeCommonConfiguration ===

// Module 10074 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10071 */;
import _mod10075 from "module_10075" /* 10075 */;
import _mod10076 from "module_10076" /* 10076 */;
import _mod10077 from "module_10077" /* 10077 */;
import _mod10078 from "module_10078" /* 10078 */;
import _mod10079 from "module_10079" /* 10079 */;
import _mod10080 from "module_10080" /* 10080 */;

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
fn(_mod10075);
const regExp = fn(_mod10076);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10077 = fn(_mod10077);
fn(_mod10078);
fn(_mod10079);
const _isNativeReflectConstruct = fn(_mod10080);

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
  refiners5.push(new module_10077.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10077.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};