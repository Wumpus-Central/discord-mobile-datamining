// _runtime/05418_GestureObjects.js
import _mod5318 from "metro/05318__.js";
import _mod5339 from "metro/05339__.js";
import _mod5419 from "metro/05419__.js";
import _mod5420 from "metro/05420__.js";
import _mod5421 from "metro/05421__.js";
import _mod5422 from "metro/05422__.js";
import _mod5423 from "metro/05423__.js";
import _mod5424 from "metro/05424__.js";
import _mod5425 from "metro/05425__.js";
import _mod5426 from "metro/05426__.js";
import _mod5427 from "metro/05427__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5419.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5420.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5421.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5422.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5423.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5424.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5425.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5426.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5427.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5339.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod5318.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod5318.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod5318.ExclusiveGesture(...items);
  },
};
