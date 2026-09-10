// === Module 6825: GestureObjects ===

// Module 6825 (GestureObjects)
import _mod6725 from "module_6725" /* 6725 */;
import _mod6746 from "module_6746" /* 6746 */;
import _mod6826 from "module_6826" /* 6826 */;
import _mod6827 from "module_6827" /* 6827 */;
import _mod6828 from "module_6828" /* 6828 */;
import _mod6829 from "module_6829" /* 6829 */;
import _mod6830 from "module_6830" /* 6830 */;
import _mod6831 from "module_6831" /* 6831 */;
import _mod6832 from "module_6832" /* 6832 */;
import _mod6833 from "module_6833" /* 6833 */;
import _mod6834 from "module_6834" /* 6834 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6826.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6827.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6828.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6829.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6830.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6831.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6832.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6833.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6834.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6746.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6725.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6725.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6725.ExclusiveGesture(...items);
  }
};