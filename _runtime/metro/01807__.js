// === Module 1807: ? ===

// Module 1807
import _mod1808 from "module_1808" /* 1808 */;
import module_1661 from "module_1661" /* 1661 */;

if (module_1661.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1808.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1808.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;