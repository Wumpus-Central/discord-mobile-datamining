// === Module 7121: ? ===

// Module 7121
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import value2 from "value2" /* 6821 */;
import _mod7122 from "module_7122" /* 7122 */;
import noop_mod from "module_19" /* 19 */;

let noop = noop_mod;
({ useEffect: c2, useCallback: c3, useMemo: closure_4 } = noop);
let noop = noop_mod;
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
  const merged = Object.assign(focusHook, Object.assign({ focusHook: 0, enableFooterMarginAdjustment: 0, onLayout: 0, style: 0, children: 0 }));
  let animatedScrollableContentOffsetY;
  const bottomSheetInternal = onLayout(animatedScrollableContentOffsetY[3]).useBottomSheetInternal();
  animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  animatedScrollableType = bottomSheetInternal.animatedScrollableType;
  const enableDynamicSizing = bottomSheetInternal.enableDynamicSizing;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  const obj = onLayout(animatedScrollableContentOffsetY[3]);
  const bottomSheetContentContainerStyle = onLayout(animatedScrollableContentOffsetY[3]).useBottomSheetContentContainerStyle(flag, style);
  let items = [bottomSheetContentContainerStyle];
  const items1 = [animatedScrollableContentOffsetY, animatedScrollableType];
  const obj2 = onLayout(animatedScrollableContentOffsetY[3]);
  const items2 = [onLayout, animatedContentHeight, enableDynamicSizing];
  const tmp4 = animatedContentHeight(() => {
    const items = [bottomSheetContentContainerStyle, _mod7122.styles.container];
    return items;
  }, items);
  const tmp5 = enableDynamicSizing(() => {
    animatedScrollableContentOffsetY.value = 0;
    animatedScrollableType.value = value2.SCROLLABLE_TYPE.VIEW;
  }, items1);
  focusHook(tmp5);
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.onLayout = enableDynamicSizing((nativeEvent) => {
    if (enableDynamicSizing) {
      const result = animatedContentHeight.set(nativeEvent.nativeEvent.layout.height);
    }
    if (onLayout) {
      tmp3(nativeEvent);
    }
  }, items2);
  obj3.style = tmp4;
  obj3.children = children;
  return <bottomSheetContentContainerStyle />;
});
memoResult.displayName = "BottomSheetView";

export default memoResult;