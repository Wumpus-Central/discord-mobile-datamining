// === Module 6775: ? ===

// Module 6775
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 6675 */;
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 6696 */;
import _isNativeReflectConstruct3 from "_isNativeReflectConstruct" /* 6776 */;
import _isNativeReflectConstruct4 from "_isNativeReflectConstruct" /* 6777 */;
import _isNativeReflectConstruct5 from "_isNativeReflectConstruct" /* 6778 */;
import _isNativeReflectConstruct6 from "_isNativeReflectConstruct" /* 6779 */;
import _isNativeReflectConstruct7 from "_isNativeReflectConstruct" /* 6780 */;
import _isNativeReflectConstruct8 from "_isNativeReflectConstruct" /* 6781 */;
import _isNativeReflectConstruct9 from "_isNativeReflectConstruct" /* 6782 */;
import _isNativeReflectConstruct10 from "_isNativeReflectConstruct" /* 6783 */;
import _isNativeReflectConstruct11 from "_isNativeReflectConstruct" /* 6784 */;

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