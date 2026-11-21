// === Module 5303: GestureObjects ===

// Module 5303 (GestureObjects)
import _mod5192 from "module_5192" /* 5192 */;
import _mod5215 from "module_5215" /* 5215 */;
import _mod5304 from "module_5304" /* 5304 */;
import _mod5305 from "module_5305" /* 5305 */;
import _mod5306 from "module_5306" /* 5306 */;
import _mod5307 from "module_5307" /* 5307 */;
import _mod5308 from "module_5308" /* 5308 */;
import _mod5309 from "module_5309" /* 5309 */;
import _mod5310 from "module_5310" /* 5310 */;
import _mod5311 from "module_5311" /* 5311 */;
import _mod5312 from "module_5312" /* 5312 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5304.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5305.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5306.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5307.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5308.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5309.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5310.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5311.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5312.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5215.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5192.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5192.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5192.ExclusiveGesture(...items);
  }
};