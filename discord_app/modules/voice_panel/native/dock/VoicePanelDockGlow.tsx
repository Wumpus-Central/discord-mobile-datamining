// === Module 18135: VoicePanelDockGlow ===

// Module 18135 (VoicePanelDockGlow)
import nativeDefault from "native" /* 575 */;
import _mod1653 from "module_1653" /* 1653 */;
import ColorUtils from "ColorUtils" /* 5009 */;
import timing_timing from "timing/timing" /* 5222 */;
import LinearGradientDefault from "LinearGradient" /* 5567 */;
import inlineStyles from "inlineStyles" /* 7912 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8577 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11733 */;
import VoicePanelDockRimLight from "VoicePanelDockRimLight" /* 13357 */;
import useVoicePanelDockLevelProps from "useVoicePanelDockLevelProps" /* 13358 */;
import LiveVoiceLevelViewDefault from "LiveVoiceLevelView" /* 13360 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const _modDef1653 = _mod1653;
const inlineStylesDefault = inlineStyles;

require = fn;
let StyleSheet = fn(17).StyleSheet;
const getDockInset = fn(11757).getDockInset;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let items = [[0, 1], [0.18, 0.89], [0.36, 0.63], [0.52, 0.4], [0.66, 0.23], [0.78, 0.12], [0.88, 0.05], [0.95, 0.02], [1, 0]];
let closure_10 = { duration: 200 };
let closure_11 = { duration: 90 };
const styles = StyleSheet.create({ layer: { position: "absolute", bottom: 0, left: 0, right: 0 }, bottomLine: { position: "absolute", bottom: 0, height: 2 } });
let closure_13 = { code: "(function VoicePanelDockGlowTsx1(){let[dockPressed]=this.__closure;return dockPressed.get();})" };
let closure_14 = { code: "(function VoicePanelDockGlowTsx2(isPressed,wasPressed){let[pressGate,withTiming,GLOW_SETTLE_IN_TIMING]=this.__closure;if(isPressed===wasPressed){return;}pressGate.set(isPressed?0:withTiming(1,GLOW_SETTLE_IN_TIMING));})" };
let closure_15 = { code: "(function VoicePanelDockGlowTsx3(){let[isDockConnected,wrapperOffset,dockMinimizeProgress,dockPressProgress]=this.__closure;const settledProgress=0.15;const pressCleared=0.01;return isDockConnected.get()&&!wrapperOffset.get().gestureActive&&1-dockMinimizeProgress.get()<=settledProgress&&dockPressProgress.get()<=pressCleared;})" };
let closure_16 = { code: "(function VoicePanelDockGlowTsx4(isSettled,wasSettled){let[settledGate,withTiming,GLOW_SETTLE_IN_TIMING,GLOW_SETTLE_OUT_TIMING]=this.__closure;if(isSettled===wasSettled){return;}settledGate.set(isSettled?withTiming(1,GLOW_SETTLE_IN_TIMING):withTiming(0,GLOW_SETTLE_OUT_TIMING));})" };
let closure_17 = noop.memo(function DockGlowGradient(dockHeight) {
  dockHeight = dockHeight.dockHeight;
  _require = undefined;
  _require = require("useToken").useToken(nativeDefault.colors.ICON_VOICE_SPEAKING);
  const obj = require("useToken");
  const dockGlowHotSpot = require("useMeasureDockGlowOffset").getDockGlowHotSpot({ width: 0, height: dockHeight });
  const size = { width: "100%", height: dockHeight, style: StyleSheet.absoluteFill, children: null };
  const obj2 = require("useMeasureDockGlowOffset");
  const obj3 = { children: null };
  const tmp2 = inlineStylesDefault;
  obj3.children = closure_7(require("inlineStyles").RadialGradient, {
    id: "dockGlow",
    cx: "50%",
    cy: "" + Math.round(dockGlowHotSpot.y / dockHeight * 100) + "%",
    rx: "80%",
    ry: "110.00000000000001%",
    children: items.map((item) => {
      [tmp, tmp2] = item;
      return metroImportDefault(inlineStyles.Stop, { offset: tmp, stopColor, stopOpacity: Math.min(tmp2 * (1 + 0.3500000000000001 * tmp2) * 0.1337 * 2.2, 1) }, tmp);
    })
  });
  items = [closure_7(require("inlineStyles").Defs, obj3), closure_7(require("inlineStyles").Rect, { x: 0, y: 0, width: "100%", height: dockHeight, fill: "url(#dockGlow)" })];
  size.children = items;
  return closure_8(tmp2, size);
});
let closure_18 = { code: "(function VoicePanelDockGlowTsx5(){let[settledGate,pressGate,micLive,dockEntryProgress,sheetExitProgress]=this.__closure;return{opacity:settledGate.get()*pressGate.get()*micLive.get()*dockEntryProgress.get()*(1-sheetExitProgress.get())};})" };
let closure_19 = { code: "(function VoicePanelDockGlowTsx6(){let[settledGate,pressGate,micLive]=this.__closure;return settledGate.get()*pressGate.get()*micLive.get();})" };
let closure_20 = { code: "(function VoicePanelDockGlowTsx7(value){let[voicePanelDockRimOpacity]=this.__closure;voicePanelDockRimOpacity.set(value);})" };
let closure_21 = { code: "(function VoicePanelDockGlowTsx8(){let[getDockInset,dockPressProgress,isDockConnected,wrapperDimensions,getDockRowOpacity,dockMinimizeProgress,isDockExpanding,dockContentSwap,dockSheetWidth,sheetExitProgress,micLive]=this.__closure;const inset=getDockInset(dockPressProgress.get());const isDockShowing=isDockConnected.get()&&wrapperDimensions.get().drawerHeight>0;const rowOpacity=getDockRowOpacity(1-dockMinimizeProgress.get(),isDockExpanding.get(),dockContentSwap.get());const{drawerWidth:drawerWidth}=wrapperDimensions.get();const sheetWidth=dockSheetWidth.get();return{left:inset,right:inset+Math.max(drawerWidth-sheetWidth,0),opacity:isDockShowing?rowOpacity*(1-sheetExitProgress.get())*micLive.get():0};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockGlow.tsx");

export function VoicePanelDockGlow(micLive) {
  micLive = micLive.micLive;
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ dockEntryProgress, dockHeight, sheetExitProgress } = context);
  const tmp4 = useStateFromSharedValueDefault(dockHeight);
  const context1 = noop.useContext(VoicePanelStateContextDefault);
  ({ dockMinimizeProgress, dockPressProgress, dockPressed, isDockConnected, wrapperOffset } = context1);
  const sharedValue = _mod1653.useSharedValue(1);
  items = [closure_13, dockPressed];
  c0 = undefined;
  [tmp8, tmp9] = items;
  class VoicePanelDockGlowTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items1 = [tmp9];
  VoicePanelDockGlowTsx1.__closure = items1;
  VoicePanelDockGlowTsx1.__workletHash = 104815698833;
  VoicePanelDockGlowTsx1.__initData = tmp8;
  const items2 = [closure_14, sharedValue, timing_timing.withTiming, closure_10];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp11, tmp12, tmp13, tmp14] = items2;
  class VoicePanelDockGlowTsx2 {
    constructor(arg0, arg1) {
      if (micLive !== arg1) {
        num = 0;
        tmp = closure_0;
        if (!micLive) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          num2 = 1;
          num = closure_1(1, closure_2);
        }
        result = closure_0.set(num);
      }
      return;
    }
  }
  const items3 = [tmp12, tmp13, tmp14];
  VoicePanelDockGlowTsx2.__closure = items3;
  VoicePanelDockGlowTsx2.__workletHash = 16677252752401;
  VoicePanelDockGlowTsx2.__initData = tmp11;
  const animatedReaction = _mod1653.useAnimatedReaction(VoicePanelDockGlowTsx1, VoicePanelDockGlowTsx2);
  const sharedValue1 = _mod1653.useSharedValue(0);
  const tmp6Result = _mod1653;
  const items4 = [closure_15, isDockConnected, wrapperOffset, dockMinimizeProgress, dockPressProgress];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp17, tmp18, tmp19, tmp20, tmp21] = items4;
  class VoicePanelDockGlowTsx3 {
    constructor() {
      value = closure_0.get();
      if (value) {
        tmp2 = closure_1;
        value = !closure_1.get().gestureActive;
      }
      if (value) {
        tmp3 = closure_2;
        num = 1;
        num2 = 0.15;
        value = 1 - closure_2.get() <= 0.15;
      }
      if (value) {
        tmp4 = closure_3;
        num3 = 0.01;
        value = closure_3.get() <= 0.01;
      }
      return value;
    }
  }
  const items5 = [tmp18, tmp19, tmp20, tmp21];
  VoicePanelDockGlowTsx3.__closure = items5;
  VoicePanelDockGlowTsx3.__workletHash = 3258060662491;
  VoicePanelDockGlowTsx3.__initData = tmp17;
  const items6 = [closure_16, sharedValue1, timing_timing.withTiming, closure_10, closure_11];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp22, tmp23, tmp24, tmp25, tmp26] = items6;
  class VoicePanelDockGlowTsx4 {
    constructor(arg0, arg1) {
      if (micLive === arg1) {
        return;
      } else {
        tmp2 = closure_1;
        tmp = closure_0;
        if (micLive) {
          tmp5 = closure_2;
          num2 = 1;
          tmp2Result = tmp2(1, closure_2);
        } else {
          tmp3 = closure_3;
          num = 0;
          tmp2Result = tmp2(0, closure_3);
        }
        result = closure_0.set(tmp2Result);
      }
      return;
    }
  }
  const items7 = [tmp23, tmp24, tmp25, tmp26];
  VoicePanelDockGlowTsx4.__closure = items7;
  VoicePanelDockGlowTsx4.__workletHash = 9180121447929;
  VoicePanelDockGlowTsx4.__initData = tmp22;
  const animatedReaction1 = _mod1653.useAnimatedReaction(VoicePanelDockGlowTsx3, VoicePanelDockGlowTsx4);
  const tmp6Result5 = _mod1653;
  const voicePanelDockGlowLevelProps = useVoicePanelDockLevelProps.useVoicePanelDockGlowLevelProps();
  const tmp6Result6 = useVoicePanelDockLevelProps;
  [tmp30, c0] = noop.useState(0);
  const callback = noop.useCallback((nativeEvent) => _undefined(Math.round(nativeEvent.nativeEvent.layout.width)), []);
  const tmp29 = _slicedToArray(noop.useState(0), 2);
  const items8 = [closure_18, sharedValue1, sharedValue, micLive, dockEntryProgress, sheetExitProgress];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37] = items8;
  class VoicePanelDockGlowTsx5 {
    constructor() {
      obj = { opacity: null };
      value = closure_0.get();
      result = value * closure_1.get();
      result1 = result * closure_2.get();
      result2 = result1 * closure_3.get();
      obj.opacity = result2 * (1 - closure_4.get());
      return obj;
    }
  }
  const items9 = [tmp33, tmp34, tmp35, tmp36, tmp37];
  VoicePanelDockGlowTsx5.__closure = items9;
  VoicePanelDockGlowTsx5.__workletHash = 11149034218573;
  VoicePanelDockGlowTsx5.__initData = tmp32;
  const animatedStyle = _mod1653.useAnimatedStyle(VoicePanelDockGlowTsx5);
  const tmp6Result7 = _mod1653;
  const items10 = [closure_19, sharedValue1, sharedValue, micLive];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp39, tmp40, tmp41, tmp42] = items10;
  class VoicePanelDockGlowTsx6 {
    constructor() {
      value = closure_0.get();
      result = value * closure_1.get();
      return result * closure_2.get();
    }
  }
  const items11 = [tmp40, tmp41, tmp42];
  VoicePanelDockGlowTsx6.__closure = items11;
  VoicePanelDockGlowTsx6.__workletHash = 17088839538486;
  VoicePanelDockGlowTsx6.__initData = tmp39;
  const items12 = [closure_20, VoicePanelDockRimLight.voicePanelDockRimOpacity];
  c0 = undefined;
  [tmp43, tmp44] = items12;
  class VoicePanelDockGlowTsx7 {
    constructor(arg0) {
      result = closure_0.set(micLive);
      return;
    }
  }
  const items13 = [tmp44];
  VoicePanelDockGlowTsx7.__closure = items13;
  VoicePanelDockGlowTsx7.__workletHash = 12895478017097;
  VoicePanelDockGlowTsx7.__initData = tmp43;
  const animatedReaction2 = _mod1653.useAnimatedReaction(VoicePanelDockGlowTsx6, VoicePanelDockGlowTsx7);
  let tmp46 = null;
  if (tmp4 > 0) {
    const obj4 = { style: null, pointerEvents: "none", onLayout: null, children: null };
    const items14 = [closure_12.layer, , ];
    const obj5 = { height: tmp4 };
    items14[1] = obj5;
    items14[2] = animatedStyle;
    obj4.style = items14;
    obj4.onLayout = callback;
    const obj6 = { style: StyleSheet.absoluteFill };
    const merged = Object.assign(voicePanelDockGlowLevelProps);
    obj6.minOpacity = VoicePanelDockRimLight.DOCK_GLOW_REST_OPACITY;
    obj6.maxOpacity = 1;
    const obj7 = { dockHeight: tmp4 };
    obj6.children = metroImportDefault(closure_17, obj7, tmp30);
    obj4.children = metroImportDefault(LiveVoiceLevelViewDefault, obj6);
    tmp46 = metroImportDefault(_modDef1653.View, obj4);
    const tmpResult = LiveVoiceLevelViewDefault;
  }
  return tmp46;
}
export function VoicePanelDockBottomLine(micLive) {
  _require = undefined;
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ dockContentSwap, dockMinimizeProgress, dockPressProgress, isDockConnected, isDockExpanding, sheetExitProgress, wrapperDimensions, dockSheetWidth } = context);
  const token = require("useToken").useToken(nativeDefault.colors.ICON_VOICE_SPEAKING);
  _require = token;
  items = [token];
  const memo = noop.useMemo(() => {
    items = [ColorUtils.hexWithOpacity(c0, 0), c0, ];
    items[2] = ColorUtils.hexWithOpacity(c0, 0);
    return items;
  }, items);
  let obj = require("useToken");
  const voicePanelDockGlowLevelProps = require("useVoicePanelDockLevelProps").useVoicePanelDockGlowLevelProps();
  const obj2 = require("useVoicePanelDockLevelProps");
  const items1 = [closure_21, c6, dockPressProgress, isDockConnected, wrapperDimensions, require("VoicePanelSheetMorph").getDockRowOpacity, dockMinimizeProgress, isDockExpanding, dockContentSwap, dockSheetWidth, sheetExitProgress, micLive.micLive];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items1;
  class VoicePanelDockGlowTsx8 {
    constructor() {
      tmp = closure_0(closure_1.get());
      value = closure_2.get();
      if (value) {
        tmp3 = closure_3;
        num = 0;
        value = closure_3.get().drawerHeight > 0;
      }
      diff = 1 - closure_5.get();
      value1 = closure_6.get();
      tmp6 = closure_4(diff, value1, closure_7.get());
      rect = { left: tmp, right: tmp + Math.max(closure_3.get().drawerWidth - closure_8.get(), 0), opacity: null };
      num2 = 0;
      if (value) {
        tmp7 = closure_9;
        tmp9 = closure_10;
        result = tmp6 * (1 - closure_9.get());
        num2 = result * closure_10.get();
      }
      rect.opacity = num2;
      return rect;
    }
  }
  const items2 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  VoicePanelDockGlowTsx8.__closure = items2;
  VoicePanelDockGlowTsx8.__workletHash = 559055664937;
  VoicePanelDockGlowTsx8.__initData = tmp7;
  const animatedStyle = require("module_1653").useAnimatedStyle(VoicePanelDockGlowTsx8);
  const obj4 = { style: null, pointerEvents: "none", children: null };
  const items3 = [closure_12.bottomLine, animatedStyle];
  obj4.style = items3;
  const obj5 = { style: StyleSheet.absoluteFill };
  const obj3 = require("module_1653");
  const merged = Object.assign(voicePanelDockGlowLevelProps);
  obj5.minOpacity = 0.16;
  obj5.maxOpacity = 0.4;
  obj5.children = c7(LinearGradientDefault, { style: StyleSheet.absoluteFill, colors: memo, locations: [0, 0.5, 1], start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } });
  obj4.children = c7(LiveVoiceLevelViewDefault, obj5);
  return c7(_modDef1653.View, obj4);
}