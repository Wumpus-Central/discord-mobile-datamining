// === Module 5402: GestureObjects ===

// Module 5402 (GestureObjects)
import _mod5291 from "module_5291" /* 5291 */;
import _mod5314 from "module_5314" /* 5314 */;
import _mod5403 from "module_5403" /* 5403 */;
import _mod5404 from "module_5404" /* 5404 */;
import _mod5405 from "module_5405" /* 5405 */;
import _mod5406 from "module_5406" /* 5406 */;
import _mod5407 from "module_5407" /* 5407 */;
import _mod5408 from "module_5408" /* 5408 */;
import _mod5409 from "module_5409" /* 5409 */;
import _mod5410 from "module_5410" /* 5410 */;
import _mod5411 from "module_5411" /* 5411 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5403.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5404.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5405.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5406.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5407.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5408.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5409.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5410.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5411.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5314.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5291.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5291.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5291.ExclusiveGesture(...items);
  }
};