// _runtime/metro/06811__.js
import jsxProd from "../react/00021_jsxProd.js";
import GESTURE_SOURCE from "../06628_GESTURE_SOURCE.js";
import _mod6632 from "06632__.js";
import _mod6812 from "06812__.js";
import noop from "00019__.js";
import get_ActivityIndicator from "00017__.js";

({ useMemo: c2, useRef: c3 } = noop);
({ StatusBar: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
const memoResult = noop.memo(function BottomSheetHostingContainerComponent(bottomInset) {
  ({ containerHeight: require, containerOffset: dependencyMap, topInset } = bottomInset);
  if (topInset === undefined) {
    topInset = 0;
  }
  let num = bottomInset.bottomInset;
  if (num === undefined) {
    num = 0;
  }
  let flag = bottomInset.shouldCalculateHeight;
  if (flag === undefined) {
    flag = true;
  }
  const detached = bottomInset.detached;
  const style = bottomInset.style;
  const tmp = num(null);
  const ref = tmp;
  let items = [style, detached, topInset, num];
  const obj = { ref: tmp, pointerEvents: "box-none", onLayout: null, style: null, collapsable: true, children: null };
  let stableCallback;
  if (flag) {
    stableCallback = obj.useStableCallback(function handleLayoutEvent(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      height.value = height;
      const current = ref.current;
      if (current != null) {
        current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
          if (value.value) {
            num = arg5;
            let num2 = arg5;
            if (arg5 == null) {
              num2 = 0;
            }
            const rect = { top: num2, left: 0, right: 0, bottom: null };
            if (num == null) {
              num = 0;
            }
            let num3 = currentHeight.currentHeight;
            const sum = num + height;
            if (num3 == null) {
              num3 = 0;
            }
            rect.bottom = Math.max(0, GESTURE_SOURCE.WINDOW_HEIGHT - (sum + num3));
            tmp.value = rect;
          }
        });
      }
    });
  }
  obj.onLayout = stableCallback;
  obj.style = topInset(() => {
    const items = [style, _mod6812.styles.container];
    const rect = { top: topInset, bottom: num, overflow: null };
    let str = "hidden";
    if (detached) {
      str = "visible";
    }
    rect.overflow = str;
    items[2] = rect;
    return items;
  }, items);
  obj.children = bottomInset.children;
  return ref(style, obj);
});
memoResult.displayName = "BottomSheetHostingContainer";

export const BottomSheetHostingContainer = memoResult;
