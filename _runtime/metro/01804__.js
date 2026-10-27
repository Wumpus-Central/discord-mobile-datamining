// _runtime/metro/01804__.js
import _mod1805 from "01805__.js";
import 01658__ from "01658__.js";

if (module_1658.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items, arg2) {
    return _mod1805.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = _mod1805.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;