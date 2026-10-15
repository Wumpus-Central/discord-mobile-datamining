// === Module 6675: GestureObjects ===

// Module 6675 (GestureObjects)
import _mod6575 from "module_6575" /* 6575 */;
import _mod6596 from "module_6596" /* 6596 */;
import _mod6676 from "module_6676" /* 6676 */;
import _mod6677 from "module_6677" /* 6677 */;
import _mod6678 from "module_6678" /* 6678 */;
import _mod6679 from "module_6679" /* 6679 */;
import _mod6680 from "module_6680" /* 6680 */;
import _mod6681 from "module_6681" /* 6681 */;
import _mod6682 from "module_6682" /* 6682 */;
import _mod6683 from "module_6683" /* 6683 */;
import _mod6684 from "module_6684" /* 6684 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6676.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6677.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6678.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6679.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6680.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6681.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6682.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6683.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6684.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6596.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6575.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6575.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6575.ExclusiveGesture(...items);
  }
};