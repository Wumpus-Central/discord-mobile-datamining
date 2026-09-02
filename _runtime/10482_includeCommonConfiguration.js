// === Module 10482: includeCommonConfiguration ===

// Module 10482 (includeCommonConfiguration)
import OverlapRemovalRefiner from "OverlapRemovalRefiner" /* 10479 */;
import regExp from "regExp" /* 10483 */;
import regExp2 from "regExp" /* 10484 */;
import _mod10485 from "module_10485" /* 10485 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 10486 */;
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 10487 */;
import _isNativeReflectConstruct3 from "_isNativeReflectConstruct" /* 10488 */;

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: null };
      obj[0] = __esModule;
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
let closure_0 = fn(regExp);
let closure_1 = fn(regExp2);
let closure_2 = fn(OverlapRemovalRefiner);
let closure_3 = fn(_mod10485);
let closure_4 = fn(_isNativeReflectConstruct);
let closure_5 = fn(_isNativeReflectConstruct2);
let closure_6 = fn(_isNativeReflectConstruct3);

export const includeCommonConfiguration = function includeCommonConfiguration(parsers, flag) {
  if (flag === undefined) {
    flag = false;
  }
  parsers = parsers.parsers;
  parsers.unshift(new mod6.default());
  const refiners = parsers.refiners;
  const _default = new mod6.default();
  refiners.unshift(new mod7.default());
  const refiners1 = parsers.refiners;
  const _default1 = new mod7.default();
  refiners1.unshift(new mod2.default());
  const refiners2 = parsers.refiners;
  const _default2 = new mod2.default();
  refiners2.unshift(new mod3.default());
  const refiners3 = parsers.refiners;
  const _default3 = new mod3.default();
  refiners3.push(new mod.default());
  const refiners4 = parsers.refiners;
  const _default4 = new mod.default();
  refiners4.push(new mod3.default());
  const refiners5 = parsers.refiners;
  const _default5 = new mod3.default();
  refiners5.push(new mod4.default());
  const refiners6 = parsers.refiners;
  const _default6 = new mod4.default();
  refiners6.push(new mod5.default(flag));
  return parsers;
};