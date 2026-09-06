// === Module 6821: ? ===

// Module 6821
import jsxProd from "jsxProd" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import noop from "module_19" /* 19 */;

({ useMemo: c3, memo } = noop);
const jsx = jsxProd.jsx;
const memoResult = memo((nativeGestureRef) => {
  nativeGestureRef = nativeGestureRef.nativeGestureRef;
  const refreshControlGestureRef = nativeGestureRef.refreshControlGestureRef;
  ({ style, children } = nativeGestureRef);
  const merged = Object.assign(nativeGestureRef, Object.assign({ nativeGestureRef: 0, refreshControlGestureRef: 0, style: 0, children: 0 }));
  let enableContentPanningGesture;
  let obj = nativeGestureRef(enableContentPanningGesture[2]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  enableContentPanningGesture = bottomSheetInternal.enableContentPanningGesture;
  const simultaneousHandlers = bottomSheetInternal.simultaneousHandlers;
  const waitFor = bottomSheetInternal.waitFor;
  const activeOffsetX = bottomSheetInternal.activeOffsetX;
  const activeOffsetY = bottomSheetInternal.activeOffsetY;
  const failOffsetX = bottomSheetInternal.failOffsetX;
  const failOffsetY = bottomSheetInternal.failOffsetY;
  let obj1 = nativeGestureRef(enableContentPanningGesture[2]);
  const contentPanGestureHandler = obj1.useBottomSheetGestureHandlers().contentPanGestureHandler;
  let items = [simultaneousHandlers, nativeGestureRef, refreshControlGestureRef];
  const tmp3 = simultaneousHandlers(() => {
    const items = [];
    if (nativeGestureRef) {
      items.push(tmp);
    }
    if (refreshControlGestureRef) {
      items.push(tmp3);
    }
    if (simultaneousHandlers) {
      const _Array = Array;
      const push = items.push;
      if (Array.isArray(simultaneousHandlers)) {
        const items1 = [];
        HermesBuiltin.arraySpread(simultaneousHandlers, 0);
        HermesBuiltin.apply(items1, items);
      } else {
        push(simultaneousHandlers);
      }
    }
    return items;
  }, items);
  closure_10 = tmp3;
  let items1 = [activeOffsetX, activeOffsetY, enableContentPanningGesture, failOffsetX, failOffsetY, tmp3, waitFor, , , , ];
  ({ handleOnChange: arr2[7], handleOnEnd: arr2[8], handleOnFinalize: arr2[9], handleOnStart: arr2[10] } = contentPanGestureHandler);
  const tmp4 = simultaneousHandlers(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const result = Gesture.Pan().enabled(enableContentPanningGesture).shouldCancelWhenOutside(false);
    const enabledResult = Gesture.Pan().enabled(enableContentPanningGesture);
    const runOnJSResult = result.runOnJS(false);
    const onStartResult = result.runOnJS(false).onStart(contentPanGestureHandler.handleOnStart);
    const onChangeResult = result.runOnJS(false).onStart(contentPanGestureHandler.handleOnStart).onChange(contentPanGestureHandler.handleOnChange);
    const onFinalizeResult = result.runOnJS(false).onStart(contentPanGestureHandler.handleOnStart).onChange(contentPanGestureHandler.handleOnChange).onEnd(contentPanGestureHandler.handleOnEnd).onFinalize(contentPanGestureHandler.handleOnFinalize);
    let result1 = onFinalizeResult;
    if (waitFor) {
      result1 = onFinalizeResult.requireExternalGestureToFail(tmp);
    }
    let result2 = result1;
    if (closure_10) {
      result2 = result1.simultaneousWithExternalGesture(tmp2);
    }
    let activeOffsetXResult = result2;
    if (activeOffsetX) {
      activeOffsetXResult = result2.activeOffsetX(tmp3);
    }
    let activeOffsetYResult = activeOffsetXResult;
    if (activeOffsetY) {
      activeOffsetYResult = activeOffsetXResult.activeOffsetY(tmp4);
    }
    let failOffsetXResult = activeOffsetYResult;
    if (failOffsetX) {
      failOffsetXResult = activeOffsetYResult.failOffsetX(tmp5);
    }
    let failOffsetYResult = failOffsetXResult;
    if (failOffsetY) {
      failOffsetYResult = failOffsetXResult.failOffsetY(tmp6);
    }
    return failOffsetYResult;
  }, items1);
  obj = { gesture: tmp4, children: null };
  obj = { value: tmp4, children: null };
  obj1 = { style };
  const merged1 = Object.assign(merged);
  obj1.children = children;
  obj.children = waitFor(refreshControlGestureRef(enableContentPanningGesture[5]).View, obj1);
  obj.children = waitFor(nativeGestureRef(enableContentPanningGesture[4]).BottomSheetDraggableContext.Provider, obj);
  return waitFor(nativeGestureRef(enableContentPanningGesture[3]).GestureDetector, obj);
});
memoResult.displayName = "BottomSheetDraggableView";

export default memoResult;