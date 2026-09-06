// === Module 17093: NOOP ===

// Module 17093 (NOOP)
import timestampDefault from "timestamp" /* 3 */;
import ThemesDefault from "Themes" /* 576 */;
import CONFIG_NEVER_ANIMATE from "CONFIG_NEVER_ANIMATE" /* 4974 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "getParticipants" /* 4576 */;
import closure_8 from "module_8290" /* 8290 */;
import closure_9 from "withEqualityFn" /* 4768 */;
import VoicePanelModes from "VoicePanelModes" /* 12273 */;
import { VoicePanelControlsModes } from "VoicePanelControlsModes" /* 12271 */;
import { isActivityParticipant } from "ParticipantTypes" /* 4581 */;
import { POP_RESISTANCE } from "MIN_PAN_GESTURE_MOVE" /* 12274 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import isMetaQuest from "isMetaQuest" /* 1608 */;
import importDefaultResult from "module_4296" /* 4296 */;

require = arg1;
function NOOP() {

}
function log() {
  const items = [...HermesBuiltin.copyRestArgs()];
  log.log.apply(items);
}
function AnimatedWrapper(children) {
  const wrapperOffset = children.wrapperOffset;
  let height;
  dependencyMap = undefined;
  let wrapperDimensions;
  let connected;
  let controlsSpecs;
  let focused;
  let mode;
  let preJoinContentSize;
  let safeArea;
  let windowDimensions;
  let useReducedMotion;
  let derivedValue;
  let pIPState;
  let animatedStyle;
  let animatedStyle1;
  obj = wrapperOffset(9679);
  height = obj.useGlobalStatusIndicatorState().height;
  const tmp3 = callback3();
  dependencyMap = tmp3;
  obj1 = connected;
  const context = connected.useContext(height(12272));
  wrapperDimensions = context.wrapperDimensions;
  connected = context.connected;
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  mode = context.mode;
  preJoinContentSize = context.preJoinContentSize;
  safeArea = context.safeArea;
  windowDimensions = context.windowDimensions;
  useReducedMotion = context.useReducedMotion;
  obj2 = wrapperOffset(4296);
  const fn = function o() {
    return controlsSpecs.get().height;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 3576504626753;
  fn.__initData = closure_57;
  derivedValue = obj2.useDerivedValue(fn);
  let obj3 = wrapperOffset(17092);
  pIPState = obj3.usePIPState();
  let obj4 = wrapperOffset(4296);
  const fn2 = function l() {
    return { modeToSet: mode.get(), connected: connected.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, safeArea: safeArea.get(), focused: focused.get(), pipState: pIPState, controlsHeight: derivedValue.get(), preJoinContentSize: preJoinContentSize.get(), globalStatusIndicatorHeight: height };
  };
  fn2.__closure = { mode, connected, windowDimensions, safeArea, focused, pipState: pIPState, controlsHeight: derivedValue, preJoinContentSize, globalStatusIndicatorHeight: height };
  fn2.__workletHash = 6530348778352;
  fn2.__initData = closure_58;
  const fn3 = function s(safeAreaState, windowHeight) {
    obj = wrapperOffset(closure_2[20]);
    if (!obj.cheapWorkletShallowEqual(safeAreaState, windowHeight)) {
      ({ modeToSet, connected, windowWidth, windowHeight, safeArea } = safeAreaState);
      if (modeToSet !== animatedStyle1.PIP) {
        let tmp9 = null == windowHeight;
        if (!tmp9) {
          tmp9 = windowHeight === windowHeight.windowHeight && windowWidth === windowHeight.windowWidth && safeArea.top === windowHeight.safeArea.top && safeArea.bottom === windowHeight.safeArea.bottom && safeArea.left === windowHeight.safeArea.left && safeArea.right === windowHeight.safeArea.right;
          const tmp10 = windowHeight === windowHeight.windowHeight && windowWidth === windowHeight.windowWidth && safeArea.top === windowHeight.safeArea.top && safeArea.bottom === windowHeight.safeArea.bottom && safeArea.left === windowHeight.safeArea.left && safeArea.right === windowHeight.safeArea.right;
        }
        const value = wrapperDimensions.get();
        ({ drawerX, drawerY } = value);
        const diff = windowHeight - tmp7;
        if (modeToSet === tmp8.PANEL) {
          if (connected) {
            obj = { drawerWidth: null, drawerHeight: null, drawerX: 0, drawerY: 0, animated: null, mode: null };
            obj[0] = windowWidth;
            obj[1] = diff;
            obj[4] = tmp9;
            obj[5] = modeToSet;
            height(tmp2[21])(tmp11, obj);
            height(tmp2[21])(wrapperOffset, { gestureActive: false });
          } else {
            let tmpResult = tmp(tmp2[29]);
            obj = { windowWidth: null, connected: null, safeAreaLeft: null, safeAreaRight: null };
            obj[0] = windowWidth;
            obj[1] = connected;
            ({ left: obj5[2], right: obj5[3] } = safeArea);
            const maxPanelWidth = tmpResult.getMaxPanelWidth(obj);
            tmpResult = tmp(tmp2[29]);
            const panelX = tmpResult.getPanelX(windowWidth, maxPanelWidth);
            const _Math = Math;
            const tmp23 = height(tmp2[30]);
            obj1 = { drawerWidth: null, drawerHeight: null, drawerX: null, drawerY: null, animated: null, mode: null };
            obj1[0] = maxPanelWidth;
            obj1[1] = diff;
            obj1[2] = panelX;
            obj1[3] = height(tmp2[30])(Math.max(diff - tmp6 - tmp5 - safeArea.bottom, diff - 0.8 * diff));
            obj1[4] = tmp9;
            obj1[5] = modeToSet;
            height(tmp2[21])(tmp11, obj1);
            const tmp23Result = height(tmp2[30])(Math.max(diff - tmp6 - tmp5 - safeArea.bottom, diff - 0.8 * diff));
          }
        } else if (modeToSet === tmp8.DISMISSED) {
          const tmp32 = height(tmp2[21]);
          if (connected) {
            obj2 = { mode: null };
            obj2[0] = modeToSet;
            tmp32(tmp11, obj2);
            let tmp16 = tmp31;
          } else {
            const obj3 = { drawerY: null, mode: null };
            obj3[0] = windowDimensions.get().height + 60;
            obj3[1] = modeToSet;
            tmp32(tmp11, obj3);
            tmp16 = tmp31;
          }
          tmp16(tmp2[21])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
        }
      }
    }
  };
  obj = { cheapWorkletShallowEqual: wrapperOffset(9495).cheapWorkletShallowEqual, VoicePanelModes: animatedStyle1, wrapperDimensions, updateSharedValueIfChanged: height(11354), wrapperOffset, getMaxPanelWidth: wrapperOffset(17080).getMaxPanelWidth, getPanelX: wrapperOffset(17080).getPanelX, roundToNearestPixel: height(10993), windowDimensions };
  fn3.__closure = obj;
  fn3.__workletHash = 4997805261566;
  fn3.__initData = closure_59;
  const animatedReaction = obj4.useAnimatedReaction(fn2, fn3);
  let obj6 = wrapperOffset(4296);
  const fn4 = function b() {
    let value = useReducedMotion.get();
    let gestureActive = !value;
    if (!value) {
      gestureActive = wrapperDimensions.get().animated;
    }
    if (!gestureActive) {
      gestureActive = wrapperOffset.get().gestureActive;
    }
    obj = wrapperOffset;
    value = wrapperOffset.get();
    ({ gestureActive: gestureActive2, y } = value);
    const value1 = wrapperDimensions.get();
    ({ drawerY, drawerX } = value1);
    const value2 = connected.get();
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
          tmp2 = closure_7;
          tmp3 = closure_1_15;
          tmp = closure_7.get() !== closure_1_15.DISMISSED;
        }
        if (tmp) {
          tmp4 = closure_1_0;
          tmp5 = closure_1_2;
          obj = closure_1_0(closure_1_2[15]);
          tmp6 = closure_1_1;
          tmp7 = obj.runOnJS(closure_1_1(closure_1_2[31]).updateSourceTrackingView)();
        }
        return;
      }
    }
    obj = { mode, VoicePanelModes: animatedStyle1, runOnJS: wrapperOffset(closure_2[15]).runOnJS, updateSourceTrackingView: height(closure_2[31]).updateSourceTrackingView };
    VoicePanelUITsx31.__closure = obj;
    VoicePanelUITsx31.__workletHash = 2447720515661;
    VoicePanelUITsx31.__initData = closure_1_61;
    obj2 = wrapperOffset(closure_2[12]);
    let str = "animate-never";
    let str2 = "animate-never";
    if (gestureActive) {
      str2 = "animate-always";
    }
    obj = { translateX: obj2.withSpring(sum1, obj.get().gestureActive ? closure_1_17 : closure_1_29, str2, VoicePanelUITsx31) };
    const items = [obj, ];
    const tmp11 = wrapperOffset;
    const tmp12 = closure_2;
    const tmp13 = obj.get().gestureActive ? closure_1_17 : closure_1_29;
    const tmp11Result = wrapperOffset(closure_2[12]);
    if (gestureActive) {
      str = "animate-always";
    }
    obj1 = { transform: null };
    obj2 = { translateY: tmp11Result.withSpring(sum, obj.get().gestureActive ? closure_1_17 : closure_1_29, str, VoicePanelUITsx31) };
    items[1] = obj2;
    obj1[0] = items;
    return obj1;
  };
  obj = { useReducedMotion, wrapperDimensions, wrapperOffset, connected, mode, VoicePanelModes: animatedStyle1, runOnJS: wrapperOffset(4296).runOnJS, updateSourceTrackingView: height(9610).updateSourceTrackingView, withSpring: wrapperOffset(4974).withSpring, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_17, DRAWER_SIZE_PHYSICS: obj2 };
  fn4.__closure = obj;
  fn4.__workletHash = 62808828087;
  fn4.__initData = closure_60;
  animatedStyle = obj6.useAnimatedStyle(fn4);
  let obj8 = wrapperOffset(4296);
  class M {
    constructor() {
      obj = mode;
      obj2 = connected;
      value = mode.get();
      value1 = connected.get();
      if (typeof closure_1_56 !== "function") {
        str3 = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      tmp3 = closure_15;
      if (value === closure_15.PIP) {
        num = closure_12;
      } else {
        num = 0;
        if (!value1) {
          num = useReducedMotion;
        }
      }
      obj = { width: wrapperDimensions.get().drawerWidth, height: wrapperDimensions.get().drawerHeight, borderRadius: null, pointerEvents: null, backgroundColor: null };
      obj4 = wrapperOffset(closure_2[12]);
      obj[2] = obj4.withSpring(num, windowDimensions);
      str = "none";
      if (obj.get() === tmp3.PANEL) {
        str = "auto";
      }
      obj[3] = str;
      str2 = "transparent";
      if (!obj2.get()) {
        tmp4 = closure_2;
        str2 = closure_2.maskDefaultBackground.backgroundColor;
      }
      obj[4] = str2;
      return obj;
    }
  }
  obj1 = { computeBorderRadii, mode, connected, wrapperDimensions, withSpring: wrapperOffset(4974).withSpring, BORDER_RADIUS_PHYSICS: windowDimensions, VoicePanelModes: animatedStyle1, styles: tmp3 };
  M.__closure = obj1;
  M.__workletHash = 4435209772815;
  M.__initData = closure_62;
  animatedStyle1 = obj8.useAnimatedStyle(M);
  if (!wrapperOffset(7603).isStable) {
    let tmpResult = tmp(4296);
    class Y {
      constructor() {
        return windowDimensions.get();
      }
    }
    obj2 = { windowDimensions: null };
    obj2[0] = windowDimensions;
    Y.__closure = obj2;
    Y.__workletHash = 8189060666389;
    Y.__initData = closure_63;
    const fn5 = function y(arg0) {
      obj = wrapperOffset(closure_2[15]);
      wrapperOffset(closure_2[15]).runOnJS(closure_25)("Window dimensions changed:", JSON.stringify(arg0));
    };
    obj3 = { runOnJS: null, log: null };
    obj3[0] = tmp(4296).runOnJS;
    obj3[1] = log;
    fn5.__closure = obj3;
    fn5.__workletHash = 5206450827682;
    fn5.__initData = closure_64;
    const animatedReaction1 = tmpResult.useAnimatedReaction(Y, fn5);
    tmpResult = tmp(4296);
    class H {
      constructor() {
        return wrapperDimensions.get();
      }
    }
    obj4 = { wrapperDimensions: null };
    obj4[0] = wrapperDimensions;
    H.__closure = obj4;
    H.__workletHash = 4862999942291;
    H.__initData = closure_65;
    class T {
      constructor(arg0) {
        obj = wrapperOffset(closure_2[15]);
        runOnJSResult = obj.runOnJS(closure_25);
        tmpResult = runOnJSResult("Wrapper dimensions changed:", JSON.stringify(children));
        return;
      }
    }
    const obj5 = { runOnJS: null, log: null };
    obj5[0] = tmp(4296).runOnJS;
    obj5[1] = log;
    T.__closure = obj5;
    T.__workletHash = 7760779241631;
    T.__initData = closure_66;
    const animatedReaction2 = tmpResult.useAnimatedReaction(H, T);
  }
  let items = [tmp3.wrapper, animatedStyle1, animatedStyle];
  const memo = obj1.useMemo(() => ({ wrapperRootStyles: closure_2.wrapper, wrapperTransformStyles: animatedStyle, wrapperSurfaceStyles: animatedStyle1 }), items);
  ({ wrapperRootStyles, wrapperTransformStyles, wrapperSurfaceStyles } = memo);
  obj6 = { style: wrapperRootStyles, pointerEvents: "box-none", children: null };
  let tmp4Result = tmp4(7073);
  const obj7 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: null };
  tmp4Result = tmp4(7073);
  obj8 = { style: wrapperSurfaceStyles, layout: layoutTransition, children: children.children };
  obj7[2] = callback2(height(7073), obj8);
  obj6[2] = callback2(tmp4Result, obj7);
  return callback2(tmp4Result, obj6);
}
let c4 = importAllResult;
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ Pressable: closure_6, ScrollView } = get_ActivityIndicator);
({ BORDER_RADIUS_PHYSICS: c10, DEFAULT_BORDER_RADIUS } = VoicePanelModes);
const DEFAULT_BORDER_RADIUS_PIP = VoicePanelModes.DEFAULT_BORDER_RADIUS_PIP;
({ DRAWER_SPRING_PHYSICS, IS_IOS: map1, MODE_CHANGE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR } = VoicePanelModes);
VoicePanelModes = VoicePanelModes.VoicePanelModes;
const LAYOUT_PHYSICS = VoicePanelModes.LAYOUT_PHYSICS;
let closure_17 = VoicePanelModes.DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE;
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let closure_24 = new timestampDefault("VoicePanelUI");
function layoutTransition(originX) {
  obj = { animations: null, initialValues: null };
  obj = { originX: CONFIG_NEVER_ANIMATE.withSpring(originX.targetOriginX, LAYOUT_PHYSICS, "animate-always"), originY: null, width: null, height: null };
  const obj3 = CONFIG_NEVER_ANIMATE;
  obj[1] = CONFIG_NEVER_ANIMATE.withSpring(originX.targetOriginY, LAYOUT_PHYSICS, "animate-always");
  const obj4 = CONFIG_NEVER_ANIMATE;
  obj[2] = CONFIG_NEVER_ANIMATE.withSpring(originX.targetWidth, LAYOUT_PHYSICS, "animate-always");
  const obj5 = CONFIG_NEVER_ANIMATE;
  obj[3] = CONFIG_NEVER_ANIMATE.withSpring(originX.targetHeight, LAYOUT_PHYSICS, "animate-always");
  obj[0] = obj;
  obj[1] = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight };
  return obj;
}
let obj = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, LAYOUT_PHYSICS };
layoutTransition.__closure = obj;
layoutTransition.__workletHash = 16454235842679;
layoutTransition.__initData = { code: "function layoutTransition_VoicePanelUITsx1(values){const{withSpring,LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'animate-always'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'animate-always'),width:withSpring(values.targetWidth,LAYOUT_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,LAYOUT_PHYSICS,'animate-always')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
obj = {};
let merged = Object.assign(LAYOUT_PHYSICS);
obj.damping = 0;
function scrollViewLayoutTransition(originX) {
  obj = { animations: null, initialValues: null };
  obj = { originX: CONFIG_NEVER_ANIMATE.withSpring(originX.targetOriginX, LAYOUT_PHYSICS, "animate-always"), originY: null, width: null, height: null };
  const obj3 = CONFIG_NEVER_ANIMATE;
  obj[1] = CONFIG_NEVER_ANIMATE.withSpring(originX.targetOriginY, LAYOUT_PHYSICS, "animate-always");
  const obj4 = CONFIG_NEVER_ANIMATE;
  obj[2] = CONFIG_NEVER_ANIMATE.withSpring(originX.targetWidth, obj, "animate-always");
  const obj5 = CONFIG_NEVER_ANIMATE;
  obj[3] = CONFIG_NEVER_ANIMATE.withSpring(originX.targetHeight, obj, "animate-always");
  obj[0] = obj;
  obj[1] = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight };
  return obj;
}
const tmp5 = new timestampDefault("VoicePanelUI");
scrollViewLayoutTransition.__closure = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, LAYOUT_PHYSICS, EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS: obj };
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
let obj4 = { accessibilityView: null, wrapper: null, maskDefaultBackground: null, scrollView: null, scrollViewContent: null, shade: null, shadePressable: null };
let obj5 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj5.overflow = "hidden";
obj4[0] = obj5;
createCacheKey = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.alignItems = "flex-start";
createCacheKey.zIndex = 1;
obj4[1] = createCacheKey;
let obj1 = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, LAYOUT_PHYSICS, EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS: obj };
obj4[2] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
let obj8 = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj8.borderTopLeftRadius = DEFAULT_BORDER_RADIUS;
obj8.borderTopRightRadius = DEFAULT_BORDER_RADIUS;
obj4[3] = obj8;
obj4[4] = { flexGrow: 1, flexShrink: 0 };
let obj7 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
obj4[5] = { backgroundColor: ThemesDefault.colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
obj4[6] = { flexGrow: 1 };
let closure_31 = createCacheKey.createStyles(obj4);
let obj9 = { backgroundColor: ThemesDefault.colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
let closure_32 = importDefaultResult.createAnimatedComponent(ScrollView);
let closure_33 = isMetaQuest.isMetaQuest();
let closure_34 = { code: "function VoicePanelUITsx4(){const{gestureState,connected,mode}=this.__closure;return{gestureActive:gestureState.get().active,connected:connected.get(),mode:mode.get()};}" };
let closure_35 = { code: "function VoicePanelUITsx5(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,runOnJS,setPanelFullscreen,setPanelOpen,setPanelPIP}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{gestureActive:gestureActive,connected:connected,mode:mode}=props;if(!connected||gestureActive||mode!==VoicePanelModes.PANEL){runOnJS(setPanelFullscreen)(false);}else{runOnJS(setPanelFullscreen)(true);}if(mode===VoicePanelModes.PANEL){runOnJS(setPanelOpen)(true);}else{runOnJS(setPanelOpen)(false);}if(mode===VoicePanelModes.PIP){runOnJS(setPanelPIP)(true);}else{runOnJS(setPanelPIP)(false);}}" };
let closure_36 = { code: "function VoicePanelUITsx6(){const{mode}=this.__closure;return mode.get();}" };
let closure_37 = { code: "function VoicePanelUITsx7(mode,previous){const{VoicePanelModes,updateSharedValueIfChanged,gestureState}=this.__closure;if(mode===VoicePanelModes.DISMISSED&&previous!==VoicePanelModes.DISMISSED){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}}" };
let closure_38 = { code: "function VoicePanelUITsx8(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
let closure_39 = { code: "function VoicePanelUITsx9(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
let closure_40 = { code: "function VoicePanelUITsx10(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(!connected.get())return;if(mode.get()===VoicePanelModes.PIP){}else if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}" };
let closure_41 = { code: "function VoicePanelUITsx11(){const{wrapperOffset,mode,VoicePanelModes,updateSharedValueIfChanged,gestureState}=this.__closure;const pendingModeChange=wrapperOffset.get().y!==0&&mode.get()===VoicePanelModes.PANEL;if(!pendingModeChange){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}}" };
let closure_42 = { code: "function VoicePanelUITsx12(event){const{gestureState,mode,VoicePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,connected,runOnJS,setMode,lockScrolling,MIN_DISMISS_MOVE_PERCENTAGE,dismissPanel}=this.__closure;if(gestureState.get().cancel)return;const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(mode.get()===VoicePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else if(mode.get()===VoicePanelModes.PANEL){if(velocityY>0){if(connected.get()){if(!gestureState.get().requiresPop){runOnJS(setMode)(VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}else{const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;const dismissThreshold=panelHeight*MIN_DISMISS_MOVE_PERCENTAGE;if(wrapperOffset.get().y>dismissThreshold){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(dismissPanel)();return;}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}" };
let closure_43 = { code: "function VoicePanelUITsx13(_e){const{lockScrolling,updateSharedValueIfChanged,gestureState,wrapperOffset}=this.__closure;lockScrolling.set(false);updateSharedValueIfChanged(gestureState,{cancel:false,active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});console.log('onTouchesCancelled');}" };
let closure_44 = { code: "function VoicePanelUITsx14(event){const{gestureState,mode,VoicePanelModes,connected,lockScrolling,scrollPosition,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(gestureState.get().cancel)return;if(mode.get()!==VoicePanelModes.PIP){const minYOffset=0;let newYOffset=(gestureState.get().absoluteYStart-event.absoluteY)*-1;if(connected.get()&&!gestureState.get().requiresPop&&newYOffset<=minYOffset){gestureState.set({...gestureState.get(),requiresPop:true});}if(lockScrolling.get()&&newYOffset<minYOffset){lockScrolling.set(false);}else if(!lockScrolling.get()&&scrollPosition.get()<=0){lockScrolling.set(true);}if(gestureState.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{gestureState.set({...gestureState.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(gestureState.get().absoluteXStart-event.absoluteX)*-1,y:(gestureState.get().absoluteYStart-event.absoluteY)*-1});}}" };
let closure_45 = { code: "function VoicePanelUITsx15(event,manager){const{State,gestureState,mode,VoicePanelModes,scrollPosition,isQuest,MIN_GESTURE_MOVE,focused,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset,lockScrolling}=this.__closure;if(event.state!==State.BEGAN||gestureState.get().active||gestureState.get().cancel)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=gestureState.get().absoluteYStart-absoluteY;const xDiff=gestureState.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;let startGesture=false;if(mode.get()===VoicePanelModes.PANEL){var _focused$get;const scrollPos=Math.floor(scrollPosition.get());if(yDiff<0&&scrollPos<=0){if(isQuest){startGesture=absoluteMovement>MIN_GESTURE_MOVE;}else{startGesture=true;}}else if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!=null&&isNotPullDownGesture){manager.fail();}}else if(mode.get()===VoicePanelModes.PIP&&absoluteMovement>MIN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true});gestureState.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY+scrollPosition.get(),cancel:false,active:true,requiresPop:gestureState.get().requiresPop});lockScrolling.set(true);manager.activate();}else{updateSharedValueIfChanged(gestureState,{absoluteYStart:absoluteY,absoluteXStart:absoluteX});}}" };
let closure_46 = { code: "function VoicePanelUITsx16(event){const{gestureState,updateSharedValueIfChanged,wrapperOffset,connected,mode,VoicePanelModes}=this.__closure;if(gestureState.get().cancel)return;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});gestureState.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:false,requiresPop:connected.get()&&mode.get()===VoicePanelModes.PANEL});}" };
let closure_47 = { code: "function VoicePanelUITsx17(event,manager){const{IS_IOS,windowDimensions,safeArea,gestureState,isFocusedVideoZoomed,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes}=this.__closure;const touch=event.allTouches[0];if(IS_IOS&&touch!=null&&touch.absoluteY>windowDimensions.get().height-safeArea.get().bottom){gestureState.set({...gestureState.get(),cancel:true});manager.activate();return;}if(isFocusedVideoZoomed.get()||mode.get()===VoicePanelModes.PANEL&&controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){gestureState.set({...gestureState.get(),cancel:true});manager.fail();}}" };
let closure_48 = { code: "function onBeginDrag_VoicePanelUITsx18(event){const{scrollPosition,dragScrolling}=this.__closure;scrollPosition.set(event.contentOffset.y);dragScrolling.set(true);}" };
let closure_49 = { code: "function onEndDrag_VoicePanelUITsx19(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
let closure_50 = { code: "function onMomentumEnd_VoicePanelUITsx20(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
let closure_51 = { code: "function onScroll_VoicePanelUITsx21(event){const{lockScrolling,isSnappingBack,scrollPosition,scrollTo,scrollerRef,computeViewableChunksFromScrollPosition,windowDimensions,scrollableRegionSize,updateSharedValueIfChanged,viewableChunks}=this.__closure;if(lockScrolling.get()){if(isSnappingBack.get()){return;}if(scrollPosition.get()<0){scrollPosition.set(0);}const targetScrollPosition=scrollPosition.get();if(Math.abs(event.contentOffset.y-targetScrollPosition)<0.1){return;}isSnappingBack.set(true);scrollTo(scrollerRef,0,targetScrollPosition,false);isSnappingBack.set(false);}else{let newViewableChunks;if(scrollPosition.get()!==event.contentOffset.y){newViewableChunks=computeViewableChunksFromScrollPosition(scrollPosition.get(),windowDimensions.get().height,scrollableRegionSize.get());}scrollPosition.set(event.contentOffset.y);newViewableChunks!=null&&updateSharedValueIfChanged(viewableChunks,newViewableChunks);}}" };
let closure_52 = { code: "function VoicePanelUITsx22(){const{mode}=this.__closure;return mode.get();}" };
let closure_53 = { code: "function VoicePanelUITsx23(mode,previous){const{VoicePanelModes,lockScrolling}=this.__closure;if(previous==null||mode===previous)return;if(mode===VoicePanelModes.PANEL&&previous===VoicePanelModes.PIP){lockScrolling.set(false);}else if(mode===VoicePanelModes.PIP){lockScrolling.set(true);}}" };
let closure_54 = { code: "function VoicePanelUITsx24(){const{mode,VoicePanelModes,focused,lockScrolling,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter}=this.__closure;const isPIPMode=mode.get()===VoicePanelModes.PIP;const disableScroll=isPIPMode||focused.get()!=null;return{pointerEvents:isPIPMode?'none':'auto',scrollEnabled:!disableScroll,showsVerticalScrollIndicator:lockScrolling.get()?false:!disableScroll,scrollIndicatorInsets:{top:calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height-safeArea.get().top,bottom:safeArea.get().bottom}};}" };
let closure_55 = { code: "function VoicePanelUITsx25(){const{mode,VoicePanelModes,connected,gestureState,wrapperDimensions,wrapperOffset,windowDimensions}=this.__closure;switch(mode.get()){case VoicePanelModes.PIP:case VoicePanelModes.DISMISSED:return 0;default:{if(connected.get()&&gestureState.get().active&&gestureState.get().requiresPop){return 1;}const drawerTop=wrapperDimensions.get().drawerY+wrapperOffset.get().y;const screenSize=windowDimensions.get().height;const percentage=(screenSize-drawerTop)/screenSize;return Math.min(Math.max(percentage,0),1);}}}" };
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
let closure_57 = { code: "function VoicePanelUITsx27(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().height;}" };
let closure_58 = { code: "function VoicePanelUITsx28(){const{mode,connected,windowDimensions,safeArea,focused,pipState,controlsHeight,preJoinContentSize,globalStatusIndicatorHeight}=this.__closure;return{modeToSet:mode.get(),connected:connected.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get(),focused:focused.get(),pipState:pipState,controlsHeight:controlsHeight.get(),preJoinContentSize:preJoinContentSize.get(),globalStatusIndicatorHeight:globalStatusIndicatorHeight};}" };
let closure_59 = { code: "function VoicePanelUITsx29(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperDimensions,updateSharedValueIfChanged,wrapperOffset,getMaxPanelWidth,getPanelX,roundToNearestPixel,windowDimensions}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{modeToSet:modeToSet,connected:connected,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,pipState:pipState,controlsHeight:controlsHeight,preJoinContentSize:preJoinContentSize,globalStatusIndicatorHeight:globalStatusIndicatorHeight}=props;if(modeToSet===VoicePanelModes.PIP&&pipState.id==null){return;}const animated=previous!=null?windowHeight===previous.windowHeight&&windowWidth===previous.windowWidth&&safeArea.top===previous.safeArea.top&&safeArea.bottom===previous.safeArea.bottom&&safeArea.left===previous.safeArea.left&&safeArea.right===previous.safeArea.right:true;let{drawerX:drawerX,drawerY:drawerY}=wrapperDimensions.get();const availableHeight=windowHeight-globalStatusIndicatorHeight;if(modeToSet===VoicePanelModes.PANEL){if(connected){drawerX=0;drawerY=0;updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else{const drawerWidth=getMaxPanelWidth({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeArea.left,safeAreaRight:safeArea.right});drawerX=getPanelX(windowWidth,drawerWidth);drawerY=roundToNearestPixel(Math.max(availableHeight-preJoinContentSize-controlsHeight-safeArea.bottom,availableHeight-0.8*availableHeight));updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:drawerWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});}}else if(modeToSet===VoicePanelModes.DISMISSED){if(connected){updateSharedValueIfChanged(wrapperDimensions,{mode:modeToSet});}else{updateSharedValueIfChanged(wrapperDimensions,{drawerY:windowDimensions.get().height+60,mode:modeToSet});}updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}}" };
let closure_60 = { code: "function VoicePanelUITsx30(){const{useReducedMotion,wrapperDimensions,wrapperOffset,connected,mode,VoicePanelModes,runOnJS,updateSourceTrackingView,withSpring,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,DRAWER_SIZE_PHYSICS}=this.__closure;const animateXY=!useReducedMotion.get()&&wrapperDimensions.get().animated||wrapperOffset.get().gestureActive;const{gestureActive:gestureActive,y:offsetY,x:offsetX}=wrapperOffset.get();let{drawerY:y,drawerX:x}=wrapperDimensions.get();const applyGestureOffset=!connected.get()&&(gestureActive||offsetY!==0);if(applyGestureOffset){y+=Math.max(offsetY,0);x+=offsetX;}const updateSourceTrackingViewHelper=function(finished){if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}};return{transform:[{translateX:withSpring(x,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},{translateY:withSpring(y,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)}]};}" };
let closure_61 = { code: "function VoicePanelUITsx31(finished){const{mode,VoicePanelModes,runOnJS,updateSourceTrackingView}=this.__closure;if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}}" };
let closure_62 = { code: "function VoicePanelUITsx32(){const{computeBorderRadii,mode,connected,wrapperDimensions,withSpring,BORDER_RADIUS_PHYSICS,VoicePanelModes,styles}=this.__closure;const borderRadius=computeBorderRadii({mode:mode.get(),connected:connected.get()});return{width:wrapperDimensions.get().drawerWidth,height:wrapperDimensions.get().drawerHeight,borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS),pointerEvents:mode.get()===VoicePanelModes.PANEL?'auto':'none',backgroundColor:connected.get()?'transparent':styles.maskDefaultBackground.backgroundColor};}" };
let closure_63 = { code: "function VoicePanelUITsx33(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
let closure_64 = { code: "function VoicePanelUITsx34(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Window dimensions changed:',JSON.stringify(value));}" };
let closure_65 = { code: "function VoicePanelUITsx35(){const{wrapperDimensions}=this.__closure;return wrapperDimensions.get();}" };
let closure_66 = { code: "function VoicePanelUITsx36(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Wrapper dimensions changed:',JSON.stringify(value));}" };
let closure_68 = { mass: 0.6, damping: 30, stiffness: 400, overshootClamping: true };
let closure_69 = { code: "function VoicePanelUITsx37(){const{withSpring,opacity,DrawerShadeOpacityPhysics}=this.__closure;return{opacity:withSpring(opacity.get(),DrawerShadeOpacityPhysics),pointerEvents:opacity.get()===0?'none':'auto'};}" };
let closure_70 = importAllResult.memo((onPress) => {
  const opacity = onPress.opacity;
  const tmp = callback3();
  obj = opacity(4296);
  const fn = function o() {
    obj = { opacity: opacity(closure_1_2[12]).withSpring(opacity.get(), closure_1_68), pointerEvents: null };
    let str = "auto";
    if (0 === opacity.get()) {
      str = "none";
    }
    obj[1] = str;
    return obj;
  };
  obj = { withSpring: opacity(4974).withSpring, opacity, DrawerShadeOpacityPhysics: closure_68 };
  fn.__closure = obj;
  fn.__workletHash = 11475343199430;
  fn.__initData = closure_69;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: callback2(closure_6, obj1) };
  items = [StyleSheet.absoluteFill, tmp.shade, animatedStyle];
  return callback2(importDefaultResult.View, obj);
});
const memoResult = importAllResult.memo(function VoicePanelUI() {
  let tmp = token();
  const context = callback2.useContext(dragScrolling(callback[17]));
  ({ scrollPosition, dragScrolling, channelId } = context);
  scrollPosition = channelId;
  const tmp6 = callback(callback2.useState(false), 2);
  dragScrolling = tmp6[1];
  callback = callback2.useRef(-1);
  const items = [channelId];
  callback = callback2.useCallback((arg0) => {
    closure_0 = arg0;
    clearTimeout(callback.current);
    scrollPosition(callback[36]).batchUpdates(() => {
      if (closure_0) {
        const _setTimeout = setTimeout;
        closure_1_2.current = setTimeout(() => {
          const state = closure_2_9.getState();
          const result = state.setChannelPanelFullscreen(closure_1_0, closure_0);
          const state1 = closure_2_8.getState();
          const freezeLock = state1.requestFreezeLock({ lockEnabled: closure_0, key: "voice-panel-freeze-" + closure_1_0 });
        }, 1000);
      } else {
        let state = dismissToPIPGestureRef.getState();
        let result = state.setChannelPanelFullscreen(closure_0, tmp);
        let state1 = dismissPanel.getState();
        obj = { lockEnabled: null, key: null };
        obj[0] = tmp;
        const _HermesInternal = HermesInternal;
        obj[1] = "voice-panel-freeze-" + closure_0;
        let freezeLock = state1.requestFreezeLock(obj);
      }
    });
  }, items);
  const layoutEffect = callback2.useLayoutEffect(() => () => {
    clearTimeout(ref.current);
  }, []);
  const items1 = [channelId];
  const callback1 = callback2.useCallback((arg0) => {
    const state = dismissToPIPGestureRef.getState();
    state.setChannelPanelOpen(scrollPosition, arg0);
  }, items1);
  const items2 = [channelId];
  callback2 = callback2.useCallback((arg0) => {
    const state = dismissToPIPGestureRef.getState();
    state.setChannelPanelPIP(scrollPosition, arg0);
  }, items2);
  callback = callback1;
  let channelId2;
  let connected;
  let controlsSpecs;
  let dismissPanel;
  let dismissToPIPGestureRef;
  let focused;
  let hideControls;
  let isFocusedVideoZoomed;
  let mode;
  let safeArea;
  let setMode;
  let showControls;
  let windowDimensions;
  let wrapperDimensions;
  let wrapperOffset;
  closure_20 = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let first;
  closure_26 = undefined;
  let memo;
  let animatedRef;
  let sharedValue4;
  let callback3;
  token = undefined;
  const context1 = callback2.useContext(dragScrolling(callback[17]));
  channelId2 = context1.channelId;
  connected = context1.connected;
  controlsSpecs = context1.controlsSpecs;
  dismissPanel = context1.dismissPanel;
  dismissToPIPGestureRef = context1.dismissToPIPGestureRef;
  focused = context1.focused;
  hideControls = context1.hideControls;
  isFocusedVideoZoomed = context1.isFocusedVideoZoomed;
  mode = context1.mode;
  safeArea = context1.safeArea;
  setMode = context1.setMode;
  showControls = context1.showControls;
  windowDimensions = context1.windowDimensions;
  wrapperDimensions = context1.wrapperDimensions;
  wrapperOffset = context1.wrapperOffset;
  let tmp12 = dragScrolling(callback[18])();
  closure_20 = tmp12;
  obj = scrollPosition(callback[15]);
  sharedValue = obj.useSharedValue(0);
  obj1 = scrollPosition(callback[15]);
  sharedValue1 = obj1.useSharedValue(false);
  obj2 = scrollPosition(callback[15]);
  sharedValue2 = obj2.useSharedValue(false);
  let obj3 = scrollPosition(callback[15]);
  obj = { start: 0, end: safeArea };
  sharedValue3 = obj3.useSharedValue(obj);
  const tmp18 = callback(callback2.useState(true), 2);
  first = tmp18[0];
  closure_26 = tmp18[1];
  memo = callback2.useMemo(() => {
    const Gesture = scrollPosition(callback[19]).Gesture;
    return Gesture.Native();
  }, []);
  let obj5 = scrollPosition(callback[15]);
  animatedRef = obj5.useAnimatedRef();
  let obj6 = scrollPosition(callback[15]);
  sharedValue4 = obj6.useSharedValue({ absoluteXStart: 0, absoluteYStart: 0, cancel: false, active: false, requiresPop: false });
  let obj7 = scrollPosition(callback[15]);
  let fn = function f() {
    return { gestureActive: sharedValue4.get().active, connected: connected.get(), mode: mode.get() };
  };
  fn.__closure = { gestureState: sharedValue4, connected, mode };
  fn.__workletHash = 5596084348360;
  fn.__initData = closure_34;
  let fn2 = function h(mode, current) {
    if (!obj.cheapWorkletShallowEqual(mode, current)) {
      mode = mode.mode;
      if (mode.connected) {
        if (!mode.gestureActive) {
          if (mode === setMode.PANEL) {
            let tmp2Result = tmp2(tmp3[15]);
            tmp2Result.runOnJS(callback)(true);
          }
          if (mode === setMode.PANEL) {
            tmp2Result = tmp2(tmp3[15]);
            tmp2Result.runOnJS(closure_3)(true);
          } else {
            tmp2(tmp3[15]).runOnJS(closure_3)(false);
            const tmp2Result1 = tmp2(tmp3[15]);
          }
          if (mode === tmp9.PIP) {
            tmp2(tmp3[15]).runOnJS(callback2)(true);
            const tmp2Result2 = tmp2(tmp3[15]);
          } else {
            tmp2(tmp3[15]).runOnJS(callback2)(false);
            const tmp2Result3 = tmp2(tmp3[15]);
          }
          tmp9 = setMode;
        }
      }
      tmp2(tmp3[15]).runOnJS(callback)(false);
      const tmp2Result4 = tmp2(tmp3[15]);
    }
  };
  obj = { cheapWorkletShallowEqual: scrollPosition(callback[20]).cheapWorkletShallowEqual, VoicePanelModes: setMode, runOnJS: scrollPosition(callback[15]).runOnJS, setPanelFullscreen: callback, setPanelOpen: callback1, setPanelPIP: callback2 };
  fn2.__closure = obj;
  fn2.__workletHash = 10989484188294;
  fn2.__initData = closure_35;
  const animatedReaction = obj7.useAnimatedReaction(fn, fn2);
  let obj9 = scrollPosition(callback[15]);
  let fn3 = function _() {
    return mode.get();
  };
  fn3.__closure = { mode };
  fn3.__workletHash = 455036316035;
  fn3.__initData = closure_36;
  let fn4 = function p(arg0, arg1) {
    let tmp2 = arg0 === setMode.DISMISSED;
    if (tmp2) {
      tmp2 = arg1 !== tmp.DISMISSED;
    }
    if (tmp2) {
      dragScrolling(callback[21])(sharedValue4, { cancel: false, active: false });
    }
  };
  obj1 = { VoicePanelModes: setMode, updateSharedValueIfChanged: dragScrolling(callback[21]), gestureState: sharedValue4 };
  fn4.__closure = obj1;
  fn4.__workletHash = 8982251844724;
  fn4.__initData = closure_37;
  const animatedReaction1 = obj9.useAnimatedReaction(fn3, fn4);
  const items3 = [channelId2];
  callback3 = callback2.useCallback((arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = wrapperOffset(controlsSpecs.getParticipant(channelId2, arg0));
    }
    callback(!tmp);
  }, items3);
  let obj11 = scrollPosition(callback[15]);
  function ve() {
    let tmp;
    if (mode.get() === setMode.PANEL) {
      const value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      tmp = id;
    }
    return tmp;
  }
  ve.__closure = { mode, VoicePanelModes: setMode, focused };
  ve.__workletHash = 16350113088465;
  ve.__initData = closure_38;
  class Ve {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = scrollPosition;
        tmp2 = closure_2;
        obj = scrollPosition(closure_2[15]);
        tmp3 = closure_30;
        tmp4 = obj.runOnJS(closure_30)(arg0);
      }
      return;
    }
  }
  obj2 = { runOnJS: scrollPosition(callback[15]).runOnJS, handleFocusChange: callback3 };
  Ve.__closure = obj2;
  Ve.__workletHash = 169980789473;
  Ve.__initData = closure_39;
  const animatedReaction2 = obj11.useAnimatedReaction(ve, Ve);
  const items4 = [tmp12, connected, controlsSpecs, dismissPanel, dismissToPIPGestureRef, focused, first, hideControls, sharedValue4, isFocusedVideoZoomed, sharedValue1, mode, safeArea, scrollPosition, memo, setMode, showControls, windowDimensions, wrapperDimensions, wrapperOffset];
  const memo1 = callback2.useMemo(() => {
    const Gesture = scrollPosition(callback[19]).Gesture;
    const Gesture2 = scrollPosition(callback[19]).Gesture;
    obj = { left: -1 * closure_20.left, right: -1 * closure_20.right };
    const TapResult = Gesture2.Tap();
    const hitSlopResult = Gesture2.Tap().hitSlop(obj);
    const enabledResult = Gesture2.Tap().hitSlop(obj).enabled(first);
    const fn = function h() {
      if (store2.get()) {
        if (store4.get() !== closure_1_15.PIP) {
          if (store3.get().mode === closure_1_18.HIDDEN) {
            closure_1_0(closure_1_2[15]).runOnJS(closure_16)({ debounce: true });
            obj2 = closure_1_0(closure_1_2[15]);
          } else {
            closure_1_0(closure_1_2[15]).runOnJS(closure_11)({ debounce: true });
            obj = closure_1_0(closure_1_2[15]);
          }
        }
      }
    };
    obj = { connected, mode, VoicePanelModes: setMode, controlsSpecs, VoicePanelControlsModes: wrapperDimensions, runOnJS: scrollPosition(callback[15]).runOnJS, showControls, hideControls };
    fn.__closure = obj;
    fn.__workletHash = 7439125251278;
    fn.__initData = closure_1_40;
    const maxDistanceResult = Gesture2.Tap().hitSlop(obj).enabled(first).maxDistance(30);
    const Gesture3 = scrollPosition(callback[19]).Gesture;
    const onStartResult = Gesture2.Tap().hitSlop(obj).enabled(first).maxDistance(30).onStart(fn);
    const PanResult = Gesture3.Pan();
    const enabledResult1 = Gesture3.Pan().enabled(first);
    const manualActivationResult = Gesture3.Pan().enabled(first).manualActivation(true);
    const maxPointersResult = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1);
    obj1 = { left: -1 * closure_20.left, right: -1 * closure_20.right };
    const hitSlopResult1 = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1).hitSlop({ left: -1 * closure_20.left, right: -1 * closure_20.right });
    let result = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1).hitSlop({ left: -1 * closure_20.left, right: -1 * closure_20.right }).withRef(dismissToPIPGestureRef).shouldCancelWhenOutside(false);
    let result1 = result.simultaneousWithExternalGesture(memo);
    class S {
      constructor(arg0, arg1) {
        first = arg0.allTouches[0];
        if (closure_1_13) {
          tmp2 = null;
          if (null != first) {
            tmp3 = closure_17;
            tmp4 = closure_14;
            if (first.absoluteY > closure_17.get().height - closure_14.get().bottom) {
              tmp16 = closure_29;
              obj = {};
              tmp17 = obj;
              merged = Object.assign(closure_29.get());
              flag2 = true;
              obj.cancel = true;
              result = closure_29.set(obj);
              activateResult = arg1.activate();
              return;
            }
          }
        }
        value = closure_12.get();
        if (!value) {
          tmp6 = closure_13;
          tmp7 = closure_1_15;
          tmp8 = closure_13.get() === closure_1_15.PANEL;
          if (tmp8) {
            tmp9 = closure_7;
            tmp10 = closure_1_18;
            tmp8 = closure_7.get().mode === closure_1_18.DRAWER;
          }
          value = tmp8;
        }
        if (value) {
          tmp11 = closure_29;
          obj = {};
          tmp12 = obj;
          merged1 = Object.assign(closure_29.get());
          flag = true;
          obj.cancel = true;
          result1 = closure_29.set(obj);
          failResult = arg1.fail();
        }
        return;
      }
    }
    S.__closure = { IS_IOS: mode, windowDimensions, safeArea, gestureState: sharedValue4, isFocusedVideoZoomed, mode, VoicePanelModes: setMode, controlsSpecs, VoicePanelControlsModes: wrapperDimensions };
    S.__workletHash = 1018234940483;
    S.__initData = closure_1_47;
    obj2 = { IS_IOS: mode, windowDimensions, safeArea, gestureState: sharedValue4, isFocusedVideoZoomed, mode, VoicePanelModes: setMode, controlsSpecs, VoicePanelControlsModes: wrapperDimensions };
    const withRefResult = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1).hitSlop({ left: -1 * closure_20.left, right: -1 * closure_20.right }).withRef(dismissToPIPGestureRef);
    const fn2 = function u(arg0) {
      obj = store10;
      if (!store10.get().cancel) {
        closure_1_1(closure_1_2[21])(closure_19, { x: 0, y: 0 });
        obj = { absoluteXStart: null, absoluteYStart: null, active: false, cancel: false, requiresPop: null };
        ({ absoluteX: obj2[0], absoluteY: obj2[1] } = arg0);
        let value = store2.get();
        if (value) {
          value = store4.get() === closure_1_15.PANEL;
        }
        obj[4] = value;
        const result = obj.set(obj);
      }
    };
    const onTouchesDownResult = result1.onTouchesDown(S);
    fn2.__closure = { gestureState: sharedValue4, updateSharedValueIfChanged: dragScrolling(callback[21]), wrapperOffset, connected, mode, VoicePanelModes: setMode };
    fn2.__workletHash = 2900831238061;
    fn2.__initData = closure_1_46;
    let obj3 = { gestureState: sharedValue4, updateSharedValueIfChanged: dragScrolling(callback[21]), wrapperOffset, connected, mode, VoicePanelModes: setMode };
    const fn3 = function c(state, fail) {
      if (state.state === closure_1_0(closure_1_2[19]).State.BEGAN) {
        if (!store10.get().active) {
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
            obj = store4;
            if (store4.get() === closure_1_15.PANEL) {
              const _Math6 = Math;
              if (diff < 0) {
                if (Math.floor(store.get()) <= 0) {
                  let tmp23 = !closure_1_33;
                  if (closure_1_33) {
                    tmp23 = bound > 10;
                  }
                  let flag = tmp23;
                }
              }
              const value = closure_10.get();
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
                closure_1_0(tmp2[15]).runOnJS(closure_1_1(tmp2[22]))();
                flag = true;
                const tmpResult = closure_1_0(tmp2[15]);
              }
            }
            const tmp25 = closure_1_1(tmp2[21]);
            if (flag) {
              tmp25(closure_19, { gestureActive: true });
              obj = { absoluteXStart: null, absoluteYStart: null, cancel: false, active: true, requiresPop: null };
              obj[0] = absoluteX;
              obj[1] = absoluteY + store.get();
              obj[4] = obj5.get().requiresPop;
              const result = obj5.set(obj);
              const result1 = store9.set(true);
              fail.activate();
            } else {
              obj = { absoluteYStart: null, absoluteXStart: null };
              obj[0] = absoluteY;
              obj[1] = absoluteX;
              tmp25(obj5, obj);
            }
          }
        }
      }
    };
    const onBeginResult = onTouchesDownResult.onBegin(fn2);
    fn3.__closure = { State: scrollPosition(callback[19]).State, gestureState: sharedValue4, mode, VoicePanelModes: setMode, scrollPosition, isQuest: closure_1_33, MIN_GESTURE_MOVE: 10, focused, runOnJS: scrollPosition(callback[15]).runOnJS, triggerIOSHaptic: dragScrolling(callback[22]), updateSharedValueIfChanged: dragScrolling(callback[21]), wrapperOffset, lockScrolling: sharedValue1 };
    fn3.__workletHash = 681403423937;
    fn3.__initData = closure_1_45;
    let obj4 = { State: scrollPosition(callback[19]).State, gestureState: sharedValue4, mode, VoicePanelModes: setMode, scrollPosition, isQuest: closure_1_33, MIN_GESTURE_MOVE: 10, focused, runOnJS: scrollPosition(callback[15]).runOnJS, triggerIOSHaptic: dragScrolling(callback[22]), updateSharedValueIfChanged: dragScrolling(callback[21]), wrapperOffset, lockScrolling: sharedValue1 };
    const fn4 = function l(absoluteY) {
      obj = store10;
      if (!store10.get().cancel) {
        let merged = store4.get();
        if (merged !== closure_1_15.PIP) {
          const result = -1 * (obj.get().absoluteYStart - absoluteY.absoluteY);
          let tmp12 = store2.get() && !obj.get().requiresPop;
          if (tmp12) {
            tmp12 = result <= 0;
          }
          if (tmp12) {
            obj = {};
            merged = Object.assign(obj.get());
            obj.requiresPop = true;
            const result1 = obj.set(obj);
          }
          if (store9.get()) {
            if (result < 0) {
              const result2 = obj4.set(false);
            }
            let diff = result;
            if (!obj.get().requiresPop) {
              obj = { y: null, x: 0 };
              obj[0] = diff;
              closure_1_1(closure_1_2[21])(closure_19, obj);
            } else {
              const _Math = Math;
              merged = Math.max(result, 0);
              if (merged > 180) {
                obj1 = {};
                merged = Object.assign(obj.get());
                obj1.requiresPop = false;
                const result3 = obj.set(obj1);
                const obj6 = closure_1_0(closure_1_2[15]);
                closure_1_0(closure_1_2[15]).runOnJS(closure_1_0(closure_1_2[23]).triggerHapticFeedback)(closure_1_0(closure_1_2[23]).HapticFeedbackTypes.IMPACT_MEDIUM);
                diff = result;
                const runOnJSResult = closure_1_0(closure_1_2[15]).runOnJS(closure_1_0(closure_1_2[23]).triggerHapticFeedback);
              }
            }
            diff = merged - merged * closure_1_20;
          }
          const value = obj4.get();
          let tmp16 = !value;
          if (!value) {
            merged = store;
            tmp16 = store.get() <= 0;
          }
          if (tmp16) {
            const result4 = obj4.set(true);
          }
        } else {
          obj2 = { x: null, y: null };
          obj2[0] = -1 * (obj.get().absoluteXStart - absoluteY.absoluteX);
          obj2[1] = -1 * (obj.get().absoluteYStart - absoluteY.absoluteY);
          closure_1_1(closure_1_2[21])(closure_19, obj2);
          const tmp7 = closure_1_1(closure_1_2[21]);
        }
      }
    };
    const onTouchesMoveResult = onBeginResult.onTouchesMove(fn3);
    fn4.__closure = { gestureState: sharedValue4, mode, VoicePanelModes: setMode, connected, lockScrolling: sharedValue1, scrollPosition, POP_RESISTANCE: closure_20, PIP_POP_HEIGHT: 180, runOnJS: scrollPosition(callback[15]).runOnJS, triggerHapticFeedback: scrollPosition(callback[23]).triggerHapticFeedback, HapticFeedbackTypes: scrollPosition(callback[23]).HapticFeedbackTypes, updateSharedValueIfChanged: dragScrolling(callback[21]), wrapperOffset };
    fn4.__workletHash = 5758910761259;
    fn4.__initData = closure_1_44;
    let obj5 = { gestureState: sharedValue4, mode, VoicePanelModes: setMode, connected, lockScrolling: sharedValue1, scrollPosition, POP_RESISTANCE: closure_20, PIP_POP_HEIGHT: 180, runOnJS: scrollPosition(callback[15]).runOnJS, triggerHapticFeedback: scrollPosition(callback[23]).triggerHapticFeedback, HapticFeedbackTypes: scrollPosition(callback[23]).HapticFeedbackTypes, updateSharedValueIfChanged: dragScrolling(callback[21]), wrapperOffset };
    const fn5 = function s() {
      const result = store9.set(false);
      closure_1_1(closure_1_2[21])(closure_29, { cancel: false, active: false });
      closure_1_1(closure_1_2[21])(closure_19, { gestureActive: false, x: 0, y: 0 });
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn4);
    fn5.__closure = { lockScrolling: sharedValue1, updateSharedValueIfChanged: dragScrolling(callback[21]), gestureState: sharedValue4, wrapperOffset };
    fn5.__workletHash = 2298193707049;
    fn5.__initData = closure_1_43;
    let obj6 = { lockScrolling: sharedValue1, updateSharedValueIfChanged: dragScrolling(callback[21]), gestureState: sharedValue4, wrapperOffset };
    const fn6 = function n(velocityY) {
      obj = store10;
      if (!store10.get().cancel) {
        velocityY = velocityY.velocityY;
        ({ velocityX, absoluteX, absoluteY } = velocityY);
        if (store4.get() === closure_1_15.PIP) {
          obj = { velocityX: null, velocityY: null, absoluteX: null, absoluteY: null, windowDimensions: null, safeArea: null };
          obj[0] = velocityX;
          obj[1] = velocityY;
          obj[2] = absoluteX;
          obj[3] = absoluteY;
          obj[4] = store6.get();
          obj[5] = store5.get();
          const result = closure_1_0(closure_1_2[24]).calculatePIPPositionFromVelocity(obj);
          ({ pipX, pipY } = result);
          obj = { pipX: null, pipY: null };
          obj[0] = pipX;
          obj[1] = pipY;
          closure_1_1(closure_1_2[21])(store7, obj);
          closure_1_1(closure_1_2[21])(store8, { gestureActive: false });
          const obj5 = closure_1_0(closure_1_2[24]);
        } else if (obj2.get() === tmp2.PANEL) {
          if (velocityY > 0) {
            if (store2.get()) {
              if (obj.get().requiresPop) {
                closure_1_1(closure_1_2[21])(store8, { gestureActive: false, x: 0, y: 0 });
                const result1 = store9.set(false);
              } else {
                closure_1_0(closure_1_2[15]).runOnJS(closure_15)(tmp2.PIP);
                closure_1_1(closure_1_2[21])(store8, { gestureActive: false, x: 0, y: 0 });
                const obj4 = closure_1_0(closure_1_2[15]);
              }
            } else {
              const diff = store7.get().drawerHeight - store7.get().drawerY;
              if (store8.get().y > 0.2 * diff) {
                closure_1_1(closure_1_2[21])(tmp12, { gestureActive: false });
                closure_1_0(closure_1_2[15]).runOnJS(closure_8)();
                const obj3 = closure_1_0(closure_1_2[15]);
              } else {
                closure_1_1(closure_1_2[21])(tmp12, { gestureActive: false, x: 0, y: 0 });
                const result2 = store9.set(false);
              }
            }
          } else {
            closure_1_1(closure_1_2[21])(store8, { gestureActive: false, x: 0, y: 0 });
            const result3 = store9.set(false);
          }
        }
        obj2 = store4;
      }
    };
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn5);
    fn6.__closure = { gestureState: sharedValue4, mode, VoicePanelModes: setMode, calculatePIPPositionFromVelocity: scrollPosition(callback[24]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: dragScrolling(callback[21]), wrapperDimensions, wrapperOffset, connected, runOnJS: scrollPosition(callback[15]).runOnJS, setMode, lockScrolling: sharedValue1, MIN_DISMISS_MOVE_PERCENTAGE: 0.2, dismissPanel };
    fn6.__workletHash = 10456175839006;
    fn6.__initData = closure_1_42;
    const obj7 = { gestureState: sharedValue4, mode, VoicePanelModes: setMode, calculatePIPPositionFromVelocity: scrollPosition(callback[24]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: dragScrolling(callback[21]), wrapperDimensions, wrapperOffset, connected, runOnJS: scrollPosition(callback[15]).runOnJS, setMode, lockScrolling: sharedValue1, MIN_DISMISS_MOVE_PERCENTAGE: 0.2, dismissPanel };
    const fn7 = function t() {
      let tmp = 0 !== store8.get().y;
      if (tmp) {
        tmp = store4.get() === closure_1_15.PANEL;
      }
      if (!tmp) {
        closure_1_1(closure_1_2[21])(closure_29, { cancel: false, active: false });
      }
    };
    const onEndResult = onTouchesCancelledResult.onEnd(fn6);
    fn7.__closure = { wrapperOffset, mode, VoicePanelModes: setMode, updateSharedValueIfChanged: dragScrolling(callback[21]), gestureState: sharedValue4 };
    fn7.__workletHash = 13223935476834;
    fn7.__initData = closure_1_41;
    return Gesture.Race(onStartResult, onEndResult.onFinalize(fn7));
  }, items4);
  let obj13 = scrollPosition(callback[15]);
  obj3 = { onBeginDrag: be, onEndDrag: null, onMomentumEnd: null, onScroll: null };
  be = function be(contentOffset) {
    const result = scrollPosition.set(contentOffset.contentOffset.y);
    const result1 = dragScrolling.set(true);
  };
  be.__closure = { scrollPosition, dragScrolling };
  be.__workletHash = 7129316645562;
  be.__initData = closure_48;
  class Ce {
    constructor() {
      result = dragScrolling.set(false);
      return;
    }
  }
  Ce.__closure = { dragScrolling };
  Ce.__workletHash = 16780787183039;
  Ce.__initData = closure_49;
  obj3[1] = Ce;
  class Ee {
    constructor() {
      result = dragScrolling.set(false);
      return;
    }
  }
  Ee.__closure = { dragScrolling };
  Ee.__workletHash = 13772673540365;
  Ee.__initData = closure_50;
  obj3[2] = Ee;
  class Ae {
    constructor(arg0) {
      if (closure_22.get()) {
        obj3 = closure_23;
        if (closure_23.get()) {
          return;
        } else {
          obj4 = scrollPosition;
          num5 = 0;
          if (scrollPosition.get() < 0) {
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
            tmp13 = scrollPosition;
            tmp14 = closure_2;
            obj5 = scrollPosition(closure_2[15]);
            tmp15 = closure_28;
            flag2 = false;
            tmp16 = obj5;
            num7 = 0;
            tmp17 = value;
            flag3 = false;
            scrollToResult = obj5.scrollTo(closure_28, 0, value, false);
            result2 = obj3.set(false);
          }
        }
      } else {
        obj = scrollPosition;
        tmp = undefined;
        if (scrollPosition.get() !== arg0.contentOffset.y) {
          tmp20 = closure_30;
          tmp22 = windowDimensions;
          value1 = obj.get();
          tmp23 = closure_21;
          value2 = closure_21.get();
          if (typeof closure_30 !== "function") {
            str = "Trying to call a non-function";
            throwTypeErrorResult = HermesBuiltin.throwTypeError();
          }
          tmp2 = globalThis;
          _Math = Math;
          tmp3 = safeArea;
          rounded = Math.ceil(windowDimensions.get().height / safeArea);
          _Math2 = Math;
          _Math3 = Math;
          num = 1;
          num2 = 0;
          _Math4 = Math;
          num3 = 2;
          num4 = 2;
          _Math5 = Math;
          sum = Math.max(Math.floor(value1 / rounded) - 1, 0) + safeArea + num4;
          bound = Math.min(sum, Math.ceil(value2 / rounded));
          obj = { start: null, end: null };
          _Math6 = Math;
          obj[0] = Math.max(bound - safeArea - num4, 0);
          obj[1] = bound;
          tmp = obj;
        }
        result3 = obj.set(arg0.contentOffset.y);
        tmp8 = null;
        if (null != tmp) {
          tmp26 = dragScrolling;
          tmp27 = closure_2;
          tmp28 = closure_24;
          tmp29 = dragScrolling(closure_2[21])(closure_24, tmp);
        }
      }
      return;
    }
  }
  const tmp4 = dragScrolling(callback[34]);
  Ae.__closure = { lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: scrollPosition(callback[15]).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition: callback3, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: dragScrolling(callback[21]), viewableChunks: sharedValue3 };
  Ae.__workletHash = 3971019682754;
  Ae.__initData = closure_51;
  obj3[3] = Ae;
  let obj4 = { lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: scrollPosition(callback[15]).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition: callback3, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: dragScrolling(callback[21]), viewableChunks: sharedValue3 };
  let obj16 = scrollPosition(callback[15]);
  class Te {
    constructor() {
      return mode.get();
    }
  }
  Te.__closure = { mode };
  Te.__workletHash = 17369688194549;
  Te.__initData = closure_52;
  class Me {
    constructor(arg0, arg1) {
      tmp = null != arg1 && arg0 !== arg1;
      if (tmp) {
        tmp2 = setMode;
        if (arg0 === setMode.PANEL) {
          if (arg1 === tmp2.PIP) {
            tmp5 = closure_22;
            flag2 = false;
            result = closure_22.set(false);
          }
        }
        if (arg0 === tmp2.PIP) {
          tmp3 = closure_22;
          flag = true;
          result1 = closure_22.set(true);
        }
      }
      return;
    }
  }
  Me.__closure = { VoicePanelModes: setMode, lockScrolling: sharedValue1 };
  Me.__workletHash = 1687129825906;
  Me.__initData = closure_53;
  const animatedReaction3 = obj16.useAnimatedReaction(Te, Me);
  let obj17 = scrollPosition(callback[25]);
  token = obj17.useToken(dragScrolling(callback[14]).modules.mobile.VOICE_PANEL_GUTTER);
  let obj18 = scrollPosition(callback[15]);
  class Ye {
    constructor() {
      tmp = mode.get() === setMode.PIP;
      tmp2 = tmp;
      if (!tmp) {
        tmp3 = focused;
        tmp4 = null;
        tmp2 = null != focused.get();
      }
      str = "auto";
      if (tmp) {
        str = "none";
      }
      obj = { pointerEvents: str, scrollEnabled: tmp5, showsVerticalScrollIndicator: null, scrollIndicatorInsets: null };
      tmp5 = !tmp2;
      value = closure_22.get();
      tmp7 = !value;
      if (!value) {
        tmp7 = tmp5;
      }
      obj[2] = tmp7;
      obj = { top: null, bottom: null };
      tmp8 = dragScrolling(closure_2[26]);
      obj[0] = tmp8(safeArea.get(), closure_31).height - safeArea.get().top;
      obj[1] = safeArea.get().bottom;
      obj[3] = obj;
      return obj;
    }
  }
  obj5 = { mode, VoicePanelModes: setMode, focused, lockScrolling: sharedValue1, calculateVoicePanelHeaderSpecs: dragScrolling(callback[26]), safeArea, edgeGutter: token };
  Ye.__closure = obj5;
  Ye.__workletHash = 12205535325007;
  Ye.__initData = closure_54;
  const items5 = [sharedValue];
  const animatedProps = obj18.useAnimatedProps(Ye);
  const callback4 = callback2.useCallback((arg0, arg1) => {
    const result = sharedValue.set(arg1);
  }, items5);
  const animatedScrollHandler = obj13.useAnimatedScrollHandler(obj3);
  function ke() {
    const value = mode.get();
    if (setMode.PIP !== value) {
      if (setMode.DISMISSED !== value) {
        if (connected.get()) {
          if (sharedValue4.get().active) {
            if (obj.get().requiresPop) {
              return 1;
            }
          }
          obj = sharedValue4;
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
  ke.__closure = { mode, VoicePanelModes: setMode, connected, gestureState: sharedValue4, wrapperDimensions, wrapperOffset, windowDimensions };
  ke.__workletHash = 8663151154349;
  ke.__initData = closure_55;
  const derivedValue = scrollPosition(callback[15]).useDerivedValue(ke);
  const tmp34 = dragScrolling(callback[37])();
  callback = tmp34;
  const items6 = [tmp34];
  const effect = callback2.useEffect(() => {
    closure_3.lock();
  }, items6);
  const effect1 = callback2.useEffect(() => dragScrolling(true), []);
  let tmp37 = null;
  if (tmp6[0]) {
    obj6 = { value: null, children: null };
    obj6[0] = tmp4(dragScrolling(callback[35]).VOICE_PANEL).analyticsLocations;
    obj7 = { children: null };
    const items7 = [sharedValue(tmp2(tmp3[39]), {}), , ];
    const obj8 = { opacity: null, onPress: null };
    obj8[0] = derivedValue;
    obj8[1] = context.dismissPanel;
    items7[1] = sharedValue(closure_70, obj8);
    obj9 = { style: null, nativeID: null, accessibilityViewIsModal: true, layout: null, onAccessibilityEscape: null, children: null };
    obj9[0] = tmp.accessibilityView;
    let _HermesInternal = HermesInternal;
    let tmp2Result = tmp2(tmp3[40]);
    obj9[1] = "voice-panel-ui-" + channelId;
    obj9[3] = closure_26;
    obj9[4] = tmp2(tmp3[41]);
    const items8 = [sharedValue(tmp2(tmp3[42]), {}), , , ];
    const obj10 = { wrapperOffset: null, children: null };
    obj10[0] = wrapperOffset;
    obj11 = { zIndex: 2, children: null };
    const obj12 = { wrapperOffset: null, gestureState: null, layout: null };
    obj12[0] = wrapperOffset;
    obj12[1] = sharedValue4;
    obj12[2] = closure_26;
    obj11[1] = sharedValue(tmp2(tmp3[43]), obj12);
    const items9 = [sharedValue(tmp13(tmp3[38]).LayerScope, obj11), ];
    obj13 = { gesture: null, children: null };
    obj13[0] = memo1;
    const obj14 = { style: null, layout: null, collapsable: false, children: null };
    obj14[0] = channelId2.absoluteFill;
    obj14[1] = closure_26;
    tmp2Result = tmp2(tmp3[33]);
    const obj15 = { gesture: null, children: null };
    obj15[0] = memo;
    obj16 = { layout: null, ref: null, onScroll: null, onMomentumScrollEnd: null, animatedProps: null, style: null, onContentSizeChange: null, contentContainerStyle: null, scrollEventThrottle: 8.333333333333334, children: null };
    obj16[0] = animatedRef;
    obj16[1] = animatedRef;
    obj16[2] = animatedScrollHandler;
    obj16[3] = sharedValue2;
    obj16[4] = animatedProps;
    obj16[5] = tmp.scrollView;
    obj16[6] = callback4;
    obj16[7] = tmp.scrollViewContent;
    obj17 = { viewableChunks: null };
    obj17[0] = sharedValue3;
    const items10 = [sharedValue(tmp2(tmp3[44]), obj17), sharedValue(tmp2(tmp3[45]), {})];
    obj16[9] = items10;
    obj15[1] = sharedValue1(closure_32, obj16);
    obj14[3] = sharedValue(tmp13(tmp3[19]).GestureDetector, obj15);
    obj13[1] = sharedValue(tmp2Result, obj14);
    items9[1] = sharedValue(tmp13(tmp3[19]).GestureDetector, obj13);
    obj10[1] = items9;
    items8[1] = sharedValue1(AnimatedWrapper, obj10);
    items8[2] = sharedValue(tmp2(tmp3[46]), {});
    obj18 = { gestureState: null };
    obj18[0] = sharedValue4;
    items8[3] = sharedValue(tmp2(tmp3[47]), obj18);
    obj9[5] = items8;
    items7[2] = sharedValue1(tmp2Result, obj9);
    obj7[0] = items7;
    obj6[1] = sharedValue1(tmp13(tmp3[38]).LayerScope, obj7);
    tmp37 = sharedValue(tmp13(tmp3[34]).AnalyticsLocationProvider, obj6);
  }
  return tmp37;
});
let result = require("set").fileFinishedImporting("modules/voice_panel/native/VoicePanelUI.tsx");

export default memoResult;
export const REDUCED_MOTION_OPACITY_PHYSICS = obj3;