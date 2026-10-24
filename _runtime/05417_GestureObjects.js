// === Module 5417: GestureObjects ===

// Module 5417 (GestureObjects)
import _mod5317 from "module_5317" /* 5317 */;
import _mod5338 from "module_5338" /* 5338 */;
import _mod5418 from "module_5418" /* 5418 */;
import _mod5419 from "module_5419" /* 5419 */;
import _mod5420 from "module_5420" /* 5420 */;
import _mod5421 from "module_5421" /* 5421 */;
import _mod5422 from "module_5422" /* 5422 */;
import _mod5423 from "module_5423" /* 5423 */;
import _mod5424 from "module_5424" /* 5424 */;
import _mod5425 from "module_5425" /* 5425 */;
import _mod5426 from "module_5426" /* 5426 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5418.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5419.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5420.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5421.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5422.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5423.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5424.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5425.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5426.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5338.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod5317.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod5317.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod5317.ExclusiveGesture(...items);
  }
};