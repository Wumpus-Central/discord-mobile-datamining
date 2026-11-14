// _runtime/05728_GestureObjects.js
import _mod5617 from "metro/05617__.js";
import _mod5640 from "metro/05640__.js";
import _mod5729 from "metro/05729__.js";
import _mod5730 from "metro/05730__.js";
import _mod5731 from "metro/05731__.js";
import _mod5732 from "metro/05732__.js";
import _mod5733 from "metro/05733__.js";
import _mod5734 from "metro/05734__.js";
import _mod5735 from "metro/05735__.js";
import _mod5736 from "metro/05736__.js";
import _mod5737 from "metro/05737__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5729.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5730.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5731.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5732.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5733.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5734.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5735.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5736.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5737.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5640.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5617.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5617.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5617.ExclusiveGesture(...items);
  },
};
