// _runtime/06880_GestureObjects.js
import _mod6780 from "metro/06780__.js";
import _mod6801 from "metro/06801__.js";
import _mod6881 from "metro/06881__.js";
import _mod6882 from "metro/06882__.js";
import _mod6883 from "metro/06883__.js";
import _mod6884 from "metro/06884__.js";
import _mod6885 from "metro/06885__.js";
import _mod6886 from "metro/06886__.js";
import _mod6887 from "metro/06887__.js";
import _mod6888 from "metro/06888__.js";
import _mod6889 from "metro/06889__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6881.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6882.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6883.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6884.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6885.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6886.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6887.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6888.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6889.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6801.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6780.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6780.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6780.ExclusiveGesture(...items);
  },
};
