// _runtime/05893_BottomSheetView.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import noopDefault from "00019_noop.js";
import jsxProd from "react/00021_jsxProd.js";
import noop from "00019_noop.js";

({ useEffect: obj1, useCallback: c3, useMemo: c4 } = noop);
noopDefault;
const View = get_ActivityIndicator.View;
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
  const merged = Object.assign(focusHook, Object.create(null));
  let animatedScrollableContentOffsetY;
  animatedScrollableType = undefined;
  let enableDynamicSizing;
  let animatedContentHeight;
  let bottomSheetContentContainerStyle;
  let obj = onLayout(animatedScrollableContentOffsetY[3]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  animatedScrollableType = bottomSheetInternal.animatedScrollableType;
  enableDynamicSizing = bottomSheetInternal.enableDynamicSizing;
  animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  bottomSheetContentContainerStyle = onLayout(animatedScrollableContentOffsetY[3]).useBottomSheetContentContainerStyle(flag, style);
  let items = [bottomSheetContentContainerStyle];
  const items1 = [animatedScrollableContentOffsetY, animatedScrollableType];
  const obj2 = onLayout(animatedScrollableContentOffsetY[3]);
  const items2 = [onLayout, animatedContentHeight, enableDynamicSizing];
  const tmp4 = animatedContentHeight(() => {
    const items = [bottomSheetContentContainerStyle, onLayout(animatedScrollableContentOffsetY[4]).styles.container];
    return items;
  }, items);
  const tmp5 = enableDynamicSizing(() => {
    animatedScrollableContentOffsetY.value = 0;
    animatedScrollableType.value = onLayout(animatedScrollableContentOffsetY[5]).SCROLLABLE_TYPE.VIEW;
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