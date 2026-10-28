// === Module 5453: GestureObjects ===

// Module 5453 (GestureObjects)
import _mod5353 from "module_5353" /* 5353 */;
import _mod5374 from "module_5374" /* 5374 */;
import _mod5454 from "module_5454" /* 5454 */;
import _mod5455 from "module_5455" /* 5455 */;
import _mod5456 from "module_5456" /* 5456 */;
import _mod5457 from "module_5457" /* 5457 */;
import _mod5458 from "module_5458" /* 5458 */;
import _mod5459 from "module_5459" /* 5459 */;
import _mod5460 from "module_5460" /* 5460 */;
import _mod5461 from "module_5461" /* 5461 */;
import _mod5462 from "module_5462" /* 5462 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5454.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5455.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5456.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5457.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5458.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5459.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5460.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5461.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5462.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5374.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod5353.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod5353.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod5353.ExclusiveGesture(...items);
  }
};