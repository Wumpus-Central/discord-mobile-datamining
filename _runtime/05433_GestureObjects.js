// _runtime/05433_GestureObjects.js
import _mod5322 from "metro/05322__.js";
import _mod5345 from "metro/05345__.js";
import _mod5434 from "metro/05434__.js";
import _mod5435 from "metro/05435__.js";
import _mod5436 from "metro/05436__.js";
import _mod5437 from "metro/05437__.js";
import _mod5438 from "metro/05438__.js";
import _mod5439 from "metro/05439__.js";
import _mod5440 from "metro/05440__.js";
import _mod5441 from "metro/05441__.js";
import _mod5442 from "metro/05442__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5434.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5435.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5436.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5437.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5438.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5439.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5440.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5441.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5442.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5345.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5322.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5322.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5322.ExclusiveGesture(...items);
  },
};
