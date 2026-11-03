// _runtime/05546_GestureObjects.js
import _mod5446 from "metro/05446__.js";
import _mod5467 from "metro/05467__.js";
import _mod5547 from "metro/05547__.js";
import _mod5548 from "metro/05548__.js";
import _mod5549 from "metro/05549__.js";
import _mod5550 from "metro/05550__.js";
import _mod5551 from "metro/05551__.js";
import _mod5552 from "metro/05552__.js";
import _mod5553 from "metro/05553__.js";
import _mod5554 from "metro/05554__.js";
import _mod5555 from "metro/05555__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5547.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5548.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5549.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5550.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5551.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5552.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5553.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5554.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5555.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5467.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5446.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5446.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5446.ExclusiveGesture(...items);
  },
};
