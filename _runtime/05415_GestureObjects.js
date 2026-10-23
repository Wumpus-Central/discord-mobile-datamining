// _runtime/05415_GestureObjects.js
import _mod5315 from "metro/05315__.js";
import _mod5336 from "metro/05336__.js";
import _mod5416 from "metro/05416__.js";
import _mod5417 from "metro/05417__.js";
import _mod5418 from "metro/05418__.js";
import _mod5419 from "metro/05419__.js";
import _mod5420 from "metro/05420__.js";
import _mod5421 from "metro/05421__.js";
import _mod5422 from "metro/05422__.js";
import _mod5423 from "metro/05423__.js";
import _mod5424 from "metro/05424__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5416.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5417.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5418.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5419.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5420.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5421.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5422.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5423.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5424.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5336.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod5315.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod5315.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod5315.ExclusiveGesture(...items);
  },
};
