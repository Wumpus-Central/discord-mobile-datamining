// _runtime/07028_gestureActivationCriteria.js
import _mod7020 from "metro/07020__.js";

require = arg1;
const dependencyMap = arg6;

export const gestureActivationCriteria = (direction) => {
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
    obj = { bottom: -layout.height + gestureResponseDistance };
    obj.hitSlop = obj;
    return obj;
  } else if ("vertical-inverted" === gestureDirection) {
    const obj1 = { maxDeltaX: 15, minOffsetY: -5, hitSlop: null, enableTrackpadTwoFingerGesture: true };
    const obj2 = { top: -layout.height + gestureResponseDistance };
    obj1.hitSlop = obj2;
    return obj1;
  } else {
    const sum = -layout.width + gestureResponseDistance;
    obj = _mod7020;
    if (1 === obj.getInvertedMultiplier(gestureDirection, "rtl" === direction.direction)) {
      const obj3 = { minOffsetX: 5, maxDeltaY: 20, hitSlop: null, enableTrackpadTwoFingerGesture: true };
      const obj4 = { right: sum };
      obj3.hitSlop = obj4;
      let obj5 = obj3;
    } else {
      obj5 = { minOffsetX: -5, maxDeltaY: 20, hitSlop: null, enableTrackpadTwoFingerGesture: true };
      const obj6 = { left: sum };
      obj5.hitSlop = obj6;
    }
    return obj5;
  }
};
