// _runtime/metro/05653__.js
import _isNativeReflectConstruct from "../05553__isNativeReflectConstruct.js";
import _isNativeReflectConstruct2 from "../05574__isNativeReflectConstruct.js";
import _isNativeReflectConstruct3 from "../05654__isNativeReflectConstruct.js";
import _isNativeReflectConstruct4 from "../05655__isNativeReflectConstruct.js";
import _isNativeReflectConstruct5 from "../05656__isNativeReflectConstruct.js";
import _isNativeReflectConstruct6 from "../05657__isNativeReflectConstruct.js";
import _isNativeReflectConstruct7 from "../05658__isNativeReflectConstruct.js";
import _isNativeReflectConstruct8 from "../05659__isNativeReflectConstruct.js";
import _isNativeReflectConstruct9 from "../05660__isNativeReflectConstruct.js";
import _isNativeReflectConstruct10 from "../05661__isNativeReflectConstruct.js";
import _isNativeReflectConstruct11 from "../05662__isNativeReflectConstruct.js";

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