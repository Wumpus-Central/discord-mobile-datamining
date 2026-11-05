// _runtime/05560_GestureObjects.js
import _mod5449 from "metro/05449__.js";
import _mod5472 from "metro/05472__.js";
import _mod5561 from "metro/05561__.js";
import _mod5562 from "metro/05562__.js";
import _mod5563 from "metro/05563__.js";
import _mod5564 from "metro/05564__.js";
import _mod5565 from "metro/05565__.js";
import _mod5566 from "metro/05566__.js";
import _mod5567 from "metro/05567__.js";
import _mod5568 from "metro/05568__.js";
import _mod5569 from "metro/05569__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod5561.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod5562.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod5563.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod5564.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod5565.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod5566.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod5567.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod5568.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod5569.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod5472.HoverGesture();
    return hoverGesture;
  },
  Race() {
    items = [...arguments];
    return _mod5449.ComposedGesture(...items);
  },
  Simultaneous() {
    items = [...arguments];
    return _mod5449.SimultaneousGesture(...items);
  },
  Exclusive() {
    items = [...arguments];
    return _mod5449.ExclusiveGesture(...items);
  },
};
