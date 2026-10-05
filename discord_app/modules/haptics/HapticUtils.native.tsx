// discord_app/modules/haptics/HapticUtils.native.tsx
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import haptics_HapticFeedbackTypesDefault from "HapticFeedbackTypes.tsx";
import Patterns from "../../../_runtime/04857_Patterns.js";
import DeviceUtils from "../../utils/native/DeviceUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/haptics/HapticUtils.native.tsx");

export const HapticFeedbackTypes = haptics_HapticFeedbackTypesDefault;
export const triggerHapticFeedback = function triggerHapticFeedback(IMPACT_LIGHT) {
  if (haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT === IMPACT_LIGHT) {
    const trigger6 = Patterns.trigger;
    Patterns;
    let str36 = "selection";
    const obj36 = PlatformUtils;
    if (obj36.isAndroid()) {
      const _parseInt5 = parseInt;
      let str37 = "effectTick";
      const tmp74Result = DeviceUtils;
      if (parseInt(tmp74Result.getSystemVersion()) < 29) {
        str37 = "impactLight";
      }
      str36 = str37;
    }
    trigger6(str36);
  } else if (haptics_HapticFeedbackTypesDefault.IMPACT_MEDIUM === IMPACT_LIGHT) {
    const trigger5 = Patterns.trigger;
    Patterns;
    let str34 = "impactMedium";
    const obj34 = PlatformUtils;
    if (obj34.isAndroid()) {
      const _parseInt4 = parseInt;
      let str35 = "effectTick";
      const tmp70Result = DeviceUtils;
      if (parseInt(tmp70Result.getSystemVersion()) < 29) {
        str35 = "impactLight";
      }
      str34 = str35;
    }
    trigger5(str34);
  } else if (haptics_HapticFeedbackTypesDefault.IMPACT_HEAVY === IMPACT_LIGHT) {
    const obj33 = Patterns;
    obj33.trigger("impactHeavy");
  } else if (haptics_HapticFeedbackTypesDefault.NOTIFICATION_ERROR === IMPACT_LIGHT) {
    const obj32 = Patterns;
    obj32.trigger("notificationError");
  } else if (haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_START === IMPACT_LIGHT) {
    const trigger4 = Patterns.trigger;
    Patterns;
    let str31 = "impactHeavy";
    const obj31 = PlatformUtils;
    if (obj31.isAndroid()) {
      str31 = "impactMedium";
    }
    trigger4(str31);
  } else if (haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_END === IMPACT_LIGHT) {
    const trigger3 = Patterns.trigger;
    Patterns;
    let str29 = "notificationSuccess";
    const obj29 = PlatformUtils;
    if (obj29.isAndroid()) {
      const _parseInt3 = parseInt;
      let str30 = "effectTick";
      const tmp59Result = DeviceUtils;
      if (parseInt(tmp59Result.getSystemVersion()) < 29) {
        str30 = "impactLight";
      }
      str29 = str30;
    }
    trigger3(str29);
  } else if (haptics_HapticFeedbackTypesDefault.DRAG_AND_DROP_MOVE === IMPACT_LIGHT) {
    const trigger2 = Patterns.trigger;
    Patterns;
    let str27 = "impactMedium";
    const obj27 = PlatformUtils;
    if (obj27.isAndroid()) {
      const _parseInt2 = parseInt;
      let str28 = "effectTick";
      const tmp55Result = DeviceUtils;
      if (parseInt(tmp55Result.getSystemVersion()) < 29) {
        str28 = "impactLight";
      }
      str27 = str28;
    }
    trigger2(str27);
  } else if (haptics_HapticFeedbackTypesDefault.SOFT === IMPACT_LIGHT) {
    const obj26 = Patterns;
    obj26.trigger("soft");
  } else if (haptics_HapticFeedbackTypesDefault.SELECTION === IMPACT_LIGHT) {
    const trigger = Patterns.trigger;
    Patterns;
    let str24 = "selection";
    const obj24 = PlatformUtils;
    if (obj24.isAndroid()) {
      const _parseInt = parseInt;
      let str25 = "effectTick";
      const tmp49Result = DeviceUtils;
      if (parseInt(tmp49Result.getSystemVersion()) < 29) {
        str25 = "impactLight";
      }
      str24 = str25;
    }
    trigger(str24);
  } else if (haptics_HapticFeedbackTypesDefault.RIGID === IMPACT_LIGHT) {
    const obj23 = Patterns;
    obj23.trigger("rigid");
  } else if (haptics_HapticFeedbackTypesDefault.NOTIFICATION_SUCCESS === IMPACT_LIGHT) {
    const obj22 = Patterns;
    obj22.trigger("notificationSuccess");
  } else if (haptics_HapticFeedbackTypesDefault.NOTIFICATION_WARNING === IMPACT_LIGHT) {
    const obj21 = Patterns;
    obj21.trigger("notificationWarning");
  } else if (haptics_HapticFeedbackTypesDefault.CONFIRM === IMPACT_LIGHT) {
    const obj20 = Patterns;
    obj20.trigger("confirm");
  } else if (haptics_HapticFeedbackTypesDefault.REJECT === IMPACT_LIGHT) {
    const obj19 = Patterns;
    obj19.trigger("reject");
  } else if (haptics_HapticFeedbackTypesDefault.GESTURE_START === IMPACT_LIGHT) {
    const obj18 = Patterns;
    obj18.trigger("gestureStart");
  } else if (haptics_HapticFeedbackTypesDefault.GESTURE_END === IMPACT_LIGHT) {
    const obj17 = Patterns;
    obj17.trigger("gestureEnd");
  } else if (haptics_HapticFeedbackTypesDefault.SEGMENT_TICK === IMPACT_LIGHT) {
    const obj16 = Patterns;
    obj16.trigger("segmentTick");
  } else if (haptics_HapticFeedbackTypesDefault.SEGMENT_FREQUENT_TICK === IMPACT_LIGHT) {
    const obj15 = Patterns;
    obj15.trigger("segmentFrequentTick");
  } else if (haptics_HapticFeedbackTypesDefault.TOGGLE_ON === IMPACT_LIGHT) {
    const obj14 = Patterns;
    obj14.trigger("toggleOn");
  } else if (haptics_HapticFeedbackTypesDefault.TOGGLE_OFF === IMPACT_LIGHT) {
    const obj13 = Patterns;
    obj13.trigger("toggleOff");
  } else if (haptics_HapticFeedbackTypesDefault.CLOCK_TICK === IMPACT_LIGHT) {
    const obj12 = Patterns;
    obj12.trigger("clockTick");
  } else if (haptics_HapticFeedbackTypesDefault.CONTEXT_CLICK === IMPACT_LIGHT) {
    const obj11 = Patterns;
    obj11.trigger("contextClick");
  } else if (haptics_HapticFeedbackTypesDefault.KEYBOARD_PRESS === IMPACT_LIGHT) {
    const obj10 = Patterns;
    obj10.trigger("keyboardPress");
  } else if (haptics_HapticFeedbackTypesDefault.KEYBOARD_RELEASE === IMPACT_LIGHT) {
    const obj9 = Patterns;
    obj9.trigger("keyboardRelease");
  } else if (haptics_HapticFeedbackTypesDefault.KEYBOARD_TAP === IMPACT_LIGHT) {
    const obj8 = Patterns;
    obj8.trigger("keyboardTap");
  } else if (haptics_HapticFeedbackTypesDefault.LONG_PRESS === IMPACT_LIGHT) {
    const obj7 = Patterns;
    obj7.trigger("longPress");
  } else if (haptics_HapticFeedbackTypesDefault.TEXT_HANDLE_MOVE === IMPACT_LIGHT) {
    const obj6 = Patterns;
    obj6.trigger("textHandleMove");
  } else if (haptics_HapticFeedbackTypesDefault.VIRTUAL_KEY === IMPACT_LIGHT) {
    const obj5 = Patterns;
    obj5.trigger("virtualKey");
  } else if (haptics_HapticFeedbackTypesDefault.VIRTUAL_KEY_RELEASE === IMPACT_LIGHT) {
    const obj4 = Patterns;
    obj4.trigger("virtualKeyRelease");
  } else if (haptics_HapticFeedbackTypesDefault.EFFECT_CLICK === IMPACT_LIGHT) {
    const obj3 = Patterns;
    obj3.trigger("effectClick");
  } else if (haptics_HapticFeedbackTypesDefault.EFFECT_DOUBLE_CLICK === IMPACT_LIGHT) {
    const obj2 = Patterns;
    obj2.trigger("effectDoubleClick");
  } else if (haptics_HapticFeedbackTypesDefault.EFFECT_HEAVY_CLICK === IMPACT_LIGHT) {
    const obj = Patterns;
    obj.trigger("effectHeavyClick");
  } else if (haptics_HapticFeedbackTypesDefault.EFFECT_TICK === IMPACT_LIGHT) {
    const obj38 = Patterns;
    obj38.trigger("effectTick");
  }
};
