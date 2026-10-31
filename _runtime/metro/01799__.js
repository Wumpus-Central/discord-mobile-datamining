// _runtime/metro/01799__.js
import _mod1800 from "01800__.js";
import 01653__ from "01653__.js";

if (module_1653.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1800.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1800.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;