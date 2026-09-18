// _runtime/06968_GestureObjects.js
import _mod6868 from "metro/06868__.js";
import _mod6889 from "metro/06889__.js";
import _mod6969 from "metro/06969__.js";
import _mod6970 from "metro/06970__.js";
import _mod6971 from "metro/06971__.js";
import _mod6972 from "metro/06972__.js";
import _mod6973 from "metro/06973__.js";
import _mod6974 from "metro/06974__.js";
import _mod6975 from "metro/06975__.js";
import _mod6976 from "metro/06976__.js";
import _mod6977 from "metro/06977__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6969.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6970.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6971.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6972.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6973.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6974.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6975.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6976.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6977.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6889.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6868.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6868.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6868.ExclusiveGesture(...items);
  },
};
