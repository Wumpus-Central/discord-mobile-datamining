// _runtime/06995_BottomSheetHostingContainer.js
import noopDefault from "00019_noop.js";
import jsxProd from "react/00021_jsxProd.js";
import GESTURE_SOURCE from "06953_GESTURE_SOURCE.js";
import useBottomSheet from "06957_useBottomSheet.js";
import styles from "06996_styles.js";
import noop from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

({ useMemo: obj1, useRef: c3 } = noop);
noopDefault;
({ StatusBar: c4, View: c5 } = get_ActivityIndicator);
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
  closure_6 = tmp;
  let items = [style, detached, topInset, num];
  let obj = { ref: tmp, pointerEvents: "box-none", onLayout: null, style: null, collapsable: true, children: null };
  let stableCallback;
  if (flag) {
    stableCallback = obj.useStableCallback(function handleLayoutEvent(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      height.value = height;
      const current = ref.current;
      if (current != null) {
        current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
          if (closure_1_1.value) {
            num = arg5;
            let num2 = arg5;
            if (arg5 == null) {
              num2 = 0;
            }
            const obj = { top: null, left: 0, right: 0, bottom: null };
            obj[0] = num2;
            if (num == null) {
              num = 0;
            }
            let num3 = detached.currentHeight;
            const sum = num + height;
            if (num3 == null) {
              num3 = 0;
            }
            obj[3] = Math.max(0, GESTURE_SOURCE.WINDOW_HEIGHT - (sum + num3));
            tmp.value = obj;
          }
        });
      }
    });
  }
  obj[2] = stableCallback;
  obj[3] = topInset(() => {
    const items = [style, styles.styles.container, ];
    const obj = { top: topInset, bottom: num, overflow: null };
    let str = "hidden";
    if (detached) {
      str = "visible";
    }
    obj[2] = str;
    items[2] = obj;
    return items;
  }, items);
  obj[5] = bottomInset.children;
  return closure_6(style, obj);
});
memoResult.displayName = "BottomSheetHostingContainer";

export const BottomSheetHostingContainer = memoResult;