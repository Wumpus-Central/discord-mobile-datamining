// === Module 17350: VoicePanelControlsDimOverlay ===

// Module 17350 (VoicePanelControlsDimOverlay)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import spring from "spring" /* 5597 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11900 */;
import AccessibilityPreferencesSharedValue from "AccessibilityPreferencesSharedValue" /* 14202 */;
import BackdropConstants from "BackdropConstants" /* 14204 */;
import VoicePanelControlUtils from "VoicePanelControlUtils" /* 17315 */;
import react from "react" /* 19 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11902 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let closure_4 = BackdropConstants.BACKDROP_OPAQUE_MAX_OPACITY;
({ PANEL_CONTROLS_HEIGHT_PHYSICS: hasOwnProperty, VoicePanelModes: metroRequire } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const jsx = Fragment.jsx;
const __initData = { code: "function VoicePanelControlsDimOverlayTsx1(){const{windowDimensions,getDrawerSpec,safeArea,controlsSpecs,VoicePanelControlsModes,mode,VoicePanelModes,interpolate,wrapperSpecs,BACKDROP_OPAQUE_MAX_OPACITY}=this.__closure;const{height:height}=windowDimensions.get();const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(height,safeArea.get().top);if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER||mode.get()!==VoicePanelModes.PANEL){return 0;}return interpolate(wrapperSpecs.get().height,[minHeight,maxHeight],[0,BACKDROP_OPAQUE_MAX_OPACITY],\"clamp\");}" };
const __initData2 = { code: "function VoicePanelControlsDimOverlayTsx2(){const{overlayOpacity}=this.__closure;return overlayOpacity.get()>=0.35;}" };
const __initData3 = { code: "function VoicePanelControlsDimOverlayTsx3(){const{withSpring,overlayOpacity,PANEL_CONTROLS_HEIGHT_PHYSICS,accessibilityPreferencesSharedValue,overlayActive}=this.__closure;return{zIndex:1,opacity:withSpring(overlayOpacity.get(),PANEL_CONTROLS_HEIGHT_PHYSICS),display:accessibilityPreferencesSharedValue.get().screenReaderEnabled&&!overlayActive.get()?\"none\":\"flex\"};}" };
const __initData4 = { code: "function VoicePanelControlsDimOverlayTsx4(){const{overlayActive}=this.__closure;return{pointerEvents:!overlayActive.get()?\"none\":\"auto\"};}" };
const __initData5 = { code: "function VoicePanelControlsDimOverlayTsx5(){const{windowDimensions,getDrawerSpec,safeArea,controlsSpecs,VoicePanelControlsModes,mode,VoicePanelModes,interpolate,wrapperSpecs,BACKDROP_OPAQUE_MAX_OPACITY}=this.__closure;const{height:height}=windowDimensions.get();const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(height,safeArea.get().top);if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER||mode.get()!==VoicePanelModes.PANEL){return 0;}return interpolate(wrapperSpecs.get().height,[minHeight,maxHeight],[0,BACKDROP_OPAQUE_MAX_OPACITY],'clamp');}" };
const __initData6 = { code: "function VoicePanelControlsDimOverlayTsx6(){const{overlayOpacity}=this.__closure;return overlayOpacity.get()>=0.35;}" };
const __initData7 = { code: "function VoicePanelControlsDimOverlayTsx7(){const{withSpring,overlayOpacity,PANEL_CONTROLS_HEIGHT_PHYSICS,accessibilityPreferencesSharedValue,overlayActive}=this.__closure;return{zIndex:1,opacity:withSpring(overlayOpacity.get(),PANEL_CONTROLS_HEIGHT_PHYSICS),display:accessibilityPreferencesSharedValue.get().screenReaderEnabled&&!overlayActive.get()?'none':'flex'};}" };
const __initData8 = { code: "function VoicePanelControlsDimOverlayTsx8(){const{overlayActive}=this.__closure;return{pointerEvents:!overlayActive.get()?'none':'auto'};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((wrapperSpecs) => {
  let controlsSpecs;
  let derivedValue;
  let derivedValue1;
  let setControlsMode;
  let windowDimensions;
  let obj = wrapperSpecs(setControlsMode[6]);
  const cResult = obj.c(6);
  const tmp = wrapperSpecs;
  wrapperSpecs = wrapperSpecs.wrapperSpecs;
  const context = controlsSpecs.useContext(windowDimensions(setControlsMode[7]));
  windowDimensions = context.windowDimensions;
  const tmp2 = setControlsMode;
  setControlsMode = context.setControlsMode;
  controlsSpecs = context.controlsSpecs;
  const safeArea = context.safeArea;
  const mode = context.mode;
  let obj2 = wrapperSpecs(setControlsMode[8]);
  class A {
    constructor() {
      let maxHeight;
      let minHeight;
      const height = windowDimensions.get().height;
      const obj = VoicePanelControlUtils;
      const drawerSpec = obj.getDrawerSpec(height, safeArea.get().top);
      ({ minHeight, maxHeight } = drawerSpec);
      let num = 0;
      if (controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER) {
        num = 0;
        if (mode.get() === metroRequire.PANEL) {
          const items = [minHeight, maxHeight];
          const items1 = [0, closure_4];
          const tmpResult = ReanimatedRexport;
          num = tmpResult.interpolate(wrapperSpecs.get().height, items, items1, "clamp");
        }
      }
      return num;
    }
  }
  A.__closure = { windowDimensions, getDrawerSpec: wrapperSpecs(setControlsMode[9]).getDrawerSpec, safeArea, controlsSpecs, VoicePanelControlsModes: derivedValue1, mode, VoicePanelModes: derivedValue, interpolate: wrapperSpecs(setControlsMode[8]).interpolate, wrapperSpecs, BACKDROP_OPAQUE_MAX_OPACITY: safeArea };
  A.__workletHash = 8006040566655;
  A.__initData = __initData;
  ({ windowDimensions, getDrawerSpec: wrapperSpecs(setControlsMode[9]).getDrawerSpec, safeArea, controlsSpecs, VoicePanelControlsModes: derivedValue1, mode, VoicePanelModes: derivedValue, interpolate: wrapperSpecs(setControlsMode[8]).interpolate, wrapperSpecs, BACKDROP_OPAQUE_MAX_OPACITY: safeArea });
  derivedValue = obj2.useDerivedValue(A);
  const obj4 = wrapperSpecs(setControlsMode[8]);
  class S {
    constructor() {
      return derivedValue.get() >= 0.35;
    }
  }
  S.__closure = { overlayOpacity: derivedValue };
  S.__workletHash = 733654137262;
  S.__initData = __initData2;
  derivedValue1 = obj4.useDerivedValue(S);
  const fn = function y() {
    let obj2;
    let str;
    const obj = { zIndex: 1, opacity: obj2.withSpring(derivedValue.get(), hasOwnProperty), display: str };
    obj2 = spring;
    const accessibilityPreferencesSharedValue = AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
    str = "flex";
    if (accessibilityPreferencesSharedValue.get().screenReaderEnabled) {
      str = "flex";
      if (!derivedValue1.get()) {
        str = "none";
      }
    }
    return obj;
  };
  const obj5 = wrapperSpecs(setControlsMode[8]);
  fn.__closure = { withSpring: wrapperSpecs(setControlsMode[10]).withSpring, overlayOpacity: derivedValue, PANEL_CONTROLS_HEIGHT_PHYSICS: mode, accessibilityPreferencesSharedValue: wrapperSpecs(setControlsMode[11]).accessibilityPreferencesSharedValue, overlayActive: derivedValue1 };
  fn.__workletHash = 8950053221992;
  fn.__initData = __initData3;
  ({ withSpring: wrapperSpecs(setControlsMode[10]).withSpring, overlayOpacity: derivedValue, PANEL_CONTROLS_HEIGHT_PHYSICS: mode, accessibilityPreferencesSharedValue: wrapperSpecs(setControlsMode[11]).accessibilityPreferencesSharedValue, overlayActive: derivedValue1 });
  const animatedStyle = obj5.useAnimatedStyle(fn);
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
  const obj7 = wrapperSpecs(setControlsMode[8]);
  const animatedProps = obj7.useAnimatedProps(fn2);
  if (cResult[0] !== setControlsMode) {
    class O {
      constructor() {
        const obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
        setControlsMode(obj);
      }
    }
    let num = 0;
    cResult[0] = setControlsMode;
    cResult[1] = O;
  } else {
    class O {
      constructor() {
        const obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
        setControlsMode(obj);
      }
    }
  }
  if (cResult[2] === O) {
    class O {
      constructor() {
        const obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
        setControlsMode(obj);
      }
    }
  }
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
  let obj = wrapperSpecs(setControlsMode[8]);
  const fn = function p() {
    let maxHeight;
    let minHeight;
    const height = windowDimensions.get().height;
    const obj = VoicePanelControlUtils;
    const drawerSpec = obj.getDrawerSpec(height, safeArea.get().top);
    ({ minHeight, maxHeight } = drawerSpec);
    let num = 0;
    if (controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER) {
      num = 0;
      if (mode.get() === metroRequire.PANEL) {
        const items = [minHeight, maxHeight];
        const items1 = [0, closure_4];
        const tmpResult = ReanimatedRexport;
        num = tmpResult.interpolate(wrapperSpecs.get().height, items, items1, "clamp");
      }
    }
    return num;
  };
  let obj2 = { windowDimensions, getDrawerSpec: wrapperSpecs(setControlsMode[9]).getDrawerSpec, safeArea, controlsSpecs, VoicePanelControlsModes: derivedValue1, mode, VoicePanelModes: derivedValue, interpolate: wrapperSpecs(setControlsMode[8]).interpolate, wrapperSpecs, BACKDROP_OPAQUE_MAX_OPACITY: safeArea };
  fn.__closure = obj2;
  fn.__workletHash = 6517887436923;
  fn.__initData = __initData5;
  derivedValue = obj.useDerivedValue(fn);
  const fn2 = function u() {
    return derivedValue.get() >= 0.35;
  };
  fn2.__closure = { overlayOpacity: derivedValue };
  fn2.__workletHash = 7461281052842;
  fn2.__initData = __initData6;
  const obj3 = wrapperSpecs(setControlsMode[8]);
  derivedValue1 = obj3.useDerivedValue(fn2);
  const fn3 = function h() {
    let obj2;
    let str;
    const obj = { zIndex: 1, opacity: obj2.withSpring(derivedValue.get(), hasOwnProperty), display: str };
    obj2 = spring;
    const accessibilityPreferencesSharedValue = AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
    str = "flex";
    if (accessibilityPreferencesSharedValue.get().screenReaderEnabled) {
      str = "flex";
      if (!derivedValue1.get()) {
        str = "none";
      }
    }
    return obj;
  };
  const obj4 = wrapperSpecs(setControlsMode[8]);
  fn3.__closure = { withSpring: wrapperSpecs(setControlsMode[10]).withSpring, overlayOpacity: derivedValue, PANEL_CONTROLS_HEIGHT_PHYSICS: mode, accessibilityPreferencesSharedValue: wrapperSpecs(setControlsMode[11]).accessibilityPreferencesSharedValue, overlayActive: derivedValue1 };
  fn3.__workletHash = 772553517420;
  fn3.__initData = __initData7;
  ({ withSpring: wrapperSpecs(setControlsMode[10]).withSpring, overlayOpacity: derivedValue, PANEL_CONTROLS_HEIGHT_PHYSICS: mode, accessibilityPreferencesSharedValue: wrapperSpecs(setControlsMode[11]).accessibilityPreferencesSharedValue, overlayActive: derivedValue1 });
  const style = obj4.useAnimatedStyle(fn3);
  const obj6 = wrapperSpecs(setControlsMode[8]);
  class P {
    constructor() {
      let pointerEvents = "none";
      if (derivedValue1.get()) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  P.__closure = { overlayActive: derivedValue1 };
  P.__workletHash = 7602068622918;
  P.__initData = __initData8;
  let items = [setControlsMode];
  const animatedProps = obj6.useAnimatedProps(P);
  const onDismiss = controlsSpecs.useCallback(() => {
    const obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
    setControlsMode(obj);
  }, items);
  return jsx(wrapperSpecs(setControlsMode[12]).Backdrop, { onDismiss, style, animatedProps, opaque: true, "aria-hidden": true });
}));
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDimOverlay.tsx");

export default memoResult;