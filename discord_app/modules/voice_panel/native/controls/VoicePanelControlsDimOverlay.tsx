// discord_app/modules/voice_panel/native/controls/VoicePanelControlsDimOverlay.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import AccessibilityPreferencesSharedValue from "../../../a11y/native/AccessibilityPreferencesSharedValue.tsx";
import VoicePanelControlUtils from "utils/VoicePanelControlUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_4 = fn(14129).BACKDROP_OPAQUE_MAX_OPACITY;
const VoicePanelConstants = fn(12273);
({ PANEL_CONTROLS_HEIGHT_PHYSICS: hasOwnProperty, VoicePanelModes: metroRequire } = VoicePanelConstants);
const VoicePanelControlsModes = fn(12271).VoicePanelControlsModes;
const jsx = fn(21).jsx;
const __initData = {
  code: "function VoicePanelControlsDimOverlayTsx1(){const{windowDimensions,getDrawerSpec,safeArea,controlsSpecs,VoicePanelControlsModes,mode,VoicePanelModes,interpolate,wrapperSpecs,BACKDROP_OPAQUE_MAX_OPACITY}=this.__closure;const{height:height}=windowDimensions.get();const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(height,safeArea.get().top);if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER||mode.get()!==VoicePanelModes.PANEL){return 0;}return interpolate(wrapperSpecs.get().height,[minHeight,maxHeight],[0,BACKDROP_OPAQUE_MAX_OPACITY],'clamp');}",
};
const __initData2 = {
  code: "function VoicePanelControlsDimOverlayTsx2(){const{overlayOpacity}=this.__closure;return overlayOpacity.get()>=0.35;}",
};
const __initData3 = {
  code: "function VoicePanelControlsDimOverlayTsx3(){const{withSpring,overlayOpacity,PANEL_CONTROLS_HEIGHT_PHYSICS,accessibilityPreferencesSharedValue,overlayActive}=this.__closure;return{zIndex:1,opacity:withSpring(overlayOpacity.get(),PANEL_CONTROLS_HEIGHT_PHYSICS),display:accessibilityPreferencesSharedValue.get().screenReaderEnabled&&!overlayActive.get()?'none':'flex'};}",
};
const __initData4 = {
  code: "function VoicePanelControlsDimOverlayTsx4(){const{overlayActive}=this.__closure;return{pointerEvents:!overlayActive.get()?'none':'auto'};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDimOverlay.tsx");

export default noop.memo(function VoicePanelControlsDimOverlay(wrapperSpecs) {
  wrapperSpecs = wrapperSpecs.wrapperSpecs;
  let windowDimensions;
  let setControlsMode;
  let controlsSpecs;
  let derivedValue;
  let derivedValue1;
  const context = controlsSpecs.useContext(windowDimensions(setControlsMode[5]));
  windowDimensions = context.windowDimensions;
  setControlsMode = context.setControlsMode;
  controlsSpecs = context.controlsSpecs;
  const safeArea = context.safeArea;
  const mode = context.mode;
  let obj = wrapperSpecs(setControlsMode[6]);
  class A {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[7]);
      drawerSpec = obj.getDrawerSpec(windowDimensions.get().height, safeArea.get().top);
      ({ minHeight, maxHeight } = drawerSpec);
      num = 0;
      if (controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER) {
        tmp4 = mode;
        tmp5 = VoicePanelModes;
        num = 0;
        if (mode.get() === VoicePanelModes.PANEL) {
          tmpResult = tmp(tmp2[6]);
          tmp6 = wrapperSpecs;
          items = [,];
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
  obj = {
    windowDimensions,
    getDrawerSpec: wrapperSpecs(setControlsMode[7]).getDrawerSpec,
    safeArea,
    controlsSpecs,
    VoicePanelControlsModes: derivedValue1,
    mode,
    VoicePanelModes: derivedValue,
    interpolate: wrapperSpecs(setControlsMode[6]).interpolate,
    wrapperSpecs,
    BACKDROP_OPAQUE_MAX_OPACITY: safeArea,
  };
  A.__closure = obj;
  A.__workletHash = 17386741533055;
  A.__initData = __initData;
  derivedValue = obj.useDerivedValue(A);
  const fn = function y() {
    return derivedValue.get() >= 0.35;
  };
  fn.__closure = { overlayOpacity: derivedValue };
  fn.__workletHash = 733654137262;
  fn.__initData = __initData2;
  derivedValue1 = wrapperSpecs(setControlsMode[6]).useDerivedValue(fn);
  const obj3 = wrapperSpecs(setControlsMode[6]);
  class S {
    constructor() {
      obj = { zIndex: 1, opacity: null, display: null };
      obj2 = closure_0(closure_2[8]);
      obj.opacity = obj2.withSpring(closure_6.get(), closure_5);
      accessibilityPreferencesSharedValue = closure_0(closure_2[9]).accessibilityPreferencesSharedValue;
      str = "flex";
      if (accessibilityPreferencesSharedValue.get().screenReaderEnabled) {
        tmp = closure_7;
        str = "flex";
        if (!closure_7.get()) {
          str = "none";
        }
      }
      obj.display = str;
      return obj;
    }
  }
  obj = {
    withSpring: wrapperSpecs(setControlsMode[8]).withSpring,
    overlayOpacity: derivedValue,
    PANEL_CONTROLS_HEIGHT_PHYSICS: mode,
    accessibilityPreferencesSharedValue: wrapperSpecs(setControlsMode[9]).accessibilityPreferencesSharedValue,
    overlayActive: derivedValue1,
  };
  S.__closure = obj;
  S.__workletHash = 7500180433000;
  S.__initData = __initData3;
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
  fn2.__initData = __initData4;
  let items = [setControlsMode];
  const animatedProps = wrapperSpecs(setControlsMode[6]).useAnimatedProps(fn2);
  const onDismiss = controlsSpecs.useCallback(() => {
    setControlsMode({ mode: VoicePanelControlsModes.FLOATING_DEFAULT });
  }, items);
  return jsx(wrapperSpecs(setControlsMode[10]).Backdrop, {
    onDismiss,
    style,
    animatedProps,
    opaque: true,
    "aria-hidden": true,
  });
});
