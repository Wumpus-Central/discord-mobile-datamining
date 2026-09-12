// === Module 6876: GestureObjects ===

// Module 6876 (GestureObjects)
import _mod6776 from "module_6776" /* 6776 */;
import _mod6797 from "module_6797" /* 6797 */;
import _mod6877 from "module_6877" /* 6877 */;
import _mod6878 from "module_6878" /* 6878 */;
import _mod6879 from "module_6879" /* 6879 */;
import _mod6880 from "module_6880" /* 6880 */;
import _mod6881 from "module_6881" /* 6881 */;
import _mod6882 from "module_6882" /* 6882 */;
import _mod6883 from "module_6883" /* 6883 */;
import _mod6884 from "module_6884" /* 6884 */;
import _mod6885 from "module_6885" /* 6885 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6877.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6878.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6879.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6880.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6881.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6882.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6883.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6884.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6885.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6797.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6776.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6776.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6776.ExclusiveGesture(...items);
  }
};