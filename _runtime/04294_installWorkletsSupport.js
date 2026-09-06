// === Module 4294: installWorkletsSupport ===

// Module 4294 (installWorkletsSupport)
import _mod4295 from "module_4295" /* 4295 */;
import getInstalledNitro from "getInstalledNitro" /* 4299 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function determine_Pnpm_installWorkletsSupportTs1(value){const{boxedNitroProxy}=this.__closure;const nitroProxy=boxedNitroProxy.unbox();return nitroProxy.isHybridObject(value);}" };
let closure_3 = { code: "function pack_Pnpm_installWorkletsSupportTs2(value){const{boxedNitroProxy}=this.__closure;const nitroProxy=boxedNitroProxy.unbox();return nitroProxy.box(value);}" };
let closure_4 = { code: "function unpack_Pnpm_installWorkletsSupportTs3(value){return value.unbox();}" };
arg5.installWorkletsSupport = function installWorkletsSupport() {
  try {
    const NitroModules = getInstalledNitro.NitroModules;
    const boxResult = NitroModules.box(getInstalledNitro.NitroModules);
    require = boxResult;
    let obj = { name: "nitro.HybridObject", determine: null, pack: null, unpack: null };
    const fn = function _(arg0) {
      return boxResult.unbox().isHybridObject(arg0);
    };
    obj = { boxedNitroProxy: null };
    obj[0] = boxResult;
    fn.__closure = obj;
    fn.__workletHash = 17379885884344;
    fn.__initData = closure_2;
    obj[1] = fn;
    const fn2 = function c(arg0) {
      return boxResult.unbox().box(arg0);
    };
    obj = { boxedNitroProxy: null };
    obj[0] = boxResult;
    fn2.__closure = obj;
    fn2.__workletHash = 15686149812025;
    fn2.__initData = closure_3;
    obj[2] = fn2;
    const fn3 = function l(unbox) {
      return unbox.unbox();
    };
    fn3.__closure = {};
    fn3.__workletHash = 16222078380838;
    fn3.__initData = closure_4;
    obj[3] = fn3;
    const result = _mod4295.registerCustomSerializable(obj);
  } catch (err) {
  }
};