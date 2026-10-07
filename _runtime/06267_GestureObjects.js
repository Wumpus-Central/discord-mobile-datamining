// === Module 6267: GestureObjects ===

// Module 6267 (GestureObjects)
import _mod6167 from "module_6167" /* 6167 */;
import _mod6188 from "module_6188" /* 6188 */;
import _mod6268 from "module_6268" /* 6268 */;
import _mod6269 from "module_6269" /* 6269 */;
import _mod6270 from "module_6270" /* 6270 */;
import _mod6271 from "module_6271" /* 6271 */;
import _mod6272 from "module_6272" /* 6272 */;
import _mod6273 from "module_6273" /* 6273 */;
import _mod6274 from "module_6274" /* 6274 */;
import _mod6275 from "module_6275" /* 6275 */;
import _mod6276 from "module_6276" /* 6276 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6268.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6269.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6270.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6271.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6272.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6273.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6274.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6275.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6276.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6188.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6167.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6167.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6167.ExclusiveGesture(...items);
  }
};