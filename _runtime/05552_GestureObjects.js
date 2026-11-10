// _runtime/05552_GestureObjects.js
import _mod5441 from "metro/05441__.js";
import _mod5464 from "metro/05464__.js";
import _mod5553 from "metro/05553__.js";
import _mod5554 from "metro/05554__.js";
import _mod5555 from "metro/05555__.js";
import _mod5556 from "metro/05556__.js";
import _mod5557 from "metro/05557__.js";
import _mod5558 from "metro/05558__.js";
import _mod5559 from "metro/05559__.js";
import _mod5560 from "metro/05560__.js";
import _mod5561 from "metro/05561__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5553.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5554.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5555.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5556.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5557.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5558.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5559.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5560.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5561.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5464.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5441.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5441.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5441.ExclusiveGesture(...items);
  },
};
