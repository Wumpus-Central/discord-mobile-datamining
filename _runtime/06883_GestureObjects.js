// _runtime/06883_GestureObjects.js
import _mod6783 from "metro/06783__.js";
import _mod6804 from "metro/06804__.js";
import _mod6884 from "metro/06884__.js";
import _mod6885 from "metro/06885__.js";
import _mod6886 from "metro/06886__.js";
import _mod6887 from "metro/06887__.js";
import _mod6888 from "metro/06888__.js";
import _mod6889 from "metro/06889__.js";
import _mod6890 from "metro/06890__.js";
import _mod6891 from "metro/06891__.js";
import _mod6892 from "metro/06892__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6884.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6885.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6886.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6887.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6888.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6889.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6890.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6891.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6892.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6804.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6783.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6783.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6783.ExclusiveGesture(...items);
  },
};
