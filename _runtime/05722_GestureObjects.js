// _runtime/05722_GestureObjects.js
import _mod5611 from "metro/05611__.js";
import _mod5634 from "metro/05634__.js";
import _mod5723 from "metro/05723__.js";
import _mod5724 from "metro/05724__.js";
import _mod5725 from "metro/05725__.js";
import _mod5726 from "metro/05726__.js";
import _mod5727 from "metro/05727__.js";
import _mod5728 from "metro/05728__.js";
import _mod5729 from "metro/05729__.js";
import _mod5730 from "metro/05730__.js";
import _mod5731 from "metro/05731__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5723.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5724.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5725.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5726.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5727.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5728.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5729.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5730.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5731.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5634.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5611.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5611.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5611.ExclusiveGesture(...items);
  },
};
