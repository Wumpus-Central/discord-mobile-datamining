// === Module 7028: gestureActivationCriteria ===

// Module 7028 (gestureActivationCriteria)
import getInvertedMultiplier from "getInvertedMultiplier" /* 7020 */;

require = arg1;
const dependencyMap = arg6;
arg5.gestureActivationCriteria = (direction) => {
  ({ gestureDirection, gestureResponseDistance, layout } = direction);
  if (undefined === gestureResponseDistance) {
    if ("vertical" === gestureDirection) {
      let num = 135;
    } else {
      num = 50;
    }
    gestureResponseDistance = num;
  }
  if ("vertical" === gestureDirection) {
    let obj = { maxDeltaX: 15, minOffsetY: 5, hitSlop: null, enableTrackpadTwoFingerGesture: true };
    obj = { bottom: null };
    obj[0] = -layout.height + gestureResponseDistance;
    obj[2] = obj;
    return obj;
  } else if ("vertical-inverted" === gestureDirection) {
    obj1 = { maxDeltaX: 15, minOffsetY: -5, hitSlop: null, enableTrackpadTwoFingerGesture: true };
    const obj2 = { top: null };
    obj2[0] = -layout.height + gestureResponseDistance;
    obj1[2] = obj2;
    return obj1;
  } else {
    const sum = -layout.width + gestureResponseDistance;
    obj = getInvertedMultiplier;
    if (1 === obj.getInvertedMultiplier(gestureDirection, "rtl" === direction.direction)) {
      const obj3 = { minOffsetX: 5, maxDeltaY: 20, hitSlop: null, enableTrackpadTwoFingerGesture: true };
      const obj4 = { right: null };
      obj4[0] = sum;
      obj3[2] = obj4;
      let obj5 = obj3;
    } else {
      obj5 = { minOffsetX: -5, maxDeltaY: 20, hitSlop: null, enableTrackpadTwoFingerGesture: true };
      const obj6 = { left: null };
      obj6[0] = sum;
      obj5[2] = obj6;
    }
    return obj5;
  }
};