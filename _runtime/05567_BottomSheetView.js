// _runtime/05567_BottomSheetView.js
import noop from "noop";
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

let c3;
let c4;
let obj1;
({ useEffect: obj1, useCallback: c3, useMemo: c4 } = noop);
const memoResult = noop.memo(function BottomSheetViewComponent(focusHook) {
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