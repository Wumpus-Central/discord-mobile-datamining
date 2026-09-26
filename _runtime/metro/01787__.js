// === Module 1787: ? ===

// Module 1787
import _mod1788 from "module_1788" /* 1788 */;
import module_1641 from "module_1641" /* 1641 */;

if (module_1641.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1788.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1788.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;