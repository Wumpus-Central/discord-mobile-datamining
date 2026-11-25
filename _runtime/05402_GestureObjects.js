// _runtime/05402_GestureObjects.js
import _mod5291 from "metro/05291__.js";
import _mod5314 from "metro/05314__.js";
import _mod5403 from "metro/05403__.js";
import _mod5404 from "metro/05404__.js";
import _mod5405 from "metro/05405__.js";
import _mod5406 from "metro/05406__.js";
import _mod5407 from "metro/05407__.js";
import _mod5408 from "metro/05408__.js";
import _mod5409 from "metro/05409__.js";
import _mod5410 from "metro/05410__.js";
import _mod5411 from "metro/05411__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5403.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5404.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5405.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5406.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5407.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5408.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5409.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5410.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5411.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5314.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5291.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5291.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5291.ExclusiveGesture(...items);
  },
};
