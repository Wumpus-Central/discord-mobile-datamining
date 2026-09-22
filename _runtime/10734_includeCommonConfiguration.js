// === Module 10734: includeCommonConfiguration ===

// Module 10734 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10731 */;
import _mod10735 from "module_10735" /* 10735 */;
import _mod10736 from "module_10736" /* 10736 */;
import _mod10737 from "module_10737" /* 10737 */;
import _mod10738 from "module_10738" /* 10738 */;
import _mod10739 from "module_10739" /* 10739 */;
import _mod10740 from "module_10740" /* 10740 */;

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
fn(_mod10735);
const regExp = fn(_mod10736);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10737 = fn(_mod10737);
fn(_mod10738);
fn(_mod10739);
const _isNativeReflectConstruct = fn(_mod10740);

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
  refiners5.push(new module_10737.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10737.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};