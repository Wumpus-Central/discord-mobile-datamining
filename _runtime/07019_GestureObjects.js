// _runtime/07019_GestureObjects.js
import _mod6919 from "metro/06919__.js";
import _mod6940 from "metro/06940__.js";
import _mod7020 from "metro/07020__.js";
import _mod7021 from "metro/07021__.js";
import _mod7022 from "metro/07022__.js";
import _mod7023 from "metro/07023__.js";
import _mod7024 from "metro/07024__.js";
import _mod7025 from "metro/07025__.js";
import _mod7026 from "metro/07026__.js";
import _mod7027 from "metro/07027__.js";
import _mod7028 from "metro/07028__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod7020.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod7021.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod7022.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod7023.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod7024.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod7025.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod7026.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod7027.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod7028.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6940.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6919.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6919.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6919.ExclusiveGesture(...items);
  },
};
