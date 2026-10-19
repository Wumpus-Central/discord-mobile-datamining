// _runtime/05378_GestureObjects.js
import _mod5278 from "metro/05278__.js";
import _mod5299 from "metro/05299__.js";
import _mod5379 from "metro/05379__.js";
import _mod5380 from "metro/05380__.js";
import _mod5381 from "metro/05381__.js";
import _mod5382 from "metro/05382__.js";
import _mod5383 from "metro/05383__.js";
import _mod5384 from "metro/05384__.js";
import _mod5385 from "metro/05385__.js";
import _mod5386 from "metro/05386__.js";
import _mod5387 from "metro/05387__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5379.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5380.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5381.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5382.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5383.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5384.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5385.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5386.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5387.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5299.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod5278.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod5278.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod5278.ExclusiveGesture(...items);
  },
};
