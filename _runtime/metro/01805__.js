// _runtime/metro/01805__.js
import _mod1806 from "01806__.js";
import 01659__ from "01659__.js";

if (module_1659.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1806.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1806.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;