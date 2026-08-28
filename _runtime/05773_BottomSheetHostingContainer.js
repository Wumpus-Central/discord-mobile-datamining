// === Module 5773: BottomSheetHostingContainer ===

// Module 5773 (BottomSheetHostingContainer)
import noopDefault from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import useBottomSheet from "useBottomSheet" /* 5594 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

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
  closure_6 = undefined;
  const tmp = num(null);
  closure_6 = tmp;
  let items = [style, detached, topInset, num];
  let obj = useBottomSheet;
  obj = { ref: tmp, pointerEvents: "box-none", onLayout: null, style: null, collapsable: true, children: null };
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
            obj[3] = Math.max(0, closure_2_0(closure_2_1[5]).WINDOW_HEIGHT - (sum + num3));
            tmp.value = obj;
          }
        });
      }
    });
  }
  obj[2] = stableCallback;
  obj[3] = topInset(() => {
    const items = [style, closure_1_0(closure_1_1[3]).styles.container, ];
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