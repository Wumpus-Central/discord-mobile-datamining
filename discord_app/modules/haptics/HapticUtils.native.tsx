// discord_app/modules/haptics/HapticUtils.native.tsx
const result = require("set").fileFinishedImporting("modules/haptics/HapticUtils.native.tsx");

export const HapticFeedbackTypes = require("IMPACT_LIGHT");
export const triggerHapticFeedback = function triggerHapticFeedback(IMPACT_LIGHT) {
  if (importDefault(4255).IMPACT_LIGHT === IMPACT_LIGHT) {
    const obj41 = require(4256) /* useHaptics */;
    const tmp69 = require;
    let str36 = "selection";
    if (obj42.isAndroid()) {
      const _parseInt5 = parseInt;
      let str37 = "effectTick";
      if (parseInt(tmp69Result.getSystemVersion()) < 29) {
        str37 = "impactLight";
      }
      str36 = str37;
      tmp69Result = tmp69(4265);
    }
    obj41.trigger(str36);
    obj42 = require(500) /* set */;
  } else if (tmp(4255).IMPACT_MEDIUM === IMPACT_LIGHT) {
    const obj38 = require(4256) /* useHaptics */;
    const tmp66 = require;
    let str34 = "impactMedium";
    if (obj39.isAndroid()) {
      const _parseInt4 = parseInt;
      let str35 = "effectTick";
      if (parseInt(tmp66Result.getSystemVersion()) < 29) {
        str35 = "impactLight";
      }
      str34 = str35;
      tmp66Result = tmp66(4265);
    }
    obj38.trigger(str34);
    obj39 = require(500) /* set */;
  } else if (tmp(4255).IMPACT_HEAVY === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("impactHeavy");
    const obj37 = require(4256) /* useHaptics */;
  } else if (tmp(4255).NOTIFICATION_ERROR === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("notificationError");
    const obj36 = require(4256) /* useHaptics */;
  } else if (tmp(4255).DRAG_AND_DROP_START === IMPACT_LIGHT) {
    const obj34 = require(4256) /* useHaptics */;
    let str31 = "impactHeavy";
    if (obj35.isAndroid()) {
      str31 = "impactMedium";
    }
    obj34.trigger(str31);
    obj35 = require(500) /* set */;
  } else if (tmp(4255).DRAG_AND_DROP_END === IMPACT_LIGHT) {
    const obj31 = require(4256) /* useHaptics */;
    const tmp57 = require;
    let str29 = "notificationSuccess";
    if (obj32.isAndroid()) {
      const _parseInt3 = parseInt;
      let str30 = "effectTick";
      if (parseInt(tmp57Result.getSystemVersion()) < 29) {
        str30 = "impactLight";
      }
      str29 = str30;
      tmp57Result = tmp57(4265);
    }
    obj31.trigger(str29);
    obj32 = require(500) /* set */;
  } else if (tmp(4255).DRAG_AND_DROP_MOVE === IMPACT_LIGHT) {
    const obj28 = require(4256) /* useHaptics */;
    const tmp54 = require;
    let str27 = "impactMedium";
    if (obj29.isAndroid()) {
      const _parseInt2 = parseInt;
      let str28 = "effectTick";
      if (parseInt(tmp54Result.getSystemVersion()) < 29) {
        str28 = "impactLight";
      }
      str27 = str28;
      tmp54Result = tmp54(4265);
    }
    obj28.trigger(str27);
    obj29 = require(500) /* set */;
  } else if (tmp(4255).SOFT === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("soft");
    const obj27 = require(4256) /* useHaptics */;
  } else if (tmp(4255).SELECTION === IMPACT_LIGHT) {
    const obj24 = require(4256) /* useHaptics */;
    const tmp49 = require;
    let str24 = "selection";
    if (obj25.isAndroid()) {
      const _parseInt = parseInt;
      let str25 = "effectTick";
      if (parseInt(tmp49Result.getSystemVersion()) < 29) {
        str25 = "impactLight";
      }
      str24 = str25;
      tmp49Result = tmp49(4265);
    }
    obj24.trigger(str24);
    obj25 = require(500) /* set */;
  } else if (tmp(4255).RIGID === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("rigid");
    const obj23 = require(4256) /* useHaptics */;
  } else if (tmp(4255).NOTIFICATION_SUCCESS === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("notificationSuccess");
    const obj22 = require(4256) /* useHaptics */;
  } else if (tmp(4255).NOTIFICATION_WARNING === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("notificationWarning");
    const obj21 = require(4256) /* useHaptics */;
  } else if (tmp(4255).CONFIRM === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("confirm");
    const obj20 = require(4256) /* useHaptics */;
  } else if (tmp(4255).REJECT === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("reject");
    const obj19 = require(4256) /* useHaptics */;
  } else if (tmp(4255).GESTURE_START === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("gestureStart");
    const obj18 = require(4256) /* useHaptics */;
  } else if (tmp(4255).GESTURE_END === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("gestureEnd");
    const obj17 = require(4256) /* useHaptics */;
  } else if (tmp(4255).SEGMENT_TICK === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("segmentTick");
    const obj16 = require(4256) /* useHaptics */;
  } else if (tmp(4255).SEGMENT_FREQUENT_TICK === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("segmentFrequentTick");
    const obj15 = require(4256) /* useHaptics */;
  } else if (tmp(4255).TOGGLE_ON === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("toggleOn");
    const obj14 = require(4256) /* useHaptics */;
  } else if (tmp(4255).TOGGLE_OFF === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("toggleOff");
    const obj13 = require(4256) /* useHaptics */;
  } else if (tmp(4255).CLOCK_TICK === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("clockTick");
    const obj12 = require(4256) /* useHaptics */;
  } else if (tmp(4255).CONTEXT_CLICK === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("contextClick");
    const obj11 = require(4256) /* useHaptics */;
  } else if (tmp(4255).KEYBOARD_PRESS === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("keyboardPress");
    const obj10 = require(4256) /* useHaptics */;
  } else if (tmp(4255).KEYBOARD_RELEASE === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("keyboardRelease");
    const obj9 = require(4256) /* useHaptics */;
  } else if (tmp(4255).KEYBOARD_TAP === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("keyboardTap");
    const obj8 = require(4256) /* useHaptics */;
  } else if (tmp(4255).LONG_PRESS === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("longPress");
    const obj7 = require(4256) /* useHaptics */;
  } else if (tmp(4255).TEXT_HANDLE_MOVE === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("textHandleMove");
    const obj6 = require(4256) /* useHaptics */;
  } else if (tmp(4255).VIRTUAL_KEY === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("virtualKey");
    const obj5 = require(4256) /* useHaptics */;
  } else if (tmp(4255).VIRTUAL_KEY_RELEASE === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("virtualKeyRelease");
    const obj4 = require(4256) /* useHaptics */;
  } else if (tmp(4255).EFFECT_CLICK === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("effectClick");
    const obj3 = require(4256) /* useHaptics */;
  } else if (tmp(4255).EFFECT_DOUBLE_CLICK === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("effectDoubleClick");
    const obj2 = require(4256) /* useHaptics */;
  } else if (tmp(4255).EFFECT_HEAVY_CLICK === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("effectHeavyClick");
    const obj = require(4256) /* useHaptics */;
  } else if (tmp(4255).EFFECT_TICK === IMPACT_LIGHT) {
    require(4256) /* useHaptics */.trigger("effectTick");
    const obj44 = require(4256) /* useHaptics */;
  }
};