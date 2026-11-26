// === Module 5433: GestureObjects ===

// Module 5433 (GestureObjects)
import _mod5322 from "module_5322" /* 5322 */;
import _mod5345 from "module_5345" /* 5345 */;
import _mod5434 from "module_5434" /* 5434 */;
import _mod5435 from "module_5435" /* 5435 */;
import _mod5436 from "module_5436" /* 5436 */;
import _mod5437 from "module_5437" /* 5437 */;
import _mod5438 from "module_5438" /* 5438 */;
import _mod5439 from "module_5439" /* 5439 */;
import _mod5440 from "module_5440" /* 5440 */;
import _mod5441 from "module_5441" /* 5441 */;
import _mod5442 from "module_5442" /* 5442 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5434.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5435.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5436.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5437.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5438.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5439.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5440.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5441.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5442.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5345.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5322.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5322.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5322.ExclusiveGesture(...items);
  }
};