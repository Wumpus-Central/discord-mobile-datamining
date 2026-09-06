// discord_app/modules/haptics/HapticUtils.native.tsx
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import haptics_HapticFeedbackTypesDefault from "HapticFeedbackTypes.tsx";
import Patterns from "../../../_runtime/04530_Patterns.js";
import DeviceUtils from "../../utils/native/DeviceUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/haptics/HapticUtils.native.tsx");

export const HapticFeedbackTypes = haptics_HapticFeedbackTypesDefault;
export const triggerHapticFeedback = function triggerHapticFeedback(IMPACT_LIGHT) {
  if (haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT === IMPACT_LIGHT) {
    const obj41 = Patterns;
    let str36 = "selection";
    if (obj42.isAndroid()) {
      const _parseInt5 = parseInt;
      let str37 = "effectTick";
      if (parseInt(tmp69Result.getSystemVersion()) < 29) {
        str37 = "impactLight";
      }
      str36 = str37;
      tmp69Result = DeviceUtils;
    }
    obj41.trigger(str36);
    obj42 = PlatformUtils;
  } else if (haptics_HapticFeedbackTypesDefault.IMPACT_MEDIUM === IMPACT_LIGHT) {
    const obj38 = Patterns;
    let str34 = "impactMedium";
    if (obj39.isAndroid()) {
      const _parseInt4 = parseInt;
      let str35 = "effectTick";
      if (parseInt(tmp66Result.getSystemVersion()) < 29) {
        str35 = "impactLight";
      }
      str34 = str35;
      tmp66Result = DeviceUtils;
    }
    obj38.trigger(str34);
    obj39 = PlatformUtils;
  } else if (haptics_HapticFeedbackTypesDefault.IMPACT_HEAVY === IMPACT_LIGHT) {
    Patterns.trigger("impactHeavy");
  } else if (haptics_HapticFeedbackTypesDefault.NOTIFICATION_ERROR === IMPACT_LIGHT) {
    Patterns.trigger("notificationError");
  } else if (haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_START === IMPACT_LIGHT) {
    const obj34 = Patterns;
    let str31 = "impactHeavy";
    if (obj35.isAndroid()) {
      str31 = "impactMedium";
    }
    obj34.trigger(str31);
    obj35 = PlatformUtils;
  } else if (haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_END === IMPACT_LIGHT) {
    const obj31 = Patterns;
    let str29 = "notificationSuccess";
    if (obj32.isAndroid()) {
      const _parseInt3 = parseInt;
      let str30 = "effectTick";
      if (parseInt(tmp57Result.getSystemVersion()) < 29) {
        str30 = "impactLight";
      }
      str29 = str30;
      tmp57Result = DeviceUtils;
    }
    obj31.trigger(str29);
    obj32 = PlatformUtils;
  } else if (haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_MOVE === IMPACT_LIGHT) {
    const obj28 = Patterns;
    let str27 = "impactMedium";
    if (obj29.isAndroid()) {
      const _parseInt2 = parseInt;
      let str28 = "effectTick";
      if (parseInt(tmp54Result.getSystemVersion()) < 29) {
        str28 = "impactLight";
      }
      str27 = str28;
      tmp54Result = DeviceUtils;
    }
    obj28.trigger(str27);
    obj29 = PlatformUtils;
  } else if (haptics_HapticFeedbackTypesDefault.SOFT === IMPACT_LIGHT) {
    Patterns.trigger("soft");
  } else if (haptics_HapticFeedbackTypesDefault.SELECTION === IMPACT_LIGHT) {
    const obj24 = Patterns;
    let str24 = "selection";
    if (obj25.isAndroid()) {
      const _parseInt = parseInt;
      let str25 = "effectTick";
      if (parseInt(tmp49Result.getSystemVersion()) < 29) {
        str25 = "impactLight";
      }
      str24 = str25;
      tmp49Result = DeviceUtils;
    }
    obj24.trigger(str24);
    obj25 = PlatformUtils;
  } else if (haptics_HapticFeedbackTypesDefault.RIGID === IMPACT_LIGHT) {
    Patterns.trigger("rigid");
  } else if (haptics_HapticFeedbackTypesDefault.NOTIFICATION_SUCCESS === IMPACT_LIGHT) {
    Patterns.trigger("notificationSuccess");
  } else if (haptics_HapticFeedbackTypesDefault.NOTIFICATION_WARNING === IMPACT_LIGHT) {
    Patterns.trigger("notificationWarning");
  } else if (haptics_HapticFeedbackTypesDefault.CONFIRM === IMPACT_LIGHT) {
    Patterns.trigger("confirm");
  } else if (haptics_HapticFeedbackTypesDefault.REJECT === IMPACT_LIGHT) {
    Patterns.trigger("reject");
  } else if (haptics_HapticFeedbackTypesDefault.GESTURE_START === IMPACT_LIGHT) {
    Patterns.trigger("gestureStart");
  } else if (haptics_HapticFeedbackTypesDefault.GESTURE_END === IMPACT_LIGHT) {
    Patterns.trigger("gestureEnd");
  } else if (haptics_HapticFeedbackTypesDefault.SEGMENT_TICK === IMPACT_LIGHT) {
    Patterns.trigger("segmentTick");
  } else if (haptics_HapticFeedbackTypesDefault.SEGMENT_FREQUENT_TICK === IMPACT_LIGHT) {
    Patterns.trigger("segmentFrequentTick");
  } else if (haptics_HapticFeedbackTypesDefault.TOGGLE_ON === IMPACT_LIGHT) {
    Patterns.trigger("toggleOn");
  } else if (haptics_HapticFeedbackTypesDefault.TOGGLE_OFF === IMPACT_LIGHT) {
    Patterns.trigger("toggleOff");
  } else if (haptics_HapticFeedbackTypesDefault.CLOCK_TICK === IMPACT_LIGHT) {
    Patterns.trigger("clockTick");
  } else if (haptics_HapticFeedbackTypesDefault.CONTEXT_CLICK === IMPACT_LIGHT) {
    Patterns.trigger("contextClick");
  } else if (haptics_HapticFeedbackTypesDefault.KEYBOARD_PRESS === IMPACT_LIGHT) {
    Patterns.trigger("keyboardPress");
  } else if (haptics_HapticFeedbackTypesDefault.KEYBOARD_RELEASE === IMPACT_LIGHT) {
    Patterns.trigger("keyboardRelease");
  } else if (haptics_HapticFeedbackTypesDefault.KEYBOARD_TAP === IMPACT_LIGHT) {
    Patterns.trigger("keyboardTap");
  } else if (haptics_HapticFeedbackTypesDefault.LONG_PRESS === IMPACT_LIGHT) {
    Patterns.trigger("longPress");
  } else if (haptics_HapticFeedbackTypesDefault.TEXT_HANDLE_MOVE === IMPACT_LIGHT) {
    Patterns.trigger("textHandleMove");
  } else if (haptics_HapticFeedbackTypesDefault.VIRTUAL_KEY === IMPACT_LIGHT) {
    Patterns.trigger("virtualKey");
  } else if (haptics_HapticFeedbackTypesDefault.VIRTUAL_KEY_RELEASE === IMPACT_LIGHT) {
    Patterns.trigger("virtualKeyRelease");
  } else if (haptics_HapticFeedbackTypesDefault.EFFECT_CLICK === IMPACT_LIGHT) {
    Patterns.trigger("effectClick");
  } else if (haptics_HapticFeedbackTypesDefault.EFFECT_DOUBLE_CLICK === IMPACT_LIGHT) {
    Patterns.trigger("effectDoubleClick");
  } else if (haptics_HapticFeedbackTypesDefault.EFFECT_HEAVY_CLICK === IMPACT_LIGHT) {
    Patterns.trigger("effectHeavyClick");
  } else if (haptics_HapticFeedbackTypesDefault.EFFECT_TICK === IMPACT_LIGHT) {
    Patterns.trigger("effectTick");
  }
};
