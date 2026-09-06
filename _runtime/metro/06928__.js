// _runtime/metro/06928__.js
import _mod17 from "00017__.js";
import jsxProd from "../react/00021_jsxProd.js";
import GESTURE_SOURCE from "../06628_GESTURE_SOURCE.js";
import _mod6929 from "06929__.js";
import noop from "00019__.js";

({ useEffect: c2, useCallback: c3, useMemo: closure_4 } = noop);
const View = _mod17.View;
const jsx = jsxProd.jsx;
const memoResult = noop.memo(function BottomSheetViewComponent(focusHook) {
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
  let obj = onLayout(animatedScrollableContentOffsetY[3]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  animatedScrollableType = bottomSheetInternal.animatedScrollableType;
  const enableDynamicSizing = bottomSheetInternal.enableDynamicSizing;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  const bottomSheetContentContainerStyle = onLayout(
    animatedScrollableContentOffsetY[3],
  ).useBottomSheetContentContainerStyle(flag, style);
  let items = [bottomSheetContentContainerStyle];
  const items1 = [animatedScrollableContentOffsetY, animatedScrollableType];
  const obj2 = onLayout(animatedScrollableContentOffsetY[3]);
  const items2 = [onLayout, animatedContentHeight, enableDynamicSizing];
  const tmp4 = animatedContentHeight(() => {
    const items = [bottomSheetContentContainerStyle, _mod6929.styles.container];
    return items;
  }, items);
  const tmp5 = enableDynamicSizing(() => {
    animatedScrollableContentOffsetY.value = 0;
    animatedScrollableType.value = GESTURE_SOURCE.SCROLLABLE_TYPE.VIEW;
  }, items1);
  focusHook(tmp5);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.onLayout = enableDynamicSizing((nativeEvent) => {
    if (enableDynamicSizing) {
      const result = animatedContentHeight.set(nativeEvent.nativeEvent.layout.height);
    }
    if (onLayout) {
      tmp3(nativeEvent);
    }
  }, items2);
  obj.style = tmp4;
  obj.children = children;
  return <bottomSheetContentContainerStyle />;
});
memoResult.displayName = "BottomSheetView";

export default memoResult;
