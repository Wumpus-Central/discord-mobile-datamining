// _runtime/metro/01792__.js
import _mod1793 from "01793__.js";
import 01646__ from "01646__.js";

let useAnimatedPropsJS;
if (module_1646.shouldBeUseWeb()) {
  useAnimatedPropsJS = function useAnimatedPropsJS(fn, items, arg2) {
    const obj = _mod1793;
    return obj.useAnimatedStyle(fn, items, arg2, true);
  };
} else {
  useAnimatedPropsJS = _mod1793.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;