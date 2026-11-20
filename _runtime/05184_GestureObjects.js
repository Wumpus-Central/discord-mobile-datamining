// _runtime/05184_GestureObjects.js
import _mod5073 from "metro/05073__.js";
import _mod5096 from "metro/05096__.js";
import _mod5185 from "metro/05185__.js";
import _mod5186 from "metro/05186__.js";
import _mod5187 from "metro/05187__.js";
import _mod5188 from "metro/05188__.js";
import _mod5189 from "metro/05189__.js";
import _mod5190 from "metro/05190__.js";
import _mod5191 from "metro/05191__.js";
import _mod5192 from "metro/05192__.js";
import _mod5193 from "metro/05193__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5185.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5186.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5187.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5188.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5189.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5190.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5191.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5192.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5193.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5096.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5073.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5073.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5073.ExclusiveGesture(...items);
  },
};
