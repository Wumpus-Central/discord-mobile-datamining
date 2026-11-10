// === Module 5552: GestureObjects ===

// Module 5552 (GestureObjects)
import _mod5441 from "module_5441" /* 5441 */;
import _mod5464 from "module_5464" /* 5464 */;
import _mod5553 from "module_5553" /* 5553 */;
import _mod5554 from "module_5554" /* 5554 */;
import _mod5555 from "module_5555" /* 5555 */;
import _mod5556 from "module_5556" /* 5556 */;
import _mod5557 from "module_5557" /* 5557 */;
import _mod5558 from "module_5558" /* 5558 */;
import _mod5559 from "module_5559" /* 5559 */;
import _mod5560 from "module_5560" /* 5560 */;
import _mod5561 from "module_5561" /* 5561 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5553.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5554.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5555.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5556.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5557.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5558.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5559.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5560.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5561.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5464.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5441.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5441.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5441.ExclusiveGesture(...items);
  }
};