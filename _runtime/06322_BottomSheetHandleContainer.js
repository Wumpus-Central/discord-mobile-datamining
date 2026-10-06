// _runtime/06322_BottomSheetHandleContainer.js
import Fragment from "react/00021_Fragment.js";
import LegacyBaseButton from "06147_LegacyBaseButton.js";
import react_mod from "00019_react.js";

let c3;
let closure_4;
let hasOwnProperty;
let memo;
let react = react_mod;
({ useCallback: c3, useMemo: closure_4, useRef: hasOwnProperty, memo } = react);
react = react_mod;
const jsx = Fragment.jsx;
const memoResult = memo(function BottomSheetHandleContainerComponent(simultaneousHandlers) {
  let View;
  let animatedIndex;
  let animatedPosition;
  let handleHeight;
  let handleIndicatorStyle;
  let handleStyle;
  let obj5;
  simultaneousHandlers = simultaneousHandlers.simultaneousHandlers;
  let DEFAULT_ENABLE_HANDLE_PANNING_GESTURE = simultaneousHandlers.enableHandlePanningGesture;
  ({ animatedIndex, animatedPosition } = simultaneousHandlers);
  if (DEFAULT_ENABLE_HANDLE_PANNING_GESTURE === undefined) {
    const tmp = simultaneousHandlers;
    const tmp2 = handleHeight;
    DEFAULT_ENABLE_HANDLE_PANNING_GESTURE = simultaneousHandlers(handleHeight[2]).DEFAULT_ENABLE_HANDLE_PANNING_GESTURE;
  }
  handleHeight = simultaneousHandlers.handleHeight;
  let handleComponent = simultaneousHandlers.handleComponent;
  let failOffsetX;
  ({ handleStyle, handleIndicatorStyle } = simultaneousHandlers);
  const tmp3 = failOffsetX(null);
  const tmp5 = handleHeight;
  const tmp4 = simultaneousHandlers;
  const obj = simultaneousHandlers(handleHeight[3]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const activeOffsetX = bottomSheetInternal.activeOffsetX;
  const activeOffsetY = bottomSheetInternal.activeOffsetY;
  failOffsetX = bottomSheetInternal.failOffsetX;
  const failOffsetY = bottomSheetInternal.failOffsetY;
  const waitFor = bottomSheetInternal.waitFor;
  const simultaneousHandlers2 = bottomSheetInternal.simultaneousHandlers;
  const obj2 = simultaneousHandlers(handleHeight[3]);
  const handlePanGestureHandler = obj2.useBottomSheetGestureHandlers().handlePanGestureHandler;
  let items = [simultaneousHandlers2, simultaneousHandlers];
  const tmp7 = activeOffsetY(() => {
    const items = [];
    if (simultaneousHandlers) {
      items.push(tmp2);
    }
    if (simultaneousHandlers2) {
      const _Array = Array;
      const push = items.push;
      if (Array.isArray(simultaneousHandlers2)) {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, simultaneousHandlers2, 0);
        HermesBuiltin.apply(push, items1, items);
      } else {
        push(simultaneousHandlers2);
      }
    }
    return items;
  }, items);
  let closure_10 = tmp7;
  let items1 = [
    activeOffsetX,
    activeOffsetY,
    DEFAULT_ENABLE_HANDLE_PANNING_GESTURE,
    failOffsetX,
    failOffsetY,
    tmp7,
    waitFor,
    ,
    ,
    ,
  ];
  ({
    handleOnChange: arr2[7],
    handleOnEnd: arr2[8],
    handleOnFinalize: arr2[9],
    handleOnStart: arr2[10],
  } = handlePanGestureHandler);
  const items2 = [handleHeight];
  const items3 = [handleHeight];
  const tmp8 = activeOffsetY(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = PanResult.enabled(DEFAULT_ENABLE_HANDLE_PANNING_GESTURE);
    const result = enabledResult.shouldCancelWhenOutside(false);
    const runOnJSResult = result.runOnJS(false);
    const onStartResult = runOnJSResult.onStart(handlePanGestureHandler.handleOnStart);
    const onChangeResult = onStartResult.onChange(handlePanGestureHandler.handleOnChange);
    const onEndResult = onChangeResult.onEnd(handlePanGestureHandler.handleOnEnd);
    const onFinalizeResult = onEndResult.onFinalize(handlePanGestureHandler.handleOnFinalize);
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
  const obj3 = simultaneousHandlers(handleHeight[3]);
  const boundingClientRect = obj3.useBoundingClientRect(tmp3, tmp10);
  if (handleComponent == null) {
    handleComponent = DEFAULT_ENABLE_HANDLE_PANNING_GESTURE(tmp5[5]);
  }
  const obj4 = { gesture: tmp8, children: failOffsetY(View, obj5, "BottomSheetHandleContainer") };
  const GestureDetector = tmp4(tmp5[4]).GestureDetector;
  obj5 = {
    ref: tmp3,
    onLayout: tmp9,
    children: failOffsetY(handleComponent, {
      animatedIndex,
      animatedPosition,
      style: handleStyle,
      indicatorStyle: handleIndicatorStyle,
    }),
  };
  View = DEFAULT_ENABLE_HANDLE_PANNING_GESTURE(tmp5[6]).View;
  return failOffsetY(GestureDetector, obj4);
});
memoResult.displayName = "BottomSheetHandleContainer";

export default memoResult;
