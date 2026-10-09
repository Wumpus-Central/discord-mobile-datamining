// _runtime/06453_GestureObjects.js
import _mod6353 from "metro/06353__.js";
import _mod6374 from "metro/06374__.js";
import _mod6454 from "metro/06454__.js";
import _mod6455 from "metro/06455__.js";
import _mod6456 from "metro/06456__.js";
import _mod6457 from "metro/06457__.js";
import _mod6458 from "metro/06458__.js";
import _mod6459 from "metro/06459__.js";
import _mod6460 from "metro/06460__.js";
import _mod6461 from "metro/06461__.js";
import _mod6462 from "metro/06462__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6454.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6455.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6456.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6457.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6458.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6459.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6460.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6461.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6462.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6374.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6353.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6353.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6353.ExclusiveGesture(...items);
  },
};
