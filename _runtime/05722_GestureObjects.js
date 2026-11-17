// === Module 5722: GestureObjects ===

// Module 5722 (GestureObjects)
import _mod5611 from "module_5611" /* 5611 */;
import _mod5634 from "module_5634" /* 5634 */;
import _mod5723 from "module_5723" /* 5723 */;
import _mod5724 from "module_5724" /* 5724 */;
import _mod5725 from "module_5725" /* 5725 */;
import _mod5726 from "module_5726" /* 5726 */;
import _mod5727 from "module_5727" /* 5727 */;
import _mod5728 from "module_5728" /* 5728 */;
import _mod5729 from "module_5729" /* 5729 */;
import _mod5730 from "module_5730" /* 5730 */;
import _mod5731 from "module_5731" /* 5731 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5723.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5724.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5725.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5726.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5727.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5728.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5729.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5730.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5731.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5634.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5611.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5611.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5611.ExclusiveGesture(...items);
  }
};