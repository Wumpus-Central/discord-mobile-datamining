import isStable from "isStable";
import importAllResult from "Directions";
import get_ActivityIndicator from "dismissPanel";
import getParticipants from "getParticipants";
import module_8784 from "module_8784";
import withEqualityFn from "withEqualityFn";
import VoicePanelModes from "VoicePanelModes";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { isActivityParticipant } from "ParticipantTypes";
import { POP_RESISTANCE } from "MIN_PAN_GESTURE_MOVE";
import jsxProd from "u";
import createCacheKey from "createCacheKey";
import isMetaQuest from "isMetaQuest";
import importDefaultResult from "module_4146";

let DEFAULT_BORDER_RADIUS;
let DRAWER_SPRING_PHYSICS;
let MODE_CHANGE_PHYSICS;
let ScrollView;
let VOICE_PANEL_CHUNK_DIVISOR;
let c10;
let closure_21;
let closure_22;
let closure_6;
let map1;
const require = arg1;
function NOOP() {

}
function log() {
  const items = [...HermesBuiltin.copyRestArgs()];
  tmp5.log.apply(items);
}
function AnimatedWrapper(children) {
  let wrapperRootStyles;
  let wrapperSurfaceStyles;
  let wrapperTransformStyles;
  const wrapperOffset = children.wrapperOffset;
  let height;
  let dependencyMap;
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
  let obj = wrapperOffset(10660);
  height = obj.useGlobalStatusIndicatorState().height;
  const tmp3 = callback2();
  dependencyMap = tmp3;
  let obj1 = connected;
  const context = connected.useContext(height(11557));
  wrapperDimensions = context.wrapperDimensions;
  connected = context.connected;
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  mode = context.mode;
  preJoinContentSize = context.preJoinContentSize;
  safeArea = context.safeArea;
  windowDimensions = context.windowDimensions;
  useReducedMotion = context.useReducedMotion;
  let obj2 = wrapperOffset(4146);
  const fn = function o() {
    return controlsSpecs.get().height;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 6243014585347;
  fn.__initData = closure_55;
  derivedValue = obj2.useDerivedValue(fn);
  let obj3 = wrapperOffset(16037);
  pIPState = obj3.usePIPState();
  let obj4 = wrapperOffset(4146);
  const fn2 = function l() {
    return { modeToSet: mode.get(), connected: connected.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, safeArea: safeArea.get(), focused: focused.get(), pipState: pIPState, controlsHeight: derivedValue.get(), preJoinContentSize: preJoinContentSize.get(), globalStatusIndicatorHeight: height };
  };
  fn2.__closure = { mode, connected, windowDimensions, safeArea, focused, pipState: pIPState, controlsHeight: derivedValue, preJoinContentSize, globalStatusIndicatorHeight: height };
  fn2.__workletHash = 4592460925374;
  fn2.__initData = closure_56;
  const fn3 = function s(safeAreaState, windowHeight) {
    let connected;
    let drawerX;
    let drawerY;
    let modeToSet;
    let safeArea;
    let windowWidth;
    let obj = wrapperOffset(_undefined[20]);
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
            const tmp20 = height(tmp2[30]);
            const obj1 = { drawerWidth: null, drawerHeight: null, drawerX: null, drawerY: null, animated: null, mode: null };
            obj1[0] = maxPanelWidth;
            obj1[1] = diff;
            obj1[2] = panelX;
            obj1[3] = height(tmp2[30])(Math.max(diff - tmp6 - tmp5 - safeArea.bottom, diff - 0.8 * diff));
            obj1[4] = tmp9;
            obj1[5] = modeToSet;
            height(tmp2[21])(tmp11, obj1);
            const tmp20Result = height(tmp2[30])(Math.max(diff - tmp6 - tmp5 - safeArea.bottom, diff - 0.8 * diff));
          }
        } else if (modeToSet === tmp8.DISMISSED) {
          const tmp29 = height(tmp2[21]);
          if (connected) {
            const obj2 = { mode: null };
            obj2[0] = modeToSet;
            tmp29(tmp11, obj2);
          } else {
            const obj3 = { drawerY: null, mode: null };
            obj3[0] = windowDimensions.get().height + 60;
            obj3[1] = modeToSet;
            tmp29(tmp11, obj3);
          }
        }
      }
    }
  };
  obj = { cheapWorkletShallowEqual: wrapperOffset(8698).cheapWorkletShallowEqual, VoicePanelModes: animatedStyle1, wrapperDimensions, updateSharedValueIfChanged: height(10245), wrapperOffset, getMaxPanelWidth: wrapperOffset(16025).getMaxPanelWidth, getPanelX: wrapperOffset(16025).getPanelX, roundToNearestPixel: height(10167), windowDimensions };
  fn3.__closure = obj;
  fn3.__workletHash = 3683279660781;
  fn3.__initData = closure_57;
  const animatedReaction = obj4.useAnimatedReaction(fn2, fn3);
  let obj6 = wrapperOffset(4146);
  class C {
    constructor() {
      value = useReducedMotion.get();
      gestureActive = !value;
      if (!value) {
        tmp2 = wrapperDimensions;
        gestureActive = wrapperDimensions.get().animated;
      }
      if (!gestureActive) {
        tmp3 = wrapperOffset;
        gestureActive = wrapperOffset.get().gestureActive;
      }
      obj = wrapperOffset;
      gestureActive2 = wrapperOffset.get().gestureActive;
      value1 = wrapperDimensions.get();
      ({ drawerY, drawerX } = value1);
      if (gestureActive2) {
        tmp5 = connected;
        gestureActive2 = !connected.get();
      }
      sum1 = drawerX;
      sum = drawerY;
      if (gestureActive2) {
        tmp8 = globalThis;
        _Math = Math;
        num = 0;
        sum = drawerY + Math.max(obj.get().y, 0);
        sum1 = drawerX + obj.get().x;
      }
      class VoicePanelUITsx29 {
        constructor(arg0) {
          tmp = children;
          if (children) {
            tmp2 = getParticipants;
            tmp3 = outer1_15;
            tmp = getParticipants.get() !== outer1_15.DISMISSED;
          }
          if (tmp) {
            tmp4 = outer1_0;
            tmp5 = outer1_2;
            obj = outer1_0(outer1_2[15]);
            tmp6 = outer1_1;
            tmp7 = obj.runOnJS(outer1_1(outer1_2[31]).updateSourceTrackingView)();
          }
          return;
        }
      }
      obj = { mode, VoicePanelModes: useAnimatedStyle, runOnJS: wrapperOffset(c2[15]).runOnJS, updateSourceTrackingView: height(c2[31]).updateSourceTrackingView };
      tmp9 = wrapperOffset;
      tmp10 = c2;
      VoicePanelUITsx29.__closure = obj;
      VoicePanelUITsx29.__workletHash = 10394717541764;
      VoicePanelUITsx29.__initData = outer1_59;
      obj3 = wrapperOffset(c2[12]);
      tmp11 = obj.get().gestureActive ? outer1_17 : outer1_29;
      str = "animate-never";
      str2 = "animate-never";
      if (gestureActive) {
        str2 = "animate-always";
      }
      obj1 = { translateX: obj3.withSpring(sum1, tmp11, str2, VoicePanelUITsx29) };
      items = [, ];
      items[0] = obj1;
      tmp9Result = tmp9(tmp10[12]);
      tmp12 = obj.get().gestureActive ? outer1_17 : outer1_29;
      if (gestureActive) {
        str = "animate-always";
      }
      obj2 = { transform: null };
      obj3 = { translateY: tmp9Result.withSpring(sum, tmp12, str, VoicePanelUITsx29) };
      items[1] = obj3;
      obj2[0] = items;
      return obj2;
    }
  }
  obj = { useReducedMotion, wrapperDimensions, wrapperOffset, connected, mode, VoicePanelModes: animatedStyle1, runOnJS: wrapperOffset(4146).runOnJS, updateSourceTrackingView: height(9681).updateSourceTrackingView, withSpring: wrapperOffset(4694).withSpring, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_17, DRAWER_SIZE_PHYSICS: obj2 };
  C.__closure = obj;
  C.__workletHash = 16361132737159;
  C.__initData = closure_58;
  animatedStyle = obj6.useAnimatedStyle(C);
  let obj8 = wrapperOffset(4146);
  class M {
    constructor() {
      obj = mode;
      obj2 = connected;
      value = mode.get();
      value1 = connected.get();
      if (typeof outer1_54 !== "find") {
        str3 = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      tmp3 = useAnimatedStyle;
      if (value === useAnimatedStyle.PIP) {
        num = controlsSpecs;
      } else {
        num = 0;
        if (!value1) {
          num = useReducedMotion;
        }
      }
      obj = { width: wrapperDimensions.get().drawerWidth, height: wrapperDimensions.get().drawerHeight, borderRadius: null, pointerEvents: null, backgroundColor: null };
      obj4 = wrapperOffset(c2[12]);
      obj[2] = obj4.withSpring(num, windowDimensions);
      str = "none";
      if (obj.get() === tmp3.PANEL) {
        str = "auto";
      }
      obj[3] = str;
      str2 = "transparent";
      if (!obj2.get()) {
        tmp4 = c2;
        str2 = c2.maskDefaultBackground.backgroundColor;
      }
      obj[4] = str2;
      return obj;
    }
  }
  obj1 = { computeBorderRadii, mode, connected, wrapperDimensions, withSpring: wrapperOffset(4694).withSpring, BORDER_RADIUS_PHYSICS: windowDimensions, VoicePanelModes: animatedStyle1, styles: tmp3 };
  M.__closure = obj1;
  M.__workletHash = 1768699814221;
  M.__initData = closure_60;
  animatedStyle1 = obj8.useAnimatedStyle(M);
  if (!wrapperOffset(6971).isStable) {
    let tmpResult = tmp(4146);
    class Y {
      constructor() {
        return windowDimensions.get();
      }
    }
    obj2 = { windowDimensions: null };
    obj2[0] = windowDimensions;
    Y.__closure = obj2;
    Y.__workletHash = 14100798624471;
    Y.__initData = closure_61;
    const fn4 = function k(arg0) {
      const obj = wrapperOffset(_undefined[15]);
      wrapperOffset(_undefined[15]).runOnJS(closure_25)("Window dimensions changed:", JSON.stringify(arg0));
    };
    obj3 = { runOnJS: null, log: null };
    obj3[0] = tmp(4146).runOnJS;
    obj3[1] = log;
    fn4.__closure = obj3;
    fn4.__workletHash = 13929796154212;
    fn4.__initData = closure_62;
    const animatedReaction1 = tmpResult.useAnimatedReaction(Y, fn4);
    tmpResult = tmp(4146);
    class H {
      constructor() {
        return wrapperDimensions.get();
      }
    }
    obj4 = { wrapperDimensions: null };
    obj4[0] = wrapperDimensions;
    H.__closure = obj4;
    H.__workletHash = 14295147321429;
    H.__initData = closure_63;
    class T {
      constructor(arg0) {
        obj = wrapperOffset(c2[15]);
        runOnJSResult = obj.runOnJS(closure_25);
        tmpResult = runOnJSResult("Wrapper dimensions changed:", JSON.stringify(children));
        return;
      }
    }
    const obj5 = { runOnJS: null, log: null };
    obj5[0] = tmp(4146).runOnJS;
    obj5[1] = log;
    T.__closure = obj5;
    T.__workletHash = 1850762619613;
    T.__initData = closure_64;
    const animatedReaction2 = tmpResult.useAnimatedReaction(H, T);
  }
  let items = [tmp3.wrapper, animatedStyle1, animatedStyle];
  const memo = obj1.useMemo(() => ({ wrapperRootStyles: _undefined.wrapper, wrapperTransformStyles: animatedStyle, wrapperSurfaceStyles: animatedStyle1 }), items);
  ({ wrapperRootStyles, wrapperTransformStyles, wrapperSurfaceStyles } = memo);
  obj6 = { style: wrapperRootStyles, pointerEvents: "box-none", children: null };
  let tmp4Result = tmp4(7819);
  const obj7 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: null };
  tmp4Result = tmp4(7819);
  obj8 = { style: wrapperSurfaceStyles, layout: layoutTransition, children: children.children };
  obj7[2] = callback(height(7819), obj8);
  obj6[2] = callback(tmp4Result, obj7);
  return callback(tmp4Result, obj6);
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
let closure_24 = new require("getParticipants")("VoicePanelUI");
function layoutTransition(originX) {
  let obj = { animations: null, initialValues: null };
  obj = { originX: null, originY: null, width: null, height: null };
  obj[0] = require(4694) /* CONFIG_NEVER_ANIMATE */.withSpring(originX.targetOriginX, LAYOUT_PHYSICS, "animate-always");
  const obj3 = require(4694) /* CONFIG_NEVER_ANIMATE */;
  obj[1] = require(4694) /* CONFIG_NEVER_ANIMATE */.withSpring(originX.targetOriginY, LAYOUT_PHYSICS, "animate-always");
  const obj4 = require(4694) /* CONFIG_NEVER_ANIMATE */;
  obj[2] = require(4694) /* CONFIG_NEVER_ANIMATE */.withSpring(originX.targetWidth, LAYOUT_PHYSICS, "animate-always");
  const obj5 = require(4694) /* CONFIG_NEVER_ANIMATE */;
  obj[3] = require(4694) /* CONFIG_NEVER_ANIMATE */.withSpring(originX.targetHeight, LAYOUT_PHYSICS, "animate-always");
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
  let obj = { animations: null, initialValues: null };
  obj = { originX: null, originY: null, width: null, height: null };
  obj[0] = require(4694) /* CONFIG_NEVER_ANIMATE */.withSpring(originX.targetOriginX, LAYOUT_PHYSICS, "animate-always");
  const obj3 = require(4694) /* CONFIG_NEVER_ANIMATE */;
  obj[1] = require(4694) /* CONFIG_NEVER_ANIMATE */.withSpring(originX.targetOriginY, LAYOUT_PHYSICS, "animate-always");
  const obj4 = require(4694) /* CONFIG_NEVER_ANIMATE */;
  obj[2] = require(4694) /* CONFIG_NEVER_ANIMATE */.withSpring(originX.targetWidth, obj, "animate-always");
  const obj5 = require(4694) /* CONFIG_NEVER_ANIMATE */;
  obj[3] = require(4694) /* CONFIG_NEVER_ANIMATE */.withSpring(originX.targetHeight, obj, "animate-always");
  obj[0] = obj;
  obj[1] = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight };
  return obj;
}
const tmp5 = new require("getParticipants")("VoicePanelUI");
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
obj4[2] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
let obj8 = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj8.borderTopLeftRadius = DEFAULT_BORDER_RADIUS;
obj8.borderTopRightRadius = DEFAULT_BORDER_RADIUS;
obj4[3] = obj8;
obj4[4] = { flexGrow: 1, flexShrink: 0 };
let obj7 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
obj4[5] = { backgroundColor: require("Themes").colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
obj4[6] = { flexGrow: 1 };
let closure_31 = createCacheKey.createStyles(obj4);
let obj9 = { backgroundColor: require("Themes").colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
let closure_32 = require("module_4146").createAnimatedComponent(ScrollView);
isMetaQuest = isMetaQuest.isMetaQuest();
let closure_34 = { code: "function VoicePanelUITsx4(){const{gestureState,connected,mode}=this.__closure;return{gestureActive:gestureState.get().active,connected:connected.get(),mode:mode.get()};}" };
let closure_35 = { code: "function VoicePanelUITsx5(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,runOnJS,setPanelFullscreen,setPanelOpen,setPanelPIP}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{gestureActive:gestureActive,connected:connected,mode:mode}=props;if(!connected||gestureActive||mode!==VoicePanelModes.PANEL){runOnJS(setPanelFullscreen)(false);}else{runOnJS(setPanelFullscreen)(true);}if(mode===VoicePanelModes.PANEL){runOnJS(setPanelOpen)(true);}else{runOnJS(setPanelOpen)(false);}if(mode===VoicePanelModes.PIP){runOnJS(setPanelPIP)(true);}else{runOnJS(setPanelPIP)(false);}}" };
let closure_36 = { code: "function VoicePanelUITsx6(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
let closure_37 = { code: "function VoicePanelUITsx7(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
let closure_38 = { code: "function VoicePanelUITsx8(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(!connected.get())return;if(mode.get()===VoicePanelModes.PIP){}else if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}" };
let closure_39 = { code: "function VoicePanelUITsx9(){const{updateSharedValueIfChanged,gestureState}=this.__closure;updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}" };
let closure_40 = { code: "function VoicePanelUITsx10(event){const{gestureState,mode,VoicePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,connected,runOnJS,setMode,lockScrolling,MIN_DISMISS_MOVE_PERCENTAGE,dismissPanel}=this.__closure;if(gestureState.get().cancel)return;const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(mode.get()===VoicePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else if(mode.get()===VoicePanelModes.PANEL){if(velocityY>0){if(connected.get()){if(!gestureState.get().requiresPop){runOnJS(setMode)(VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}else{const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;const dismissThreshold=panelHeight*MIN_DISMISS_MOVE_PERCENTAGE;if(wrapperOffset.get().y>dismissThreshold){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(dismissPanel)();return;}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}" };
let closure_41 = { code: "function VoicePanelUITsx11(_e){const{lockScrolling,updateSharedValueIfChanged,gestureState,wrapperOffset}=this.__closure;lockScrolling.set(false);updateSharedValueIfChanged(gestureState,{cancel:false,active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});console.log('onTouchesCancelled');}" };
let closure_42 = { code: "function VoicePanelUITsx12(event){const{gestureState,mode,VoicePanelModes,connected,lockScrolling,scrollPosition,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(gestureState.get().cancel)return;if(mode.get()!==VoicePanelModes.PIP){const minYOffset=0;let newYOffset=(gestureState.get().absoluteYStart-event.absoluteY)*-1;if(connected.get()&&!gestureState.get().requiresPop&&newYOffset<=minYOffset){gestureState.set({...gestureState.get(),requiresPop:true});}if(lockScrolling.get()&&newYOffset<minYOffset){lockScrolling.set(false);}else if(!lockScrolling.get()&&scrollPosition.get()<=0){lockScrolling.set(true);}if(gestureState.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{gestureState.set({...gestureState.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(gestureState.get().absoluteXStart-event.absoluteX)*-1,y:(gestureState.get().absoluteYStart-event.absoluteY)*-1});}}" };
let closure_43 = { code: "function VoicePanelUITsx13(event,manager){const{State,gestureState,mode,VoicePanelModes,scrollPosition,isQuest,MIN_GESTURE_MOVE,focused,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset,lockScrolling}=this.__closure;if(event.state!==State.BEGAN||gestureState.get().active||gestureState.get().cancel)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=gestureState.get().absoluteYStart-absoluteY;const xDiff=gestureState.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;let startGesture=false;if(mode.get()===VoicePanelModes.PANEL){var _focused$get;const scrollPos=Math.floor(scrollPosition.get());if(yDiff<0&&scrollPos<=0){if(isQuest){startGesture=absoluteMovement>MIN_GESTURE_MOVE;}else{startGesture=true;}}else if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!=null&&isNotPullDownGesture){manager.fail();}}else if(mode.get()===VoicePanelModes.PIP&&absoluteMovement>MIN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true});gestureState.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY+scrollPosition.get(),cancel:false,active:true,requiresPop:gestureState.get().requiresPop});lockScrolling.set(true);manager.activate();}else{updateSharedValueIfChanged(gestureState,{absoluteYStart:absoluteY,absoluteXStart:absoluteX});}}" };
let closure_44 = { code: "function VoicePanelUITsx14(event){const{gestureState,updateSharedValueIfChanged,wrapperOffset,connected,mode,VoicePanelModes}=this.__closure;if(gestureState.get().cancel)return;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});gestureState.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:false,requiresPop:connected.get()&&mode.get()===VoicePanelModes.PANEL});}" };
let closure_45 = { code: "function VoicePanelUITsx15(event,manager){const{IS_IOS,windowDimensions,safeArea,gestureState,isFocusedVideoZoomed,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes}=this.__closure;const touch=event.allTouches[0];if(IS_IOS&&touch!=null&&touch.absoluteY>windowDimensions.get().height-safeArea.get().bottom){gestureState.set({...gestureState.get(),cancel:true});manager.activate();return;}if(isFocusedVideoZoomed.get()||mode.get()===VoicePanelModes.PANEL&&controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){gestureState.set({...gestureState.get(),cancel:true});manager.fail();}}" };
let closure_46 = { code: "function onBeginDrag_VoicePanelUITsx16(event){const{scrollPosition,dragScrolling}=this.__closure;scrollPosition.set(event.contentOffset.y);dragScrolling.set(true);}" };
let closure_47 = { code: "function onEndDrag_VoicePanelUITsx17(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
let closure_48 = { code: "function onMomentumEnd_VoicePanelUITsx18(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
let closure_49 = { code: "function onScroll_VoicePanelUITsx19(event){const{lockScrolling,isSnappingBack,scrollPosition,scrollTo,scrollerRef,computeViewableChunksFromScrollPosition,windowDimensions,scrollableRegionSize,updateSharedValueIfChanged,viewableChunks}=this.__closure;if(lockScrolling.get()){if(isSnappingBack.get()){return;}if(scrollPosition.get()<0){scrollPosition.set(0);}const targetScrollPosition=scrollPosition.get();if(Math.abs(event.contentOffset.y-targetScrollPosition)<0.1){return;}isSnappingBack.set(true);scrollTo(scrollerRef,0,targetScrollPosition,false);isSnappingBack.set(false);}else{let newViewableChunks;if(scrollPosition.get()!==event.contentOffset.y){newViewableChunks=computeViewableChunksFromScrollPosition(scrollPosition.get(),windowDimensions.get().height,scrollableRegionSize.get());}scrollPosition.set(event.contentOffset.y);newViewableChunks!=null&&updateSharedValueIfChanged(viewableChunks,newViewableChunks);}}" };
let closure_50 = { code: "function VoicePanelUITsx20(){const{mode}=this.__closure;return mode.get();}" };
let closure_51 = { code: "function VoicePanelUITsx21(mode,previous){const{VoicePanelModes,lockScrolling}=this.__closure;if(previous==null||mode===previous)return;if(mode===VoicePanelModes.PANEL&&previous===VoicePanelModes.PIP){lockScrolling.set(false);}else if(mode===VoicePanelModes.PIP){lockScrolling.set(true);}}" };
let closure_52 = { code: "function VoicePanelUITsx22(){const{mode,VoicePanelModes,focused,lockScrolling,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter}=this.__closure;const isPIPMode=mode.get()===VoicePanelModes.PIP;const disableScroll=isPIPMode||focused.get()!=null;return{pointerEvents:isPIPMode?'none':'auto',scrollEnabled:!disableScroll,showsVerticalScrollIndicator:lockScrolling.get()?false:!disableScroll,scrollIndicatorInsets:{top:calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height-safeArea.get().top,bottom:safeArea.get().bottom}};}" };
let closure_53 = { code: "function VoicePanelUITsx23(){const{mode,VoicePanelModes,connected,gestureState,wrapperDimensions,wrapperOffset,windowDimensions}=this.__closure;switch(mode.get()){case VoicePanelModes.PIP:case VoicePanelModes.DISMISSED:return 0;default:{if(connected.get()&&gestureState.get().active&&gestureState.get().requiresPop){return 1;}const drawerTop=wrapperDimensions.get().drawerY+(wrapperOffset.get().gestureActive?wrapperOffset.get().y:0);const screenSize=windowDimensions.get().height;const percentage=(screenSize-drawerTop)/screenSize;return Math.min(Math.max(percentage,0),1);}}}" };
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
computeBorderRadii.__workletHash = 4574399878042;
computeBorderRadii.__initData = { code: "function computeBorderRadii_VoicePanelUITsx24({mode:mode,connected:connected}){const{VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP,DEFAULT_BORDER_RADIUS}=this.__closure;if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return!connected?DEFAULT_BORDER_RADIUS:0;}" };
let closure_55 = { code: "function VoicePanelUITsx25(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().height;}" };
let closure_56 = { code: "function VoicePanelUITsx26(){const{mode,connected,windowDimensions,safeArea,focused,pipState,controlsHeight,preJoinContentSize,globalStatusIndicatorHeight}=this.__closure;return{modeToSet:mode.get(),connected:connected.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get(),focused:focused.get(),pipState:pipState,controlsHeight:controlsHeight.get(),preJoinContentSize:preJoinContentSize.get(),globalStatusIndicatorHeight:globalStatusIndicatorHeight};}" };
let closure_57 = { code: "function VoicePanelUITsx27(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperDimensions,updateSharedValueIfChanged,wrapperOffset,getMaxPanelWidth,getPanelX,roundToNearestPixel,windowDimensions}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{modeToSet:modeToSet,connected:connected,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,pipState:pipState,controlsHeight:controlsHeight,preJoinContentSize:preJoinContentSize,globalStatusIndicatorHeight:globalStatusIndicatorHeight}=props;if(modeToSet===VoicePanelModes.PIP&&pipState.id==null){return;}const animated=previous!=null?windowHeight===previous.windowHeight&&windowWidth===previous.windowWidth&&safeArea.top===previous.safeArea.top&&safeArea.bottom===previous.safeArea.bottom&&safeArea.left===previous.safeArea.left&&safeArea.right===previous.safeArea.right:true;let{drawerX:drawerX,drawerY:drawerY}=wrapperDimensions.get();const availableHeight=windowHeight-globalStatusIndicatorHeight;if(modeToSet===VoicePanelModes.PANEL){if(connected){drawerX=0;drawerY=0;updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else{const drawerWidth=getMaxPanelWidth({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeArea.left,safeAreaRight:safeArea.right});drawerX=getPanelX(windowWidth,drawerWidth);drawerY=roundToNearestPixel(Math.max(availableHeight-preJoinContentSize-controlsHeight-safeArea.bottom,availableHeight-0.8*availableHeight));updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:drawerWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});}}else if(modeToSet===VoicePanelModes.DISMISSED){if(connected){updateSharedValueIfChanged(wrapperDimensions,{mode:modeToSet});}else{updateSharedValueIfChanged(wrapperDimensions,{drawerY:windowDimensions.get().height+60,mode:modeToSet});}}}" };
let closure_58 = { code: "function VoicePanelUITsx28(){const{useReducedMotion,wrapperDimensions,wrapperOffset,connected,mode,VoicePanelModes,runOnJS,updateSourceTrackingView,withSpring,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,DRAWER_SIZE_PHYSICS}=this.__closure;const animateXY=!useReducedMotion.get()&&wrapperDimensions.get().animated||wrapperOffset.get().gestureActive;let{gestureActive:gestureActive}=wrapperOffset.get();let{drawerY:y,drawerX:x}=wrapperDimensions.get();gestureActive=gestureActive&&!connected.get();if(gestureActive){y+=Math.max(wrapperOffset.get().y,0);x+=wrapperOffset.get().x;}const updateSourceTrackingViewHelper=function(finished){if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}};return{transform:[{translateX:withSpring(x,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},{translateY:withSpring(y,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)}]};}" };
let closure_59 = { code: "function VoicePanelUITsx29(finished){const{mode,VoicePanelModes,runOnJS,updateSourceTrackingView}=this.__closure;if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}}" };
let closure_60 = { code: "function VoicePanelUITsx30(){const{computeBorderRadii,mode,connected,wrapperDimensions,withSpring,BORDER_RADIUS_PHYSICS,VoicePanelModes,styles}=this.__closure;const borderRadius=computeBorderRadii({mode:mode.get(),connected:connected.get()});return{width:wrapperDimensions.get().drawerWidth,height:wrapperDimensions.get().drawerHeight,borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS),pointerEvents:mode.get()===VoicePanelModes.PANEL?'auto':'none',backgroundColor:connected.get()?'transparent':styles.maskDefaultBackground.backgroundColor};}" };
let closure_61 = { code: "function VoicePanelUITsx31(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
let closure_62 = { code: "function VoicePanelUITsx32(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Window dimensions changed:',JSON.stringify(value));}" };
let closure_63 = { code: "function VoicePanelUITsx33(){const{wrapperDimensions}=this.__closure;return wrapperDimensions.get();}" };
let closure_64 = { code: "function VoicePanelUITsx34(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Wrapper dimensions changed:',JSON.stringify(value));}" };
let closure_66 = { mass: 0.6, damping: 30, stiffness: 400, overshootClamping: true };
let closure_67 = { code: "function VoicePanelUITsx35(){const{withSpring,opacity,DrawerShadeOpacityPhysics}=this.__closure;return{opacity:withSpring(opacity.get(),DrawerShadeOpacityPhysics),pointerEvents:opacity.get()===0?'none':'auto'};}" };
let closure_68 = importAllResult.memo((onPress) => {
  const opacity = onPress.opacity;
  const tmp = callback2();
  let obj = opacity(4146);
  const fn = function o() {
    const obj = { opacity: null, pointerEvents: null };
    obj[0] = opacity(outer1_2[12]).withSpring(opacity.get(), outer1_66);
    let str = "auto";
    if (0 === opacity.get()) {
      str = "none";
    }
    obj[1] = str;
    return obj;
  };
  obj = { withSpring: opacity(4694).withSpring, opacity, DrawerShadeOpacityPhysics: closure_66 };
  fn.__closure = obj;
  fn.__workletHash = 3656047169284;
  fn.__initData = closure_67;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: null };
  items = [StyleSheet.absoluteFill, tmp.shade, animatedStyle];
  obj[3] = callback(closure_6, { style: tmp.shadePressable, onPress: onPress.onPress });
  return callback(importDefault(4146).View, obj);
});
const memoResult = importAllResult.memo(function VoicePanelUI() {
  let channelId;
  let dragScrolling;
  let scrollPosition;
  let tmp = token();
  const context = callback2.useContext(dragScrolling(callback[17]));
  ({ scrollPosition, dragScrolling, channelId } = context);
  scrollPosition = channelId;
  const tmp6 = callback1(callback2.useState(false), 2);
  dragScrolling = tmp6[1];
  callback = callback2.useRef(-1);
  const items = [channelId];
  callback = callback2.useCallback((arg0) => {
    let closure_0 = arg0;
    clearTimeout(callback.current);
    scrollPosition(callback[36]).batchUpdates(() => {
      if (closure_0) {
        const _setTimeout = setTimeout;
        outer1_2.current = setTimeout(() => {
          const state = outer2_9.getState();
          const result = state.setChannelPanelFullscreen(outer1_0, closure_0);
          const state1 = outer2_8.getState();
          const freezeLock = state1.requestFreezeLock({ lockEnabled: closure_0, key: "voice-panel-freeze-" + outer1_0 });
        }, 1000);
      } else {
        let state = dismissToPIPGestureRef.getState();
        let result = state.setChannelPanelFullscreen(closure_0, tmp);
        let state1 = dismissPanel.getState();
        const obj = { lockEnabled: null, key: null };
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
  callback1 = callback2.useCallback((arg0) => {
    const state = dismissToPIPGestureRef.getState();
    state.setChannelPanelOpen(scrollPosition, arg0);
  }, items1);
  const items2 = [channelId];
  callback2 = callback2.useCallback((arg0) => {
    const state = dismissToPIPGestureRef.getState();
    state.setChannelPanelPIP(scrollPosition, arg0);
  }, items2);
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
  let c20;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue3;
  let first;
  let closure_26;
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
  c20 = tmp12;
  let obj = scrollPosition(callback[15]);
  sharedValue = obj.useSharedValue(0);
  let obj1 = scrollPosition(callback[15]);
  sharedValue1 = obj1.useSharedValue(false);
  let obj2 = scrollPosition(callback[15]);
  sharedValue2 = obj2.useSharedValue(false);
  let obj3 = scrollPosition(callback[15]);
  obj = { start: 0, end: safeArea };
  sharedValue3 = obj3.useSharedValue(obj);
  const tmp18 = callback1(callback2.useState(true), 2);
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
            tmp2Result.runOnJS(callback1)(true);
          } else {
            tmp2(tmp3[15]).runOnJS(callback1)(false);
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
  const items3 = [channelId2];
  callback3 = callback2.useCallback((arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = wrapperOffset(controlsSpecs.getParticipant(channelId2, arg0));
    }
    callback(!tmp);
  }, items3);
  let obj9 = scrollPosition(callback[15]);
  function me() {
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
  me.__closure = { mode, VoicePanelModes: setMode, focused };
  me.__workletHash = 6595654888031;
  me.__initData = closure_36;
  class Pe {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = scrollPosition;
        tmp2 = useRef;
        obj = scrollPosition(useRef[15]);
        tmp3 = c30;
        tmp4 = obj.runOnJS(c30)(arg0);
      }
      return;
    }
  }
  obj1 = { runOnJS: scrollPosition(callback[15]).runOnJS, handleFocusChange: callback3 };
  Pe.__closure = obj1;
  Pe.__workletHash = 15236018210415;
  Pe.__initData = closure_37;
  const animatedReaction1 = obj9.useAnimatedReaction(me, Pe);
  const items4 = [tmp12, connected, controlsSpecs, dismissPanel, dismissToPIPGestureRef, focused, first, hideControls, sharedValue4, isFocusedVideoZoomed, sharedValue1, mode, safeArea, scrollPosition, memo, setMode, showControls, windowDimensions, wrapperDimensions, wrapperOffset];
  const memo1 = callback2.useMemo(() => {
    const Gesture = scrollPosition(callback[19]).Gesture;
    const Gesture2 = scrollPosition(callback[19]).Gesture;
    let obj = { left: -1 * _undefined.left, right: -1 * _undefined.right };
    const TapResult = Gesture2.Tap();
    const hitSlopResult = Gesture2.Tap().hitSlop(obj);
    const enabledResult = Gesture2.Tap().hitSlop(obj).enabled(first);
    const fn = function h() {
      if (store2.get()) {
        if (store4.get() !== outer1_15.PIP) {
          if (store3.get().mode === outer1_18.HIDDEN) {
            outer1_0(outer1_2[15]).runOnJS(closure_16)({ debounce: true });
            const obj2 = outer1_0(outer1_2[15]);
          } else {
            outer1_0(outer1_2[15]).runOnJS(closure_11)({ debounce: true });
            const obj = outer1_0(outer1_2[15]);
          }
        }
      }
    };
    obj = { connected, mode, VoicePanelModes: setMode, controlsSpecs, VoicePanelControlsModes: wrapperDimensions, runOnJS: scrollPosition(callback[15]).runOnJS, showControls, hideControls };
    fn.__closure = obj;
    fn.__workletHash = 15350003421175;
    fn.__initData = outer1_38;
    const maxDistanceResult = Gesture2.Tap().hitSlop(obj).enabled(first).maxDistance(30);
    const Gesture3 = scrollPosition(callback[19]).Gesture;
    const onStartResult = Gesture2.Tap().hitSlop(obj).enabled(first).maxDistance(30).onStart(fn);
    const PanResult = Gesture3.Pan();
    const enabledResult1 = Gesture3.Pan().enabled(first);
    const manualActivationResult = Gesture3.Pan().enabled(first).manualActivation(true);
    const maxPointersResult = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1);
    let obj1 = { left: -1 * _undefined.left, right: -1 * _undefined.right };
    const hitSlopResult1 = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1).hitSlop({ left: -1 * _undefined.left, right: -1 * _undefined.right });
    let result = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1).hitSlop({ left: -1 * _undefined.left, right: -1 * _undefined.right }).withRef(dismissToPIPGestureRef).shouldCancelWhenOutside(false);
    let result1 = result.simultaneousWithExternalGesture(memo);
    class S {
      constructor(arg0, arg1) {
        first = arg0.allTouches[0];
        if (outer1_13) {
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
          tmp7 = outer1_15;
          tmp8 = closure_13.get() === outer1_15.PANEL;
          if (tmp8) {
            tmp9 = getParticipants;
            tmp10 = outer1_18;
            tmp8 = getParticipants.get().mode === outer1_18.DRAWER;
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
    S.__workletHash = 13538548264193;
    S.__initData = outer1_45;
    let obj2 = { IS_IOS: mode, windowDimensions, safeArea, gestureState: sharedValue4, isFocusedVideoZoomed, mode, VoicePanelModes: setMode, controlsSpecs, VoicePanelControlsModes: wrapperDimensions };
    const withRefResult = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1).hitSlop({ left: -1 * _undefined.left, right: -1 * _undefined.right }).withRef(dismissToPIPGestureRef);
    const fn2 = function u(arg0) {
      let obj = store9;
      if (!store9.get().cancel) {
        outer1_1(outer1_2[21])(closure_19, { x: 0, y: 0 });
        obj = { absoluteXStart: null, absoluteYStart: null, active: false, cancel: false, requiresPop: null };
        ({ absoluteX: obj2[0], absoluteY: obj2[1] } = arg0);
        let value = store2.get();
        if (value) {
          value = store4.get() === outer1_15.PANEL;
        }
        obj[4] = value;
        const result = obj.set(obj);
      }
    };
    const onTouchesDownResult = result1.onTouchesDown(S);
    fn2.__closure = { gestureState: sharedValue4, updateSharedValueIfChanged: dragScrolling(callback[21]), wrapperOffset, connected, mode, VoicePanelModes: setMode };
    fn2.__workletHash = 11622638269935;
    fn2.__initData = outer1_44;
    let obj3 = { gestureState: sharedValue4, updateSharedValueIfChanged: dragScrolling(callback[21]), wrapperOffset, connected, mode, VoicePanelModes: setMode };
    const fn3 = function c(state, fail) {
      let absoluteX;
      let absoluteY;
      if (state.state === outer1_0(outer1_2[19]).State.BEGAN) {
        if (!store9.get().active) {
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
            let obj = store4;
            if (store4.get() === outer1_15.PANEL) {
              const _Math6 = Math;
              if (diff < 0) {
                if (Math.floor(store.get()) <= 0) {
                  let tmp23 = !outer1_33;
                  if (outer1_33) {
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
                outer1_0(tmp2[15]).runOnJS(outer1_1(tmp2[22]))();
                flag = true;
                const tmpResult = outer1_0(tmp2[15]);
              }
            }
            const tmp25 = outer1_1(tmp2[21]);
            if (flag) {
              tmp25(closure_19, { gestureActive: true });
              obj = { absoluteXStart: null, absoluteYStart: null, cancel: false, active: true, requiresPop: null };
              obj[0] = absoluteX;
              obj[1] = absoluteY + store.get();
              obj[4] = obj5.get().requiresPop;
              const result = obj5.set(obj);
              const result1 = store8.set(true);
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
    fn3.__closure = { State: scrollPosition(callback[19]).State, gestureState: sharedValue4, mode, VoicePanelModes: setMode, scrollPosition, isQuest: outer1_33, MIN_GESTURE_MOVE: 10, focused, runOnJS: scrollPosition(callback[15]).runOnJS, triggerIOSHaptic: dragScrolling(callback[22]), updateSharedValueIfChanged: dragScrolling(callback[21]), wrapperOffset, lockScrolling: sharedValue1 };
    fn3.__workletHash = 262321069191;
    fn3.__initData = outer1_43;
    let obj4 = { State: scrollPosition(callback[19]).State, gestureState: sharedValue4, mode, VoicePanelModes: setMode, scrollPosition, isQuest: outer1_33, MIN_GESTURE_MOVE: 10, focused, runOnJS: scrollPosition(callback[15]).runOnJS, triggerIOSHaptic: dragScrolling(callback[22]), updateSharedValueIfChanged: dragScrolling(callback[21]), wrapperOffset, lockScrolling: sharedValue1 };
    const fn4 = function l(absoluteY) {
      let obj = store9;
      if (!store9.get().cancel) {
        let merged = store4.get();
        if (merged !== outer1_15.PIP) {
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
          if (store8.get()) {
            if (result < 0) {
              const result2 = obj4.set(false);
            }
            let diff = result;
            if (!obj.get().requiresPop) {
              obj = { y: null, x: 0 };
              obj[0] = diff;
              outer1_1(outer1_2[21])(closure_19, obj);
            } else {
              const _Math = Math;
              merged = Math.max(result, 0);
              if (merged > 180) {
                const obj1 = {};
                merged = Object.assign(obj.get());
                obj1.requiresPop = false;
                const result3 = obj.set(obj1);
                const obj6 = outer1_0(outer1_2[15]);
                outer1_0(outer1_2[15]).runOnJS(outer1_0(outer1_2[23]).triggerHapticFeedback)(outer1_0(outer1_2[23]).HapticFeedbackTypes.IMPACT_MEDIUM);
                diff = result;
                const runOnJSResult = outer1_0(outer1_2[15]).runOnJS(outer1_0(outer1_2[23]).triggerHapticFeedback);
              }
            }
            diff = merged - merged * outer1_20;
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
          const obj2 = { x: null, y: null };
          obj2[0] = -1 * (obj.get().absoluteXStart - absoluteY.absoluteX);
          obj2[1] = -1 * (obj.get().absoluteYStart - absoluteY.absoluteY);
          outer1_1(outer1_2[21])(closure_19, obj2);
          const tmp7 = outer1_1(outer1_2[21]);
        }
      }
    };
    const onTouchesMoveResult = onBeginResult.onTouchesMove(fn3);
    fn4.__closure = { gestureState: sharedValue4, mode, VoicePanelModes: setMode, connected, lockScrolling: sharedValue1, scrollPosition, POP_RESISTANCE: _undefined, PIP_POP_HEIGHT: 180, runOnJS: scrollPosition(callback[15]).runOnJS, triggerHapticFeedback: scrollPosition(callback[23]).triggerHapticFeedback, HapticFeedbackTypes: scrollPosition(callback[23]).HapticFeedbackTypes, updateSharedValueIfChanged: dragScrolling(callback[21]), wrapperOffset };
    fn4.__workletHash = 2084376677229;
    fn4.__initData = outer1_42;
    let obj5 = { gestureState: sharedValue4, mode, VoicePanelModes: setMode, connected, lockScrolling: sharedValue1, scrollPosition, POP_RESISTANCE: _undefined, PIP_POP_HEIGHT: 180, runOnJS: scrollPosition(callback[15]).runOnJS, triggerHapticFeedback: scrollPosition(callback[23]).triggerHapticFeedback, HapticFeedbackTypes: scrollPosition(callback[23]).HapticFeedbackTypes, updateSharedValueIfChanged: dragScrolling(callback[21]), wrapperOffset };
    const fn5 = function s() {
      const result = store8.set(false);
      outer1_1(outer1_2[21])(closure_29, { cancel: false, active: false });
      outer1_1(outer1_2[21])(closure_19, { gestureActive: false });
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn4);
    fn5.__closure = { lockScrolling: sharedValue1, updateSharedValueIfChanged: dragScrolling(callback[21]), gestureState: sharedValue4, wrapperOffset };
    fn5.__workletHash = 8529626440714;
    fn5.__initData = outer1_41;
    let obj6 = { lockScrolling: sharedValue1, updateSharedValueIfChanged: dragScrolling(callback[21]), gestureState: sharedValue4, wrapperOffset };
    const fn6 = function n(velocityY) {
      let absoluteX;
      let absoluteY;
      let pipX;
      let pipY;
      let velocityX;
      let obj = store9;
      if (!store9.get().cancel) {
        velocityY = velocityY.velocityY;
        ({ velocityX, absoluteX, absoluteY } = velocityY);
        if (store4.get() === outer1_15.PIP) {
          obj = { velocityX: null, velocityY: null, absoluteX: null, absoluteY: null, windowDimensions: null, safeArea: null };
          obj[0] = velocityX;
          obj[1] = velocityY;
          obj[2] = absoluteX;
          obj[3] = absoluteY;
          obj[4] = store6.get();
          obj[5] = store5.get();
          const result = outer1_0(outer1_2[24]).calculatePIPPositionFromVelocity(obj);
          ({ pipX, pipY } = result);
          obj = { pipX: null, pipY: null };
          obj[0] = pipX;
          obj[1] = pipY;
          outer1_1(outer1_2[21])(store7, obj);
          outer1_1(outer1_2[21])(closure_19, { gestureActive: false });
          const obj5 = outer1_0(outer1_2[24]);
        } else if (obj2.get() === tmp2.PANEL) {
          if (velocityY > 0) {
            if (store2.get()) {
              if (obj.get().requiresPop) {
                outer1_1(outer1_2[21])(closure_19, { gestureActive: false, x: 0, y: 0 });
                const result1 = store8.set(false);
              } else {
                outer1_0(outer1_2[15]).runOnJS(closure_15)(tmp2.PIP);
                outer1_1(outer1_2[21])(closure_19, { gestureActive: false, x: 0, y: 0 });
                const obj4 = outer1_0(outer1_2[15]);
              }
            } else {
              const diff = store7.get().drawerHeight - store7.get().drawerY;
              if (closure_19.get().y > 0.2 * diff) {
                outer1_1(outer1_2[21])(tmp12, { gestureActive: false });
                outer1_0(outer1_2[15]).runOnJS(module_8784)();
                const obj3 = outer1_0(outer1_2[15]);
              } else {
                outer1_1(outer1_2[21])(tmp12, { gestureActive: false, x: 0, y: 0 });
                const result2 = store8.set(false);
              }
            }
          } else {
            outer1_1(outer1_2[21])(closure_19, { gestureActive: false, x: 0, y: 0 });
            const result3 = store8.set(false);
          }
        }
        obj2 = store4;
      }
    };
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn5);
    fn6.__closure = { gestureState: sharedValue4, mode, VoicePanelModes: setMode, calculatePIPPositionFromVelocity: scrollPosition(callback[24]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: dragScrolling(callback[21]), wrapperDimensions, wrapperOffset, connected, runOnJS: scrollPosition(callback[15]).runOnJS, setMode, lockScrolling: sharedValue1, MIN_DISMISS_MOVE_PERCENTAGE: 0.2, dismissPanel };
    fn6.__workletHash = 10532794222556;
    fn6.__initData = outer1_40;
    const obj7 = { gestureState: sharedValue4, mode, VoicePanelModes: setMode, calculatePIPPositionFromVelocity: scrollPosition(callback[24]).calculatePIPPositionFromVelocity, windowDimensions, safeArea, updateSharedValueIfChanged: dragScrolling(callback[21]), wrapperDimensions, wrapperOffset, connected, runOnJS: scrollPosition(callback[15]).runOnJS, setMode, lockScrolling: sharedValue1, MIN_DISMISS_MOVE_PERCENTAGE: 0.2, dismissPanel };
    const fn7 = function t() {
      outer1_1(outer1_2[21])(closure_29, { cancel: false, active: false });
    };
    const onEndResult = onTouchesCancelledResult.onEnd(fn6);
    fn7.__closure = { updateSharedValueIfChanged: dragScrolling(callback[21]), gestureState: sharedValue4 };
    fn7.__workletHash = 141147937726;
    fn7.__initData = outer1_39;
    return Gesture.Race(onStartResult, onEndResult.onFinalize(fn7));
  }, items4);
  let obj11 = scrollPosition(callback[15]);
  obj2 = { onBeginDrag: null, onEndDrag: null, onMomentumEnd: null, onScroll: null };
  class Ae {
    constructor(arg0) {
      result = scrollPosition.set(arg0.contentOffset.y);
      result1 = dragScrolling.set(true);
      return;
    }
  }
  Ae.__closure = { scrollPosition, dragScrolling };
  Ae.__workletHash = 57033362164;
  Ae.__initData = closure_46;
  obj2[0] = Ae;
  class Ve {
    constructor() {
      result = dragScrolling.set(false);
      return;
    }
  }
  Ve.__closure = { dragScrolling };
  Ve.__workletHash = 14366146937201;
  Ve.__initData = closure_47;
  obj2[1] = Ve;
  function ve() {
    const result = dragScrolling.set(false);
  }
  ve.__closure = { dragScrolling };
  ve.__workletHash = 12919609750790;
  ve.__initData = closure_48;
  obj2[2] = ve;
  class Oe {
    constructor(arg0) {
      if (c22.get()) {
        obj3 = c23;
        if (c23.get()) {
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
            tmp14 = useRef;
            obj5 = scrollPosition(useRef[15]);
            tmp15 = c28;
            flag2 = false;
            tmp16 = obj5;
            num7 = 0;
            tmp17 = value;
            flag3 = false;
            scrollToResult = obj5.scrollTo(c28, 0, value, false);
            result2 = obj3.set(false);
          }
        }
      } else {
        obj = scrollPosition;
        tmp = undefined;
        if (scrollPosition.get() !== arg0.contentOffset.y) {
          tmp20 = c30;
          tmp22 = windowDimensions;
          value1 = obj.get();
          tmp23 = useSharedValue;
          value2 = useSharedValue.get();
          if (typeof c30 !== "find") {
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
          tmp27 = useRef;
          tmp28 = c24;
          tmp29 = dragScrolling(useRef[21])(c24, tmp);
        }
      }
      return;
    }
  }
  obj3 = { lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: scrollPosition(callback[15]).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition: callback3, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: dragScrolling(callback[21]), viewableChunks: sharedValue3 };
  Oe.__closure = obj3;
  Oe.__workletHash = 13292683579177;
  Oe.__initData = closure_49;
  obj2[3] = Oe;
  const tmp4 = dragScrolling(callback[34]);
  let obj14 = scrollPosition(callback[15]);
  class Ee {
    constructor() {
      return mode.get();
    }
  }
  Ee.__closure = { mode };
  Ee.__workletHash = 9335671323831;
  Ee.__initData = closure_50;
  class De {
    constructor(arg0, arg1) {
      tmp = null != arg1 && arg0 !== arg1;
      if (tmp) {
        tmp2 = setMode;
        if (arg0 === setMode.PANEL) {
          if (arg1 === tmp2.PIP) {
            tmp5 = c22;
            flag2 = false;
            result = c22.set(false);
          }
        }
        if (arg0 === tmp2.PIP) {
          tmp3 = c22;
          flag = true;
          result1 = c22.set(true);
        }
      }
      return;
    }
  }
  De.__closure = { VoicePanelModes: setMode, lockScrolling: sharedValue1 };
  De.__workletHash = 15902278985136;
  De.__initData = closure_51;
  const animatedReaction2 = obj14.useAnimatedReaction(Ee, De);
  let obj15 = scrollPosition(callback[25]);
  token = obj15.useToken(dragScrolling(callback[14]).modules.mobile.VOICE_PANEL_GUTTER);
  let obj16 = scrollPosition(callback[15]);
  class Me {
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
      value = c22.get();
      tmp7 = !value;
      if (!value) {
        tmp7 = tmp5;
      }
      obj[2] = tmp7;
      obj = { top: null, bottom: null };
      tmp8 = dragScrolling(useRef[26]);
      obj[0] = tmp8(safeArea.get(), hideControls).height - safeArea.get().top;
      obj[1] = safeArea.get().bottom;
      obj[3] = obj;
      return obj;
    }
  }
  const animatedScrollHandler = obj11.useAnimatedScrollHandler(obj2);
  Me.__closure = { mode, VoicePanelModes: setMode, focused, lockScrolling: sharedValue1, calculateVoicePanelHeaderSpecs: dragScrolling(callback[26]), safeArea, edgeGutter: token };
  Me.__workletHash = 15030832737033;
  Me.__initData = closure_52;
  const items5 = [sharedValue];
  const animatedProps = obj16.useAnimatedProps(Me);
  const callback4 = callback2.useCallback((arg0, arg1) => {
    const result = sharedValue.set(arg1);
  }, items5);
  let obj4 = { mode, VoicePanelModes: setMode, focused, lockScrolling: sharedValue1, calculateVoicePanelHeaderSpecs: dragScrolling(callback[26]), safeArea, edgeGutter: token };
  class Te {
    constructor() {
      value = mode.get();
      if (setMode.PIP !== value) {
        if (setMode.DISMISSED !== value) {
          tmp6 = connected;
          if (connected.get()) {
            obj = useAnimatedRef;
            if (useAnimatedRef.get().active) {
              if (obj.get().requiresPop) {
                num4 = 1;
                return 1;
              }
            }
          }
          tmp2 = wrapperDimensions;
          obj2 = wrapperOffset;
          num = 0;
          num2 = 0;
          if (wrapperOffset.get().gestureActive) {
            num2 = obj2.get().y;
          }
          tmp4 = windowDimensions;
          sum = wrapperDimensions.get().drawerY + num2;
          height = windowDimensions.get().height;
          tmp5 = globalThis;
          _Math = Math;
          _Math2 = Math;
          num3 = 1;
          return Math.min(Math.max((height - sum) / height, 0), 1);
        }
      }
      return 0;
    }
  }
  Te.__closure = { mode, VoicePanelModes: setMode, connected, gestureState: sharedValue4, wrapperDimensions, wrapperOffset, windowDimensions };
  Te.__workletHash = 7328947258749;
  Te.__initData = closure_53;
  const derivedValue = scrollPosition(callback[15]).useDerivedValue(Te);
  const tmp33 = dragScrolling(callback[37])();
  callback1 = tmp33;
  const items6 = [tmp33];
  const effect = callback2.useEffect(() => {
    callback1.lock();
  }, items6);
  const effect1 = callback2.useEffect(() => dragScrolling(true), []);
  let tmp36 = null;
  if (tmp6[0]) {
    obj5 = { value: null, children: null };
    obj5[0] = tmp4(dragScrolling(callback[35]).VOICE_PANEL).analyticsLocations;
    obj6 = { children: null };
    const items7 = [sharedValue(tmp2(tmp3[39]), {}), , ];
    obj7 = { opacity: null, onPress: null };
    obj7[0] = derivedValue;
    obj7[1] = context.dismissPanel;
    items7[1] = sharedValue(closure_68, obj7);
    const obj8 = { style: null, nativeID: null, accessibilityViewIsModal: true, layout: null, onAccessibilityEscape: null, children: null };
    obj8[0] = tmp.accessibilityView;
    let _HermesInternal = HermesInternal;
    let tmp2Result = tmp2(tmp3[40]);
    obj8[1] = "voice-panel-ui-" + channelId;
    obj8[3] = closure_26;
    obj8[4] = tmp2(tmp3[41]);
    const items8 = [sharedValue(tmp2(tmp3[42]), {}), , , ];
    obj9 = { wrapperOffset: null, children: null };
    obj9[0] = wrapperOffset;
    const obj10 = { zIndex: 2, children: null };
    obj11 = { wrapperOffset: null, gestureState: null, layout: null };
    obj11[0] = wrapperOffset;
    obj11[1] = sharedValue4;
    obj11[2] = closure_26;
    obj10[1] = sharedValue(tmp2(tmp3[43]), obj11);
    const items9 = [sharedValue(tmp13(tmp3[38]).LayerScope, obj10), ];
    const obj12 = { gesture: null, children: null };
    obj12[0] = memo1;
    const obj13 = { style: null, layout: null, collapsable: false, children: null };
    obj13[0] = channelId2.absoluteFill;
    obj13[1] = closure_26;
    tmp2Result = tmp2(tmp3[33]);
    obj14 = { gesture: null, children: null };
    obj14[0] = memo;
    obj15 = { layout: null, ref: null, onScroll: null, onMomentumScrollEnd: null, animatedProps: null, style: null, onContentSizeChange: null, contentContainerStyle: null, scrollEventThrottle: 8.333333333333334, children: null };
    obj15[0] = animatedRef;
    obj15[1] = animatedRef;
    obj15[2] = animatedScrollHandler;
    obj15[3] = sharedValue2;
    obj15[4] = animatedProps;
    obj15[5] = tmp.scrollView;
    obj15[6] = callback4;
    obj15[7] = tmp.scrollViewContent;
    obj16 = { viewableChunks: null };
    obj16[0] = sharedValue3;
    const items10 = [sharedValue(tmp2(tmp3[44]), obj16), sharedValue(tmp2(tmp3[45]), {})];
    obj15[9] = items10;
    obj14[1] = sharedValue1(closure_32, obj15);
    obj13[3] = sharedValue(tmp13(tmp3[19]).GestureDetector, obj14);
    obj12[1] = sharedValue(tmp2Result, obj13);
    items9[1] = sharedValue(tmp13(tmp3[19]).GestureDetector, obj12);
    obj9[1] = items9;
    items8[1] = sharedValue1(AnimatedWrapper, obj9);
    items8[2] = sharedValue(tmp2(tmp3[46]), {});
    const obj17 = { gestureState: null };
    obj17[0] = sharedValue4;
    items8[3] = sharedValue(tmp2(tmp3[47]), obj17);
    obj8[5] = items8;
    items7[2] = sharedValue1(tmp2Result, obj8);
    obj6[0] = items7;
    obj5[1] = sharedValue1(tmp13(tmp3[38]).LayerScope, obj6);
    tmp36 = sharedValue(tmp13(tmp3[34]).AnalyticsLocationProvider, obj5);
  }
  return tmp36;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/VoicePanelUI.tsx");

export default memoResult;
export const REDUCED_MOTION_OPACITY_PHYSICS = obj3;