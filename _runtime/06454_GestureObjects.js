// _runtime/06454_GestureObjects.js
import _mod6354 from "metro/06354__.js";
import _mod6375 from "metro/06375__.js";
import _mod6455 from "metro/06455__.js";
import _mod6456 from "metro/06456__.js";
import _mod6457 from "metro/06457__.js";
import _mod6458 from "metro/06458__.js";
import _mod6459 from "metro/06459__.js";
import _mod6460 from "metro/06460__.js";
import _mod6461 from "metro/06461__.js";
import _mod6462 from "metro/06462__.js";
import _mod6463 from "metro/06463__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6455.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6456.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6457.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6458.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6459.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6460.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6461.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6462.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6463.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6375.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6354.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6354.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6354.ExclusiveGesture(...items);
  },
};
