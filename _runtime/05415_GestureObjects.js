// === Module 5415: GestureObjects ===

// Module 5415 (GestureObjects)
import _mod5315 from "module_5315" /* 5315 */;
import _mod5336 from "module_5336" /* 5336 */;
import _mod5416 from "module_5416" /* 5416 */;
import _mod5417 from "module_5417" /* 5417 */;
import _mod5418 from "module_5418" /* 5418 */;
import _mod5419 from "module_5419" /* 5419 */;
import _mod5420 from "module_5420" /* 5420 */;
import _mod5421 from "module_5421" /* 5421 */;
import _mod5422 from "module_5422" /* 5422 */;
import _mod5423 from "module_5423" /* 5423 */;
import _mod5424 from "module_5424" /* 5424 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5416.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5417.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5418.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5419.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5420.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5421.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5422.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5423.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5424.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5336.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod5315.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod5315.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod5315.ExclusiveGesture(...items);
  }
};