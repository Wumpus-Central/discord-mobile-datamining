// === Module 17276: useTapGestures ===

// Module 17276 (useTapGestures)
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let __initData, __initData2, dependencyMap;

let react = react_mod;
let closure_4 = { code: "function useTapGesturesTsx1(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('double');}" };
let closure_5 = { code: "function useTapGesturesTsx2(event,manager){const{isFocusedVideoZoomed}=this.__closure;if(isFocusedVideoZoomed.get()){manager.fail();}}" };
let closure_6 = { code: "function useTapGesturesTsx3(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('single');}" };
let closure_7 = { code: "function useTapGesturesTsx4(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,handleEvent}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);runOnJS(handleEvent)('long');}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useTapGestures.tsx");

export default function useTapGestures(onSingleTap) {
  let closure_2;
  let closure_3;
  let isFocusedVideoZoomed;
  let current = onSingleTap;
  isFocusedVideoZoomed = react.useContext(isFocusedVideoZoomed(11901)).isFocusedVideoZoomed;
  dependencyMap = react.useRef(onSingleTap);
  react = tmp;
  __initData = tmp2;
  __initData2 = tmp3;
  const gesturesEnabled = onSingleTap.gesturesEnabled;
  const layoutEffect = react.useLayoutEffect(() => {
    closure_2.current = current;
  });
  const items = [tmp, tmp2, tmp3, gesturesEnabled, isFocusedVideoZoomed];
  return react.useMemo(() => {
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
    const Gesture = current(ref[2]).Gesture;
    const Exclusive = Gesture.Exclusive;
    const Gesture2 = current(ref[2]).Gesture;
    let tmp4 = gesturesEnabled;
    let tmp5 = gesturesEnabled;
    const enabled = Gesture2.Tap().enabled;
    Gesture2.Tap();
    if (gesturesEnabled) {
      tmp5 = __initData;
    }
    const enabledResult = enabled(tmp5);
    const maxDistanceResult = enabledResult.maxDistance(30);
    const numberOfTapsResult = maxDistanceResult.numberOfTaps(2);
    class S {
      constructor(arg0, fail) {
        if (isFocusedVideoZoomed.get()) {
          fail.fail();
        }
      }
    }
    let obj = { isFocusedVideoZoomed };
    S.__closure = obj;
    S.__workletHash = 3236469126950;
    S.__initData = __initData2;
    const fn = function b() {
      const obj = ReanimatedRexport;
      return obj.runOnJS(handleEvent)("double");
    };
    const onTouchesDownResult = numberOfTapsResult.onTouchesDown(S);
    let obj2 = { runOnJS: current(ref[3]).runOnJS, handleEvent };
    fn.__closure = obj2;
    fn.__workletHash = 13571114432746;
    fn.__initData = __initData;
    const onStartResult = onTouchesDownResult.onStart(fn);
    const Gesture3 = current(ref[2]).Gesture;
    let tmp8 = tmp4;
    const enabled2 = Gesture3.Tap().enabled;
    Gesture3.Tap();
    if (tmp4) {
      tmp8 = closure_3;
    }
    const fn2 = function c() {
      const obj = ReanimatedRexport;
      return obj.runOnJS(handleEvent)("single");
    };
    const enabled2Result = enabled2(tmp8);
    const maxDistanceResult1 = enabled2Result.maxDistance(30);
    fn2.__closure = { runOnJS: current(ref[3]).runOnJS, handleEvent };
    fn2.__workletHash = 14109132753191;
    fn2.__initData = gesturesEnabled;
    ({ runOnJS: current(ref[3]).runOnJS, handleEvent });
    const onStartResult1 = maxDistanceResult1.onStart(fn2);
    const Gesture4 = current(ref[2]).Gesture;
    const enabled3 = Gesture4.LongPress().enabled;
    Gesture4.LongPress();
    if (tmp4) {
      tmp4 = __initData2;
    }
    const fn3 = function n() {
      const obj = ReanimatedRexport;
      const runOnJSResult = obj.runOnJS(HapticUtils.triggerHapticFeedback);
      runOnJSResult(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj2 = ReanimatedRexport;
      obj2.runOnJS(handleEvent)("long");
    };
    const enabled3Result = enabled3(tmp4);
    fn3.__closure = { runOnJS: current(ref[3]).runOnJS, triggerHapticFeedback: current(ref[4]).triggerHapticFeedback, HapticFeedbackTypes: current(ref[4]).HapticFeedbackTypes, handleEvent };
    fn3.__workletHash = 1947700378974;
    fn3.__initData = __initData3;
    ({ runOnJS: current(ref[3]).runOnJS, triggerHapticFeedback: current(ref[4]).triggerHapticFeedback, HapticFeedbackTypes: current(ref[4]).HapticFeedbackTypes, handleEvent });
    return Exclusive(onStartResult, onStartResult1, enabled3Result.onStart(fn3));
  }, items);
};