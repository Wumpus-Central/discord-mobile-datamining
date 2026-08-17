// _runtime/01803_useAnimatedPropsJS.js
import checkSharedValueUsage from "checkSharedValueUsage" /* 1804 */;
import isJest from "isJest" /* 1657 */;

if (isJest.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items) {
    return checkSharedValueUsage.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = checkSharedValueUsage.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;