// _runtime/05454_GestureObjects.js
import _mod5354 from "metro/05354__.js";
import _mod5375 from "metro/05375__.js";
import _mod5455 from "metro/05455__.js";
import _mod5456 from "metro/05456__.js";
import _mod5457 from "metro/05457__.js";
import _mod5458 from "metro/05458__.js";
import _mod5459 from "metro/05459__.js";
import _mod5460 from "metro/05460__.js";
import _mod5461 from "metro/05461__.js";
import _mod5462 from "metro/05462__.js";
import _mod5463 from "metro/05463__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5455.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5456.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5457.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5458.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5459.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5460.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5461.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5462.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5463.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5375.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod5354.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod5354.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod5354.ExclusiveGesture(...items);
  },
};
