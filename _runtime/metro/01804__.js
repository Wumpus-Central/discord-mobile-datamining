// === Module 1804: ? ===

// Module 1804
import _mod1805 from "module_1805" /* 1805 */;
import module_1658 from "module_1658" /* 1658 */;

if (module_1658.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1805.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1805.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;