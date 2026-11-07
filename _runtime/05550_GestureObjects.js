// _runtime/05550_GestureObjects.js
import _mod5439 from "metro/05439__.js";
import _mod5462 from "metro/05462__.js";
import _mod5551 from "metro/05551__.js";
import _mod5552 from "metro/05552__.js";
import _mod5553 from "metro/05553__.js";
import _mod5554 from "metro/05554__.js";
import _mod5555 from "metro/05555__.js";
import _mod5556 from "metro/05556__.js";
import _mod5557 from "metro/05557__.js";
import _mod5558 from "metro/05558__.js";
import _mod5559 from "metro/05559__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5551.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5552.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5553.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5554.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5555.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5556.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5557.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5558.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5559.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5462.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5439.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5439.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5439.ExclusiveGesture(...items);
  },
};
