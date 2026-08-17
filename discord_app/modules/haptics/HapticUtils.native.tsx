// discord_app/modules/haptics/HapticUtils.native.tsx
import set from "set" /* 2 */;
import set2 from "set" /* 500 */;
import IMPACT_LIGHTDefault from "IMPACT_LIGHT" /* 4344 */;
import useHaptics from "useHaptics" /* 4345 */;

const result = set.fileFinishedImporting("modules/haptics/HapticUtils.native.tsx");

export const HapticFeedbackTypes = IMPACT_LIGHTDefault;
export const triggerHapticFeedback = function triggerHapticFeedback(IMPACT_LIGHT) {
  if (IMPACT_LIGHTDefault.IMPACT_LIGHT === IMPACT_LIGHT) {
    const obj41 = useHaptics;
    const tmp69 = require;
    let str36 = "selection";
    if (obj42.isAndroid()) {
      const _parseInt5 = parseInt;
      let str37 = "effectTick";
      if (parseInt(tmp69Result.getSystemVersion()) < 29) {
        str37 = "impactLight";
      }
      str36 = str37;
      tmp69Result = tmp69(4354);
    }
    obj41.trigger(str36);
    obj42 = set2;
  } else if (tmp(4344).IMPACT_MEDIUM === IMPACT_LIGHT) {
    const obj38 = useHaptics;
    const tmp66 = require;
    let str34 = "impactMedium";
    if (obj39.isAndroid()) {
      const _parseInt4 = parseInt;
      let str35 = "effectTick";
      if (parseInt(tmp66Result.getSystemVersion()) < 29) {
        str35 = "impactLight";
      }
      str34 = str35;
      tmp66Result = tmp66(4354);
    }
    obj38.trigger(str34);
    obj39 = set2;
  } else if (tmp(4344).IMPACT_HEAVY === IMPACT_LIGHT) {
    useHaptics.trigger("impactHeavy");
    const obj37 = useHaptics;
  } else if (tmp(4344).NOTIFICATION_ERROR === IMPACT_LIGHT) {
    useHaptics.trigger("notificationError");
    const obj36 = useHaptics;
  } else if (tmp(4344).DRAG_AND_DROP_START === IMPACT_LIGHT) {
    const obj34 = useHaptics;
    let str31 = "impactHeavy";
    if (obj35.isAndroid()) {
      str31 = "impactMedium";
    }
    obj34.trigger(str31);
    obj35 = set2;
  } else if (tmp(4344).DRAG_AND_DROP_END === IMPACT_LIGHT) {
    const obj31 = useHaptics;
    const tmp57 = require;
    let str29 = "notificationSuccess";
    if (obj32.isAndroid()) {
      const _parseInt3 = parseInt;
      let str30 = "effectTick";
      if (parseInt(tmp57Result.getSystemVersion()) < 29) {
        str30 = "impactLight";
      }
      str29 = str30;
      tmp57Result = tmp57(4354);
    }
    obj31.trigger(str29);
    obj32 = set2;
  } else if (tmp(4344).DRAG_AND_DROP_MOVE === IMPACT_LIGHT) {
    const obj28 = useHaptics;
    const tmp54 = require;
    let str27 = "impactMedium";
    if (obj29.isAndroid()) {
      const _parseInt2 = parseInt;
      let str28 = "effectTick";
      if (parseInt(tmp54Result.getSystemVersion()) < 29) {
        str28 = "impactLight";
      }
      str27 = str28;
      tmp54Result = tmp54(4354);
    }
    obj28.trigger(str27);
    obj29 = set2;
  } else if (tmp(4344).SOFT === IMPACT_LIGHT) {
    useHaptics.trigger("soft");
    const obj27 = useHaptics;
  } else if (tmp(4344).SELECTION === IMPACT_LIGHT) {
    const obj24 = useHaptics;
    const tmp49 = require;
    let str24 = "selection";
    if (obj25.isAndroid()) {
      const _parseInt = parseInt;
      let str25 = "effectTick";
      if (parseInt(tmp49Result.getSystemVersion()) < 29) {
        str25 = "impactLight";
      }
      str24 = str25;
      tmp49Result = tmp49(4354);
    }
    obj24.trigger(str24);
    obj25 = set2;
  } else if (tmp(4344).RIGID === IMPACT_LIGHT) {
    useHaptics.trigger("rigid");
    const obj23 = useHaptics;
  } else if (tmp(4344).NOTIFICATION_SUCCESS === IMPACT_LIGHT) {
    useHaptics.trigger("notificationSuccess");
    const obj22 = useHaptics;
  } else if (tmp(4344).NOTIFICATION_WARNING === IMPACT_LIGHT) {
    useHaptics.trigger("notificationWarning");
    const obj21 = useHaptics;
  } else if (tmp(4344).CONFIRM === IMPACT_LIGHT) {
    useHaptics.trigger("confirm");
    const obj20 = useHaptics;
  } else if (tmp(4344).REJECT === IMPACT_LIGHT) {
    useHaptics.trigger("reject");
    const obj19 = useHaptics;
  } else if (tmp(4344).GESTURE_START === IMPACT_LIGHT) {
    useHaptics.trigger("gestureStart");
    const obj18 = useHaptics;
  } else if (tmp(4344).GESTURE_END === IMPACT_LIGHT) {
    useHaptics.trigger("gestureEnd");
    const obj17 = useHaptics;
  } else if (tmp(4344).SEGMENT_TICK === IMPACT_LIGHT) {
    useHaptics.trigger("segmentTick");
    const obj16 = useHaptics;
  } else if (tmp(4344).SEGMENT_FREQUENT_TICK === IMPACT_LIGHT) {
    useHaptics.trigger("segmentFrequentTick");
    const obj15 = useHaptics;
  } else if (tmp(4344).TOGGLE_ON === IMPACT_LIGHT) {
    useHaptics.trigger("toggleOn");
    const obj14 = useHaptics;
  } else if (tmp(4344).TOGGLE_OFF === IMPACT_LIGHT) {
    useHaptics.trigger("toggleOff");
    const obj13 = useHaptics;
  } else if (tmp(4344).CLOCK_TICK === IMPACT_LIGHT) {
    useHaptics.trigger("clockTick");
    const obj12 = useHaptics;
  } else if (tmp(4344).CONTEXT_CLICK === IMPACT_LIGHT) {
    useHaptics.trigger("contextClick");
    const obj11 = useHaptics;
  } else if (tmp(4344).KEYBOARD_PRESS === IMPACT_LIGHT) {
    useHaptics.trigger("keyboardPress");
    const obj10 = useHaptics;
  } else if (tmp(4344).KEYBOARD_RELEASE === IMPACT_LIGHT) {
    useHaptics.trigger("keyboardRelease");
    const obj9 = useHaptics;
  } else if (tmp(4344).KEYBOARD_TAP === IMPACT_LIGHT) {
    useHaptics.trigger("keyboardTap");
    const obj8 = useHaptics;
  } else if (tmp(4344).LONG_PRESS === IMPACT_LIGHT) {
    useHaptics.trigger("longPress");
    const obj7 = useHaptics;
  } else if (tmp(4344).TEXT_HANDLE_MOVE === IMPACT_LIGHT) {
    useHaptics.trigger("textHandleMove");
    const obj6 = useHaptics;
  } else if (tmp(4344).VIRTUAL_KEY === IMPACT_LIGHT) {
    useHaptics.trigger("virtualKey");
    const obj5 = useHaptics;
  } else if (tmp(4344).VIRTUAL_KEY_RELEASE === IMPACT_LIGHT) {
    useHaptics.trigger("virtualKeyRelease");
    const obj4 = useHaptics;
  } else if (tmp(4344).EFFECT_CLICK === IMPACT_LIGHT) {
    useHaptics.trigger("effectClick");
    const obj3 = useHaptics;
  } else if (tmp(4344).EFFECT_DOUBLE_CLICK === IMPACT_LIGHT) {
    useHaptics.trigger("effectDoubleClick");
    const obj2 = useHaptics;
  } else if (tmp(4344).EFFECT_HEAVY_CLICK === IMPACT_LIGHT) {
    useHaptics.trigger("effectHeavyClick");
    const obj = useHaptics;
  } else if (tmp(4344).EFFECT_TICK === IMPACT_LIGHT) {
    useHaptics.trigger("effectTick");
    const obj44 = useHaptics;
  }
};