// _runtime/05303_GestureObjects.js
import _mod5192 from "metro/05192__.js";
import _mod5215 from "metro/05215__.js";
import _mod5304 from "metro/05304__.js";
import _mod5305 from "metro/05305__.js";
import _mod5306 from "metro/05306__.js";
import _mod5307 from "metro/05307__.js";
import _mod5308 from "metro/05308__.js";
import _mod5309 from "metro/05309__.js";
import _mod5310 from "metro/05310__.js";
import _mod5311 from "metro/05311__.js";
import _mod5312 from "metro/05312__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5304.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5305.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5306.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5307.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5308.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5309.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5310.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5311.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5312.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5215.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5192.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5192.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5192.ExclusiveGesture(...items);
  },
};
