// _runtime/05665_GestureObjects.js
import _mod5554 from "metro/05554__.js";
import _mod5577 from "metro/05577__.js";
import _mod5666 from "metro/05666__.js";
import _mod5667 from "metro/05667__.js";
import _mod5668 from "metro/05668__.js";
import _mod5669 from "metro/05669__.js";
import _mod5670 from "metro/05670__.js";
import _mod5671 from "metro/05671__.js";
import _mod5672 from "metro/05672__.js";
import _mod5673 from "metro/05673__.js";
import _mod5674 from "metro/05674__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5666.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5667.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5668.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5669.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5670.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5671.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5672.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5673.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5674.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5577.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5554.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5554.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5554.ExclusiveGesture(...items);
  },
};
