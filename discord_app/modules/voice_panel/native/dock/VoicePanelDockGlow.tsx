// === Module 19611: VoicePanelDockGlow ===

// Module 19611 (VoicePanelDockGlow)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import ColorUtils from "ColorUtils" /* 5137 */;
import timing_timing from "timing/timing" /* 5370 */;
import LinearGradientDefault from "LinearGradient" /* 5715 */;
import inlineStyles from "inlineStyles" /* 8101 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8915 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11362 */;
import VoicePanelDockRimLight from "VoicePanelDockRimLight" /* 14235 */;
import useVoicePanelDockLevelProps from "useVoicePanelDockLevelProps" /* 14236 */;
import LiveVoiceLevelViewDefault from "LiveVoiceLevelView" /* 14237 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;
const inlineStylesDefault = inlineStyles;

require = fn;
let StyleSheet = fn(17).StyleSheet;
const getDockInset = fn(11381).getDockInset;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
let items = [[0, 1], [0.18, 0.89], [0.36, 0.63], [0.52, 0.4], [0.66, 0.23], [0.78, 0.12], [0.88, 0.05], [0.95, 0.02], [1, 0]];
let closure_9 = { duration: 200 };
let closure_10 = { duration: 90 };
const styles = StyleSheet.create({ layer: { position: "absolute", top: 0, left: 0, right: 0 }, bottomLine: { position: "absolute", bottom: 0, height: 2 } });
let closure_12 = { code: "(function VoicePanelDockGlowTsx1(){let[dockPressed]=this.__closure;return dockPressed.get();})" };
let closure_13 = { code: "(function VoicePanelDockGlowTsx2(isPressed,wasPressed){let[pressGate,withTiming,GLOW_SETTLE_IN_TIMING]=this.__closure;if(isPressed===wasPressed){return;}pressGate.set(isPressed?0:withTiming(1,GLOW_SETTLE_IN_TIMING));})" };
let closure_14 = { code: "(function VoicePanelDockGlowTsx3(){let[isDockConnected,wrapperOffset,dockMinimizeProgress,dockPressProgress]=this.__closure;const settledProgress=0.15;const pressCleared=0.01;return isDockConnected.get()&&!wrapperOffset.get().gestureActive&&1-dockMinimizeProgress.get()<=settledProgress&&dockPressProgress.get()<=pressCleared;})" };
let closure_15 = { code: "(function VoicePanelDockGlowTsx4(isSettled,wasSettled){let[settledGate,withTiming,GLOW_SETTLE_IN_TIMING,GLOW_SETTLE_OUT_TIMING]=this.__closure;if(isSettled===wasSettled){return;}settledGate.set(isSettled?withTiming(1,GLOW_SETTLE_IN_TIMING):withTiming(0,GLOW_SETTLE_OUT_TIMING));})" };
let closure_16 = noop.memo(function DockGlowGradient(arg0) {
  ({ width, dockHeight } = arg0);
  _require = undefined;
  _require = require("useToken").useToken(nativeDefault.colors.ICON_VOICE_SPEAKING);
  const obj = require("useToken");
  const point = require("useMeasureDockGlowOffset").getDockGlowHotSpot({ width, height: dockHeight });
  const size = { width, height: dockHeight, style: StyleSheet.absoluteFill, children: null };
  const obj2 = require("useMeasureDockGlowOffset");
  const obj3 = { children: null };
  const tmp = inlineStylesDefault;
  obj3.children = closure_6(require("inlineStyles").RadialGradient, {
    id: "dockGlow",
    cx: `${point.x / width * 100}%`,
    cy: "" + Math.round(point.y / dockHeight * 100) + "%",
    rx: "80%",
    ry: "110.00000000000001%",
    children: items.map((item) => {
      [tmp, tmp2] = item;
      return timestampProducer(inlineStyles.Stop, { offset: tmp, stopColor, stopOpacity: Math.min(tmp2 * (1 + 0.3500000000000001 * tmp2) * 0.1337 * 1.8, 1) }, tmp);
    })
  });
  items = [closure_6(require("inlineStyles").Defs, obj3), closure_6(require("inlineStyles").Rect, { x: 0, y: 0, width, height: dockHeight, fill: "url(#dockGlow)" })];
  size.children = items;
  return closure_7(tmp, size);
});
let closure_17 = { code: "(function VoicePanelDockGlowTsx5(){let[settledGate,pressGate,micLive]=this.__closure;return{opacity:settledGate.get()*pressGate.get()*micLive.get()};})" };
let closure_18 = { code: "(function VoicePanelDockGlowTsx6(){let[settledGate,pressGate,micLive]=this.__closure;return settledGate.get()*pressGate.get()*micLive.get();})" };
let closure_19 = { code: "(function VoicePanelDockGlowTsx7(value){let[voicePanelDockRimOpacity]=this.__closure;voicePanelDockRimOpacity.set(value);})" };
let closure_20 = { code: "(function VoicePanelDockGlowTsx8(){let[getDockInset,dockPressProgress,isDockConnected,wrapperDimensions,getDockRowOpacity,dockMinimizeProgress,isDockExpanding,dockContentSwap,sheetExitProgress,micLive]=this.__closure;const inset=getDockInset(dockPressProgress.get());const isDockShowing=isDockConnected.get()&&wrapperDimensions.get().drawerHeight>0;const rowOpacity=getDockRowOpacity(1-dockMinimizeProgress.get(),isDockExpanding.get(),dockContentSwap.get());return{left:inset,right:inset,opacity:isDockShowing?rowOpacity*(1-sheetExitProgress.get())*micLive.get():0};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockGlow.tsx");

export function VoicePanelDockGlow(micLive) {
  micLive = micLive.micLive;
  const tmp3 = useStateFromSharedValueDefault(noop.useContext(VoicePanelStateContextDefault).dockHeight);
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ dockMinimizeProgress, dockPressProgress, dockPressed, isDockConnected, wrapperOffset } = context);
  const sharedValue = _mod1652.useSharedValue(1);
  items = [closure_12, dockPressed];
  c0 = undefined;
  [tmp7, tmp8] = items;
  class VoicePanelDockGlowTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items1 = [tmp8];
  VoicePanelDockGlowTsx1.__closure = items1;
  VoicePanelDockGlowTsx1.__workletHash = 104815698833;
  VoicePanelDockGlowTsx1.__initData = tmp7;
  const items2 = [closure_13, sharedValue, timing_timing.withTiming, closure_9];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp10, tmp11, tmp12, tmp13] = items2;
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
  const items3 = [tmp11, tmp12, tmp13];
  VoicePanelDockGlowTsx2.__closure = items3;
  VoicePanelDockGlowTsx2.__workletHash = 16677252752401;
  VoicePanelDockGlowTsx2.__initData = tmp10;
  const animatedReaction = _mod1652.useAnimatedReaction(VoicePanelDockGlowTsx1, VoicePanelDockGlowTsx2);
  const sharedValue1 = _mod1652.useSharedValue(0);
  const tmp5Result = _mod1652;
  const items4 = [closure_14, isDockConnected, wrapperOffset, dockMinimizeProgress, dockPressProgress];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp16, tmp17, tmp18, tmp19, tmp20] = items4;
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
  const items5 = [tmp17, tmp18, tmp19, tmp20];
  VoicePanelDockGlowTsx3.__closure = items5;
  VoicePanelDockGlowTsx3.__workletHash = 3258060662491;
  VoicePanelDockGlowTsx3.__initData = tmp16;
  const items6 = [closure_15, sharedValue1, timing_timing.withTiming, closure_9, closure_10];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp21, tmp22, tmp23, tmp24, tmp25] = items6;
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
  const items7 = [tmp22, tmp23, tmp24, tmp25];
  VoicePanelDockGlowTsx4.__closure = items7;
  VoicePanelDockGlowTsx4.__workletHash = 9180121447929;
  VoicePanelDockGlowTsx4.__initData = tmp21;
  const animatedReaction1 = _mod1652.useAnimatedReaction(VoicePanelDockGlowTsx3, VoicePanelDockGlowTsx4);
  const tmp5Result5 = _mod1652;
  const voicePanelDockGlowLevelProps = useVoicePanelDockLevelProps.useVoicePanelDockGlowLevelProps();
  const tmp5Result6 = useVoicePanelDockLevelProps;
  const items8 = [closure_17, sharedValue1, sharedValue, micLive];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp28, tmp29, tmp30, tmp31] = items8;
  class VoicePanelDockGlowTsx5 {
    constructor() {
      obj = { opacity: null };
      value = closure_0.get();
      result = value * closure_1.get();
      obj.opacity = result * closure_2.get();
      return obj;
    }
  }
  const items9 = [tmp29, tmp30, tmp31];
  VoicePanelDockGlowTsx5.__closure = items9;
  VoicePanelDockGlowTsx5.__workletHash = 6231699429968;
  VoicePanelDockGlowTsx5.__initData = tmp28;
  const animatedStyle = _mod1652.useAnimatedStyle(VoicePanelDockGlowTsx5);
  const tmp5Result7 = _mod1652;
  const items10 = [closure_18, sharedValue1, sharedValue, micLive];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp33, tmp34, tmp35, tmp36] = items10;
  class VoicePanelDockGlowTsx6 {
    constructor() {
      value = closure_0.get();
      result = value * closure_1.get();
      return result * closure_2.get();
    }
  }
  const items11 = [tmp34, tmp35, tmp36];
  VoicePanelDockGlowTsx6.__closure = items11;
  VoicePanelDockGlowTsx6.__workletHash = 17088839538486;
  VoicePanelDockGlowTsx6.__initData = tmp33;
  const items12 = [closure_19, VoicePanelDockRimLight.voicePanelDockRimOpacity];
  c0 = undefined;
  [tmp37, tmp38] = items12;
  class VoicePanelDockGlowTsx7 {
    constructor(arg0) {
      result = closure_0.set(micLive);
      return;
    }
  }
  const items13 = [tmp38];
  VoicePanelDockGlowTsx7.__closure = items13;
  VoicePanelDockGlowTsx7.__workletHash = 12895478017097;
  VoicePanelDockGlowTsx7.__initData = tmp37;
  const animatedReaction2 = _mod1652.useAnimatedReaction(VoicePanelDockGlowTsx6, VoicePanelDockGlowTsx7);
  let tmp40 = null;
  if (tmp3 > 0) {
    const obj3 = { style: null, pointerEvents: "none", children: null };
    const items14 = [closure_11.layer, , ];
    const obj4 = { height: tmp3 };
    items14[1] = obj4;
    items14[2] = animatedStyle;
    obj3.style = items14;
    const obj5 = { style: StyleSheet.absoluteFill };
    const merged = Object.assign(voicePanelDockGlowLevelProps);
    obj5.minOpacity = VoicePanelDockRimLight.DOCK_GLOW_REST_OPACITY;
    obj5.maxOpacity = 1;
    const obj6 = { width: useWindowDimensionsDefault().width, dockHeight: tmp3 };
    obj5.children = timestampProducer(closure_16, obj6);
    obj3.children = timestampProducer(LiveVoiceLevelViewDefault, obj5);
    tmp40 = timestampProducer(_modDef1652.View, obj3);
    const tmpResult = LiveVoiceLevelViewDefault;
  }
  return tmp40;
}
export function VoicePanelDockBottomLine(micLive) {
  _require = undefined;
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ dockContentSwap, dockMinimizeProgress, dockPressProgress, isDockConnected, isDockExpanding, sheetExitProgress, wrapperDimensions } = context);
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
  const items1 = [closure_20, c5, dockPressProgress, isDockConnected, wrapperDimensions, require("VoicePanelSheetMorph").getDockRowOpacity, dockMinimizeProgress, isDockExpanding, dockContentSwap, sheetExitProgress, micLive.micLive];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items1;
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
      rect = { left: tmp, right: tmp, opacity: null };
      num2 = 0;
      if (value) {
        tmp7 = closure_8;
        tmp9 = closure_9;
        result = tmp6 * (1 - closure_8.get());
        num2 = result * closure_9.get();
      }
      rect.opacity = num2;
      return rect;
    }
  }
  const items2 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  VoicePanelDockGlowTsx8.__closure = items2;
  VoicePanelDockGlowTsx8.__workletHash = 791728825001;
  VoicePanelDockGlowTsx8.__initData = tmp7;
  const animatedStyle = require("module_1652").useAnimatedStyle(VoicePanelDockGlowTsx8);
  const obj4 = { style: null, pointerEvents: "none", children: null };
  const items3 = [closure_11.bottomLine, animatedStyle];
  obj4.style = items3;
  const obj5 = { style: StyleSheet.absoluteFill };
  const obj3 = require("module_1652");
  const merged = Object.assign(voicePanelDockGlowLevelProps);
  obj5.minOpacity = 0.1;
  obj5.maxOpacity = 0.3;
  obj5.children = c6(LinearGradientDefault, { style: StyleSheet.absoluteFill, colors: memo, locations: [0, 0.5, 1], start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } });
  obj4.children = c6(LiveVoiceLevelViewDefault, obj5);
  return c6(_modDef1652.View, obj4);
}