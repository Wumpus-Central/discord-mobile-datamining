// discord_app/modules/voice_panel/native/hooks/useTapGestures.tsx
import noop from "noop";

const require = arg1;
let closure_4 = { code: "function useTapGesturesTsx1(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('double');}" };
let closure_5 = { code: "function useTapGesturesTsx2(event,manager){const{isFocusedVideoZoomed}=this.__closure;if(isFocusedVideoZoomed.get()){manager.fail();}}" };
let closure_6 = { code: "function useTapGesturesTsx3(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('single');}" };
let closure_7 = { code: "function useTapGesturesTsx4(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,handleEvent}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);runOnJS(handleEvent)('long');}" };
const result = require("Directions").fileFinishedImporting("modules/voice_panel/native/hooks/useTapGestures.tsx");

export default function useTapGestures(onSingleTap) {
  let closure_0 = onSingleTap;
  isFocusedVideoZoomed = React.useContext(isFocusedVideoZoomed(10050)).isFocusedVideoZoomed;
  const dependencyMap = React.useRef(onSingleTap);
  React = tmp;
  let closure_4 = tmp2;
  let closure_5 = tmp3;
  const gesturesEnabled = onSingleTap.gesturesEnabled;
  const layoutEffect = React.useLayoutEffect(() => {
    closure_2.current = closure_0;
  });
  const items = [null != onSingleTap.onSingleTap, null != onSingleTap.onDoubleTap, null != onSingleTap.onLongPress, gesturesEnabled, isFocusedVideoZoomed];
  return React.useMemo(() => {
    function handleEvent(arg0) {
      if ("single" === arg0) {
        const current3 = ref.current;
        const onSingleTap = current3.onSingleTap;
        if (onSingleTap != null) {
          onSingleTap();
        }
      } else if ("double" === arg0) {
        const current2 = ref.current;
        const onDoubleTap = current2.onDoubleTap;
        if (onDoubleTap != null) {
          onDoubleTap();
        }
      } else if ("long" === arg0) {
        const current = ref.current;
        const onLongPress = current.onLongPress;
        if (onLongPress != null) {
          onLongPress();
        }
      }
    }
    const Gesture = onSingleTap(5277).Gesture;
    const Gesture2 = onSingleTap(5277).Gesture;
    let tmp3 = gesturesEnabled;
    let tmp4 = gesturesEnabled;
    if (gesturesEnabled) {
      tmp4 = closure_4;
    }
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(tmp4);
    const maxDistanceResult = Gesture2.Tap().enabled(tmp4).maxDistance(30);
    class S {
      constructor(arg0, arg1) {
        if (closure_1.get()) {
          tmp = arg1;
          failResult = arg1.fail();
        }
        return;
      }
    }
    let obj = { isFocusedVideoZoomed };
    S.__closure = obj;
    S.__workletHash = 3236469126950;
    S.__initData = closure_5;
    const numberOfTapsResult = Gesture2.Tap().enabled(tmp4).maxDistance(30).numberOfTaps(2);
    const fn = function b() {
      return handleEvent(ref[3]).runOnJS(handleEvent)("double");
    };
    obj = { runOnJS: tmp(4054).runOnJS, handleEvent };
    fn.__closure = obj;
    fn.__workletHash = 13571114432746;
    fn.__initData = closure_4;
    const onTouchesDownResult = Gesture2.Tap().enabled(tmp4).maxDistance(30).numberOfTaps(2).onTouchesDown(S);
    const Gesture3 = tmp(5277).Gesture;
    const onStartResult = Gesture2.Tap().enabled(tmp4).maxDistance(30).numberOfTaps(2).onTouchesDown(S).onStart(fn);
    let tmp6 = tmp3;
    if (tmp3) {
      tmp6 = noop;
    }
    const TapResult1 = Gesture3.Tap();
    const enabledResult1 = Gesture3.Tap().enabled(tmp6);
    const fn2 = function c() {
      return handleEvent(ref[3]).runOnJS(handleEvent)("single");
    };
    const maxDistanceResult1 = Gesture3.Tap().enabled(tmp6).maxDistance(30);
    fn2.__closure = { runOnJS: onSingleTap(4054).runOnJS, handleEvent };
    fn2.__workletHash = 14109132753191;
    fn2.__initData = gesturesEnabled;
    const obj1 = { runOnJS: onSingleTap(4054).runOnJS, handleEvent };
    const Gesture4 = tmp(5277).Gesture;
    const onStartResult1 = maxDistanceResult1.onStart(fn2);
    if (tmp3) {
      tmp3 = closure_5;
    }
    const LongPressResult = Gesture4.LongPress();
    const fn3 = function n() {
      const obj = handleEvent(ref[3]);
      handleEvent(ref[3]).runOnJS(handleEvent(ref[4]).triggerHapticFeedback)(handleEvent(ref[4]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const runOnJSResult = handleEvent(ref[3]).runOnJS(handleEvent(ref[4]).triggerHapticFeedback);
      handleEvent(ref[3]).runOnJS(handleEvent)("long");
    };
    const enabledResult2 = Gesture4.LongPress().enabled(tmp3);
    fn3.__closure = { runOnJS: onSingleTap(4054).runOnJS, triggerHapticFeedback: onSingleTap(4162).triggerHapticFeedback, HapticFeedbackTypes: onSingleTap(4162).HapticFeedbackTypes, handleEvent };
    fn3.__workletHash = 1947700378974;
    fn3.__initData = outer1_7;
    return Gesture.Exclusive(onStartResult, onStartResult1, enabledResult2.onStart(fn3));
  }, items);
};