// === Module 6811: ? ===

// Module 6811
import jsxProd from "jsxProd" /* 21 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6628 */;
import _mod6632 from "module_6632" /* 6632 */;
import _mod6812 from "module_6812" /* 6812 */;
import noop from "module_19" /* 19 */;
import get_ActivityIndicator from "module_17" /* 17 */;

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
    const items = [style, _mod6812.styles.container, ];
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