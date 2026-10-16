// _runtime/06677_GestureObjects.js
import _mod6577 from "metro/06577__.js";
import _mod6598 from "metro/06598__.js";
import _mod6678 from "metro/06678__.js";
import _mod6679 from "metro/06679__.js";
import _mod6680 from "metro/06680__.js";
import _mod6681 from "metro/06681__.js";
import _mod6682 from "metro/06682__.js";
import _mod6683 from "metro/06683__.js";
import _mod6684 from "metro/06684__.js";
import _mod6685 from "metro/06685__.js";
import _mod6686 from "metro/06686__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6678.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6679.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6680.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6681.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6682.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6683.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6684.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6685.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6686.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6598.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6577.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6577.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6577.ExclusiveGesture(...items);
  },
};
