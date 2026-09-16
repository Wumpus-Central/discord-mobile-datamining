// === Module 6883: GestureObjects ===

// Module 6883 (GestureObjects)
import _mod6783 from "module_6783" /* 6783 */;
import _mod6804 from "module_6804" /* 6804 */;
import _mod6884 from "module_6884" /* 6884 */;
import _mod6885 from "module_6885" /* 6885 */;
import _mod6886 from "module_6886" /* 6886 */;
import _mod6887 from "module_6887" /* 6887 */;
import _mod6888 from "module_6888" /* 6888 */;
import _mod6889 from "module_6889" /* 6889 */;
import _mod6890 from "module_6890" /* 6890 */;
import _mod6891 from "module_6891" /* 6891 */;
import _mod6892 from "module_6892" /* 6892 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6884.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6885.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6886.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6887.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6888.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6889.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6890.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6891.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6892.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6804.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6783.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6783.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6783.ExclusiveGesture(...items);
  }
};