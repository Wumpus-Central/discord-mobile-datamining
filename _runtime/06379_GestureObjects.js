// === Module 6379: GestureObjects ===

// Module 6379 (GestureObjects)
import _mod6279 from "module_6279" /* 6279 */;
import _mod6300 from "module_6300" /* 6300 */;
import _mod6380 from "module_6380" /* 6380 */;
import _mod6381 from "module_6381" /* 6381 */;
import _mod6382 from "module_6382" /* 6382 */;
import _mod6383 from "module_6383" /* 6383 */;
import _mod6384 from "module_6384" /* 6384 */;
import _mod6385 from "module_6385" /* 6385 */;
import _mod6386 from "module_6386" /* 6386 */;
import _mod6387 from "module_6387" /* 6387 */;
import _mod6388 from "module_6388" /* 6388 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6380.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6381.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6382.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6383.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6384.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6385.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6386.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6387.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6388.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6300.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6279.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6279.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6279.ExclusiveGesture(...items);
  }
};