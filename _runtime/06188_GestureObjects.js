// _runtime/06188_GestureObjects.js
import _mod6088 from "metro/06088__.js";
import _mod6109 from "metro/06109__.js";
import _mod6189 from "metro/06189__.js";
import _mod6190 from "metro/06190__.js";
import _mod6191 from "metro/06191__.js";
import _mod6192 from "metro/06192__.js";
import _mod6193 from "metro/06193__.js";
import _mod6194 from "metro/06194__.js";
import _mod6195 from "metro/06195__.js";
import _mod6196 from "metro/06196__.js";
import _mod6197 from "metro/06197__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6189.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6190.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6191.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6192.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6193.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6194.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6195.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6196.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6197.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6109.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6088.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6088.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6088.ExclusiveGesture(...items);
  },
};
