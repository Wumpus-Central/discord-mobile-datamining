// _runtime/05307_GestureObjects.js
import _mod5196 from "metro/05196__.js";
import _mod5219 from "metro/05219__.js";
import _mod5308 from "metro/05308__.js";
import _mod5309 from "metro/05309__.js";
import _mod5310 from "metro/05310__.js";
import _mod5311 from "metro/05311__.js";
import _mod5312 from "metro/05312__.js";
import _mod5313 from "metro/05313__.js";
import _mod5314 from "metro/05314__.js";
import _mod5315 from "metro/05315__.js";
import _mod5316 from "metro/05316__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5308.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5309.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5310.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5311.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5312.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5313.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5314.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5315.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5316.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5219.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5196.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5196.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5196.ExclusiveGesture(...items);
  },
};
