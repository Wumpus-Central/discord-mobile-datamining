// _runtime/metro/01807__.js
import _mod1808 from "01808__.js";
import 01661__ from "01661__.js";

if (module_1661.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1808.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1808.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;