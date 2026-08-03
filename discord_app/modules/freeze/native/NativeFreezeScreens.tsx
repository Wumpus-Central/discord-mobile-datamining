// === Module 15016: NativeFreezeScreens ===

// Module 15016 (NativeFreezeScreens)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_7 = createCacheKey.createStyles({ screens: { flex: 1, overflow: "hidden" } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/freeze/native/NativeFreezeScreens.tsx");

export const NativeFreezeScreens = function NativeFreezeScreens(detachInactiveScreens) {
  let activeIndex;
  let children;
  ({ children, activeIndex } = detachInactiveScreens);
  let flag = detachInactiveScreens.detachInactiveScreens;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = detachInactiveScreens.lazy;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = detachInactiveScreens.unmountOnBlur;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = detachInactiveScreens.freezeOnBlur;
  if (flag4 === undefined) {
    flag4 = true;
  }
  let preloadIndices = detachInactiveScreens.preloadIndices;
  if (preloadIndices === undefined) {
    preloadIndices = [];
  }
  let first;
  let tmp4 = activeIndex >= 0;
  const tmp = callback();
  const tmp2 = flag2;
  if (tmp4) {
    const _Array = Array;
    let num = 1;
    if (Array.isArray(children)) {
      num = children.length;
    }
    tmp4 = activeIndex < num;
  }
  flag(flag2[4])(tmp4, "NativeFreezeScreens: invalid activeIndex");
  let items = [activeIndex];
  const tmp7 = flag3(flag4.useState(items), 2);
  first = tmp7[0];
  if (!first.includes(activeIndex)) {
    const items1 = [];
    items1[HermesBuiltin.arraySpread(first, 0)] = activeIndex;
    tmp7[1](items1);
  }
  const obj = { enabled: flag, hasTwoStates: true, style: tmp.screens, nativeID: "native-freeze-screens-container", children: null };
  let arr4 = children;
  if (!Array.isArray(children)) {
    const items2 = [children];
    arr4 = items2;
  }
  obj[4] = arr4.map((children) => {
    if (flag3) {
      if (!tmp) {
        return null;
      }
    }
    if (flag2) {
      if (!first.includes(arg1)) {
        if (!tmp) {
          if (!preloadIndices.includes(arg1)) {
            return null;
          }
        }
      }
    }
    let num = 0;
    if (activeIndex === arg1) {
      num = 2;
    }
    const items = [preloadIndices.absoluteFill, ];
    let num2 = -1;
    if (activeIndex === arg1) {
      num2 = 0;
    }
    items[1] = { zIndex: num2 };
    return first(activeIndex(flag2[5]).Screen, { style: items, activityState: num, enabled: flag, freezeOnBlur: flag4, children }, arg1);
  });
  return first(activeIndex(tmp2[5]).ScreenContainer, obj);
};