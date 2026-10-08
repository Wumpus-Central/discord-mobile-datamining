// _runtime/06446_GestureObjects.js
import _mod6346 from "metro/06346__.js";
import _mod6367 from "metro/06367__.js";
import _mod6447 from "metro/06447__.js";
import _mod6448 from "metro/06448__.js";
import _mod6449 from "metro/06449__.js";
import _mod6450 from "metro/06450__.js";
import _mod6451 from "metro/06451__.js";
import _mod6452 from "metro/06452__.js";
import _mod6453 from "metro/06453__.js";
import _mod6454 from "metro/06454__.js";
import _mod6455 from "metro/06455__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6447.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6448.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6449.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6450.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6451.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6452.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6453.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6454.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6455.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6367.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6346.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6346.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6346.ExclusiveGesture(...items);
  },
};
