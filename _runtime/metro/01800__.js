// === Module 1800: ? ===

// Module 1800
import _mod1801 from "module_1801" /* 1801 */;
import module_1654 from "module_1654" /* 1654 */;

if (module_1654.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1801.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1801.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;