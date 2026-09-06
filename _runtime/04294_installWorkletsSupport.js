// === Module 4294: installWorkletsSupport ===

// Module 4294 (installWorkletsSupport)
import reactNativeWorkletsCompat from "reactNativeWorkletsCompat" /* 4295 */;
import _mod4299 from "module_4299" /* 4299 */;

require = arg1;
const dependencyMap = arg6;
const __initData = { code: "function determine_Pnpm_installWorkletsSupportTs1(value){const{boxedNitroProxy}=this.__closure;const nitroProxy=boxedNitroProxy.unbox();return nitroProxy.isHybridObject(value);}" };
const __initData2 = { code: "function pack_Pnpm_installWorkletsSupportTs2(value){const{boxedNitroProxy}=this.__closure;const nitroProxy=boxedNitroProxy.unbox();return nitroProxy.box(value);}" };
const __initData3 = { code: "function unpack_Pnpm_installWorkletsSupportTs3(value){return value.unbox();}" };

export const installWorkletsSupport = function installWorkletsSupport() {
  try {
    const NitroModules = _mod4299.NitroModules;
    const boxResult = NitroModules.box(_mod4299.NitroModules);
    require = boxResult;
    let obj = { name: "nitro.HybridObject", determine: null, pack: null, unpack: null };
    const fn = function _(arg0) {
      return boxResult.unbox().isHybridObject(arg0);
    };
    obj = { boxedNitroProxy: boxResult };
    fn.__closure = obj;
    fn.__workletHash = 17379885884344;
    fn.__initData = __initData;
    obj.determine = fn;
    const fn2 = function c(arg0) {
      return boxResult.unbox().box(arg0);
    };
    obj = { boxedNitroProxy: boxResult };
    fn2.__closure = obj;
    fn2.__workletHash = 15686149812025;
    fn2.__initData = __initData2;
    obj.pack = fn2;
    const fn3 = function l(unbox) {
      return unbox.unbox();
    };
    fn3.__closure = {};
    fn3.__workletHash = 16222078380838;
    fn3.__initData = __initData3;
    obj.unpack = fn3;
    const result = reactNativeWorkletsCompat.registerCustomSerializable(obj);
  } catch (err) {
  }
};