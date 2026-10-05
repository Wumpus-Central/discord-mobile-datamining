// === Module 4610: installWorkletsSupport ===

// Module 4610 (installWorkletsSupport)
import reactNativeWorkletsCompat from "reactNativeWorkletsCompat" /* 4611 */;
import installedNitro1 from "installedNitro1" /* 4615 */;

const __initData = { code: "function determine_Pnpm_installWorkletsSupportTs1(value){const{boxedNitroProxy}=this.__closure;const nitroProxy=boxedNitroProxy.unbox();return nitroProxy.isHybridObject(value);}" };
const __initData2 = { code: "function pack_Pnpm_installWorkletsSupportTs2(value){const{boxedNitroProxy}=this.__closure;const nitroProxy=boxedNitroProxy.unbox();return nitroProxy.box(value);}" };
const __initData3 = { code: "function unpack_Pnpm_installWorkletsSupportTs3(value){return value.unbox();}" };

export const installWorkletsSupport = function installWorkletsSupport() {
  let fn;
  let fn2;
  let fn3;
  try {
    const registerCustomSerializable = reactNativeWorkletsCompat.registerCustomSerializable;
    const NitroModules = installedNitro1.NitroModules;
    const boxResult = NitroModules.box(installedNitro1.NitroModules);
    const obj = { name: "nitro.HybridObject", determine: fn, pack: fn2, unpack: fn3 };
    fn = function _(arg0) {
      const unboxResult = boxResult.unbox();
      return unboxResult.isHybridObject(arg0);
    };
    const obj2 = { boxedNitroProxy: boxResult };
    fn.__closure = obj2;
    fn.__workletHash = 17379885884344;
    fn.__initData = __initData;
    fn2 = function c(arg0) {
      const unboxResult = boxResult.unbox();
      return unboxResult.box(arg0);
    };
    const obj3 = { boxedNitroProxy: boxResult };
    fn2.__closure = obj3;
    fn2.__workletHash = 15686149812025;
    fn2.__initData = __initData2;
    fn3 = function l(unbox) {
      return unbox.unbox();
    };
    fn3.__closure = {};
    fn3.__workletHash = 16222078380838;
    fn3.__initData = __initData3;
    const result = registerCustomSerializable(obj);
  } catch (err) {
  }
};