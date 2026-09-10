// _runtime/06825_GestureObjects.js
import _mod6725 from "metro/06725__.js";
import _mod6746 from "metro/06746__.js";
import _mod6826 from "metro/06826__.js";
import _mod6827 from "metro/06827__.js";
import _mod6828 from "metro/06828__.js";
import _mod6829 from "metro/06829__.js";
import _mod6830 from "metro/06830__.js";
import _mod6831 from "metro/06831__.js";
import _mod6832 from "metro/06832__.js";
import _mod6833 from "metro/06833__.js";
import _mod6834 from "metro/06834__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6826.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6827.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6828.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6829.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6830.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6831.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6832.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6833.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6834.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6746.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6725.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6725.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6725.ExclusiveGesture(...items);
  },
};
