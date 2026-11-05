// === Module 5488: NativeDetector ===

// Module 5488 (NativeDetector)
import animatedComponentDefault from "animatedComponent" /* 5444 */;
import noop from "module_19" /* 19 */;

const require = fn;
const useMemo = fn(19).useMemo;
const Platform = fn(17).Platform;
const jsx = fn(21).jsx;

export function NativeDetector(gesture) {
  gesture = gesture.gesture;
  ({ children, touchAction, userSelect, enableContextMenu } = gesture);
  if (gesture.config.dispatchesAnimatedEvents) {
    let ReanimatedNativeDetector = tmp(5443).AnimatedNativeDetector;
  } else if (gesture.config.shouldUseReanimatedDetector) {
    ReanimatedNativeDetector = tmp(5506).ReanimatedNativeDetector;
  } else {
    ReanimatedNativeDetector = animatedComponentDefault;
  }
  const obj = gesture(5489);
  const result = gesture(5507).ensureNativeDetectorComponent(ReanimatedNativeDetector);
  const tmpResult = gesture(5507);
  const gestureRelationsUpdater = gesture(5508).useGestureRelationsUpdater(gesture);
  items = [gesture];
  const tmp6 = useMemo(() => {
    if (obj.isComposedGesture(gesture)) {
      let handlerTags = gesture.handlerTags;
    } else {
      handlerTags = [gesture.handlerTag];
    }
    return handlerTags;
  }, items);
  const tmpResult4 = gesture(5508);
  const detectorAttachmentGuard = gesture(5509).useDetectorAttachmentGuard(tmp6);
  let prop;
  if (gesture.config.shouldUseReanimatedDetector) {
    prop = gesture.detectorCallbacks.reanimatedEventHandler;
  }
  const obj2 = { onGestureHandlerReanimatedEvent: prop };
  const obj3 = { onStartShouldSetResponder: obj.useJSResponderHandler(gesture).handleStartShouldSetResponder, touchAction, userSelect, enableContextMenu, pointerEvents: "box-none", onGestureHandlerStateChange: gesture.detectorCallbacks.jsEventHandler, onGestureHandlerEvent: gesture.detectorCallbacks.jsEventHandler, onGestureHandlerTouchEvent: gesture.detectorCallbacks.jsEventHandler, onGestureHandlerReanimatedStateChange: obj2.onGestureHandlerReanimatedStateChange, onGestureHandlerReanimatedEvent: obj2.onGestureHandlerReanimatedEvent, onGestureHandlerReanimatedTouchEvent: obj2.onGestureHandlerReanimatedTouchEvent, onGestureHandlerAnimatedEvent: gesture.detectorCallbacks.animatedEventHandler, moduleId: null, handlerTags: null, style: null, children: null };
  const tmpResult5 = gesture(5509);
  obj3.moduleId = gesture(5510).getModuleId();
  obj3.handlerTags = tmp6;
  obj3.style = gesture(5443).nativeDetectorStyles.detector;
  obj3.children = children;
  return <ReanimatedNativeDetector onStartShouldSetResponder={obj.useJSResponderHandler(gesture).handleStartShouldSetResponder} touchAction={touchAction} userSelect={userSelect} enableContextMenu={enableContextMenu} pointerEvents="box-none" onGestureHandlerStateChange={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerEvent={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerTouchEvent={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerReanimatedStateChange={obj2.onGestureHandlerReanimatedStateChange} onGestureHandlerReanimatedEvent={obj2.onGestureHandlerReanimatedEvent} onGestureHandlerReanimatedTouchEvent={obj2.onGestureHandlerReanimatedTouchEvent} onGestureHandlerAnimatedEvent={gesture.detectorCallbacks.animatedEventHandler} moduleId={null} handlerTags={null} style={null}>{null}</ReanimatedNativeDetector>;
}