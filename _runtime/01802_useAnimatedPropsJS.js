// _runtime/01802_useAnimatedPropsJS.js
import isJest from "isJest";
import { checkSharedValueUsage } from "01803_checkSharedValueUsage.js";

if (isJest.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items) {
    return checkSharedValueUsage.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = require("checkSharedValueUsage").useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;