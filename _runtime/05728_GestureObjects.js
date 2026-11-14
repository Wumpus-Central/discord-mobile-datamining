// === Module 5728: GestureObjects ===

// Module 5728 (GestureObjects)
import _mod5617 from "module_5617" /* 5617 */;
import _mod5640 from "module_5640" /* 5640 */;
import _mod5729 from "module_5729" /* 5729 */;
import _mod5730 from "module_5730" /* 5730 */;
import _mod5731 from "module_5731" /* 5731 */;
import _mod5732 from "module_5732" /* 5732 */;
import _mod5733 from "module_5733" /* 5733 */;
import _mod5734 from "module_5734" /* 5734 */;
import _mod5735 from "module_5735" /* 5735 */;
import _mod5736 from "module_5736" /* 5736 */;
import _mod5737 from "module_5737" /* 5737 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5729.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5730.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5731.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5732.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5733.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5734.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5735.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5736.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5737.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5640.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5617.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5617.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5617.ExclusiveGesture(...items);
  }
};