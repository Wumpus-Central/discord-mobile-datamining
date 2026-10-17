// === Module 10155: includeCommonConfiguration ===

// Module 10155 (includeCommonConfiguration)
import OverlapRemovalRefiner2 from "OverlapRemovalRefiner" /* 10152 */;
import _mod10156 from "module_10156" /* 10156 */;
import _mod10157 from "module_10157" /* 10157 */;
import _mod10158 from "module_10158" /* 10158 */;
import _mod10159 from "module_10159" /* 10159 */;
import _mod10160 from "module_10160" /* 10160 */;
import _mod10161 from "module_10161" /* 10161 */;

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
fn(_mod10156);
const regExp = fn(_mod10157);
const OverlapRemovalRefiner = fn(OverlapRemovalRefiner2);
const module_10158 = fn(_mod10158);
fn(_mod10159);
fn(_mod10160);
const _isNativeReflectConstruct = fn(_mod10161);

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
  refiners5.push(new module_10158.default());
  const refiners6 = parsers.refiners;
  const _default6 = new module_10158.default();
  refiners6.push(new _isNativeReflectConstruct.default(flag));
  return parsers;
};