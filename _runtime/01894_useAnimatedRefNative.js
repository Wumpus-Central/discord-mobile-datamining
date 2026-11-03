// _runtime/01894_useAnimatedRefNative.js
import _mod1703 from "metro/01703__.js";
import _mod1705 from "metro/01705__.js";
import _slicedToArray from "metro/00032__.js";

require = fn;
const useState = fn(19).useState;
let closure_4 = {
  code: "(function pnpm_useAnimatedRefNativeTs1(){let[sharedWrapper,currentWrapper]=this.__closure;sharedWrapper.value=currentWrapper;})",
};

export function useAnimatedRef() {
  const first = _slicedToArray(
    useState(() => first(1705).createShareable(first(1705).UIRuntimeId, null)),
    1,
  )[0];
  const animatedRefBase = first(1895).useAnimatedRefBase((__internalInstanceHandle) => {
    const shadowNodeWrapperFromRef = _mod1703.getShadowNodeWrapperFromRef(__internalInstanceHandle);
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
    _mod1705.scheduleOnUI(pnpm_useAnimatedRefNativeTs1);
    return shadowNodeWrapperFromRef;
  });
  const serializableMappingCache = first(1705).serializableMappingCache;
  if (!serializableMappingCache.get(animatedRefBase)) {
    const serializable = tmp2(1705).createSerializable(first);
    const serializableMappingCache2 = tmp2(1705).serializableMappingCache;
    const result = serializableMappingCache2.set(animatedRefBase, serializable);
    const tmp2Result = tmp2(1705);
  }
  return animatedRefBase;
}
