// === Module 17202: VoicePanelUI ===

// Module 17202 (VoicePanelUI)
import LoggerDefault from "Logger" /* 3 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import CallConstants from "CallConstants" /* 4911 */;
import spring from "spring" /* 5597 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6140 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6570 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6657 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 8987 */;
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 9074 */;
import ExternalPipDefault from "ExternalPip" /* 9110 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 9774 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10725 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11900 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11901 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11903 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 11906 */;
import triggerIOSHapticDefault from "triggerIOSHaptic" /* 17204 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 17205 */;
import PanelSizeUtils from "PanelSizeUtils" /* 17208 */;
import useControlsHoverGestureDefault from "useControlsHoverGesture" /* 17209 */;
import VoicePanelSystemUIManagerDefault from "VoicePanelSystemUIManager" /* 17210 */;
import VoicePanelAccessibilityViewDefault from "VoicePanelAccessibilityView" /* 17211 */;
import VoicePanelDismissableContentDefault from "VoicePanelDismissableContent" /* 17212 */;
import VoicePanelHeaderDefault from "VoicePanelHeader" /* 17214 */;
import VoicePanelCardViewDefault from "VoicePanelCardView" /* 17270 */;
import VoicePanelPreJoinContentDefault from "VoicePanelPreJoinContent" /* 17302 */;
import VoicePanelPIPDefault from "VoicePanelPIP" /* 17306 */;
import VoicePanelControlsDefault from "VoicePanelControls" /* 17312 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4906 */;
import AppFreezeStore from "AppFreezeStore" /* 7964 */;
import VoicePanelStore from "VoicePanelStore" /* 5098 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11902 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;
let _require, children, dependencyMap, set, set2;

let DEFAULT_BORDER_RADIUS;
let DRAWER_SPRING_PHYSICS;
let MODE_CHANGE_PHYSICS;
let ScrollView;
let VOICE_PANEL_CHUNK_DIVISOR;
let c10;
let closure_21;
let closure_22;
let map1;
let metroRequire;
let obj10;
let obj11;
let obj7;
let obj8;
let obj9;
function NOOP() {

}
function log() {
  const items = [...HermesBuiltin.copyRestArgs()];
  log.log.apply(items);
}
function useWrapperStyles(wrapperOffset) {
  let animatedStyle1;
  let closure_2;
  let connected;
  _require = wrapperOffset;
  let tmp = _require;
  const tmp2 = dependencyMap;
  let obj = require("useGlobalStatusIndicatorState");
  const height = obj.useGlobalStatusIndicatorState().height;
  const tmp3 = closure_34();
  dependencyMap = tmp3;
  obj2 = connected;
  const context = connected.useContext(height(11901));
  const wrapperDimensions = context.wrapperDimensions;
  connected = context.connected;
  const controlsSpecs = context.controlsSpecs;
  const focused = context.focused;
  const mode = context.mode;
  const preJoinContentSize = context.preJoinContentSize;
  const safeArea = context.safeArea;
  const windowDimensions = context.windowDimensions;
  const useReducedMotion = context.useReducedMotion;
  let obj3 = require("ReanimatedRexport");
  const fn = function n() {
    return controlsSpecs.get().height;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 5538137200137;
  fn.__initData = __initData30;
  const derivedValue = obj3.useDerivedValue(fn);
  obj4 = require("VoicePanelPIPStateContext");
  const pIPState = obj4.usePIPState();
  let obj5 = require("ReanimatedRexport");
  const fn2 = function l() {
    const obj = { modeToSet: mode.get(), connected: connected.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, safeArea: safeArea.get(), focused: focused.get(), pipState: pIPState, controlsHeight: derivedValue.get(), preJoinContentSize: preJoinContentSize.get(), globalStatusIndicatorHeight: height };
    return obj;
  };
  fn2.__closure = { mode, connected, windowDimensions, safeArea, focused, pipState: pIPState, controlsHeight: derivedValue, preJoinContentSize, globalStatusIndicatorHeight: height };
  fn2.__workletHash = 7089847929407;
  fn2.__initData = __initData31;
  const fn3 = function s(safeAreaState, windowHeight) {
    let drawerX;
    let drawerY;
    let modeToSet;
    let windowWidth;
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp4 = windowHeight;
    if (!cheapWorkletShallowEqual(safeAreaState, tmp4)) {
      ({ modeToSet, connected, windowWidth, windowHeight, safeArea } = safeAreaState);
      if (modeToSet !== VoicePanelModes.PIP) {
        let tmp10 = null == windowHeight;
        if (!tmp10) {
          tmp10 = windowHeight === windowHeight.windowHeight && windowWidth === windowHeight.windowWidth && safeArea.top === windowHeight.safeArea.top && safeArea.bottom === windowHeight.safeArea.bottom && safeArea.left === windowHeight.safeArea.left && safeArea.right === windowHeight.safeArea.right;
        }
        const value = wrapperDimensions.get();
        ({ drawerX, drawerY } = value);
        const diff = windowHeight - tmp8;
        if (modeToSet === VoicePanelModes.PANEL) {
          if (connected) {
            obj2 = { drawerWidth: windowWidth, drawerHeight: diff, drawerX: 0, drawerY: 0, animated: tmp10, mode: modeToSet };
            updateSharedValueIfChangedDefault(wrapperDimensions, obj2);
            updateSharedValueIfChangedDefault(wrapperOffset, { gestureActive: false });
          } else {
            const obj3 = { windowWidth, connected, safeAreaLeft: null, safeAreaRight: null };
            ({ left: obj4.safeAreaLeft, right: obj4.safeAreaRight } = safeArea);
            const tmpResult = PanelSizeUtils;
            const maxPanelWidth = tmpResult.getMaxPanelWidth(obj3);
            const tmpResult2 = PanelSizeUtils;
            const panelX = tmpResult2.getPanelX(windowWidth, maxPanelWidth);
            const _Math = Math;
            const tmp24 = roundToNearestPixelDefault;
            const obj5 = { drawerWidth: maxPanelWidth, drawerHeight: diff, drawerX: panelX, drawerY: tmp24(Math.max(diff - tmp7 - tmp6 - safeArea.bottom, diff - 0.8 * diff)), animated: tmp10, mode: modeToSet };
            tmp24(Math.max(diff - tmp7 - tmp6 - safeArea.bottom, diff - 0.8 * diff));
            updateSharedValueIfChangedDefault(wrapperDimensions, obj5);
          }
        } else if (modeToSet === VoicePanelModes.DISMISSED) {
          let tmp17;
          const tmp33 = updateSharedValueIfChangedDefault;
          if (connected) {
            const obj6 = { mode: modeToSet };
            tmp33(wrapperDimensions, obj6);
            tmp17 = importDefault;
          } else {
            const obj = { drawerY: windowDimensions.get().height + 60, mode: modeToSet };
            tmp33(wrapperDimensions, obj);
            tmp17 = importDefault;
          }
          tmp17(9774)(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
        }
      }
    }
  };
  let obj6 = { cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, VoicePanelModes: animatedStyle1, wrapperDimensions, updateSharedValueIfChanged: height(9774), wrapperOffset, getMaxPanelWidth: require("PanelSizeUtils").getMaxPanelWidth, getPanelX: require("PanelSizeUtils").getPanelX, roundToNearestPixel: height(10725), windowDimensions };
  fn3.__closure = obj6;
  fn3.__workletHash = 7580692586417;
  fn3.__initData = __initData32;
  const animatedReaction = obj5.useAnimatedReaction(fn2, fn3);
  const obj7 = require("ReanimatedRexport");
  class A {
    constructor() {
      let drawerX;
      let drawerY;
      let gestureActive2;
      let y;
      const value = useReducedMotion.get();
      const gestureActive = !value && wrapperDimensions.get().animated || wrapperOffset.get().gestureActive;
      const value4 = wrapperOffset.get();
      ({ gestureActive: gestureActive2, y } = value4);
      const x = value4.x;
      const value5 = wrapperDimensions.get();
      ({ drawerY, drawerX } = value5);
      const value6 = connected.get();
      let tmp7 = !value6;
      if (tmp7) {
        if (!gestureActive2) {
          gestureActive2 = 0 !== y;
        }
        tmp7 = gestureActive2;
      }
      let sum1 = drawerX;
      let sum = drawerY;
      if (tmp7) {
        const _Math = Math;
        sum = drawerY + Math.max(y, 0);
        sum1 = drawerX + x;
      }
      class VoicePanelUITsx53 {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
            tmp2 = closure_1_7;
            tmp3 = closure_15;
            tmp = closure_1_7.get() !== closure_15.DISMISSED;
          }
          if (tmp) {
            tmp4 = closure_0;
            tmp5 = closure_2;
            obj = closure_0(closure_2[15]);
            tmp6 = height;
            tmp7 = obj.runOnJS(height(closure_2[34]).updateSourceTrackingView)();
          }
          return;
        }
      }
      VoicePanelUITsx53.__closure = { mode, VoicePanelModes, runOnJS: ReanimatedRexport2.runOnJS, updateSourceTrackingView: ExternalPipDefault.updateSourceTrackingView };
      VoicePanelUITsx53.__workletHash = 6837142333833;
      VoicePanelUITsx53.__initData = __initData;
      ({ mode, VoicePanelModes, runOnJS: ReanimatedRexport2.runOnJS, updateSourceTrackingView: ExternalPipDefault.updateSourceTrackingView });
      const withSpring = spring.withSpring;
      spring;
      let str = "animate-never";
      let str2 = "animate-never";
      const tmp14 = wrapperOffset.get().gestureActive ? DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE : obj4;
      if (gestureActive) {
        str2 = "animate-always";
      }
      const items = [{ translateX: withSpring(sum1, tmp14, str2, VoicePanelUITsx53) }, ];
      ({ translateX: withSpring(sum1, tmp14, str2, VoicePanelUITsx53) });
      const withSpring2 = spring.withSpring;
      spring;
      const tmp16 = wrapperOffset.get().gestureActive ? DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE : obj4;
      if (gestureActive) {
        str = "animate-always";
      }
      obj4 = { transform: items };
      items[1] = { translateY: withSpring2(sum, tmp16, str, VoicePanelUITsx53) };
      ({ translateY: withSpring2(sum, tmp16, str, VoicePanelUITsx53) });
      return obj4;
    }
  }
  A.__closure = { useReducedMotion, wrapperDimensions, wrapperOffset, connected, mode, VoicePanelModes: animatedStyle1, runOnJS: require("ReanimatedRexport").runOnJS, updateSourceTrackingView: height(9110).updateSourceTrackingView, withSpring: require("spring").withSpring, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, DRAWER_SIZE_PHYSICS: obj4 };
  A.__workletHash = 14488035665779;
  A.__initData = __initData33;
  ({ useReducedMotion, wrapperDimensions, wrapperOffset, connected, mode, VoicePanelModes: animatedStyle1, runOnJS: require("ReanimatedRexport").runOnJS, updateSourceTrackingView: height(9110).updateSourceTrackingView, withSpring: require("spring").withSpring, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, DRAWER_SIZE_PHYSICS: obj4 });
  const animatedStyle = obj7.useAnimatedStyle(A);
  const obj9 = require("ReanimatedRexport");
  class C {
    constructor() {
      let str;
      let str2;
      const value = mode.get();
      if (typeof computeBorderRadii === "function") {
        let num;
        if (value === VoicePanelModes.PIP) {
          num = DEFAULT_BORDER_RADIUS_PIP;
        } else {
          num = 0;
          if (!tmp2) {
            num = DEFAULT_BORDER_RADIUS;
          }
        }
        size = { width: wrapperDimensions.get().drawerWidth, height: wrapperDimensions.get().drawerHeight, borderRadius: obj4.withSpring(num, authStore), pointerEvents: str, backgroundColor: str2 };
        str = "none";
        obj4 = spring;
        if (mode.get() === VoicePanelModes.PANEL) {
          str = "auto";
        }
        str2 = "transparent";
        if (!connected.get()) {
          str2 = closure_2.maskDefaultBackground.backgroundColor;
        }
        return size;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  C.__closure = { computeBorderRadii, mode, connected, wrapperDimensions, withSpring: require("spring").withSpring, BORDER_RADIUS_PHYSICS: windowDimensions, VoicePanelModes: animatedStyle1, styles: tmp3 };
  C.__workletHash = 8780113527375;
  C.__initData = __initData35;
  ({ computeBorderRadii, mode, connected, wrapperDimensions, withSpring: require("spring").withSpring, BORDER_RADIUS_PHYSICS: windowDimensions, VoicePanelModes: animatedStyle1, styles: tmp3 });
  animatedStyle1 = obj9.useAnimatedStyle(C);
  if (!require("ReleaseChannelUtils").isStable) {
    let tmpResult = tmp(4612);
    class H {
      constructor() {
        return windowDimensions.get();
      }
    }
    const obj11 = { windowDimensions };
    H.__closure = obj11;
    let num = 5417428185301;
    H.__workletHash = 5417428185301;
    H.__initData = __initData36;
    class T {
      constructor(arg0) {
        const obj = wrapperOffset(closure_2[15]);
        const runOnJSResult = obj.runOnJS(log);
        runOnJSResult("Window dimensions changed:", JSON.stringify(arg0));
      }
    }
    const useAnimatedReaction = tmpResult.useAnimatedReaction;
    T.__closure = { runOnJS: tmp(4612).runOnJS, log };
    T.__workletHash = 2055218123366;
    T.__initData = __initData37;
    const obj12 = { runOnJS: tmp(4612).runOnJS, log };
    const animatedReaction1 = useAnimatedReaction(H, T);
    let tmpResult2 = tmp(4612);
    const fn4 = function k() {
      return wrapperDimensions.get();
    };
    const obj13 = { wrapperDimensions };
    fn4.__closure = obj13;
    fn4.__workletHash = 3714374990167;
    fn4.__initData = __initData38;
    const fn5 = function y(arg0) {
      const obj = wrapperOffset(closure_2[15]);
      const runOnJSResult = obj.runOnJS(log);
      runOnJSResult("Wrapper dimensions changed:", JSON.stringify(arg0));
    };
    const useAnimatedReaction2 = tmpResult2.useAnimatedReaction;
    fn5.__closure = { runOnJS: tmp(4612).runOnJS, log };
    fn5.__workletHash = 2552930207447;
    fn5.__initData = __initData39;
    const obj14 = { runOnJS: tmp(4612).runOnJS, log };
    const animatedReaction2 = useAnimatedReaction2(fn4, fn5);
  }
  let items = [tmp3.wrapper, animatedStyle1, animatedStyle];
  return obj2.useMemo(() => ({ wrapperRootStyles: closure_2.wrapper, wrapperTransformStyles: animatedStyle, wrapperSurfaceStyles: animatedStyle1 }), items);
}
const StyleSheet = react_native.StyleSheet;
({ Pressable: metroRequire, ScrollView } = react_native);
({ BORDER_RADIUS_PHYSICS: c10, DEFAULT_BORDER_RADIUS } = VoicePanelConstants);
const DEFAULT_BORDER_RADIUS_PIP = VoicePanelConstants.DEFAULT_BORDER_RADIUS_PIP;
({ DRAWER_SPRING_PHYSICS, IS_IOS: map1, MODE_CHANGE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR } = VoicePanelConstants);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const LAYOUT_PHYSICS = VoicePanelConstants.LAYOUT_PHYSICS;
const DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE = VoicePanelConstants.DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const isActivityParticipant = CallConstants.isActivityParticipant;
const POP_RESISTANCE = MorphablePanelConstants.POP_RESISTANCE;
({ jsx: closure_21, jsxs: closure_22 } = Fragment);
let c24 = 10;
let c25 = 0.2;
let c26 = 180;
let tmp5 = new LoggerDefault("VoicePanelUI");
log = tmp5;
function layoutTransition(originX) {
  let obj3;
  let obj5;
  let obj6;
  const obj = { animations: size, initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight } };
  size = { originX: obj3.withSpring(originX.targetOriginX, LAYOUT_PHYSICS, "animate-always"), originY: obj4.withSpring(originX.targetOriginY, LAYOUT_PHYSICS, "animate-always"), width: obj5.withSpring(originX.targetWidth, LAYOUT_PHYSICS, "animate-always"), height: obj6.withSpring(originX.targetHeight, LAYOUT_PHYSICS, "animate-always") };
  obj3 = spring;
  obj4 = spring;
  obj5 = spring;
  obj6 = spring;
  return obj;
}
let obj = { withSpring: spring.withSpring, LAYOUT_PHYSICS };
layoutTransition.__closure = obj;
layoutTransition.__workletHash = 16454235842679;
layoutTransition.__initData = { code: "function layoutTransition_VoicePanelUITsx1(values){const{withSpring,LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'animate-always'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'animate-always'),width:withSpring(values.targetWidth,LAYOUT_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,LAYOUT_PHYSICS,'animate-always')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let obj2 = { damping: 0 };
let merged = Object.assign(LAYOUT_PHYSICS);
function scrollViewLayoutTransition(originX) {
  let obj3;
  let obj5;
  let obj6;
  const obj = { animations: size, initialValues: { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight } };
  size = { originX: obj3.withSpring(originX.targetOriginX, LAYOUT_PHYSICS, "animate-always"), originY: obj4.withSpring(originX.targetOriginY, LAYOUT_PHYSICS, "animate-always"), width: obj5.withSpring(originX.targetWidth, obj2, "animate-always"), height: obj6.withSpring(originX.targetHeight, obj2, "animate-always") };
  obj3 = spring;
  obj4 = spring;
  obj5 = spring;
  obj6 = spring;
  return obj;
}
let obj3 = { withSpring: spring.withSpring, LAYOUT_PHYSICS, EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS: obj2 };
scrollViewLayoutTransition.__closure = obj3;
scrollViewLayoutTransition.__workletHash = 11745134918460;
scrollViewLayoutTransition.__initData = { code: "function scrollViewLayoutTransition_VoicePanelUITsx2(values){const{withSpring,LAYOUT_PHYSICS,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'animate-always'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'animate-always'),width:withSpring(values.targetWidth,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'animate-always')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let obj4 = { mass: 0.3, damping: 100, stiffness: 100 };
let merged1 = Object.assign(DRAWER_SPRING_PHYSICS);
let obj5 = { mass: 2 };
const merged2 = Object.assign(MODE_CHANGE_PHYSICS);
function computeViewableChunksFromScrollPosition(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 1;
  }
  const rounded = Math.ceil(arg1 / VOICE_PANEL_CHUNK_DIVISOR);
  const sum = Math.max(Math.floor(arg0 / rounded) - num, 0) + VOICE_PANEL_CHUNK_DIVISOR + 2 * num;
  const minResult = min(sum, Math.ceil(arg2 / rounded));
  const obj = { start: Math.max(minResult - VOICE_PANEL_CHUNK_DIVISOR - 2 * num, 0), end: minResult };
  return obj;
}
computeViewableChunksFromScrollPosition.__closure = { VOICE_PANEL_CHUNK_DIVISOR };
computeViewableChunksFromScrollPosition.__workletHash = 3008066799757;
computeViewableChunksFromScrollPosition.__initData = { code: "function computeViewableChunksFromScrollPosition_VoicePanelUITsx3(scrollPosition,windowHeight,contentHeight,extraChunks=1){const{VOICE_PANEL_CHUNK_DIVISOR}=this.__closure;const chunkSize=Math.ceil(windowHeight/VOICE_PANEL_CHUNK_DIVISOR);let start=Math.max(Math.floor(scrollPosition/chunkSize)-extraChunks,0);const end=Math.min(start+VOICE_PANEL_CHUNK_DIVISOR+extraChunks*2,Math.ceil(contentHeight/chunkSize));start=Math.max(end-VOICE_PANEL_CHUNK_DIVISOR-extraChunks*2,0);return{start:start,end:end};}" };
let createStyles = createStyles_mod;
let obj6 = { accessibilityView: obj7, wrapper: obj8, maskDefaultBackground: obj9, scrollView: obj10, scrollViewContent: { flexGrow: 1, flexShrink: 0 }, shade: obj11, shadePressable: { flexGrow: 1 } };
obj7 = { overflow: "hidden" };
createStyles = createStyles.createStyles;
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj8 = { alignItems: "flex-start", zIndex: 1 };
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj10 = { borderTopLeftRadius: DEFAULT_BORDER_RADIUS, borderTopRightRadius: DEFAULT_BORDER_RADIUS };
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj11 = { backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
let closure_34 = createStyles(obj6);
let closure_35 = ReanimatedRexport.createAnimatedComponent(ScrollView);
let closure_36 = MetaQuestUtils.isMetaQuest();
const __initData = { code: "function VoicePanelUITsx4(){const{gestureState,connected,mode}=this.__closure;return{gestureActive:gestureState.get().active,connected:connected.get(),mode:mode.get()};}" };
const __initData2 = { code: "function VoicePanelUITsx5(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,runOnJS,setPanelFullscreen,setPanelOpen,setPanelPIP}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const{gestureActive:gestureActive,connected:connected_0,mode:mode_0}=props;if(!connected_0||gestureActive||mode_0!==VoicePanelModes.PANEL){runOnJS(setPanelFullscreen)(false);}else{runOnJS(setPanelFullscreen)(true);}if(mode_0===VoicePanelModes.PANEL){runOnJS(setPanelOpen)(true);}else{runOnJS(setPanelOpen)(false);}if(mode_0===VoicePanelModes.PIP){runOnJS(setPanelPIP)(true);}else{runOnJS(setPanelPIP)(false);}}" };
const __initData3 = { code: "function VoicePanelUITsx6(){const{mode}=this.__closure;return mode.get();}" };
const __initData4 = { code: "function VoicePanelUITsx7(mode_1,previous_0){const{VoicePanelModes,updateSharedValueIfChanged,gestureState}=this.__closure;if(mode_1===VoicePanelModes.DISMISSED&&previous_0!==VoicePanelModes.DISMISSED){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}}" };
const __initData5 = { code: "function VoicePanelUITsx8(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
const __initData6 = { code: "function VoicePanelUITsx9(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
const __initData7 = { code: "function VoicePanelUITsx10(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(!connected.get()){return;}if(!(mode.get()===VoicePanelModes.PIP)){if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}}" };
let closure_44 = { code: "function VoicePanelUITsx11(){const{wrapperOffset,mode,VoicePanelModes,updateSharedValueIfChanged,gestureState,runOnJS,controlsLock}=this.__closure;var pendingModeChange=wrapperOffset.get().y!==0&&mode.get()===VoicePanelModes.PANEL;if(!pendingModeChange){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}runOnJS(controlsLock.unlock)();}" };
let closure_45 = { code: "function VoicePanelUITsx12(event_3){const{gestureState,mode,VoicePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,connected,runOnJS,setMode,lockScrolling,MIN_DISMISS_MOVE_PERCENTAGE,dismissPanel}=this.__closure;if(gestureState.get().cancel){return;}var velocityX=event_3.velocityX,velocityY=event_3.velocityY,absoluteX_0=event_3.absoluteX,absoluteY_0=event_3.absoluteY;if(mode.get()===VoicePanelModes.PIP){var _calculatePIPPosition=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX_0,absoluteY:absoluteY_0,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()}),pipX=_calculatePIPPosition.pipX,pipY=_calculatePIPPosition.pipY;updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else{if(mode.get()===VoicePanelModes.PANEL){if(velocityY>0){if(connected.get()){if(!gestureState.get().requiresPop){runOnJS(setMode)(VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}else{var panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;var dismissThreshold=panelHeight*MIN_DISMISS_MOVE_PERCENTAGE;if(wrapperOffset.get().y>dismissThreshold){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(dismissPanel)();return;}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}}" };
let closure_46 = { code: "function VoicePanelUITsx13(_e){const{lockScrolling,updateSharedValueIfChanged,gestureState,wrapperOffset}=this.__closure;lockScrolling.set(false);updateSharedValueIfChanged(gestureState,{cancel:false,active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}" };
let closure_47 = { code: "function VoicePanelUITsx14(event_2){const{gestureState,mode,VoicePanelModes,updateSharedValueIfChanged,wrapperOffset,connected,lockScrolling,scrollPosition,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(gestureState.get().cancel){return;}if(mode.get()===VoicePanelModes.PIP){updateSharedValueIfChanged(wrapperOffset,{x:(gestureState.get().absoluteXStart-event_2.absoluteX)*-1,y:(gestureState.get().absoluteYStart-event_2.absoluteY)*-1});return;}var newYOffset=(gestureState.get().absoluteYStart-event_2.absoluteY)*-1;if(connected.get()&&!gestureState.get().requiresPop&&newYOffset<=0){gestureState.set({...gestureState.get(),requiresPop:true});}if(lockScrolling.get()&&newYOffset<0){lockScrolling.set(false);}else{if(!lockScrolling.get()&&scrollPosition.get()<=0){lockScrolling.set(true);}}if(gestureState.get().requiresPop){var distance=Math.max(newYOffset,0);var resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{gestureState.set({...gestureState.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}" };
let closure_48 = { code: "function VoicePanelUITsx15(event_1,manager_0){const{State,gestureState,mode,VoicePanelModes,scrollPosition,isQuest,MIN_GESTURE_MOVE,focused,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset,lockScrolling}=this.__closure;if(event_1.state!==State.BEGAN||gestureState.get().active||gestureState.get().cancel){return;}var _event_1$changedTouch=event_1.changedTouches[0],absoluteY=_event_1$changedTouch.absoluteY,absoluteX=_event_1$changedTouch.absoluteX;var yDiff=gestureState.get().absoluteYStart-absoluteY;var xDiff=gestureState.get().absoluteXStart-absoluteX;var absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));var isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;var startGesture=false;if(mode.get()===VoicePanelModes.PANEL){var scrollPos=Math.floor(scrollPosition.get());if(yDiff<0&&scrollPos<=0){if(isQuest){startGesture=absoluteMovement>MIN_GESTURE_MOVE;}else{startGesture=true;}}else{var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!=null&&isNotPullDownGesture){manager_0.fail();}}}else{if(mode.get()===VoicePanelModes.PIP&&absoluteMovement>MIN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true});gestureState.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY+scrollPosition.get(),cancel:false,active:true,requiresPop:gestureState.get().requiresPop});lockScrolling.set(true);manager_0.activate();}else{updateSharedValueIfChanged(gestureState,{absoluteYStart:absoluteY,absoluteXStart:absoluteX});}}" };
let closure_49 = { code: "function VoicePanelUITsx16(event_0){const{gestureState,updateSharedValueIfChanged,wrapperOffset,connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,controlsLock}=this.__closure;if(gestureState.get().cancel){return;}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});gestureState.set({absoluteXStart:event_0.absoluteX,absoluteYStart:event_0.absoluteY,active:false,cancel:false,requiresPop:connected.get()&&mode.get()===VoicePanelModes.PANEL});if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){runOnJS(controlsLock.lock)();}}" };
let closure_50 = { code: "function VoicePanelUITsx17(event,manager){const{IS_IOS,windowDimensions,safeArea,gestureState,isFocusedVideoZoomed,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes}=this.__closure;var touch=event.allTouches[0];if(IS_IOS&&touch!=null&&touch.absoluteY>windowDimensions.get().height-safeArea.get().bottom){gestureState.set({...gestureState.get(),cancel:true});manager.activate();return;}if(isFocusedVideoZoomed.get()||mode.get()===VoicePanelModes.PANEL&&controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){gestureState.set({...gestureState.get(),cancel:true});manager.fail();}}" };
const __initData8 = { code: "function onBeginDrag_VoicePanelUITsx18(event_4){const{scrollPosition,dragScrolling}=this.__closure;scrollPosition.set(event_4.contentOffset.y);dragScrolling.set(true);}" };
const __initData9 = { code: "function onEndDrag_VoicePanelUITsx19(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
const __initData10 = { code: "function onMomentumEnd_VoicePanelUITsx20(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
const __initData11 = { code: "function onScroll_VoicePanelUITsx21(event_5){const{lockScrolling,isSnappingBack,scrollPosition,scrollTo,scrollerRef,computeViewableChunksFromScrollPosition,windowDimensions,scrollableRegionSize,updateSharedValueIfChanged,viewableChunks}=this.__closure;if(lockScrolling.get()){if(isSnappingBack.get()){return;}if(scrollPosition.get()<0){scrollPosition.set(0);}const targetScrollPosition=scrollPosition.get();if(Math.abs(event_5.contentOffset.y-targetScrollPosition)<0.1){return;}isSnappingBack.set(true);scrollTo(scrollerRef,0,targetScrollPosition,false);isSnappingBack.set(false);}else{let newViewableChunks;if(scrollPosition.get()!==event_5.contentOffset.y){newViewableChunks=computeViewableChunksFromScrollPosition(scrollPosition.get(),windowDimensions.get().height,scrollableRegionSize.get());}scrollPosition.set(event_5.contentOffset.y);newViewableChunks!=null&&updateSharedValueIfChanged(viewableChunks,newViewableChunks);}}" };
const __initData12 = { code: "function VoicePanelUITsx22(){const{mode}=this.__closure;return mode.get();}" };
const __initData13 = { code: "function VoicePanelUITsx23(mode_2,previous_1){const{VoicePanelModes,lockScrolling}=this.__closure;if(previous_1==null||mode_2===previous_1){return;}if(mode_2===VoicePanelModes.PANEL&&previous_1===VoicePanelModes.PIP){lockScrolling.set(false);}else{if(mode_2===VoicePanelModes.PIP){lockScrolling.set(true);}}}" };
const __initData14 = { code: "function VoicePanelUITsx24(){const{mode,VoicePanelModes,focused,lockScrolling,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter}=this.__closure;const isPIPMode=mode.get()===VoicePanelModes.PIP;const disableScroll=isPIPMode||focused.get()!=null;return{pointerEvents:isPIPMode?\"none\":\"auto\",scrollEnabled:!disableScroll,showsVerticalScrollIndicator:lockScrolling.get()?false:!disableScroll,scrollIndicatorInsets:{top:calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height-safeArea.get().top,bottom:safeArea.get().bottom}};}" };
const __initData15 = { code: "function VoicePanelUITsx25(){const{mode,VoicePanelModes,connected,gestureState,wrapperDimensions,wrapperOffset,windowDimensions}=this.__closure;switch(mode.get()){case VoicePanelModes.PIP:case VoicePanelModes.DISMISSED:{return 0;}default:{if(connected.get()&&gestureState.get().active&&gestureState.get().requiresPop){return 1;}const drawerTop=wrapperDimensions.get().drawerY+wrapperOffset.get().y;const screenSize=windowDimensions.get().height;const percentage=(screenSize-drawerTop)/screenSize;return Math.min(Math.max(percentage,0),1);}}}" };
const __initData16 = { code: "function VoicePanelUITsx26(){const{gestureState,connected,mode}=this.__closure;return{gestureActive:gestureState.get().active,connected:connected.get(),mode:mode.get()};}" };
const __initData17 = { code: "function VoicePanelUITsx27(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,runOnJS,setPanelFullscreen,setPanelOpen,setPanelPIP}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{gestureActive:gestureActive,connected:connected_0,mode:mode_0}=props;if(!connected_0||gestureActive||mode_0!==VoicePanelModes.PANEL){runOnJS(setPanelFullscreen)(false);}else{runOnJS(setPanelFullscreen)(true);}if(mode_0===VoicePanelModes.PANEL){runOnJS(setPanelOpen)(true);}else{runOnJS(setPanelOpen)(false);}if(mode_0===VoicePanelModes.PIP){runOnJS(setPanelPIP)(true);}else{runOnJS(setPanelPIP)(false);}}" };
const __initData18 = { code: "function VoicePanelUITsx28(){const{mode}=this.__closure;return mode.get();}" };
const __initData19 = { code: "function VoicePanelUITsx29(mode_1,previous_0){const{VoicePanelModes,updateSharedValueIfChanged,gestureState}=this.__closure;if(mode_1===VoicePanelModes.DISMISSED&&previous_0!==VoicePanelModes.DISMISSED){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}}" };
const __initData20 = { code: "function VoicePanelUITsx30(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
const __initData21 = { code: "function VoicePanelUITsx31(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
let closure_65 = { code: "function VoicePanelUITsx32(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(!connected.get())return;if(mode.get()===VoicePanelModes.PIP){}else if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}" };
let closure_66 = { code: "function VoicePanelUITsx33(){const{wrapperOffset,mode,VoicePanelModes,updateSharedValueIfChanged,gestureState,runOnJS,controlsLock}=this.__closure;const pendingModeChange=wrapperOffset.get().y!==0&&mode.get()===VoicePanelModes.PANEL;if(!pendingModeChange){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}runOnJS(controlsLock.unlock)();}" };
let closure_67 = { code: "function VoicePanelUITsx34(event_3){const{gestureState,mode,VoicePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,connected,runOnJS,setMode,lockScrolling,MIN_DISMISS_MOVE_PERCENTAGE,dismissPanel}=this.__closure;if(gestureState.get().cancel)return;const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX_0,absoluteY:absoluteY_0}=event_3;if(mode.get()===VoicePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX_0,absoluteY:absoluteY_0,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else if(mode.get()===VoicePanelModes.PANEL){if(velocityY>0){if(connected.get()){if(!gestureState.get().requiresPop){runOnJS(setMode)(VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}else{const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;const dismissThreshold=panelHeight*MIN_DISMISS_MOVE_PERCENTAGE;if(wrapperOffset.get().y>dismissThreshold){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(dismissPanel)();return;}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}" };
let closure_68 = { code: "function VoicePanelUITsx35(_e){const{lockScrolling,updateSharedValueIfChanged,gestureState,wrapperOffset}=this.__closure;lockScrolling.set(false);updateSharedValueIfChanged(gestureState,{cancel:false,active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});console.log('onTouchesCancelled');}" };
let closure_69 = { code: "function VoicePanelUITsx36(event_2){const{gestureState,mode,VoicePanelModes,updateSharedValueIfChanged,wrapperOffset,connected,lockScrolling,scrollPosition,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(gestureState.get().cancel)return;if(mode.get()===VoicePanelModes.PIP){updateSharedValueIfChanged(wrapperOffset,{x:(gestureState.get().absoluteXStart-event_2.absoluteX)*-1,y:(gestureState.get().absoluteYStart-event_2.absoluteY)*-1});return;}const minYOffset=0;let newYOffset=(gestureState.get().absoluteYStart-event_2.absoluteY)*-1;if(connected.get()&&!gestureState.get().requiresPop&&newYOffset<=minYOffset){gestureState.set({...gestureState.get(),requiresPop:true});}if(lockScrolling.get()&&newYOffset<minYOffset){lockScrolling.set(false);}else if(!lockScrolling.get()&&scrollPosition.get()<=0){lockScrolling.set(true);}if(gestureState.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{gestureState.set({...gestureState.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}" };
let closure_70 = { code: "function VoicePanelUITsx37(event_1,manager_0){const{State,gestureState,mode,VoicePanelModes,scrollPosition,isQuest,MIN_GESTURE_MOVE,focused,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset,lockScrolling}=this.__closure;if(event_1.state!==State.BEGAN||gestureState.get().active||gestureState.get().cancel)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event_1.changedTouches[0];const yDiff=gestureState.get().absoluteYStart-absoluteY;const xDiff=gestureState.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;let startGesture=false;if(mode.get()===VoicePanelModes.PANEL){var _focused$get;const scrollPos=Math.floor(scrollPosition.get());if(yDiff<0&&scrollPos<=0){if(isQuest){startGesture=absoluteMovement>MIN_GESTURE_MOVE;}else{startGesture=true;}}else if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!=null&&isNotPullDownGesture){manager_0.fail();}}else if(mode.get()===VoicePanelModes.PIP&&absoluteMovement>MIN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true});gestureState.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY+scrollPosition.get(),cancel:false,active:true,requiresPop:gestureState.get().requiresPop});lockScrolling.set(true);manager_0.activate();}else{updateSharedValueIfChanged(gestureState,{absoluteYStart:absoluteY,absoluteXStart:absoluteX});}}" };
let closure_71 = { code: "function VoicePanelUITsx38(event_0){const{gestureState,updateSharedValueIfChanged,wrapperOffset,connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,controlsLock}=this.__closure;if(gestureState.get().cancel)return;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});gestureState.set({absoluteXStart:event_0.absoluteX,absoluteYStart:event_0.absoluteY,active:false,cancel:false,requiresPop:connected.get()&&mode.get()===VoicePanelModes.PANEL});if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){runOnJS(controlsLock.lock)();}}" };
let closure_72 = { code: "function VoicePanelUITsx39(event,manager){const{IS_IOS,windowDimensions,safeArea,gestureState,isFocusedVideoZoomed,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes}=this.__closure;const touch=event.allTouches[0];if(IS_IOS&&touch!=null&&touch.absoluteY>windowDimensions.get().height-safeArea.get().bottom){gestureState.set({...gestureState.get(),cancel:true});manager.activate();return;}if(isFocusedVideoZoomed.get()||mode.get()===VoicePanelModes.PANEL&&controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){gestureState.set({...gestureState.get(),cancel:true});manager.fail();}}" };
const __initData22 = { code: "function onBeginDrag_VoicePanelUITsx40(event_4){const{scrollPosition,dragScrolling}=this.__closure;scrollPosition.set(event_4.contentOffset.y);dragScrolling.set(true);}" };
const __initData23 = { code: "function onEndDrag_VoicePanelUITsx41(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
const __initData24 = { code: "function onMomentumEnd_VoicePanelUITsx42(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
const __initData25 = { code: "function onScroll_VoicePanelUITsx43(event_5){const{lockScrolling,isSnappingBack,scrollPosition,scrollTo,scrollerRef,computeViewableChunksFromScrollPosition,windowDimensions,scrollableRegionSize,updateSharedValueIfChanged,viewableChunks}=this.__closure;if(lockScrolling.get()){if(isSnappingBack.get()){return;}if(scrollPosition.get()<0){scrollPosition.set(0);}const targetScrollPosition=scrollPosition.get();if(Math.abs(event_5.contentOffset.y-targetScrollPosition)<0.1){return;}isSnappingBack.set(true);scrollTo(scrollerRef,0,targetScrollPosition,false);isSnappingBack.set(false);}else{let newViewableChunks;if(scrollPosition.get()!==event_5.contentOffset.y){newViewableChunks=computeViewableChunksFromScrollPosition(scrollPosition.get(),windowDimensions.get().height,scrollableRegionSize.get());}scrollPosition.set(event_5.contentOffset.y);newViewableChunks!=null&&updateSharedValueIfChanged(viewableChunks,newViewableChunks);}}" };
const __initData26 = { code: "function VoicePanelUITsx44(){const{mode}=this.__closure;return mode.get();}" };
const __initData27 = { code: "function VoicePanelUITsx45(mode_2,previous_1){const{VoicePanelModes,lockScrolling}=this.__closure;if(previous_1==null||mode_2===previous_1)return;if(mode_2===VoicePanelModes.PANEL&&previous_1===VoicePanelModes.PIP){lockScrolling.set(false);}else if(mode_2===VoicePanelModes.PIP){lockScrolling.set(true);}}" };
const __initData28 = { code: "function VoicePanelUITsx46(){const{mode,VoicePanelModes,focused,lockScrolling,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter}=this.__closure;const isPIPMode=mode.get()===VoicePanelModes.PIP;const disableScroll=isPIPMode||focused.get()!=null;return{pointerEvents:isPIPMode?'none':'auto',scrollEnabled:!disableScroll,showsVerticalScrollIndicator:lockScrolling.get()?false:!disableScroll,scrollIndicatorInsets:{top:calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height-safeArea.get().top,bottom:safeArea.get().bottom}};}" };
const __initData29 = { code: "function VoicePanelUITsx47(){const{mode,VoicePanelModes,connected,gestureState,wrapperDimensions,wrapperOffset,windowDimensions}=this.__closure;switch(mode.get()){case VoicePanelModes.PIP:case VoicePanelModes.DISMISSED:return 0;default:{if(connected.get()&&gestureState.get().active&&gestureState.get().requiresPop){return 1;}const drawerTop=wrapperDimensions.get().drawerY+wrapperOffset.get().y;const screenSize=windowDimensions.get().height;const percentage=(screenSize-drawerTop)/screenSize;return Math.min(Math.max(percentage,0),1);}}}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_81 = ReactCompilerGating.isReactCompilerEnabled() ? ((scrollPosition) => {
  let connected;
  let dismissToPIPGestureRef;
  let first;
  let focused;
  let setPanelFullscreen;
  let tmp11;
  let tmp = scrollPosition;
  let tmp2 = setPanelFullscreen;
  let obj = scrollPosition(setPanelFullscreen[18]);
  const cResult = obj.c(90);
  scrollPosition = scrollPosition.scrollPosition;
  const dragScrolling = scrollPosition.dragScrolling;
  setPanelFullscreen = scrollPosition.setPanelFullscreen;
  const setPanelOpen = scrollPosition.setPanelOpen;
  const setPanelPIP = scrollPosition.setPanelPIP;
  const tmp4 = dragScrolling;
  const context = setPanelPIP.useContext(dragScrolling(setPanelFullscreen[19]));
  ({ channelId: StyleSheet, connected } = context);
  const controlsSpecs = context.controlsSpecs;
  const dismissPanel = context.dismissPanel;
  ({ dismissToPIPGestureRef, focused } = context);
  const hideControls = context.hideControls;
  const isFocusedVideoZoomed = context.isFocusedVideoZoomed;
  let mode = context.mode;
  const safeArea = context.safeArea;
  const setMode = context.setMode;
  const showControls = context.showControls;
  const windowDimensions = context.windowDimensions;
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  let rect = dragScrolling(setPanelFullscreen[20])();
  obj2 = scrollPosition(setPanelFullscreen[15]);
  const sharedValue = obj2.useSharedValue(0);
  let obj3 = scrollPosition(setPanelFullscreen[15]);
  const sharedValue1 = obj3.useSharedValue(false);
  obj4 = scrollPosition(setPanelFullscreen[15]);
  const sharedValue2 = obj4.useSharedValue(false);
  let obj5 = scrollPosition(setPanelFullscreen[15]);
  let obj6 = { start: 0, end: setMode };
  const sharedValue3 = obj5.useSharedValue(obj6);
  [tmp11, NOOP] = setPanelOpen(setPanelPIP.useState(true), 2);
  const tmp10 = setPanelOpen(setPanelPIP.useState(true), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const Gesture = tmp(tmp2[21]).Gesture;
    const NativeResult = Gesture.Native();
    cResult[0] = NativeResult;
    first = NativeResult;
  } else {
    first = cResult[0];
  }
  let tmpResult = tmp(tmp2[15]);
  const animatedRef = tmpResult.useAnimatedRef();
  const tmpResult10 = tmp(tmp2[15]);
  const sharedValue4 = tmpResult10.useSharedValue({ absoluteXStart: 0, absoluteYStart: 0, cancel: false, active: false, requiresPop: false });
  const tmpResult11 = tmp(tmp2[15]);
  class Ve {
    constructor() {
      const obj = { gestureActive: sharedValue4.get().active, connected: connected.get(), mode: mode.get() };
      return obj;
    }
  }
  Ve.__closure = { gestureState: sharedValue4, connected, mode };
  Ve.__workletHash = 5596084348360;
  Ve.__initData = __initData;
  function ve(mode, safeAreaState2) {
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp = safeAreaState2;
    if (!cheapWorkletShallowEqual(mode, tmp)) {
      mode = mode.mode;
      if (mode.connected) {
        if (!mode.gestureActive) {
          if (mode === VoicePanelModes.PANEL) {
            const tmp2Result = ReanimatedRexport2;
            tmp2Result.runOnJS(setPanelFullscreen)(true);
          }
          if (mode === VoicePanelModes.PANEL) {
            const tmp2Result6 = ReanimatedRexport2;
            tmp2Result6.runOnJS(setPanelOpen)(true);
          } else {
            const tmp2Result7 = ReanimatedRexport2;
            tmp2Result7.runOnJS(setPanelOpen)(false);
          }
          if (mode === VoicePanelModes.PIP) {
            const tmp2Result8 = ReanimatedRexport2;
            tmp2Result8.runOnJS(setPanelPIP)(true);
          } else {
            const tmp2Result9 = ReanimatedRexport2;
            tmp2Result9.runOnJS(setPanelPIP)(false);
          }
        }
      }
      const tmp2Result10 = ReanimatedRexport2;
      tmp2Result10.runOnJS(setPanelFullscreen)(false);
    }
  }
  let tmp16 = showControls;
  ve.__closure = { cheapWorkletShallowEqual: tmp(tmp2[22]).cheapWorkletShallowEqual, VoicePanelModes: showControls, runOnJS: tmp(tmp2[15]).runOnJS, setPanelFullscreen, setPanelOpen, setPanelPIP };
  ve.__workletHash = 10370987544416;
  ve.__initData = __initData2;
  ({ cheapWorkletShallowEqual: tmp(tmp2[22]).cheapWorkletShallowEqual, VoicePanelModes: showControls, runOnJS: tmp(tmp2[15]).runOnJS, setPanelFullscreen, setPanelOpen, setPanelPIP });
  const animatedReaction = tmpResult11.useAnimatedReaction(Ve, ve);
  function be() {
    return mode.get();
  }
  be.__closure = { mode };
  be.__workletHash = 455036316035;
  be.__initData = __initData3;
  const tmpResult12 = tmp(tmp2[15]);
  class Oe {
    constructor(arg0, arg1) {
      const tmp2 = arg0 === VoicePanelModes.DISMISSED && arg1 !== tmp.DISMISSED;
      if (tmp2) {
        updateSharedValueIfChangedDefault(sharedValue4, { cancel: false, active: false });
      }
    }
  }
  Oe.__closure = { VoicePanelModes: showControls, updateSharedValueIfChanged: tmp4(tmp2[23]), gestureState: sharedValue4 };
  Oe.__workletHash = 10389543324500;
  Oe.__initData = __initData4;
  ({ VoicePanelModes: showControls, updateSharedValueIfChanged: tmp4(tmp2[23]), gestureState: sharedValue4 });
  const animatedReaction1 = tmpResult12.useAnimatedReaction(be, Oe);
  function handleFocusChange(arg0) {
    const tmp = null != arg0 && isActivityParticipant(ChannelRTCStore.getParticipant(StyleSheet, arg0));
    NOOP(!tmp);
  }
  const tmpResult13 = tmp(tmp2[15]);
  class Ce {
    constructor() {
      let tmp;
      if (mode.get() === VoicePanelModes.PANEL) {
        const value = focused.get();
        let id;
        if (value != null) {
          id = value.id;
        }
        tmp = id;
      }
      return tmp;
    }
  }
  Ce.__closure = { mode, VoicePanelModes: showControls, focused };
  Ce.__workletHash = 16350113088465;
  Ce.__initData = __initData5;
  class Ae {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport2;
        obj.runOnJS(handleFocusChange)(arg0);
      }
    }
  }
  Ae.__closure = { runOnJS: tmp(tmp2[15]).runOnJS, handleFocusChange };
  Ae.__workletHash = 169980789473;
  Ae.__initData = __initData6;
  ({ runOnJS: tmp(tmp2[15]).runOnJS, handleFocusChange });
  const animatedReaction2 = tmpResult13.useAnimatedReaction(Ce, Ae);
  const tmp20 = tmp4(tmp2[24])();
  let closure_27 = tmp20;
  if (cResult[1] === connected) {
    if (cResult[2] === tmp20) {
      if (cResult[3] === controlsSpecs) {
        if (cResult[4] === dismissPanel) {
          if (cResult[5] === dismissToPIPGestureRef) {
            if (cResult[6] === focused) {
              if (cResult[7] === sharedValue4) {
                if (cResult[8] === tmp11) {
                  if (cResult[9] === hideControls) {
                    if (cResult[10] === rect.left) {
                      if (cResult[11] === rect.right) {
                        if (cResult[12] === isFocusedVideoZoomed) {
                          if (cResult[13] === sharedValue1) {
                            if (cResult[14] === mode) {
                              if (cResult[15] === safeArea) {
                                if (cResult[16] === scrollPosition) {
                                  if (cResult[17] === setMode) {
                                    if (cResult[18] === showControls) {
                                      if (cResult[19] === windowDimensions) {
                                        if (cResult[20] === wrapperDimensions) {
                                          let tmp21;
                                          if (cResult[21] === wrapperOffset) {
                                            tmp21 = cResult[22];
                                          }
                                          const obj10 = { onBeginDrag: Ge, onEndDrag: Fe, onMomentumEnd: Le, onScroll: Xe };
                                          const tmpResult14 = tmp(tmp2[15]);
                                          class Ge {
                                            constructor(contentOffset) {
                                              const result = scrollPosition.set(contentOffset.contentOffset.y);
                                              const result1 = dragScrolling.set(true);
                                            }
                                          }
                                          const obj11 = { scrollPosition, dragScrolling };
                                          Ge.__closure = obj11;
                                          Ge.__workletHash = 9709378200858;
                                          Ge.__initData = __initData8;
                                          class Fe {
                                            constructor() {
                                              const result = dragScrolling.set(false);
                                            }
                                          }
                                          const obj12 = { dragScrolling };
                                          Fe.__closure = obj12;
                                          Fe.__workletHash = 16780787183039;
                                          Fe.__initData = __initData9;
                                          class Le {
                                            constructor() {
                                              const result = dragScrolling.set(false);
                                            }
                                          }
                                          const obj13 = { dragScrolling };
                                          Le.__closure = obj13;
                                          Le.__workletHash = 13772673540365;
                                          Le.__initData = __initData10;
                                          class Xe {
                                            constructor(contentOffset) {
                                              if (sharedValue1.get()) {
                                                if (!sharedValue2.get()) {
                                                  if (scrollPosition.get() < 0) {
                                                    const result = scrollPosition.set(0);
                                                  }
                                                  const value = scrollPosition.get();
                                                  const _Math7 = Math;
                                                  if (Math.abs(contentOffset.contentOffset.y - value) >= 0.1) {
                                                    const result1 = sharedValue2.set(true);
                                                    const obj5 = ReanimatedRexport2;
                                                    obj5.scrollTo(animatedRef, 0, value, false);
                                                    const result2 = sharedValue2.set(false);
                                                  }
                                                }
                                              } else {
                                                let tmp;
                                                if (scrollPosition.get() !== contentOffset.contentOffset.y) {
                                                  const value2 = scrollPosition.get();
                                                  const height = windowDimensions.get().height;
                                                  if (typeof computeViewableChunksFromScrollPosition === "function") {
                                                    const _Math = Math;
                                                    const rounded = Math.ceil(height / VOICE_PANEL_CHUNK_DIVISOR);
                                                    const _Math2 = Math;
                                                    const _Math3 = Math;
                                                    const _Math4 = Math;
                                                    const _Math5 = Math;
                                                    const sum = Math.max(Math.floor(value2 / rounded) - 1, 0) + VOICE_PANEL_CHUNK_DIVISOR + num4;
                                                    const minResult = min(sum, Math.ceil(tmp24 / rounded));
                                                    const _Math6 = Math;
                                                    tmp = { start: Math.max(minResult - VOICE_PANEL_CHUNK_DIVISOR - 2, 0), end: minResult };
                                                    obj2 = { start: Math.max(minResult - VOICE_PANEL_CHUNK_DIVISOR - 2, 0), end: minResult };
                                                  } else {
                                                    throw new TypeError("Trying to call a non-function");
                                                  }
                                                }
                                                const result3 = scrollPosition.set(contentOffset.contentOffset.y);
                                                if (null != tmp) {
                                                  updateSharedValueIfChangedDefault(sharedValue3, tmp);
                                                }
                                              }
                                            }
                                          }
                                          const useAnimatedScrollHandler = tmpResult14.useAnimatedScrollHandler;
                                          Xe.__closure = { lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: tmp(tmp2[15]).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: tmp4(tmp2[23]), viewableChunks: sharedValue3 };
                                          const num4 = 11154582532610;
                                          Xe.__workletHash = 11154582532610;
                                          Xe.__initData = __initData11;
                                          const obj14 = { lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: tmp(tmp2[15]).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: tmp4(tmp2[23]), viewableChunks: sharedValue3 };
                                          const animatedScrollHandler = useAnimatedScrollHandler(obj10);
                                          function qe() {
                                            return mode.get();
                                          }
                                          const obj15 = { mode };
                                          qe.__closure = obj15;
                                          qe.__workletHash = 17369688194549;
                                          qe.__initData = __initData12;
                                          const tmpResult15 = tmp(tmp2[15]);
                                          class We {
                                            constructor(arg0, arg1) {
                                              const tmp = null != arg1 && arg0 !== arg1;
                                              if (tmp) {
                                                if (arg0 === VoicePanelModes.PANEL) {
                                                  if (arg1 === VoicePanelModes.PIP) {
                                                    const result = sharedValue1.set(false);
                                                  }
                                                }
                                                if (arg0 === VoicePanelModes.PIP) {
                                                  const result1 = sharedValue1.set(true);
                                                }
                                              }
                                            }
                                          }
                                          const obj16 = { VoicePanelModes: tmp16, lockScrolling: sharedValue1 };
                                          We.__closure = obj16;
                                          We.__workletHash = 14015771250130;
                                          We.__initData = __initData13;
                                          const animatedReaction3 = tmpResult15.useAnimatedReaction(qe, We);
                                          const tmpResult16 = tmp(tmp2[28]);
                                          const token = tmpResult16.useToken(tmp4(tmp2[14]).modules.mobile.VOICE_PANEL_GUTTER);
                                          function $e() {
                                            let rect;
                                            let tmp7;
                                            let value;
                                            const tmp = mode.get() === VoicePanelModes.PIP;
                                            const tmp2 = tmp || null != focused.get();
                                            let str = "auto";
                                            if (tmp) {
                                              str = "none";
                                            }
                                            const obj = { pointerEvents: str, scrollEnabled: !tmp2, showsVerticalScrollIndicator: !value && !tmp2, scrollIndicatorInsets: rect };
                                            value = sharedValue1.get();
                                            rect = { top: tmp7(safeArea.get(), token).height - safeArea.get().top, bottom: safeArea.get().bottom };
                                            tmp7 = calculateVoicePanelHeaderSpecsDefault;
                                            return obj;
                                          }
                                          const obj17 = { mode, VoicePanelModes: tmp16, focused, lockScrolling: sharedValue1, calculateVoicePanelHeaderSpecs: tmp4(tmp2[29]), safeArea, edgeGutter: null };
                                          const useAnimatedProps = tmp(tmp2[15]).useAnimatedProps;
                                          tmp(tmp2[15]);
                                          class Ve {
                                            constructor() {
                                              const obj = { gestureActive: sharedValue4.get().active, connected: connected.get(), mode: mode.get() };
                                              return obj;
                                            }
                                          }
                                          $e.__closure = obj17;
                                          $e.__workletHash = 5209527997903;
                                          $e.__initData = __initData14;
                                          const animatedProps = useAnimatedProps($e);
                                          if (cResult[77] !== sharedValue) {
                                            class Ze {
                                              constructor(arg0, arg1) {
                                                const result = sharedValue.set(arg1);
                                              }
                                            }
                                            cResult[77] = sharedValue;
                                            class Ge {
                                              constructor(contentOffset) {
                                                const result = scrollPosition.set(contentOffset.contentOffset.y);
                                                const result1 = dragScrolling.set(true);
                                              }
                                            }
                                            cResult[78] = Ze;
                                          } else {
                                            class Ze {
                                              constructor(arg0, arg1) {
                                                const result = sharedValue.set(arg1);
                                              }
                                            }
                                          }
                                          function je() {
                                            const value = mode.get();
                                            if (VoicePanelModes.PIP !== value) {
                                              if (VoicePanelModes.DISMISSED !== value) {
                                                if (connected.get()) {
                                                  if (sharedValue4.get().active) {
                                                    if (sharedValue4.get().requiresPop) {
                                                      return 1;
                                                    }
                                                  }
                                                }
                                                const sum = wrapperDimensions.get().drawerY + wrapperOffset.get().y;
                                                const height = windowDimensions.get().height;
                                                const _Math = Math;
                                                const _Math2 = Math;
                                                return Math.min(Math.max((height - sum) / height, 0), 1);
                                              }
                                            }
                                            return 0;
                                          }
                                          const obj18 = { mode, VoicePanelModes: tmp16, connected, gestureState: sharedValue4, wrapperDimensions, wrapperOffset, windowDimensions };
                                          je.__closure = obj18;
                                          je.__workletHash = 11760007440267;
                                          je.__initData = __initData15;
                                          const tmpResult18 = tmp(tmp2[15]);
                                          const derivedValue = tmpResult18.useDerivedValue(je);
                                          if (cResult[79] === tmp21) {
                                            class Ze {
                                              constructor(arg0, arg1) {
                                                const result = sharedValue.set(arg1);
                                              }
                                            }
                                          }
                                          const obj19 = { gesture: tmp21, scrollerRef: animatedRef, scrollNativeGesture: first, viewableChunks: sharedValue3, handleScroll: animatedScrollHandler, scrollViewProps: animatedProps, onContentSizeChange: Ze, wrapperOffset, scrollableRegionSize: sharedValue, gestureState: null, opacity: derivedValue };
                                          class Oe {
                                            constructor(arg0, arg1) {
                                              const tmp2 = arg0 === VoicePanelModes.DISMISSED && arg1 !== tmp.DISMISSED;
                                              if (tmp2) {
                                                updateSharedValueIfChangedDefault(sharedValue4, { cancel: false, active: false });
                                              }
                                            }
                                          }
                                          cResult[79] = tmp21;
                                          cResult[80] = sharedValue4;
                                          cResult[81] = animatedScrollHandler;
                                          cResult[82] = Ze;
                                          cResult[83] = derivedValue;
                                          cResult[84] = animatedProps;
                                          class Ce {
                                            constructor() {
                                              let tmp;
                                              if (mode.get() === VoicePanelModes.PANEL) {
                                                const value = focused.get();
                                                let id;
                                                if (value != null) {
                                                  id = value.id;
                                                }
                                                tmp = id;
                                              }
                                              return tmp;
                                            }
                                          }
                                          cResult[86] = animatedRef;
                                          cResult[87] = sharedValue3;
                                          cResult[88] = wrapperOffset;
                                          cResult[89] = obj19;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (cResult[23] === connected) {
    class Ze {
      constructor(arg0, arg1) {
        const result = sharedValue.set(arg1);
      }
    }
  }
  class VoicePanelUITsx10 {
    constructor() {
      value = connected.get();
      if (value) {
        tmp2 = mode;
        tmp3 = VoicePanelModes;
        value = mode.get() !== VoicePanelModes.PIP;
      }
      if (value) {
        tmp4 = controlsSpecs;
        tmp5 = VoicePanelControlsModes;
        if (controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN) {
          tmp10 = closure_0;
          tmp11 = closure_2;
          obj2 = closure_0(closure_2[15]);
          tmp12 = showControls;
          tmp13 = obj2.runOnJS(showControls)({ debounce: true });
        } else {
          tmp6 = closure_0;
          tmp7 = closure_2;
          obj = closure_0(closure_2[15]);
          tmp8 = hideControls;
          tmp9 = obj.runOnJS(hideControls)({ debounce: true });
        }
      }
      return;
    }
  }
  VoicePanelUITsx10.__closure = { connected, mode, VoicePanelModes: tmp16, controlsSpecs, VoicePanelControlsModes: wrapperOffset, runOnJS: tmp(tmp2[15]).runOnJS, showControls, hideControls };
  VoicePanelUITsx10.__workletHash = 3342963866967;
  VoicePanelUITsx10.__initData = __initData7;
  cResult[23] = connected;
  cResult[24] = controlsSpecs;
  cResult[25] = hideControls;
  cResult[26] = mode;
  cResult[27] = showControls;
  cResult[28] = VoicePanelUITsx10;
  ({ connected, mode, VoicePanelModes: tmp16, controlsSpecs, VoicePanelControlsModes: wrapperOffset, runOnJS: tmp(tmp2[15]).runOnJS, showControls, hideControls });
}) : ((scrollPosition) => {
  let MIN_DISMISS_MOVE_PERCENTAGE;
  let MIN_GESTURE_MOVE;
  let ce;
  let ie;
  let isQuest;
  let le;
  let ue;
  scrollPosition = scrollPosition.scrollPosition;
  const dragScrolling = scrollPosition.dragScrolling;
  const setPanelFullscreen = scrollPosition.setPanelFullscreen;
  const setPanelOpen = scrollPosition.setPanelOpen;
  const setPanelPIP = scrollPosition.setPanelPIP;
  const context = setPanelPIP.useContext(dragScrolling(setPanelFullscreen[19]));
  const channelId = context.channelId;
  const connected = context.connected;
  const controlsSpecs = context.controlsSpecs;
  const dismissPanel = context.dismissPanel;
  const dismissToPIPGestureRef = context.dismissToPIPGestureRef;
  const focused = context.focused;
  const hideControls = context.hideControls;
  const isFocusedVideoZoomed = context.isFocusedVideoZoomed;
  let mode = context.mode;
  const safeArea = context.safeArea;
  const setMode = context.setMode;
  const showControls = context.showControls;
  const windowDimensions = context.windowDimensions;
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  let tmp2 = dragScrolling(setPanelFullscreen[20])();
  let closure_20 = tmp2;
  let obj = scrollPosition(setPanelFullscreen[15]);
  const sharedValue = obj.useSharedValue(0);
  obj2 = scrollPosition(setPanelFullscreen[15]);
  const sharedValue1 = obj2.useSharedValue(false);
  let obj3 = scrollPosition(setPanelFullscreen[15]);
  const sharedValue2 = obj3.useSharedValue(false);
  obj4 = scrollPosition(setPanelFullscreen[15]);
  let obj5 = { start: 0, end: safeArea };
  const sharedValue3 = obj4.useSharedValue(obj5);
  let tmp7 = setPanelOpen(setPanelPIP.useState(true), 2);
  let first = tmp7[0];
  const PIP_POP_HEIGHT = tmp7[1];
  const memo = setPanelPIP.useMemo(() => {
    const Gesture = scrollPosition(setPanelFullscreen[21]).Gesture;
    return Gesture.Native();
  }, []);
  let obj6 = scrollPosition(setPanelFullscreen[15]);
  const animatedRef = obj6.useAnimatedRef();
  const obj7 = scrollPosition(setPanelFullscreen[15]);
  const sharedValue4 = obj7.useSharedValue({ absoluteXStart: 0, absoluteYStart: 0, cancel: false, active: false, requiresPop: false });
  const obj8 = scrollPosition(setPanelFullscreen[15]);
  let fn = function h() {
    const obj = { gestureActive: sharedValue4.get().active, connected: connected.get(), mode: mode.get() };
    return obj;
  };
  fn.__closure = { gestureState: sharedValue4, connected, mode };
  fn.__workletHash = 11454780288856;
  fn.__initData = __initData16;
  let fn2 = function f(mode, safeAreaState2) {
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp = safeAreaState2;
    if (!cheapWorkletShallowEqual(mode, tmp)) {
      mode = mode.mode;
      if (mode.connected) {
        if (!mode.gestureActive) {
          if (mode === VoicePanelModes.PANEL) {
            const tmp2Result = ReanimatedRexport2;
            tmp2Result.runOnJS(setPanelFullscreen)(true);
          }
          if (mode === VoicePanelModes.PANEL) {
            const tmp2Result6 = ReanimatedRexport2;
            tmp2Result6.runOnJS(setPanelOpen)(true);
          } else {
            const tmp2Result7 = ReanimatedRexport2;
            tmp2Result7.runOnJS(setPanelOpen)(false);
          }
          if (mode === VoicePanelModes.PIP) {
            const tmp2Result8 = ReanimatedRexport2;
            tmp2Result8.runOnJS(setPanelPIP)(true);
          } else {
            const tmp2Result9 = ReanimatedRexport2;
            tmp2Result9.runOnJS(setPanelPIP)(false);
          }
        }
      }
      const tmp2Result10 = ReanimatedRexport2;
      tmp2Result10.runOnJS(setPanelFullscreen)(false);
    }
  };
  fn2.__closure = { cheapWorkletShallowEqual: scrollPosition(setPanelFullscreen[22]).cheapWorkletShallowEqual, VoicePanelModes: setMode, runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, setPanelFullscreen, setPanelOpen, setPanelPIP };
  fn2.__workletHash = 7042586903190;
  fn2.__initData = __initData17;
  ({ cheapWorkletShallowEqual: scrollPosition(setPanelFullscreen[22]).cheapWorkletShallowEqual, VoicePanelModes: setMode, runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, setPanelFullscreen, setPanelOpen, setPanelPIP });
  const animatedReaction = obj8.useAnimatedReaction(fn, fn2);
  let fn3 = function p() {
    return mode.get();
  };
  fn3.__closure = { mode };
  fn3.__workletHash = 7690101146047;
  fn3.__initData = __initData18;
  let fn4 = function _(arg0, arg1) {
    const tmp2 = arg0 === VoicePanelModes.DISMISSED && arg1 !== tmp.DISMISSED;
    if (tmp2) {
      updateSharedValueIfChangedDefault(sharedValue4, { cancel: false, active: false });
    }
  };
  const obj10 = scrollPosition(setPanelFullscreen[15]);
  fn4.__closure = { VoicePanelModes: setMode, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[23]), gestureState: sharedValue4 };
  fn4.__workletHash = 556236677576;
  fn4.__initData = __initData19;
  ({ VoicePanelModes: setMode, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[23]), gestureState: sharedValue4 });
  const animatedReaction1 = obj10.useAnimatedReaction(fn3, fn4);
  const items = [channelId];
  const handleFocusChange = setPanelPIP.useCallback((arg0) => {
    const tmp = null != arg0 && isActivityParticipant(ChannelRTCStore.getParticipant(channelId, arg0));
    PIP_POP_HEIGHT(!tmp);
  }, items);
  function se() {
    let tmp;
    if (mode.get() === VoicePanelModes.PANEL) {
      const value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      tmp = id;
    }
    return tmp;
  }
  se.__closure = { mode, VoicePanelModes: setMode, focused };
  se.__workletHash = 12141076453802;
  se.__initData = __initData20;
  function ae(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport2;
      obj.runOnJS(callback)(arg0);
    }
  }
  const obj12 = scrollPosition(setPanelFullscreen[15]);
  ae.__closure = { runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, handleFocusChange };
  ae.__workletHash = 717225298458;
  ae.__initData = __initData21;
  ({ runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, handleFocusChange });
  const animatedReaction2 = obj12.useAnimatedReaction(se, ae);
  let tmp16 = dragScrolling(setPanelFullscreen[24])();
  const controlsLock = tmp16;
  const items1 = [tmp2, connected, controlsSpecs, dismissPanel, dismissToPIPGestureRef, focused, first, hideControls, sharedValue4, isFocusedVideoZoomed, sharedValue1, mode, safeArea, scrollPosition, memo, setMode, showControls, windowDimensions, wrapperDimensions, wrapperOffset, tmp16];
  const memo1 = setPanelPIP.useMemo(() => {
    let first;
    const Gesture = LegacyBaseButton.Gesture;
    const Race = Gesture.Race;
    const Gesture2 = LegacyBaseButton.Gesture;
    const rect = { left: -1 * closure_20.left, right: -1 * closure_20.right };
    const TapResult = Gesture2.Tap();
    const hitSlopResult = TapResult.hitSlop(rect);
    const fn = function f() {
      if (connected.get()) {
        if (mode.get() !== setMode.PIP) {
          if (controlsSpecs.get().mode === wrapperDimensions.HIDDEN) {
            obj2 = scrollPosition(setPanelFullscreen[15]);
            obj2.runOnJS(showControls)({ debounce: true });
          } else {
            const obj = scrollPosition(setPanelFullscreen[15]);
            obj.runOnJS(hideControls)({ debounce: true });
          }
        }
      }
    };
    const enabledResult = hitSlopResult.enabled(first);
    const maxDistanceResult = enabledResult.maxDistance(30);
    let obj = { connected, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes, runOnJS: ReanimatedRexport2.runOnJS, showControls, hideControls };
    fn.__closure = obj;
    fn.__workletHash = 14805228323598;
    fn.__initData = __initData;
    const onStartResult = maxDistanceResult.onStart(fn);
    const Gesture3 = LegacyBaseButton.Gesture;
    const PanResult = Gesture3.Pan();
    const enabledResult1 = PanResult.enabled(first);
    const rect1 = { left: -1 * closure_20.left, right: -1 * closure_20.right };
    const manualActivationResult = enabledResult1.manualActivation(true);
    const maxPointersResult = manualActivationResult.maxPointers(1);
    const hitSlopResult1 = maxPointersResult.hitSlop(rect1);
    const withRefResult = hitSlopResult1.withRef(dismissToPIPGestureRef);
    let result = withRefResult.shouldCancelWhenOutside(false);
    let result1 = result.simultaneousWithExternalGesture(memo);
    class S {
      constructor(arg0, activate) {
        const first = arg0.allTouches[0];
        if (mode) {
          if (null != first) {
            const absoluteY = first.absoluteY;
            if (absoluteY > windowDimensions.get().height - safeArea.get().bottom) {
              obj2 = { cancel: true };
              set2 = sharedValue4.set;
              const merged = Object.assign(sharedValue4.get());
              set2(obj2);
              activate.activate();
            }
          }
        }
        let value = isFocusedVideoZoomed.get();
        if (!value) {
          value = closure_1_13.get() === setMode.PANEL && controlsSpecs.get().mode === wrapperDimensions.DRAWER;
          const tmp9 = closure_1_13.get() === setMode.PANEL && controlsSpecs.get().mode === wrapperDimensions.DRAWER;
        }
        if (value) {
          const obj = { cancel: true };
          set = sharedValue4.set;
          const merged1 = Object.assign(sharedValue4.get());
          const result = set(obj);
          activate.fail();
        }
      }
    }
    obj2 = { IS_IOS: map1, windowDimensions, safeArea, gestureState: sharedValue4, isFocusedVideoZoomed, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes };
    S.__closure = obj2;
    S.__workletHash = 6294734950159;
    S.__initData = __initData8;
    const fn2 = function u(arg0) {
      let value;
      if (!sharedValue4.get().cancel) {
        dragScrolling(setPanelFullscreen[23])(wrapperOffset, { x: 0, y: 0 });
        const obj = { absoluteXStart: null, absoluteYStart: null, active: false, cancel: false, requiresPop: value };
        ({ absoluteX: obj.absoluteXStart, absoluteY: obj.absoluteYStart } = arg0);
        set = sharedValue4.set;
        value = connected.get() && mode.get() === setMode.PANEL;
        const result = set(obj);
        if (controlsSpecs.get().mode === wrapperDimensions.FLOATING_DEFAULT) {
          obj2 = scrollPosition(setPanelFullscreen[15]);
          obj2.runOnJS(controlsLock.lock)();
        }
      }
    };
    const onTouchesDownResult = result1.onTouchesDown(S);
    let obj3 = { gestureState: sharedValue4, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, connected, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes, runOnJS: ReanimatedRexport2.runOnJS, controlsLock };
    fn2.__closure = obj3;
    fn2.__workletHash = 11291998105531;
    fn2.__initData = __initData7;
    const fn3 = function c(state, fail) {
      let absoluteX;
      let absoluteY;
      if (state.state === scrollPosition(setPanelFullscreen[21]).State.BEGAN) {
        if (!sharedValue4.get().active) {
          if (!sharedValue4.get().cancel) {
            let flag;
            ({ absoluteY, absoluteX } = state.changedTouches[0]);
            const diff = sharedValue4.get().absoluteYStart - absoluteY;
            const diff1 = sharedValue4.get().absoluteXStart - absoluteX;
            const _Math = Math;
            const _Math2 = Math;
            const _Math3 = Math;
            const absolute = Math.abs(diff);
            const maxResult = max(absolute, Math.abs(diff1));
            const _Math4 = Math;
            const _Math5 = Math;
            const absolute1 = Math.abs(diff1);
            const tmp9 = absolute1 >= Math.abs(diff) || diff > 0;
            if (mode.get() === setMode.PANEL) {
              const _Math6 = Math;
              if (diff < 0) {
                if (floor(closure_1_0.get()) <= 0) {
                  let tmp24 = !isQuest;
                  if (isQuest) {
                    tmp24 = maxResult > sharedValue3;
                  }
                  flag = tmp24;
                }
              }
              const value = focused.get();
              let id;
              if (value != null) {
                id = value.id;
              }
              flag = false;
              const tmp21 = null != id && tmp9;
              if (tmp21) {
                fail.fail();
                flag = false;
              }
            } else {
              flag = false;
              const tmp12 = mode.get() === tmp11.PIP && maxResult > sharedValue3;
              if (tmp12) {
                const tmpResult = scrollPosition(setPanelFullscreen[15]);
                tmpResult.runOnJS(dragScrolling(setPanelFullscreen[25]))();
                flag = true;
              }
            }
            const tmp27 = dragScrolling(setPanelFullscreen[23]);
            if (flag) {
              tmp27(wrapperOffset, { gestureActive: true });
              obj2 = { absoluteXStart: absoluteX, absoluteYStart: absoluteY + closure_1_0.get(), cancel: false, active: true, requiresPop: sharedValue4.get().requiresPop };
              set = sharedValue4.set;
              const result = set(obj2);
              const result1 = sharedValue1.set(true);
              fail.activate();
            } else {
              const obj3 = { absoluteYStart: absoluteY, absoluteXStart: absoluteX };
              tmp27(sharedValue4, obj3);
            }
          }
        }
      }
    };
    const onBeginResult = onTouchesDownResult.onBegin(fn2);
    obj4 = { State: LegacyBaseButton.State, gestureState: sharedValue4, mode, VoicePanelModes, scrollPosition, isQuest, MIN_GESTURE_MOVE, focused, runOnJS: ReanimatedRexport2.runOnJS, triggerIOSHaptic: triggerIOSHapticDefault, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, lockScrolling: sharedValue1 };
    fn3.__closure = obj4;
    fn3.__workletHash = 1135104747808;
    fn3.__initData = __initData6;
    const fn4 = function l(absoluteY) {
      if (!sharedValue4.get().cancel) {
        if (mode.get() !== setMode.PIP) {
          const result = -1 * (sharedValue4.get().absoluteYStart - absoluteY.absoluteY);
          const tmp11 = connected.get() && !sharedValue4.get().requiresPop && result <= 0;
          if (tmp11) {
            obj2 = { requiresPop: true };
            set = sharedValue4.set;
            const merged = Object.assign(sharedValue4.get());
            const result1 = set(obj2);
          }
          if (sharedValue1.get()) {
            if (result < 0) {
              const result2 = sharedValue1.set(false);
            }
            let diff = result;
            if (sharedValue4.get().requiresPop) {
              const _Math = Math;
              const bound = Math.max(result, 0);
              if (bound <= PIP_POP_HEIGHT) {
                diff = bound - bound * closure_20;
              } else {
                const obj3 = { requiresPop: false };
                set2 = sharedValue4.set;
                const merged1 = Object.assign(sharedValue4.get());
                set2(obj3);
                const obj6 = scrollPosition(setPanelFullscreen[15]);
                const runOnJSResult = obj6.runOnJS(scrollPosition(setPanelFullscreen[26]).triggerHapticFeedback);
                runOnJSResult(scrollPosition(setPanelFullscreen[26]).HapticFeedbackTypes.IMPACT_MEDIUM);
                diff = result;
              }
            }
            const point = { y: diff, x: 0 };
            dragScrolling(setPanelFullscreen[23])(wrapperOffset, point);
          }
          const value = sharedValue1.get();
          const tmp16 = !value && closure_1_0.get() <= 0;
          if (tmp16) {
            const result3 = sharedValue1.set(true);
          }
        } else {
          const point1 = { x: -1 * (sharedValue4.get().absoluteXStart - absoluteY.absoluteX), y: -1 * (sharedValue4.get().absoluteYStart - absoluteY.absoluteY) };
          const tmp6 = dragScrolling(setPanelFullscreen[23]);
          tmp6(wrapperOffset, point1);
        }
      }
    };
    const onTouchesMoveResult = onBeginResult.onTouchesMove(fn3);
    let obj5 = { gestureState: sharedValue4, mode, VoicePanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, connected, lockScrolling: sharedValue1, scrollPosition, POP_RESISTANCE, PIP_POP_HEIGHT, runOnJS: ReanimatedRexport2.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes };
    fn4.__closure = obj5;
    fn4.__workletHash = 9035201692095;
    fn4.__initData = __initData5;
    const fn5 = function s() {
      const result = sharedValue1.set(false);
      dragScrolling(setPanelFullscreen[23])(sharedValue4, { cancel: false, active: false });
      dragScrolling(setPanelFullscreen[23])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn4);
    let obj6 = { lockScrolling: sharedValue1, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState: sharedValue4, wrapperOffset };
    fn5.__closure = obj6;
    fn5.__workletHash = 11957625127277;
    fn5.__initData = __initData4;
    const fn6 = function o(velocityY) {
      let absoluteX;
      let absoluteY;
      let pipX;
      let pipY;
      let velocityX;
      if (!sharedValue4.get().cancel) {
        velocityY = velocityY.velocityY;
        ({ velocityX, absoluteX, absoluteY } = velocityY);
        if (mode.get() === setMode.PIP) {
          const obj5 = { velocityX, velocityY, absoluteX, absoluteY, windowDimensions: windowDimensions.get(), safeArea: safeArea.get() };
          const calculatePIPPositionFromVelocity = scrollPosition(setPanelFullscreen[27]).calculatePIPPositionFromVelocity;
          scrollPosition(setPanelFullscreen[27]);
          const result = calculatePIPPositionFromVelocity(obj5);
          ({ pipX, pipY } = result);
          const obj6 = { pipX, pipY };
          dragScrolling(setPanelFullscreen[23])(wrapperDimensions, obj6);
          dragScrolling(setPanelFullscreen[23])(wrapperOffset, { gestureActive: false });
        } else if (mode.get() === setMode.PANEL) {
          if (velocityY > 0) {
            if (connected.get()) {
              if (sharedValue4.get().requiresPop) {
                dragScrolling(setPanelFullscreen[23])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
                const result1 = sharedValue1.set(false);
              } else {
                obj4 = scrollPosition(setPanelFullscreen[15]);
                obj4.runOnJS(closure_1_15)(setMode.PIP);
                dragScrolling(setPanelFullscreen[23])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
              }
            } else {
              const diff = wrapperDimensions.get().drawerHeight - wrapperDimensions.get().drawerY;
              if (wrapperOffset.get().y > diff * first) {
                dragScrolling(setPanelFullscreen[23])(wrapperOffset, { gestureActive: false });
                const obj3 = scrollPosition(setPanelFullscreen[15]);
                obj3.runOnJS(dismissPanel)();
              } else {
                dragScrolling(setPanelFullscreen[23])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
                const result2 = sharedValue1.set(false);
              }
            }
          } else {
            dragScrolling(setPanelFullscreen[23])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
            const result3 = sharedValue1.set(false);
          }
        }
      }
    };
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn5);
    fn6.__closure = { gestureState: sharedValue4, mode, VoicePanelModes, calculatePIPPositionFromVelocity: VoicePanelPIPUtils.calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperDimensions, wrapperOffset, connected, runOnJS: ReanimatedRexport2.runOnJS, setMode, lockScrolling: sharedValue1, MIN_DISMISS_MOVE_PERCENTAGE, dismissPanel };
    fn6.__workletHash = 9249476857050;
    fn6.__initData = __initData3;
    ({ gestureState: sharedValue4, mode, VoicePanelModes, calculatePIPPositionFromVelocity: VoicePanelPIPUtils.calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperDimensions, wrapperOffset, connected, runOnJS: ReanimatedRexport2.runOnJS, setMode, lockScrolling: sharedValue1, MIN_DISMISS_MOVE_PERCENTAGE, dismissPanel });
    const fn7 = function t() {
      const tmp = 0 !== wrapperOffset.get().y && mode.get() === setMode.PANEL;
      if (!tmp) {
        dragScrolling(setPanelFullscreen[23])(sharedValue4, { cancel: false, active: false });
      }
      const obj = scrollPosition(setPanelFullscreen[15]);
      obj.runOnJS(controlsLock.unlock)();
    };
    const onEndResult = onTouchesCancelledResult.onEnd(fn6);
    fn7.__closure = { wrapperOffset, mode, VoicePanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState: sharedValue4, runOnJS: ReanimatedRexport2.runOnJS, controlsLock };
    fn7.__workletHash = 13245639097703;
    fn7.__initData = __initData2;
    ({ wrapperOffset, mode, VoicePanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState: sharedValue4, runOnJS: ReanimatedRexport2.runOnJS, controlsLock });
    return Race(onStartResult, onEndResult.onFinalize(fn7));
  }, items1);
  const obj15 = { onBeginDrag: ue, onEndDrag: ce, onMomentumEnd: le, onScroll: ie };
  ue = function ue(contentOffset) {
    const result = scrollPosition.set(contentOffset.contentOffset.y);
    const result1 = dragScrolling.set(true);
  };
  ue.__closure = { scrollPosition, dragScrolling };
  ue.__workletHash = 9264281860951;
  ue.__initData = __initData22;
  ce = function ce() {
    const result = dragScrolling.set(false);
  };
  ce.__closure = { dragScrolling };
  ce.__workletHash = 26506964466;
  ce.__initData = __initData23;
  le = function le() {
    const result = dragScrolling.set(false);
  };
  le.__closure = { dragScrolling };
  le.__workletHash = 8850648747337;
  le.__initData = __initData24;
  ie = function ie(contentOffset) {
    if (sharedValue1.get()) {
      if (!sharedValue2.get()) {
        if (scrollPosition.get() < 0) {
          const result = scrollPosition.set(0);
        }
        const value = scrollPosition.get();
        const _Math7 = Math;
        if (Math.abs(contentOffset.contentOffset.y - value) >= 0.1) {
          const result1 = sharedValue2.set(true);
          const obj5 = ReanimatedRexport2;
          obj5.scrollTo(animatedRef, 0, value, false);
          const result2 = sharedValue2.set(false);
        }
      }
    } else {
      let tmp;
      if (scrollPosition.get() !== contentOffset.contentOffset.y) {
        const value2 = scrollPosition.get();
        const height = windowDimensions.get().height;
        if (typeof computeViewableChunksFromScrollPosition === "function") {
          const _Math = Math;
          const rounded = Math.ceil(height / VOICE_PANEL_CHUNK_DIVISOR);
          const _Math2 = Math;
          const _Math3 = Math;
          const _Math4 = Math;
          const _Math5 = Math;
          const sum = Math.max(Math.floor(value2 / rounded) - 1, 0) + VOICE_PANEL_CHUNK_DIVISOR + num4;
          const minResult = min(sum, Math.ceil(tmp24 / rounded));
          const _Math6 = Math;
          tmp = { start: Math.max(minResult - VOICE_PANEL_CHUNK_DIVISOR - 2, 0), end: minResult };
          obj2 = { start: Math.max(minResult - VOICE_PANEL_CHUNK_DIVISOR - 2, 0), end: minResult };
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const result3 = scrollPosition.set(contentOffset.contentOffset.y);
      if (null != tmp) {
        updateSharedValueIfChangedDefault(sharedValue3, tmp);
      }
    }
  };
  const obj14 = scrollPosition(setPanelFullscreen[15]);
  ie.__closure = { lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: scrollPosition(setPanelFullscreen[15]).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[23]), viewableChunks: sharedValue3 };
  ie.__workletHash = 4242774428742;
  ie.__initData = __initData25;
  ({ lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: scrollPosition(setPanelFullscreen[15]).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[23]), viewableChunks: sharedValue3 });
  function ge() {
    return mode.get();
  }
  ge.__closure = { mode };
  ge.__workletHash = 1385044671925;
  ge.__initData = __initData26;
  function de(arg0, arg1) {
    const tmp = null != arg1 && arg0 !== arg1;
    if (tmp) {
      if (arg0 === VoicePanelModes.PANEL) {
        if (arg1 === VoicePanelModes.PIP) {
          const result = sharedValue1.set(false);
        }
      }
      if (arg0 === VoicePanelModes.PIP) {
        const result1 = sharedValue1.set(true);
      }
    }
  }
  de.__closure = { VoicePanelModes: setMode, lockScrolling: sharedValue1 };
  de.__workletHash = 6193088181234;
  de.__initData = __initData27;
  const animatedScrollHandler = obj14.useAnimatedScrollHandler(obj15);
  const obj17 = scrollPosition(setPanelFullscreen[15]);
  const animatedReaction3 = obj17.useAnimatedReaction(ge, de);
  const obj18 = scrollPosition(setPanelFullscreen[28]);
  const token = obj18.useToken(dragScrolling(setPanelFullscreen[14]).modules.mobile.VOICE_PANEL_GUTTER);
  function _e() {
    let rect;
    let tmp7;
    let value;
    const tmp = mode.get() === VoicePanelModes.PIP;
    const tmp2 = tmp || null != focused.get();
    let str = "auto";
    if (tmp) {
      str = "none";
    }
    const obj = { pointerEvents: str, scrollEnabled: !tmp2, showsVerticalScrollIndicator: !value && !tmp2, scrollIndicatorInsets: rect };
    value = sharedValue1.get();
    rect = { top: tmp7(safeArea.get(), token).height - safeArea.get().top, bottom: safeArea.get().bottom };
    tmp7 = calculateVoicePanelHeaderSpecsDefault;
    return obj;
  }
  const obj19 = scrollPosition(setPanelFullscreen[15]);
  _e.__closure = { mode, VoicePanelModes: setMode, focused, lockScrolling: sharedValue1, calculateVoicePanelHeaderSpecs: dragScrolling(setPanelFullscreen[29]), safeArea, edgeGutter: token };
  _e.__workletHash = 6124726929163;
  _e.__initData = __initData28;
  const items2 = [sharedValue];
  ({ mode, VoicePanelModes: setMode, focused, lockScrolling: sharedValue1, calculateVoicePanelHeaderSpecs: dragScrolling(setPanelFullscreen[29]), safeArea, edgeGutter: token });
  const animatedProps = obj19.useAnimatedProps(_e);
  const callback1 = setPanelPIP.useCallback((arg0, arg1) => {
    const result = sharedValue.set(arg1);
  }, items2);
  const obj21 = scrollPosition(setPanelFullscreen[15]);
  class Ue {
    constructor() {
      const value = mode.get();
      if (VoicePanelModes.PIP !== value) {
        if (VoicePanelModes.DISMISSED !== value) {
          if (connected.get()) {
            if (sharedValue4.get().active) {
              if (sharedValue4.get().requiresPop) {
                return 1;
              }
            }
          }
          const sum = wrapperDimensions.get().drawerY + wrapperOffset.get().y;
          const height = windowDimensions.get().height;
          const _Math = Math;
          const _Math2 = Math;
          return Math.min(Math.max((height - sum) / height, 0), 1);
        }
      }
      return 0;
    }
  }
  Ue.__closure = { mode, VoicePanelModes: setMode, connected, gestureState: sharedValue4, wrapperDimensions, wrapperOffset, windowDimensions };
  Ue.__workletHash = 17433445143273;
  Ue.__initData = __initData29;
  const obj22 = { gesture: memo1, scrollerRef: animatedRef, scrollNativeGesture: memo, viewableChunks: sharedValue3, handleScroll: animatedScrollHandler, scrollViewProps: animatedProps, onContentSizeChange: callback1, wrapperOffset, scrollableRegionSize: sharedValue, gestureState: sharedValue4, opacity: obj21.useDerivedValue(Ue) };
  return obj22;
});
function computeBorderRadii(mode) {
  let num;
  if (mode.mode === VoicePanelModes.PIP) {
    num = DEFAULT_BORDER_RADIUS_PIP;
  } else {
    num = 0;
    if (!tmp) {
      num = DEFAULT_BORDER_RADIUS;
    }
  }
  return num;
}
computeBorderRadii.__closure = { VoicePanelModes, DEFAULT_BORDER_RADIUS_PIP, DEFAULT_BORDER_RADIUS };
computeBorderRadii.__workletHash = 4017485515216;
computeBorderRadii.__initData = { code: "function computeBorderRadii_VoicePanelUITsx48({mode:mode,connected:connected}){const{VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP,DEFAULT_BORDER_RADIUS}=this.__closure;if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return!connected?DEFAULT_BORDER_RADIUS:0;}" };
const __initData30 = { code: "function VoicePanelUITsx49(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().height;}" };
const __initData31 = { code: "function VoicePanelUITsx50(){const{mode,connected,windowDimensions,safeArea,focused,pipState,controlsHeight,preJoinContentSize,globalStatusIndicatorHeight}=this.__closure;return{modeToSet:mode.get(),connected:connected.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get(),focused:focused.get(),pipState:pipState,controlsHeight:controlsHeight.get(),preJoinContentSize:preJoinContentSize.get(),globalStatusIndicatorHeight:globalStatusIndicatorHeight};}" };
const __initData32 = { code: "function VoicePanelUITsx51(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperDimensions,updateSharedValueIfChanged,wrapperOffset,getMaxPanelWidth,getPanelX,roundToNearestPixel,windowDimensions}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{modeToSet:modeToSet,connected:connected,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,pipState:pipState,controlsHeight:controlsHeight,preJoinContentSize:preJoinContentSize,globalStatusIndicatorHeight:globalStatusIndicatorHeight}=props;if(modeToSet===VoicePanelModes.PIP&&pipState.id==null){return;}const animated=previous!=null?windowHeight===previous.windowHeight&&windowWidth===previous.windowWidth&&safeArea.top===previous.safeArea.top&&safeArea.bottom===previous.safeArea.bottom&&safeArea.left===previous.safeArea.left&&safeArea.right===previous.safeArea.right:true;let{drawerX:drawerX,drawerY:drawerY}=wrapperDimensions.get();const availableHeight=windowHeight-globalStatusIndicatorHeight;if(modeToSet===VoicePanelModes.PANEL){if(connected){drawerX=0;drawerY=0;updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else{const drawerWidth=getMaxPanelWidth({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeArea.left,safeAreaRight:safeArea.right});drawerX=getPanelX(windowWidth,drawerWidth);drawerY=roundToNearestPixel(Math.max(availableHeight-preJoinContentSize-controlsHeight-safeArea.bottom,availableHeight-0.8*availableHeight));updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:drawerWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});}}else if(modeToSet===VoicePanelModes.DISMISSED){if(connected){updateSharedValueIfChanged(wrapperDimensions,{mode:modeToSet});}else{updateSharedValueIfChanged(wrapperDimensions,{drawerY:windowDimensions.get().height+60,mode:modeToSet});}updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}}" };
const __initData33 = { code: "function VoicePanelUITsx52(){const{useReducedMotion,wrapperDimensions,wrapperOffset,connected,mode,VoicePanelModes,runOnJS,updateSourceTrackingView,withSpring,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,DRAWER_SIZE_PHYSICS}=this.__closure;const animateXY=!useReducedMotion.get()&&wrapperDimensions.get().animated||wrapperOffset.get().gestureActive;const{gestureActive:gestureActive,y:offsetY,x:offsetX}=wrapperOffset.get();let{drawerY:y,drawerX:x}=wrapperDimensions.get();const applyGestureOffset=!connected.get()&&(gestureActive||offsetY!==0);if(applyGestureOffset){y+=Math.max(offsetY,0);x+=offsetX;}const updateSourceTrackingViewHelper=function(finished){if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}};return{transform:[{translateX:withSpring(x,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},{translateY:withSpring(y,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)}]};}" };
const __initData34 = { code: "function VoicePanelUITsx53(finished){const{mode,VoicePanelModes,runOnJS,updateSourceTrackingView}=this.__closure;if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}}" };
const __initData35 = { code: "function VoicePanelUITsx54(){const{computeBorderRadii,mode,connected,wrapperDimensions,withSpring,BORDER_RADIUS_PHYSICS,VoicePanelModes,styles}=this.__closure;const borderRadius=computeBorderRadii({mode:mode.get(),connected:connected.get()});return{width:wrapperDimensions.get().drawerWidth,height:wrapperDimensions.get().drawerHeight,borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS),pointerEvents:mode.get()===VoicePanelModes.PANEL?'auto':'none',backgroundColor:connected.get()?'transparent':styles.maskDefaultBackground.backgroundColor};}" };
const __initData36 = { code: "function VoicePanelUITsx55(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
const __initData37 = { code: "function VoicePanelUITsx56(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Window dimensions changed:',JSON.stringify(value));}" };
const __initData38 = { code: "function VoicePanelUITsx57(){const{wrapperDimensions}=this.__closure;return wrapperDimensions.get();}" };
const __initData39 = { code: "function VoicePanelUITsx58(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Wrapper dimensions changed:',JSON.stringify(value));}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_94 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let wrapperRootStyles;
  let wrapperSurfaceStyles;
  let wrapperTransformStyles;
  const obj = react2;
  const cResult = obj.c(9);
  children = children.children;
  ({ wrapperRootStyles, wrapperTransformStyles, wrapperSurfaceStyles } = useWrapperStyles(children.wrapperOffset));
  useWrapperStyles(children.wrapperOffset);
  if (cResult[0] === children) {
    let tmp4;
    if (cResult[1] === wrapperSurfaceStyles) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === tmp4) {
      let tmp6;
      if (cResult[4] === wrapperTransformStyles) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        let tmp10;
        if (cResult[7] === wrapperRootStyles) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
      obj2 = { style: wrapperRootStyles, pointerEvents: "box-none", children: tmp6 };
      const tmp13 = closure_21(ReanimatedNativeViewDefault, obj2);
      cResult[6] = tmp6;
      cResult[7] = wrapperRootStyles;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
    const obj3 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: tmp4 };
    const tmp9 = closure_21(ReanimatedNativeViewDefault, obj3);
    cResult[3] = tmp4;
    cResult[4] = wrapperTransformStyles;
    cResult[5] = tmp9;
    tmp6 = tmp9;
  }
  obj4 = { style: wrapperSurfaceStyles, layout: layoutTransition, children };
  const tmp5 = closure_21(ReanimatedNativeViewDefault, obj4);
  cResult[0] = children;
  cResult[1] = wrapperSurfaceStyles;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((children) => {
  let obj3;
  let tmp3;
  let wrapperRootStyles;
  let wrapperSurfaceStyles;
  let wrapperTransformStyles;
  children = children.children;
  ({ wrapperRootStyles, wrapperTransformStyles, wrapperSurfaceStyles } = useWrapperStyles(children.wrapperOffset));
  const obj = { style: wrapperRootStyles, pointerEvents: "box-none", children: closure_21(tmp3, obj2) };
  useWrapperStyles(children.wrapperOffset);
  obj2 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: closure_21(ReanimatedNativeViewDefault, obj3) };
  obj3 = { style: wrapperSurfaceStyles, layout: layoutTransition, children };
  const tmp2 = ReanimatedNativeViewDefault;
  tmp3 = ReanimatedNativeViewDefault;
  return closure_21(tmp2, obj);
});
const DrawerShadeOpacityPhysics = { mass: 0.6, damping: 30, stiffness: 400, overshootClamping: true };
const __initData40 = { code: "function VoicePanelUITsx59(){const{withSpring,opacity,DrawerShadeOpacityPhysics}=this.__closure;return{opacity:withSpring(opacity.get(),DrawerShadeOpacityPhysics),pointerEvents:opacity.get()===0?\"none\":\"auto\"};}" };
const __initData41 = { code: "function VoicePanelUITsx60(){const{withSpring,opacity,DrawerShadeOpacityPhysics}=this.__closure;return{opacity:withSpring(opacity.get(),DrawerShadeOpacityPhysics),pointerEvents:opacity.get()===0?'none':'auto'};}" };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_98 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((opacity) => {
  let obj = opacity(576);
  const cResult = obj.c(9);
  opacity = opacity.opacity;
  const onPress = opacity.onPress;
  const tmp3 = closure_34();
  obj2 = opacity(4612);
  const fn = function o() {
    let str;
    const obj = { opacity: obj2.withSpring(opacity.get(), DrawerShadeOpacityPhysics), pointerEvents: str };
    str = "auto";
    obj2 = spring;
    if (0 === opacity.get()) {
      str = "none";
    }
    return obj;
  };
  fn.__closure = { withSpring: opacity(5597).withSpring, opacity, DrawerShadeOpacityPhysics };
  fn.__workletHash = 6949445761550;
  fn.__initData = __initData40;
  ({ withSpring: opacity(5597).withSpring, opacity, DrawerShadeOpacityPhysics });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    let tmp5;
    if (cResult[1] === tmp3.shade) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === onPress) {
      let tmp6;
      if (cResult[4] === tmp3.shadePressable) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        let tmp10;
        if (cResult[7] === tmp6) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
      obj4 = { style: tmp5, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: tmp6 };
      const tmp13 = closure_21(ReanimatedRexport.View, obj4);
      cResult[6] = tmp5;
      cResult[7] = tmp6;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
    const obj5 = { style: tmp3.shadePressable, onPress };
    const tmp9 = closure_21(closure_6, obj5);
    cResult[3] = onPress;
    cResult[4] = tmp3.shadePressable;
    cResult[5] = tmp9;
    tmp6 = tmp9;
  }
  const items = [StyleSheet.absoluteFill, tmp3.shade, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp3.shade;
  cResult[2] = items;
  tmp5 = items;
}) : ((opacity) => {
  let items;
  opacity = opacity.opacity;
  const onPress = opacity.onPress;
  const tmp = closure_34();
  let obj = opacity(4612);
  const fn = function n() {
    let str;
    const obj = { opacity: obj2.withSpring(opacity.get(), DrawerShadeOpacityPhysics), pointerEvents: str };
    str = "auto";
    obj2 = spring;
    if (0 === opacity.get()) {
      str = "none";
    }
    return obj;
  };
  obj2 = { withSpring: opacity(5597).withSpring, opacity, DrawerShadeOpacityPhysics };
  fn.__closure = obj2;
  fn.__workletHash = 7070087280036;
  fn.__initData = __initData41;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: items, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_21(closure_6, obj4) };
  items = [StyleSheet.absoluteFill, tmp.shade, animatedStyle];
  obj4 = { style: tmp.shadePressable, onPress };
  const View = ReanimatedRexport.View;
  return closure_21(View, obj3);
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let channelId;
  let dragScrolling;
  let ref;
  let scrollPosition;
  let state2;
  let tmp6;
  let tmp8;
  let obj = channelId(576);
  const cResult = obj.c(33);
  closure_34();
  const tmp3 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp3(AnalyticsLocationDefault.VOICE_PANEL).analyticsLocations;
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ scrollPosition, dragScrolling, channelId } = context);
  [r10033, importDefault] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  dependencyMap = react.useRef(-1);
  if (cResult[0] !== channelId) {
    const fn = function n(arg0) {
      let closure_0 = arg0;
      clearTimeout(ref.current);
      let obj = channelId(ref[39]);
      obj.batchUpdates(() => {
        if (lockEnabled) {
          const _setTimeout = setTimeout;
          ref.current = setTimeout(() => {
            state = state2.getState();
            const result = state.setChannelPanelFullscreen(closure_0, lockEnabled);
            const state1 = state.getState();
            const obj = { lockEnabled, key: "voice-panel-freeze-" + closure_0 };
            const freezeLock = state1.requestFreezeLock(obj);
          }, 1000);
        } else {
          state = VoicePanelStore.getState();
          let result = state.setChannelPanelFullscreen(channelId, lockEnabled);
          let state1 = AppFreezeStore.getState();
          let obj = { lockEnabled, key: "voice-panel-freeze-" + channelId };
          const _HermesInternal = HermesInternal;
          const requestFreezeLock = state1.requestFreezeLock;
          let freezeLock = requestFreezeLock(obj);
        }
      });
    };
    cResult[0] = channelId;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        return () => {
          clearTimeout(ref.current);
        };
      }
    }
    const items = [];
    cResult[2] = D;
    cResult[3] = items;
    tmp8 = items;
  } else {
    class D {
      constructor() {
        return () => {
          clearTimeout(ref.current);
        };
      }
    }
    tmp8 = cResult[3];
  }
  const layoutEffect = react.useLayoutEffect(D, tmp8);
  if (cResult[4] !== channelId) {
    class M {
      constructor(arg0) {
        state = VoicePanelStore.getState();
        state.setChannelPanelOpen(channelId, arg0);
      }
    }
    cResult[4] = channelId;
    cResult[5] = M;
  } else {
    class M {
      constructor(arg0) {
        state = VoicePanelStore.getState();
        state.setChannelPanelOpen(channelId, arg0);
      }
    }
  }
  if (cResult[6] !== channelId) {
    class C {
      constructor(arg0) {
        state = VoicePanelStore.getState();
        state.setChannelPanelPIP(channelId, arg0);
      }
    }
    cResult[6] = channelId;
    cResult[7] = C;
  } else {
    class C {
      constructor(arg0) {
        state = VoicePanelStore.getState();
        state.setChannelPanelPIP(channelId, arg0);
      }
    }
  }
  if (cResult[8] === dragScrolling) {
    class C {
      constructor(arg0) {
        state = VoicePanelStore.getState();
        state.setChannelPanelPIP(channelId, arg0);
      }
    }
  }
  const obj3 = { scrollPosition, dragScrolling, setPanelFullscreen: tmp6, setPanelOpen: M, setPanelPIP: C };
  cResult[8] = dragScrolling;
  cResult[9] = scrollPosition;
  cResult[10] = tmp6;
  cResult[11] = M;
  cResult[12] = C;
  cResult[13] = obj3;
}) : (() => {
  let GestureDetector3;
  let LayerScope;
  let closure_1;
  let dismissPanel;
  let dragScrolling;
  let first;
  let gesture;
  let gestureState;
  let handleScroll;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj12;
  let obj13;
  let obj3;
  let obj6;
  let obj9;
  let onContentSizeChange;
  let opacity;
  let ref;
  let scrollNativeGesture;
  let scrollPosition;
  let scrollViewProps;
  let scrollerRef;
  let state2;
  let tmp2Result;
  let tmp2Result2;
  let viewableChunks;
  let wrapperOffset;
  const tmp = closure_34();
  const tmp4 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp4(AnalyticsLocationDefault.VOICE_PANEL).analyticsLocations;
  const context = react.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  ({ scrollPosition, dragScrolling, dismissPanel } = context);
  [first, importDefault] = react.useState(false);
  dependencyMap = react.useRef(-1);
  const items = [channelId];
  const callback = react.useCallback((arg0) => {
    let closure_0 = arg0;
    clearTimeout(ref.current);
    let obj = channelId(ref[39]);
    obj.batchUpdates(() => {
      if (lockEnabled) {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          state = state2.getState();
          const result = state.setChannelPanelFullscreen(closure_0, lockEnabled);
          const state1 = state.getState();
          const obj = { lockEnabled, key: "voice-panel-freeze-" + closure_0 };
          const freezeLock = state1.requestFreezeLock(obj);
        }, 1000);
      } else {
        state = VoicePanelStore.getState();
        let result = state.setChannelPanelFullscreen(channelId, lockEnabled);
        let state1 = AppFreezeStore.getState();
        let obj = { lockEnabled, key: "voice-panel-freeze-" + channelId };
        const _HermesInternal = HermesInternal;
        const requestFreezeLock = state1.requestFreezeLock;
        let freezeLock = requestFreezeLock(obj);
      }
    });
  }, items);
  const layoutEffect = react.useLayoutEffect(() => () => {
    clearTimeout(ref.current);
  }, []);
  const items1 = [channelId];
  const items2 = [channelId];
  const callback1 = react.useCallback((arg0) => {
    state = VoicePanelStore.getState();
    state.setChannelPanelOpen(channelId, arg0);
  }, items1);
  let obj = {
    scrollPosition,
    dragScrolling,
    setPanelFullscreen: callback,
    setPanelOpen: callback1,
    setPanelPIP: react.useCallback((arg0) => {
      state = VoicePanelStore.getState();
      state.setChannelPanelPIP(channelId, arg0);
    }, items2)
  };
  ({ gestureState, wrapperOffset, gesture, handleScroll, onContentSizeChange, scrollViewProps, scrollerRef, scrollNativeGesture, viewableChunks, opacity } = closure_81(obj));
  closure_81(obj);
  const tmp12 = useControlsHoverGestureDefault();
  const effect = react.useEffect(() => closure_1(true), []);
  let tmp14 = null;
  if (first) {
    obj2 = { value: analyticsLocations, children: closure_22(LayerScope, obj3) };
    const AnalyticsLocationProvider = channelId(6657).AnalyticsLocationProvider;
    obj3 = { children: items3 };
    LayerScope = channelId(6651).LayerScope;
    items3 = [closure_21(VoicePanelSystemUIManagerDefault, {}), , ];
    obj4 = { opacity, onPress: dismissPanel };
    items3[1] = closure_21(closure_98, obj4);
    const obj5 = { gesture: tmp12, children: closure_22(tmp2Result, obj6) };
    const GestureDetector = channelId(6140).GestureDetector;
    let _HermesInternal = HermesInternal;
    obj6 = { style: tmp.accessibilityView, nativeID: "voice-panel-ui-" + channelId, accessibilityViewIsModal: true, layout: layoutTransition, onAccessibilityEscape: closeVoicePanelsDefault, children: items4 };
    tmp2Result = VoicePanelAccessibilityViewDefault;
    items4 = [closure_21(VoicePanelDismissableContentDefault, {}), , , ];
    const obj7 = { wrapperOffset, children: items5 };
    const obj8 = { zIndex: 2, children: closure_21(VoicePanelHeaderDefault, obj9) };
    const LayerScope2 = channelId(6651).LayerScope;
    obj9 = { wrapperOffset, gestureState, layout: layoutTransition };
    items5 = [closure_21(LayerScope2, obj8), ];
    const obj10 = { gesture, children: closure_21(tmp2Result2, obj11) };
    const GestureDetector2 = channelId(6140).GestureDetector;
    obj11 = { style: StyleSheet.absoluteFill, layout: layoutTransition, collapsable: false, children: closure_21(GestureDetector3, obj12) };
    obj12 = { gesture: scrollNativeGesture, children: closure_22(closure_35, obj13) };
    obj13 = { layout: scrollViewLayoutTransition, ref: scrollerRef, onScroll: handleScroll, onMomentumScrollEnd: NOOP, animatedProps: scrollViewProps, style: tmp.scrollView, onContentSizeChange, contentContainerStyle: tmp.scrollViewContent, scrollEventThrottle: 8.333333333333334, children: items6 };
    tmp2Result2 = ReanimatedNativeViewDefault;
    GestureDetector3 = channelId(6140).GestureDetector;
    const obj14 = { viewableChunks };
    items6 = [closure_21(VoicePanelCardViewDefault, obj14), closure_21(VoicePanelPreJoinContentDefault, {})];
    items5[1] = closure_21(GestureDetector2, obj10);
    items4[1] = closure_22(closure_94, obj7);
    items4[2] = closure_21(VoicePanelPIPDefault, {});
    const obj15 = { gestureState };
    items4[3] = closure_21(VoicePanelControlsDefault, obj15);
    items3[2] = closure_21(GestureDetector, obj5);
    tmp14 = closure_21(AnalyticsLocationProvider, obj2);
  }
  return tmp14;
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUI.tsx");

export default memoResult;
export const REDUCED_MOTION_OPACITY_PHYSICS = obj5;