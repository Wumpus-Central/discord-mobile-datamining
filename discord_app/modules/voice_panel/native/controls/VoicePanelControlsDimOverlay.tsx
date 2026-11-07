// === Module 19721: VoicePanelControlsDimOverlay ===

// Module 19721 (VoicePanelControlsDimOverlay)
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11362 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_4 = fn(16117).BACKDROP_OPAQUE_MAX_OPACITY;
const VoicePanelConstants = fn(11363);
({ PANEL_CONTROLS_HEIGHT_PHYSICS: hasOwnProperty, VoicePanelModes: closure_6 } = VoicePanelConstants);
const VoicePanelControlsModes = fn(11361).VoicePanelControlsModes;
let jsx = fn(21).jsx;
let closure_9 = { code: "(function VoicePanelControlsDimOverlayTsx1(){let[windowDimensions,getDrawerSpec,safeArea,controlsSpecs,VoicePanelControlsModes,mode,VoicePanelModes,interpolate,wrapperSpecs,BACKDROP_OPAQUE_MAX_OPACITY]=this.__closure;const{height:height}=windowDimensions.get();const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(height,safeArea.get().top);if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER||mode.get()!==VoicePanelModes.PANEL){return 0;}return interpolate(wrapperSpecs.get().height,[minHeight,maxHeight],[0,BACKDROP_OPAQUE_MAX_OPACITY],'clamp');})" };
let closure_10 = { code: "(function VoicePanelControlsDimOverlayTsx2(){let[overlayOpacity]=this.__closure;return overlayOpacity.get()>=0.35;})" };
let closure_11 = { code: "(function VoicePanelControlsDimOverlayTsx3(){let[withSpring,overlayOpacity,PANEL_CONTROLS_HEIGHT_PHYSICS,accessibilityPreferencesSharedValue,overlayActive]=this.__closure;return{zIndex:1,opacity:withSpring(overlayOpacity.get(),PANEL_CONTROLS_HEIGHT_PHYSICS),display:accessibilityPreferencesSharedValue.get().screenReaderEnabled&&!overlayActive.get()?'none':'flex'};})" };
let closure_12 = { code: "(function VoicePanelControlsDimOverlayTsx4(){let[overlayActive]=this.__closure;return{pointerEvents:!overlayActive.get()?'none':'auto'};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDimOverlay.tsx");

export default noop.memo(function VoicePanelControlsDimOverlay(wrapperSpecs) {
  const context = noop.useContext(VoicePanelStateContextDefault);
  const setControlsMode = context.setControlsMode;
  _require = setControlsMode;
  ({ windowDimensions, controlsSpecs, safeArea, mode } = context);
  items = [c9, windowDimensions, require("VoicePanelControlUtils").getDrawerSpec, safeArea, controlsSpecs, c7, mode, c6, require("module_1652").interpolate, wrapperSpecs.wrapperSpecs, c4];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  jsx = undefined;
  c9 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  class VoicePanelControlsDimOverlayTsx1 {
    constructor() {
      tmp = closure_1(closure_0.get().height, closure_2.get().top);
      ({ minHeight, maxHeight } = tmp);
      num = 0;
      if (closure_3.get().mode === closure_4.DRAWER) {
        tmp2 = closure_5;
        tmp3 = closure_6;
        num = 0;
        if (closure_5.get() === closure_6.PANEL) {
          tmp4 = closure_7;
          tmp5 = closure_8;
          items = [, ];
          items[0] = minHeight;
          items[1] = maxHeight;
          tmp6 = closure_9;
          items1 = [0];
          items1[1] = closure_9;
          str = "clamp";
          tmp7 = items;
          tmp8 = items1;
          num = closure_7(closure_8.get().height, items, items1, "clamp");
        }
      }
      return num;
    }
  }
  let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  VoicePanelControlsDimOverlayTsx1.__closure = items1;
  VoicePanelControlsDimOverlayTsx1.__workletHash = 15211606332422;
  VoicePanelControlsDimOverlayTsx1.__initData = tmp4;
  const derivedValue = require("module_1652").useDerivedValue(VoicePanelControlsDimOverlayTsx1);
  let obj = noop;
  const obj2 = require("module_1652");
  const items2 = [closure_10, derivedValue];
  _require = undefined;
  [tmp16, tmp17] = items2;
  class VoicePanelControlsDimOverlayTsx2 {
    constructor() {
      return closure_0.get() >= 0.35;
    }
  }
  const items3 = [tmp17];
  VoicePanelControlsDimOverlayTsx2.__closure = items3;
  VoicePanelControlsDimOverlayTsx2.__workletHash = 14055617662103;
  VoicePanelControlsDimOverlayTsx2.__initData = tmp16;
  const derivedValue1 = require("module_1652").useDerivedValue(VoicePanelControlsDimOverlayTsx2);
  const tmp3Result = require("module_1652");
  const items4 = [closure_11, require("spring/spring").withSpring, derivedValue, c5, require("AccessibilityPreferencesSharedValue").accessibilityPreferencesSharedValue, derivedValue1];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24] = items4;
  class VoicePanelControlsDimOverlayTsx3 {
    constructor() {
      obj = { zIndex: 1, opacity: closure_0(closure_1.get(), closure_2), display: null };
      str = "flex";
      if (closure_3.get().screenReaderEnabled) {
        tmp = closure_4;
        str = "flex";
        if (!closure_4.get()) {
          str = "none";
        }
      }
      obj.display = str;
      return obj;
    }
  }
  const items5 = [tmp20, tmp21, tmp22, tmp23, tmp24];
  VoicePanelControlsDimOverlayTsx3.__closure = items5;
  VoicePanelControlsDimOverlayTsx3.__workletHash = 6945037469681;
  VoicePanelControlsDimOverlayTsx3.__initData = tmp19;
  const style = require("module_1652").useAnimatedStyle(VoicePanelControlsDimOverlayTsx3);
  const tmp3Result3 = require("module_1652");
  const items6 = [closure_12, derivedValue1];
  _require = undefined;
  [tmp26, tmp27] = items6;
  class VoicePanelControlsDimOverlayTsx4 {
    constructor() {
      pointerEvents = "none";
      if (closure_0.get()) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  const items7 = [tmp27];
  VoicePanelControlsDimOverlayTsx4.__closure = items7;
  VoicePanelControlsDimOverlayTsx4.__workletHash = 10220341121843;
  VoicePanelControlsDimOverlayTsx4.__initData = tmp26;
  const items8 = [setControlsMode];
  const animatedProps = require("module_1652").useAnimatedProps(VoicePanelControlsDimOverlayTsx4);
  const onDismiss = obj.useCallback(() => {
    _undefined({ mode: VoicePanelControlsModes.FLOATING_DEFAULT });
  }, items8);
  return jsx(require("Backdrop").Backdrop, { onDismiss, style, animatedProps, opaque: true, "aria-hidden": true });
});