// === Module 1785: ? ===

// Module 1785
import _mod1786 from "module_1786" /* 1786 */;
import module_1639 from "module_1639" /* 1639 */;

if (module_1639.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1786.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1786.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;