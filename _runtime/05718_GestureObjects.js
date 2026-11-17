// === Module 5718: GestureObjects ===

// Module 5718 (GestureObjects)
import _mod5607 from "module_5607" /* 5607 */;
import _mod5630 from "module_5630" /* 5630 */;
import _mod5719 from "module_5719" /* 5719 */;
import _mod5720 from "module_5720" /* 5720 */;
import _mod5721 from "module_5721" /* 5721 */;
import _mod5722 from "module_5722" /* 5722 */;
import _mod5723 from "module_5723" /* 5723 */;
import _mod5724 from "module_5724" /* 5724 */;
import _mod5725 from "module_5725" /* 5725 */;
import _mod5726 from "module_5726" /* 5726 */;
import _mod5727 from "module_5727" /* 5727 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5719.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5720.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5721.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5722.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5723.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5724.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5725.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5726.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5727.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5630.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5607.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5607.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5607.ExclusiveGesture(...items);
  }
};