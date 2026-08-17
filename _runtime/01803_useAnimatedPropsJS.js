// _runtime/01803_useAnimatedPropsJS.js
import checkSharedValueUsage from "01804_checkSharedValueUsage.js";
import isJest from "01657_isJest.js";

if (isJest.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items) {
    return checkSharedValueUsage.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = checkSharedValueUsage.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;