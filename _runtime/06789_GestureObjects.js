// === Module 6789: GestureObjects ===

// Module 6789 (GestureObjects)
import _mod6689 from "module_6689" /* 6689 */;
import _mod6710 from "module_6710" /* 6710 */;
import _mod6790 from "module_6790" /* 6790 */;
import _mod6791 from "module_6791" /* 6791 */;
import _mod6792 from "module_6792" /* 6792 */;
import _mod6793 from "module_6793" /* 6793 */;
import _mod6794 from "module_6794" /* 6794 */;
import _mod6795 from "module_6795" /* 6795 */;
import _mod6796 from "module_6796" /* 6796 */;
import _mod6797 from "module_6797" /* 6797 */;
import _mod6798 from "module_6798" /* 6798 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6790.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6791.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6792.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6793.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6794.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6795.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6796.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6797.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6798.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6710.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6689.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6689.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6689.ExclusiveGesture(...items);
  }
};