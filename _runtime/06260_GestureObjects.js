// _runtime/06260_GestureObjects.js
import ComposedGesture from "06160_ComposedGesture.js";
import HoverEffect from "06181_HoverEffect.js";
import TapGesture from "06261_TapGesture.js";
import PanGesture from "06262_PanGesture.js";
import PinchGesture from "06263_PinchGesture.js";
import RotationGesture from "06264_RotationGesture.js";
import FlingGesture from "06265_FlingGesture.js";
import LongPressGesture from "06266_LongPressGesture.js";
import ForceTouchGesture from "06267_ForceTouchGesture.js";
import NativeGesture from "06268_NativeGesture.js";
import ManualGesture from "06269_ManualGesture.js";

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
