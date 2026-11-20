// === Module 5184: GestureObjects ===

// Module 5184 (GestureObjects)
import _mod5073 from "module_5073" /* 5073 */;
import _mod5096 from "module_5096" /* 5096 */;
import _mod5185 from "module_5185" /* 5185 */;
import _mod5186 from "module_5186" /* 5186 */;
import _mod5187 from "module_5187" /* 5187 */;
import _mod5188 from "module_5188" /* 5188 */;
import _mod5189 from "module_5189" /* 5189 */;
import _mod5190 from "module_5190" /* 5190 */;
import _mod5191 from "module_5191" /* 5191 */;
import _mod5192 from "module_5192" /* 5192 */;
import _mod5193 from "module_5193" /* 5193 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5185.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5186.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5187.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5188.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5189.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5190.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5191.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5192.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5193.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5096.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5073.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5073.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5073.ExclusiveGesture(...items);
  }
};