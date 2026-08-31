// === Module 1802: useAnimatedPropsJS ===

// Module 1802 (useAnimatedPropsJS)
import checkSharedValueUsage from "checkSharedValueUsage" /* 1803 */;
import isJest from "isJest" /* 1656 */;

if (isJest.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items) {
    return checkSharedValueUsage.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = checkSharedValueUsage.useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;