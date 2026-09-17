// === Module 6886: GestureObjects ===

// Module 6886 (GestureObjects)
import _mod6786 from "module_6786" /* 6786 */;
import _mod6807 from "module_6807" /* 6807 */;
import _mod6887 from "module_6887" /* 6887 */;
import _mod6888 from "module_6888" /* 6888 */;
import _mod6889 from "module_6889" /* 6889 */;
import _mod6890 from "module_6890" /* 6890 */;
import _mod6891 from "module_6891" /* 6891 */;
import _mod6892 from "module_6892" /* 6892 */;
import _mod6893 from "module_6893" /* 6893 */;
import _mod6894 from "module_6894" /* 6894 */;
import _mod6895 from "module_6895" /* 6895 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6887.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6888.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6889.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6890.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6891.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6892.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6893.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6894.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6895.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6807.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6786.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6786.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6786.ExclusiveGesture(...items);
  }
};