// === Module 7105: GestureObjects ===

// Module 7105 (GestureObjects)
import _mod7005 from "module_7005" /* 7005 */;
import _mod7026 from "module_7026" /* 7026 */;
import _mod7106 from "module_7106" /* 7106 */;
import _mod7107 from "module_7107" /* 7107 */;
import _mod7108 from "module_7108" /* 7108 */;
import _mod7109 from "module_7109" /* 7109 */;
import _mod7110 from "module_7110" /* 7110 */;
import _mod7111 from "module_7111" /* 7111 */;
import _mod7112 from "module_7112" /* 7112 */;
import _mod7113 from "module_7113" /* 7113 */;
import _mod7114 from "module_7114" /* 7114 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod7106.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod7107.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod7108.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod7109.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod7110.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod7111.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod7112.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod7113.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod7114.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod7026.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod7005.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod7005.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod7005.ExclusiveGesture(...items);
  }
};