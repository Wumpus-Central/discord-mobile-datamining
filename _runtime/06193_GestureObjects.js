// === Module 6193: GestureObjects ===

// Module 6193 (GestureObjects)
import _mod6093 from "module_6093" /* 6093 */;
import _mod6114 from "module_6114" /* 6114 */;
import _mod6194 from "module_6194" /* 6194 */;
import _mod6195 from "module_6195" /* 6195 */;
import _mod6196 from "module_6196" /* 6196 */;
import _mod6197 from "module_6197" /* 6197 */;
import _mod6198 from "module_6198" /* 6198 */;
import _mod6199 from "module_6199" /* 6199 */;
import _mod6200 from "module_6200" /* 6200 */;
import _mod6201 from "module_6201" /* 6201 */;
import _mod6202 from "module_6202" /* 6202 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6194.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6195.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6196.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6197.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6198.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6199.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6200.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6201.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6202.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6114.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6093.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6093.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6093.ExclusiveGesture(...items);
  }
};