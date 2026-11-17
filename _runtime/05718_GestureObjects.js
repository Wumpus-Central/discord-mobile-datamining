// _runtime/05718_GestureObjects.js
import _mod5607 from "metro/05607__.js";
import _mod5630 from "metro/05630__.js";
import _mod5719 from "metro/05719__.js";
import _mod5720 from "metro/05720__.js";
import _mod5721 from "metro/05721__.js";
import _mod5722 from "metro/05722__.js";
import _mod5723 from "metro/05723__.js";
import _mod5724 from "metro/05724__.js";
import _mod5725 from "metro/05725__.js";
import _mod5726 from "metro/05726__.js";
import _mod5727 from "metro/05727__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5719.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5720.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5721.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5722.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5723.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5724.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5725.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5726.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5727.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5630.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5607.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5607.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5607.ExclusiveGesture(...items);
  },
};
