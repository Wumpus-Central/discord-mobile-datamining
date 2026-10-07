// _runtime/06267_GestureObjects.js
import _mod6167 from "metro/06167__.js";
import _mod6188 from "metro/06188__.js";
import _mod6268 from "metro/06268__.js";
import _mod6269 from "metro/06269__.js";
import _mod6270 from "metro/06270__.js";
import _mod6271 from "metro/06271__.js";
import _mod6272 from "metro/06272__.js";
import _mod6273 from "metro/06273__.js";
import _mod6274 from "metro/06274__.js";
import _mod6275 from "metro/06275__.js";
import _mod6276 from "metro/06276__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6268.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6269.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6270.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6271.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6272.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6273.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6274.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6275.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6276.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6188.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6167.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6167.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6167.ExclusiveGesture(...items);
  },
};
