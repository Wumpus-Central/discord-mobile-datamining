// === Module 6267: GestureObjects ===

// Module 6267 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 6167 */;
import HoverEffect from "HoverEffect" /* 6188 */;
import TapGesture from "TapGesture" /* 6268 */;
import PanGesture from "PanGesture" /* 6269 */;
import PinchGesture from "PinchGesture" /* 6270 */;
import RotationGesture from "RotationGesture" /* 6271 */;
import FlingGesture from "FlingGesture" /* 6272 */;
import LongPressGesture from "LongPressGesture" /* 6273 */;
import ForceTouchGesture from "ForceTouchGesture" /* 6274 */;
import NativeGesture from "NativeGesture" /* 6275 */;
import ManualGesture from "ManualGesture" /* 6276 */;


export const GestureObjects = {
  Tap() {
    const tapGesture = new TapGesture.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new PanGesture.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new PinchGesture.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new RotationGesture.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new FlingGesture.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new LongPressGesture.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new ForceTouchGesture.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new NativeGesture.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new ManualGesture.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new HoverEffect.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return ComposedGesture.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return ComposedGesture.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return ComposedGesture.ExclusiveGesture(...items);
  }
};