// _runtime/07012_GestureObjects.js
import _mod6912 from "metro/06912__.js";
import _mod6933 from "metro/06933__.js";
import _mod7013 from "metro/07013__.js";
import _mod7014 from "metro/07014__.js";
import _mod7015 from "metro/07015__.js";
import _mod7016 from "metro/07016__.js";
import _mod7017 from "metro/07017__.js";
import _mod7018 from "metro/07018__.js";
import _mod7019 from "metro/07019__.js";
import _mod7020 from "metro/07020__.js";
import _mod7021 from "metro/07021__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod7013.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod7014.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod7015.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod7016.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod7017.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod7018.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod7019.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod7020.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod7021.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6933.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6912.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6912.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6912.ExclusiveGesture(...items);
  },
};
