// _runtime/07017_GestureObjects.js
import _mod6917 from "metro/06917__.js";
import _mod6938 from "metro/06938__.js";
import _mod7018 from "metro/07018__.js";
import _mod7019 from "metro/07019__.js";
import _mod7020 from "metro/07020__.js";
import _mod7021 from "metro/07021__.js";
import _mod7022 from "metro/07022__.js";
import _mod7023 from "metro/07023__.js";
import _mod7024 from "metro/07024__.js";
import _mod7025 from "metro/07025__.js";
import _mod7026 from "metro/07026__.js";

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod7018.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod7019.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod7020.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod7021.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod7022.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod7023.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod7024.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod7025.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod7026.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6938.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6917.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6917.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6917.ExclusiveGesture(...items);
  },
};
