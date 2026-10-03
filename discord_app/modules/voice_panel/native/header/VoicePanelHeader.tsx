// === Module 17190: VoicePanelHeader ===

// Module 17190 (VoicePanelHeader)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import useChannelName from "useChannelName" /* 5043 */;
import spring from "spring" /* 5597 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 9573 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 9717 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 11906 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 17164 */;
import useStableParticipant from "useStableParticipant" /* 17195 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4906 */;
import ExperimentStore from "ExperimentStore" /* 4776 */;
import StageMusicStore from "StageMusicStore" /* 9559 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import SpeakingStore from "SpeakingStore" /* 5576 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const VoicePanelConstants = fn(11902);
let MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
({ UI_SHOW_HIDE_PHYSICS: closure_16, VoicePanelModes: closure_17, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_18 } = VoicePanelConstants);
const EDGE_GUTTER = fn(11905).EDGE_GUTTER;
const VoicePanelControlsModes = fn(11900).VoicePanelControlsModes;
const ParticipantTypes = fn(4911).ParticipantTypes;
const ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24 } = jsxProd);
const OPACITY_TIMING = { duration: 300 };
const createStyles = fn(4890);
let obj = { headerWrapper: { zIndex: 1, position: "absolute", top: 0, left: 0, width: "100%", paddingBottom: EDGE_GUTTER, overflow: "hidden" }, blurStyles: null, leftWrapper: null, rightWrapper: null, headerOuter: null, headerInner: null, headerContentWrapper: null, stroke: null, strokeAlt: null, strokeContainer: null, focusedSpeakingDotWrapper: null, focusedSpeakingDot: null, shieldIconMargin: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.opacity = 0.7;
obj.blurStyles = obj3;
obj.leftWrapper = { position: "relative", justifyContent: "flex-start", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: 12 };
obj.rightWrapper = { flexDirection: "row", alignItems: "center", gap: 12, paddingLeft: 12 };
obj.headerOuter = { flexDirection: "row", alignItems: "center" };
obj.headerInner = { flexDirection: "row", alignItems: "center", flexShrink: 1, flexGrow: 1 };
obj.headerContentWrapper = { position: "relative" };
obj.stroke = { height: StyleSheet.hairlineWidth, opacity: 0.2 };
obj.strokeAlt = { height: StyleSheet.hairlineWidth, opacity: 0.8 };
obj.strokeContainer = { position: "absolute", left: 0, right: 0, bottom: 0, height: StyleSheet.hairlineWidth };
let size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, padding: 2 };
obj.focusedSpeakingDotWrapper = size;
const size1 = { width: 8, height: 8, borderRadius: nativeDefault.radii.round };
obj.focusedSpeakingDot = size1;
obj.shieldIconMargin = { marginLeft: -8 };
let closure_26 = createStyles.createStyles(obj);
const constants = { DOWN: 0, [0]: "DOWN", LEFT: 1, [1]: "LEFT" };
let obj4 = {};
const merged1 = Object.assign(MODE_CHANGE_PHYSICS);
obj4.overshootClamping = true;
const __initData = { code: "function VoicePanelHeaderTsx1(){const{isHeaderHidden,focused,scrollPosition}=this.__closure;return!isHeaderHidden.get()&&(focused.get()!=null||scrollPosition.get()>0);}" };
const __initData2 = { code: "function VoicePanelHeaderTsx2(){const{withSpring,showHeaderBlur}=this.__closure;return{blurAmount:withSpring(showHeaderBlur.get()?0.3:0)};}" };
const __initData3 = { code: "function VoicePanelHeaderTsx3(){const{withSpring,showHeaderBlur,HEADER_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(showHeaderBlur.get()?1:0,HEADER_CHANGE_PHYSICS)};}" };
const __initData4 = { code: "function VoicePanelHeaderTsx4(){const{isHeaderHidden,focused,scrollPosition}=this.__closure;return!isHeaderHidden.get()&&(focused.get()!=null||scrollPosition.get()>0);}" };
const __initData5 = { code: "function VoicePanelHeaderTsx5(){const{withSpring,showHeaderBlur}=this.__closure;return{blurAmount:withSpring(showHeaderBlur.get()?0.3:0)};}" };
const __initData6 = { code: "function VoicePanelHeaderTsx6(){const{withSpring,showHeaderBlur,HEADER_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(showHeaderBlur.get()?1:0,HEADER_CHANGE_PHYSICS)};}" };
let ReactCompilerGating = fn(558);
let closure_35 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((isHeaderHidden) => {
  const cResult = isHeaderHidden(focused[21]).c(17);
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  const scrollPosition = isHeaderHidden.scrollPosition;
  focused = isHeaderHidden.focused;
  const tmp3 = closure_26();
  let obj = isHeaderHidden(focused[21]);
  const fn = function n() {
    value = isHeaderHidden.get();
    let tmp2 = !value;
    if (!value) {
      let tmp5 = null != focused.get();
      if (!tmp5) {
        tmp5 = scrollPosition.get() > 0;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  };
  fn.__closure = { isHeaderHidden, focused, scrollPosition };
  fn.__workletHash = 8127245112238;
  fn.__initData = __initData;
  const derivedValue = isHeaderHidden(focused[22]).useDerivedValue(fn);
  const obj2 = isHeaderHidden(focused[22]);
  const fn2 = function o() {
    let num = 0;
    if (derivedValue.get()) {
      num = 0.3;
    }
    return { blurAmount: spring.withSpring(num) };
  };
  obj4 = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue };
  fn2.__closure = obj4;
  fn2.__workletHash = 10074943135400;
  fn2.__initData = __initData2;
  const animatedProps = isHeaderHidden(focused[22]).useAnimatedProps(fn2);
  const obj3 = isHeaderHidden(focused[22]);
  const fn3 = function c() {
    let num = 0;
    if (derivedValue.get()) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, obj4) };
  };
  const obj5 = isHeaderHidden(focused[22]);
  fn3.__closure = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj4 };
  fn3.__workletHash = 2825977044105;
  fn3.__initData = __initData3;
  const animatedStyle = obj5.useAnimatedStyle(fn3);
  if (cResult[0] !== animatedStyle) {
    const items = [StyleSheet.absoluteFill, animatedStyle];
    cResult[0] = animatedStyle;
    cResult[1] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === animatedProps) {
    if (cResult[3] === tmp3.blurStyles) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] !== tmp3.stroke) {
      const obj7 = { style: tmp3.stroke };
      const tmp14 = closure_23(scrollPosition(tmp[25]), obj7);
      cResult[5] = tmp3.stroke;
      cResult[6] = tmp14;
      let tmp11 = tmp14;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== tmp3.strokeAlt) {
      const obj8 = { style: tmp3.strokeAlt };
      const tmp18 = closure_23(scrollPosition(tmp[25]), obj8);
      cResult[7] = tmp3.strokeAlt;
      cResult[8] = tmp18;
      let tmp15 = tmp18;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] === tmp3.strokeContainer) {
      if (cResult[10] === tmp11) {
        if (cResult[11] === tmp15) {
          let tmp19 = cResult[12];
        }
        if (cResult[13] === tmp7) {
          if (cResult[14] === tmp9) {
            if (cResult[15] === tmp19) {
              let tmp23 = cResult[16];
            }
            return tmp23;
          }
        }
        const obj9 = { style: tmp7, pointerEvents: "none", children: null };
        const items1 = [tmp9, tmp19];
        obj9.children = items1;
        const tmp26 = closure_24(scrollPosition(tmp[26]), obj9);
        cResult[13] = tmp7;
        cResult[14] = tmp9;
        cResult[15] = tmp19;
        cResult[16] = tmp26;
        tmp23 = tmp26;
      }
    }
    const obj10 = { style: tmp3.strokeContainer, children: null };
    const items2 = [tmp11, tmp15];
    obj10.children = items2;
    const tmp22 = closure_24(scrollPosition(tmp[25]), obj10);
    cResult[9] = tmp3.strokeContainer;
    cResult[10] = tmp11;
    cResult[11] = tmp15;
    cResult[12] = tmp22;
    tmp19 = tmp22;
  }
  const tmp10 = closure_23(scrollPosition(focused[24]), { style: tmp3.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps });
  cResult[2] = animatedProps;
  cResult[3] = tmp3.blurStyles;
  cResult[4] = tmp10;
  tmp9 = tmp10;
  const obj11 = { style: tmp3.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps };
  const obj6 = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj4 };
}) : ((isHeaderHidden) => {
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  const scrollPosition = isHeaderHidden.scrollPosition;
  const focused = isHeaderHidden.focused;
  const tmp = closure_26();
  const fn = function c() {
    value = isHeaderHidden.get();
    let tmp2 = !value;
    if (!value) {
      let tmp5 = null != focused.get();
      if (!tmp5) {
        tmp5 = scrollPosition.get() > 0;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  };
  fn.__closure = { isHeaderHidden, focused, scrollPosition };
  fn.__workletHash = 17400658237995;
  fn.__initData = __initData4;
  const derivedValue = isHeaderHidden(focused[22]).useDerivedValue(fn);
  let obj = isHeaderHidden(focused[22]);
  const fn2 = function l() {
    let num = 0;
    if (derivedValue.get()) {
      num = 0.3;
    }
    return { blurAmount: spring.withSpring(num) };
  };
  const obj2 = isHeaderHidden(focused[22]);
  fn2.__closure = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue };
  fn2.__workletHash = 850837345455;
  fn2.__initData = __initData5;
  const animatedProps = obj2.useAnimatedProps(fn2);
  obj4 = isHeaderHidden(focused[22]);
  const fn3 = function u() {
    let num = 0;
    if (derivedValue.get()) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, obj4) };
  };
  const obj3 = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue };
  fn3.__closure = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj4 };
  fn3.__workletHash = 6395364000396;
  fn3.__initData = __initData6;
  const animatedStyle = obj4.useAnimatedStyle(fn3);
  const obj6 = { style: null, pointerEvents: "none", children: null };
  const items = [StyleSheet.absoluteFill, animatedStyle];
  obj6.style = items;
  const obj5 = { withSpring: isHeaderHidden(focused[23]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj4 };
  const items1 = [closure_23(scrollPosition(focused[24]), { style: tmp.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps }), ];
  const obj8 = { style: tmp.strokeContainer, children: null };
  const obj7 = { style: tmp.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps };
  let tmp5 = scrollPosition(focused[26]);
  const items2 = [closure_23(scrollPosition(focused[25]), { style: tmp.stroke }), closure_23(scrollPosition(focused[25]), { style: tmp.strokeAlt })];
  obj8.children = items2;
  items1[1] = closure_24(scrollPosition(focused[25]), obj8);
  obj6.children = items1;
  return closure_24(tmp5, obj6);
}));
const __initData7 = { code: "function VoicePanelHeaderTsx7(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}" };
const __initData8 = { code: "function VoicePanelHeaderTsx8(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}" };
const __initData9 = { code: "function VoicePanelHeaderTsx9(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}" };
const __initData10 = { code: "function VoicePanelHeaderTsx10(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}" };
ReactCompilerGating = fn(558);
let closure_40 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = id(controlsSpecs[21]).c(12);
  id = AuthenticationStore.getId();
  const context = derivedValue.useContext(focused(controlsSpecs[27]));
  focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  const obj = id(controlsSpecs[21]);
  const obj2 = derivedValue;
  const sharedValue = id(controlsSpecs[22]).useSharedValue(SpeakingStore.isSpeaking(id));
  if (cResult[0] === id) {
    if (cResult[1] === sharedValue) {
      let tmp8 = cResult[2];
      let tmp9 = cResult[3];
    }
    const layoutEffect = obj2.useLayoutEffect(tmp8, tmp9);
    const tmp12 = closure_26();
    class S {
      constructor() {
        value = null != focused.get();
        if (value) {
          tmp2 = controlsSpecs;
          tmp3 = VoicePanelControlsModes;
          value = controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN;
        }
        if (value) {
          tmp4 = closure_3;
          value = closure_3.get();
        }
        return value;
      }
    }
    obj4 = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
    S.__closure = obj4;
    S.__workletHash = 297593450050;
    S.__initData = __initData7;
    derivedValue = tmp(tmp2[22]).useDerivedValue(S);
    const tmpResult = tmp(tmp2[22]);
    class H {
      constructor() {
        opacity = 0;
        if (closure_4.get()) {
          opacity = 1;
        }
        return { opacity };
      }
    }
    const obj5 = { showSpeakingIndicator: derivedValue };
    H.__closure = obj5;
    H.__workletHash = 10090467727535;
    H.__initData = __initData8;
    const animatedStyle = tmp(tmp2[22]).useAnimatedStyle(H);
    if (cResult[4] === animatedStyle) {
      if (cResult[5] === tmp12.focusedSpeakingDotWrapper) {
        let tmp18 = cResult[6];
      }
      if (cResult[7] !== tmp12.focusedSpeakingDot) {
        const obj6 = { style: tmp12.focusedSpeakingDot };
        const tmp21 = closure_23(tmp5(tmp2[26]), obj6);
        class S {
          constructor() {
            value = null != focused.get();
            if (value) {
              tmp2 = controlsSpecs;
              tmp3 = VoicePanelControlsModes;
              value = controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN;
            }
            if (value) {
              tmp4 = closure_3;
              value = closure_3.get();
            }
            return value;
          }
        }
        cResult[8] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] === tmp18) {
        if (cResult[10] === tmp19) {
          let tmp22 = cResult[11];
        }
        return tmp22;
      }
      const obj7 = { style: null, pointerEvents: "none", children: null };
      class S {
        constructor() {
          value = null != focused.get();
          if (value) {
            tmp2 = controlsSpecs;
            tmp3 = VoicePanelControlsModes;
            value = controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN;
          }
          if (value) {
            tmp4 = closure_3;
            value = closure_3.get();
          }
          return value;
        }
      }
      obj7.children = tmp19;
      const tmp24 = closure_23(tmp5(tmp2[26]), obj7);
      cResult[9] = tmp18;
      cResult[10] = tmp19;
      cResult[11] = tmp24;
      tmp22 = tmp24;
    }
    const items = [tmp12.focusedSpeakingDotWrapper, animatedStyle];
    cResult[4] = animatedStyle;
    cResult[5] = tmp12.focusedSpeakingDotWrapper;
    cResult[6] = items;
    tmp18 = items;
    const tmpResult2 = tmp(tmp2[22]);
  }
  const fn = function t() {
    function handleChange() {
      const result = sharedValue.set(SpeakingStore.isSpeaking(handleChange));
    }
    let result = sharedValue.set(SpeakingStore.isSpeaking(handleChange));
    const result1 = SpeakingStore.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
    };
  };
  const items1 = [id, sharedValue];
  cResult[0] = id;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp9 = items1;
  tmp8 = fn;
  const obj3 = id(controlsSpecs[22]);
}) : (() => {
  const id = AuthenticationStore.getId();
  const context = derivedValue.useContext(focused(controlsSpecs[27]));
  focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  const sharedValue = id(controlsSpecs[22]).useSharedValue(SpeakingStore.isSpeaking(id));
  const items = [id, sharedValue];
  const layoutEffect = derivedValue.useLayoutEffect(() => {
    function handleChange() {
      const result = sharedValue.set(SpeakingStore.isSpeaking(handleChange));
    }
    let result = sharedValue.set(SpeakingStore.isSpeaking(handleChange));
    const result1 = SpeakingStore.addReactChangeListener(handleChange);
    return () => {
      const result = SpeakingStore.removeReactChangeListener(handleChange);
    };
  }, items);
  const tmp5 = closure_26();
  const obj = id(controlsSpecs[22]);
  const fn = function u() {
    value = null != focused.get();
    if (value) {
      value = controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN;
    }
    if (value) {
      value = sharedValue.get();
    }
    return value;
  };
  fn.__closure = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
  fn.__workletHash = 4860356878028;
  fn.__initData = __initData9;
  derivedValue = id(controlsSpecs[22]).useDerivedValue(fn);
  const obj2 = id(controlsSpecs[22]);
  const obj3 = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
  const fn2 = function h() {
    let opacity = 0;
    if (derivedValue.get()) {
      opacity = 1;
    }
    return { opacity };
  };
  fn2.__closure = { showSpeakingIndicator: derivedValue };
  fn2.__workletHash = 898986210230;
  fn2.__initData = __initData10;
  const animatedStyle = id(controlsSpecs[22]).useAnimatedStyle(fn2);
  const obj5 = { style: null, pointerEvents: "none", children: null };
  const items1 = [tmp5.focusedSpeakingDotWrapper, animatedStyle];
  obj5.style = items1;
  obj4 = id(controlsSpecs[22]);
  obj5.children = closure_23(focused(controlsSpecs[26]), { style: tmp5.focusedSpeakingDot });
  return closure_23(focused(controlsSpecs[26]), obj5);
}));
ReactCompilerGating = fn(558);
let closure_41 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = stateFromStores(576).c(10);
  channelId = channelId.channelId;
  const tmp5 = useMyCurrentStageChannelRoleDefault(channelId);
  if (tmp5 != null) {
    const speaker = tmp5.speaker;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageMusicStore];
    const fn = function o() {
      return muted.isMuted();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp6, tmp7);
  const tmpResult = stateFromStores(504);
  if (tmpResult2.useShowStageMusicMuteButton(channelId)) {
    if (speaker) {
      if (cResult[2] !== stateFromStores) {
        const intl = tmp(1126).intl;
        const string = intl.string;
        let ScHlfl = tmp(1126).t;
        if (stateFromStores) {
          ScHlfl = ScHlfl.ScHlfl;
          let stringResult = string(ScHlfl);
        } else {
          stringResult = string(ScHlfl.zqxfrf);
        }
        cResult[2] = stateFromStores;
        cResult[3] = stringResult;
      } else {
        const tmp4Result = importDefault(stateFromStores ? 9570 : 9572);
        if (cResult[4] !== stateFromStores) {
          const fn2 = function p() {
            return StageMusicActionCreators.updateStageMusicMuted(!stateFromStores);
          };
          cResult[4] = stateFromStores;
          cResult[5] = fn2;
          let tmp14 = fn2;
        } else {
          tmp14 = cResult[5];
        }
        if (cResult[6] === cResult[3]) {
          if (cResult[7] === tmp4Result) {
            if (cResult[8] === tmp14) {
              let tmp15 = cResult[9];
            }
            return tmp15;
          }
        }
        const obj2 = { accessibilityLabel: cResult[3], icon: tmp4Result, onPress: tmp14 };
        const tmp17 = closure_23(VoicePanelIconButtonDefault, obj2);
        cResult[6] = cResult[3];
        cResult[7] = tmp4Result;
        cResult[8] = tmp14;
        cResult[9] = tmp17;
        tmp15 = tmp17;
      }
    }
  }
  return null;
}) : ((channelId) => {
  channelId = channelId.channelId;
  let stateFromStores;
  const tmp3 = useMyCurrentStageChannelRoleDefault(channelId);
  if (tmp3 != null) {
    const speaker = tmp3.speaker;
  }
  const items = [StageMusicStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => muted.isMuted());
  const obj = stateFromStores(504);
  let tmp6 = null;
  if (obj2.useShowStageMusicMuteButton(channelId)) {
    tmp6 = null;
    if (speaker) {
      const intl = tmp4(1126).intl;
      const string = intl.string;
      const t = tmp4(1126).t;
      if (stateFromStores) {
        let stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      const obj3 = {
        accessibilityLabel: stringResult,
        icon: importDefault(stateFromStores ? 9570 : 9572),
        onPress() {
              return StageMusicActionCreators.updateStageMusicMuted(!stateFromStores);
            }
      };
      closure_23(VoicePanelIconButtonDefault, obj3);
      const tmpResult = VoicePanelIconButtonDefault;
    }
  }
  return tmp6;
});
const __initData11 = { code: "function VoicePanelHeaderTsx11(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData12 = { code: "function VoicePanelHeaderTsx12(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
const __initData13 = { code: "function VoicePanelHeaderTsx13(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}" };
const __initData14 = { code: "function VoicePanelHeaderTsx14(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs_0=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;const height=!connected.get()?specs_0.height-specs_0.paddingTop+EDGE_GUTTER:specs_0.height;const paddingTop=!connected.get()?EDGE_GUTTER:specs_0.paddingTop;return{...specs_0,paddingTop:paddingTop,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,height:height,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}" };
const __initData15 = { code: "function VoicePanelHeaderTsx15(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}" };
const __initData16 = { code: "function VoicePanelHeaderTsx16(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height_0}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height_0:0,MODE_CHANGE_PHYSICS)}]};}" };
const __initData17 = { code: "function VoicePanelHeaderTsx17(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?\"none\":\"box-none\",importantForAccessibility:isHeaderHidden.get()?\"no-hide-descendants\":\"auto\",accessibilityElementsHidden:isHeaderHidden.get()};}" };
const __initData18 = { code: "function VoicePanelHeaderTsx18(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData19 = { code: "function VoicePanelHeaderTsx19(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
const __initData20 = { code: "function VoicePanelHeaderTsx20(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}" };
const __initData21 = { code: "function VoicePanelHeaderTsx21(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs_0=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;const height=!connected.get()?specs_0.height-specs_0.paddingTop+EDGE_GUTTER:specs_0.height;const paddingTop=!connected.get()?EDGE_GUTTER:specs_0.paddingTop;return{...specs_0,paddingTop:paddingTop,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,height:height,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}" };
const __initData22 = { code: "function VoicePanelHeaderTsx22(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}" };
const __initData23 = { code: "function VoicePanelHeaderTsx23(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height_0}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height_0:0,MODE_CHANGE_PHYSICS)}]};}" };
const __initData24 = { code: "function VoicePanelHeaderTsx24(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}" };
ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((wrapperOffset) => {
  const cResult = wrapperOffset(channelId[21]).c(99);
  wrapperOffset = wrapperOffset.wrapperOffset;
  const gestureState = wrapperOffset.gestureState;
  const tmp4 = closure_26();
  const context = controlsSpecs.useContext(gestureState(channelId[27]));
  channelId = context.channelId;
  ({ channelType, focused } = context);
  controlsSpecs = context.controlsSpecs;
  const mode = context.mode;
  const safeArea = context.safeArea;
  const connected = context.connected;
  ({ scrollPosition, guildId } = context);
  let obj = wrapperOffset(channelId[21]);
  const isScreenReaderEnabled = wrapperOffset(channelId[36]).useIsScreenReaderEnabled();
  let tmp8 = gestureState(channelId[37])(channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    obj4 = { location: "VoicePanelHeader" };
    cResult[0] = obj4;
    let first = obj4;
  } else {
    first = cResult[0];
  }
  let obj3 = wrapperOffset(channelId[36]);
  const treatment = gestureState(channelId[38]).useConfig(first).treatment;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [derivedValue1, token, ChannelStore, connected];
    cResult[1] = items;
    let tmp10 = items;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] !== channelId) {
    function re() {
      const channel = ChannelStore.getChannel(channelId);
      let channelName;
      if (null != channel) {
        channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
      }
      if (channelName == null) {
        const intl = util.intl;
        channelName = intl.string(util.t.zLZPmk);
      }
      return channelName;
    }
    const items1 = [channelId];
    cResult[2] = channelId;
    cResult[3] = re;
    cResult[4] = items1;
    let tmp16 = items1;
    let tmp15 = re;
  } else {
    tmp15 = cResult[3];
    tmp16 = cResult[4];
  }
  const tmp5Result = gestureState(channelId[38]);
  const stateFromStores = wrapperOffset(channelId[29]).useStateFromStores(tmp10, tmp15, tmp16);
  const tmpResult = wrapperOffset(channelId[29]);
  [tmp19, AuthenticationStore] = focused(controlsSpecs.useState(undefined), 2);
  const tmp18 = focused(controlsSpecs.useState(undefined), 2);
  [tmp21, ChannelStore] = focused(controlsSpecs.useState(null), 2);
  function handleFocusChange(Dispatcher) {
    let tmp3 = null;
    if (null != Dispatcher) {
      const participant = ChannelRTCStore.getParticipant(tmp2, Dispatcher);
      let type = null;
      if (null != participant) {
        type = participant.type;
      }
      tmp3 = type;
    }
    ChannelStore(tmp3);
    AuthenticationStore(Dispatcher);
  }
  const tmp20 = focused(controlsSpecs.useState(null), 2);
  function ce() {
    value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    return id;
  }
  ce.__closure = { focused };
  ce.__workletHash = 8016082904457;
  ce.__initData = __initData11;
  function se(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(handleFocusChange)(arg0);
    }
  }
  const tmpResult15 = wrapperOffset(channelId[22]);
  se.__closure = { runOnJS: wrapperOffset(channelId[22]).runOnJS, handleFocusChange };
  se.__workletHash = 9918394343352;
  se.__initData = __initData12;
  const animatedReaction = tmpResult15.useAnimatedReaction(ce, se);
  let obj5 = { runOnJS: wrapperOffset(channelId[22]).runOnJS, handleFocusChange };
  token = wrapperOffset(channelId[40]).useToken(tmp5(tmp2[19]).modules.mobile.VOICE_PANEL_GUTTER);
  const tmpResult16 = wrapperOffset(channelId[40]);
  class He {
    constructor() {
      tmp = closure_1(closure_2[41]);
      obj = mode;
      tmpResult = tmp(safeArea.get(), closure_12);
      if (mode.get() === VoicePanelModes.PIP) {
        tmp6 = EDGE_GUTTER;
        num = -tmpResult.height + EDGE_GUTTER;
      } else {
        obj2 = gestureState;
        if (gestureState.get().active) {
          if (!obj2.get().requiresPop) {
            tmp4 = connected;
          }
        }
        num = 0;
        if (obj.get() === tmp3.DISMISSED) {
          tmp5 = connected;
          num = 0;
        }
      }
      return num;
    }
  }
  const tmpResult17 = wrapperOffset(channelId[22]);
  He.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER };
  He.__workletHash = 2737204369147;
  He.__initData = __initData13;
  const derivedValue = tmpResult17.useDerivedValue(He);
  const obj6 = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER };
  class Ee {
    constructor() {
      tmp = closure_2;
      tmp2 = closure_1(closure_2[41]);
      tmp2Result = tmp2(safeArea.get(), closure_12);
      obj = mode;
      obj2 = connected;
      value = mode.get();
      tmp5 = VoicePanelModes;
      height = tmp2Result.height;
      if (connected.get()) {
        sum = height;
      } else {
        tmp6 = EDGE_GUTTER;
        sum = height - tmp2Result.paddingTop + EDGE_GUTTER;
      }
      obj1 = {};
      tmp8 = obj2.get() ? tmp2Result.paddingTop : EDGE_GUTTER;
      merged = Object.assign(tmp2Result);
      obj1.paddingTop = tmp8;
      num = 24;
      num2 = 24;
      if (obj2.get()) {
        num2 = 0;
      }
      obj1.borderTopLeftRadius = num2;
      if (obj2.get()) {
        num = 0;
      }
      obj1.borderTopRightRadius = num;
      obj1.height = sum;
      tmp10 = closure_0;
      obj4 = closure_0(tmp[42]);
      if (value === VoicePanelModes.PIP) {
        num3 = 0;
      } else {
        num3 = 1;
      }
      obj1.opacity = obj4.withTiming(num3, closure_25);
      tmp10Result = tmp10(tmp[23]);
      value1 = closure_13.get();
      if (!obj2.get()) {
        tmp12 = wrapperOffset;
        if (wrapperOffset.get().gestureActive) {
          tmp13 = closure_18;
        }
        obj7 = { translateY: null };
        obj7.translateY = tmp10Result.withSpring(value1, tmp13);
        items = [];
        items[0] = obj7;
        obj1.transform = items;
        return obj1;
      }
      tmp13 = UI_SHOW_HIDE_PHYSICS;
      return;
    }
  }
  const tmpResult18 = wrapperOffset(channelId[22]);
  Ee.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: wrapperOffset(channelId[42]).withTiming, OPACITY_TIMING, withSpring: wrapperOffset(channelId[23]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS };
  Ee.__workletHash = 9971353242678;
  Ee.__initData = __initData14;
  const animatedStyle = tmpResult18.useAnimatedStyle(Ee);
  const obj7 = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: wrapperOffset(channelId[42]).withTiming, OPACITY_TIMING, withSpring: wrapperOffset(channelId[23]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS };
  class Ie {
    constructor() {
      tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
      if (tmp) {
        tmp2 = closure_8;
        tmp = !closure_8;
      }
      return tmp;
    }
  }
  Ie.__closure = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
  Ie.__workletHash = 12045427211815;
  Ie.__initData = __initData15;
  derivedValue1 = wrapperOffset(channelId[22]).useDerivedValue(Ie);
  const obj8 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
  const tmpResult19 = wrapperOffset(channelId[22]);
  class Pe {
    constructor() {
      tmp = closure_2;
      tmp2 = closure_1(closure_2[41]);
      tmp3 = closure_0;
      obj = closure_0(closure_2[42]);
      obj2 = closure_14;
      num = 1;
      if (closure_14.get()) {
        num = 0;
      }
      obj1 = { opacity: obj.withTiming(num, closure_25), transform: null };
      tmp3Result = tmp3(tmp[23]);
      num2 = 0;
      if (obj2.get()) {
        num2 = -tmp2(safeArea.get(), closure_12).height;
      }
      obj6 = { translateY: tmp3Result.withSpring(num2, MODE_CHANGE_PHYSICS) };
      items = [];
      items[0] = obj6;
      obj1.transform = items;
      return obj1;
    }
  }
  const tmpResult20 = wrapperOffset(channelId[22]);
  Pe.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[42]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: wrapperOffset(channelId[23]).withSpring, MODE_CHANGE_PHYSICS };
  Pe.__workletHash = 11509667866329;
  Pe.__initData = __initData16;
  const animatedStyle1 = tmpResult20.useAnimatedStyle(Pe);
  const obj9 = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[42]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: wrapperOffset(channelId[23]).withSpring, MODE_CHANGE_PHYSICS };
  function me() {
    let str = "box-none";
    if (derivedValue1.get()) {
      str = "none";
    }
    const obj2 = { pointerEvents: str, importantForAccessibility: null, accessibilityElementsHidden: null };
    let str2 = "auto";
    if (derivedValue1.get()) {
      str2 = "no-hide-descendants";
    }
    obj2.importantForAccessibility = str2;
    obj2.accessibilityElementsHidden = derivedValue1.get();
    return obj2;
  }
  me.__closure = { isHeaderHidden: derivedValue1 };
  me.__workletHash = 13251177319922;
  me.__initData = __initData17;
  const animatedProps = wrapperOffset(channelId[22]).useAnimatedProps(me);
  const tmpResult21 = wrapperOffset(channelId[22]);
  const canInviteMembers = wrapperOffset(channelId[43]).useCanInviteMembers(channelId);
  const tmpResult22 = wrapperOffset(channelId[43]);
  wrapperOffset(channelId[44]).useInviteMembersCallback(channelId);
  const tmpResult23 = wrapperOffset(channelId[44]);
  const tmp31 = gestureState(channelId[45])();
  wrapperOffset(channelId[46]).useNavigatorBackPressHandler(tmp31);
  if (null != tmp21) {
    let DOWN = constants.LEFT;
    let tmp33 = constants;
  } else {
    tmp33 = constants;
    DOWN = constants.DOWN;
  }
  if (cResult[5] === tmp8) {
    if (cResult[6] === DOWN) {
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        let id = AuthenticationStore.getId();
        cResult[8] = id;
        let tmp38 = id;
      } else {
        tmp38 = cResult[8];
      }
      const tmp41 = tmp5(tmp2[47])(tmp38, channelId, guildId);
      MODE_CHANGE_PHYSICS = tmp41;
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [handleFocusChange];
        cResult[9] = items2;
        let tmp42 = items2;
      } else {
        tmp42 = cResult[9];
      }
      if (cResult[10] !== tmp41) {
        function xe() {
          if (null != closure_15) {
            if (obj3.isStableUserParticipant(closure_15)) {
              if (tmp10Result.stableParticipantHasVideo(closure_15)) {
                const videoDevices = MediaEngineStore.getVideoDevices();
                const _Object = Object;
                const keys = Object.keys(videoDevices);
                if (keys.length >= 2) {
                  const videoDeviceId = MediaEngineStore.getVideoDeviceId();
                  let facing;
                  if (videoDevices[videoDeviceId] != null) {
                    facing = tmp13.facing;
                  }
                  const found = keys.find((item) => item !== videoDeviceId);
                  if (null != found) {
                    let facing1;
                    if (videoDevices[found] != null) {
                      facing1 = tmp7.facing;
                    }
                  }
                  if (null != facing) {
                    if (null != tmp6) {
                      if ("back" === facing) {
                        if ("front" === tmp6) {
                          const intl3 = util.intl;
                          let stringResult = intl3.string(util.t["/R1SBx"]);
                        }
                      }
                      if ("front" === facing) {
                        if ("back" === tmp6) {
                          const intl2 = util.intl;
                          stringResult = intl2.string(util.t["7YZ/Si"]);
                        }
                      }
                      const intl = util.intl;
                      stringResult = intl.string(util.t["t9eQ/g"]);
                    }
                    return stringResult;
                  }
                  const intl4 = util.intl;
                  stringResult = intl4.string(util.t["t9eQ/g"]);
                }
              }
              tmp10Result = useStableParticipant;
            }
            obj3 = useStableParticipant;
          }
        }
        const items3 = [tmp41];
        cResult[10] = tmp41;
        cResult[11] = xe;
        cResult[12] = items3;
        let tmp45 = items3;
        let tmp44 = xe;
      } else {
        tmp44 = cResult[11];
        tmp45 = cResult[12];
      }
      const stateFromStores1 = tmp(tmp2[29]).useStateFromStores(tmp42, tmp44, tmp45);
      const _Symbol3 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class Ue {
          constructor() {
            closure_0 = handleFocusChange.getVideoDeviceId();
            keys = Object.keys(handleFocusChange.getVideoDevices());
            found = keys.find((item) => item !== closure_0);
            if (null != found) {
              tmp2 = gestureState;
              tmp3 = channelId;
              obj = gestureState(channelId[48]);
              setVideoDeviceResult = obj.setVideoDevice(found);
            }
            return;
          }
        }
        cResult[13] = Ue;
      } else {
        class Ue {
          constructor() {
            closure_0 = handleFocusChange.getVideoDeviceId();
            keys = Object.keys(handleFocusChange.getVideoDevices());
            found = keys.find((item) => item !== closure_0);
            if (null != found) {
              tmp2 = gestureState;
              tmp3 = channelId;
              obj = gestureState(channelId[48]);
              setVideoDeviceResult = obj.setVideoDevice(found);
            }
            return;
          }
        }
      }
      if (DOWN === tmp33.LEFT) {
        class Ue {
          constructor() {
            closure_0 = handleFocusChange.getVideoDeviceId();
            keys = Object.keys(handleFocusChange.getVideoDevices());
            found = keys.find((item) => item !== closure_0);
            if (null != found) {
              tmp2 = gestureState;
              tmp3 = channelId;
              obj = gestureState(channelId[48]);
              setVideoDeviceResult = obj.setVideoDevice(found);
            }
            return;
          }
        }
      }
      if (cResult[14] !== "0deg") {
        class Ue {
          constructor() {
            closure_0 = handleFocusChange.getVideoDeviceId();
            keys = Object.keys(handleFocusChange.getVideoDevices());
            found = keys.find((item) => item !== closure_0);
            if (null != found) {
              tmp2 = gestureState;
              tmp3 = channelId;
              obj = gestureState(channelId[48]);
              setVideoDeviceResult = obj.setVideoDevice(found);
            }
            return;
          }
        }
        const obj10 = { rotateZ: str };
        const items4 = [obj10];
        tmp49[0] = items4;
        cResult[14] = str;
        cResult[15] = tmp49;
      } else {
        class Ue {
          constructor() {
            closure_0 = handleFocusChange.getVideoDeviceId();
            keys = Object.keys(handleFocusChange.getVideoDevices());
            found = keys.find((item) => item !== closure_0);
            if (null != found) {
              tmp2 = gestureState;
              tmp3 = channelId;
              obj = gestureState(channelId[48]);
              setVideoDeviceResult = obj.setVideoDevice(found);
            }
            return;
          }
        }
      }
      if (cResult[16] !== channelId) {
        class Ue {
          constructor() {
            closure_0 = handleFocusChange.getVideoDeviceId();
            keys = Object.keys(handleFocusChange.getVideoDevices());
            found = keys.find((item) => item !== closure_0);
            if (null != found) {
              tmp2 = gestureState;
              tmp3 = channelId;
              obj = gestureState(channelId[48]);
              setVideoDeviceResult = obj.setVideoDevice(found);
            }
            return;
          }
        }
        tmp51[0] = channelId;
        cResult[16] = channelId;
        cResult[17] = tmp51;
      } else {
        class Ue {
          constructor() {
            closure_0 = handleFocusChange.getVideoDeviceId();
            keys = Object.keys(handleFocusChange.getVideoDevices());
            found = keys.find((item) => item !== closure_0);
            if (null != found) {
              tmp2 = gestureState;
              tmp3 = channelId;
              obj = gestureState(channelId[48]);
              setVideoDeviceResult = obj.setVideoDevice(found);
            }
            return;
          }
        }
      }
      const tmpResult25 = tmp(tmp2[29]);
      const isSecureFramesUIEnabled = tmp(tmp2[49]).useIsSecureFramesUIEnabled(tmp51);
      if (tmp21 === ParticipantTypes.USER) {
        class Ue {
          constructor() {
            closure_0 = handleFocusChange.getVideoDeviceId();
            keys = Object.keys(handleFocusChange.getVideoDevices());
            found = keys.find((item) => item !== closure_0);
            if (null != found) {
              tmp2 = gestureState;
              tmp3 = channelId;
              obj = gestureState(channelId[48]);
              setVideoDeviceResult = obj.setVideoDevice(found);
            }
            return;
          }
        }
        if (null != tmp19) {
          class Ue {
            constructor() {
              closure_0 = handleFocusChange.getVideoDeviceId();
              keys = Object.keys(handleFocusChange.getVideoDevices());
              found = keys.find((item) => item !== closure_0);
              if (null != found) {
                tmp2 = gestureState;
                tmp3 = channelId;
                obj = gestureState(channelId[48]);
                setVideoDeviceResult = obj.setVideoDevice(found);
              }
              return;
            }
          }
        }
      }
      if (cResult[18] === channelId) {
        class Ue {
          constructor() {
            closure_0 = handleFocusChange.getVideoDeviceId();
            keys = Object.keys(handleFocusChange.getVideoDevices());
            found = keys.find((item) => item !== closure_0);
            if (null != found) {
              tmp2 = gestureState;
              tmp3 = channelId;
              obj = gestureState(channelId[48]);
              setVideoDeviceResult = obj.setVideoDevice(found);
            }
            return;
          }
        }
        const isUserSecureFramesVerified = tmp(tmp2[50]).useIsUserSecureFramesVerified(tmp55);
        if (tmp21 === ParticipantTypes.STREAM) {
          class Ue {
            constructor() {
              closure_0 = handleFocusChange.getVideoDeviceId();
              keys = Object.keys(handleFocusChange.getVideoDevices());
              found = keys.find((item) => item !== closure_0);
              if (null != found) {
                tmp2 = gestureState;
                tmp3 = channelId;
                obj = gestureState(channelId[48]);
                setVideoDeviceResult = obj.setVideoDevice(found);
              }
              return;
            }
          }
          if (null != tmp19) {
            class Ue {
              constructor() {
                closure_0 = handleFocusChange.getVideoDeviceId();
                keys = Object.keys(handleFocusChange.getVideoDevices());
                found = keys.find((item) => item !== closure_0);
                if (null != found) {
                  tmp2 = gestureState;
                  tmp3 = channelId;
                  obj = gestureState(channelId[48]);
                  setVideoDeviceResult = obj.setVideoDevice(found);
                }
                return;
              }
            }
          }
        }
        if (cResult[21] === channelId) {
          class Ue {
            constructor() {
              closure_0 = handleFocusChange.getVideoDeviceId();
              keys = Object.keys(handleFocusChange.getVideoDevices());
              found = keys.find((item) => item !== closure_0);
              if (null != found) {
                tmp2 = gestureState;
                tmp3 = channelId;
                obj = gestureState(channelId[48]);
                setVideoDeviceResult = obj.setVideoDevice(found);
              }
              return;
            }
          }
          const isStreamSecureFramesVerified = tmp(tmp2[50]).useIsStreamSecureFramesVerified(tmp58);
          if (ParticipantTypes.STREAM !== tmp21) {
            class Ue {
              constructor() {
                closure_0 = handleFocusChange.getVideoDeviceId();
                keys = Object.keys(handleFocusChange.getVideoDevices());
                found = keys.find((item) => item !== closure_0);
                if (null != found) {
                  tmp2 = gestureState;
                  tmp3 = channelId;
                  obj = gestureState(channelId[48]);
                  setVideoDeviceResult = obj.setVideoDevice(found);
                }
                return;
              }
            }
            if (ParticipantTypes.USER !== tmp21) {
              class Ue {
                constructor() {
                  closure_0 = handleFocusChange.getVideoDeviceId();
                  keys = Object.keys(handleFocusChange.getVideoDevices());
                  found = keys.find((item) => item !== closure_0);
                  if (null != found) {
                    tmp2 = gestureState;
                    tmp3 = channelId;
                    obj = gestureState(channelId[48]);
                    setVideoDeviceResult = obj.setVideoDevice(found);
                  }
                  return;
                }
              }
            }
          }
          if (tmp8) {
            class Ue {
              constructor() {
                closure_0 = handleFocusChange.getVideoDeviceId();
                keys = Object.keys(handleFocusChange.getVideoDevices());
                found = keys.find((item) => item !== closure_0);
                if (null != found) {
                  tmp2 = gestureState;
                  tmp3 = channelId;
                  obj = gestureState(channelId[48]);
                  setVideoDeviceResult = obj.setVideoDevice(found);
                }
                return;
              }
            }
            const ONYX = ThemeTypes.ONYX;
          }
          if (cResult[24] === animatedStyle) {
            class Ue {
              constructor() {
                closure_0 = handleFocusChange.getVideoDeviceId();
                keys = Object.keys(handleFocusChange.getVideoDevices());
                found = keys.find((item) => item !== closure_0);
                if (null != found) {
                  tmp2 = gestureState;
                  tmp3 = channelId;
                  obj = gestureState(channelId[48]);
                  setVideoDeviceResult = obj.setVideoDevice(found);
                }
                return;
              }
            }
            if (cResult[27] === focused) {
              class Ue {
                constructor() {
                  closure_0 = handleFocusChange.getVideoDeviceId();
                  keys = Object.keys(handleFocusChange.getVideoDevices());
                  found = keys.find((item) => item !== closure_0);
                  if (null != found) {
                    tmp2 = gestureState;
                    tmp3 = channelId;
                    obj = gestureState(channelId[48]);
                    setVideoDeviceResult = obj.setVideoDevice(found);
                  }
                  return;
                }
              }
            }
            const obj11 = { isHeaderHidden: derivedValue1, scrollPosition, focused };
            const tmp64 = closure_23(closure_35, obj11);
            cResult[27] = focused;
            cResult[28] = derivedValue1;
            cResult[29] = scrollPosition;
            cResult[30] = tmp64;
          }
          const items5 = [tmp4.headerWrapper, animatedStyle];
          cResult[24] = animatedStyle;
          cResult[25] = tmp4.headerWrapper;
          cResult[26] = items5;
          const tmpResult28 = tmp(tmp2[50]);
        }
        const obj12 = { streamKey: null, channelId };
        cResult[21] = channelId;
        cResult[22] = null;
        cResult[23] = obj12;
        tmp58 = obj12;
        const tmpResult27 = tmp(tmp2[50]);
      }
      const obj13 = { userId: null, channelId };
      cResult[18] = channelId;
      cResult[19] = null;
      cResult[20] = obj13;
      tmp55 = obj13;
      const tmpResult26 = tmp(tmp2[49]);
    }
  }
  if (DOWN === tmp33.LEFT) {
    class Ue {
      constructor() {
        closure_0 = handleFocusChange.getVideoDeviceId();
        keys = Object.keys(handleFocusChange.getVideoDevices());
        found = keys.find((item) => item !== closure_0);
        if (null != found) {
          tmp2 = gestureState;
          tmp3 = channelId;
          obj = gestureState(channelId[48]);
          setVideoDeviceResult = obj.setVideoDevice(found);
        }
        return;
      }
    }
    let stringResult = obj22.string(tmp(tmp2[31]).t["9M6OdC"]);
  } else {
    class Ue {
      constructor() {
        closure_0 = handleFocusChange.getVideoDeviceId();
        keys = Object.keys(handleFocusChange.getVideoDevices());
        found = keys.find((item) => item !== closure_0);
        if (null != found) {
          tmp2 = gestureState;
          tmp3 = channelId;
          obj = gestureState(channelId[48]);
          setVideoDeviceResult = obj.setVideoDevice(found);
        }
        return;
      }
    }
    const string = tmp36.string;
    const t = tmp(tmp2[31]).t;
    if (tmp8) {
      class Ue {
        constructor() {
          closure_0 = handleFocusChange.getVideoDeviceId();
          keys = Object.keys(handleFocusChange.getVideoDevices());
          found = keys.find((item) => item !== closure_0);
          if (null != found) {
            tmp2 = gestureState;
            tmp3 = channelId;
            obj = gestureState(channelId[48]);
            setVideoDeviceResult = obj.setVideoDevice(found);
          }
          return;
        }
      }
    } else {
      class Ue {
        constructor() {
          closure_0 = handleFocusChange.getVideoDeviceId();
          keys = Object.keys(handleFocusChange.getVideoDevices());
          found = keys.find((item) => item !== closure_0);
          if (null != found) {
            tmp2 = gestureState;
            tmp3 = channelId;
            obj = gestureState(channelId[48]);
            setVideoDeviceResult = obj.setVideoDevice(found);
          }
          return;
        }
      }
    }
  }
  cResult[5] = tmp8;
  cResult[6] = DOWN;
  cResult[7] = stringResult;
  const tmpResult24 = wrapperOffset(channelId[46]);
}) : ((wrapperOffset) => {
  wrapperOffset = wrapperOffset.wrapperOffset;
  const gestureState = wrapperOffset.gestureState;
  const layout = wrapperOffset.layout;
  let channelId;
  let controlsSpecs;
  AuthenticationStore = undefined;
  c10 = undefined;
  let token;
  let derivedValue1;
  let DOWN;
  UI_SHOW_HIDE_PHYSICS = undefined;
  let tmp = closure_26();
  const context = controlsSpecs.useContext(gestureState(channelId[27]));
  channelId = context.channelId;
  const focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  const mode = context.mode;
  const safeArea = context.safeArea;
  const connected = context.connected;
  ({ guildId, channelType, scrollPosition } = context);
  const isScreenReaderEnabled = wrapperOffset(channelId[36]).useIsScreenReaderEnabled();
  let tmp38Result10 = gestureState(channelId[37])(channelId);
  let obj2 = wrapperOffset(channelId[36]);
  let obj3 = gestureState(channelId[38]);
  let items = [derivedValue1, token, c10, connected];
  const items1 = [channelId];
  const stateFromStores = wrapperOffset(channelId[29]).useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let channelName;
    if (null != channel) {
      channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
    }
    if (channelName == null) {
      const intl = util.intl;
      channelName = intl.string(util.t.zLZPmk);
    }
    return channelName;
  }, items1);
  obj4 = wrapperOffset(channelId[29]);
  [tmp10, c9] = focused(controlsSpecs.useState(undefined), 2);
  const tmp9 = focused(controlsSpecs.useState(undefined), 2);
  [tmp12, c10] = focused(controlsSpecs.useState(null), 2);
  const items2 = [channelId];
  const handleFocusChange = controlsSpecs.useCallback((arg0) => {
    let tmp3 = null;
    if (null != arg0) {
      const participant = ChannelRTCStore.getParticipant(tmp2, arg0);
      let type = null;
      if (null != participant) {
        type = participant.type;
      }
      tmp3 = type;
    }
    _undefined(tmp3);
    _undefined(arg0);
  }, items2);
  const tmp11 = focused(controlsSpecs.useState(null), 2);
  const fn = function f() {
    value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    return id;
  };
  fn.__closure = { focused };
  fn.__workletHash = 3671264887776;
  fn.__initData = __initData18;
  const fn2 = function u(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(callback)(arg0);
    }
  };
  let obj5 = wrapperOffset(channelId[22]);
  fn2.__closure = { runOnJS: wrapperOffset(channelId[22]).runOnJS, handleFocusChange };
  fn2.__workletHash = 3195747765779;
  fn2.__initData = __initData19;
  const animatedReaction = obj5.useAnimatedReaction(fn, fn2);
  const obj6 = { runOnJS: wrapperOffset(channelId[22]).runOnJS, handleFocusChange };
  token = wrapperOffset(channelId[40]).useToken(gestureState(channelId[19]).modules.mobile.VOICE_PANEL_GUTTER);
  const obj7 = wrapperOffset(channelId[40]);
  function _e() {
    if (mode.get() === VoicePanelModes.PIP) {
      let num = -tmpResult.height + EDGE_GUTTER;
    } else {
      num = 0;
      if (mode.get() === tmp3.DISMISSED) {
        num = 0;
      }
    }
    return num;
  }
  const obj8 = wrapperOffset(channelId[22]);
  _e.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER };
  _e.__workletHash = 11122710925211;
  _e.__initData = __initData20;
  const derivedValue = obj8.useDerivedValue(_e);
  const obj9 = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, gestureState, connected, EDGE_GUTTER };
  function he() {
    const tmp2Result = calculateVoicePanelHeaderSpecsDefault(safeArea.get(), token);
    value = mode.get();
    const height = tmp2Result.height;
    if (connected.get()) {
      let sum = height;
    } else {
      sum = height - tmp2Result.paddingTop + EDGE_GUTTER;
    }
    const obj3 = {};
    const merged = Object.assign(tmp2Result);
    obj3.paddingTop = connected.get() ? tmp2Result.paddingTop : EDGE_GUTTER;
    let num = 24;
    let num2 = 24;
    if (connected.get()) {
      num2 = 0;
    }
    obj3.borderTopLeftRadius = num2;
    if (connected.get()) {
      num = 0;
    }
    obj3.borderTopRightRadius = num;
    obj3.height = sum;
    const tmp8 = connected.get() ? tmp2Result.paddingTop : EDGE_GUTTER;
    if (value === VoicePanelModes.PIP) {
      let num3 = 0;
    } else {
      num3 = 1;
    }
    obj3.opacity = timing.withTiming(num3, closure_25);
    value2 = derivedValue.get();
    if (!connected.get()) {
      if (wrapperOffset.get().gestureActive) {
        let tmp13 = DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE;
      }
      const obj5 = { translateY: tmp10Result.withSpring(value2, tmp13) };
      const items = [obj5];
      obj3.transform = items;
      return obj3;
    }
    tmp13 = UI_SHOW_HIDE_PHYSICS;
    tmp10Result = spring;
  }
  const obj10 = wrapperOffset(channelId[22]);
  he.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: wrapperOffset(channelId[42]).withTiming, OPACITY_TIMING, withSpring: wrapperOffset(channelId[23]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS };
  he.__workletHash = 13938557240528;
  he.__initData = __initData21;
  const animatedStyle = obj10.useAnimatedStyle(he);
  const obj11 = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, mode, VoicePanelModes, connected, EDGE_GUTTER, withTiming: wrapperOffset(channelId[42]).withTiming, OPACITY_TIMING, withSpring: wrapperOffset(channelId[23]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, UI_SHOW_HIDE_PHYSICS };
  function pe() {
    let tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
    if (tmp) {
      tmp = !isScreenReaderEnabled;
    }
    return tmp;
  }
  pe.__closure = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
  pe.__workletHash = 5927654807363;
  pe.__initData = __initData22;
  derivedValue1 = wrapperOffset(channelId[22]).useDerivedValue(pe);
  const obj12 = wrapperOffset(channelId[22]);
  const obj13 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
  class Se {
    constructor() {
      tmp = closure_2;
      tmp2 = closure_1(closure_2[41]);
      tmp3 = closure_0;
      obj = closure_0(closure_2[42]);
      obj2 = closure_14;
      num = 1;
      if (closure_14.get()) {
        num = 0;
      }
      obj1 = { opacity: obj.withTiming(num, closure_25), transform: null };
      tmp3Result = tmp3(tmp[23]);
      num2 = 0;
      if (obj2.get()) {
        num2 = -tmp2(safeArea.get(), closure_12).height;
      }
      obj6 = { translateY: tmp3Result.withSpring(num2, MODE_CHANGE_PHYSICS) };
      items = [];
      items[0] = obj6;
      obj1.transform = items;
      return obj1;
    }
  }
  const obj14 = wrapperOffset(channelId[22]);
  Se.__closure = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[42]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: wrapperOffset(channelId[23]).withSpring, MODE_CHANGE_PHYSICS: DOWN };
  Se.__workletHash = 11151013494207;
  Se.__initData = __initData23;
  const animatedStyle1 = obj14.useAnimatedStyle(Se);
  const obj15 = { calculateVoicePanelHeaderSpecs: gestureState(channelId[41]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[42]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING, withSpring: wrapperOffset(channelId[23]).withSpring, MODE_CHANGE_PHYSICS: DOWN };
  function fe() {
    let str = "box-none";
    if (derivedValue1.get()) {
      str = "none";
    }
    const obj2 = { pointerEvents: str, importantForAccessibility: null, accessibilityElementsHidden: null };
    let str2 = "auto";
    if (derivedValue1.get()) {
      str2 = "no-hide-descendants";
    }
    obj2.importantForAccessibility = str2;
    obj2.accessibilityElementsHidden = derivedValue1.get();
    return obj2;
  }
  fe.__closure = { isHeaderHidden: derivedValue1 };
  fe.__workletHash = 9531590342194;
  fe.__initData = __initData24;
  const animatedProps = wrapperOffset(channelId[22]).useAnimatedProps(fe);
  const obj16 = wrapperOffset(channelId[22]);
  let canInviteMembers = wrapperOffset(channelId[43]).useCanInviteMembers(channelId);
  const obj17 = wrapperOffset(channelId[43]);
  const obj18 = wrapperOffset(channelId[44]);
  const tmp23 = gestureState(channelId[45])();
  const inviteMembersCallback = wrapperOffset(channelId[44]).useInviteMembersCallback(channelId);
  wrapperOffset(channelId[46]).useNavigatorBackPressHandler(tmp23);
  if (null != tmp12) {
    DOWN = constants.LEFT;
    let tmp25 = constants;
  } else {
    tmp25 = constants;
    DOWN = constants.DOWN;
  }
  if (DOWN === tmp25.LEFT) {
    let intl2 = tmp5(tmp3[31]).intl;
    let stringResult = intl2.string(tmp5(tmp3[31]).t["9M6OdC"]);
  } else {
    let intl = tmp5(tmp3[31]).intl;
    const string = intl.string;
    const t = tmp5(tmp3[31]).t;
    if (tmp38Result10) {
      stringResult = string(t.RLCTQG);
    } else {
      stringResult = string(t["5lPjGj"]);
    }
  }
  const obj19 = wrapperOffset(channelId[46]);
  const tmp2ResultResult = gestureState(channelId[47])(AuthenticationStore.getId(), channelId, guildId);
  UI_SHOW_HIDE_PHYSICS = tmp2ResultResult;
  let tmp2Result = gestureState(channelId[47]);
  const items3 = [handleFocusChange];
  const items4 = [tmp2ResultResult];
  const stateFromStores1 = wrapperOffset(channelId[29]).useStateFromStores(items3, () => {
    if (null != closure_16) {
      if (obj3.isStableUserParticipant(closure_16)) {
        if (tmp10Result.stableParticipantHasVideo(closure_16)) {
          const videoDevices = MediaEngineStore.getVideoDevices();
          const _Object = Object;
          const keys = Object.keys(videoDevices);
          if (keys.length >= 2) {
            const videoDeviceId = MediaEngineStore.getVideoDeviceId();
            let facing;
            if (videoDevices[videoDeviceId] != null) {
              facing = tmp13.facing;
            }
            const found = keys.find((item) => item !== videoDeviceId);
            if (null != found) {
              let facing1;
              if (videoDevices[found] != null) {
                facing1 = tmp7.facing;
              }
            }
            if (null != facing) {
              if (null != tmp6) {
                if ("back" === facing) {
                  if ("front" === tmp6) {
                    const intl3 = util.intl;
                    let stringResult = intl3.string(util.t["/R1SBx"]);
                  }
                }
                if ("front" === facing) {
                  if ("back" === tmp6) {
                    const intl2 = util.intl;
                    stringResult = intl2.string(util.t["7YZ/Si"]);
                  }
                }
                const intl = util.intl;
                stringResult = intl.string(util.t["t9eQ/g"]);
              }
              return stringResult;
            }
            const intl4 = util.intl;
            stringResult = intl4.string(util.t["t9eQ/g"]);
          }
        }
        tmp10Result = useStableParticipant;
      }
      obj3 = useStableParticipant;
    }
  }, items4);
  const items5 = [DOWN];
  const callback1 = obj.useCallback(() => {
    const videoDeviceId = callback.getVideoDeviceId();
    const keys = Object.keys(callback.getVideoDevices());
    const found = keys.find((item) => item !== closure_0);
    if (null != found) {
      gestureState(channelId[48]).setVideoDevice(found);
      const obj = gestureState(channelId[48]);
    }
  }, []);
  const memo = obj.useMemo(() => {
    let str = "0deg";
    if (DOWN === constants.LEFT) {
      str = "90deg";
    }
    const obj = { transform: null };
    const items = [{ rotateZ: str }];
    obj.transform = items;
    return obj;
  }, items5);
  const tmp5Result = wrapperOffset(channelId[29]);
  const isSecureFramesUIEnabled = wrapperOffset(channelId[49]).useIsSecureFramesUIEnabled({ channelId });
  const tmp5Result4 = wrapperOffset(channelId[49]);
  let tmp35 = null;
  if (tmp12 === ParticipantTypes.USER) {
    tmp35 = null;
    if (null != tmp10) {
      tmp35 = tmp10;
    }
  }
  const isUserSecureFramesVerified = wrapperOffset(channelId[50]).useIsUserSecureFramesVerified({ userId: tmp35, channelId });
  const tmp5Result5 = wrapperOffset(channelId[50]);
  let tmp37 = null;
  if (tmp12 === ParticipantTypes.STREAM) {
    tmp37 = null;
    if (null != tmp10) {
      tmp37 = tmp10;
    }
  }
  let flag = wrapperOffset(channelId[50]).useIsStreamSecureFramesVerified({ streamKey: tmp37, channelId });
  if (ParticipantTypes.STREAM !== tmp12) {
    flag = false;
    if (ParticipantTypes.USER === tmp12) {
      flag = isUserSecureFramesVerified;
    }
  }
  let ONYX;
  if (tmp38Result10) {
    ONYX = ThemeTypes.ONYX;
  }
  const obj20 = { theme: ONYX, children: null };
  const obj21 = { style: null, pointerEvents: "box-none", layout, children: null };
  const items6 = [tmp.headerWrapper, animatedStyle];
  obj21.style = items6;
  const tmp5Result6 = wrapperOffset(channelId[50]);
  const items7 = [closure_23(closure_35, { isHeaderHidden: derivedValue1, scrollPosition, focused }), , ];
  let tmp38Result = tmp38Result10;
  if (tmp38Result10) {
    const obj22 = { baseColor: tmp2(tmp3[19]).colors.BLACK, minHeight: 0 };
    tmp38Result = closure_23(tmp2(tmp3[51]), obj22);
    const tmp2Result12 = tmp2(tmp3[51]);
  }
  items7[1] = tmp38Result;
  const obj23 = { style: tmp.headerContentWrapper, pointerEvents: "box-none", layout, children: null };
  let tmp38Result6 = null;
  const tmp2Result11 = gestureState(channelId[26]);
  if (tmp12 === ParticipantTypes.USER) {
    const obj24 = { isHeaderHidden: derivedValue1 };
    tmp38Result6 = closure_23(tmp2(tmp3[52]), obj24);
  }
  const items8 = [tmp38Result6, ];
  const obj25 = { style: null, animatedProps, children: null };
  const items9 = [tmp.headerOuter, animatedStyle1];
  obj25.style = items9;
  const tmp2Result13 = gestureState(channelId[26]);
  const obj26 = { style: tmp.leftWrapper, pointerEvents: "box-none", children: null };
  const tmp2Result14 = gestureState(channelId[26]);
  const obj27 = { icon: null, accessibilityLabel: null, onPress: null, style: null };
  const tmp2Result15 = gestureState(channelId[25]);
  obj27.icon = gestureState(channelId[53]);
  obj27.accessibilityLabel = stringResult;
  obj27.onPress = tmp23;
  obj27.style = memo;
  const items10 = [closure_23(gestureState(channelId[35]), obj27), ];
  const obj28 = { style: tmp.headerInner, children: null };
  const tmp2Result16 = gestureState(channelId[35]);
  const items11 = [closure_23(gestureState(channelId[54]), {}), ];
  let tmp38Result7 = null;
  if (isSecureFramesUIEnabled) {
    tmp38Result7 = null;
    if (flag) {
      const obj29 = { size: "xs", color: tmp2(tmp3[19]).colors.TEXT_SUBTLE, style: tmp.shieldIconMargin };
      tmp38Result7 = closure_23(tmp5(tmp3[55]).ShieldLockIcon, obj29);
    }
  }
  items11[1] = tmp38Result7;
  obj28.children = items11;
  items10[1] = closure_24(gestureState(channelId[26]), obj28);
  obj26.children = items10;
  const items12 = [closure_24(tmp2Result15, obj26), ];
  const obj30 = { style: tmp.rightWrapper, layout, children: null };
  const tmp2Result17 = gestureState(channelId[26]);
  const items13 = [closure_23(closure_40, {}), , , , , ];
  let tmp38Result8 = channelType === tmp5(tmp3[56]).ChannelTypes.GUILD_STAGE_VOICE;
  if (tmp38Result8) {
    const obj31 = { channelId };
    tmp38Result8 = closure_23(closure_41, obj31);
  }
  items13[1] = tmp38Result8;
  items13[2] = closure_23(gestureState(channelId[57]), { isConnectedToVoiceChannel: tmp38Result10, channelId });
  if (canInviteMembers) {
    const obj32 = { icon: tmp2(tmp3[58]), accessibilityLabel: null, onPress: null };
    let intl3 = tmp5(tmp3[31]).intl;
    const obj33 = { channelName: stateFromStores };
    obj32.accessibilityLabel = intl3.formatToPlainString(tmp5(tmp3[31]).t["dHHb/2"], obj33);
    obj32.onPress = inviteMembersCallback;
    canInviteMembers = closure_23(tmp2(tmp3[35]), obj32);
    const tmp2Result19 = tmp2(tmp3[35]);
  }
  items13[3] = canInviteMembers;
  let tmp38Result9 = null;
  if (null != stateFromStores1) {
    const obj34 = { icon: tmp2(tmp3[59]), onPress: callback1, accessibilityLabel: stateFromStores1 };
    tmp38Result9 = closure_23(tmp2(tmp3[35]), obj34);
    const tmp2Result20 = tmp2(tmp3[35]);
  }
  items13[4] = tmp38Result9;
  if (tmp38Result10) {
    tmp38Result10 = obj3.useConfig({ location: "VoicePanelHeader" }).treatment === tmp5(tmp3[38]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT;
  }
  if (tmp38Result10) {
    const obj35 = { channelId };
    tmp38Result10 = closure_23(tmp2(tmp3[60]), obj35);
  }
  items13[5] = tmp38Result10;
  obj30.children = items13;
  items12[1] = closure_24(gestureState(channelId[26]), obj30);
  obj25.children = items12;
  items8[1] = closure_24(tmp2Result14, obj25);
  obj23.children = items8;
  items7[2] = closure_24(tmp2Result13, obj23);
  obj21.children = items7;
  obj20.children = closure_24(tmp2Result11, obj21);
  return closure_23(wrapperOffset(channelId[61]).ThemeContextProvider, obj20);
}));