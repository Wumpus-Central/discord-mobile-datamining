// _runtime/05423_GestureObjects.js
import _mod5323 from "metro/05323__.js";
import _mod5344 from "metro/05344__.js";
import _mod5424 from "metro/05424__.js";
import _mod5425 from "metro/05425__.js";
import _mod5426 from "metro/05426__.js";
import _mod5427 from "metro/05427__.js";
import _mod5428 from "metro/05428__.js";
import _mod5429 from "metro/05429__.js";
import _mod5430 from "metro/05430__.js";
import _mod5431 from "metro/05431__.js";
import _mod5432 from "metro/05432__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5424.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5425.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5426.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5427.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5428.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5429.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5430.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5431.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5432.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5344.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod5323.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod5323.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod5323.ExclusiveGesture(...items);
  },
};
