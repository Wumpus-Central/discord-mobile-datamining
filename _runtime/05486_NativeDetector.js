// _runtime/05486_NativeDetector.js
import animatedComponentDefault from "05442_animatedComponent.js";
import noop from "metro/00019__.js";

const require = fn;
const useMemo = fn(19).useMemo;
const Platform = fn(17).Platform;
const jsx = fn(21).jsx;

export function NativeDetector(gesture) {
  gesture = gesture.gesture;
  ({ children, touchAction, userSelect, enableContextMenu } = gesture);
  if (gesture.config.dispatchesAnimatedEvents) {
    let ReanimatedNativeDetector = tmp(5441).AnimatedNativeDetector;
  } else if (gesture.config.shouldUseReanimatedDetector) {
    ReanimatedNativeDetector = tmp(5504).ReanimatedNativeDetector;
  } else {
    ReanimatedNativeDetector = animatedComponentDefault;
  }
  const obj = gesture(5487);
  const result = gesture(5505).ensureNativeDetectorComponent(ReanimatedNativeDetector);
  const tmpResult = gesture(5505);
  const gestureRelationsUpdater = gesture(5506).useGestureRelationsUpdater(gesture);
  items = [gesture];
  const tmp6 = useMemo(() => {
    if (obj.isComposedGesture(gesture)) {
      let handlerTags = gesture.handlerTags;
    } else {
      handlerTags = [gesture.handlerTag];
    }
    return handlerTags;
  }, items);
  const tmpResult4 = gesture(5506);
  const detectorAttachmentGuard = gesture(5507).useDetectorAttachmentGuard(tmp6);
  let prop;
  if (gesture.config.shouldUseReanimatedDetector) {
    prop = gesture.detectorCallbacks.reanimatedEventHandler;
  }
  const obj2 = { onGestureHandlerReanimatedEvent: prop };
  const obj3 = {
    onStartShouldSetResponder: obj.useJSResponderHandler(gesture).handleStartShouldSetResponder,
    touchAction,
    userSelect,
    enableContextMenu,
    pointerEvents: "box-none",
    onGestureHandlerStateChange: gesture.detectorCallbacks.jsEventHandler,
    onGestureHandlerEvent: gesture.detectorCallbacks.jsEventHandler,
    onGestureHandlerTouchEvent: gesture.detectorCallbacks.jsEventHandler,
    onGestureHandlerReanimatedStateChange: obj2.onGestureHandlerReanimatedStateChange,
    onGestureHandlerReanimatedEvent: obj2.onGestureHandlerReanimatedEvent,
    onGestureHandlerReanimatedTouchEvent: obj2.onGestureHandlerReanimatedTouchEvent,
    onGestureHandlerAnimatedEvent: gesture.detectorCallbacks.animatedEventHandler,
    moduleId: null,
    handlerTags: null,
    style: null,
    children: null,
  };
  const tmpResult5 = gesture(5507);
  obj3.moduleId = gesture(5508).getModuleId();
  obj3.handlerTags = tmp6;
  obj3.style = gesture(5441).nativeDetectorStyles.detector;
  obj3.children = children;
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
      moduleId={null}
      handlerTags={null}
      style={null}
    >
      {null}
    </ReanimatedNativeDetector>
  );
}
