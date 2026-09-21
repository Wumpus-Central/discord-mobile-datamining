// === Module 7017: GestureObjects ===

// Module 7017 (GestureObjects)
import _mod6917 from "module_6917" /* 6917 */;
import _mod6938 from "module_6938" /* 6938 */;
import _mod7018 from "module_7018" /* 7018 */;
import _mod7019 from "module_7019" /* 7019 */;
import _mod7020 from "module_7020" /* 7020 */;
import _mod7021 from "module_7021" /* 7021 */;
import _mod7022 from "module_7022" /* 7022 */;
import _mod7023 from "module_7023" /* 7023 */;
import _mod7024 from "module_7024" /* 7024 */;
import _mod7025 from "module_7025" /* 7025 */;
import _mod7026 from "module_7026" /* 7026 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod7018.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod7019.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod7020.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod7021.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod7022.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod7023.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod7024.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod7025.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod7026.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6938.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6917.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6917.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6917.ExclusiveGesture(...items);
  }
};