// === Module 5399: GestureObjects ===

// Module 5399 (GestureObjects)
import _mod5299 from "module_5299" /* 5299 */;
import _mod5320 from "module_5320" /* 5320 */;
import _mod5400 from "module_5400" /* 5400 */;
import _mod5401 from "module_5401" /* 5401 */;
import _mod5402 from "module_5402" /* 5402 */;
import _mod5403 from "module_5403" /* 5403 */;
import _mod5404 from "module_5404" /* 5404 */;
import _mod5405 from "module_5405" /* 5405 */;
import _mod5406 from "module_5406" /* 5406 */;
import _mod5407 from "module_5407" /* 5407 */;
import _mod5408 from "module_5408" /* 5408 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5400.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5401.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5402.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5403.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5404.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5405.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5406.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5407.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5408.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5320.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod5299.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod5299.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod5299.ExclusiveGesture(...items);
  }
};