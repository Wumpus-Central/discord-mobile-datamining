// === Module 7019: GestureObjects ===

// Module 7019 (GestureObjects)
import _mod6919 from "module_6919" /* 6919 */;
import _mod6940 from "module_6940" /* 6940 */;
import _mod7020 from "module_7020" /* 7020 */;
import _mod7021 from "module_7021" /* 7021 */;
import _mod7022 from "module_7022" /* 7022 */;
import _mod7023 from "module_7023" /* 7023 */;
import _mod7024 from "module_7024" /* 7024 */;
import _mod7025 from "module_7025" /* 7025 */;
import _mod7026 from "module_7026" /* 7026 */;
import _mod7027 from "module_7027" /* 7027 */;
import _mod7028 from "module_7028" /* 7028 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod7020.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod7021.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod7022.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod7023.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod7024.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod7025.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod7026.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod7027.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod7028.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6940.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6919.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6919.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6919.ExclusiveGesture(...items);
  }
};