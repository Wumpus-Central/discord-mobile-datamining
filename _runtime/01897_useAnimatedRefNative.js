// === Module 1897: useAnimatedRefNative ===

// Module 1897 (useAnimatedRefNative)
import _mod1706 from "module_1706" /* 1706 */;
import _mod1708 from "module_1708" /* 1708 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const useState = fn(19).useState;
let closure_4 = { code: "(function pnpm_useAnimatedRefNativeTs1(){let[sharedWrapper,currentWrapper]=this.__closure;sharedWrapper.value=currentWrapper;})" };

export function useAnimatedRef() {
  const first = _slicedToArray(useState(() => first(1708).createShareable(first(1708).UIRuntimeId, null)), 1)[0];
  const animatedRefBase = first(1898).useAnimatedRefBase((__internalInstanceHandle) => {
    const shadowNodeWrapperFromRef = _mod1706.getShadowNodeWrapperFromRef(__internalInstanceHandle);
    items = [closure_4, first, shadowNodeWrapperFromRef];
    c0 = undefined;
    c1 = undefined;
    [tmp2, tmp3, tmp4] = items;
    function pnpm_useAnimatedRefNativeTs1() {
      c0.value = value;
    }
    const items1 = [tmp3, tmp4];
    pnpm_useAnimatedRefNativeTs1.__closure = items1;
    pnpm_useAnimatedRefNativeTs1.__workletHash = 6854777085934;
    pnpm_useAnimatedRefNativeTs1.__initData = tmp2;
    _mod1708.scheduleOnUI(pnpm_useAnimatedRefNativeTs1);
    return shadowNodeWrapperFromRef;
  });
  const serializableMappingCache = first(1708).serializableMappingCache;
  if (!serializableMappingCache.get(animatedRefBase)) {
    const serializable = tmp2(1708).createSerializable(first);
    const serializableMappingCache2 = tmp2(1708).serializableMappingCache;
    const result = serializableMappingCache2.set(animatedRefBase, serializable);
    const tmp2Result = tmp2(1708);
  }
  return animatedRefBase;
}