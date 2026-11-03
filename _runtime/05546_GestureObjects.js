// === Module 5546: GestureObjects ===

// Module 5546 (GestureObjects)
import _mod5446 from "module_5446" /* 5446 */;
import _mod5467 from "module_5467" /* 5467 */;
import _mod5547 from "module_5547" /* 5547 */;
import _mod5548 from "module_5548" /* 5548 */;
import _mod5549 from "module_5549" /* 5549 */;
import _mod5550 from "module_5550" /* 5550 */;
import _mod5551 from "module_5551" /* 5551 */;
import _mod5552 from "module_5552" /* 5552 */;
import _mod5553 from "module_5553" /* 5553 */;
import _mod5554 from "module_5554" /* 5554 */;
import _mod5555 from "module_5555" /* 5555 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5547.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5548.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5549.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5550.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5551.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5552.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5553.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5554.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5555.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5467.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5446.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5446.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5446.ExclusiveGesture(...items);
  }
};