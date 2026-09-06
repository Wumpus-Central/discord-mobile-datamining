// === Module 17136: useTapGestures ===

// Module 17136 (useTapGestures)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = { code: "function useTapGesturesTsx1(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('double');}" };
let closure_5 = { code: "function useTapGesturesTsx2(event,manager){const{isFocusedVideoZoomed}=this.__closure;if(isFocusedVideoZoomed.get()){manager.fail();}}" };
let closure_6 = { code: "function useTapGesturesTsx3(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('single');}" };
let closure_7 = { code: "function useTapGesturesTsx4(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,handleEvent}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);runOnJS(handleEvent)('long');}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useTapGestures.tsx");

export default function useTapGestures(onSingleTap) {
  let current = onSingleTap;
  isFocusedVideoZoomed = noop.useContext(isFocusedVideoZoomed(12272)).isFocusedVideoZoomed;
  dependencyMap = noop.useRef(onSingleTap);
  noop = tmp;
  __initData = tmp2;
  __initData2 = tmp3;
  const gesturesEnabled = onSingleTap.gesturesEnabled;
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_2.current = current;
  });
  const items = [null != onSingleTap.onSingleTap, null != onSingleTap.onDoubleTap, null != onSingleTap.onLongPress, gesturesEnabled, isFocusedVideoZoomed];
  return noop.useMemo(() => {
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
        current = ref.current;
        const onLongPress = current.onLongPress;
        if (onLongPress != null) {
          onLongPress();
        }
      }
    }
    const Gesture = current(6655).Gesture;
    const Gesture2 = current(6655).Gesture;
    let tmp3 = gesturesEnabled;
    let tmp4 = gesturesEnabled;
    if (gesturesEnabled) {
      tmp4 = __initData;
    }
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(tmp4);
    const maxDistanceResult = Gesture2.Tap().enabled(tmp4).maxDistance(30);
    class S {
      constructor(arg0, arg1) {
        if (closure_1_1.get()) {
          tmp = arg1;
          failResult = arg1.fail();
        }
        return;
      }
    }
    let obj = { isFocusedVideoZoomed };
    S.__closure = obj;
    S.__workletHash = 3236469126950;
    S.__initData = __initData2;
    const numberOfTapsResult = Gesture2.Tap().enabled(tmp4).maxDistance(30).numberOfTaps(2);
    const fn = function b() {
      return ReanimatedRexport.runOnJS(handleEvent)("double");
    };
    obj = { runOnJS: current(4296).runOnJS, handleEvent };
    fn.__closure = obj;
    fn.__workletHash = 13571114432746;
    fn.__initData = __initData;
    const onTouchesDownResult = Gesture2.Tap().enabled(tmp4).maxDistance(30).numberOfTaps(2).onTouchesDown(S);
    const Gesture3 = current(6655).Gesture;
    const onStartResult = Gesture2.Tap().enabled(tmp4).maxDistance(30).numberOfTaps(2).onTouchesDown(S).onStart(fn);
    let tmp6 = tmp3;
    if (tmp3) {
      tmp6 = closure_3;
    }
    const TapResult1 = Gesture3.Tap();
    const enabledResult1 = Gesture3.Tap().enabled(tmp6);
    const fn2 = function c() {
      return ReanimatedRexport.runOnJS(handleEvent)("single");
    };
    const maxDistanceResult1 = Gesture3.Tap().enabled(tmp6).maxDistance(30);
    fn2.__closure = { runOnJS: current(4296).runOnJS, handleEvent };
    fn2.__workletHash = 14109132753191;
    fn2.__initData = gesturesEnabled;
    const obj1 = { runOnJS: current(4296).runOnJS, handleEvent };
    const Gesture4 = current(6655).Gesture;
    const onStartResult1 = maxDistanceResult1.onStart(fn2);
    if (tmp3) {
      tmp3 = __initData2;
    }
    const LongPressResult = Gesture4.LongPress();
    const fn3 = function n() {
      ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback)(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      const runOnJSResult = ReanimatedRexport.runOnJS(HapticUtils.triggerHapticFeedback);
      ReanimatedRexport.runOnJS(handleEvent)("long");
    };
    const enabledResult2 = Gesture4.LongPress().enabled(tmp3);
    fn3.__closure = { runOnJS: current(4296).runOnJS, triggerHapticFeedback: current(4528).triggerHapticFeedback, HapticFeedbackTypes: current(4528).HapticFeedbackTypes, handleEvent };
    fn3.__workletHash = 1947700378974;
    fn3.__initData = __initData3;
    return Gesture.Exclusive(onStartResult, onStartResult1, enabledResult2.onStart(fn3));
  }, items);
};