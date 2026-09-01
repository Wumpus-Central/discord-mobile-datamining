// _runtime/metro/05772__.js
import _isNativeReflectConstruct from "../05672__isNativeReflectConstruct.js";
import _isNativeReflectConstruct2 from "../05693__isNativeReflectConstruct.js";
import _isNativeReflectConstruct3 from "../05773__isNativeReflectConstruct.js";
import _isNativeReflectConstruct4 from "../05774__isNativeReflectConstruct.js";
import _isNativeReflectConstruct5 from "../05775__isNativeReflectConstruct.js";
import _isNativeReflectConstruct6 from "../05776__isNativeReflectConstruct.js";
import _isNativeReflectConstruct7 from "../05777__isNativeReflectConstruct.js";
import _isNativeReflectConstruct8 from "../05778__isNativeReflectConstruct.js";
import _isNativeReflectConstruct9 from "../05779__isNativeReflectConstruct.js";
import _isNativeReflectConstruct10 from "../05780__isNativeReflectConstruct.js";
import _isNativeReflectConstruct11 from "../05781__isNativeReflectConstruct.js";

require = arg1;
const dependencyMap = arg6;
arg5.GestureObjects = {
  Tap() {
    const tapGesture = new _isNativeReflectConstruct3.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _isNativeReflectConstruct4.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _isNativeReflectConstruct5.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _isNativeReflectConstruct6.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _isNativeReflectConstruct7.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _isNativeReflectConstruct8.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _isNativeReflectConstruct9.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _isNativeReflectConstruct10.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _isNativeReflectConstruct11.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _isNativeReflectConstruct2.HoverGesture();
    return hoverGesture;
  },
  Race(onStartResult, onEndResult) {
    const items = [...arguments];
    return _isNativeReflectConstruct.ComposedGesture(...items);
  },
  Simultaneous(ExclusiveResult, onEndResult, onEndResult1) {
    const items = [...arguments];
    return _isNativeReflectConstruct.SimultaneousGesture(...items);
  },
  Exclusive(numberOfTapsResult, onStartResult, enabledResult2) {
    const items = [...arguments];
    return _isNativeReflectConstruct.ExclusiveGesture(...items);
  }
};