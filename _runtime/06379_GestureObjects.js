// _runtime/06379_GestureObjects.js
import _mod6279 from "metro/06279__.js";
import _mod6300 from "metro/06300__.js";
import _mod6380 from "metro/06380__.js";
import _mod6381 from "metro/06381__.js";
import _mod6382 from "metro/06382__.js";
import _mod6383 from "metro/06383__.js";
import _mod6384 from "metro/06384__.js";
import _mod6385 from "metro/06385__.js";
import _mod6386 from "metro/06386__.js";
import _mod6387 from "metro/06387__.js";
import _mod6388 from "metro/06388__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6380.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6381.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6382.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6383.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6384.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6385.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6386.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6387.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6388.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6300.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6279.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6279.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6279.ExclusiveGesture(...items);
  },
};
