// === Module 5403: GestureObjects ===

// Module 5403 (GestureObjects)
import _mod5303 from "module_5303" /* 5303 */;
import _mod5324 from "module_5324" /* 5324 */;
import _mod5404 from "module_5404" /* 5404 */;
import _mod5405 from "module_5405" /* 5405 */;
import _mod5406 from "module_5406" /* 5406 */;
import _mod5407 from "module_5407" /* 5407 */;
import _mod5408 from "module_5408" /* 5408 */;
import _mod5409 from "module_5409" /* 5409 */;
import _mod5410 from "module_5410" /* 5410 */;
import _mod5411 from "module_5411" /* 5411 */;
import _mod5412 from "module_5412" /* 5412 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5404.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5405.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5406.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5407.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5408.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5409.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5410.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5411.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5412.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5324.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod5303.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod5303.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod5303.ExclusiveGesture(...items);
  }
};