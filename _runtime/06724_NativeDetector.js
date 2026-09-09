// _runtime/06724_NativeDetector.js
import _modDef6684 from "metro/06684__.js";
import noop from "metro/00019__.js";

const require = fn;
const useMemo = fn(19).useMemo;
const Platform = fn(17).Platform;
const jsx = fn(21).jsx;

export const NativeDetector = function NativeDetector(gesture) {
  gesture = gesture.gesture;
  ({ children, touchAction, userSelect, enableContextMenu } = gesture);
  let obj = gesture(6725);
  if (gesture.config.dispatchesAnimatedEvents) {
    let ReanimatedNativeDetector = tmp(6683).AnimatedNativeDetector;
  } else if (gesture.config.shouldUseReanimatedDetector) {
    ReanimatedNativeDetector = tmp(6742).ReanimatedNativeDetector;
  } else {
    ReanimatedNativeDetector = _modDef6684;
  }
  let tmpResult = tmp(6743);
  const result = tmpResult.ensureNativeDetectorComponent(ReanimatedNativeDetector);
  tmpResult = tmp(6744);
  const gestureRelationsUpdater = tmpResult.useGestureRelationsUpdater(gesture);
  const items = [gesture];
  const tmp6 = useMemo(() => {
    if (obj.isComposedGesture(gesture)) {
      let handlerTags = gesture.handlerTags;
    } else {
      handlerTags = [gesture.handlerTag];
    }
    return handlerTags;
  }, items);
  const detectorAttachmentGuard = gesture(6745).useDetectorAttachmentGuard(tmp6);
  obj = { onGestureHandlerReanimatedEvent: gesture.detectorCallbacks.reanimatedEventHandler };
  obj = {
    onStartShouldSetResponder: obj.useJSResponderHandler(gesture).handleStartShouldSetResponder,
    touchAction,
    userSelect,
    enableContextMenu,
    pointerEvents: "box-none",
    onGestureHandlerStateChange: gesture.detectorCallbacks.jsEventHandler,
    onGestureHandlerEvent: gesture.detectorCallbacks.jsEventHandler,
    onGestureHandlerTouchEvent: gesture.detectorCallbacks.jsEventHandler,
    onGestureHandlerReanimatedStateChange: obj.onGestureHandlerReanimatedStateChange,
    onGestureHandlerReanimatedEvent: obj.onGestureHandlerReanimatedEvent,
    onGestureHandlerReanimatedTouchEvent: obj.onGestureHandlerReanimatedTouchEvent,
    onGestureHandlerAnimatedEvent: gesture.detectorCallbacks.animatedEventHandler,
    moduleId: globalThis._RNGH_MODULE_ID,
    handlerTags: tmp6,
    style: tmp(6683).nativeDetectorStyles.detector,
    children,
  };
  return (
    <ReanimatedNativeDetector
      onStartShouldSetResponder={obj.useJSResponderHandler(gesture).handleStartShouldSetResponder}
      touchAction={touchAction}
      userSelect={userSelect}
      enableContextMenu={enableContextMenu}
      pointerEvents="box-none"
      onGestureHandlerStateChange={gesture.detectorCallbacks.jsEventHandler}
      onGestureHandlerEvent={gesture.detectorCallbacks.jsEventHandler}
      onGestureHandlerTouchEvent={gesture.detectorCallbacks.jsEventHandler}
      onGestureHandlerReanimatedStateChange={obj.onGestureHandlerReanimatedStateChange}
      onGestureHandlerReanimatedEvent={obj.onGestureHandlerReanimatedEvent}
      onGestureHandlerReanimatedTouchEvent={obj.onGestureHandlerReanimatedTouchEvent}
      onGestureHandlerAnimatedEvent={gesture.detectorCallbacks.animatedEventHandler}
      moduleId={globalThis._RNGH_MODULE_ID}
      handlerTags={tmp6}
      style={tmp(6683).nativeDetectorStyles.detector}
    >
      {children}
    </ReanimatedNativeDetector>
  );
};
