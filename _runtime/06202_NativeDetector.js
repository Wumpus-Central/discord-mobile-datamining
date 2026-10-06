// _runtime/06202_NativeDetector.js
import react_native from "00017_react-native.js";
import react2 from "00019_react.js";
import Fragment from "react/00021_Fragment.js";
import _modDef6162 from "metro/06162__.js";
import _mod6214 from "metro/06214__.js";

const useMemo = react2.useMemo;
const Platform = react_native.Platform;
const jsx = Fragment.jsx;

export const NativeDetector = function NativeDetector(gesture) {
  let ReanimatedNativeDetector;
  let children;
  let enableContextMenu;
  let touchAction;
  let userSelect;
  gesture = gesture.gesture;
  ({ children, touchAction, userSelect, enableContextMenu } = gesture);
  let obj = gesture(6203);
  const handleStartShouldSetResponder = obj.useJSResponderHandler(gesture).handleStartShouldSetResponder;
  if (gesture.config.dispatchesAnimatedEvents) {
    ReanimatedNativeDetector = tmp(6161).AnimatedNativeDetector;
  } else if (gesture.config.shouldUseReanimatedDetector) {
    ReanimatedNativeDetector = tmp(6220).ReanimatedNativeDetector;
  } else {
    ReanimatedNativeDetector = _modDef6162;
  }
  const tmpResult = gesture(6221);
  const result = tmpResult.ensureNativeDetectorComponent(ReanimatedNativeDetector);
  const tmpResult3 = gesture(6222);
  const gestureRelationsUpdater = tmpResult3.useGestureRelationsUpdater(gesture);
  const items = [gesture];
  const tmp6 = useMemo(() => {
    let handlerTags;
    const obj = _mod6214;
    if (obj.isComposedGesture(gesture)) {
      handlerTags = gesture.handlerTags;
    } else {
      handlerTags = [gesture.handlerTag];
    }
    return handlerTags;
  }, items);
  const tmpResult4 = gesture(6223);
  const detectorAttachmentGuard = tmpResult4.useDetectorAttachmentGuard(tmp6);
  const obj2 = { onGestureHandlerReanimatedEvent: gesture.detectorCallbacks.reanimatedEventHandler };
  return (
    <ReanimatedNativeDetector
      onStartShouldSetResponder={handleStartShouldSetResponder}
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
      style={gesture(6161).nativeDetectorStyles.detector}
    >
      {children}
    </ReanimatedNativeDetector>
  );
};
