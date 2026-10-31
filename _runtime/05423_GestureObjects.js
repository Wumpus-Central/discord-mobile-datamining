// === Module 5423: GestureObjects ===

// Module 5423 (GestureObjects)
import _mod5323 from "module_5323" /* 5323 */;
import _mod5344 from "module_5344" /* 5344 */;
import _mod5424 from "module_5424" /* 5424 */;
import _mod5425 from "module_5425" /* 5425 */;
import _mod5426 from "module_5426" /* 5426 */;
import _mod5427 from "module_5427" /* 5427 */;
import _mod5428 from "module_5428" /* 5428 */;
import _mod5429 from "module_5429" /* 5429 */;
import _mod5430 from "module_5430" /* 5430 */;
import _mod5431 from "module_5431" /* 5431 */;
import _mod5432 from "module_5432" /* 5432 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5424.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5425.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5426.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5427.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5428.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5429.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5430.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5431.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5432.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5344.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod5323.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod5323.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod5323.ExclusiveGesture(...items);
  }
};