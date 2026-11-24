// === Module 5307: GestureObjects ===

// Module 5307 (GestureObjects)
import _mod5196 from "module_5196" /* 5196 */;
import _mod5219 from "module_5219" /* 5219 */;
import _mod5308 from "module_5308" /* 5308 */;
import _mod5309 from "module_5309" /* 5309 */;
import _mod5310 from "module_5310" /* 5310 */;
import _mod5311 from "module_5311" /* 5311 */;
import _mod5312 from "module_5312" /* 5312 */;
import _mod5313 from "module_5313" /* 5313 */;
import _mod5314 from "module_5314" /* 5314 */;
import _mod5315 from "module_5315" /* 5315 */;
import _mod5316 from "module_5316" /* 5316 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5308.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5309.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5310.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5311.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5312.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5313.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5314.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5315.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5316.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5219.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5196.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5196.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5196.ExclusiveGesture(...items);
  }
};