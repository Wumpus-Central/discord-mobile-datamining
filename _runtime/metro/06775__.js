// _runtime/metro/06775__.js
import _isNativeReflectConstruct from "../06675__isNativeReflectConstruct.js";
import _isNativeReflectConstruct2 from "../06696__isNativeReflectConstruct.js";
import _isNativeReflectConstruct3 from "../06776__isNativeReflectConstruct.js";
import _isNativeReflectConstruct4 from "../06777__isNativeReflectConstruct.js";
import _isNativeReflectConstruct5 from "../06778__isNativeReflectConstruct.js";
import _isNativeReflectConstruct6 from "../06779__isNativeReflectConstruct.js";
import _isNativeReflectConstruct7 from "../06780__isNativeReflectConstruct.js";
import _isNativeReflectConstruct8 from "../06781__isNativeReflectConstruct.js";
import _isNativeReflectConstruct9 from "../06782__isNativeReflectConstruct.js";
import _isNativeReflectConstruct10 from "../06783__isNativeReflectConstruct.js";
import _isNativeReflectConstruct11 from "../06784__isNativeReflectConstruct.js";

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
  },
};
