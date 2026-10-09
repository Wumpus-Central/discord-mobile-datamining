// === Module 6453: GestureObjects ===

// Module 6453 (GestureObjects)
import _mod6353 from "module_6353" /* 6353 */;
import _mod6374 from "module_6374" /* 6374 */;
import _mod6454 from "module_6454" /* 6454 */;
import _mod6455 from "module_6455" /* 6455 */;
import _mod6456 from "module_6456" /* 6456 */;
import _mod6457 from "module_6457" /* 6457 */;
import _mod6458 from "module_6458" /* 6458 */;
import _mod6459 from "module_6459" /* 6459 */;
import _mod6460 from "module_6460" /* 6460 */;
import _mod6461 from "module_6461" /* 6461 */;
import _mod6462 from "module_6462" /* 6462 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6454.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6455.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6456.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6457.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6458.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6459.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6460.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6461.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6462.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6374.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6353.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6353.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6353.ExclusiveGesture(...items);
  }
};