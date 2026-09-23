// === Module 7103: GestureObjects ===

// Module 7103 (GestureObjects)
import _mod7003 from "module_7003" /* 7003 */;
import _mod7024 from "module_7024" /* 7024 */;
import _mod7104 from "module_7104" /* 7104 */;
import _mod7105 from "module_7105" /* 7105 */;
import _mod7106 from "module_7106" /* 7106 */;
import _mod7107 from "module_7107" /* 7107 */;
import _mod7108 from "module_7108" /* 7108 */;
import _mod7109 from "module_7109" /* 7109 */;
import _mod7110 from "module_7110" /* 7110 */;
import _mod7111 from "module_7111" /* 7111 */;
import _mod7112 from "module_7112" /* 7112 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod7104.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod7105.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod7106.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod7107.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod7108.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod7109.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod7110.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod7111.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod7112.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod7024.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod7003.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod7003.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod7003.ExclusiveGesture(...items);
  }
};