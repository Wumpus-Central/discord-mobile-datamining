// _runtime/metro/01785__.js
import _mod1786 from "01786__.js";
import 01639__ from "01639__.js";

if (module_1639.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1786.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1786.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;