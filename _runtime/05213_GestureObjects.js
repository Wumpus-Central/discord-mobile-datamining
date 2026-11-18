// === Module 5213: GestureObjects ===

// Module 5213 (GestureObjects)
import _mod5102 from "module_5102" /* 5102 */;
import _mod5125 from "module_5125" /* 5125 */;
import _mod5214 from "module_5214" /* 5214 */;
import _mod5215 from "module_5215" /* 5215 */;
import _mod5216 from "module_5216" /* 5216 */;
import _mod5217 from "module_5217" /* 5217 */;
import _mod5218 from "module_5218" /* 5218 */;
import _mod5219 from "module_5219" /* 5219 */;
import _mod5220 from "module_5220" /* 5220 */;
import _mod5221 from "module_5221" /* 5221 */;
import _mod5222 from "module_5222" /* 5222 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5214.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5215.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5216.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5217.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5218.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5219.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5220.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5221.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5222.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5125.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5102.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5102.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5102.ExclusiveGesture(...items);
  }
};