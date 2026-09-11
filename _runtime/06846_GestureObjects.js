// _runtime/06846_GestureObjects.js
import _mod6746 from "metro/06746__.js";
import _mod6767 from "metro/06767__.js";
import _mod6847 from "metro/06847__.js";
import _mod6848 from "metro/06848__.js";
import _mod6849 from "metro/06849__.js";
import _mod6850 from "metro/06850__.js";
import _mod6851 from "metro/06851__.js";
import _mod6852 from "metro/06852__.js";
import _mod6853 from "metro/06853__.js";
import _mod6854 from "metro/06854__.js";
import _mod6855 from "metro/06855__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6847.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6848.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6849.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6850.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6851.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6852.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6853.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6854.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6855.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6767.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6746.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6746.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6746.ExclusiveGesture(...items);
  },
};
