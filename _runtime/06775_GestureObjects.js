// === Module 6775: GestureObjects ===

// Module 6775 (GestureObjects)
import _mod6675 from "module_6675" /* 6675 */;
import _mod6696 from "module_6696" /* 6696 */;
import _mod6776 from "module_6776" /* 6776 */;
import _mod6777 from "module_6777" /* 6777 */;
import _mod6778 from "module_6778" /* 6778 */;
import _mod6779 from "module_6779" /* 6779 */;
import _mod6780 from "module_6780" /* 6780 */;
import _mod6781 from "module_6781" /* 6781 */;
import _mod6782 from "module_6782" /* 6782 */;
import _mod6783 from "module_6783" /* 6783 */;
import _mod6784 from "module_6784" /* 6784 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6776.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6777.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6778.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6779.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6780.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6781.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6782.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6783.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6784.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6696.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6675.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6675.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6675.ExclusiveGesture(...items);
  }
};