// _runtime/metro/06296__.js
import Fragment from "../react/00021_Fragment.js";
import GESTURE_SOURCE from "../06113_GESTURE_SOURCE.js";
import _mod6117 from "06117__.js";
import react_native from "../06297_react-native.js";
import react_mod from "../00019_react.js";
import react_native2 from "../00017_react-native.js";

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let react = react_mod;
({ useMemo: c2, useRef: c3 } = react);
const memo = react.memo;
react = react_mod;
({ StatusBar: closure_4, View: hasOwnProperty } = react_native2);
const jsx = Fragment.jsx;
const memoResult = memo(function BottomSheetHostingContainerComponent(bottomInset) {
  let stableCallback;
  let topInset;
  let value;
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
  const children = bottomInset.children;
  const tmp = num(null);
  const ref = tmp;
  let items = [style, detached, topInset, num];
  const obj2 = {
    ref: tmp,
    pointerEvents: "box-none",
    onLayout: stableCallback,
    style: topInset(() => {
      let str;
      const items = [style, react_native.styles.container];
      const rect = { top: topInset, bottom: num, overflow: str };
      str = "hidden";
      if (detached) {
        str = "visible";
      }
      items[2] = rect;
      return items;
    }, items),
    collapsable: true,
    children,
  };
  stableCallback = undefined;
  const obj = _mod6117;
  const tmp3 = ref;
  const tmp4 = style;
  if (flag) {
    stableCallback = obj.useStableCallback(function handleLayoutEvent(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      height.value = height;
      const current = ref.current;
      if (current != null) {
        current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
          let WINDOW_HEIGHT;
          let max;
          let num3;
          let sum;
          if (dependencyMap.value) {
            num = arg5;
            let num2 = arg5;
            if (arg5 == null) {
              num2 = 0;
            }
            const rect = { top: num2, left: 0, right: 0, bottom: max(0, WINDOW_HEIGHT - (sum + num3)) };
            const _Math = Math;
            max = Math.max;
            WINDOW_HEIGHT = GESTURE_SOURCE.WINDOW_HEIGHT;
            if (num == null) {
              num = 0;
            }
            num3 = currentHeight.currentHeight;
            sum = num + height;
            if (num3 == null) {
              num3 = 0;
            }
            tmp.value = rect;
          }
        });
      }
    });
  }
  return tmp3(tmp4, obj2);
});
memoResult.displayName = "BottomSheetHostingContainer";

export const BottomSheetHostingContainer = memoResult;
