// _runtime/01785_useAnimatedPropsJS.js
import checkSharedValueUsage from "01786_checkSharedValueUsage.js";
import isJest from "01639_isJest.js";

if (isJest.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items) {
    return checkSharedValueUsage.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = checkSharedValueUsage.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
