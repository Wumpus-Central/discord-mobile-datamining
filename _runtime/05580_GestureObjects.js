// === Module 5580: GestureObjects ===

// Module 5580 (GestureObjects)
import _mod5469 from "module_5469" /* 5469 */;
import _mod5492 from "module_5492" /* 5492 */;
import _mod5581 from "module_5581" /* 5581 */;
import _mod5582 from "module_5582" /* 5582 */;
import _mod5583 from "module_5583" /* 5583 */;
import _mod5584 from "module_5584" /* 5584 */;
import _mod5585 from "module_5585" /* 5585 */;
import _mod5586 from "module_5586" /* 5586 */;
import _mod5587 from "module_5587" /* 5587 */;
import _mod5588 from "module_5588" /* 5588 */;
import _mod5589 from "module_5589" /* 5589 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5581.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5582.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5583.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5584.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5585.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5586.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5587.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5588.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5589.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5492.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5469.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5469.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5469.ExclusiveGesture(...items);
  }
};