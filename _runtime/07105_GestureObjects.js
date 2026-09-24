// _runtime/07105_GestureObjects.js
import _mod7005 from "metro/07005__.js";
import _mod7026 from "metro/07026__.js";
import _mod7106 from "metro/07106__.js";
import _mod7107 from "metro/07107__.js";
import _mod7108 from "metro/07108__.js";
import _mod7109 from "metro/07109__.js";
import _mod7110 from "metro/07110__.js";
import _mod7111 from "metro/07111__.js";
import _mod7112 from "metro/07112__.js";
import _mod7113 from "metro/07113__.js";
import _mod7114 from "metro/07114__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod7106.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod7107.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod7108.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod7109.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod7110.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod7111.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod7112.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod7113.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod7114.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod7026.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod7005.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod7005.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod7005.ExclusiveGesture(...items);
  },
};
