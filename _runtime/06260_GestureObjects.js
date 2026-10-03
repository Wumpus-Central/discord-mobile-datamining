// === Module 6260: GestureObjects ===

// Module 6260 (GestureObjects)
import _mod6160 from "module_6160" /* 6160 */;
import _mod6181 from "module_6181" /* 6181 */;
import _mod6261 from "module_6261" /* 6261 */;
import _mod6262 from "module_6262" /* 6262 */;
import _mod6263 from "module_6263" /* 6263 */;
import _mod6264 from "module_6264" /* 6264 */;
import _mod6265 from "module_6265" /* 6265 */;
import _mod6266 from "module_6266" /* 6266 */;
import _mod6267 from "module_6267" /* 6267 */;
import _mod6268 from "module_6268" /* 6268 */;
import _mod6269 from "module_6269" /* 6269 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6261.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6262.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6263.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6264.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6265.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6266.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6267.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6268.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6269.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6181.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6160.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6160.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6160.ExclusiveGesture(...items);
  }
};