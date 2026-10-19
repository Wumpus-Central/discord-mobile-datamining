// === Module 5378: GestureObjects ===

// Module 5378 (GestureObjects)
import _mod5278 from "module_5278" /* 5278 */;
import _mod5299 from "module_5299" /* 5299 */;
import _mod5379 from "module_5379" /* 5379 */;
import _mod5380 from "module_5380" /* 5380 */;
import _mod5381 from "module_5381" /* 5381 */;
import _mod5382 from "module_5382" /* 5382 */;
import _mod5383 from "module_5383" /* 5383 */;
import _mod5384 from "module_5384" /* 5384 */;
import _mod5385 from "module_5385" /* 5385 */;
import _mod5386 from "module_5386" /* 5386 */;
import _mod5387 from "module_5387" /* 5387 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5379.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5380.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5381.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5382.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5383.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5384.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5385.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5386.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5387.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5299.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod5278.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod5278.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod5278.ExclusiveGesture(...items);
  }
};