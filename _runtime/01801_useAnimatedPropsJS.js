// _runtime/01801_useAnimatedPropsJS.js
import checkSharedValueUsage from "01802_checkSharedValueUsage.js";
import isJest from "01655_isJest.js";

if (isJest.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items) {
    return checkSharedValueUsage.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = checkSharedValueUsage.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
