// _runtime/06675_GestureObjects.js
import _mod6575 from "metro/06575__.js";
import _mod6596 from "metro/06596__.js";
import _mod6676 from "metro/06676__.js";
import _mod6677 from "metro/06677__.js";
import _mod6678 from "metro/06678__.js";
import _mod6679 from "metro/06679__.js";
import _mod6680 from "metro/06680__.js";
import _mod6681 from "metro/06681__.js";
import _mod6682 from "metro/06682__.js";
import _mod6683 from "metro/06683__.js";
import _mod6684 from "metro/06684__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6676.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6677.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6678.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6679.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6680.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6681.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6682.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6683.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6684.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6596.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6575.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6575.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6575.ExclusiveGesture(...items);
  },
};
