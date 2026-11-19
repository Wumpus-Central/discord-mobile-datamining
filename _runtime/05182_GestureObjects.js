// === Module 5182: GestureObjects ===

// Module 5182 (GestureObjects)
import _mod5071 from "module_5071" /* 5071 */;
import _mod5094 from "module_5094" /* 5094 */;
import _mod5183 from "module_5183" /* 5183 */;
import _mod5184 from "module_5184" /* 5184 */;
import _mod5185 from "module_5185" /* 5185 */;
import _mod5186 from "module_5186" /* 5186 */;
import _mod5187 from "module_5187" /* 5187 */;
import _mod5188 from "module_5188" /* 5188 */;
import _mod5189 from "module_5189" /* 5189 */;
import _mod5190 from "module_5190" /* 5190 */;
import _mod5191 from "module_5191" /* 5191 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5183.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5184.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5185.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5186.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5187.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5188.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5189.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5190.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5191.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5094.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5071.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5071.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5071.ExclusiveGesture(...items);
  }
};