// === Module 6446: GestureObjects ===

// Module 6446 (GestureObjects)
import _mod6346 from "module_6346" /* 6346 */;
import _mod6367 from "module_6367" /* 6367 */;
import _mod6447 from "module_6447" /* 6447 */;
import _mod6448 from "module_6448" /* 6448 */;
import _mod6449 from "module_6449" /* 6449 */;
import _mod6450 from "module_6450" /* 6450 */;
import _mod6451 from "module_6451" /* 6451 */;
import _mod6452 from "module_6452" /* 6452 */;
import _mod6453 from "module_6453" /* 6453 */;
import _mod6454 from "module_6454" /* 6454 */;
import _mod6455 from "module_6455" /* 6455 */;

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
  }
};