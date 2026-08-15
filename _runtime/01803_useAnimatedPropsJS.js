// _runtime/01803_useAnimatedPropsJS.js
import isJest from "isJest";
import { checkSharedValueUsage } from "01804_checkSharedValueUsage.js";

if (isJest.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items) {
    return checkSharedValueUsage.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = require("checkSharedValueUsage").useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;