// === Module 6732: GestureObjects ===

// Module 6732 (GestureObjects)
import _mod6632 from "module_6632" /* 6632 */;
import _mod6653 from "module_6653" /* 6653 */;
import _mod6733 from "module_6733" /* 6733 */;
import _mod6734 from "module_6734" /* 6734 */;
import _mod6735 from "module_6735" /* 6735 */;
import _mod6736 from "module_6736" /* 6736 */;
import _mod6737 from "module_6737" /* 6737 */;
import _mod6738 from "module_6738" /* 6738 */;
import _mod6739 from "module_6739" /* 6739 */;
import _mod6740 from "module_6740" /* 6740 */;
import _mod6741 from "module_6741" /* 6741 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6733.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6734.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6735.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6736.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6737.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6738.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6739.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6740.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6741.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6653.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6632.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6632.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6632.ExclusiveGesture(...items);
  }
};