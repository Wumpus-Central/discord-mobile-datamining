// _runtime/metro/06306__.js
import Fragment from "../react/00021_Fragment.js";
import LegacyBaseButton from "../06140_LegacyBaseButton.js";
import react_mod from "../00019_react.js";

let nativeGestureRef;

let c3;
let memo;
let react = react_mod;
({ useMemo: c3, memo } = react);
react = react_mod;
const jsx = Fragment.jsx;
const memoResult = memo((nativeGestureRef) => {
  let Provider;
  let View;
  let children;
  let obj4;
  let obj5;
  let style;
  nativeGestureRef = nativeGestureRef.nativeGestureRef;
  const refreshControlGestureRef = nativeGestureRef.refreshControlGestureRef;
  ({ style, children } = nativeGestureRef);
  const merged = Object.assign(
    nativeGestureRef,
    Object.assign({ nativeGestureRef: 0, refreshControlGestureRef: 0, style: 0, children: 0 }),
  );
  let enableContentPanningGesture;
  const obj = nativeGestureRef(enableContentPanningGesture[2]);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  enableContentPanningGesture = bottomSheetInternal.enableContentPanningGesture;
  const simultaneousHandlers = bottomSheetInternal.simultaneousHandlers;
  const waitFor = bottomSheetInternal.waitFor;
  const activeOffsetX = bottomSheetInternal.activeOffsetX;
  const activeOffsetY = bottomSheetInternal.activeOffsetY;
  const failOffsetX = bottomSheetInternal.failOffsetX;
  const failOffsetY = bottomSheetInternal.failOffsetY;
  const obj2 = nativeGestureRef(enableContentPanningGesture[2]);
  const contentPanGestureHandler = obj2.useBottomSheetGestureHandlers().contentPanGestureHandler;
  let items = [simultaneousHandlers, nativeGestureRef, refreshControlGestureRef];
  const tmp3 = simultaneousHandlers(() => {
    const items = [];
    if (nativeGestureRef) {
      items.push(tmp2);
    }
    if (refreshControlGestureRef) {
      items.push(tmp4);
    }
    if (simultaneousHandlers) {
      const _Array = Array;
      const push = items.push;
      if (Array.isArray(simultaneousHandlers)) {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, simultaneousHandlers, 0);
        HermesBuiltin.apply(push, items1, items);
      } else {
        push(simultaneousHandlers);
      }
    }
    return items;
  }, items);
  let closure_10 = tmp3;
  let items1 = [
    activeOffsetX,
    activeOffsetY,
    enableContentPanningGesture,
    failOffsetX,
    failOffsetY,
    tmp3,
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
  } = contentPanGestureHandler);
  const tmp4 = simultaneousHandlers(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const enabledResult = PanResult.enabled(enableContentPanningGesture);
    const result = enabledResult.shouldCancelWhenOutside(false);
    const runOnJSResult = result.runOnJS(false);
    const onStartResult = runOnJSResult.onStart(contentPanGestureHandler.handleOnStart);
    const onChangeResult = onStartResult.onChange(contentPanGestureHandler.handleOnChange);
    const onEndResult = onChangeResult.onEnd(contentPanGestureHandler.handleOnEnd);
    const onFinalizeResult = onEndResult.onFinalize(contentPanGestureHandler.handleOnFinalize);
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
  const obj3 = { gesture: tmp4, children: waitFor(Provider, obj4) };
  const GestureDetector = nativeGestureRef(enableContentPanningGesture[3]).GestureDetector;
  obj4 = { value: tmp4, children: waitFor(View, obj5) };
  Provider = nativeGestureRef(enableContentPanningGesture[4]).BottomSheetDraggableContext.Provider;
  obj5 = { style, children };
  View = refreshControlGestureRef(enableContentPanningGesture[5]).View;
  const merged1 = Object.assign(merged);
  return waitFor(GestureDetector, obj3);
});
memoResult.displayName = "BottomSheetDraggableView";

export default memoResult;
