// === Module 16048: ? ===

// Module 16048
import importAllResult from "noop";
import { BACKDROP_OPAQUE_MAX_OPACITY as closure_4 } from "BACKDROP_OPAQUE_MAX_OPACITY";
import VoicePanelModes from "VoicePanelModes";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { jsx } from "jsxProd";

let c5;
let closure_6;
const require = arg1;
let c3 = importAllResult;
({ PANEL_CONTROLS_HEIGHT_PHYSICS: c5, VoicePanelModes: closure_6 } = VoicePanelModes);
let closure_9 = { code: "function VoicePanelControlsDimOverlayTsx1(){const{windowDimensions,getDrawerSpec,safeArea,controlsSpecs,VoicePanelControlsModes,mode,VoicePanelModes,interpolate,wrapperSpecs,BACKDROP_OPAQUE_MAX_OPACITY}=this.__closure;const{height:height}=windowDimensions.get();const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(height,safeArea.get().top);if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER||mode.get()!==VoicePanelModes.PANEL){return 0;}return interpolate(wrapperSpecs.get().height,[minHeight,maxHeight],[0,BACKDROP_OPAQUE_MAX_OPACITY],'clamp');}" };
let closure_10 = { code: "function VoicePanelControlsDimOverlayTsx2(){const{overlayOpacity}=this.__closure;return overlayOpacity.get()>=0.35;}" };
let closure_11 = { code: "function VoicePanelControlsDimOverlayTsx3(){const{withSpring,overlayOpacity,PANEL_CONTROLS_HEIGHT_PHYSICS,accessibilityPreferencesSharedValue,overlayActive}=this.__closure;return{zIndex:1,opacity:withSpring(overlayOpacity.get(),PANEL_CONTROLS_HEIGHT_PHYSICS),display:accessibilityPreferencesSharedValue.get().screenReaderEnabled&&!overlayActive.get()?'none':'flex'};}" };
let closure_12 = { code: "function VoicePanelControlsDimOverlayTsx4(){const{overlayActive}=this.__closure;return{pointerEvents:!overlayActive.get()?'none':'auto'};}" };
const memoResult = importAllResult.memo(function VoicePanelControlsDimOverlay(wrapperSpecs) {
  wrapperSpecs = wrapperSpecs.wrapperSpecs;
  let windowDimensions;
  let setControlsMode;
  let controlsSpecs;
  let safeArea;
  let mode;
  let derivedValue;
  let derivedValue1;
  const context = controlsSpecs.useContext(windowDimensions(setControlsMode[5]));
  windowDimensions = context.windowDimensions;
  setControlsMode = context.setControlsMode;
  controlsSpecs = context.controlsSpecs;
  safeArea = context.safeArea;
  mode = context.mode;
  let obj = wrapperSpecs(setControlsMode[6]);
  class A {
    constructor() {
      tmp = wrapperSpecs;
      tmp2 = setControlsMode;
      obj = wrapperSpecs(setControlsMode[7]);
      drawerSpec = obj.getDrawerSpec(windowDimensions.get().height, safeArea.get().top);
      ({ minHeight, maxHeight } = drawerSpec);
      num = 0;
      if (controlsSpecs.get().mode === interpolate.DRAWER) {
        tmp4 = mode;
        tmp5 = wrapperSpecs;
        num = 0;
        if (mode.get() === wrapperSpecs.PANEL) {
          tmpResult = tmp(tmp2[6]);
          tmp6 = wrapperSpecs;
          items = [, ];
          items[0] = minHeight;
          items[1] = maxHeight;
          tmp7 = safeArea;
          items1 = [0];
          items1[1] = safeArea;
          str = "clamp";
          tmp8 = tmpResult;
          tmp9 = items;
          tmp10 = items1;
          num = tmpResult.interpolate(wrapperSpecs.get().height, items, items1, "clamp");
        }
      }
      return num;
    }
  }
  obj = { windowDimensions, getDrawerSpec: wrapperSpecs(setControlsMode[7]).getDrawerSpec, safeArea, controlsSpecs, VoicePanelControlsModes: derivedValue1, mode, VoicePanelModes: derivedValue, interpolate: wrapperSpecs(setControlsMode[6]).interpolate, wrapperSpecs, BACKDROP_OPAQUE_MAX_OPACITY: safeArea };
  A.__closure = obj;
  A.__workletHash = 17386741533055;
  A.__initData = closure_9;
  derivedValue = obj.useDerivedValue(A);
  const fn = function y() {
    return derivedValue.get() >= 0.35;
  };
  fn.__closure = { overlayOpacity: derivedValue };
  fn.__workletHash = 733654137262;
  fn.__initData = closure_10;
  derivedValue1 = wrapperSpecs(setControlsMode[6]).useDerivedValue(fn);
  const obj3 = wrapperSpecs(setControlsMode[6]);
  class S {
    constructor() {
      obj = { zIndex: 1, opacity: null, display: null };
      obj2 = wrapperSpecs(setControlsMode[8]);
      obj[1] = obj2.withSpring(wrapperSpecs.get(), mode);
      accessibilityPreferencesSharedValue = wrapperSpecs(setControlsMode[9]).accessibilityPreferencesSharedValue;
      str = "flex";
      if (accessibilityPreferencesSharedValue.get().screenReaderEnabled) {
        tmp = interpolate;
        str = "flex";
        if (!interpolate.get()) {
          str = "none";
        }
      }
      obj[2] = str;
      return obj;
    }
  }
  obj = { withSpring: wrapperSpecs(setControlsMode[8]).withSpring, overlayOpacity: derivedValue, PANEL_CONTROLS_HEIGHT_PHYSICS: mode, accessibilityPreferencesSharedValue: wrapperSpecs(setControlsMode[9]).accessibilityPreferencesSharedValue, overlayActive: derivedValue1 };
  S.__closure = obj;
  S.__workletHash = 7500180433000;
  S.__initData = closure_11;
  const style = wrapperSpecs(setControlsMode[6]).useAnimatedStyle(S);
  const obj4 = wrapperSpecs(setControlsMode[6]);
  const fn2 = function v() {
    let pointerEvents = "none";
    if (derivedValue1.get()) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  };
  fn2.__closure = { overlayActive: derivedValue1 };
  fn2.__workletHash = 873976025930;
  fn2.__initData = closure_12;
  let items = [setControlsMode];
  const animatedProps = wrapperSpecs(setControlsMode[6]).useAnimatedProps(fn2);
  const onDismiss = controlsSpecs.useCallback(() => {
    setControlsMode({ mode: derivedValue1.FLOATING_DEFAULT });
  }, items);
  return jsx(wrapperSpecs(setControlsMode[10]).Backdrop, { onDismiss, style, animatedProps, opaque: true, "aria-hidden": true });
});
const result = require("VoicePanelModes").fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDimOverlay.tsx");

export default memoResult;