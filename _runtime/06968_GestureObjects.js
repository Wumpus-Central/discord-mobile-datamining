// === Module 6968: GestureObjects ===

// Module 6968 (GestureObjects)
import _mod6868 from "module_6868" /* 6868 */;
import _mod6889 from "module_6889" /* 6889 */;
import _mod6969 from "module_6969" /* 6969 */;
import _mod6970 from "module_6970" /* 6970 */;
import _mod6971 from "module_6971" /* 6971 */;
import _mod6972 from "module_6972" /* 6972 */;
import _mod6973 from "module_6973" /* 6973 */;
import _mod6974 from "module_6974" /* 6974 */;
import _mod6975 from "module_6975" /* 6975 */;
import _mod6976 from "module_6976" /* 6976 */;
import _mod6977 from "module_6977" /* 6977 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6969.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6970.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6971.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6972.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6973.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6974.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6975.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6976.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6977.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6889.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6868.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6868.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6868.ExclusiveGesture(...items);
  }
};