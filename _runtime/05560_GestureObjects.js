// === Module 5560: GestureObjects ===

// Module 5560 (GestureObjects)
import _mod5449 from "module_5449" /* 5449 */;
import _mod5472 from "module_5472" /* 5472 */;
import _mod5561 from "module_5561" /* 5561 */;
import _mod5562 from "module_5562" /* 5562 */;
import _mod5563 from "module_5563" /* 5563 */;
import _mod5564 from "module_5564" /* 5564 */;
import _mod5565 from "module_5565" /* 5565 */;
import _mod5566 from "module_5566" /* 5566 */;
import _mod5567 from "module_5567" /* 5567 */;
import _mod5568 from "module_5568" /* 5568 */;
import _mod5569 from "module_5569" /* 5569 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5561.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5562.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5563.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5564.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5565.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5566.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5567.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5568.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5569.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5472.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5449.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5449.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5449.ExclusiveGesture(...items);
  }
};