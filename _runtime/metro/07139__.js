// _runtime/metro/07139__.js
import jsxProd from "../react/00021_jsxProd.js";
import value2 from "../06956_value2.js";
import _mod7140 from "07140__.js";
import noop_mod from "00019__.js";
import get_ActivityIndicator from "00017__.js";

let noop = noop_mod;
({ useMemo: c2, useRef: c3 } = noop);
let noop = noop_mod;
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
  const tmp2 = topInset(() => {
    const items = [style, _mod7140.styles.container];
    const rect = { top: topInset, bottom: num, overflow: null };
    let str = "hidden";
    if (detached) {
      str = "visible";
    }
    rect.overflow = str;
    items[2] = rect;
    return items;
  }, items);
  const obj2 = { ref: tmp, pointerEvents: "box-none", onLayout: null, style: null, collapsable: true, children: null };
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
            rect.bottom = Math.max(0, value2.WINDOW_HEIGHT - (sum + num3));
            tmp.value = rect;
          }
        });
      }
    });
  }
  obj2.onLayout = stableCallback;
  obj2.style = tmp2;
  obj2.children = bottomInset.children;
  return ref(style, obj2);
});
memoResult.displayName = "BottomSheetHostingContainer";

export const BottomSheetHostingContainer = memoResult;
