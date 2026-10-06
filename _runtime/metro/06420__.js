// _runtime/metro/06420__.js
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";
import GESTURE_SOURCE from "../06120_GESTURE_SOURCE.js";
import react_native2 from "../06421_react-native.js";
import react_mod from "../00019_react.js";

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
  const merged = Object.assign(
    focusHook,
    Object.assign({ focusHook: 0, enableFooterMarginAdjustment: 0, onLayout: 0, style: 0, children: 0 }),
  );
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
  return (
    <bottomSheetContentContainerStyle onLayout={tmp6} style={tmp4}>
      {children}
    </bottomSheetContentContainerStyle>
  );
});
memoResult.displayName = "BottomSheetView";

export default memoResult;
