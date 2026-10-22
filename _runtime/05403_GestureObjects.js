// _runtime/05403_GestureObjects.js
import _mod5303 from "metro/05303__.js";
import _mod5324 from "metro/05324__.js";
import _mod5404 from "metro/05404__.js";
import _mod5405 from "metro/05405__.js";
import _mod5406 from "metro/05406__.js";
import _mod5407 from "metro/05407__.js";
import _mod5408 from "metro/05408__.js";
import _mod5409 from "metro/05409__.js";
import _mod5410 from "metro/05410__.js";
import _mod5411 from "metro/05411__.js";
import _mod5412 from "metro/05412__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5404.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5405.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5406.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5407.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5408.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5409.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5410.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5411.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5412.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5324.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod5303.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod5303.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod5303.ExclusiveGesture(...items);
  },
};
