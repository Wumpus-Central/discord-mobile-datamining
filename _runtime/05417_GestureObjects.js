// _runtime/05417_GestureObjects.js
import _mod5317 from "metro/05317__.js";
import _mod5338 from "metro/05338__.js";
import _mod5418 from "metro/05418__.js";
import _mod5419 from "metro/05419__.js";
import _mod5420 from "metro/05420__.js";
import _mod5421 from "metro/05421__.js";
import _mod5422 from "metro/05422__.js";
import _mod5423 from "metro/05423__.js";
import _mod5424 from "metro/05424__.js";
import _mod5425 from "metro/05425__.js";
import _mod5426 from "metro/05426__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5418.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5419.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5420.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5421.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5422.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5423.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5424.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5425.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5426.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5338.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod5317.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod5317.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod5317.ExclusiveGesture(...items);
  },
};
