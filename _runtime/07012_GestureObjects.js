// === Module 7012: GestureObjects ===

// Module 7012 (GestureObjects)
import _mod6912 from "module_6912" /* 6912 */;
import _mod6933 from "module_6933" /* 6933 */;
import _mod7013 from "module_7013" /* 7013 */;
import _mod7014 from "module_7014" /* 7014 */;
import _mod7015 from "module_7015" /* 7015 */;
import _mod7016 from "module_7016" /* 7016 */;
import _mod7017 from "module_7017" /* 7017 */;
import _mod7018 from "module_7018" /* 7018 */;
import _mod7019 from "module_7019" /* 7019 */;
import _mod7020 from "module_7020" /* 7020 */;
import _mod7021 from "module_7021" /* 7021 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod7013.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod7014.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod7015.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod7016.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod7017.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod7018.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod7019.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod7020.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod7021.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6933.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6912.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6912.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6912.ExclusiveGesture(...items);
  }
};