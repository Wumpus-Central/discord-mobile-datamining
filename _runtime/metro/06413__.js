// === Module 6413: ? ===

// Module 6413
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6113 */;
import react_native2 from "react-native" /* 6414 */;
import react_mod from "react" /* 19 */;

let c2;
let c3;
let closure_4;
let react = react_mod;
({ useEffect: c2, useCallback: c3, useMemo: closure_4 } = react);
const memo = react.memo;
react = react_mod;
const View = react_native.View;
const jsx = Fragment.jsx;
const memoResult = memo(function BottomSheetViewComponent(focusHook) {
  let animatedScrollableType;
  let children;
  let style;
  focusHook = focusHook.focusHook;
  if (focusHook === undefined) {
    focusHook = animatedScrollableType;
  }
  let flag = focusHook.enableFooterMarginAdjustment;
  if (flag === undefined) {
    flag = false;
  }
  const onLayout = focusHook.onLayout;
  ({ style, children } = focusHook);
  const merged = Object.assign(focusHook, Object.assign({ focusHook: 0, enableFooterMarginAdjustment: 0, onLayout: 0, style: 0, children: 0 }));
  let animatedScrollableContentOffsetY;
  const obj = onLayout(animatedScrollableContentOffsetY[3]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  animatedScrollableType = bottomSheetInternal.animatedScrollableType;
  const enableDynamicSizing = bottomSheetInternal.enableDynamicSizing;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  const obj2 = onLayout(animatedScrollableContentOffsetY[3]);
  const bottomSheetContentContainerStyle = obj2.useBottomSheetContentContainerStyle(flag, style);
  let items = [bottomSheetContentContainerStyle];
  const items1 = [animatedScrollableContentOffsetY, animatedScrollableType];
  const tmp4 = animatedContentHeight(() => {
    const items = [bottomSheetContentContainerStyle, react_native2.styles.container];
    return items;
  }, items);
  const items2 = [onLayout, animatedContentHeight, enableDynamicSizing];
  const tmp5 = enableDynamicSizing(() => {
    animatedScrollableContentOffsetY.value = 0;
    animatedScrollableType.value = GESTURE_SOURCE.SCROLLABLE_TYPE.VIEW;
  }, items1);
  const tmp6 = enableDynamicSizing((nativeEvent) => {
    if (enableDynamicSizing) {
      const result = animatedContentHeight.set(nativeEvent.nativeEvent.layout.height);
    }
    if (onLayout) {
      tmp4(nativeEvent);
    }
  }, items2);
  focusHook(tmp5);
  const merged1 = Object.assign(merged);
  return <bottomSheetContentContainerStyle onLayout={tmp6} style={tmp4}>{children}</bottomSheetContentContainerStyle>;
});
memoResult.displayName = "BottomSheetView";

export default memoResult;