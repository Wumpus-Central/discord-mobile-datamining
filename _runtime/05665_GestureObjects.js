// === Module 5665: GestureObjects ===

// Module 5665 (GestureObjects)
import _mod5554 from "module_5554" /* 5554 */;
import _mod5577 from "module_5577" /* 5577 */;
import _mod5666 from "module_5666" /* 5666 */;
import _mod5667 from "module_5667" /* 5667 */;
import _mod5668 from "module_5668" /* 5668 */;
import _mod5669 from "module_5669" /* 5669 */;
import _mod5670 from "module_5670" /* 5670 */;
import _mod5671 from "module_5671" /* 5671 */;
import _mod5672 from "module_5672" /* 5672 */;
import _mod5673 from "module_5673" /* 5673 */;
import _mod5674 from "module_5674" /* 5674 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5666.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5667.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5668.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5669.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5670.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5671.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5672.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5673.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5674.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5577.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5554.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5554.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5554.ExclusiveGesture(...items);
  }
};