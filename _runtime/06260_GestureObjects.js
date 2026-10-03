// _runtime/06260_GestureObjects.js
import _mod6160 from "metro/06160__.js";
import _mod6181 from "metro/06181__.js";
import _mod6261 from "metro/06261__.js";
import _mod6262 from "metro/06262__.js";
import _mod6263 from "metro/06263__.js";
import _mod6264 from "metro/06264__.js";
import _mod6265 from "metro/06265__.js";
import _mod6266 from "metro/06266__.js";
import _mod6267 from "metro/06267__.js";
import _mod6268 from "metro/06268__.js";
import _mod6269 from "metro/06269__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6261.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6262.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6263.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6264.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6265.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6266.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6267.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6268.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6269.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6181.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6160.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6160.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6160.ExclusiveGesture(...items);
  },
};
