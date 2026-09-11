// === Module 6846: GestureObjects ===

// Module 6846 (GestureObjects)
import _mod6746 from "module_6746" /* 6746 */;
import _mod6767 from "module_6767" /* 6767 */;
import _mod6847 from "module_6847" /* 6847 */;
import _mod6848 from "module_6848" /* 6848 */;
import _mod6849 from "module_6849" /* 6849 */;
import _mod6850 from "module_6850" /* 6850 */;
import _mod6851 from "module_6851" /* 6851 */;
import _mod6852 from "module_6852" /* 6852 */;
import _mod6853 from "module_6853" /* 6853 */;
import _mod6854 from "module_6854" /* 6854 */;
import _mod6855 from "module_6855" /* 6855 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6847.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6848.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6849.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6850.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6851.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6852.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6853.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6854.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6855.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6767.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6746.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6746.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6746.ExclusiveGesture(...items);
  }
};