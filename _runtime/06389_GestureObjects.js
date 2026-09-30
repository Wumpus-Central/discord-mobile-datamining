// _runtime/06389_GestureObjects.js
import _mod6289 from "metro/06289__.js";
import _mod6310 from "metro/06310__.js";
import _mod6390 from "metro/06390__.js";
import _mod6391 from "metro/06391__.js";
import _mod6392 from "metro/06392__.js";
import _mod6393 from "metro/06393__.js";
import _mod6394 from "metro/06394__.js";
import _mod6395 from "metro/06395__.js";
import _mod6396 from "metro/06396__.js";
import _mod6397 from "metro/06397__.js";
import _mod6398 from "metro/06398__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6390.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6391.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6392.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6393.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6394.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6395.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6396.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6397.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6398.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6310.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6289.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6289.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6289.ExclusiveGesture(...items);
  },
};
