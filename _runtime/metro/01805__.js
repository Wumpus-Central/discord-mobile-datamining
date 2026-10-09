// === Module 1805: ? ===

// Module 1805
import _mod1806 from "module_1806" /* 1806 */;
import module_1659 from "module_1659" /* 1659 */;

if (module_1659.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1806.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1806.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;