// === Module 17093: VoicePanelUI ===

// Module 17093 (VoicePanelUI)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4296 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import spring from "spring" /* 4974 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9495 */;
import ExternalPipDefault from "ExternalPip" /* 9610 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10993 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11354 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 12272 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 12277 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 17087 */;
import utils_triggerIOSHapticDefault from "utils/triggerIOSHaptic" /* 17094 */;
import useControlsLockDefault from "useControlsLock" /* 17095 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import AppFreezeStore from "AppFreezeStore" /* 8290 */;
import VoicePanelStore from "VoicePanelStore" /* 4768 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function NOOP() {

}
function log() {
  const items = [...HermesBuiltin.copyRestArgs()];
  log.log.apply(items);
}
function AnimatedWrapper(children) {
  const wrapperOffset = children.wrapperOffset;
  let connected;
  let animatedStyle1;
  __closure = wrapperOffset(9679);
  const height = __closure.useGlobalStatusIndicatorState().height;
  const tmp3 = closure_31();
  dependencyMap = tmp3;
  let obj1 = connected;
  const context = connected.useContext(height(12272));
  const wrapperDimensions = context.wrapperDimensions;
  connected = context.connected;
  const controlsSpecs = context.controlsSpecs;
  const focused = context.focused;
  const mode = context.mode;
  const preJoinContentSize = context.preJoinContentSize;
  const safeArea = context.safeArea;
  const windowDimensions = context.windowDimensions;
  const useReducedMotion = context.useReducedMotion;
  obj2 = wrapperOffset(4296);
  const fn = function o() {
    return controlsSpecs.get().height;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 3576504626753;
  fn.__initData = __initData15;
  const derivedValue = obj2.useDerivedValue(fn);
  let obj3 = wrapperOffset(17092);
  const pIPState = obj3.usePIPState();
  let obj4 = wrapperOffset(4296);
  const fn2 = function l() {
    return { modeToSet: mode.get(), connected: connected.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, safeArea: safeArea.get(), focused: focused.get(), pipState: pIPState, controlsHeight: derivedValue.get(), preJoinContentSize: preJoinContentSize.get(), globalStatusIndicatorHeight: height };
  };
  fn2.__closure = { mode, connected, windowDimensions, safeArea, focused, pipState: pIPState, controlsHeight: derivedValue, preJoinContentSize, globalStatusIndicatorHeight: height };
  fn2.__workletHash = 6530348778352;
  fn2.__initData = __initData16;
  const fn3 = function s(safeAreaState, windowHeight) {
    let obj = cheapWorkletShallowEqual;
    if (!obj.cheapWorkletShallowEqual(safeAreaState, windowHeight)) {
      ({ modeToSet, connected, windowWidth, windowHeight, safeArea } = safeAreaState);
      if (modeToSet !== VoicePanelModes.PIP) {
        let tmp9 = null == windowHeight;
        if (!tmp9) {
          tmp9 = windowHeight === windowHeight.windowHeight && windowWidth === windowHeight.windowWidth && safeArea.top === windowHeight.safeArea.top && safeArea.bottom === windowHeight.safeArea.bottom && safeArea.left === windowHeight.safeArea.left && safeArea.right === windowHeight.safeArea.right;
          const tmp10 = windowHeight === windowHeight.windowHeight && windowWidth === windowHeight.windowWidth && safeArea.top === windowHeight.safeArea.top && safeArea.bottom === windowHeight.safeArea.bottom && safeArea.left === windowHeight.safeArea.left && safeArea.right === windowHeight.safeArea.right;
        }
        value = wrapperDimensions.get();
        ({ drawerX, drawerY } = value);
        const diff = windowHeight - tmp7;
        if (modeToSet === tmp8.PANEL) {
          if (connected) {
            obj = { drawerWidth: windowWidth, drawerHeight: diff, drawerX: 0, drawerY: 0, animated: tmp9, mode: modeToSet };
            updateSharedValueIfChangedDefault(tmp11, obj);
            updateSharedValueIfChangedDefault(wrapperOffset, { gestureActive: false });
          } else {
            let tmpResult = tmp(17080);
            obj = { windowWidth, connected, safeAreaLeft: null, safeAreaRight: null };
            ({ left: obj5.safeAreaLeft, right: obj5.safeAreaRight } = safeArea);
            const maxPanelWidth = tmpResult.getMaxPanelWidth(obj);
            tmpResult = tmp(17080);
            const panelX = tmpResult.getPanelX(windowWidth, maxPanelWidth);
            const _Math = Math;
            const obj1 = { drawerWidth: maxPanelWidth, drawerHeight: diff, drawerX: panelX, drawerY: roundToNearestPixelDefault(Math.max(diff - tmp6 - tmp5 - safeArea.bottom, diff - 0.8 * diff)), animated: tmp9, mode: modeToSet };
            updateSharedValueIfChangedDefault(tmp11, obj1);
            const tmp23Result = roundToNearestPixelDefault(Math.max(diff - tmp6 - tmp5 - safeArea.bottom, diff - 0.8 * diff));
          }
        } else if (modeToSet === tmp8.DISMISSED) {
          const tmp32 = updateSharedValueIfChangedDefault;
          if (connected) {
            obj2 = { mode: modeToSet };
            tmp32(tmp11, obj2);
            let tmp16 = tmp31;
          } else {
            const obj3 = { drawerY: windowDimensions.get().height + 60, mode: modeToSet };
            tmp32(tmp11, obj3);
            tmp16 = tmp31;
          }
          tmp16(11354)(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
        }
      }
    }
  };
  __closure = { cheapWorkletShallowEqual: wrapperOffset(9495).cheapWorkletShallowEqual, VoicePanelModes: animatedStyle1, wrapperDimensions, updateSharedValueIfChanged: height(11354), wrapperOffset, getMaxPanelWidth: wrapperOffset(17080).getMaxPanelWidth, getPanelX: wrapperOffset(17080).getPanelX, roundToNearestPixel: height(10993), windowDimensions };
  fn3.__closure = __closure;
  fn3.__workletHash = 4997805261566;
  fn3.__initData = __initData17;
  const animatedReaction = obj4.useAnimatedReaction(fn2, fn3);
  let obj6 = wrapperOffset(4296);
  const fn4 = function b() {
    value = useReducedMotion.get();
    let gestureActive = !value;
    if (!value) {
      gestureActive = wrapperDimensions.get().animated;
    }
    if (!gestureActive) {
      gestureActive = wrapperOffset.get().gestureActive;
    }
    __closure = wrapperOffset;
    value = wrapperOffset.get();
    ({ gestureActive: gestureActive2, y } = value);
    const value1 = wrapperDimensions.get();
    ({ drawerY, drawerX } = value1);
    value2 = connected.get();
    let tmp7 = !value2;
    if (!value2) {
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
      sum1 = drawerX + value.x;
    }
    class VoicePanelUITsx31 {
      constructor(arg0) {
        tmp = arg0;
        if (arg0) {
          tmp2 = closure_1_7;
          tmp3 = closure_15;
          tmp = closure_1_7.get() !== closure_15.DISMISSED;
        }
        if (tmp) {
          tmp4 = wrapperOffset;
          tmp5 = closure_2;
          obj = wrapperOffset(closure_2[15]);
          tmp6 = height;
          tmp7 = obj.runOnJS(height(closure_2[31]).updateSourceTrackingView)();
        }
        return;
      }
    }
    __closure = { mode, VoicePanelModes, runOnJS: ReanimatedRexport2.runOnJS, updateSourceTrackingView: ExternalPipDefault.updateSourceTrackingView };
    VoicePanelUITsx31.__closure = __closure;
    VoicePanelUITsx31.__workletHash = 2447720515661;
    VoicePanelUITsx31.__initData = __initData;
    obj2 = spring;
    let str = "animate-never";
    let str2 = "animate-never";
    if (gestureActive) {
      str2 = "animate-always";
    }
    __closure = { translateX: obj2.withSpring(sum1, __closure.get().gestureActive ? closure_17 : obj2, str2, VoicePanelUITsx31) };
    const items = [__closure, ];
    const tmp13 = __closure.get().gestureActive ? closure_17 : obj2;
    const tmp11Result = spring;
    if (gestureActive) {
      str = "animate-always";
    }
    const obj1 = { transform: null };
    obj2 = { translateY: tmp11Result.withSpring(sum, __closure.get().gestureActive ? closure_17 : obj2, str, VoicePanelUITsx31) };
    items[1] = obj2;
    obj1.transform = items;
    return obj1;
  };
  __closure = { useReducedMotion, wrapperDimensions, wrapperOffset, connected, mode, VoicePanelModes: animatedStyle1, runOnJS: wrapperOffset(4296).runOnJS, updateSourceTrackingView: height(9610).updateSourceTrackingView, withSpring: wrapperOffset(4974).withSpring, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE, DRAWER_SIZE_PHYSICS: obj2 };
  fn4.__closure = __closure;
  fn4.__workletHash = 62808828087;
  fn4.__initData = __initData18;
  const animatedStyle = obj6.useAnimatedStyle(fn4);
  let obj8 = wrapperOffset(4296);
  class M {
    constructor() {
      obj = mode;
      obj2 = connected;
      value = mode.get();
      if (typeof computeBorderRadii === "function") {
        tmp3 = VoicePanelModes;
        if (value === VoicePanelModes.PIP) {
          num = DEFAULT_BORDER_RADIUS_PIP;
        } else {
          num = 0;
          if (!tmp2) {
            num = DEFAULT_BORDER_RADIUS;
          }
        }
        size = { width: null, height: null, borderRadius: null, pointerEvents: null, backgroundColor: null };
        tmp4 = wrapperDimensions;
        size.width = wrapperDimensions.get().drawerWidth;
        size.height = wrapperDimensions.get().drawerHeight;
        tmp5 = closure_0;
        tmp6 = closure_2;
        obj4 = closure_0(closure_2[12]);
        tmp7 = BORDER_RADIUS_PHYSICS;
        size.borderRadius = obj4.withSpring(num, BORDER_RADIUS_PHYSICS);
        str = "none";
        if (obj.get() === tmp3.PANEL) {
          str = "auto";
        }
        size.pointerEvents = str;
        str2 = "transparent";
        if (!obj2.get()) {
          tmp8 = closure_2;
          str2 = closure_2.maskDefaultBackground.backgroundColor;
        }
        size.backgroundColor = str2;
        return size;
      } else {
        str3 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  obj1 = { computeBorderRadii, mode, connected, wrapperDimensions, withSpring: wrapperOffset(4974).withSpring, BORDER_RADIUS_PHYSICS: windowDimensions, VoicePanelModes: animatedStyle1, styles: tmp3 };
  M.__closure = obj1;
  M.__workletHash = 4435209772815;
  M.__initData = __initData19;
  animatedStyle1 = obj8.useAnimatedStyle(M);
  if (!wrapperOffset(7603).isStable) {
    let tmpResult = tmp(4296);
    class Y {
      constructor() {
        return windowDimensions.get();
      }
    }
    obj2 = { windowDimensions };
    Y.__closure = obj2;
    Y.__workletHash = 8189060666389;
    Y.__initData = __initData20;
    const fn5 = function y(arg0) {
      const obj = wrapperOffset(closure_2[15]);
      wrapperOffset(closure_2[15]).runOnJS(log)("Window dimensions changed:", JSON.stringify(arg0));
    };
    obj3 = { runOnJS: tmp(4296).runOnJS, log };
    fn5.__closure = obj3;
    fn5.__workletHash = 5206450827682;
    fn5.__initData = __initData21;
    const animatedReaction1 = tmpResult.useAnimatedReaction(Y, fn5);
    tmpResult = tmp(4296);
    class H {
      constructor() {
        return wrapperDimensions.get();
      }
    }
    obj4 = { wrapperDimensions };
    H.__closure = obj4;
    H.__workletHash = 4862999942291;
    H.__initData = __initData22;
    class T {
      constructor(arg0) {
        obj = wrapperOffset(closure_2[15]);
        runOnJSResult = obj.runOnJS(closure_1_25);
        tmpResult = runOnJSResult("Wrapper dimensions changed:", JSON.stringify(children));
        return;
      }
    }
    const obj5 = { runOnJS: tmp(4296).runOnJS, log };
    T.__closure = obj5;
    T.__workletHash = 7760779241631;
    T.__initData = __initData23;
    const animatedReaction2 = tmpResult.useAnimatedReaction(H, T);
  }
  let items = [tmp3.wrapper, animatedStyle1, animatedStyle];
  const memo = obj1.useMemo(() => ({ wrapperRootStyles: closure_2.wrapper, wrapperTransformStyles: animatedStyle, wrapperSurfaceStyles: animatedStyle1 }), items);
  ({ wrapperRootStyles, wrapperTransformStyles, wrapperSurfaceStyles } = memo);
  obj6 = { style: wrapperRootStyles, pointerEvents: "box-none", children: null };
  tmp4(7073);
  const obj7 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: null };
  const tmp4Result = tmp4(7073);
  obj8 = { style: wrapperSurfaceStyles, layout: layoutTransition, children: children.children };
  obj7.children = closure_21(height(7073), obj8);
  obj6.children = closure_21(tmp4Result, obj7);
  return closure_21(tmp4Result, obj6);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ Pressable: metroRequire, ScrollView } = get_ActivityIndicator);
const VoicePanelConstants = fn(12273);
({ BORDER_RADIUS_PHYSICS: c10, DEFAULT_BORDER_RADIUS } = VoicePanelConstants);
const DEFAULT_BORDER_RADIUS_PIP = VoicePanelConstants.DEFAULT_BORDER_RADIUS_PIP;
({ DRAWER_SPRING_PHYSICS, IS_IOS: map1, MODE_CHANGE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR } = VoicePanelConstants);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const LAYOUT_PHYSICS = VoicePanelConstants.LAYOUT_PHYSICS;
const DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE = VoicePanelConstants.DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE;
const VoicePanelControlsModes = fn(12271).VoicePanelControlsModes;
const isActivityParticipant = fn(4581).isActivityParticipant;
const POP_RESISTANCE = fn(12274).POP_RESISTANCE;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
log = new LoggerDefault("VoicePanelUI");
function layoutTransition(originX) {
  const obj = { animations: null, initialValues: null };
  const size = { originX: spring.withSpring(originX.targetOriginX, LAYOUT_PHYSICS, "animate-always"), originY: null, width: null, height: null };
  size.originY = spring.withSpring(originX.targetOriginY, LAYOUT_PHYSICS, "animate-always");
  size.width = spring.withSpring(originX.targetWidth, LAYOUT_PHYSICS, "animate-always");
  size.height = spring.withSpring(originX.targetHeight, LAYOUT_PHYSICS, "animate-always");
  obj.animations = size;
  obj.initialValues = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight };
  return obj;
}
let __closure = { withSpring: fn(4974).withSpring, LAYOUT_PHYSICS };
layoutTransition.__closure = __closure;
layoutTransition.__workletHash = 16454235842679;
layoutTransition.__initData = { code: "function layoutTransition_VoicePanelUITsx1(values){const{withSpring,LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'animate-always'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'animate-always'),width:withSpring(values.targetWidth,LAYOUT_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,LAYOUT_PHYSICS,'animate-always')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
__closure = {};
let merged = Object.assign(LAYOUT_PHYSICS);
__closure.damping = 0;
function scrollViewLayoutTransition(originX) {
  const obj = { animations: null, initialValues: null };
  const size = { originX: spring.withSpring(originX.targetOriginX, LAYOUT_PHYSICS, "animate-always"), originY: null, width: null, height: null };
  size.originY = spring.withSpring(originX.targetOriginY, LAYOUT_PHYSICS, "animate-always");
  size.width = spring.withSpring(originX.targetWidth, obj, "animate-always");
  size.height = spring.withSpring(originX.targetHeight, obj, "animate-always");
  obj.animations = size;
  obj.initialValues = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight };
  return obj;
}
const tmp5 = new LoggerDefault("VoicePanelUI");
scrollViewLayoutTransition.__closure = { withSpring: fn(4974).withSpring, LAYOUT_PHYSICS, EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS: __closure };
scrollViewLayoutTransition.__workletHash = 11745134918460;
scrollViewLayoutTransition.__initData = { code: "function scrollViewLayoutTransition_VoicePanelUITsx2(values){const{withSpring,LAYOUT_PHYSICS,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'animate-always'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'animate-always'),width:withSpring(values.targetWidth,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'animate-always')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let obj2 = {};
let merged1 = Object.assign(DRAWER_SPRING_PHYSICS);
obj2.mass = 0.3;
obj2.damping = 100;
obj2.stiffness = 100;
let obj3 = {};
const merged2 = Object.assign(MODE_CHANGE_PHYSICS);
obj3.mass = 2;
function computeViewableChunksFromScrollPosition(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 1;
  }
  const rounded = Math.ceil(arg1 / VOICE_PANEL_CHUNK_DIVISOR);
  const sum = Math.max(Math.floor(arg0 / rounded) - num, 0) + VOICE_PANEL_CHUNK_DIVISOR + 2 * num;
  const bound = Math.min(sum, Math.ceil(arg2 / rounded));
  return { start: Math.max(bound - VOICE_PANEL_CHUNK_DIVISOR - 2 * num, 0), end: bound };
}
computeViewableChunksFromScrollPosition.__closure = { VOICE_PANEL_CHUNK_DIVISOR };
computeViewableChunksFromScrollPosition.__workletHash = 3008066799757;
computeViewableChunksFromScrollPosition.__initData = { code: "function computeViewableChunksFromScrollPosition_VoicePanelUITsx3(scrollPosition,windowHeight,contentHeight,extraChunks=1){const{VOICE_PANEL_CHUNK_DIVISOR}=this.__closure;const chunkSize=Math.ceil(windowHeight/VOICE_PANEL_CHUNK_DIVISOR);let start=Math.max(Math.floor(scrollPosition/chunkSize)-extraChunks,0);const end=Math.min(start+VOICE_PANEL_CHUNK_DIVISOR+extraChunks*2,Math.ceil(contentHeight/chunkSize));start=Math.max(end-VOICE_PANEL_CHUNK_DIVISOR-extraChunks*2,0);return{start:start,end:end};}" };
fn(4560);
let obj4 = { accessibilityView: null, wrapper: null, maskDefaultBackground: null, scrollView: null, scrollViewContent: null, shade: null, shadePressable: null };
let obj5 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj5.overflow = "hidden";
obj4.accessibilityView = obj5;
const createStyles = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
createStyles.alignItems = "flex-start";
createStyles.zIndex = 1;
obj4.wrapper = createStyles;
let obj1 = { withSpring: fn(4974).withSpring, LAYOUT_PHYSICS, EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS: __closure };
obj4.maskDefaultBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj8 = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj8.borderTopLeftRadius = DEFAULT_BORDER_RADIUS;
obj8.borderTopRightRadius = DEFAULT_BORDER_RADIUS;
obj4.scrollView = obj8;
obj4.scrollViewContent = { flexGrow: 1, flexShrink: 0 };
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj4.shade = { backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
obj4.shadePressable = { flexGrow: 1 };
let closure_31 = createStyles.createStyles(obj4);
let closure_32 = ReanimatedRexport.createAnimatedComponent(ScrollView);
const MetaQuestUtils = fn(1608);
let closure_33 = MetaQuestUtils.isMetaQuest();
const __initData = { code: "function VoicePanelUITsx4(){const{gestureState,connected,mode}=this.__closure;return{gestureActive:gestureState.get().active,connected:connected.get(),mode:mode.get()};}" };
const __initData2 = { code: "function VoicePanelUITsx5(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,runOnJS,setPanelFullscreen,setPanelOpen,setPanelPIP}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{gestureActive:gestureActive,connected:connected,mode:mode}=props;if(!connected||gestureActive||mode!==VoicePanelModes.PANEL){runOnJS(setPanelFullscreen)(false);}else{runOnJS(setPanelFullscreen)(true);}if(mode===VoicePanelModes.PANEL){runOnJS(setPanelOpen)(true);}else{runOnJS(setPanelOpen)(false);}if(mode===VoicePanelModes.PIP){runOnJS(setPanelPIP)(true);}else{runOnJS(setPanelPIP)(false);}}" };
const __initData3 = { code: "function VoicePanelUITsx6(){const{mode}=this.__closure;return mode.get();}" };
const __initData4 = { code: "function VoicePanelUITsx7(mode,previous){const{VoicePanelModes,updateSharedValueIfChanged,gestureState}=this.__closure;if(mode===VoicePanelModes.DISMISSED&&previous!==VoicePanelModes.DISMISSED){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}}" };
const __initData5 = { code: "function VoicePanelUITsx8(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
const __initData6 = { code: "function VoicePanelUITsx9(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
let closure_40 = { code: "function VoicePanelUITsx10(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(!connected.get())return;if(mode.get()===VoicePanelModes.PIP){}else if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}" };
let closure_41 = { code: "function VoicePanelUITsx11(){const{wrapperOffset,mode,VoicePanelModes,updateSharedValueIfChanged,gestureState}=this.__closure;const pendingModeChange=wrapperOffset.get().y!==0&&mode.get()===VoicePanelModes.PANEL;if(!pendingModeChange){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}}" };
let closure_42 = { code: "function VoicePanelUITsx12(event){const{gestureState,mode,VoicePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,connected,runOnJS,setMode,lockScrolling,MIN_DISMISS_MOVE_PERCENTAGE,dismissPanel}=this.__closure;if(gestureState.get().cancel)return;const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(mode.get()===VoicePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else if(mode.get()===VoicePanelModes.PANEL){if(velocityY>0){if(connected.get()){if(!gestureState.get().requiresPop){runOnJS(setMode)(VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}else{const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;const dismissThreshold=panelHeight*MIN_DISMISS_MOVE_PERCENTAGE;if(wrapperOffset.get().y>dismissThreshold){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(dismissPanel)();return;}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}" };
let closure_43 = { code: "function VoicePanelUITsx13(_e){const{lockScrolling,updateSharedValueIfChanged,gestureState,wrapperOffset}=this.__closure;lockScrolling.set(false);updateSharedValueIfChanged(gestureState,{cancel:false,active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});console.log('onTouchesCancelled');}" };
let closure_44 = { code: "function VoicePanelUITsx14(event){const{gestureState,mode,VoicePanelModes,connected,lockScrolling,scrollPosition,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(gestureState.get().cancel)return;if(mode.get()!==VoicePanelModes.PIP){const minYOffset=0;let newYOffset=(gestureState.get().absoluteYStart-event.absoluteY)*-1;if(connected.get()&&!gestureState.get().requiresPop&&newYOffset<=minYOffset){gestureState.set({...gestureState.get(),requiresPop:true});}if(lockScrolling.get()&&newYOffset<minYOffset){lockScrolling.set(false);}else if(!lockScrolling.get()&&scrollPosition.get()<=0){lockScrolling.set(true);}if(gestureState.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{gestureState.set({...gestureState.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(gestureState.get().absoluteXStart-event.absoluteX)*-1,y:(gestureState.get().absoluteYStart-event.absoluteY)*-1});}}" };
let closure_45 = { code: "function VoicePanelUITsx15(event,manager){const{State,gestureState,mode,VoicePanelModes,scrollPosition,isQuest,MIN_GESTURE_MOVE,focused,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset,lockScrolling}=this.__closure;if(event.state!==State.BEGAN||gestureState.get().active||gestureState.get().cancel)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=gestureState.get().absoluteYStart-absoluteY;const xDiff=gestureState.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;let startGesture=false;if(mode.get()===VoicePanelModes.PANEL){var _focused$get;const scrollPos=Math.floor(scrollPosition.get());if(yDiff<0&&scrollPos<=0){if(isQuest){startGesture=absoluteMovement>MIN_GESTURE_MOVE;}else{startGesture=true;}}else if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!=null&&isNotPullDownGesture){manager.fail();}}else if(mode.get()===VoicePanelModes.PIP&&absoluteMovement>MIN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true});gestureState.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY+scrollPosition.get(),cancel:false,active:true,requiresPop:gestureState.get().requiresPop});lockScrolling.set(true);manager.activate();}else{updateSharedValueIfChanged(gestureState,{absoluteYStart:absoluteY,absoluteXStart:absoluteX});}}" };
let closure_46 = { code: "function VoicePanelUITsx16(event){const{gestureState,updateSharedValueIfChanged,wrapperOffset,connected,mode,VoicePanelModes}=this.__closure;if(gestureState.get().cancel)return;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});gestureState.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:false,requiresPop:connected.get()&&mode.get()===VoicePanelModes.PANEL});}" };
let closure_47 = { code: "function VoicePanelUITsx17(event,manager){const{IS_IOS,windowDimensions,safeArea,gestureState,isFocusedVideoZoomed,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes}=this.__closure;const touch=event.allTouches[0];if(IS_IOS&&touch!=null&&touch.absoluteY>windowDimensions.get().height-safeArea.get().bottom){gestureState.set({...gestureState.get(),cancel:true});manager.activate();return;}if(isFocusedVideoZoomed.get()||mode.get()===VoicePanelModes.PANEL&&controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){gestureState.set({...gestureState.get(),cancel:true});manager.fail();}}" };
const __initData7 = { code: "function onBeginDrag_VoicePanelUITsx18(event){const{scrollPosition,dragScrolling}=this.__closure;scrollPosition.set(event.contentOffset.y);dragScrolling.set(true);}" };
const __initData8 = { code: "function onEndDrag_VoicePanelUITsx19(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
const __initData9 = { code: "function onMomentumEnd_VoicePanelUITsx20(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
const __initData10 = { code: "function onScroll_VoicePanelUITsx21(event){const{lockScrolling,isSnappingBack,scrollPosition,scrollTo,scrollerRef,computeViewableChunksFromScrollPosition,windowDimensions,scrollableRegionSize,updateSharedValueIfChanged,viewableChunks}=this.__closure;if(lockScrolling.get()){if(isSnappingBack.get()){return;}if(scrollPosition.get()<0){scrollPosition.set(0);}const targetScrollPosition=scrollPosition.get();if(Math.abs(event.contentOffset.y-targetScrollPosition)<0.1){return;}isSnappingBack.set(true);scrollTo(scrollerRef,0,targetScrollPosition,false);isSnappingBack.set(false);}else{let newViewableChunks;if(scrollPosition.get()!==event.contentOffset.y){newViewableChunks=computeViewableChunksFromScrollPosition(scrollPosition.get(),windowDimensions.get().height,scrollableRegionSize.get());}scrollPosition.set(event.contentOffset.y);newViewableChunks!=null&&updateSharedValueIfChanged(viewableChunks,newViewableChunks);}}" };
const __initData11 = { code: "function VoicePanelUITsx22(){const{mode}=this.__closure;return mode.get();}" };
const __initData12 = { code: "function VoicePanelUITsx23(mode,previous){const{VoicePanelModes,lockScrolling}=this.__closure;if(previous==null||mode===previous)return;if(mode===VoicePanelModes.PANEL&&previous===VoicePanelModes.PIP){lockScrolling.set(false);}else if(mode===VoicePanelModes.PIP){lockScrolling.set(true);}}" };
const __initData13 = { code: "function VoicePanelUITsx24(){const{mode,VoicePanelModes,focused,lockScrolling,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter}=this.__closure;const isPIPMode=mode.get()===VoicePanelModes.PIP;const disableScroll=isPIPMode||focused.get()!=null;return{pointerEvents:isPIPMode?'none':'auto',scrollEnabled:!disableScroll,showsVerticalScrollIndicator:lockScrolling.get()?false:!disableScroll,scrollIndicatorInsets:{top:calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height-safeArea.get().top,bottom:safeArea.get().bottom}};}" };
const __initData14 = { code: "function VoicePanelUITsx25(){const{mode,VoicePanelModes,connected,gestureState,wrapperDimensions,wrapperOffset,windowDimensions}=this.__closure;switch(mode.get()){case VoicePanelModes.PIP:case VoicePanelModes.DISMISSED:return 0;default:{if(connected.get()&&gestureState.get().active&&gestureState.get().requiresPop){return 1;}const drawerTop=wrapperDimensions.get().drawerY+wrapperOffset.get().y;const screenSize=windowDimensions.get().height;const percentage=(screenSize-drawerTop)/screenSize;return Math.min(Math.max(percentage,0),1);}}}" };
function computeBorderRadii(mode) {
  if (mode.mode === VoicePanelModes.PIP) {
    let num = DEFAULT_BORDER_RADIUS_PIP;
  } else {
    num = 0;
    if (!tmp) {
      num = DEFAULT_BORDER_RADIUS;
    }
  }
  return num;
}
computeBorderRadii.__closure = { VoicePanelModes, DEFAULT_BORDER_RADIUS_PIP, DEFAULT_BORDER_RADIUS };
computeBorderRadii.__workletHash = 157869295768;
computeBorderRadii.__initData = { code: "function computeBorderRadii_VoicePanelUITsx26({mode:mode,connected:connected}){const{VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP,DEFAULT_BORDER_RADIUS}=this.__closure;if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return!connected?DEFAULT_BORDER_RADIUS:0;}" };
const __initData15 = { code: "function VoicePanelUITsx27(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().height;}" };
const __initData16 = { code: "function VoicePanelUITsx28(){const{mode,connected,windowDimensions,safeArea,focused,pipState,controlsHeight,preJoinContentSize,globalStatusIndicatorHeight}=this.__closure;return{modeToSet:mode.get(),connected:connected.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get(),focused:focused.get(),pipState:pipState,controlsHeight:controlsHeight.get(),preJoinContentSize:preJoinContentSize.get(),globalStatusIndicatorHeight:globalStatusIndicatorHeight};}" };
const __initData17 = { code: "function VoicePanelUITsx29(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperDimensions,updateSharedValueIfChanged,wrapperOffset,getMaxPanelWidth,getPanelX,roundToNearestPixel,windowDimensions}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{modeToSet:modeToSet,connected:connected,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,pipState:pipState,controlsHeight:controlsHeight,preJoinContentSize:preJoinContentSize,globalStatusIndicatorHeight:globalStatusIndicatorHeight}=props;if(modeToSet===VoicePanelModes.PIP&&pipState.id==null){return;}const animated=previous!=null?windowHeight===previous.windowHeight&&windowWidth===previous.windowWidth&&safeArea.top===previous.safeArea.top&&safeArea.bottom===previous.safeArea.bottom&&safeArea.left===previous.safeArea.left&&safeArea.right===previous.safeArea.right:true;let{drawerX:drawerX,drawerY:drawerY}=wrapperDimensions.get();const availableHeight=windowHeight-globalStatusIndicatorHeight;if(modeToSet===VoicePanelModes.PANEL){if(connected){drawerX=0;drawerY=0;updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else{const drawerWidth=getMaxPanelWidth({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeArea.left,safeAreaRight:safeArea.right});drawerX=getPanelX(windowWidth,drawerWidth);drawerY=roundToNearestPixel(Math.max(availableHeight-preJoinContentSize-controlsHeight-safeArea.bottom,availableHeight-0.8*availableHeight));updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:drawerWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});}}else if(modeToSet===VoicePanelModes.DISMISSED){if(connected){updateSharedValueIfChanged(wrapperDimensions,{mode:modeToSet});}else{updateSharedValueIfChanged(wrapperDimensions,{drawerY:windowDimensions.get().height+60,mode:modeToSet});}updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}}" };
const __initData18 = { code: "function VoicePanelUITsx30(){const{useReducedMotion,wrapperDimensions,wrapperOffset,connected,mode,VoicePanelModes,runOnJS,updateSourceTrackingView,withSpring,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,DRAWER_SIZE_PHYSICS}=this.__closure;const animateXY=!useReducedMotion.get()&&wrapperDimensions.get().animated||wrapperOffset.get().gestureActive;const{gestureActive:gestureActive,y:offsetY,x:offsetX}=wrapperOffset.get();let{drawerY:y,drawerX:x}=wrapperDimensions.get();const applyGestureOffset=!connected.get()&&(gestureActive||offsetY!==0);if(applyGestureOffset){y+=Math.max(offsetY,0);x+=offsetX;}const updateSourceTrackingViewHelper=function(finished){if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}};return{transform:[{translateX:withSpring(x,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},{translateY:withSpring(y,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)}]};}" };
let closure_61 = { code: "function VoicePanelUITsx31(finished){const{mode,VoicePanelModes,runOnJS,updateSourceTrackingView}=this.__closure;if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}}" };
const __initData19 = { code: "function VoicePanelUITsx32(){const{computeBorderRadii,mode,connected,wrapperDimensions,withSpring,BORDER_RADIUS_PHYSICS,VoicePanelModes,styles}=this.__closure;const borderRadius=computeBorderRadii({mode:mode.get(),connected:connected.get()});return{width:wrapperDimensions.get().drawerWidth,height:wrapperDimensions.get().drawerHeight,borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS),pointerEvents:mode.get()===VoicePanelModes.PANEL?'auto':'none',backgroundColor:connected.get()?'transparent':styles.maskDefaultBackground.backgroundColor};}" };
const __initData20 = { code: "function VoicePanelUITsx33(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
const __initData21 = { code: "function VoicePanelUITsx34(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Window dimensions changed:',JSON.stringify(value));}" };
const __initData22 = { code: "function VoicePanelUITsx35(){const{wrapperDimensions}=this.__closure;return wrapperDimensions.get();}" };
const __initData23 = { code: "function VoicePanelUITsx36(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Wrapper dimensions changed:',JSON.stringify(value));}" };
const DrawerShadeOpacityPhysics = { mass: 0.6, damping: 30, stiffness: 400, overshootClamping: true };
const __initData24 = { code: "function VoicePanelUITsx37(){const{withSpring,opacity,DrawerShadeOpacityPhysics}=this.__closure;return{opacity:withSpring(opacity.get(),DrawerShadeOpacityPhysics),pointerEvents:opacity.get()===0?'none':'auto'};}" };
let closure_70 = noop.memo((onPress) => {
  const opacity = onPress.opacity;
  const tmp = closure_31();
  opacity(4296);
  const fn = function o() {
    const obj = { opacity: spring.withSpring(opacity.get(), closure_68), pointerEvents: null };
    let str = "auto";
    if (0 === opacity.get()) {
      str = "none";
    }
    obj.pointerEvents = str;
    return obj;
  };
  __closure = { withSpring: opacity(4974).withSpring, opacity, DrawerShadeOpacityPhysics };
  fn.__closure = __closure;
  fn.__workletHash = 11475343199430;
  fn.__initData = __initData24;
  const animatedStyle = __closure.useAnimatedStyle(fn);
  __closure = { style: null, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_21(closure_6, { style: tmp.shadePressable, onPress: onPress.onPress }) };
  const items = [StyleSheet.absoluteFill, tmp.shade, animatedStyle];
  __closure.style = items;
  return closure_21(ReanimatedRexport.View, __closure);
});
let obj9 = { backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUI.tsx");

export default noop.memo(function VoicePanelUI() {
  let tmp = closure_31();
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ scrollPosition, dragScrolling, channelId } = context);
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp6[1];
  dependencyMap = noop.useRef(-1);
  const items = [channelId];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    clearTimeout(ref.current);
    channelId(ref[36]).batchUpdates(() => {
      if (lockEnabled) {
        const _setTimeout = setTimeout;
        closure_2.current = setTimeout(() => {
          state = state.getState();
          const result = state.setChannelPanelFullscreen(closure_0, lockEnabled);
          const state1 = dismissPanel.getState();
          const freezeLock = state1.requestFreezeLock({ lockEnabled, key: "voice-panel-freeze-" + closure_0 });
        }, 1000);
      } else {
        state = VoicePanelStore.getState();
        let result = state.setChannelPanelFullscreen(channelId, tmp);
        let state1 = AppFreezeStore.getState();
        const obj = { lockEnabled: tmp, key: null };
        const _HermesInternal = HermesInternal;
        obj.key = "voice-panel-freeze-" + channelId;
        let freezeLock = state1.requestFreezeLock(obj);
      }
    });
  }, items);
  const layoutEffect = noop.useLayoutEffect(() => () => {
    clearTimeout(ref.current);
  }, []);
  const items1 = [channelId];
  const callback1 = noop.useCallback((arg0) => {
    state = VoicePanelStore.getState();
    state.setChannelPanelOpen(channelId, arg0);
  }, items1);
  const items2 = [channelId];
  const callback2 = noop.useCallback((arg0) => {
    state = VoicePanelStore.getState();
    state.setChannelPanelPIP(channelId, arg0);
  }, items2);
  closure_129_0 = scrollPosition;
  closure_129_1 = dragScrolling;
  closure_129_2 = callback;
  closure_129_3 = callback1;
  closure_129_4 = callback2;
  closure_129_31 = undefined;
  const context1 = noop.useContext(VoicePanelStateContextDefault);
  const channelId2 = context1.channelId;
  closure_129_5 = channelId2;
  const connected = context1.connected;
  closure_129_6 = connected;
  const controlsSpecs = context1.controlsSpecs;
  closure_129_7 = controlsSpecs;
  const dismissPanel = context1.dismissPanel;
  closure_129_8 = dismissPanel;
  const dismissToPIPGestureRef = context1.dismissToPIPGestureRef;
  closure_129_9 = dismissToPIPGestureRef;
  const focused = context1.focused;
  closure_129_10 = focused;
  const hideControls = context1.hideControls;
  closure_129_11 = hideControls;
  const isFocusedVideoZoomed = context1.isFocusedVideoZoomed;
  closure_129_12 = isFocusedVideoZoomed;
  let mode = context1.mode;
  closure_129_13 = mode;
  const safeArea = context1.safeArea;
  closure_129_14 = safeArea;
  const setMode = context1.setMode;
  closure_129_15 = setMode;
  const showControls = context1.showControls;
  closure_129_16 = showControls;
  const windowDimensions = context1.windowDimensions;
  closure_129_17 = windowDimensions;
  const wrapperDimensions = context1.wrapperDimensions;
  closure_129_18 = wrapperDimensions;
  const wrapperOffset = context1.wrapperOffset;
  closure_129_19 = wrapperOffset;
  let tmp12 = useSafeAreaInsetsDefault();
  closure_129_20 = tmp12;
  __closure = channelId(4296);
  const sharedValue = __closure.useSharedValue(0);
  closure_129_21 = sharedValue;
  let obj1 = channelId(4296);
  const sharedValue1 = obj1.useSharedValue(false);
  closure_129_22 = sharedValue1;
  obj2 = channelId(4296);
  const sharedValue2 = obj2.useSharedValue(false);
  closure_129_23 = sharedValue2;
  let obj3 = channelId(4296);
  __closure = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
  const sharedValue3 = obj3.useSharedValue(__closure);
  closure_129_24 = sharedValue3;
  const tmp18 = _slicedToArray(noop.useState(true), 2);
  let first = tmp18[0];
  closure_129_25 = first;
  closure_129_26 = tmp18[1];
  const memo = noop.useMemo(() => {
    const Gesture = channelId(ref[19]).Gesture;
    return Gesture.Native();
  }, []);
  closure_129_27 = memo;
  let obj5 = channelId(4296);
  const animatedRef = obj5.useAnimatedRef();
  closure_129_28 = animatedRef;
  let obj6 = channelId(4296);
  const sharedValue4 = obj6.useSharedValue({ absoluteXStart: 0, absoluteYStart: 0, cancel: false, active: false, requiresPop: false });
  closure_129_29 = sharedValue4;
  let obj7 = channelId(4296);
  let fn = function f() {
    return { gestureActive: gestureState.get().active, connected: connected.get(), mode: mode.get() };
  };
  fn.__closure = { gestureState: sharedValue4, connected, mode };
  fn.__workletHash = 5596084348360;
  fn.__initData = __initData;
  let fn2 = function h(mode, current) {
    if (!obj.cheapWorkletShallowEqual(mode, current)) {
      mode = mode.mode;
      if (mode.connected) {
        if (!mode.gestureActive) {
          if (mode === VoicePanelModes.PANEL) {
            let tmp2Result = tmp2(4296);
            tmp2Result.runOnJS(closure_2)(true);
          }
          if (mode === VoicePanelModes.PANEL) {
            tmp2Result = tmp2(4296);
            tmp2Result.runOnJS(closure_3)(true);
          } else {
            tmp2(4296).runOnJS(closure_3)(false);
            const tmp2Result1 = tmp2(4296);
          }
          if (mode === tmp9.PIP) {
            tmp2(4296).runOnJS(noop)(true);
            const tmp2Result2 = tmp2(4296);
          } else {
            tmp2(4296).runOnJS(noop)(false);
            const tmp2Result3 = tmp2(4296);
          }
          tmp9 = VoicePanelModes;
        }
      }
      tmp2(4296).runOnJS(closure_2)(false);
      const tmp2Result4 = tmp2(4296);
    }
  };
  __closure = { cheapWorkletShallowEqual: channelId(9495).cheapWorkletShallowEqual, VoicePanelModes, runOnJS: channelId(4296).runOnJS, setPanelFullscreen: callback, setPanelOpen: callback1, setPanelPIP: callback2 };
  fn2.__closure = __closure;
  fn2.__workletHash = 10989484188294;
  fn2.__initData = __initData2;
  const animatedReaction = obj7.useAnimatedReaction(fn, fn2);
  let obj9 = channelId(4296);
  let fn3 = function _() {
    return mode.get();
  };
  fn3.__closure = { mode };
  fn3.__workletHash = 455036316035;
  fn3.__initData = __initData3;
  let fn4 = function p(arg0, arg1) {
    let tmp2 = arg0 === VoicePanelModes.DISMISSED;
    if (tmp2) {
      tmp2 = arg1 !== tmp.DISMISSED;
    }
    if (tmp2) {
      updateSharedValueIfChangedDefault(gestureState, { cancel: false, active: false });
    }
  };
  obj1 = { VoicePanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState: sharedValue4 };
  fn4.__closure = obj1;
  fn4.__workletHash = 8982251844724;
  fn4.__initData = __initData4;
  const animatedReaction1 = obj9.useAnimatedReaction(fn3, fn4);
  const items3 = [channelId2];
  const callback3 = noop.useCallback((arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = isActivityParticipant(ChannelRTCStore.getParticipant(StyleSheet, arg0));
    }
    layoutTransition(!tmp);
  }, items3);
  closure_129_30 = callback3;
  let obj11 = channelId(4296);
  function ve() {
    let tmp;
    if (mode.get() === VoicePanelModes.PANEL) {
      value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      tmp = id;
    }
    return tmp;
  }
  ve.__closure = { mode, VoicePanelModes, focused };
  ve.__workletHash = 16350113088465;
  ve.__initData = __initData5;
  class Ve {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[15]);
        tmp3 = closure_1_30;
        tmp4 = obj.runOnJS(closure_1_30)(arg0);
      }
      return;
    }
  }
  obj2 = { runOnJS: channelId(4296).runOnJS, handleFocusChange: callback3 };
  Ve.__closure = obj2;
  Ve.__workletHash = 169980789473;
  Ve.__initData = __initData6;
  const animatedReaction2 = obj11.useAnimatedReaction(ve, Ve);
  const items4 = [tmp12, connected, controlsSpecs, dismissPanel, dismissToPIPGestureRef, focused, first, hideControls, sharedValue4, isFocusedVideoZoomed, sharedValue1, mode, safeArea, scrollPosition, memo, setMode, showControls, windowDimensions, wrapperDimensions, wrapperOffset];
  const memo1 = noop.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    const rect = { left: -1 * closure_1_20.left, right: -1 * closure_1_20.right };
    const TapResult = Gesture2.Tap();
    const hitSlopResult = Gesture2.Tap().hitSlop(rect);
    const enabledResult = Gesture2.Tap().hitSlop(rect).enabled(log);
    const fn = function h() {
      if (connected.get()) {
        if (mode.get() !== setMode.PIP) {
          if (controlsSpecs.get().mode === wrapperDimensions.HIDDEN) {
            channelId(4296).runOnJS(showControls)({ debounce: true });
            obj2 = channelId(4296);
          } else {
            channelId(4296).runOnJS(hideControls)({ debounce: true });
            const obj = channelId(4296);
          }
        }
      }
    };
    __closure = { connected, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes, runOnJS: ReanimatedRexport2.runOnJS, showControls, hideControls };
    fn.__closure = __closure;
    fn.__workletHash = 7439125251278;
    fn.__initData = __initData;
    const maxDistanceResult = Gesture2.Tap().hitSlop(rect).enabled(log).maxDistance(30);
    const Gesture3 = LegacyBaseButton.Gesture;
    const onStartResult = Gesture2.Tap().hitSlop(rect).enabled(log).maxDistance(30).onStart(fn);
    const PanResult = Gesture3.Pan();
    const enabledResult1 = Gesture3.Pan().enabled(log);
    const manualActivationResult = Gesture3.Pan().enabled(log).manualActivation(true);
    const rect1 = { left: -1 * closure_1_20.left, right: -1 * closure_1_20.right };
    const maxPointersResult = Gesture3.Pan().enabled(log).manualActivation(true).maxPointers(1);
    const hitSlopResult1 = Gesture3.Pan().enabled(log).manualActivation(true).maxPointers(1).hitSlop(rect1);
    let result = Gesture3.Pan().enabled(log).manualActivation(true).maxPointers(1).hitSlop(rect1).withRef(state).shouldCancelWhenOutside(false);
    let result1 = result.simultaneousWithExternalGesture(closure_1_27);
    class S {
      constructor(arg0, arg1) {
        first = arg0.allTouches[0];
        if (closure_2_13) {
          tmp2 = null;
          if (null != first) {
            tmp3 = closure_1_17;
            tmp4 = closure_1_14;
            if (first.absoluteY > closure_1_17.get().height - closure_1_14.get().bottom) {
              tmp16 = closure_1_29;
              obj = {};
              tmp17 = obj;
              merged = Object.assign(closure_1_29.get());
              flag2 = true;
              obj.cancel = true;
              result = closure_1_29.set(obj);
              activateResult = arg1.activate();
              return;
            }
          }
        }
        value = closure_1_12.get();
        if (!value) {
          tmp6 = closure_1_13;
          tmp7 = closure_2_15;
          tmp8 = closure_1_13.get() === closure_2_15.PANEL;
          if (tmp8) {
            tmp9 = closure_1_7;
            tmp10 = closure_2_18;
            tmp8 = closure_1_7.get().mode === closure_2_18.DRAWER;
          }
          value = tmp8;
        }
        if (value) {
          tmp11 = closure_1_29;
          obj = {};
          tmp12 = obj;
          merged1 = Object.assign(closure_1_29.get());
          flag = true;
          obj.cancel = true;
          result1 = closure_1_29.set(obj);
          failResult = arg1.fail();
        }
        return;
      }
    }
    __closure = { IS_IOS, windowDimensions, safeArea, gestureState, isFocusedVideoZoomed, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes };
    S.__closure = __closure;
    S.__workletHash = 1018234940483;
    S.__initData = __initData8;
    const withRefResult = Gesture3.Pan().enabled(log).manualActivation(true).maxPointers(1).hitSlop(rect1).withRef(state);
    const fn2 = function u(arg0) {
      let obj = gestureState;
      if (!gestureState.get().cancel) {
        closure_1(11354)(wrapperOffset, { x: 0, y: 0 });
        obj = { absoluteXStart: null, absoluteYStart: null, active: false, cancel: false, requiresPop: null };
        ({ absoluteX: obj2.absoluteXStart, absoluteY: obj2.absoluteYStart } = arg0);
        value = connected.get();
        if (value) {
          value = mode.get() === setMode.PANEL;
        }
        obj.requiresPop = value;
        const result = obj.set(obj);
      }
    };
    const onTouchesDownResult = result1.onTouchesDown(S);
    fn2.__closure = { gestureState, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, connected, mode, VoicePanelModes };
    fn2.__workletHash = 2900831238061;
    fn2.__initData = __initData7;
    const obj1 = { gestureState, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, connected, mode, VoicePanelModes };
    const fn3 = function c(state, fail) {
      if (state.state === channelId(6655).State.BEGAN) {
        if (!gestureState.get().active) {
          if (!obj5.get().cancel) {
            ({ absoluteY, absoluteX } = state.changedTouches[0]);
            const diff = obj5.get().absoluteYStart - absoluteY;
            const diff1 = obj5.get().absoluteXStart - absoluteX;
            const _Math = Math;
            const _Math2 = Math;
            const _Math3 = Math;
            const absolute = Math.abs(diff);
            const bound = Math.max(absolute, Math.abs(diff1));
            const _Math4 = Math;
            const _Math5 = Math;
            const absolute1 = Math.abs(diff1);
            let tmp9 = absolute1 >= Math.abs(diff);
            if (!tmp9) {
              tmp9 = diff > 0;
            }
            let obj = mode;
            if (mode.get() === setMode.PANEL) {
              const _Math6 = Math;
              if (diff < 0) {
                if (Math.floor(closure_1_0.get()) <= 0) {
                  let tmp23 = !isQuest;
                  if (isQuest) {
                    tmp23 = bound > 10;
                  }
                  let flag = tmp23;
                }
              }
              value = focused.get();
              let id;
              if (value != null) {
                id = value.id;
              }
              flag = false;
              if (tmp20) {
                fail.fail();
                flag = false;
              }
              tmp20 = null != id && tmp9;
            } else {
              let tmp12 = obj.get() === tmp11.PIP;
              if (tmp12) {
                tmp12 = bound > 10;
              }
              flag = false;
              if (tmp12) {
                channelId(4296).runOnJS(closure_1(17094))();
                flag = true;
                const tmpResult = channelId(4296);
              }
            }
            const tmp25 = closure_1(11354);
            if (flag) {
              tmp25(wrapperOffset, { gestureActive: true });
              obj = { absoluteXStart: absoluteX, absoluteYStart: absoluteY + closure_1_0.get(), cancel: false, active: true, requiresPop: obj5.get().requiresPop };
              const result = obj5.set(obj);
              const result1 = lockScrolling.set(true);
              fail.activate();
            } else {
              obj = { absoluteYStart: absoluteY, absoluteXStart: absoluteX };
              tmp25(obj5, obj);
            }
          }
        }
      }
    };
    const onBeginResult = onTouchesDownResult.onBegin(fn2);
    fn3.__closure = { State: LegacyBaseButton.State, gestureState, mode, VoicePanelModes, scrollPosition: channelId, isQuest, MIN_GESTURE_MOVE: 10, focused, runOnJS: ReanimatedRexport2.runOnJS, triggerIOSHaptic: utils_triggerIOSHapticDefault, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, lockScrolling };
    fn3.__workletHash = 681403423937;
    fn3.__initData = __initData6;
    obj2 = { State: LegacyBaseButton.State, gestureState, mode, VoicePanelModes, scrollPosition: channelId, isQuest, MIN_GESTURE_MOVE: 10, focused, runOnJS: ReanimatedRexport2.runOnJS, triggerIOSHaptic: utils_triggerIOSHapticDefault, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, lockScrolling };
    const fn4 = function l(absoluteY) {
      let obj = gestureState;
      if (!gestureState.get().cancel) {
        let merged = mode.get();
        if (merged !== setMode.PIP) {
          const result = -1 * (obj.get().absoluteYStart - absoluteY.absoluteY);
          let tmp12 = connected.get() && !obj.get().requiresPop;
          if (tmp12) {
            tmp12 = result <= 0;
          }
          if (tmp12) {
            obj = {};
            merged = Object.assign(obj.get());
            obj.requiresPop = true;
            const result1 = obj.set(obj);
          }
          if (lockScrolling.get()) {
            if (result < 0) {
              const result2 = obj4.set(false);
            }
            let diff = result;
            if (!obj.get().requiresPop) {
              const point = { y: diff, x: 0 };
              closure_1(11354)(wrapperOffset, point);
            } else {
              const _Math = Math;
              merged = Math.max(result, 0);
              if (merged > 180) {
                obj = {};
                merged = Object.assign(obj.get());
                obj.requiresPop = false;
                const result3 = obj.set(obj);
                const obj6 = channelId(4296);
                channelId(4296).runOnJS(channelId(4528).triggerHapticFeedback)(channelId(4528).HapticFeedbackTypes.IMPACT_MEDIUM);
                diff = result;
                const runOnJSResult = channelId(4296).runOnJS(channelId(4528).triggerHapticFeedback);
              }
            }
            diff = merged - merged * POP_RESISTANCE;
          }
          value = obj4.get();
          let tmp16 = !value;
          if (!value) {
            merged = closure_1_0;
            tmp16 = closure_1_0.get() <= 0;
          }
          if (tmp16) {
            const result4 = obj4.set(true);
          }
        } else {
          const point1 = { x: -1 * (obj.get().absoluteXStart - absoluteY.absoluteX), y: -1 * (obj.get().absoluteYStart - absoluteY.absoluteY) };
          closure_1(11354)(wrapperOffset, point1);
          const tmp7 = closure_1(11354);
        }
      }
    };
    const onTouchesMoveResult = onBeginResult.onTouchesMove(fn3);
    fn4.__closure = { gestureState, mode, VoicePanelModes, connected, lockScrolling, scrollPosition: channelId, POP_RESISTANCE, PIP_POP_HEIGHT: 180, runOnJS: ReanimatedRexport2.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset };
    fn4.__workletHash = 5758910761259;
    fn4.__initData = __initData5;
    let obj3 = { gestureState, mode, VoicePanelModes, connected, lockScrolling, scrollPosition: channelId, POP_RESISTANCE, PIP_POP_HEIGHT: 180, runOnJS: ReanimatedRexport2.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset };
    const fn5 = function s() {
      const result = lockScrolling.set(false);
      closure_1(11354)(gestureState, { cancel: false, active: false });
      closure_1(11354)(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn4);
    fn5.__closure = { lockScrolling, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState, wrapperOffset };
    fn5.__workletHash = 2298193707049;
    fn5.__initData = __initData4;
    let obj4 = { lockScrolling, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState, wrapperOffset };
    const fn6 = function n(velocityY) {
      let obj = gestureState;
      if (!gestureState.get().cancel) {
        velocityY = velocityY.velocityY;
        ({ velocityX, absoluteX, absoluteY } = velocityY);
        if (mode.get() === setMode.PIP) {
          obj = { velocityX, velocityY, absoluteX, absoluteY, windowDimensions: windowDimensions.get(), safeArea: safeArea.get() };
          const result = channelId(17087).calculatePIPPositionFromVelocity(obj);
          ({ pipX, pipY } = result);
          obj = { pipX, pipY };
          closure_1(11354)(wrapperDimensions, obj);
          closure_1(11354)(wrapperOffset, { gestureActive: false });
          const obj5 = channelId(17087);
        } else if (obj2.get() === tmp2.PANEL) {
          if (velocityY > 0) {
            if (connected.get()) {
              if (obj.get().requiresPop) {
                closure_1(11354)(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
                const result1 = lockScrolling.set(false);
              } else {
                channelId(4296).runOnJS(closure_1_15)(tmp2.PIP);
                closure_1(11354)(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
                const obj4 = channelId(4296);
              }
            } else {
              const diff = wrapperDimensions.get().drawerHeight - wrapperDimensions.get().drawerY;
              if (wrapperOffset.get().y > 0.2 * diff) {
                closure_1(11354)(tmp12, { gestureActive: false });
                channelId(4296).runOnJS(dismissPanel)();
                const obj3 = channelId(4296);
              } else {
                closure_1(11354)(tmp12, { gestureActive: false, x: 0, y: 0 });
                const result2 = lockScrolling.set(false);
              }
            }
          } else {
            closure_1(11354)(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
            const result3 = lockScrolling.set(false);
          }
        }
        obj2 = mode;
      }
    };
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn5);
    fn6.__closure = { gestureState, mode, VoicePanelModes, calculatePIPPositionFromVelocity: VoicePanelPIPUtils.calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperDimensions, wrapperOffset, connected, runOnJS: ReanimatedRexport2.runOnJS, setMode, lockScrolling, MIN_DISMISS_MOVE_PERCENTAGE: 0.2, dismissPanel };
    fn6.__workletHash = 10456175839006;
    fn6.__initData = __initData3;
    let obj5 = { gestureState, mode, VoicePanelModes, calculatePIPPositionFromVelocity: VoicePanelPIPUtils.calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperDimensions, wrapperOffset, connected, runOnJS: ReanimatedRexport2.runOnJS, setMode, lockScrolling, MIN_DISMISS_MOVE_PERCENTAGE: 0.2, dismissPanel };
    const fn7 = function t() {
      let tmp = 0 !== wrapperOffset.get().y;
      if (tmp) {
        tmp = mode.get() === setMode.PANEL;
      }
      if (!tmp) {
        closure_1(11354)(gestureState, { cancel: false, active: false });
      }
    };
    const onEndResult = onTouchesCancelledResult.onEnd(fn6);
    fn7.__closure = { wrapperOffset, mode, VoicePanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState };
    fn7.__workletHash = 13223935476834;
    fn7.__initData = __initData2;
    return Gesture.Race(onStartResult, onEndResult.onFinalize(fn7));
  }, items4);
  let obj13 = channelId(4296);
  obj3 = { onBeginDrag: null, onEndDrag: null, onMomentumEnd: null, onScroll: null };
  function be(contentOffset) {
    const result = channelId.set(contentOffset.contentOffset.y);
    const result1 = closure_1.set(true);
  }
  be.__closure = { scrollPosition, dragScrolling };
  be.__workletHash = 7129316645562;
  be.__initData = __initData7;
  obj3.onBeginDrag = be;
  class Ce {
    constructor() {
      result = closure_1.set(false);
      return;
    }
  }
  Ce.__closure = { dragScrolling };
  Ce.__workletHash = 16780787183039;
  Ce.__initData = __initData8;
  obj3.onEndDrag = Ce;
  class Ee {
    constructor() {
      result = closure_1.set(false);
      return;
    }
  }
  Ee.__closure = { dragScrolling };
  Ee.__workletHash = 13772673540365;
  Ee.__initData = __initData9;
  obj3.onMomentumEnd = Ee;
  class Ae {
    constructor(arg0) {
      if (closure_1_22.get()) {
        obj3 = closure_1_23;
        if (closure_1_23.get()) {
          return;
        } else {
          obj4 = channelId;
          num5 = 0;
          if (channelId.get() < 0) {
            result = obj4.set(0);
          }
          value = obj4.get();
          tmp11 = globalThis;
          _Math7 = Math;
          num6 = 0.1;
          if (Math.abs(arg0.contentOffset.y - value) < 0.1) {
            return;
          } else {
            flag = true;
            result1 = obj3.set(true);
            tmp13 = closure_0;
            tmp14 = closure_2;
            obj5 = closure_0(closure_2[15]);
            tmp15 = closure_1_28;
            flag2 = false;
            tmp16 = obj5;
            num7 = 0;
            tmp17 = value;
            flag3 = false;
            scrollToResult = obj5.scrollTo(closure_1_28, 0, value, false);
            result2 = obj3.set(false);
          }
        }
      } else {
        obj = channelId;
        tmp = undefined;
        if (channelId.get() !== arg0.contentOffset.y) {
          tmp20 = computeViewableChunksFromScrollPosition;
          tmp22 = closure_1_17;
          value1 = obj.get();
          tmp23 = closure_1_21;
          if (typeof computeViewableChunksFromScrollPosition === "function") {
            tmp2 = globalThis;
            _Math = Math;
            tmp3 = VOICE_PANEL_CHUNK_DIVISOR;
            rounded = Math.ceil(closure_1_17.get().height / VOICE_PANEL_CHUNK_DIVISOR);
            _Math2 = Math;
            _Math3 = Math;
            num = 1;
            num2 = 0;
            _Math4 = Math;
            num3 = 2;
            num4 = 2;
            _Math5 = Math;
            sum = Math.max(Math.floor(value1 / rounded) - 1, 0) + VOICE_PANEL_CHUNK_DIVISOR + num4;
            bound = Math.min(sum, Math.ceil(tmp24 / rounded));
            obj = { start: null, end: null };
            _Math6 = Math;
            obj.start = Math.max(bound - VOICE_PANEL_CHUNK_DIVISOR - num4, 0);
            obj.end = bound;
            tmp = obj;
          } else {
            str = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        }
        result3 = obj.set(arg0.contentOffset.y);
        tmp8 = null;
        if (null != tmp) {
          tmp25 = closure_1;
          tmp26 = closure_2;
          tmp27 = closure_1_24;
          tmp28 = closure_1(closure_2[21])(closure_1_24, tmp);
        }
      }
      return;
    }
  }
  const tmp4 = useAnalyticsLocationsDefault;
  Ae.__closure = { lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: channelId(4296).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, viewableChunks: sharedValue3 };
  Ae.__workletHash = 3971019682754;
  Ae.__initData = __initData10;
  obj3.onScroll = Ae;
  let obj4 = { lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: channelId(4296).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, viewableChunks: sharedValue3 };
  let obj16 = channelId(4296);
  class Te {
    constructor() {
      return closure_1_13.get();
    }
  }
  Te.__closure = { mode };
  Te.__workletHash = 17369688194549;
  Te.__initData = __initData11;
  class Me {
    constructor(arg0, arg1) {
      tmp = null != arg1 && arg0 !== arg1;
      if (tmp) {
        tmp2 = VoicePanelModes;
        if (arg0 === VoicePanelModes.PANEL) {
          if (arg1 === tmp2.PIP) {
            tmp5 = closure_1_22;
            flag2 = false;
            result = closure_1_22.set(false);
          }
        }
        if (arg0 === tmp2.PIP) {
          tmp3 = closure_1_22;
          flag = true;
          result1 = closure_1_22.set(true);
        }
      }
      return;
    }
  }
  Me.__closure = { VoicePanelModes, lockScrolling: sharedValue1 };
  Me.__workletHash = 1687129825906;
  Me.__initData = __initData12;
  const animatedReaction3 = obj16.useAnimatedReaction(Te, Me);
  let obj17 = channelId(4262);
  const token = obj17.useToken(nativeDefault.modules.mobile.VOICE_PANEL_GUTTER);
  closure_129_31 = token;
  let obj18 = channelId(4296);
  class Ye {
    constructor() {
      tmp = closure_1_13.get() === VoicePanelModes.PIP;
      tmp2 = tmp;
      if (!tmp) {
        tmp3 = closure_1_10;
        tmp4 = null;
        tmp2 = null != closure_1_10.get();
      }
      str = "auto";
      if (tmp) {
        str = "none";
      }
      obj = { pointerEvents: str, scrollEnabled: null, showsVerticalScrollIndicator: null, scrollIndicatorInsets: null };
      tmp5 = !tmp2;
      obj.scrollEnabled = tmp5;
      value = closure_1_22.get();
      tmp7 = !value;
      if (!value) {
        tmp7 = tmp5;
      }
      obj.showsVerticalScrollIndicator = tmp7;
      rect = { top: null, bottom: null };
      tmp8 = closure_1(closure_2[26]);
      rect.top = tmp8(closure_1_14.get(), closure_1_31).height - closure_1_14.get().top;
      rect.bottom = closure_1_14.get().bottom;
      obj.scrollIndicatorInsets = rect;
      return obj;
    }
  }
  obj5 = { mode, VoicePanelModes, focused, lockScrolling: sharedValue1, calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault, safeArea, edgeGutter: token };
  Ye.__closure = obj5;
  Ye.__workletHash = 12205535325007;
  Ye.__initData = __initData13;
  const items5 = [sharedValue];
  const animatedProps = obj18.useAnimatedProps(Ye);
  const callback4 = noop.useCallback((arg0, arg1) => {
    const result = closure_1_21.set(arg1);
  }, items5);
  const animatedScrollHandler = obj13.useAnimatedScrollHandler(obj3);
  function ke() {
    value = mode.get();
    if (VoicePanelModes.PIP !== value) {
      if (VoicePanelModes.DISMISSED !== value) {
        if (connected.get()) {
          if (gestureState.get().active) {
            if (obj.get().requiresPop) {
              return 1;
            }
          }
          obj = gestureState;
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
  ke.__closure = { mode, VoicePanelModes, connected, gestureState: sharedValue4, wrapperDimensions, wrapperOffset, windowDimensions };
  ke.__workletHash = 8663151154349;
  ke.__initData = __initData14;
  const derivedValue = channelId(4296).useDerivedValue(ke);
  const tmp34 = useControlsLockDefault();
  _slicedToArray = tmp34;
  const items6 = [tmp34];
  const effect = noop.useEffect(() => {
    closure_3.lock();
  }, items6);
  const effect1 = noop.useEffect(() => closure_1(true), []);
  let tmp37 = null;
  if (tmp6[0]) {
    obj6 = { value: tmp4(AnalyticsLocationDefault.VOICE_PANEL).analyticsLocations, children: null };
    obj7 = { children: null };
    const items7 = [closure_21(tmp2(17096), {}), , ];
    const obj8 = { opacity: derivedValue, onPress: context.dismissPanel };
    items7[1] = closure_21(closure_70, obj8);
    obj9 = { style: tmp.accessibilityView, nativeID: null, accessibilityViewIsModal: true, layout: null, onAccessibilityEscape: null, children: null };
    let _HermesInternal = HermesInternal;
    tmp2(17097);
    obj9.nativeID = "voice-panel-ui-" + channelId;
    obj9.layout = layoutTransition;
    obj9.onAccessibilityEscape = tmp2(9508);
    const items8 = [closure_21(tmp2(17098), {}), , , ];
    const obj10 = { wrapperOffset, children: null };
    obj11 = { zIndex: 2, children: null };
    const obj12 = { wrapperOffset, gestureState: sharedValue4, layout: layoutTransition };
    obj11.children = closure_21(tmp2(17100), obj12);
    const items9 = [closure_21(tmp13(7156).LayerScope, obj11), ];
    obj13 = { gesture: memo1, children: null };
    const obj14 = { style: StyleSheet.absoluteFill, layout: layoutTransition, collapsable: false, children: null };
    let tmp2Result = tmp2(7073);
    const obj15 = { gesture: memo, children: null };
    obj16 = { layout: scrollViewLayoutTransition, ref: animatedRef, onScroll: animatedScrollHandler, onMomentumScrollEnd: NOOP, animatedProps, style: tmp.scrollView, onContentSizeChange: callback4, contentContainerStyle: tmp.scrollViewContent, scrollEventThrottle: 8.333333333333334, children: null };
    obj17 = { viewableChunks: sharedValue3 };
    const items10 = [closure_21(tmp2(17131), obj17), closure_21(tmp2(17160), {})];
    obj16.children = items10;
    obj15.children = lockScrolling(closure_32, obj16);
    obj14.children = closure_21(tmp13(6655).GestureDetector, obj15);
    obj13.children = closure_21(tmp2Result, obj14);
    items9[1] = closure_21(tmp13(6655).GestureDetector, obj13);
    obj10.children = items9;
    items8[1] = lockScrolling(AnimatedWrapper, obj10);
    items8[2] = closure_21(tmp2(17164), {});
    obj18 = { gestureState: sharedValue4 };
    items8[3] = closure_21(tmp2(17169), obj18);
    obj9.children = items8;
    items7[2] = lockScrolling(tmp2Result, obj9);
    obj7.children = items7;
    obj6.children = lockScrolling(tmp13(7156).LayerScope, obj7);
    tmp37 = closure_21(tmp13(7162).AnalyticsLocationProvider, obj6);
  }
  return tmp37;
});
export const REDUCED_MOTION_OPACITY_PHYSICS = obj3;