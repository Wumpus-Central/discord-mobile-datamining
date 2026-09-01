// _runtime/01802_useAnimatedPropsJS.js
import checkSharedValueUsage from "01803_checkSharedValueUsage.js";
import isJest from "01656_isJest.js";

if (isJest.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items) {
    return checkSharedValueUsage.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = checkSharedValueUsage.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;
