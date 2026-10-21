// _runtime/05399_GestureObjects.js
import _mod5299 from "metro/05299__.js";
import _mod5320 from "metro/05320__.js";
import _mod5400 from "metro/05400__.js";
import _mod5401 from "metro/05401__.js";
import _mod5402 from "metro/05402__.js";
import _mod5403 from "metro/05403__.js";
import _mod5404 from "metro/05404__.js";
import _mod5405 from "metro/05405__.js";
import _mod5406 from "metro/05406__.js";
import _mod5407 from "metro/05407__.js";
import _mod5408 from "metro/05408__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5400.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5401.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5402.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5403.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5404.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5405.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5406.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5407.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5408.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5320.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod5299.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod5299.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod5299.ExclusiveGesture(...items);
  },
};
