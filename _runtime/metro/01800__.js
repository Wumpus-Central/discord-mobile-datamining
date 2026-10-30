// _runtime/metro/01800__.js
import _mod1801 from "01801__.js";
import 01654__ from "01654__.js";

if (module_1654.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1801.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1801.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;