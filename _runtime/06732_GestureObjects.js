// _runtime/06732_GestureObjects.js
import _mod6632 from "metro/06632__.js";
import _mod6653 from "metro/06653__.js";
import _mod6733 from "metro/06733__.js";
import _mod6734 from "metro/06734__.js";
import _mod6735 from "metro/06735__.js";
import _mod6736 from "metro/06736__.js";
import _mod6737 from "metro/06737__.js";
import _mod6738 from "metro/06738__.js";
import _mod6739 from "metro/06739__.js";
import _mod6740 from "metro/06740__.js";
import _mod6741 from "metro/06741__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6733.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6734.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6735.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6736.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6737.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6738.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6739.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6740.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6741.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6653.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6632.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6632.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6632.ExclusiveGesture(...items);
  },
};
