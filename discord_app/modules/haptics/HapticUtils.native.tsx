// === Module 4343: HapticFeedbackTypes ===

// Module 4343 (HapticFeedbackTypes)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import IMPACT_LIGHTDefault from "IMPACT_LIGHT" /* 4344 */;
import useHaptics from "useHaptics" /* 4345 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4354 */;

const result = obj132.fileFinishedImporting("modules/haptics/HapticUtils.native.tsx");

export const HapticFeedbackTypes = IMPACT_LIGHTDefault;
export const triggerHapticFeedback = function triggerHapticFeedback(IMPACT_LIGHT) {
  if (IMPACT_LIGHTDefault.IMPACT_LIGHT === IMPACT_LIGHT) {
    const obj41 = useHaptics;
    let str36 = "selection";
    if (obj42.isAndroid()) {
      const _parseInt5 = parseInt;
      let str37 = "effectTick";
      if (parseInt(tmp69Result.getSystemVersion()) < 29) {
        str37 = "impactLight";
      }
      str36 = str37;
      tmp69Result = DCDDeviceManager;
    }
    obj41.trigger(str36);
    obj42 = obj1322;
  } else if (IMPACT_LIGHTDefault.IMPACT_MEDIUM === IMPACT_LIGHT) {
    const obj38 = useHaptics;
    let str34 = "impactMedium";
    if (obj39.isAndroid()) {
      const _parseInt4 = parseInt;
      let str35 = "effectTick";
      if (parseInt(tmp66Result.getSystemVersion()) < 29) {
        str35 = "impactLight";
      }
      str34 = str35;
      tmp66Result = DCDDeviceManager;
    }
    obj38.trigger(str34);
    obj39 = obj1322;
  } else if (IMPACT_LIGHTDefault.IMPACT_HEAVY === IMPACT_LIGHT) {
    useHaptics.trigger("impactHeavy");
  } else if (IMPACT_LIGHTDefault.NOTIFICATION_ERROR === IMPACT_LIGHT) {
    useHaptics.trigger("notificationError");
  } else if (IMPACT_LIGHTDefault.DRAG_AND_DROP_START === IMPACT_LIGHT) {
    const obj34 = useHaptics;
    let str31 = "impactHeavy";
    if (obj35.isAndroid()) {
      str31 = "impactMedium";
    }
    obj34.trigger(str31);
    obj35 = obj1322;
  } else if (IMPACT_LIGHTDefault.DRAG_AND_DROP_END === IMPACT_LIGHT) {
    const obj31 = useHaptics;
    let str29 = "notificationSuccess";
    if (obj32.isAndroid()) {
      const _parseInt3 = parseInt;
      let str30 = "effectTick";
      if (parseInt(tmp57Result.getSystemVersion()) < 29) {
        str30 = "impactLight";
      }
      str29 = str30;
      tmp57Result = DCDDeviceManager;
    }
    obj31.trigger(str29);
    obj32 = obj1322;
  } else if (IMPACT_LIGHTDefault.DRAG_AND_DROP_MOVE === IMPACT_LIGHT) {
    const obj28 = useHaptics;
    let str27 = "impactMedium";
    if (obj29.isAndroid()) {
      const _parseInt2 = parseInt;
      let str28 = "effectTick";
      if (parseInt(tmp54Result.getSystemVersion()) < 29) {
        str28 = "impactLight";
      }
      str27 = str28;
      tmp54Result = DCDDeviceManager;
    }
    obj28.trigger(str27);
    obj29 = obj1322;
  } else if (IMPACT_LIGHTDefault.SOFT === IMPACT_LIGHT) {
    useHaptics.trigger("soft");
  } else if (IMPACT_LIGHTDefault.SELECTION === IMPACT_LIGHT) {
    const obj24 = useHaptics;
    let str24 = "selection";
    if (obj25.isAndroid()) {
      const _parseInt = parseInt;
      let str25 = "effectTick";
      if (parseInt(tmp49Result.getSystemVersion()) < 29) {
        str25 = "impactLight";
      }
      str24 = str25;
      tmp49Result = DCDDeviceManager;
    }
    obj24.trigger(str24);
    obj25 = obj1322;
  } else if (IMPACT_LIGHTDefault.RIGID === IMPACT_LIGHT) {
    useHaptics.trigger("rigid");
  } else if (IMPACT_LIGHTDefault.NOTIFICATION_SUCCESS === IMPACT_LIGHT) {
    useHaptics.trigger("notificationSuccess");
  } else if (IMPACT_LIGHTDefault.NOTIFICATION_WARNING === IMPACT_LIGHT) {
    useHaptics.trigger("notificationWarning");
  } else if (IMPACT_LIGHTDefault.CONFIRM === IMPACT_LIGHT) {
    useHaptics.trigger("confirm");
  } else if (IMPACT_LIGHTDefault.REJECT === IMPACT_LIGHT) {
    useHaptics.trigger("reject");
  } else if (IMPACT_LIGHTDefault.GESTURE_START === IMPACT_LIGHT) {
    useHaptics.trigger("gestureStart");
  } else if (IMPACT_LIGHTDefault.GESTURE_END === IMPACT_LIGHT) {
    useHaptics.trigger("gestureEnd");
  } else if (IMPACT_LIGHTDefault.SEGMENT_TICK === IMPACT_LIGHT) {
    useHaptics.trigger("segmentTick");
  } else if (IMPACT_LIGHTDefault.SEGMENT_FREQUENT_TICK === IMPACT_LIGHT) {
    useHaptics.trigger("segmentFrequentTick");
  } else if (IMPACT_LIGHTDefault.TOGGLE_ON === IMPACT_LIGHT) {
    useHaptics.trigger("toggleOn");
  } else if (IMPACT_LIGHTDefault.TOGGLE_OFF === IMPACT_LIGHT) {
    useHaptics.trigger("toggleOff");
  } else if (IMPACT_LIGHTDefault.CLOCK_TICK === IMPACT_LIGHT) {
    useHaptics.trigger("clockTick");
  } else if (IMPACT_LIGHTDefault.CONTEXT_CLICK === IMPACT_LIGHT) {
    useHaptics.trigger("contextClick");
  } else if (IMPACT_LIGHTDefault.KEYBOARD_PRESS === IMPACT_LIGHT) {
    useHaptics.trigger("keyboardPress");
  } else if (IMPACT_LIGHTDefault.KEYBOARD_RELEASE === IMPACT_LIGHT) {
    useHaptics.trigger("keyboardRelease");
  } else if (IMPACT_LIGHTDefault.KEYBOARD_TAP === IMPACT_LIGHT) {
    useHaptics.trigger("keyboardTap");
  } else if (IMPACT_LIGHTDefault.LONG_PRESS === IMPACT_LIGHT) {
    useHaptics.trigger("longPress");
  } else if (IMPACT_LIGHTDefault.TEXT_HANDLE_MOVE === IMPACT_LIGHT) {
    useHaptics.trigger("textHandleMove");
  } else if (IMPACT_LIGHTDefault.VIRTUAL_KEY === IMPACT_LIGHT) {
    useHaptics.trigger("virtualKey");
  } else if (IMPACT_LIGHTDefault.VIRTUAL_KEY_RELEASE === IMPACT_LIGHT) {
    useHaptics.trigger("virtualKeyRelease");
  } else if (IMPACT_LIGHTDefault.EFFECT_CLICK === IMPACT_LIGHT) {
    useHaptics.trigger("effectClick");
  } else if (IMPACT_LIGHTDefault.EFFECT_DOUBLE_CLICK === IMPACT_LIGHT) {
    useHaptics.trigger("effectDoubleClick");
  } else if (IMPACT_LIGHTDefault.EFFECT_HEAVY_CLICK === IMPACT_LIGHT) {
    useHaptics.trigger("effectHeavyClick");
  } else if (IMPACT_LIGHTDefault.EFFECT_TICK === IMPACT_LIGHT) {
    useHaptics.trigger("effectTick");
  }
};