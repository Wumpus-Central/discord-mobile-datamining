// === Module 5715: NativeDetector ===

// Module 5715 (NativeDetector)
import noopDefault from "noop" /* 19 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 5675 */;
import { useMemo } from "noop" /* 19 */;
import { Platform } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopDefault;

export const NativeDetector = function NativeDetector(gesture) {
  gesture = gesture.gesture;
  ({ children, touchAction, userSelect, enableContextMenu } = gesture);
  let obj = gesture(5716);
  if (gesture.config.dispatchesAnimatedEvents) {
    let ReanimatedNativeDetector = tmp(5674).AnimatedNativeDetector;
  } else if (gesture.config.shouldUseReanimatedDetector) {
    ReanimatedNativeDetector = tmp(5733).ReanimatedNativeDetector;
  } else {
    ReanimatedNativeDetector = __INTERNAL_VIEW_CONFIGDefault;
  }
  let tmpResult = tmp(5734);
  const result = tmpResult.ensureNativeDetectorComponent(ReanimatedNativeDetector);
  tmpResult = tmp(5735);
  const gestureRelationsUpdater = tmpResult.useGestureRelationsUpdater(gesture);
  const items = [gesture];
  const tmp6 = useMemo(() => {
    if (obj.isComposedGesture(gesture)) {
      let handlerTags = tmp.handlerTags;
    } else {
      handlerTags = [tmp.handlerTag];
    }
    return handlerTags;
  }, items);
  const detectorAttachmentGuard = gesture(5736).useDetectorAttachmentGuard(tmp6);
  obj = { onGestureHandlerReanimatedEvent: gesture.detectorCallbacks.reanimatedEventHandler };
  obj = { onStartShouldSetResponder: obj.useJSResponderHandler(gesture).handleStartShouldSetResponder, touchAction, userSelect, enableContextMenu, pointerEvents: "box-none", onGestureHandlerStateChange: gesture.detectorCallbacks.jsEventHandler, onGestureHandlerEvent: gesture.detectorCallbacks.jsEventHandler, onGestureHandlerTouchEvent: gesture.detectorCallbacks.jsEventHandler, onGestureHandlerReanimatedStateChange: obj.onGestureHandlerReanimatedStateChange, onGestureHandlerReanimatedEvent: obj.onGestureHandlerReanimatedEvent, onGestureHandlerReanimatedTouchEvent: obj.onGestureHandlerReanimatedTouchEvent, onGestureHandlerAnimatedEvent: gesture.detectorCallbacks.animatedEventHandler, moduleId: globalThis._RNGH_MODULE_ID, handlerTags: tmp6, style: tmp(5674).nativeDetectorStyles.detector, children };
  return <ReanimatedNativeDetector onStartShouldSetResponder={obj.useJSResponderHandler(gesture).handleStartShouldSetResponder} touchAction={touchAction} userSelect={userSelect} enableContextMenu={enableContextMenu} pointerEvents="box-none" onGestureHandlerStateChange={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerEvent={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerTouchEvent={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerReanimatedStateChange={obj.onGestureHandlerReanimatedStateChange} onGestureHandlerReanimatedEvent={obj.onGestureHandlerReanimatedEvent} onGestureHandlerReanimatedTouchEvent={obj.onGestureHandlerReanimatedTouchEvent} onGestureHandlerAnimatedEvent={gesture.detectorCallbacks.animatedEventHandler} moduleId={globalThis._RNGH_MODULE_ID} handlerTags={tmp6} style={tmp(5674).nativeDetectorStyles.detector}>{children}</ReanimatedNativeDetector>;
};