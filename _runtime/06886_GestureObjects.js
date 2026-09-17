// _runtime/06886_GestureObjects.js
import _mod6786 from "metro/06786__.js";
import _mod6807 from "metro/06807__.js";
import _mod6887 from "metro/06887__.js";
import _mod6888 from "metro/06888__.js";
import _mod6889 from "metro/06889__.js";
import _mod6890 from "metro/06890__.js";
import _mod6891 from "metro/06891__.js";
import _mod6892 from "metro/06892__.js";
import _mod6893 from "metro/06893__.js";
import _mod6894 from "metro/06894__.js";
import _mod6895 from "metro/06895__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6887.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6888.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6889.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6890.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6891.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6892.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6893.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6894.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6895.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6807.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6786.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6786.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6786.ExclusiveGesture(...items);
  },
};
