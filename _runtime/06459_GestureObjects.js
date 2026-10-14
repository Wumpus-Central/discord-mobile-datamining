// === Module 6459: GestureObjects ===

// Module 6459 (GestureObjects)
import _mod6359 from "module_6359" /* 6359 */;
import _mod6380 from "module_6380" /* 6380 */;
import _mod6460 from "module_6460" /* 6460 */;
import _mod6461 from "module_6461" /* 6461 */;
import _mod6462 from "module_6462" /* 6462 */;
import _mod6463 from "module_6463" /* 6463 */;
import _mod6464 from "module_6464" /* 6464 */;
import _mod6465 from "module_6465" /* 6465 */;
import _mod6466 from "module_6466" /* 6466 */;
import _mod6467 from "module_6467" /* 6467 */;
import _mod6468 from "module_6468" /* 6468 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6460.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6461.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6462.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6463.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6464.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6465.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6466.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6467.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6468.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6380.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6359.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6359.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6359.ExclusiveGesture(...items);
  }
};