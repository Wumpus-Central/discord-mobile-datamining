// _runtime/06359_GestureObjects.js
import _mod6259 from "metro/06259__.js";
import _mod6280 from "metro/06280__.js";
import _mod6360 from "metro/06360__.js";
import _mod6361 from "metro/06361__.js";
import _mod6362 from "metro/06362__.js";
import _mod6363 from "metro/06363__.js";
import _mod6364 from "metro/06364__.js";
import _mod6365 from "metro/06365__.js";
import _mod6366 from "metro/06366__.js";
import _mod6367 from "metro/06367__.js";
import _mod6368 from "metro/06368__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6360.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6361.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6362.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6363.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6364.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6365.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6366.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6367.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6368.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6280.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6259.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6259.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6259.ExclusiveGesture(...items);
  },
};
