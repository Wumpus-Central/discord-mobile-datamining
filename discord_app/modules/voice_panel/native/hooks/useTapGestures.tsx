// discord_app/modules/voice_panel/native/hooks/useTapGestures.tsx
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05450_LegacyBaseButton.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_4 = {
  code: "(function useTapGesturesTsx1(event,manager){let[isFocusedVideoZoomed]=this.__closure;if(isFocusedVideoZoomed.get()){manager.fail();}})",
};
let closure_5 = {
  code: "(function useTapGesturesTsx2(){let[scheduleOnRN,handleEvent]=this.__closure;return scheduleOnRN(handleEvent,'double');})",
};
let closure_6 = {
  code: "(function useTapGesturesTsx3(){let[scheduleOnRN,handleEvent]=this.__closure;return scheduleOnRN(handleEvent,'single');})",
};
let closure_7 = {
  code: "(function useTapGesturesTsx4(){let[scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,handleEvent]=this.__closure;scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);scheduleOnRN(handleEvent,'long');})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useTapGestures.tsx");

export default function useTapGestures(onSingleTap) {
  let current = onSingleTap;
  isFocusedVideoZoomed = noop.useContext(isFocusedVideoZoomed(11380)).isFocusedVideoZoomed;
  dependencyMap = noop.useRef(onSingleTap);
  noop = tmp;
  closure_4 = tmp2;
  closure_5 = tmp3;
  const gesturesEnabled = onSingleTap.gesturesEnabled;
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_2.current = current;
  });
  items = [
    null != onSingleTap.onSingleTap,
    null != onSingleTap.onDoubleTap,
    null != onSingleTap.onLongPress,
    gesturesEnabled,
    isFocusedVideoZoomed,
  ];
  return noop.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    let tmp3 = gesturesEnabled;
    let tmp4 = gesturesEnabled;
    if (gesturesEnabled) {
      tmp4 = closure_4;
    }
    const TapResult = Gesture2.Tap();
    const enabledResult = Gesture2.Tap().enabled(tmp4);
    const maxDistanceResult = Gesture2.Tap().enabled(tmp4).maxDistance(30);
    items = [closure_4, isFocusedVideoZoomed];
    [tmp5, tmp6] = items;
    function handleEvent(arg0) {
      if ("single" === arg0) {
        const current3 = _undefined2.current;
        const onSingleTap = current3.onSingleTap;
        if (onSingleTap != null) {
          onSingleTap();
        }
      } else if ("double" === arg0) {
        const current2 = _undefined2.current;
        const onDoubleTap = current2.onDoubleTap;
        if (onDoubleTap != null) {
          onDoubleTap();
        }
      } else if ("long" === arg0) {
        current = _undefined2.current;
        const onLongPress = current.onLongPress;
        if (onLongPress != null) {
          onLongPress();
        }
      }
    }
    function useTapGesturesTsx1(arg0, fail) {
      if (_undefined.get()) {
        fail.fail();
      }
    }
    const items1 = [tmp6];
    useTapGesturesTsx1.__closure = items1;
    useTapGesturesTsx1.__workletHash = 2872964709820;
    useTapGesturesTsx1.__initData = tmp5;
    const numberOfTapsResult = Gesture2.Tap().enabled(tmp4).maxDistance(30).numberOfTaps(2);
    const items2 = [closure_5, _mod1705.scheduleOnRN, handleEvent];
    c0 = undefined;
    c1 = undefined;
    [tmp7, tmp8, tmp9] = items2;
    function useTapGesturesTsx2() {
      return _undefined(c1, "double");
    }
    const items3 = [tmp8, tmp9];
    useTapGesturesTsx2.__closure = items3;
    useTapGesturesTsx2.__workletHash = 11156632838205;
    useTapGesturesTsx2.__initData = tmp7;
    const onTouchesDownResult = Gesture2.Tap()
      .enabled(tmp4)
      .maxDistance(30)
      .numberOfTaps(2)
      .onTouchesDown(useTapGesturesTsx1);
    const Gesture3 = LegacyBaseButton.Gesture;
    const onStartResult = Gesture2.Tap()
      .enabled(tmp4)
      .maxDistance(30)
      .numberOfTaps(2)
      .onTouchesDown(useTapGesturesTsx1)
      .onStart(useTapGesturesTsx2);
    let tmp11 = tmp3;
    if (tmp3) {
      tmp11 = closure_3;
    }
    const TapResult1 = Gesture3.Tap();
    const enabledResult1 = Gesture3.Tap().enabled(tmp11);
    const items4 = [closure_6, _mod1705.scheduleOnRN, handleEvent];
    c0 = undefined;
    c1 = undefined;
    [tmp12, tmp13, tmp14] = items4;
    function useTapGesturesTsx3() {
      return _undefined(c1, "single");
    }
    const items5 = [tmp13, tmp14];
    useTapGesturesTsx3.__closure = items5;
    useTapGesturesTsx3.__workletHash = 9691651382035;
    useTapGesturesTsx3.__initData = tmp12;
    const maxDistanceResult1 = Gesture3.Tap().enabled(tmp11).maxDistance(30);
    const Gesture4 = LegacyBaseButton.Gesture;
    const onStartResult1 = Gesture3.Tap().enabled(tmp11).maxDistance(30).onStart(useTapGesturesTsx3);
    if (tmp3) {
      tmp3 = closure_5;
    }
    const LongPressResult = Gesture4.LongPress();
    const items6 = [
      closure_7,
      _mod1705.scheduleOnRN,
      HapticUtils.triggerHapticFeedback,
      HapticUtils.HapticFeedbackTypes,
      handleEvent,
    ];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp16, tmp17, tmp18, tmp19, tmp20] = items6;
    function useTapGesturesTsx4() {
      _undefined(c1, _undefined2.IMPACT_MEDIUM);
      _undefined(c3, "long");
    }
    const items7 = [tmp17, tmp18, tmp19, tmp20];
    useTapGesturesTsx4.__closure = items7;
    useTapGesturesTsx4.__workletHash = 6834611527822;
    useTapGesturesTsx4.__initData = tmp16;
    return Gesture.Exclusive(
      onStartResult,
      onStartResult1,
      Gesture4.LongPress().enabled(tmp3).onStart(useTapGesturesTsx4),
    );
  }, items);
}
