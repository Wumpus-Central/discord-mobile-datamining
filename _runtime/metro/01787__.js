// _runtime/metro/01787__.js
import _mod1788 from "01788__.js";
import 01641__ from "01641__.js";

if (module_1641.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1788.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1788.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;