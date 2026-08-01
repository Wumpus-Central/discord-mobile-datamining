// === Module 5374: BottomSheetHostingContainer ===

// Module 5374 (BottomSheetHostingContainer)
import noop from "noop";
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let c3;
let c4;
let c5;
let obj1;
({ useMemo: obj1, useRef: c3 } = noop);
({ StatusBar: c4, View: c5 } = get_ActivityIndicator);
const memoResult = noop.memo(function BottomSheetHostingContainerComponent(bottomInset) {
  let dependencyMap;
  let require;
  let topInset;
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
  let c6;
  const tmp = num(null);
  c6 = tmp;
  let items = [style, detached, topInset, num];
  let obj = require(5254) /* useBottomSheet */;
  obj = { ref: tmp, pointerEvents: "box-none", onLayout: null, style: null, collapsable: true, children: null };
  let stableCallback;
  if (flag) {
    stableCallback = obj.useStableCallback(function handleLayoutEvent(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      height.value = height;
      const current = _undefined.current;
      if (current != null) {
        current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
          if (outer1_1.value) {
            let num = arg5;
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
            obj[3] = Math.max(0, outer2_0(outer2_1[5]).WINDOW_HEIGHT - (sum + num3));
            tmp.value = obj;
          }
        });
      }
    });
  }
  obj[2] = stableCallback;
  obj[3] = topInset(() => {
    const items = [style, outer1_0(outer1_1[3]).styles.container, ];
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
  return c6(style, obj);
});
memoResult.displayName = "BottomSheetHostingContainer";

export const BottomSheetHostingContainer = memoResult;