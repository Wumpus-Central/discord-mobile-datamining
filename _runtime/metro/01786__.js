// _runtime/metro/01786__.js
import _mod1787 from "01787__.js";
import 01640__ from "01640__.js";

if (module_1640.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1787.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1787.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;