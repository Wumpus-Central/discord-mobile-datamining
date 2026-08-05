// _runtime/01755_useAnimatedPropsJS.js
import isJest from "isJest";
import { checkSharedValueUsage } from "01756_checkSharedValueUsage.js";

if (isJest.shouldBeUseWeb()) {
  function useAnimatedPropsJS(fn, items) {
    return checkSharedValueUsage /* checkSharedValueUsage */.useAnimatedStyle(fn, items, arg2, true);
  }
} else {
  useAnimatedPropsJS = require("checkSharedValueUsage").useAnimatedStyle;
}

export const useAnimatedProps = useAnimatedPropsJS;