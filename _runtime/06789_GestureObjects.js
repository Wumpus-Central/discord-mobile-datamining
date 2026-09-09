// _runtime/06789_GestureObjects.js
import _mod6689 from "metro/06689__.js";
import _mod6710 from "metro/06710__.js";
import _mod6790 from "metro/06790__.js";
import _mod6791 from "metro/06791__.js";
import _mod6792 from "metro/06792__.js";
import _mod6793 from "metro/06793__.js";
import _mod6794 from "metro/06794__.js";
import _mod6795 from "metro/06795__.js";
import _mod6796 from "metro/06796__.js";
import _mod6797 from "metro/06797__.js";
import _mod6798 from "metro/06798__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6790.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6791.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6792.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6793.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6794.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6795.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6796.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6797.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6798.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6710.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6689.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6689.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6689.ExclusiveGesture(...items);
  },
};
