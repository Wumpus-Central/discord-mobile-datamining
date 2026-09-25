// === Module 6188: GestureObjects ===

// Module 6188 (GestureObjects)
import _mod6088 from "module_6088" /* 6088 */;
import _mod6109 from "module_6109" /* 6109 */;
import _mod6189 from "module_6189" /* 6189 */;
import _mod6190 from "module_6190" /* 6190 */;
import _mod6191 from "module_6191" /* 6191 */;
import _mod6192 from "module_6192" /* 6192 */;
import _mod6193 from "module_6193" /* 6193 */;
import _mod6194 from "module_6194" /* 6194 */;
import _mod6195 from "module_6195" /* 6195 */;
import _mod6196 from "module_6196" /* 6196 */;
import _mod6197 from "module_6197" /* 6197 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6189.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6190.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6191.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6192.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6193.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6194.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6195.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6196.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6197.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6109.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6088.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6088.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6088.ExclusiveGesture(...items);
  }
};