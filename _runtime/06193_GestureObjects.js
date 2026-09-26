// _runtime/06193_GestureObjects.js
import _mod6093 from "metro/06093__.js";
import _mod6114 from "metro/06114__.js";
import _mod6194 from "metro/06194__.js";
import _mod6195 from "metro/06195__.js";
import _mod6196 from "metro/06196__.js";
import _mod6197 from "metro/06197__.js";
import _mod6198 from "metro/06198__.js";
import _mod6199 from "metro/06199__.js";
import _mod6200 from "metro/06200__.js";
import _mod6201 from "metro/06201__.js";
import _mod6202 from "metro/06202__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6194.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6195.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6196.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6197.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6198.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6199.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6200.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6201.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6202.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6114.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6093.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6093.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6093.ExclusiveGesture(...items);
  },
};
