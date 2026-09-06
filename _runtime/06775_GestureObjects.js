// _runtime/06775_GestureObjects.js
import _mod6675 from "metro/06675__.js";
import _mod6696 from "metro/06696__.js";
import _mod6776 from "metro/06776__.js";
import _mod6777 from "metro/06777__.js";
import _mod6778 from "metro/06778__.js";
import _mod6779 from "metro/06779__.js";
import _mod6780 from "metro/06780__.js";
import _mod6781 from "metro/06781__.js";
import _mod6782 from "metro/06782__.js";
import _mod6783 from "metro/06783__.js";
import _mod6784 from "metro/06784__.js";

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
  },
};
