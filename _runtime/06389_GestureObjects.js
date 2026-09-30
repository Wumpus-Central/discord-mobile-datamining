// === Module 6389: GestureObjects ===

// Module 6389 (GestureObjects)
import _mod6289 from "module_6289" /* 6289 */;
import _mod6310 from "module_6310" /* 6310 */;
import _mod6390 from "module_6390" /* 6390 */;
import _mod6391 from "module_6391" /* 6391 */;
import _mod6392 from "module_6392" /* 6392 */;
import _mod6393 from "module_6393" /* 6393 */;
import _mod6394 from "module_6394" /* 6394 */;
import _mod6395 from "module_6395" /* 6395 */;
import _mod6396 from "module_6396" /* 6396 */;
import _mod6397 from "module_6397" /* 6397 */;
import _mod6398 from "module_6398" /* 6398 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6390.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6391.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6392.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6393.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6394.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6395.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6396.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6397.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6398.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6310.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6289.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6289.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6289.ExclusiveGesture(...items);
  }
};