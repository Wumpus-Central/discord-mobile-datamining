// === Module 1792: ? ===

// Module 1792
import _mod1793 from "module_1793" /* 1793 */;
import module_1646 from "module_1646" /* 1646 */;

if (module_1646.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1793.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1793.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;