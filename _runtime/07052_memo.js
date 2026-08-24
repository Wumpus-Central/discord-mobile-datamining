// _runtime/07052_memo.js
import noopDefault from "00019_noop.js";
import jsxProd from "react/00021_jsxProd.js";
import noop from "00019_noop.js";

({ useCallback: c3, useMemo: c4, useRef: c5, memo } = noop);
noopDefault;
const jsx = jsxProd.jsx;
const memoResult = memo(function BottomSheetHandleContainerComponent(simultaneousHandlers) {
  simultaneousHandlers = simultaneousHandlers.simultaneousHandlers;
  let DEFAULT_ENABLE_HANDLE_PANNING_GESTURE = simultaneousHandlers.enableHandlePanningGesture;
  ({ animatedIndex, animatedPosition } = simultaneousHandlers);
  if (DEFAULT_ENABLE_HANDLE_PANNING_GESTURE === undefined) {
    DEFAULT_ENABLE_HANDLE_PANNING_GESTURE = simultaneousHandlers(handleHeight[2]).DEFAULT_ENABLE_HANDLE_PANNING_GESTURE;
  }
  handleHeight = simultaneousHandlers.handleHeight;
  let handleComponent = simultaneousHandlers.handleComponent;
  let activeOffsetX;
  let activeOffsetY;
  let failOffsetX;
  let failOffsetY;
  let waitFor;
  let simultaneousHandlers2;
  let handlePanGestureHandler;
  closure_10 = undefined;
  ({ handleStyle, handleIndicatorStyle } = simultaneousHandlers);
  const tmp3 = failOffsetX(null);
  let obj = simultaneousHandlers(handleHeight[3]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  activeOffsetX = bottomSheetInternal.activeOffsetX;
  activeOffsetY = bottomSheetInternal.activeOffsetY;
  failOffsetX = bottomSheetInternal.failOffsetX;
  failOffsetY = bottomSheetInternal.failOffsetY;
  waitFor = bottomSheetInternal.waitFor;
  simultaneousHandlers2 = bottomSheetInternal.simultaneousHandlers;
  handlePanGestureHandler = simultaneousHandlers(handleHeight[3]).useBottomSheetGestureHandlers().handlePanGestureHandler;
  let items = [simultaneousHandlers2, simultaneousHandlers];
  const tmp7 = activeOffsetY(() => {
    const items = [];
    if (simultaneousHandlers) {
      items.push(tmp);
    }
    if (simultaneousHandlers2) {
      const _Array = Array;
      const push = items.push;
      if (Array.isArray(tmp3)) {
        const items1 = [];
        HermesBuiltin.arraySpread(tmp3, 0);
        HermesBuiltin.apply(items1, items);
      } else {
        push(tmp3);
      }
    }
    return items;
  }, items);
  closure_10 = tmp7;
  let items1 = [activeOffsetX, activeOffsetY, DEFAULT_ENABLE_HANDLE_PANNING_GESTURE, failOffsetX, failOffsetY, tmp7, waitFor, , , , ];
  ({ handleOnChange: arr2[7], handleOnEnd: arr2[8], handleOnFinalize: arr2[9], handleOnStart: arr2[10] } = handlePanGestureHandler);
  const items2 = [handleHeight];
  const obj2 = simultaneousHandlers(handleHeight[3]);
  const tmp4 = simultaneousHandlers;
  const items3 = [handleHeight];
  const tmp8 = activeOffsetY(() => {
    const Gesture = simultaneousHandlers(handleHeight[4]).Gesture;
    const PanResult = Gesture.Pan();
    const result = Gesture.Pan().enabled(DEFAULT_ENABLE_HANDLE_PANNING_GESTURE).shouldCancelWhenOutside(false);
    const enabledResult = Gesture.Pan().enabled(DEFAULT_ENABLE_HANDLE_PANNING_GESTURE);
    const runOnJSResult = result.runOnJS(false);
    const onStartResult = result.runOnJS(false).onStart(handlePanGestureHandler.handleOnStart);
    const onChangeResult = result.runOnJS(false).onStart(handlePanGestureHandler.handleOnStart).onChange(handlePanGestureHandler.handleOnChange);
    const onFinalizeResult = result.runOnJS(false).onStart(handlePanGestureHandler.handleOnStart).onChange(handlePanGestureHandler.handleOnChange).onEnd(handlePanGestureHandler.handleOnEnd).onFinalize(handlePanGestureHandler.handleOnFinalize);
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
  const tmp9 = activeOffsetX(function handleContainerLayout(nativeEvent) {
    handleHeight.value = nativeEvent.nativeEvent.layout.height;
  }, items2);
  const tmp10 = activeOffsetX((height) => {
    handleHeight.value = height.height;
  }, items3);
  const boundingClientRect = simultaneousHandlers(handleHeight[3]).useBoundingClientRect(tmp3, tmp10);
  if (handleComponent == null) {
    handleComponent = DEFAULT_ENABLE_HANDLE_PANNING_GESTURE(tmp5[5]);
  }
  obj = { gesture: tmp8, children: null };
  obj = { ref: tmp3, onLayout: tmp9, children: failOffsetY(handleComponent, { animatedIndex, animatedPosition, style: handleStyle, indicatorStyle: handleIndicatorStyle }) };
  obj[1] = failOffsetY(DEFAULT_ENABLE_HANDLE_PANNING_GESTURE(handleHeight[6]).View, obj, "BottomSheetHandleContainer");
  return failOffsetY(tmp4(handleHeight[4]).GestureDetector, obj);
});
memoResult.displayName = "BottomSheetHandleContainer";

export default memoResult;