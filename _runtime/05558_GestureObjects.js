// === Module 5558: GestureObjects ===

// Module 5558 (GestureObjects)
import _mod5447 from "module_5447" /* 5447 */;
import _mod5470 from "module_5470" /* 5470 */;
import _mod5559 from "module_5559" /* 5559 */;
import _mod5560 from "module_5560" /* 5560 */;
import _mod5561 from "module_5561" /* 5561 */;
import _mod5562 from "module_5562" /* 5562 */;
import _mod5563 from "module_5563" /* 5563 */;
import _mod5564 from "module_5564" /* 5564 */;
import _mod5565 from "module_5565" /* 5565 */;
import _mod5566 from "module_5566" /* 5566 */;
import _mod5567 from "module_5567" /* 5567 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5559.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5560.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5561.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5562.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5563.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5564.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5565.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5566.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5567.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5470.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5447.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5447.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5447.ExclusiveGesture(...items);
  }
};