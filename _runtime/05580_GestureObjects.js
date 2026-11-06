// _runtime/05580_GestureObjects.js
import _mod5469 from "metro/05469__.js";
import _mod5492 from "metro/05492__.js";
import _mod5581 from "metro/05581__.js";
import _mod5582 from "metro/05582__.js";
import _mod5583 from "metro/05583__.js";
import _mod5584 from "metro/05584__.js";
import _mod5585 from "metro/05585__.js";
import _mod5586 from "metro/05586__.js";
import _mod5587 from "metro/05587__.js";
import _mod5588 from "metro/05588__.js";
import _mod5589 from "metro/05589__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5581.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5582.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5583.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5584.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5585.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5586.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5587.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5588.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5589.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5492.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5469.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5469.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5469.ExclusiveGesture(...items);
  },
};
