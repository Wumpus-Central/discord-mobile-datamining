// _runtime/05182_GestureObjects.js
import _mod5071 from "metro/05071__.js";
import _mod5094 from "metro/05094__.js";
import _mod5183 from "metro/05183__.js";
import _mod5184 from "metro/05184__.js";
import _mod5185 from "metro/05185__.js";
import _mod5186 from "metro/05186__.js";
import _mod5187 from "metro/05187__.js";
import _mod5188 from "metro/05188__.js";
import _mod5189 from "metro/05189__.js";
import _mod5190 from "metro/05190__.js";
import _mod5191 from "metro/05191__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5183.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5184.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5185.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5186.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5187.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5188.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5189.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5190.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5191.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5094.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5071.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5071.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5071.ExclusiveGesture(...items);
  },
};
