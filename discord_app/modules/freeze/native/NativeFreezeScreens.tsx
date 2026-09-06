// discord_app/modules/freeze/native/NativeFreezeScreens.tsx
import enableScreens from "../../../../_runtime/04912_enableScreens.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ screens: { flex: 1, overflow: "hidden" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/freeze/native/NativeFreezeScreens.tsx");

export const NativeFreezeScreens = function NativeFreezeScreens(detachInactiveScreens) {
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
  const tmp = closure_7();
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
  const obj = {
    enabled: flag,
    hasTwoStates: true,
    style: tmp.screens,
    nativeID: "native-freeze-screens-container",
    children: null,
  };
  let arr4 = children;
  if (!Array.isArray(children)) {
    const items2 = [children];
    arr4 = items2;
  }
  obj.children = arr4.map((children, index) => {
    if (flag3) {
      if (!tmp) {
        return null;
      }
    }
    if (flag2) {
      if (!first.includes(index)) {
        if (!tmp) {
          if (!preloadIndices.includes(index)) {
            return null;
          }
        }
      }
    }
    let num = 0;
    if (activeIndex === index) {
      num = 2;
    }
    const items = [StyleSheet.absoluteFill];
    let num2 = -1;
    if (activeIndex === index) {
      num2 = 0;
    }
    items[1] = { zIndex: num2 };
    return jsx(
      enableScreens.Screen,
      { style: items, activityState: num, enabled: flag, freezeOnBlur: flag4, children },
      index,
    );
  });
  return first(activeIndex(tmp2[5]).ScreenContainer, obj);
};
