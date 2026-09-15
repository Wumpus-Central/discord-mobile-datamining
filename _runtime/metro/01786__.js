// === Module 1786: ? ===

// Module 1786
import _mod1787 from "module_1787" /* 1787 */;
import module_1640 from "module_1640" /* 1640 */;

if (module_1640.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1787.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1787.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;