// _runtime/06444_gestureActivationCriteria.js
const require = arg1;
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
    const obj2 = { maxDeltaX: 15, minOffsetY: 5, hitSlop: null, enableTrackpadTwoFingerGesture: true };
    const obj3 = { bottom: -layout.height + gestureResponseDistance };
    obj2.hitSlop = obj3;
    return obj2;
  } else if ("vertical-inverted" === gestureDirection) {
    const obj4 = { maxDeltaX: 15, minOffsetY: -5, hitSlop: null, enableTrackpadTwoFingerGesture: true };
    const obj5 = { top: -layout.height + gestureResponseDistance };
    obj4.hitSlop = obj5;
    return obj4;
  } else {
    const sum = -layout.width + gestureResponseDistance;
    if (1 === obj9.getInvertedMultiplier(gestureDirection, "rtl" === direction.direction)) {
      const obj6 = { minOffsetX: 5, maxDeltaY: 20, hitSlop: null, enableTrackpadTwoFingerGesture: true };
      const obj7 = { right: sum };
      obj6.hitSlop = obj7;
      let obj = obj6;
    } else {
      obj = { minOffsetX: -5, maxDeltaY: 20, hitSlop: null, enableTrackpadTwoFingerGesture: true };
      const obj8 = { left: sum };
      obj.hitSlop = obj8;
    }
    return obj;
  }
};
