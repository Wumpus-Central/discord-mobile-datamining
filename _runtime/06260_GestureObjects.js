// === Module 6260: GestureObjects ===

// Module 6260 (GestureObjects)
import ComposedGesture from "ComposedGesture" /* 6160 */;
import HoverEffect from "HoverEffect" /* 6181 */;
import TapGesture from "TapGesture" /* 6261 */;
import PanGesture from "PanGesture" /* 6262 */;
import PinchGesture from "PinchGesture" /* 6263 */;
import RotationGesture from "RotationGesture" /* 6264 */;
import FlingGesture from "FlingGesture" /* 6265 */;
import LongPressGesture from "LongPressGesture" /* 6266 */;
import ForceTouchGesture from "ForceTouchGesture" /* 6267 */;
import NativeGesture from "NativeGesture" /* 6268 */;
import ManualGesture from "ManualGesture" /* 6269 */;


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