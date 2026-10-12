// === Module 6455: GestureObjects ===

// Module 6455 (GestureObjects)
import _mod6355 from "module_6355" /* 6355 */;
import _mod6376 from "module_6376" /* 6376 */;
import _mod6456 from "module_6456" /* 6456 */;
import _mod6457 from "module_6457" /* 6457 */;
import _mod6458 from "module_6458" /* 6458 */;
import _mod6459 from "module_6459" /* 6459 */;
import _mod6460 from "module_6460" /* 6460 */;
import _mod6461 from "module_6461" /* 6461 */;
import _mod6462 from "module_6462" /* 6462 */;
import _mod6463 from "module_6463" /* 6463 */;
import _mod6464 from "module_6464" /* 6464 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6456.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6457.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6458.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6459.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6460.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6461.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6462.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6463.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6464.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6376.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6355.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6355.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6355.ExclusiveGesture(...items);
  }
};