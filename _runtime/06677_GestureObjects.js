// === Module 6677: GestureObjects ===

// Module 6677 (GestureObjects)
import _mod6577 from "module_6577" /* 6577 */;
import _mod6598 from "module_6598" /* 6598 */;
import _mod6678 from "module_6678" /* 6678 */;
import _mod6679 from "module_6679" /* 6679 */;
import _mod6680 from "module_6680" /* 6680 */;
import _mod6681 from "module_6681" /* 6681 */;
import _mod6682 from "module_6682" /* 6682 */;
import _mod6683 from "module_6683" /* 6683 */;
import _mod6684 from "module_6684" /* 6684 */;
import _mod6685 from "module_6685" /* 6685 */;
import _mod6686 from "module_6686" /* 6686 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6678.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6679.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6680.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6681.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6682.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6683.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6684.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6685.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6686.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6598.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6577.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6577.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6577.ExclusiveGesture(...items);
  }
};