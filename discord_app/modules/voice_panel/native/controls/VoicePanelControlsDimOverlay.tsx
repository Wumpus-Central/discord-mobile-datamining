// === Module 17326: VoicePanelControlsDimOverlay ===

// Module 17326 (VoicePanelControlsDimOverlay)
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import AccessibilityPreferencesSharedValue from "AccessibilityPreferencesSharedValue" /* 14200 */;
import VoicePanelControlUtils from "VoicePanelControlUtils" /* 17291 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = fn(14202).BACKDROP_OPAQUE_MAX_OPACITY;
const VoicePanelConstants = fn(11902);
({ PANEL_CONTROLS_HEIGHT_PHYSICS: hasOwnProperty, VoicePanelModes: metroRequire } = VoicePanelConstants);
const VoicePanelControlsModes = fn(11900).VoicePanelControlsModes;
const jsx = fn(21).jsx;
const __initData = { code: "function VoicePanelControlsDimOverlayTsx1(){const{windowDimensions,getDrawerSpec,safeArea,controlsSpecs,VoicePanelControlsModes,mode,VoicePanelModes,interpolate,wrapperSpecs,BACKDROP_OPAQUE_MAX_OPACITY}=this.__closure;const{height:height}=windowDimensions.get();const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(height,safeArea.get().top);if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER||mode.get()!==VoicePanelModes.PANEL){return 0;}return interpolate(wrapperSpecs.get().height,[minHeight,maxHeight],[0,BACKDROP_OPAQUE_MAX_OPACITY],\"clamp\");}" };
const __initData2 = { code: "function VoicePanelControlsDimOverlayTsx2(){const{overlayOpacity}=this.__closure;return overlayOpacity.get()>=0.35;}" };
const __initData3 = { code: "function VoicePanelControlsDimOverlayTsx3(){const{withSpring,overlayOpacity,PANEL_CONTROLS_HEIGHT_PHYSICS,accessibilityPreferencesSharedValue,overlayActive}=this.__closure;return{zIndex:1,opacity:withSpring(overlayOpacity.get(),PANEL_CONTROLS_HEIGHT_PHYSICS),display:accessibilityPreferencesSharedValue.get().screenReaderEnabled&&!overlayActive.get()?\"none\":\"flex\"};}" };
const __initData4 = { code: "function VoicePanelControlsDimOverlayTsx4(){const{overlayActive}=this.__closure;return{pointerEvents:!overlayActive.get()?\"none\":\"auto\"};}" };
const __initData5 = { code: "function VoicePanelControlsDimOverlayTsx5(){const{windowDimensions,getDrawerSpec,safeArea,controlsSpecs,VoicePanelControlsModes,mode,VoicePanelModes,interpolate,wrapperSpecs,BACKDROP_OPAQUE_MAX_OPACITY}=this.__closure;const{height:height}=windowDimensions.get();const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(height,safeArea.get().top);if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER||mode.get()!==VoicePanelModes.PANEL){return 0;}return interpolate(wrapperSpecs.get().height,[minHeight,maxHeight],[0,BACKDROP_OPAQUE_MAX_OPACITY],'clamp');}" };
const __initData6 = { code: "function VoicePanelControlsDimOverlayTsx6(){const{overlayOpacity}=this.__closure;return overlayOpacity.get()>=0.35;}" };
const __initData7 = { code: "function VoicePanelControlsDimOverlayTsx7(){const{withSpring,overlayOpacity,PANEL_CONTROLS_HEIGHT_PHYSICS,accessibilityPreferencesSharedValue,overlayActive}=this.__closure;return{zIndex:1,opacity:withSpring(overlayOpacity.get(),PANEL_CONTROLS_HEIGHT_PHYSICS),display:accessibilityPreferencesSharedValue.get().screenReaderEnabled&&!overlayActive.get()?'none':'flex'};}" };
const __initData8 = { code: "function VoicePanelControlsDimOverlayTsx8(){const{overlayActive}=this.__closure;return{pointerEvents:!overlayActive.get()?'none':'auto'};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDimOverlay.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((wrapperSpecs) => {
  const cResult = wrapperSpecs(setControlsMode[6]).c(6);
  wrapperSpecs = wrapperSpecs.wrapperSpecs;
  const context = controlsSpecs.useContext(windowDimensions(setControlsMode[7]));
  windowDimensions = context.windowDimensions;
  setControlsMode = context.setControlsMode;
  controlsSpecs = context.controlsSpecs;
  const safeArea = context.safeArea;
  const mode = context.mode;
  let obj = wrapperSpecs(setControlsMode[6]);
  const tmp = wrapperSpecs;
  const tmp2 = setControlsMode;
  class A {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[9]);
      drawerSpec = obj.getDrawerSpec(windowDimensions.get().height, safeArea.get().top);
      ({ minHeight, maxHeight } = drawerSpec);
      num = 0;
      if (controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER) {
        tmp4 = mode;
        tmp5 = VoicePanelModes;
        num = 0;
        if (mode.get() === VoicePanelModes.PANEL) {
          tmpResult = tmp(tmp2[8]);
          tmp6 = wrapperSpecs;
          items = [, ];
          items[0] = minHeight;
          items[1] = maxHeight;
          tmp7 = closure_4;
          items1 = [0];
          items1[1] = closure_4;
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
  const obj2 = wrapperSpecs(setControlsMode[8]);
  A.__closure = { windowDimensions, getDrawerSpec: wrapperSpecs(setControlsMode[9]).getDrawerSpec, safeArea, controlsSpecs, VoicePanelControlsModes: derivedValue1, mode, VoicePanelModes: derivedValue, interpolate: wrapperSpecs(setControlsMode[8]).interpolate, wrapperSpecs, BACKDROP_OPAQUE_MAX_OPACITY: safeArea };
  A.__workletHash = 8006040566655;
  A.__initData = __initData;
  derivedValue = obj2.useDerivedValue(A);
  const obj3 = { windowDimensions, getDrawerSpec: wrapperSpecs(setControlsMode[9]).getDrawerSpec, safeArea, controlsSpecs, VoicePanelControlsModes: derivedValue1, mode, VoicePanelModes: derivedValue, interpolate: wrapperSpecs(setControlsMode[8]).interpolate, wrapperSpecs, BACKDROP_OPAQUE_MAX_OPACITY: safeArea };
  class S {
    constructor() {
      return closure_6.get() >= 0.35;
    }
  }
  S.__closure = { overlayOpacity: derivedValue };
  S.__workletHash = 733654137262;
  S.__initData = __initData2;
  derivedValue1 = wrapperSpecs(setControlsMode[8]).useDerivedValue(S);
  const obj4 = wrapperSpecs(setControlsMode[8]);
  const fn = function y() {
    const obj = { zIndex: 1, opacity: spring.withSpring(derivedValue.get(), hasOwnProperty), display: null };
    const accessibilityPreferencesSharedValue = AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
    let str = "flex";
    if (accessibilityPreferencesSharedValue.get().screenReaderEnabled) {
      str = "flex";
      if (!derivedValue1.get()) {
        str = "none";
      }
    }
    obj.display = str;
    return obj;
  };
  const obj5 = wrapperSpecs(setControlsMode[8]);
  fn.__closure = { withSpring: wrapperSpecs(setControlsMode[10]).withSpring, overlayOpacity: derivedValue, PANEL_CONTROLS_HEIGHT_PHYSICS: mode, accessibilityPreferencesSharedValue: wrapperSpecs(setControlsMode[11]).accessibilityPreferencesSharedValue, overlayActive: derivedValue1 };
  fn.__workletHash = 8950053221992;
  fn.__initData = __initData3;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const obj6 = { withSpring: wrapperSpecs(setControlsMode[10]).withSpring, overlayOpacity: derivedValue, PANEL_CONTROLS_HEIGHT_PHYSICS: mode, accessibilityPreferencesSharedValue: wrapperSpecs(setControlsMode[11]).accessibilityPreferencesSharedValue, overlayActive: derivedValue1 };
  const fn2 = function v() {
    let pointerEvents = "none";
    if (derivedValue1.get()) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  };
  fn2.__closure = { overlayActive: derivedValue1 };
  fn2.__workletHash = 7404509035850;
  fn2.__initData = __initData4;
  const animatedProps = wrapperSpecs(setControlsMode[8]).useAnimatedProps(fn2);
  if (cResult[0] !== setControlsMode) {
    class O {
      constructor() {
        obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
        tmp = setControlsMode(obj);
        return;
      }
    }
    cResult[0] = setControlsMode;
    cResult[1] = O;
  } else {
    class O {
      constructor() {
        obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
        tmp = setControlsMode(obj);
        return;
      }
    }
  }
  if (cResult[2] === O) {
    class O {
      constructor() {
        obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
        tmp = setControlsMode(obj);
        return;
      }
    }
  }
  const obj7 = wrapperSpecs(setControlsMode[8]);
  cResult[2] = O;
  cResult[3] = animatedProps;
  cResult[4] = animatedStyle;
  cResult[5] = jsx(tmp(tmp2[12]).Backdrop, { onDismiss: O, style: animatedStyle, animatedProps, opaque: true, "aria-hidden": true });
  const tmp10 = jsx(tmp(tmp2[12]).Backdrop, { onDismiss: O, style: animatedStyle, animatedProps, opaque: true, "aria-hidden": true });
}) : ((wrapperSpecs) => {
  wrapperSpecs = wrapperSpecs.wrapperSpecs;
  let windowDimensions;
  let setControlsMode;
  let controlsSpecs;
  let derivedValue;
  let derivedValue1;
  const context = controlsSpecs.useContext(windowDimensions(setControlsMode[7]));
  windowDimensions = context.windowDimensions;
  setControlsMode = context.setControlsMode;
  controlsSpecs = context.controlsSpecs;
  const safeArea = context.safeArea;
  const mode = context.mode;
  const fn = function p() {
    const drawerSpec = VoicePanelControlUtils.getDrawerSpec(windowDimensions.get().height, safeArea.get().top);
    ({ minHeight, maxHeight } = drawerSpec);
    let num = 0;
    if (controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER) {
      num = 0;
      if (mode.get() === timestampProducer.PANEL) {
        const tmpResult = ReanimatedRexport;
        const items = [minHeight, maxHeight];
        const items1 = [0, closure_4];
        num = tmpResult.interpolate(wrapperSpecs.get().height, items, items1, "clamp");
      }
    }
    return num;
  };
  let obj = wrapperSpecs(setControlsMode[8]);
  fn.__closure = { windowDimensions, getDrawerSpec: wrapperSpecs(setControlsMode[9]).getDrawerSpec, safeArea, controlsSpecs, VoicePanelControlsModes: derivedValue1, mode, VoicePanelModes: derivedValue, interpolate: wrapperSpecs(setControlsMode[8]).interpolate, wrapperSpecs, BACKDROP_OPAQUE_MAX_OPACITY: safeArea };
  fn.__workletHash = 6517887436923;
  fn.__initData = __initData5;
  derivedValue = obj.useDerivedValue(fn);
  const obj2 = { windowDimensions, getDrawerSpec: wrapperSpecs(setControlsMode[9]).getDrawerSpec, safeArea, controlsSpecs, VoicePanelControlsModes: derivedValue1, mode, VoicePanelModes: derivedValue, interpolate: wrapperSpecs(setControlsMode[8]).interpolate, wrapperSpecs, BACKDROP_OPAQUE_MAX_OPACITY: safeArea };
  const fn2 = function u() {
    return derivedValue.get() >= 0.35;
  };
  fn2.__closure = { overlayOpacity: derivedValue };
  fn2.__workletHash = 7461281052842;
  fn2.__initData = __initData6;
  derivedValue1 = wrapperSpecs(setControlsMode[8]).useDerivedValue(fn2);
  const obj3 = wrapperSpecs(setControlsMode[8]);
  const fn3 = function h() {
    const obj = { zIndex: 1, opacity: spring.withSpring(derivedValue.get(), hasOwnProperty), display: null };
    const accessibilityPreferencesSharedValue = AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
    let str = "flex";
    if (accessibilityPreferencesSharedValue.get().screenReaderEnabled) {
      str = "flex";
      if (!derivedValue1.get()) {
        str = "none";
      }
    }
    obj.display = str;
    return obj;
  };
  const obj4 = wrapperSpecs(setControlsMode[8]);
  fn3.__closure = { withSpring: wrapperSpecs(setControlsMode[10]).withSpring, overlayOpacity: derivedValue, PANEL_CONTROLS_HEIGHT_PHYSICS: mode, accessibilityPreferencesSharedValue: wrapperSpecs(setControlsMode[11]).accessibilityPreferencesSharedValue, overlayActive: derivedValue1 };
  fn3.__workletHash = 772553517420;
  fn3.__initData = __initData7;
  const style = obj4.useAnimatedStyle(fn3);
  const obj5 = { withSpring: wrapperSpecs(setControlsMode[10]).withSpring, overlayOpacity: derivedValue, PANEL_CONTROLS_HEIGHT_PHYSICS: mode, accessibilityPreferencesSharedValue: wrapperSpecs(setControlsMode[11]).accessibilityPreferencesSharedValue, overlayActive: derivedValue1 };
  class P {
    constructor() {
      pointerEvents = "none";
      if (closure_7.get()) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  P.__closure = { overlayActive: derivedValue1 };
  P.__workletHash = 7602068622918;
  P.__initData = __initData8;
  let items = [setControlsMode];
  const animatedProps = wrapperSpecs(setControlsMode[8]).useAnimatedProps(P);
  const onDismiss = controlsSpecs.useCallback(() => {
    setControlsMode({ mode: VoicePanelControlsModes.FLOATING_DEFAULT });
  }, items);
  return jsx(wrapperSpecs(setControlsMode[12]).Backdrop, { onDismiss, style, animatedProps, opaque: true, "aria-hidden": true });
}));