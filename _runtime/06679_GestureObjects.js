// === Module 6679: GestureObjects ===

// Module 6679 (GestureObjects)
import _mod6579 from "module_6579" /* 6579 */;
import _mod6600 from "module_6600" /* 6600 */;
import _mod6680 from "module_6680" /* 6680 */;
import _mod6681 from "module_6681" /* 6681 */;
import _mod6682 from "module_6682" /* 6682 */;
import _mod6683 from "module_6683" /* 6683 */;
import _mod6684 from "module_6684" /* 6684 */;
import _mod6685 from "module_6685" /* 6685 */;
import _mod6686 from "module_6686" /* 6686 */;
import _mod6687 from "module_6687" /* 6687 */;
import _mod6688 from "module_6688" /* 6688 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6680.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6681.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6682.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6683.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6684.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6685.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6686.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6687.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6688.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6600.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6579.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6579.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6579.ExclusiveGesture(...items);
  }
};