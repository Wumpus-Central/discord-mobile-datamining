// _runtime/07103_GestureObjects.js
import _mod7003 from "metro/07003__.js";
import _mod7024 from "metro/07024__.js";
import _mod7104 from "metro/07104__.js";
import _mod7105 from "metro/07105__.js";
import _mod7106 from "metro/07106__.js";
import _mod7107 from "metro/07107__.js";
import _mod7108 from "metro/07108__.js";
import _mod7109 from "metro/07109__.js";
import _mod7110 from "metro/07110__.js";
import _mod7111 from "metro/07111__.js";
import _mod7112 from "metro/07112__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod7104.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod7105.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod7106.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod7107.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod7108.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod7109.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod7110.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod7111.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod7112.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod7024.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod7003.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod7003.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod7003.ExclusiveGesture(...items);
  },
};
