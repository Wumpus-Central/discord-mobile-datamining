// _runtime/05213_GestureObjects.js
import _mod5102 from "metro/05102__.js";
import _mod5125 from "metro/05125__.js";
import _mod5214 from "metro/05214__.js";
import _mod5215 from "metro/05215__.js";
import _mod5216 from "metro/05216__.js";
import _mod5217 from "metro/05217__.js";
import _mod5218 from "metro/05218__.js";
import _mod5219 from "metro/05219__.js";
import _mod5220 from "metro/05220__.js";
import _mod5221 from "metro/05221__.js";
import _mod5222 from "metro/05222__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5214.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5215.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5216.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5217.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5218.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5219.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5220.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5221.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5222.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5125.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5102.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5102.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5102.ExclusiveGesture(...items);
  },
};
