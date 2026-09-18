// _runtime/06903_NativeDetector.js
import _modDef6863 from "metro/06863__.js";
import noop from "metro/00019__.js";

const require = fn;
const useMemo = fn(19).useMemo;
const Platform = fn(17).Platform;
const jsx = fn(21).jsx;

export const NativeDetector = function NativeDetector(gesture) {
  gesture = gesture.gesture;
  ({ children, touchAction, userSelect, enableContextMenu } = gesture);
  if (gesture.config.dispatchesAnimatedEvents) {
    let ReanimatedNativeDetector = tmp(6862).AnimatedNativeDetector;
  } else if (gesture.config.shouldUseReanimatedDetector) {
    ReanimatedNativeDetector = tmp(6921).ReanimatedNativeDetector;
  } else {
    ReanimatedNativeDetector = _modDef6863;
  }
  const obj = gesture(6904);
  const result = gesture(6922).ensureNativeDetectorComponent(ReanimatedNativeDetector);
  const tmpResult = gesture(6922);
  const gestureRelationsUpdater = gesture(6923).useGestureRelationsUpdater(gesture);
  const items = [gesture];
  const tmp6 = useMemo(() => {
    if (obj.isComposedGesture(gesture)) {
      let handlerTags = gesture.handlerTags;
    } else {
      handlerTags = [gesture.handlerTag];
    }
    return handlerTags;
  }, items);
  const tmpResult3 = gesture(6923);
  const detectorAttachmentGuard = gesture(6924).useDetectorAttachmentGuard(tmp6);
  const obj2 = { onGestureHandlerReanimatedEvent: gesture.detectorCallbacks.reanimatedEventHandler };
  const tmpResult4 = gesture(6924);
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
      onGestureHandlerReanimatedStateChange={obj2.onGestureHandlerReanimatedStateChange}
      onGestureHandlerReanimatedEvent={obj2.onGestureHandlerReanimatedEvent}
      onGestureHandlerReanimatedTouchEvent={obj2.onGestureHandlerReanimatedTouchEvent}
      onGestureHandlerAnimatedEvent={gesture.detectorCallbacks.animatedEventHandler}
      moduleId={globalThis._RNGH_MODULE_ID}
      handlerTags={tmp6}
      style={gesture(6862).nativeDetectorStyles.detector}
    >
      {children}
    </ReanimatedNativeDetector>
  );
};
