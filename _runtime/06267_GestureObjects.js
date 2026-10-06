// _runtime/06267_GestureObjects.js
import ComposedGesture from "06167_ComposedGesture.js";
import HoverEffect from "06188_HoverEffect.js";
import TapGesture from "06268_TapGesture.js";
import PanGesture from "06269_PanGesture.js";
import PinchGesture from "06270_PinchGesture.js";
import RotationGesture from "06271_RotationGesture.js";
import FlingGesture from "06272_FlingGesture.js";
import LongPressGesture from "06273_LongPressGesture.js";
import ForceTouchGesture from "06274_ForceTouchGesture.js";
import NativeGesture from "06275_NativeGesture.js";
import ManualGesture from "06276_ManualGesture.js";

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
  },
};
