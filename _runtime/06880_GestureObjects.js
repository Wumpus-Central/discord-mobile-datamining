// === Module 6880: GestureObjects ===

// Module 6880 (GestureObjects)
import _mod6780 from "module_6780" /* 6780 */;
import _mod6801 from "module_6801" /* 6801 */;
import _mod6881 from "module_6881" /* 6881 */;
import _mod6882 from "module_6882" /* 6882 */;
import _mod6883 from "module_6883" /* 6883 */;
import _mod6884 from "module_6884" /* 6884 */;
import _mod6885 from "module_6885" /* 6885 */;
import _mod6886 from "module_6886" /* 6886 */;
import _mod6887 from "module_6887" /* 6887 */;
import _mod6888 from "module_6888" /* 6888 */;
import _mod6889 from "module_6889" /* 6889 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6881.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6882.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6883.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6884.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6885.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6886.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6887.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6888.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6889.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6801.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6780.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6780.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6780.ExclusiveGesture(...items);
  }
};