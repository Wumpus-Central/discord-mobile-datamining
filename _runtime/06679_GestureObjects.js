// _runtime/06679_GestureObjects.js
import _mod6579 from "metro/06579__.js";
import _mod6600 from "metro/06600__.js";
import _mod6680 from "metro/06680__.js";
import _mod6681 from "metro/06681__.js";
import _mod6682 from "metro/06682__.js";
import _mod6683 from "metro/06683__.js";
import _mod6684 from "metro/06684__.js";
import _mod6685 from "metro/06685__.js";
import _mod6686 from "metro/06686__.js";
import _mod6687 from "metro/06687__.js";
import _mod6688 from "metro/06688__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6680.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6681.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6682.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6683.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6684.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6685.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6686.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6687.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6688.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6600.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6579.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6579.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6579.ExclusiveGesture(...items);
  },
};
