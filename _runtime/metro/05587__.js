// _runtime/metro/05587__.js
import { _isNativeReflectConstruct } from "../05487__isNativeReflectConstruct.js";
import { _isNativeReflectConstruct } from "../05508__isNativeReflectConstruct.js";
import { _isNativeReflectConstruct } from "../05588__isNativeReflectConstruct.js";
import { _isNativeReflectConstruct } from "../05589__isNativeReflectConstruct.js";
import { _isNativeReflectConstruct } from "../05590__isNativeReflectConstruct.js";
import { _isNativeReflectConstruct } from "../05591__isNativeReflectConstruct.js";
import { _isNativeReflectConstruct } from "../05592__isNativeReflectConstruct.js";
import { _isNativeReflectConstruct } from "../05593__isNativeReflectConstruct.js";
import { _isNativeReflectConstruct } from "../05594__isNativeReflectConstruct.js";
import { _isNativeReflectConstruct } from "../05595__isNativeReflectConstruct.js";
import { _isNativeReflectConstruct } from "../05596__isNativeReflectConstruct.js";
const require = arg1;
const dependencyMap = arg6;
arg5.GestureObjects = {
  Tap() {
    const tapGesture = new _isNativeReflectConstruct.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _isNativeReflectConstruct.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _isNativeReflectConstruct.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _isNativeReflectConstruct.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _isNativeReflectConstruct.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _isNativeReflectConstruct.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _isNativeReflectConstruct.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _isNativeReflectConstruct.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _isNativeReflectConstruct.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _isNativeReflectConstruct.HoverGesture();
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
  Exclusive(onStartResult, onStartResult2, enabledResult2) {
    const items = [...arguments];
    return _isNativeReflectConstruct.ExclusiveGesture(...items);
  }
};