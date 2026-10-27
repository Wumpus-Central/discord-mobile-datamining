// === Module 5418: GestureObjects ===

// Module 5418 (GestureObjects)
import _mod5318 from "module_5318" /* 5318 */;
import _mod5339 from "module_5339" /* 5339 */;
import _mod5419 from "module_5419" /* 5419 */;
import _mod5420 from "module_5420" /* 5420 */;
import _mod5421 from "module_5421" /* 5421 */;
import _mod5422 from "module_5422" /* 5422 */;
import _mod5423 from "module_5423" /* 5423 */;
import _mod5424 from "module_5424" /* 5424 */;
import _mod5425 from "module_5425" /* 5425 */;
import _mod5426 from "module_5426" /* 5426 */;
import _mod5427 from "module_5427" /* 5427 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5419.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5420.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5421.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5422.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5423.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5424.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5425.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5426.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5427.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5339.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod5318.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod5318.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod5318.ExclusiveGesture(...items);
  }
};