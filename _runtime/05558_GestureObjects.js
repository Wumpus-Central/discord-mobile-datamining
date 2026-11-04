// _runtime/05558_GestureObjects.js
import _mod5447 from "metro/05447__.js";
import _mod5470 from "metro/05470__.js";
import _mod5559 from "metro/05559__.js";
import _mod5560 from "metro/05560__.js";
import _mod5561 from "metro/05561__.js";
import _mod5562 from "metro/05562__.js";
import _mod5563 from "metro/05563__.js";
import _mod5564 from "metro/05564__.js";
import _mod5565 from "metro/05565__.js";
import _mod5566 from "metro/05566__.js";
import _mod5567 from "metro/05567__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5559.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5560.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5561.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5562.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5563.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5564.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5565.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5566.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5567.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5470.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5447.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5447.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5447.ExclusiveGesture(...items);
  },
};
