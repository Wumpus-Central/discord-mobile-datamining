// _runtime/06459_GestureObjects.js
import _mod6359 from "metro/06359__.js";
import _mod6380 from "metro/06380__.js";
import _mod6460 from "metro/06460__.js";
import _mod6461 from "metro/06461__.js";
import _mod6462 from "metro/06462__.js";
import _mod6463 from "metro/06463__.js";
import _mod6464 from "metro/06464__.js";
import _mod6465 from "metro/06465__.js";
import _mod6466 from "metro/06466__.js";
import _mod6467 from "metro/06467__.js";
import _mod6468 from "metro/06468__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6460.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6461.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6462.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6463.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6464.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6465.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6466.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6467.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6468.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6380.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6359.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6359.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6359.ExclusiveGesture(...items);
  },
};
