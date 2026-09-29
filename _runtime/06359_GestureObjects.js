// === Module 6359: GestureObjects ===

// Module 6359 (GestureObjects)
import _mod6259 from "module_6259" /* 6259 */;
import _mod6280 from "module_6280" /* 6280 */;
import _mod6360 from "module_6360" /* 6360 */;
import _mod6361 from "module_6361" /* 6361 */;
import _mod6362 from "module_6362" /* 6362 */;
import _mod6363 from "module_6363" /* 6363 */;
import _mod6364 from "module_6364" /* 6364 */;
import _mod6365 from "module_6365" /* 6365 */;
import _mod6366 from "module_6366" /* 6366 */;
import _mod6367 from "module_6367" /* 6367 */;
import _mod6368 from "module_6368" /* 6368 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6360.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6361.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6362.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6363.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6364.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6365.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6366.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6367.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6368.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6280.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6259.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6259.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6259.ExclusiveGesture(...items);
  }
};