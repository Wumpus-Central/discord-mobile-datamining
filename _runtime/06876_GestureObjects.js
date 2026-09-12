// _runtime/06876_GestureObjects.js
import _mod6776 from "metro/06776__.js";
import _mod6797 from "metro/06797__.js";
import _mod6877 from "metro/06877__.js";
import _mod6878 from "metro/06878__.js";
import _mod6879 from "metro/06879__.js";
import _mod6880 from "metro/06880__.js";
import _mod6881 from "metro/06881__.js";
import _mod6882 from "metro/06882__.js";
import _mod6883 from "metro/06883__.js";
import _mod6884 from "metro/06884__.js";
import _mod6885 from "metro/06885__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6877.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6878.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6879.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6880.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6881.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6882.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6883.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6884.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6885.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6797.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6776.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6776.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6776.ExclusiveGesture(...items);
  },
};
