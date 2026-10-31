// === Module 1799: ? ===

// Module 1799
import _mod1800 from "module_1800" /* 1800 */;
import module_1653 from "module_1653" /* 1653 */;

if (module_1653.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1800.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1800.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;