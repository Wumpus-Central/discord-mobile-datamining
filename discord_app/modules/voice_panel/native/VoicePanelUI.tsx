// discord_app/modules/voice_panel/native/VoicePanelUI.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import LegacyBaseButton from "../../../../_runtime/06140_LegacyBaseButton.js";
import ReanimatedNativeViewDefault from "../../core/native/ReanimatedNativeView.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import cheapWorkletShallowEqual from "../../reanimated/native/cheapWorkletShallowEqual.tsx";
import ExternalPipDefault from "../../external_pip/ExternalPip.android.tsx";
import updateSharedValueIfChangedDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import roundToNearestPixelDefault from "utils/roundToNearestPixel.tsx";
import VoicePanelStateContextDefault from "VoicePanelStateContext.tsx";
import calculateVoicePanelHeaderSpecsDefault from "header/calculateVoicePanelHeaderSpecs.tsx";
import utils_triggerIOSHapticDefault from "utils/triggerIOSHaptic.tsx";
import VoicePanelPIPUtils from "pip/VoicePanelPIPUtils.tsx";
import PanelSizeUtils from "utils/PanelSizeUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../calls/ChannelRTCStore.tsx";
import AppFreezeStore from "../../panels/morphable/AppFreezeStore.tsx";
import VoicePanelStore from "../VoicePanelStore.tsx";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function NOOP() {}
function log() {
  const items = [...HermesBuiltin.copyRestArgs()];
  log.log.apply(items);
}
function useWrapperStyles(wrapperOffset) {
  _require = wrapperOffset;
  const height = require("useGlobalStatusIndicatorState").useGlobalStatusIndicatorState().height;
  let tmp3 = closure_34();
  dependencyMap = tmp3;
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
  let obj = require("useGlobalStatusIndicatorState");
  obj2 = connected;
  const fn = function n() {
    return controlsSpecs.get().height;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 5538137200137;
  fn.__initData = __initData30;
  const derivedValue = require("ReanimatedRexport").useDerivedValue(fn);
  obj4 = require("VoicePanelPIPStateContext");
  const pIPState = obj4.usePIPState();
  let obj3 = require("ReanimatedRexport");
  const fn2 = function l() {
    return {
      modeToSet: mode.get(),
      connected: connected.get(),
      windowWidth: windowDimensions.get().width,
      windowHeight: windowDimensions.get().height,
      safeArea: safeArea.get(),
      focused: focused.get(),
      pipState: pIPState,
      controlsHeight: derivedValue.get(),
      preJoinContentSize: preJoinContentSize.get(),
      globalStatusIndicatorHeight: height,
    };
  };
  fn2.__closure = {
    mode,
    connected,
    windowDimensions,
    safeArea,
    focused,
    pipState: pIPState,
    controlsHeight: derivedValue,
    preJoinContentSize,
    globalStatusIndicatorHeight: height,
  };
  fn2.__workletHash = 7089847929407;
  fn2.__initData = __initData31;
  const fn3 = function s(safeAreaState, windowHeight) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp3)) {
      ({ modeToSet, connected, windowWidth, windowHeight, safeArea } = safeAreaState);
      if (modeToSet !== VoicePanelModes.PIP) {
        let tmp9 = null == windowHeight;
        if (!tmp9) {
          tmp9 =
            windowHeight === windowHeight.windowHeight &&
            windowWidth === windowHeight.windowWidth &&
            safeArea.top === windowHeight.safeArea.top &&
            safeArea.bottom === windowHeight.safeArea.bottom &&
            safeArea.left === windowHeight.safeArea.left &&
            safeArea.right === windowHeight.safeArea.right;
          const tmp10 =
            windowHeight === windowHeight.windowHeight &&
            windowWidth === windowHeight.windowWidth &&
            safeArea.top === windowHeight.safeArea.top &&
            safeArea.bottom === windowHeight.safeArea.bottom &&
            safeArea.left === windowHeight.safeArea.left &&
            safeArea.right === windowHeight.safeArea.right;
        }
        value = wrapperDimensions.get();
        ({ drawerX, drawerY } = value);
        const diff = windowHeight - tmp7;
        if (modeToSet === VoicePanelModes.PANEL) {
          if (connected) {
            obj2 = {
              drawerWidth: windowWidth,
              drawerHeight: diff,
              drawerX: 0,
              drawerY: 0,
              animated: tmp9,
              mode: modeToSet,
            };
            updateSharedValueIfChangedDefault(wrapperDimensions, obj2);
            updateSharedValueIfChangedDefault(closure_0, { gestureActive: false });
          } else {
            const obj3 = { windowWidth, connected, safeAreaLeft: null, safeAreaRight: null };
            ({ left: obj5.safeAreaLeft, right: obj5.safeAreaRight } = safeArea);
            const maxPanelWidth = PanelSizeUtils.getMaxPanelWidth(obj3);
            const tmpResult = PanelSizeUtils;
            const panelX = PanelSizeUtils.getPanelX(windowWidth, maxPanelWidth);
            const _Math = Math;
            const tmpResult2 = PanelSizeUtils;
            obj4 = {
              drawerWidth: maxPanelWidth,
              drawerHeight: diff,
              drawerX: panelX,
              drawerY: roundToNearestPixelDefault(Math.max(diff - tmp6 - tmp5 - safeArea.bottom, diff - 0.8 * diff)),
              animated: tmp9,
              mode: modeToSet,
            };
            updateSharedValueIfChangedDefault(wrapperDimensions, obj4);
            const tmp23Result = roundToNearestPixelDefault(
              Math.max(diff - tmp6 - tmp5 - safeArea.bottom, diff - 0.8 * diff),
            );
          }
        } else if (modeToSet === VoicePanelModes.DISMISSED) {
          const tmp32 = updateSharedValueIfChangedDefault;
          if (connected) {
            const obj6 = { mode: modeToSet };
            tmp32(wrapperDimensions, obj6);
            let tmp16 = importDefault;
          } else {
            const obj7 = { drawerY: windowDimensions.get().height + 60, mode: modeToSet };
            tmp32(wrapperDimensions, obj7);
            tmp16 = importDefault;
          }
          tmp16(9774)(closure_0, { gestureActive: false, x: 0, y: 0 });
        }
      }
    }
    obj = cheapWorkletShallowEqual;
    tmp3 = windowHeight;
  };
  let obj5 = require("ReanimatedRexport");
  fn3.__closure = {
    cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
    VoicePanelModes: animatedStyle1,
    wrapperDimensions,
    updateSharedValueIfChanged: height(9774),
    wrapperOffset,
    getMaxPanelWidth: require("PanelSizeUtils").getMaxPanelWidth,
    getPanelX: require("PanelSizeUtils").getPanelX,
    roundToNearestPixel: height(10725),
    windowDimensions,
  };
  fn3.__workletHash = 7580692586417;
  fn3.__initData = __initData32;
  const animatedReaction = obj5.useAnimatedReaction(fn2, fn3);
  let obj6 = {
    cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
    VoicePanelModes: animatedStyle1,
    wrapperDimensions,
    updateSharedValueIfChanged: height(9774),
    wrapperOffset,
    getMaxPanelWidth: require("PanelSizeUtils").getMaxPanelWidth,
    getPanelX: require("PanelSizeUtils").getPanelX,
    roundToNearestPixel: height(10725),
    windowDimensions,
  };
  class A {
    constructor() {
      value = useReducedMotion.get();
      gestureActive = !value;
      if (!value) {
        tmp2 = wrapperDimensions;
        gestureActive = wrapperDimensions.get().animated;
      }
      if (!gestureActive) {
        tmp3 = closure_0;
        gestureActive = closure_0.get().gestureActive;
      }
      obj = closure_0;
      value1 = closure_0.get();
      ({ gestureActive: gestureActive2, y } = value1);
      value2 = wrapperDimensions.get();
      ({ drawerY, drawerX } = value2);
      value3 = connected.get();
      tmp7 = !value3;
      if (!value3) {
        if (!gestureActive2) {
          num = 0;
          gestureActive2 = 0 !== y;
        }
        tmp7 = gestureActive2;
      }
      sum1 = drawerX;
      sum = drawerY;
      if (tmp7) {
        tmp10 = globalThis;
        _Math = Math;
        num2 = 0;
        sum = drawerY + Math.max(y, 0);
        sum1 = drawerX + value1.x;
      }
      class VoicePanelUITsx53 {
        constructor(arg0) {
          tmp = wrapperOffset;
          if (wrapperOffset) {
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
      obj1 = {
        mode,
        VoicePanelModes,
        runOnJS: closure_0(closure_2[15]).runOnJS,
        updateSourceTrackingView: closure_1(closure_2[34]).updateSourceTrackingView,
      };
      tmp11 = closure_0;
      tmp12 = closure_2;
      VoicePanelUITsx53.__closure = obj1;
      VoicePanelUITsx53.__workletHash = 6837142333833;
      VoicePanelUITsx53.__initData = closure_87;
      obj3 = closure_0(closure_2[12]);
      tmp13 = obj.get().gestureActive ? closure_17 : closure_32;
      str = "animate-never";
      str2 = "animate-never";
      if (gestureActive) {
        str2 = "animate-always";
      }
      obj8 = { translateX: obj3.withSpring(sum1, tmp13, str2, VoicePanelUITsx53) };
      items = [,];
      items[0] = obj8;
      tmp11Result = tmp11(tmp12[12]);
      tmp14 = obj.get().gestureActive ? closure_17 : closure_32;
      if (gestureActive) {
        str = "animate-always";
      }
      obj9 = { transform: null };
      obj10 = { translateY: tmp11Result.withSpring(sum, tmp14, str, VoicePanelUITsx53) };
      items[1] = obj10;
      obj9.transform = items;
      return obj9;
    }
  }
  let obj7 = require("ReanimatedRexport");
  A.__closure = {
    useReducedMotion,
    wrapperDimensions,
    wrapperOffset,
    connected,
    mode,
    VoicePanelModes: animatedStyle1,
    runOnJS: require("ReanimatedRexport").runOnJS,
    updateSourceTrackingView: height(9110).updateSourceTrackingView,
    withSpring: require("spring").withSpring,
    DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,
    DRAWER_SIZE_PHYSICS: obj4,
  };
  A.__workletHash = 14488035665779;
  A.__initData = __initData33;
  const animatedStyle = obj7.useAnimatedStyle(A);
  const obj8 = {
    useReducedMotion,
    wrapperDimensions,
    wrapperOffset,
    connected,
    mode,
    VoicePanelModes: animatedStyle1,
    runOnJS: require("ReanimatedRexport").runOnJS,
    updateSourceTrackingView: height(9110).updateSourceTrackingView,
    withSpring: require("spring").withSpring,
    DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,
    DRAWER_SIZE_PHYSICS: obj4,
  };
  class C {
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
  const obj9 = require("ReanimatedRexport");
  C.__closure = {
    computeBorderRadii,
    mode,
    connected,
    wrapperDimensions,
    withSpring: require("spring").withSpring,
    BORDER_RADIUS_PHYSICS: windowDimensions,
    VoicePanelModes: animatedStyle1,
    styles: tmp3,
  };
  C.__workletHash = 8780113527375;
  C.__initData = __initData35;
  animatedStyle1 = obj9.useAnimatedStyle(C);
  if (!require("ReleaseChannelUtils").isStable) {
    class H {
      constructor() {
        return windowDimensions.get();
      }
    }
    const obj11 = { windowDimensions };
    H.__closure = obj11;
    H.__workletHash = 5417428185301;
    H.__initData = __initData36;
    class T {
      constructor(arg0) {
        obj = closure_0(closure_2[15]);
        runOnJSResult = obj.runOnJS(closure_1_28);
        tmpResult = runOnJSResult("Window dimensions changed:", JSON.stringify(wrapperOffset));
        return;
      }
    }
    const obj12 = { runOnJS: tmp(4612).runOnJS, log };
    T.__closure = obj12;
    T.__workletHash = 2055218123366;
    T.__initData = __initData37;
    const animatedReaction1 = tmp(4612).useAnimatedReaction(H, T);
    let tmpResult = tmp(4612);
    const fn4 = function k() {
      return wrapperDimensions.get();
    };
    const obj13 = { wrapperDimensions };
    fn4.__closure = obj13;
    fn4.__workletHash = 3714374990167;
    fn4.__initData = __initData38;
    const fn5 = function y(arg0) {
      const obj = wrapperOffset(closure_2[15]);
      wrapperOffset(closure_2[15]).runOnJS(log)("Wrapper dimensions changed:", JSON.stringify(arg0));
    };
    const obj14 = { runOnJS: tmp(4612).runOnJS, log };
    fn5.__closure = obj14;
    fn5.__workletHash = 2552930207447;
    fn5.__initData = __initData39;
    const animatedReaction2 = tmp(4612).useAnimatedReaction(fn4, fn5);
    let tmpResult2 = tmp(4612);
  }
  let items = [tmp3.wrapper, animatedStyle1, animatedStyle];
  return obj2.useMemo(
    () => ({
      wrapperRootStyles: closure_2.wrapper,
      wrapperTransformStyles: animatedStyle,
      wrapperSurfaceStyles: animatedStyle1,
    }),
    items,
  );
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ Pressable: metroRequire, ScrollView } = get_ActivityIndicator);
const VoicePanelConstants = fn(11902);
({ BORDER_RADIUS_PHYSICS: c10, DEFAULT_BORDER_RADIUS } = VoicePanelConstants);
const DEFAULT_BORDER_RADIUS_PIP = VoicePanelConstants.DEFAULT_BORDER_RADIUS_PIP;
({ DRAWER_SPRING_PHYSICS, IS_IOS: map1, MODE_CHANGE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR } = VoicePanelConstants);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const LAYOUT_PHYSICS = VoicePanelConstants.LAYOUT_PHYSICS;
const DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE = VoicePanelConstants.DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE;
const VoicePanelControlsModes = fn(11900).VoicePanelControlsModes;
const isActivityParticipant = fn(4911).isActivityParticipant;
const POP_RESISTANCE = fn(11903).POP_RESISTANCE;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let c24 = 10;
let c25 = 0.2;
let c26 = 180;
log = new LoggerDefault("VoicePanelUI");
function layoutTransition(originX) {
  const obj = { animations: null, initialValues: null };
  const size = {
    originX: spring.withSpring(originX.targetOriginX, LAYOUT_PHYSICS, "animate-always"),
    originY: null,
    width: null,
    height: null,
  };
  size.originY = spring.withSpring(originX.targetOriginY, LAYOUT_PHYSICS, "animate-always");
  size.width = spring.withSpring(originX.targetWidth, LAYOUT_PHYSICS, "animate-always");
  size.height = spring.withSpring(originX.targetHeight, LAYOUT_PHYSICS, "animate-always");
  obj.animations = size;
  obj.initialValues = {
    originX: originX.currentOriginX,
    originY: originX.currentOriginY,
    width: originX.currentWidth,
    height: originX.currentHeight,
  };
  return obj;
}
let tmp5 = new LoggerDefault("VoicePanelUI");
layoutTransition.__closure = { withSpring: fn(5597).withSpring, LAYOUT_PHYSICS };
layoutTransition.__workletHash = 16454235842679;
layoutTransition.__initData = {
  code: "function layoutTransition_VoicePanelUITsx1(values){const{withSpring,LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'animate-always'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'animate-always'),width:withSpring(values.targetWidth,LAYOUT_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,LAYOUT_PHYSICS,'animate-always')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}",
};
let obj2 = {};
let merged = Object.assign(LAYOUT_PHYSICS);
obj2.damping = 0;
function scrollViewLayoutTransition(originX) {
  const obj = { animations: null, initialValues: null };
  const size = {
    originX: spring.withSpring(originX.targetOriginX, LAYOUT_PHYSICS, "animate-always"),
    originY: null,
    width: null,
    height: null,
  };
  size.originY = spring.withSpring(originX.targetOriginY, LAYOUT_PHYSICS, "animate-always");
  size.width = spring.withSpring(originX.targetWidth, obj2, "animate-always");
  size.height = spring.withSpring(originX.targetHeight, obj2, "animate-always");
  obj.animations = size;
  obj.initialValues = {
    originX: originX.currentOriginX,
    originY: originX.currentOriginY,
    width: originX.currentWidth,
    height: originX.currentHeight,
  };
  return obj;
}
let obj = { withSpring: fn(5597).withSpring, LAYOUT_PHYSICS };
scrollViewLayoutTransition.__closure = {
  withSpring: fn(5597).withSpring,
  LAYOUT_PHYSICS,
  EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS: obj2,
};
scrollViewLayoutTransition.__workletHash = 11745134918460;
scrollViewLayoutTransition.__initData = {
  code: "function scrollViewLayoutTransition_VoicePanelUITsx2(values){const{withSpring,LAYOUT_PHYSICS,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'animate-always'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'animate-always'),width:withSpring(values.targetWidth,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'animate-always')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}",
};
let obj4 = {};
let merged1 = Object.assign(DRAWER_SPRING_PHYSICS);
obj4.mass = 0.3;
obj4.damping = 100;
obj4.stiffness = 100;
let obj5 = {};
const merged2 = Object.assign(MODE_CHANGE_PHYSICS);
obj5.mass = 2;
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
computeViewableChunksFromScrollPosition.__initData = {
  code: "function computeViewableChunksFromScrollPosition_VoicePanelUITsx3(scrollPosition,windowHeight,contentHeight,extraChunks=1){const{VOICE_PANEL_CHUNK_DIVISOR}=this.__closure;const chunkSize=Math.ceil(windowHeight/VOICE_PANEL_CHUNK_DIVISOR);let start=Math.max(Math.floor(scrollPosition/chunkSize)-extraChunks,0);const end=Math.min(start+VOICE_PANEL_CHUNK_DIVISOR+extraChunks*2,Math.ceil(contentHeight/chunkSize));start=Math.max(end-VOICE_PANEL_CHUNK_DIVISOR-extraChunks*2,0);return{start:start,end:end};}",
};
const createStyles = fn(4890);
let obj6 = {
  accessibilityView: null,
  wrapper: null,
  maskDefaultBackground: null,
  scrollView: null,
  scrollViewContent: null,
  shade: null,
  shadePressable: null,
};
let obj8 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj8.overflow = "hidden";
obj6.accessibilityView = obj8;
let obj9 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj9.alignItems = "flex-start";
obj9.zIndex = 1;
obj6.wrapper = obj9;
let obj3 = {
  withSpring: fn(5597).withSpring,
  LAYOUT_PHYSICS,
  EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS: obj2,
};
obj6.maskDefaultBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj11 = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj11.borderTopLeftRadius = DEFAULT_BORDER_RADIUS;
obj11.borderTopRightRadius = DEFAULT_BORDER_RADIUS;
obj6.scrollView = obj11;
obj6.scrollViewContent = { flexGrow: 1, flexShrink: 0 };
let obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj6.shade = { backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
obj6.shadePressable = { flexGrow: 1 };
let closure_34 = createStyles.createStyles(obj6);
let closure_35 = ReanimatedRexport.createAnimatedComponent(ScrollView);
const MetaQuestUtils = fn(1615);
let closure_36 = MetaQuestUtils.isMetaQuest();
const __initData = {
  code: "function VoicePanelUITsx4(){const{gestureState,connected,mode}=this.__closure;return{gestureActive:gestureState.get().active,connected:connected.get(),mode:mode.get()};}",
};
const __initData2 = {
  code: "function VoicePanelUITsx5(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,runOnJS,setPanelFullscreen,setPanelOpen,setPanelPIP}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const{gestureActive:gestureActive,connected:connected_0,mode:mode_0}=props;if(!connected_0||gestureActive||mode_0!==VoicePanelModes.PANEL){runOnJS(setPanelFullscreen)(false);}else{runOnJS(setPanelFullscreen)(true);}if(mode_0===VoicePanelModes.PANEL){runOnJS(setPanelOpen)(true);}else{runOnJS(setPanelOpen)(false);}if(mode_0===VoicePanelModes.PIP){runOnJS(setPanelPIP)(true);}else{runOnJS(setPanelPIP)(false);}}",
};
const __initData3 = { code: "function VoicePanelUITsx6(){const{mode}=this.__closure;return mode.get();}" };
const __initData4 = {
  code: "function VoicePanelUITsx7(mode_1,previous_0){const{VoicePanelModes,updateSharedValueIfChanged,gestureState}=this.__closure;if(mode_1===VoicePanelModes.DISMISSED&&previous_0!==VoicePanelModes.DISMISSED){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}}",
};
const __initData5 = {
  code: "function VoicePanelUITsx8(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}",
};
const __initData6 = {
  code: "function VoicePanelUITsx9(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}",
};
const __initData7 = {
  code: "function VoicePanelUITsx10(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(!connected.get()){return;}if(!(mode.get()===VoicePanelModes.PIP)){if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}}",
};
let closure_44 = {
  code: "function VoicePanelUITsx11(){const{wrapperOffset,mode,VoicePanelModes,updateSharedValueIfChanged,gestureState,runOnJS,controlsLock}=this.__closure;var pendingModeChange=wrapperOffset.get().y!==0&&mode.get()===VoicePanelModes.PANEL;if(!pendingModeChange){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}runOnJS(controlsLock.unlock)();}",
};
let closure_45 = {
  code: "function VoicePanelUITsx12(event_3){const{gestureState,mode,VoicePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,connected,runOnJS,setMode,lockScrolling,MIN_DISMISS_MOVE_PERCENTAGE,dismissPanel}=this.__closure;if(gestureState.get().cancel){return;}var velocityX=event_3.velocityX,velocityY=event_3.velocityY,absoluteX_0=event_3.absoluteX,absoluteY_0=event_3.absoluteY;if(mode.get()===VoicePanelModes.PIP){var _calculatePIPPosition=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX_0,absoluteY:absoluteY_0,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()}),pipX=_calculatePIPPosition.pipX,pipY=_calculatePIPPosition.pipY;updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else{if(mode.get()===VoicePanelModes.PANEL){if(velocityY>0){if(connected.get()){if(!gestureState.get().requiresPop){runOnJS(setMode)(VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}else{var panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;var dismissThreshold=panelHeight*MIN_DISMISS_MOVE_PERCENTAGE;if(wrapperOffset.get().y>dismissThreshold){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(dismissPanel)();return;}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}}",
};
let closure_46 = {
  code: "function VoicePanelUITsx13(_e){const{lockScrolling,updateSharedValueIfChanged,gestureState,wrapperOffset}=this.__closure;lockScrolling.set(false);updateSharedValueIfChanged(gestureState,{cancel:false,active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}",
};
let closure_47 = {
  code: "function VoicePanelUITsx14(event_2){const{gestureState,mode,VoicePanelModes,updateSharedValueIfChanged,wrapperOffset,connected,lockScrolling,scrollPosition,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(gestureState.get().cancel){return;}if(mode.get()===VoicePanelModes.PIP){updateSharedValueIfChanged(wrapperOffset,{x:(gestureState.get().absoluteXStart-event_2.absoluteX)*-1,y:(gestureState.get().absoluteYStart-event_2.absoluteY)*-1});return;}var newYOffset=(gestureState.get().absoluteYStart-event_2.absoluteY)*-1;if(connected.get()&&!gestureState.get().requiresPop&&newYOffset<=0){gestureState.set({...gestureState.get(),requiresPop:true});}if(lockScrolling.get()&&newYOffset<0){lockScrolling.set(false);}else{if(!lockScrolling.get()&&scrollPosition.get()<=0){lockScrolling.set(true);}}if(gestureState.get().requiresPop){var distance=Math.max(newYOffset,0);var resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{gestureState.set({...gestureState.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}",
};
let closure_48 = {
  code: "function VoicePanelUITsx15(event_1,manager_0){const{State,gestureState,mode,VoicePanelModes,scrollPosition,isQuest,MIN_GESTURE_MOVE,focused,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset,lockScrolling}=this.__closure;if(event_1.state!==State.BEGAN||gestureState.get().active||gestureState.get().cancel){return;}var _event_1$changedTouch=event_1.changedTouches[0],absoluteY=_event_1$changedTouch.absoluteY,absoluteX=_event_1$changedTouch.absoluteX;var yDiff=gestureState.get().absoluteYStart-absoluteY;var xDiff=gestureState.get().absoluteXStart-absoluteX;var absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));var isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;var startGesture=false;if(mode.get()===VoicePanelModes.PANEL){var scrollPos=Math.floor(scrollPosition.get());if(yDiff<0&&scrollPos<=0){if(isQuest){startGesture=absoluteMovement>MIN_GESTURE_MOVE;}else{startGesture=true;}}else{var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!=null&&isNotPullDownGesture){manager_0.fail();}}}else{if(mode.get()===VoicePanelModes.PIP&&absoluteMovement>MIN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true});gestureState.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY+scrollPosition.get(),cancel:false,active:true,requiresPop:gestureState.get().requiresPop});lockScrolling.set(true);manager_0.activate();}else{updateSharedValueIfChanged(gestureState,{absoluteYStart:absoluteY,absoluteXStart:absoluteX});}}",
};
let closure_49 = {
  code: "function VoicePanelUITsx16(event_0){const{gestureState,updateSharedValueIfChanged,wrapperOffset,connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,controlsLock}=this.__closure;if(gestureState.get().cancel){return;}updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});gestureState.set({absoluteXStart:event_0.absoluteX,absoluteYStart:event_0.absoluteY,active:false,cancel:false,requiresPop:connected.get()&&mode.get()===VoicePanelModes.PANEL});if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){runOnJS(controlsLock.lock)();}}",
};
let closure_50 = {
  code: "function VoicePanelUITsx17(event,manager){const{IS_IOS,windowDimensions,safeArea,gestureState,isFocusedVideoZoomed,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes}=this.__closure;var touch=event.allTouches[0];if(IS_IOS&&touch!=null&&touch.absoluteY>windowDimensions.get().height-safeArea.get().bottom){gestureState.set({...gestureState.get(),cancel:true});manager.activate();return;}if(isFocusedVideoZoomed.get()||mode.get()===VoicePanelModes.PANEL&&controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){gestureState.set({...gestureState.get(),cancel:true});manager.fail();}}",
};
const __initData8 = {
  code: "function onBeginDrag_VoicePanelUITsx18(event_4){const{scrollPosition,dragScrolling}=this.__closure;scrollPosition.set(event_4.contentOffset.y);dragScrolling.set(true);}",
};
const __initData9 = {
  code: "function onEndDrag_VoicePanelUITsx19(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}",
};
const __initData10 = {
  code: "function onMomentumEnd_VoicePanelUITsx20(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}",
};
const __initData11 = {
  code: "function onScroll_VoicePanelUITsx21(event_5){const{lockScrolling,isSnappingBack,scrollPosition,scrollTo,scrollerRef,computeViewableChunksFromScrollPosition,windowDimensions,scrollableRegionSize,updateSharedValueIfChanged,viewableChunks}=this.__closure;if(lockScrolling.get()){if(isSnappingBack.get()){return;}if(scrollPosition.get()<0){scrollPosition.set(0);}const targetScrollPosition=scrollPosition.get();if(Math.abs(event_5.contentOffset.y-targetScrollPosition)<0.1){return;}isSnappingBack.set(true);scrollTo(scrollerRef,0,targetScrollPosition,false);isSnappingBack.set(false);}else{let newViewableChunks;if(scrollPosition.get()!==event_5.contentOffset.y){newViewableChunks=computeViewableChunksFromScrollPosition(scrollPosition.get(),windowDimensions.get().height,scrollableRegionSize.get());}scrollPosition.set(event_5.contentOffset.y);newViewableChunks!=null&&updateSharedValueIfChanged(viewableChunks,newViewableChunks);}}",
};
const __initData12 = { code: "function VoicePanelUITsx22(){const{mode}=this.__closure;return mode.get();}" };
const __initData13 = {
  code: "function VoicePanelUITsx23(mode_2,previous_1){const{VoicePanelModes,lockScrolling}=this.__closure;if(previous_1==null||mode_2===previous_1){return;}if(mode_2===VoicePanelModes.PANEL&&previous_1===VoicePanelModes.PIP){lockScrolling.set(false);}else{if(mode_2===VoicePanelModes.PIP){lockScrolling.set(true);}}}",
};
const __initData14 = {
  code: 'function VoicePanelUITsx24(){const{mode,VoicePanelModes,focused,lockScrolling,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter}=this.__closure;const isPIPMode=mode.get()===VoicePanelModes.PIP;const disableScroll=isPIPMode||focused.get()!=null;return{pointerEvents:isPIPMode?"none":"auto",scrollEnabled:!disableScroll,showsVerticalScrollIndicator:lockScrolling.get()?false:!disableScroll,scrollIndicatorInsets:{top:calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height-safeArea.get().top,bottom:safeArea.get().bottom}};}',
};
const __initData15 = {
  code: "function VoicePanelUITsx25(){const{mode,VoicePanelModes,connected,gestureState,wrapperDimensions,wrapperOffset,windowDimensions}=this.__closure;switch(mode.get()){case VoicePanelModes.PIP:case VoicePanelModes.DISMISSED:{return 0;}default:{if(connected.get()&&gestureState.get().active&&gestureState.get().requiresPop){return 1;}const drawerTop=wrapperDimensions.get().drawerY+wrapperOffset.get().y;const screenSize=windowDimensions.get().height;const percentage=(screenSize-drawerTop)/screenSize;return Math.min(Math.max(percentage,0),1);}}}",
};
const __initData16 = {
  code: "function VoicePanelUITsx26(){const{gestureState,connected,mode}=this.__closure;return{gestureActive:gestureState.get().active,connected:connected.get(),mode:mode.get()};}",
};
const __initData17 = {
  code: "function VoicePanelUITsx27(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,runOnJS,setPanelFullscreen,setPanelOpen,setPanelPIP}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{gestureActive:gestureActive,connected:connected_0,mode:mode_0}=props;if(!connected_0||gestureActive||mode_0!==VoicePanelModes.PANEL){runOnJS(setPanelFullscreen)(false);}else{runOnJS(setPanelFullscreen)(true);}if(mode_0===VoicePanelModes.PANEL){runOnJS(setPanelOpen)(true);}else{runOnJS(setPanelOpen)(false);}if(mode_0===VoicePanelModes.PIP){runOnJS(setPanelPIP)(true);}else{runOnJS(setPanelPIP)(false);}}",
};
const __initData18 = { code: "function VoicePanelUITsx28(){const{mode}=this.__closure;return mode.get();}" };
const __initData19 = {
  code: "function VoicePanelUITsx29(mode_1,previous_0){const{VoicePanelModes,updateSharedValueIfChanged,gestureState}=this.__closure;if(mode_1===VoicePanelModes.DISMISSED&&previous_0!==VoicePanelModes.DISMISSED){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}}",
};
const __initData20 = {
  code: "function VoicePanelUITsx30(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}",
};
const __initData21 = {
  code: "function VoicePanelUITsx31(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}",
};
let closure_65 = {
  code: "function VoicePanelUITsx32(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(!connected.get())return;if(mode.get()===VoicePanelModes.PIP){}else if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}",
};
let closure_66 = {
  code: "function VoicePanelUITsx33(){const{wrapperOffset,mode,VoicePanelModes,updateSharedValueIfChanged,gestureState,runOnJS,controlsLock}=this.__closure;const pendingModeChange=wrapperOffset.get().y!==0&&mode.get()===VoicePanelModes.PANEL;if(!pendingModeChange){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}runOnJS(controlsLock.unlock)();}",
};
let closure_67 = {
  code: "function VoicePanelUITsx34(event_3){const{gestureState,mode,VoicePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,connected,runOnJS,setMode,lockScrolling,MIN_DISMISS_MOVE_PERCENTAGE,dismissPanel}=this.__closure;if(gestureState.get().cancel)return;const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX_0,absoluteY:absoluteY_0}=event_3;if(mode.get()===VoicePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX_0,absoluteY:absoluteY_0,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else if(mode.get()===VoicePanelModes.PANEL){if(velocityY>0){if(connected.get()){if(!gestureState.get().requiresPop){runOnJS(setMode)(VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}else{const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;const dismissThreshold=panelHeight*MIN_DISMISS_MOVE_PERCENTAGE;if(wrapperOffset.get().y>dismissThreshold){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(dismissPanel)();return;}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}",
};
let closure_68 = {
  code: "function VoicePanelUITsx35(_e){const{lockScrolling,updateSharedValueIfChanged,gestureState,wrapperOffset}=this.__closure;lockScrolling.set(false);updateSharedValueIfChanged(gestureState,{cancel:false,active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});console.log('onTouchesCancelled');}",
};
let closure_69 = {
  code: "function VoicePanelUITsx36(event_2){const{gestureState,mode,VoicePanelModes,updateSharedValueIfChanged,wrapperOffset,connected,lockScrolling,scrollPosition,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(gestureState.get().cancel)return;if(mode.get()===VoicePanelModes.PIP){updateSharedValueIfChanged(wrapperOffset,{x:(gestureState.get().absoluteXStart-event_2.absoluteX)*-1,y:(gestureState.get().absoluteYStart-event_2.absoluteY)*-1});return;}const minYOffset=0;let newYOffset=(gestureState.get().absoluteYStart-event_2.absoluteY)*-1;if(connected.get()&&!gestureState.get().requiresPop&&newYOffset<=minYOffset){gestureState.set({...gestureState.get(),requiresPop:true});}if(lockScrolling.get()&&newYOffset<minYOffset){lockScrolling.set(false);}else if(!lockScrolling.get()&&scrollPosition.get()<=0){lockScrolling.set(true);}if(gestureState.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{gestureState.set({...gestureState.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}",
};
let closure_70 = {
  code: "function VoicePanelUITsx37(event_1,manager_0){const{State,gestureState,mode,VoicePanelModes,scrollPosition,isQuest,MIN_GESTURE_MOVE,focused,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset,lockScrolling}=this.__closure;if(event_1.state!==State.BEGAN||gestureState.get().active||gestureState.get().cancel)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event_1.changedTouches[0];const yDiff=gestureState.get().absoluteYStart-absoluteY;const xDiff=gestureState.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;let startGesture=false;if(mode.get()===VoicePanelModes.PANEL){var _focused$get;const scrollPos=Math.floor(scrollPosition.get());if(yDiff<0&&scrollPos<=0){if(isQuest){startGesture=absoluteMovement>MIN_GESTURE_MOVE;}else{startGesture=true;}}else if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!=null&&isNotPullDownGesture){manager_0.fail();}}else if(mode.get()===VoicePanelModes.PIP&&absoluteMovement>MIN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true});gestureState.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY+scrollPosition.get(),cancel:false,active:true,requiresPop:gestureState.get().requiresPop});lockScrolling.set(true);manager_0.activate();}else{updateSharedValueIfChanged(gestureState,{absoluteYStart:absoluteY,absoluteXStart:absoluteX});}}",
};
let closure_71 = {
  code: "function VoicePanelUITsx38(event_0){const{gestureState,updateSharedValueIfChanged,wrapperOffset,connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,controlsLock}=this.__closure;if(gestureState.get().cancel)return;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});gestureState.set({absoluteXStart:event_0.absoluteX,absoluteYStart:event_0.absoluteY,active:false,cancel:false,requiresPop:connected.get()&&mode.get()===VoicePanelModes.PANEL});if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){runOnJS(controlsLock.lock)();}}",
};
let closure_72 = {
  code: "function VoicePanelUITsx39(event,manager){const{IS_IOS,windowDimensions,safeArea,gestureState,isFocusedVideoZoomed,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes}=this.__closure;const touch=event.allTouches[0];if(IS_IOS&&touch!=null&&touch.absoluteY>windowDimensions.get().height-safeArea.get().bottom){gestureState.set({...gestureState.get(),cancel:true});manager.activate();return;}if(isFocusedVideoZoomed.get()||mode.get()===VoicePanelModes.PANEL&&controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){gestureState.set({...gestureState.get(),cancel:true});manager.fail();}}",
};
const __initData22 = {
  code: "function onBeginDrag_VoicePanelUITsx40(event_4){const{scrollPosition,dragScrolling}=this.__closure;scrollPosition.set(event_4.contentOffset.y);dragScrolling.set(true);}",
};
const __initData23 = {
  code: "function onEndDrag_VoicePanelUITsx41(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}",
};
const __initData24 = {
  code: "function onMomentumEnd_VoicePanelUITsx42(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}",
};
const __initData25 = {
  code: "function onScroll_VoicePanelUITsx43(event_5){const{lockScrolling,isSnappingBack,scrollPosition,scrollTo,scrollerRef,computeViewableChunksFromScrollPosition,windowDimensions,scrollableRegionSize,updateSharedValueIfChanged,viewableChunks}=this.__closure;if(lockScrolling.get()){if(isSnappingBack.get()){return;}if(scrollPosition.get()<0){scrollPosition.set(0);}const targetScrollPosition=scrollPosition.get();if(Math.abs(event_5.contentOffset.y-targetScrollPosition)<0.1){return;}isSnappingBack.set(true);scrollTo(scrollerRef,0,targetScrollPosition,false);isSnappingBack.set(false);}else{let newViewableChunks;if(scrollPosition.get()!==event_5.contentOffset.y){newViewableChunks=computeViewableChunksFromScrollPosition(scrollPosition.get(),windowDimensions.get().height,scrollableRegionSize.get());}scrollPosition.set(event_5.contentOffset.y);newViewableChunks!=null&&updateSharedValueIfChanged(viewableChunks,newViewableChunks);}}",
};
const __initData26 = { code: "function VoicePanelUITsx44(){const{mode}=this.__closure;return mode.get();}" };
const __initData27 = {
  code: "function VoicePanelUITsx45(mode_2,previous_1){const{VoicePanelModes,lockScrolling}=this.__closure;if(previous_1==null||mode_2===previous_1)return;if(mode_2===VoicePanelModes.PANEL&&previous_1===VoicePanelModes.PIP){lockScrolling.set(false);}else if(mode_2===VoicePanelModes.PIP){lockScrolling.set(true);}}",
};
const __initData28 = {
  code: "function VoicePanelUITsx46(){const{mode,VoicePanelModes,focused,lockScrolling,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter}=this.__closure;const isPIPMode=mode.get()===VoicePanelModes.PIP;const disableScroll=isPIPMode||focused.get()!=null;return{pointerEvents:isPIPMode?'none':'auto',scrollEnabled:!disableScroll,showsVerticalScrollIndicator:lockScrolling.get()?false:!disableScroll,scrollIndicatorInsets:{top:calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height-safeArea.get().top,bottom:safeArea.get().bottom}};}",
};
const __initData29 = {
  code: "function VoicePanelUITsx47(){const{mode,VoicePanelModes,connected,gestureState,wrapperDimensions,wrapperOffset,windowDimensions}=this.__closure;switch(mode.get()){case VoicePanelModes.PIP:case VoicePanelModes.DISMISSED:return 0;default:{if(connected.get()&&gestureState.get().active&&gestureState.get().requiresPop){return 1;}const drawerTop=wrapperDimensions.get().drawerY+wrapperOffset.get().y;const screenSize=windowDimensions.get().height;const percentage=(screenSize-drawerTop)/screenSize;return Math.min(Math.max(percentage,0),1);}}}",
};
let ReactCompilerGating = fn(558);
let closure_81 = ReactCompilerGating.isReactCompilerEnabled()
  ? (scrollPosition) => {
      const cResult = scrollPosition(setPanelFullscreen[18]).c(90);
      scrollPosition = scrollPosition.scrollPosition;
      const dragScrolling = scrollPosition.dragScrolling;
      setPanelFullscreen = scrollPosition.setPanelFullscreen;
      const setPanelOpen = scrollPosition.setPanelOpen;
      const setPanelPIP = scrollPosition.setPanelPIP;
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
      let obj = scrollPosition(setPanelFullscreen[18]);
      const sharedValue = scrollPosition(setPanelFullscreen[15]).useSharedValue(0);
      obj2 = scrollPosition(setPanelFullscreen[15]);
      const sharedValue1 = scrollPosition(setPanelFullscreen[15]).useSharedValue(false);
      let obj3 = scrollPosition(setPanelFullscreen[15]);
      const sharedValue2 = scrollPosition(setPanelFullscreen[15]).useSharedValue(false);
      obj4 = scrollPosition(setPanelFullscreen[15]);
      const sharedValue3 = scrollPosition(setPanelFullscreen[15]).useSharedValue({ start: 0, end: setMode });
      let obj5 = scrollPosition(setPanelFullscreen[15]);
      let obj6 = { start: 0, end: setMode };
      [tmp11, NOOP] = setPanelOpen(setPanelPIP.useState(true), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const Gesture = tmp(tmp2[21]).Gesture;
        const NativeResult = Gesture.Native();
        cResult[0] = NativeResult;
        let first = NativeResult;
      } else {
        first = cResult[0];
      }
      const tmp10 = setPanelOpen(setPanelPIP.useState(true), 2);
      const animatedRef = scrollPosition(setPanelFullscreen[15]).useAnimatedRef();
      let tmpResult = scrollPosition(setPanelFullscreen[15]);
      const sharedValue4 = scrollPosition(setPanelFullscreen[15]).useSharedValue({
        absoluteXStart: 0,
        absoluteYStart: 0,
        cancel: false,
        active: false,
        requiresPop: false,
      });
      const tmpResult10 = scrollPosition(setPanelFullscreen[15]);
      class Ve {
        constructor() {
          obj = { gestureActive: closure_25.get().active, connected: connected.get(), mode: mode.get() };
          return obj;
        }
      }
      Ve.__closure = { gestureState: sharedValue4, connected, mode };
      Ve.__workletHash = 5596084348360;
      Ve.__initData = __initData;
      function ve(mode, safeAreaState2) {
        if (!obj.cheapWorkletShallowEqual(mode, tmp)) {
          mode = mode.mode;
          if (mode.connected) {
            if (!mode.gestureActive) {
              if (mode === VoicePanelModes.PANEL) {
                ReanimatedRexport2.runOnJS(setPanelFullscreen)(true);
                const tmp2Result = ReanimatedRexport2;
              }
              if (mode === VoicePanelModes.PANEL) {
                ReanimatedRexport2.runOnJS(setPanelOpen)(true);
                const tmp2Result6 = ReanimatedRexport2;
              } else {
                ReanimatedRexport2.runOnJS(setPanelOpen)(false);
                const tmp2Result7 = ReanimatedRexport2;
              }
              if (mode === VoicePanelModes.PIP) {
                ReanimatedRexport2.runOnJS(setPanelPIP)(true);
                const tmp2Result8 = ReanimatedRexport2;
              } else {
                ReanimatedRexport2.runOnJS(setPanelPIP)(false);
                const tmp2Result9 = ReanimatedRexport2;
              }
            }
          }
          ReanimatedRexport2.runOnJS(setPanelFullscreen)(false);
          const tmp2Result10 = ReanimatedRexport2;
        }
        obj = cheapWorkletShallowEqual;
        tmp = safeAreaState2;
      }
      const tmpResult11 = scrollPosition(setPanelFullscreen[15]);
      ve.__closure = {
        cheapWorkletShallowEqual: scrollPosition(setPanelFullscreen[22]).cheapWorkletShallowEqual,
        VoicePanelModes: showControls,
        runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS,
        setPanelFullscreen,
        setPanelOpen,
        setPanelPIP,
      };
      ve.__workletHash = 10370987544416;
      ve.__initData = __initData2;
      const animatedReaction = tmpResult11.useAnimatedReaction(Ve, ve);
      let obj7 = {
        cheapWorkletShallowEqual: scrollPosition(setPanelFullscreen[22]).cheapWorkletShallowEqual,
        VoicePanelModes: showControls,
        runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS,
        setPanelFullscreen,
        setPanelOpen,
        setPanelPIP,
      };
      function be() {
        return mode.get();
      }
      be.__closure = { mode };
      be.__workletHash = 455036316035;
      be.__initData = __initData3;
      class Oe {
        constructor(arg0, arg1) {
          tmp2 = scrollPosition === VoicePanelModes.DISMISSED;
          if (tmp2) {
            tmp3 = arg1;
            tmp2 = arg1 !== tmp.DISMISSED;
          }
          if (tmp2) {
            tmp4 = closure_1;
            tmp5 = closure_2;
            tmp6 = closure_25;
            tmp7 = closure_1(closure_2[23])(closure_25, { cancel: false, active: false });
          }
          return;
        }
      }
      const tmpResult12 = scrollPosition(setPanelFullscreen[15]);
      Oe.__closure = {
        VoicePanelModes: showControls,
        updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[23]),
        gestureState: sharedValue4,
      };
      Oe.__workletHash = 10389543324500;
      Oe.__initData = __initData4;
      const animatedReaction1 = tmpResult12.useAnimatedReaction(be, Oe);
      function handleFocusChange(arg0) {
        let tmp = null != arg0;
        if (tmp) {
          tmp = isActivityParticipant(ChannelRTCStore.getParticipant(StyleSheet, arg0));
        }
        NOOP(!tmp);
      }
      const obj8 = {
        VoicePanelModes: showControls,
        updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[23]),
        gestureState: sharedValue4,
      };
      class Ce {
        constructor() {
          tmp = undefined;
          if (mode.get() === VoicePanelModes.PANEL) {
            tmp2 = focused;
            value = focused.get();
            tmp4 = null;
            id = undefined;
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
          if (scrollPosition !== arg1) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[15]);
            tmp3 = handleFocusChange;
            tmp4 = obj.runOnJS(handleFocusChange)(scrollPosition);
          }
          return;
        }
      }
      const tmpResult13 = scrollPosition(setPanelFullscreen[15]);
      Ae.__closure = { runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, handleFocusChange };
      Ae.__workletHash = 169980789473;
      Ae.__initData = __initData6;
      const animatedReaction2 = tmpResult13.useAnimatedReaction(Ce, Ae);
      const tmp20 = dragScrolling(setPanelFullscreen[24])();
      closure_27 = tmp20;
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
                                              if (cResult[21] === wrapperOffset) {
                                                const obj10 = {
                                                  onBeginDrag: null,
                                                  onEndDrag: null,
                                                  onMomentumEnd: null,
                                                  onScroll: null,
                                                };
                                                class Ge {
                                                  constructor(arg0) {
                                                    result = scrollPosition.set(scrollPosition.contentOffset.y);
                                                    result1 = dragScrolling.set(true);
                                                    return;
                                                  }
                                                }
                                                const obj11 = { scrollPosition, dragScrolling };
                                                Ge.__closure = obj11;
                                                Ge.__workletHash = 9709378200858;
                                                Ge.__initData = __initData8;
                                                obj10.onBeginDrag = Ge;
                                                class Fe {
                                                  constructor() {
                                                    result = dragScrolling.set(false);
                                                    return;
                                                  }
                                                }
                                                const obj12 = { dragScrolling };
                                                Fe.__closure = obj12;
                                                Fe.__workletHash = 16780787183039;
                                                Fe.__initData = __initData9;
                                                obj10.onEndDrag = Fe;
                                                class Le {
                                                  constructor() {
                                                    result = dragScrolling.set(false);
                                                    return;
                                                  }
                                                }
                                                const obj13 = { dragScrolling };
                                                Le.__closure = obj13;
                                                Le.__workletHash = 13772673540365;
                                                Le.__initData = __initData10;
                                                obj10.onMomentumEnd = Le;
                                                class Xe {
                                                  constructor(arg0) {
                                                    if (closure_20.get()) {
                                                      obj3 = closure_21;
                                                      if (closure_21.get()) {
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
                                                        if (Math.abs(scrollPosition.contentOffset.y - value) < 0.1) {
                                                          return;
                                                        } else {
                                                          flag = true;
                                                          result1 = obj3.set(true);
                                                          tmp13 = closure_0;
                                                          tmp14 = closure_2;
                                                          obj5 = closure_0(closure_2[15]);
                                                          tmp15 = closure_24;
                                                          flag2 = false;
                                                          tmp16 = obj5;
                                                          num7 = 0;
                                                          tmp17 = value;
                                                          flag3 = false;
                                                          scrollToResult = obj5.scrollTo(closure_24, 0, value, false);
                                                          result2 = obj3.set(false);
                                                        }
                                                      }
                                                    } else {
                                                      obj = scrollPosition;
                                                      tmp = undefined;
                                                      if (scrollPosition.get() !== scrollPosition.contentOffset.y) {
                                                        tmp20 = computeViewableChunksFromScrollPosition;
                                                        tmp22 = windowDimensions;
                                                        value1 = obj.get();
                                                        tmp23 = closure_19;
                                                        if (
                                                          typeof computeViewableChunksFromScrollPosition === "function"
                                                        ) {
                                                          tmp2 = globalThis;
                                                          _Math = Math;
                                                          tmp3 = VOICE_PANEL_CHUNK_DIVISOR;
                                                          rounded = Math.ceil(
                                                            windowDimensions.get().height / VOICE_PANEL_CHUNK_DIVISOR,
                                                          );
                                                          _Math2 = Math;
                                                          _Math3 = Math;
                                                          num = 1;
                                                          num2 = 0;
                                                          _Math4 = Math;
                                                          num3 = 2;
                                                          num4 = 2;
                                                          _Math5 = Math;
                                                          sum =
                                                            Math.max(Math.floor(value1 / rounded) - 1, 0) +
                                                            VOICE_PANEL_CHUNK_DIVISOR +
                                                            num4;
                                                          bound = Math.min(sum, Math.ceil(tmp24 / rounded));
                                                          obj1 = { start: null, end: null };
                                                          _Math6 = Math;
                                                          obj1.start = Math.max(
                                                            bound - VOICE_PANEL_CHUNK_DIVISOR - num4,
                                                            0,
                                                          );
                                                          obj1.end = bound;
                                                          tmp = obj1;
                                                        } else {
                                                          str = "Trying to call a non-function";
                                                          throw new TypeError("Trying to call a non-function");
                                                        }
                                                      }
                                                      result3 = obj.set(scrollPosition.contentOffset.y);
                                                      tmp8 = null;
                                                      if (null != tmp) {
                                                        tmp25 = closure_1;
                                                        tmp26 = closure_2;
                                                        tmp27 = closure_22;
                                                        tmp28 = closure_1(closure_2[23])(closure_22, tmp);
                                                      }
                                                    }
                                                    return;
                                                  }
                                                }
                                                const obj14 = {
                                                  lockScrolling: sharedValue1,
                                                  isSnappingBack: sharedValue2,
                                                  scrollPosition,
                                                  scrollTo: tmp(tmp2[15]).scrollTo,
                                                  scrollerRef: animatedRef,
                                                  computeViewableChunksFromScrollPosition,
                                                  windowDimensions,
                                                  scrollableRegionSize: sharedValue,
                                                  updateSharedValueIfChanged: tmp4(tmp2[23]),
                                                  viewableChunks: sharedValue3,
                                                };
                                                Xe.__closure = obj14;
                                                Xe.__workletHash = 11154582532610;
                                                Xe.__initData = __initData11;
                                                obj10.onScroll = Xe;
                                                const animatedScrollHandler = tmp(tmp2[15]).useAnimatedScrollHandler(
                                                  obj10,
                                                );
                                                const tmpResult14 = tmp(tmp2[15]);
                                                function qe() {
                                                  return mode.get();
                                                }
                                                const obj15 = { mode };
                                                qe.__closure = obj15;
                                                qe.__workletHash = 17369688194549;
                                                qe.__initData = __initData12;
                                                class We {
                                                  constructor(arg0, arg1) {
                                                    tmp = null != arg1 && scrollPosition !== arg1;
                                                    if (tmp) {
                                                      tmp2 = VoicePanelModes;
                                                      if (scrollPosition === VoicePanelModes.PANEL) {
                                                        if (arg1 === tmp2.PIP) {
                                                          tmp5 = closure_20;
                                                          flag2 = false;
                                                          result = closure_20.set(false);
                                                        }
                                                      }
                                                      if (scrollPosition === tmp2.PIP) {
                                                        tmp3 = closure_20;
                                                        flag = true;
                                                        result1 = closure_20.set(true);
                                                      }
                                                    }
                                                    return;
                                                  }
                                                }
                                                const obj16 = { VoicePanelModes: tmp16, lockScrolling: sharedValue1 };
                                                We.__closure = obj16;
                                                We.__workletHash = 14015771250130;
                                                We.__initData = __initData13;
                                                const animatedReaction3 = tmp(tmp2[15]).useAnimatedReaction(qe, We);
                                                const tmpResult15 = tmp(tmp2[15]);
                                                const token = tmp(tmp2[28]).useToken(
                                                  tmp4(tmp2[14]).modules.mobile.VOICE_PANEL_GUTTER,
                                                );
                                                const tmpResult16 = tmp(tmp2[28]);
                                                function $e() {
                                                  const tmp = mode.get() === VoicePanelModes.PIP;
                                                  let tmp2 = tmp;
                                                  if (!tmp) {
                                                    tmp2 = null != focused.get();
                                                  }
                                                  let str = "auto";
                                                  if (tmp) {
                                                    str = "none";
                                                  }
                                                  const obj = {
                                                    pointerEvents: str,
                                                    scrollEnabled: !tmp2,
                                                    showsVerticalScrollIndicator: null,
                                                    scrollIndicatorInsets: null,
                                                  };
                                                  value = sharedValue1.get();
                                                  let tmp7 = !value;
                                                  if (!value) {
                                                    tmp7 = tmp5;
                                                  }
                                                  obj.showsVerticalScrollIndicator = tmp7;
                                                  const rect = {
                                                    top:
                                                      calculateVoicePanelHeaderSpecsDefault(safeArea.get(), token)
                                                        .height - safeArea.get().top,
                                                    bottom: safeArea.get().bottom,
                                                  };
                                                  obj.scrollIndicatorInsets = rect;
                                                  return obj;
                                                }
                                                const obj17 = {
                                                  mode,
                                                  VoicePanelModes: tmp16,
                                                  focused,
                                                  lockScrolling: sharedValue1,
                                                  calculateVoicePanelHeaderSpecs: tmp4(tmp2[29]),
                                                  safeArea,
                                                  edgeGutter: null,
                                                };
                                                class Ve {
                                                  constructor() {
                                                    obj = {
                                                      gestureActive: closure_25.get().active,
                                                      connected: connected.get(),
                                                      mode: mode.get(),
                                                    };
                                                    return obj;
                                                  }
                                                }
                                                $e.__closure = obj17;
                                                $e.__workletHash = 5209527997903;
                                                $e.__initData = __initData14;
                                                const animatedProps = tmp(tmp2[15]).useAnimatedProps($e);
                                                if (cResult[77] !== sharedValue) {
                                                  class Ze {
                                                    constructor(arg0, arg1) {
                                                      result = closure_19.set(arg1);
                                                      return;
                                                    }
                                                  }
                                                  cResult[77] = sharedValue;
                                                  class Ge {
                                                    constructor(arg0) {
                                                      result = scrollPosition.set(scrollPosition.contentOffset.y);
                                                      result1 = dragScrolling.set(true);
                                                      return;
                                                    }
                                                  }
                                                  cResult[78] = Ze;
                                                } else {
                                                  class Ze {
                                                    constructor(arg0, arg1) {
                                                      result = closure_19.set(arg1);
                                                      return;
                                                    }
                                                  }
                                                }
                                                const tmpResult17 = tmp(tmp2[15]);
                                                function je() {
                                                  value = mode.get();
                                                  if (VoicePanelModes.PIP !== value) {
                                                    if (VoicePanelModes.DISMISSED !== value) {
                                                      if (connected.get()) {
                                                        if (sharedValue4.get().active) {
                                                          if (sharedValue4.get().requiresPop) {
                                                            return 1;
                                                          }
                                                        }
                                                      }
                                                      const sum =
                                                        wrapperDimensions.get().drawerY + wrapperOffset.get().y;
                                                      const height = windowDimensions.get().height;
                                                      const _Math = Math;
                                                      const _Math2 = Math;
                                                      return Math.min(Math.max((height - sum) / height, 0), 1);
                                                    }
                                                  }
                                                  return 0;
                                                }
                                                const obj18 = {
                                                  mode,
                                                  VoicePanelModes: tmp16,
                                                  connected,
                                                  gestureState: sharedValue4,
                                                  wrapperDimensions,
                                                  wrapperOffset,
                                                  windowDimensions,
                                                };
                                                je.__closure = obj18;
                                                je.__workletHash = 11760007440267;
                                                je.__initData = __initData15;
                                                const derivedValue = tmp(tmp2[15]).useDerivedValue(je);
                                                if (cResult[79] === cResult[22]) {
                                                  class Ze {
                                                    constructor(arg0, arg1) {
                                                      result = closure_19.set(arg1);
                                                      return;
                                                    }
                                                  }
                                                }
                                                const obj19 = {
                                                  gesture: cResult[22],
                                                  scrollerRef: animatedRef,
                                                  scrollNativeGesture: first,
                                                  viewableChunks: sharedValue3,
                                                  handleScroll: animatedScrollHandler,
                                                  scrollViewProps: animatedProps,
                                                  onContentSizeChange: Ze,
                                                  wrapperOffset,
                                                  scrollableRegionSize: sharedValue,
                                                  gestureState: null,
                                                  opacity: null,
                                                };
                                                class Oe {
                                                  constructor(arg0, arg1) {
                                                    tmp2 = scrollPosition === VoicePanelModes.DISMISSED;
                                                    if (tmp2) {
                                                      tmp3 = arg1;
                                                      tmp2 = arg1 !== tmp.DISMISSED;
                                                    }
                                                    if (tmp2) {
                                                      tmp4 = closure_1;
                                                      tmp5 = closure_2;
                                                      tmp6 = closure_25;
                                                      tmp7 = closure_1(closure_2[23])(closure_25, {
                                                        cancel: false,
                                                        active: false,
                                                      });
                                                    }
                                                    return;
                                                  }
                                                }
                                                obj19.opacity = derivedValue;
                                                cResult[79] = cResult[22];
                                                cResult[80] = sharedValue4;
                                                cResult[81] = animatedScrollHandler;
                                                cResult[82] = Ze;
                                                cResult[83] = derivedValue;
                                                cResult[84] = animatedProps;
                                                class Ce {
                                                  constructor() {
                                                    tmp = undefined;
                                                    if (mode.get() === VoicePanelModes.PANEL) {
                                                      tmp2 = focused;
                                                      value = focused.get();
                                                      tmp4 = null;
                                                      id = undefined;
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
                                                const tmpResult18 = tmp(tmp2[15]);
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
      }
      if (cResult[23] === connected) {
        class Ze {
          constructor(arg0, arg1) {
            result = closure_19.set(arg1);
            return;
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
      const obj9 = { runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, handleFocusChange };
      VoicePanelUITsx10.__closure = {
        connected,
        mode,
        VoicePanelModes: showControls,
        controlsSpecs,
        VoicePanelControlsModes: wrapperOffset,
        runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS,
        showControls,
        hideControls,
      };
      VoicePanelUITsx10.__workletHash = 3342963866967;
      VoicePanelUITsx10.__initData = __initData7;
      cResult[23] = connected;
      cResult[24] = controlsSpecs;
      cResult[25] = hideControls;
      cResult[26] = mode;
      cResult[27] = showControls;
      cResult[28] = VoicePanelUITsx10;
      const obj20 = {
        connected,
        mode,
        VoicePanelModes: showControls,
        controlsSpecs,
        VoicePanelControlsModes: wrapperOffset,
        runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS,
        showControls,
        hideControls,
      };
    }
  : (scrollPosition) => {
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
      closure_20 = tmp2;
      const sharedValue = scrollPosition(setPanelFullscreen[15]).useSharedValue(0);
      let obj = scrollPosition(setPanelFullscreen[15]);
      const sharedValue1 = scrollPosition(setPanelFullscreen[15]).useSharedValue(false);
      obj2 = scrollPosition(setPanelFullscreen[15]);
      const sharedValue2 = scrollPosition(setPanelFullscreen[15]).useSharedValue(false);
      let obj3 = scrollPosition(setPanelFullscreen[15]);
      const sharedValue3 = scrollPosition(setPanelFullscreen[15]).useSharedValue({ start: 0, end: safeArea });
      let tmp7 = setPanelOpen(setPanelPIP.useState(true), 2);
      let first = tmp7[0];
      const PIP_POP_HEIGHT = tmp7[1];
      const memo = setPanelPIP.useMemo(() => {
        const Gesture = scrollPosition(setPanelFullscreen[21]).Gesture;
        return Gesture.Native();
      }, []);
      obj4 = scrollPosition(setPanelFullscreen[15]);
      let obj5 = { start: 0, end: safeArea };
      const animatedRef = scrollPosition(setPanelFullscreen[15]).useAnimatedRef();
      let obj6 = scrollPosition(setPanelFullscreen[15]);
      const sharedValue4 = scrollPosition(setPanelFullscreen[15]).useSharedValue({
        absoluteXStart: 0,
        absoluteYStart: 0,
        cancel: false,
        active: false,
        requiresPop: false,
      });
      let obj7 = scrollPosition(setPanelFullscreen[15]);
      let fn = function h() {
        return { gestureActive: sharedValue4.get().active, connected: connected.get(), mode: mode.get() };
      };
      fn.__closure = { gestureState: sharedValue4, connected, mode };
      fn.__workletHash = 11454780288856;
      fn.__initData = __initData16;
      let fn2 = function f(mode, safeAreaState2) {
        if (!obj.cheapWorkletShallowEqual(mode, tmp)) {
          mode = mode.mode;
          if (mode.connected) {
            if (!mode.gestureActive) {
              if (mode === VoicePanelModes.PANEL) {
                ReanimatedRexport2.runOnJS(setPanelFullscreen)(true);
                const tmp2Result = ReanimatedRexport2;
              }
              if (mode === VoicePanelModes.PANEL) {
                ReanimatedRexport2.runOnJS(setPanelOpen)(true);
                const tmp2Result6 = ReanimatedRexport2;
              } else {
                ReanimatedRexport2.runOnJS(setPanelOpen)(false);
                const tmp2Result7 = ReanimatedRexport2;
              }
              if (mode === VoicePanelModes.PIP) {
                ReanimatedRexport2.runOnJS(setPanelPIP)(true);
                const tmp2Result8 = ReanimatedRexport2;
              } else {
                ReanimatedRexport2.runOnJS(setPanelPIP)(false);
                const tmp2Result9 = ReanimatedRexport2;
              }
            }
          }
          ReanimatedRexport2.runOnJS(setPanelFullscreen)(false);
          const tmp2Result10 = ReanimatedRexport2;
        }
        obj = cheapWorkletShallowEqual;
        tmp = safeAreaState2;
      };
      const obj8 = scrollPosition(setPanelFullscreen[15]);
      fn2.__closure = {
        cheapWorkletShallowEqual: scrollPosition(setPanelFullscreen[22]).cheapWorkletShallowEqual,
        VoicePanelModes: setMode,
        runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS,
        setPanelFullscreen,
        setPanelOpen,
        setPanelPIP,
      };
      fn2.__workletHash = 7042586903190;
      fn2.__initData = __initData17;
      const animatedReaction = obj8.useAnimatedReaction(fn, fn2);
      const obj9 = {
        cheapWorkletShallowEqual: scrollPosition(setPanelFullscreen[22]).cheapWorkletShallowEqual,
        VoicePanelModes: setMode,
        runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS,
        setPanelFullscreen,
        setPanelOpen,
        setPanelPIP,
      };
      let fn3 = function p() {
        return mode.get();
      };
      fn3.__closure = { mode };
      fn3.__workletHash = 7690101146047;
      fn3.__initData = __initData18;
      let fn4 = function _(arg0, arg1) {
        let tmp2 = arg0 === VoicePanelModes.DISMISSED;
        if (tmp2) {
          tmp2 = arg1 !== tmp.DISMISSED;
        }
        if (tmp2) {
          updateSharedValueIfChangedDefault(sharedValue4, { cancel: false, active: false });
        }
      };
      const obj10 = scrollPosition(setPanelFullscreen[15]);
      fn4.__closure = {
        VoicePanelModes: setMode,
        updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[23]),
        gestureState: sharedValue4,
      };
      fn4.__workletHash = 556236677576;
      fn4.__initData = __initData19;
      const animatedReaction1 = obj10.useAnimatedReaction(fn3, fn4);
      const items = [channelId];
      const handleFocusChange = setPanelPIP.useCallback((arg0) => {
        let tmp = null != arg0;
        if (tmp) {
          tmp = isActivityParticipant(ChannelRTCStore.getParticipant(channelId, arg0));
        }
        PIP_POP_HEIGHT(!tmp);
      }, items);
      const obj11 = {
        VoicePanelModes: setMode,
        updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[23]),
        gestureState: sharedValue4,
      };
      function se() {
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
      se.__closure = { mode, VoicePanelModes: setMode, focused };
      se.__workletHash = 12141076453802;
      se.__initData = __initData20;
      function ae(arg0, arg1) {
        if (arg0 !== arg1) {
          ReanimatedRexport2.runOnJS(callback)(arg0);
        }
      }
      const obj12 = scrollPosition(setPanelFullscreen[15]);
      ae.__closure = { runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, handleFocusChange };
      ae.__workletHash = 717225298458;
      ae.__initData = __initData21;
      const animatedReaction2 = obj12.useAnimatedReaction(se, ae);
      let tmp16 = dragScrolling(setPanelFullscreen[24])();
      const controlsLock = tmp16;
      const items1 = [
        tmp2,
        connected,
        controlsSpecs,
        dismissPanel,
        dismissToPIPGestureRef,
        focused,
        first,
        hideControls,
        sharedValue4,
        isFocusedVideoZoomed,
        sharedValue1,
        mode,
        safeArea,
        scrollPosition,
        memo,
        setMode,
        showControls,
        windowDimensions,
        wrapperDimensions,
        wrapperOffset,
        tmp16,
      ];
      const memo1 = setPanelPIP.useMemo(() => {
        const Gesture = LegacyBaseButton.Gesture;
        const Gesture2 = LegacyBaseButton.Gesture;
        const rect = { left: -1 * closure_20.left, right: -1 * closure_20.right };
        const TapResult = Gesture2.Tap();
        const hitSlopResult = Gesture2.Tap().hitSlop(rect);
        const enabledResult = Gesture2.Tap().hitSlop(rect).enabled(first);
        const fn = function f() {
          if (connected.get()) {
            if (mode.get() !== setMode.PIP) {
              if (controlsSpecs.get().mode === wrapperDimensions.HIDDEN) {
                scrollPosition(setPanelFullscreen[15]).runOnJS(showControls)({ debounce: true });
                obj2 = scrollPosition(setPanelFullscreen[15]);
              } else {
                scrollPosition(setPanelFullscreen[15]).runOnJS(hideControls)({ debounce: true });
                const obj = scrollPosition(setPanelFullscreen[15]);
              }
            }
          }
        };
        const maxDistanceResult = Gesture2.Tap().hitSlop(rect).enabled(first).maxDistance(30);
        fn.__closure = {
          connected,
          mode,
          VoicePanelModes,
          controlsSpecs,
          VoicePanelControlsModes,
          runOnJS: ReanimatedRexport2.runOnJS,
          showControls,
          hideControls,
        };
        fn.__workletHash = 14805228323598;
        fn.__initData = __initData;
        let obj = {
          connected,
          mode,
          VoicePanelModes,
          controlsSpecs,
          VoicePanelControlsModes,
          runOnJS: ReanimatedRexport2.runOnJS,
          showControls,
          hideControls,
        };
        const Gesture3 = LegacyBaseButton.Gesture;
        const onStartResult = maxDistanceResult.onStart(fn);
        const PanResult = Gesture3.Pan();
        const enabledResult1 = Gesture3.Pan().enabled(first);
        const manualActivationResult = Gesture3.Pan().enabled(first).manualActivation(true);
        const rect1 = { left: -1 * closure_20.left, right: -1 * closure_20.right };
        const maxPointersResult = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1);
        const hitSlopResult1 = Gesture3.Pan().enabled(first).manualActivation(true).maxPointers(1).hitSlop(rect1);
        let result = Gesture3.Pan()
          .enabled(first)
          .manualActivation(true)
          .maxPointers(1)
          .hitSlop(rect1)
          .withRef(dismissToPIPGestureRef)
          .shouldCancelWhenOutside(false);
        let result1 = result.simultaneousWithExternalGesture(memo);
        class S {
          constructor(arg0, arg1) {
            first = arg0.allTouches[0];
            if (mode) {
              tmp2 = null;
              if (null != first) {
                tmp3 = closure_1_17;
                tmp4 = closure_1_14;
                if (first.absoluteY > closure_1_17.get().height - closure_1_14.get().bottom) {
                  tmp16 = closure_1_29;
                  obj1 = {};
                  tmp17 = obj1;
                  merged = Object.assign(closure_1_29.get());
                  flag2 = true;
                  obj1.cancel = true;
                  result = closure_1_29.set(obj1);
                  activateResult = arg1.activate();
                  return;
                }
              }
            }
            value = closure_1_12.get();
            if (!value) {
              tmp6 = closure_1_13;
              tmp7 = setMode;
              tmp8 = closure_1_13.get() === setMode.PANEL;
              if (tmp8) {
                tmp9 = closure_1_7;
                tmp10 = wrapperDimensions;
                tmp8 = closure_1_7.get().mode === wrapperDimensions.DRAWER;
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
        S.__closure = {
          IS_IOS,
          windowDimensions,
          safeArea,
          gestureState: sharedValue4,
          isFocusedVideoZoomed,
          mode,
          VoicePanelModes,
          controlsSpecs,
          VoicePanelControlsModes,
        };
        S.__workletHash = 6294734950159;
        S.__initData = __initData8;
        obj2 = {
          IS_IOS,
          windowDimensions,
          safeArea,
          gestureState: sharedValue4,
          isFocusedVideoZoomed,
          mode,
          VoicePanelModes,
          controlsSpecs,
          VoicePanelControlsModes,
        };
        const withRefResult = Gesture3.Pan()
          .enabled(first)
          .manualActivation(true)
          .maxPointers(1)
          .hitSlop(rect1)
          .withRef(dismissToPIPGestureRef);
        const fn2 = function u(arg0) {
          if (!sharedValue4.get().cancel) {
            dragScrolling(setPanelFullscreen[23])(wrapperOffset, { x: 0, y: 0 });
            obj4 = { absoluteXStart: null, absoluteYStart: null, active: false, cancel: false, requiresPop: null };
            ({ absoluteX: obj2.absoluteXStart, absoluteY: obj2.absoluteYStart } = arg0);
            value = connected.get();
            if (value) {
              value = mode.get() === setMode.PANEL;
            }
            obj4.requiresPop = value;
            const result = sharedValue4.set(obj4);
            if (controlsSpecs.get().mode === wrapperDimensions.FLOATING_DEFAULT) {
              scrollPosition(setPanelFullscreen[15]).runOnJS(controlsLock.lock)();
              const obj3 = scrollPosition(setPanelFullscreen[15]);
            }
          }
        };
        const onTouchesDownResult = result1.onTouchesDown(S);
        fn2.__closure = {
          gestureState: sharedValue4,
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          wrapperOffset,
          connected,
          mode,
          VoicePanelModes,
          controlsSpecs,
          VoicePanelControlsModes,
          runOnJS: ReanimatedRexport2.runOnJS,
          controlsLock,
        };
        fn2.__workletHash = 11291998105531;
        fn2.__initData = __initData7;
        let obj3 = {
          gestureState: sharedValue4,
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          wrapperOffset,
          connected,
          mode,
          VoicePanelModes,
          controlsSpecs,
          VoicePanelControlsModes,
          runOnJS: ReanimatedRexport2.runOnJS,
          controlsLock,
        };
        const fn3 = function c(state, fail) {
          if (state.state === scrollPosition(setPanelFullscreen[21]).State.BEGAN) {
            if (!sharedValue4.get().active) {
              if (!sharedValue4.get().cancel) {
                ({ absoluteY, absoluteX } = state.changedTouches[0]);
                const diff = sharedValue4.get().absoluteYStart - absoluteY;
                const diff1 = sharedValue4.get().absoluteXStart - absoluteX;
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
                if (mode.get() === setMode.PANEL) {
                  const _Math6 = Math;
                  if (diff < 0) {
                    if (Math.floor(closure_1_0.get()) <= 0) {
                      let tmp24 = !isQuest;
                      if (isQuest) {
                        tmp24 = bound > sharedValue3;
                      }
                      let flag = tmp24;
                    }
                  }
                  value = focused.get();
                  let id;
                  if (value != null) {
                    id = value.id;
                  }
                  flag = false;
                  if (tmp21) {
                    fail.fail();
                    flag = false;
                  }
                  tmp21 = null != id && tmp9;
                } else {
                  let tmp12 = mode.get() === tmp11.PIP;
                  if (tmp12) {
                    tmp12 = bound > sharedValue3;
                  }
                  flag = false;
                  if (tmp12) {
                    scrollPosition(setPanelFullscreen[15]).runOnJS(dragScrolling(setPanelFullscreen[25]))();
                    flag = true;
                    const tmpResult = scrollPosition(setPanelFullscreen[15]);
                  }
                }
                const tmp27 = dragScrolling(setPanelFullscreen[23]);
                if (flag) {
                  tmp27(wrapperOffset, { gestureActive: true });
                  obj2 = {
                    absoluteXStart: absoluteX,
                    absoluteYStart: absoluteY + closure_1_0.get(),
                    cancel: false,
                    active: true,
                    requiresPop: sharedValue4.get().requiresPop,
                  };
                  const result = sharedValue4.set(obj2);
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
        fn3.__closure = {
          State: LegacyBaseButton.State,
          gestureState: sharedValue4,
          mode,
          VoicePanelModes,
          scrollPosition,
          isQuest,
          MIN_GESTURE_MOVE,
          focused,
          runOnJS: ReanimatedRexport2.runOnJS,
          triggerIOSHaptic: utils_triggerIOSHapticDefault,
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          wrapperOffset,
          lockScrolling: sharedValue1,
        };
        fn3.__workletHash = 1135104747808;
        fn3.__initData = __initData6;
        obj4 = {
          State: LegacyBaseButton.State,
          gestureState: sharedValue4,
          mode,
          VoicePanelModes,
          scrollPosition,
          isQuest,
          MIN_GESTURE_MOVE,
          focused,
          runOnJS: ReanimatedRexport2.runOnJS,
          triggerIOSHaptic: utils_triggerIOSHapticDefault,
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          wrapperOffset,
          lockScrolling: sharedValue1,
        };
        const fn4 = function l(absoluteY) {
          if (!sharedValue4.get().cancel) {
            let merged1 = mode.get();
            if (merged1 !== setMode.PIP) {
              const result = -1 * (sharedValue4.get().absoluteYStart - absoluteY.absoluteY);
              let tmp12 = connected.get() && !sharedValue4.get().requiresPop;
              if (tmp12) {
                tmp12 = result <= 0;
              }
              if (tmp12) {
                obj2 = {};
                merged1 = Object.assign(sharedValue4.get());
                obj2.requiresPop = true;
                const result1 = sharedValue4.set(obj2);
              }
              if (sharedValue1.get()) {
                if (result < 0) {
                  const result2 = sharedValue1.set(false);
                }
                let diff = result;
                if (!sharedValue4.get().requiresPop) {
                  const point = { y: diff, x: 0 };
                  dragScrolling(setPanelFullscreen[23])(wrapperOffset, point);
                } else {
                  const _Math = Math;
                  merged1 = Math.max(result, 0);
                  if (merged1 > closure_26) {
                    const obj3 = {};
                    const merged = Object.assign(sharedValue4.get());
                    obj3.requiresPop = false;
                    const result3 = sharedValue4.set(obj3);
                    const obj6 = scrollPosition(setPanelFullscreen[15]);
                    scrollPosition(setPanelFullscreen[15]).runOnJS(
                      scrollPosition(setPanelFullscreen[26]).triggerHapticFeedback,
                    )(scrollPosition(setPanelFullscreen[26]).HapticFeedbackTypes.IMPACT_MEDIUM);
                    diff = result;
                    const runOnJSResult = scrollPosition(setPanelFullscreen[15]).runOnJS(
                      scrollPosition(setPanelFullscreen[26]).triggerHapticFeedback,
                    );
                  }
                }
                diff = merged1 - merged1 * closure_20;
              }
              value2 = sharedValue1.get();
              let tmp16 = !value2;
              if (!value2) {
                merged1 = closure_1_0;
                tmp16 = closure_1_0.get() <= 0;
              }
              if (tmp16) {
                const result4 = sharedValue1.set(true);
              }
            } else {
              const point1 = {
                x: -1 * (sharedValue4.get().absoluteXStart - absoluteY.absoluteX),
                y: -1 * (sharedValue4.get().absoluteYStart - absoluteY.absoluteY),
              };
              dragScrolling(setPanelFullscreen[23])(wrapperOffset, point1);
              const tmp7 = dragScrolling(setPanelFullscreen[23]);
            }
          }
        };
        const onTouchesMoveResult = onBeginResult.onTouchesMove(fn3);
        fn4.__closure = {
          gestureState: sharedValue4,
          mode,
          VoicePanelModes,
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          wrapperOffset,
          connected,
          lockScrolling: sharedValue1,
          scrollPosition,
          POP_RESISTANCE,
          PIP_POP_HEIGHT,
          runOnJS: ReanimatedRexport2.runOnJS,
          triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
          HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes,
        };
        fn4.__workletHash = 9035201692095;
        fn4.__initData = __initData5;
        let obj5 = {
          gestureState: sharedValue4,
          mode,
          VoicePanelModes,
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          wrapperOffset,
          connected,
          lockScrolling: sharedValue1,
          scrollPosition,
          POP_RESISTANCE,
          PIP_POP_HEIGHT,
          runOnJS: ReanimatedRexport2.runOnJS,
          triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
          HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes,
        };
        const fn5 = function s() {
          const result = sharedValue1.set(false);
          dragScrolling(setPanelFullscreen[23])(sharedValue4, { cancel: false, active: false });
          dragScrolling(setPanelFullscreen[23])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
        };
        const onChangeResult = onTouchesMoveResult.onChange(fn4);
        fn5.__closure = {
          lockScrolling: sharedValue1,
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          gestureState: sharedValue4,
          wrapperOffset,
        };
        fn5.__workletHash = 11957625127277;
        fn5.__initData = __initData4;
        let obj6 = {
          lockScrolling: sharedValue1,
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          gestureState: sharedValue4,
          wrapperOffset,
        };
        const fn6 = function o(velocityY) {
          if (!sharedValue4.get().cancel) {
            velocityY = velocityY.velocityY;
            ({ velocityX, absoluteX, absoluteY } = velocityY);
            if (mode.get() === setMode.PIP) {
              const obj6 = {
                velocityX,
                velocityY,
                absoluteX,
                absoluteY,
                windowDimensions: windowDimensions.get(),
                safeArea: safeArea.get(),
              };
              const result = scrollPosition(setPanelFullscreen[27]).calculatePIPPositionFromVelocity(obj6);
              ({ pipX, pipY } = result);
              const obj7 = { pipX, pipY };
              dragScrolling(setPanelFullscreen[23])(wrapperDimensions, obj7);
              dragScrolling(setPanelFullscreen[23])(wrapperOffset, { gestureActive: false });
              const obj5 = scrollPosition(setPanelFullscreen[27]);
            } else if (mode.get() === setMode.PANEL) {
              if (velocityY > 0) {
                if (connected.get()) {
                  if (sharedValue4.get().requiresPop) {
                    dragScrolling(setPanelFullscreen[23])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
                    const result1 = sharedValue1.set(false);
                  } else {
                    scrollPosition(setPanelFullscreen[15]).runOnJS(closure_1_15)(setMode.PIP);
                    dragScrolling(setPanelFullscreen[23])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
                    obj4 = scrollPosition(setPanelFullscreen[15]);
                  }
                } else {
                  const diff = wrapperDimensions.get().drawerHeight - wrapperDimensions.get().drawerY;
                  if (wrapperOffset.get().y > diff * first) {
                    dragScrolling(setPanelFullscreen[23])(wrapperOffset, { gestureActive: false });
                    scrollPosition(setPanelFullscreen[15]).runOnJS(dismissPanel)();
                    const obj3 = scrollPosition(setPanelFullscreen[15]);
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
        fn6.__closure = {
          gestureState: sharedValue4,
          mode,
          VoicePanelModes,
          calculatePIPPositionFromVelocity: VoicePanelPIPUtils.calculatePIPPositionFromVelocity,
          windowDimensions,
          safeArea,
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          wrapperDimensions,
          wrapperOffset,
          connected,
          runOnJS: ReanimatedRexport2.runOnJS,
          setMode,
          lockScrolling: sharedValue1,
          MIN_DISMISS_MOVE_PERCENTAGE,
          dismissPanel,
        };
        fn6.__workletHash = 9249476857050;
        fn6.__initData = __initData3;
        let obj7 = {
          gestureState: sharedValue4,
          mode,
          VoicePanelModes,
          calculatePIPPositionFromVelocity: VoicePanelPIPUtils.calculatePIPPositionFromVelocity,
          windowDimensions,
          safeArea,
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          wrapperDimensions,
          wrapperOffset,
          connected,
          runOnJS: ReanimatedRexport2.runOnJS,
          setMode,
          lockScrolling: sharedValue1,
          MIN_DISMISS_MOVE_PERCENTAGE,
          dismissPanel,
        };
        const fn7 = function t() {
          let tmp = 0 !== wrapperOffset.get().y;
          if (tmp) {
            tmp = mode.get() === setMode.PANEL;
          }
          if (!tmp) {
            dragScrolling(setPanelFullscreen[23])(sharedValue4, { cancel: false, active: false });
          }
          scrollPosition(setPanelFullscreen[15]).runOnJS(controlsLock.unlock)();
          const obj = scrollPosition(setPanelFullscreen[15]);
        };
        const onEndResult = onTouchesCancelledResult.onEnd(fn6);
        fn7.__closure = {
          wrapperOffset,
          mode,
          VoicePanelModes,
          updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
          gestureState: sharedValue4,
          runOnJS: ReanimatedRexport2.runOnJS,
          controlsLock,
        };
        fn7.__workletHash = 13245639097703;
        fn7.__initData = __initData2;
        return Gesture.Race(onStartResult, onEndResult.onFinalize(fn7));
      }, items1);
      const obj13 = { runOnJS: scrollPosition(setPanelFullscreen[15]).runOnJS, handleFocusChange };
      const obj15 = { onBeginDrag: null, onEndDrag: null, onMomentumEnd: null, onScroll: null };
      function ue(contentOffset) {
        const result = scrollPosition.set(contentOffset.contentOffset.y);
        const result1 = dragScrolling.set(true);
      }
      ue.__closure = { scrollPosition, dragScrolling };
      ue.__workletHash = 9264281860951;
      ue.__initData = __initData22;
      obj15.onBeginDrag = ue;
      function ce() {
        const result = dragScrolling.set(false);
      }
      ce.__closure = { dragScrolling };
      ce.__workletHash = 26506964466;
      ce.__initData = __initData23;
      obj15.onEndDrag = ce;
      function le() {
        const result = dragScrolling.set(false);
      }
      le.__closure = { dragScrolling };
      le.__workletHash = 8850648747337;
      le.__initData = __initData24;
      obj15.onMomentumEnd = le;
      function ie(contentOffset) {
        if (sharedValue1.get()) {
          if (!sharedValue2.get()) {
            if (scrollPosition.get() < 0) {
              const result = scrollPosition.set(0);
            }
            value = scrollPosition.get();
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
            value2 = scrollPosition.get();
            if (typeof computeViewableChunksFromScrollPosition === "function") {
              const _Math = Math;
              const rounded = Math.ceil(windowDimensions.get().height / VOICE_PANEL_CHUNK_DIVISOR);
              const _Math2 = Math;
              const _Math3 = Math;
              const _Math4 = Math;
              const _Math5 = Math;
              const sum = Math.max(Math.floor(value2 / rounded) - 1, 0) + VOICE_PANEL_CHUNK_DIVISOR + num4;
              const bound = Math.min(sum, Math.ceil(tmp24 / rounded));
              obj2 = { start: null, end: null };
              const _Math6 = Math;
              obj2.start = Math.max(bound - VOICE_PANEL_CHUNK_DIVISOR - 2, 0);
              obj2.end = bound;
              tmp = obj2;
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
      const obj14 = scrollPosition(setPanelFullscreen[15]);
      ie.__closure = {
        lockScrolling: sharedValue1,
        isSnappingBack: sharedValue2,
        scrollPosition,
        scrollTo: scrollPosition(setPanelFullscreen[15]).scrollTo,
        scrollerRef: animatedRef,
        computeViewableChunksFromScrollPosition,
        windowDimensions,
        scrollableRegionSize: sharedValue,
        updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[23]),
        viewableChunks: sharedValue3,
      };
      ie.__workletHash = 4242774428742;
      ie.__initData = __initData25;
      obj15.onScroll = ie;
      const obj16 = {
        lockScrolling: sharedValue1,
        isSnappingBack: sharedValue2,
        scrollPosition,
        scrollTo: scrollPosition(setPanelFullscreen[15]).scrollTo,
        scrollerRef: animatedRef,
        computeViewableChunksFromScrollPosition,
        windowDimensions,
        scrollableRegionSize: sharedValue,
        updateSharedValueIfChanged: dragScrolling(setPanelFullscreen[23]),
        viewableChunks: sharedValue3,
      };
      const animatedScrollHandler = obj14.useAnimatedScrollHandler(obj15);
      function ge() {
        return mode.get();
      }
      ge.__closure = { mode };
      ge.__workletHash = 1385044671925;
      ge.__initData = __initData26;
      function de(arg0, arg1) {
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
        tmp = null != arg1 && arg0 !== arg1;
      }
      de.__closure = { VoicePanelModes: setMode, lockScrolling: sharedValue1 };
      de.__workletHash = 6193088181234;
      de.__initData = __initData27;
      const animatedReaction3 = scrollPosition(setPanelFullscreen[15]).useAnimatedReaction(ge, de);
      const obj17 = scrollPosition(setPanelFullscreen[15]);
      const token = scrollPosition(setPanelFullscreen[28]).useToken(
        dragScrolling(setPanelFullscreen[14]).modules.mobile.VOICE_PANEL_GUTTER,
      );
      const obj18 = scrollPosition(setPanelFullscreen[28]);
      function _e() {
        const tmp = mode.get() === VoicePanelModes.PIP;
        let tmp2 = tmp;
        if (!tmp) {
          tmp2 = null != focused.get();
        }
        let str = "auto";
        if (tmp) {
          str = "none";
        }
        const obj = {
          pointerEvents: str,
          scrollEnabled: !tmp2,
          showsVerticalScrollIndicator: null,
          scrollIndicatorInsets: null,
        };
        value = sharedValue1.get();
        let tmp7 = !value;
        if (!value) {
          tmp7 = tmp5;
        }
        obj.showsVerticalScrollIndicator = tmp7;
        const rect = {
          top: calculateVoicePanelHeaderSpecsDefault(safeArea.get(), token).height - safeArea.get().top,
          bottom: safeArea.get().bottom,
        };
        obj.scrollIndicatorInsets = rect;
        return obj;
      }
      const obj19 = scrollPosition(setPanelFullscreen[15]);
      _e.__closure = {
        mode,
        VoicePanelModes: setMode,
        focused,
        lockScrolling: sharedValue1,
        calculateVoicePanelHeaderSpecs: dragScrolling(setPanelFullscreen[29]),
        safeArea,
        edgeGutter: token,
      };
      _e.__workletHash = 6124726929163;
      _e.__initData = __initData28;
      const items2 = [sharedValue];
      const animatedProps = obj19.useAnimatedProps(_e);
      const callback1 = setPanelPIP.useCallback((arg0, arg1) => {
        const result = sharedValue.set(arg1);
      }, items2);
      const obj20 = {
        mode,
        VoicePanelModes: setMode,
        focused,
        lockScrolling: sharedValue1,
        calculateVoicePanelHeaderSpecs: dragScrolling(setPanelFullscreen[29]),
        safeArea,
        edgeGutter: token,
      };
      class Ue {
        constructor() {
          value = mode.get();
          if (VoicePanelModes.PIP !== value) {
            if (VoicePanelModes.DISMISSED !== value) {
              tmp7 = connected;
              if (connected.get()) {
                obj = closure_29;
                if (closure_29.get().active) {
                  if (obj.get().requiresPop) {
                    num3 = 1;
                    return 1;
                  }
                }
              }
              tmp2 = wrapperDimensions;
              tmp3 = wrapperOffset;
              tmp5 = windowDimensions;
              sum = wrapperDimensions.get().drawerY + wrapperOffset.get().y;
              height = windowDimensions.get().height;
              tmp6 = globalThis;
              _Math = Math;
              _Math2 = Math;
              num = 0;
              num2 = 1;
              return Math.min(Math.max((height - sum) / height, 0), 1);
            }
          }
          return 0;
        }
      }
      Ue.__closure = {
        mode,
        VoicePanelModes: setMode,
        connected,
        gestureState: sharedValue4,
        wrapperDimensions,
        wrapperOffset,
        windowDimensions,
      };
      Ue.__workletHash = 17433445143273;
      Ue.__initData = __initData29;
      const obj21 = scrollPosition(setPanelFullscreen[15]);
      return {
        gesture: memo1,
        scrollerRef: animatedRef,
        scrollNativeGesture: memo,
        viewableChunks: sharedValue3,
        handleScroll: animatedScrollHandler,
        scrollViewProps: animatedProps,
        onContentSizeChange: callback1,
        wrapperOffset,
        scrollableRegionSize: sharedValue,
        gestureState: sharedValue4,
        opacity: scrollPosition(setPanelFullscreen[15]).useDerivedValue(Ue),
      };
    };
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
computeBorderRadii.__workletHash = 4017485515216;
computeBorderRadii.__initData = {
  code: "function computeBorderRadii_VoicePanelUITsx48({mode:mode,connected:connected}){const{VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP,DEFAULT_BORDER_RADIUS}=this.__closure;if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return!connected?DEFAULT_BORDER_RADIUS:0;}",
};
const __initData30 = {
  code: "function VoicePanelUITsx49(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().height;}",
};
const __initData31 = {
  code: "function VoicePanelUITsx50(){const{mode,connected,windowDimensions,safeArea,focused,pipState,controlsHeight,preJoinContentSize,globalStatusIndicatorHeight}=this.__closure;return{modeToSet:mode.get(),connected:connected.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get(),focused:focused.get(),pipState:pipState,controlsHeight:controlsHeight.get(),preJoinContentSize:preJoinContentSize.get(),globalStatusIndicatorHeight:globalStatusIndicatorHeight};}",
};
const __initData32 = {
  code: "function VoicePanelUITsx51(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperDimensions,updateSharedValueIfChanged,wrapperOffset,getMaxPanelWidth,getPanelX,roundToNearestPixel,windowDimensions}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{modeToSet:modeToSet,connected:connected,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,pipState:pipState,controlsHeight:controlsHeight,preJoinContentSize:preJoinContentSize,globalStatusIndicatorHeight:globalStatusIndicatorHeight}=props;if(modeToSet===VoicePanelModes.PIP&&pipState.id==null){return;}const animated=previous!=null?windowHeight===previous.windowHeight&&windowWidth===previous.windowWidth&&safeArea.top===previous.safeArea.top&&safeArea.bottom===previous.safeArea.bottom&&safeArea.left===previous.safeArea.left&&safeArea.right===previous.safeArea.right:true;let{drawerX:drawerX,drawerY:drawerY}=wrapperDimensions.get();const availableHeight=windowHeight-globalStatusIndicatorHeight;if(modeToSet===VoicePanelModes.PANEL){if(connected){drawerX=0;drawerY=0;updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else{const drawerWidth=getMaxPanelWidth({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeArea.left,safeAreaRight:safeArea.right});drawerX=getPanelX(windowWidth,drawerWidth);drawerY=roundToNearestPixel(Math.max(availableHeight-preJoinContentSize-controlsHeight-safeArea.bottom,availableHeight-0.8*availableHeight));updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:drawerWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});}}else if(modeToSet===VoicePanelModes.DISMISSED){if(connected){updateSharedValueIfChanged(wrapperDimensions,{mode:modeToSet});}else{updateSharedValueIfChanged(wrapperDimensions,{drawerY:windowDimensions.get().height+60,mode:modeToSet});}updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}}",
};
const __initData33 = {
  code: "function VoicePanelUITsx52(){const{useReducedMotion,wrapperDimensions,wrapperOffset,connected,mode,VoicePanelModes,runOnJS,updateSourceTrackingView,withSpring,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,DRAWER_SIZE_PHYSICS}=this.__closure;const animateXY=!useReducedMotion.get()&&wrapperDimensions.get().animated||wrapperOffset.get().gestureActive;const{gestureActive:gestureActive,y:offsetY,x:offsetX}=wrapperOffset.get();let{drawerY:y,drawerX:x}=wrapperDimensions.get();const applyGestureOffset=!connected.get()&&(gestureActive||offsetY!==0);if(applyGestureOffset){y+=Math.max(offsetY,0);x+=offsetX;}const updateSourceTrackingViewHelper=function(finished){if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}};return{transform:[{translateX:withSpring(x,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},{translateY:withSpring(y,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)}]};}",
};
const __initData34 = {
  code: "function VoicePanelUITsx53(finished){const{mode,VoicePanelModes,runOnJS,updateSourceTrackingView}=this.__closure;if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}}",
};
const __initData35 = {
  code: "function VoicePanelUITsx54(){const{computeBorderRadii,mode,connected,wrapperDimensions,withSpring,BORDER_RADIUS_PHYSICS,VoicePanelModes,styles}=this.__closure;const borderRadius=computeBorderRadii({mode:mode.get(),connected:connected.get()});return{width:wrapperDimensions.get().drawerWidth,height:wrapperDimensions.get().drawerHeight,borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS),pointerEvents:mode.get()===VoicePanelModes.PANEL?'auto':'none',backgroundColor:connected.get()?'transparent':styles.maskDefaultBackground.backgroundColor};}",
};
const __initData36 = {
  code: "function VoicePanelUITsx55(){const{windowDimensions}=this.__closure;return windowDimensions.get();}",
};
const __initData37 = {
  code: "function VoicePanelUITsx56(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Window dimensions changed:',JSON.stringify(value));}",
};
const __initData38 = {
  code: "function VoicePanelUITsx57(){const{wrapperDimensions}=this.__closure;return wrapperDimensions.get();}",
};
const __initData39 = {
  code: "function VoicePanelUITsx58(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Wrapper dimensions changed:',JSON.stringify(value));}",
};
ReactCompilerGating = fn(558);
let closure_94 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(9);
      children = children.children;
      ({ wrapperRootStyles, wrapperTransformStyles, wrapperSurfaceStyles } = useWrapperStyles(children.wrapperOffset));
      if (cResult[0] === children) {
        if (cResult[1] === wrapperSurfaceStyles) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] === tmp4) {
          if (cResult[4] === wrapperTransformStyles) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] === tmp6) {
            if (cResult[7] === wrapperRootStyles) {
              let tmp10 = cResult[8];
            }
            return tmp10;
          }
          obj2 = { style: wrapperRootStyles, pointerEvents: "box-none", children: tmp6 };
          const tmp13 = guild(ReanimatedNativeViewDefault, obj2);
          cResult[6] = tmp6;
          cResult[7] = wrapperRootStyles;
          cResult[8] = tmp13;
          tmp10 = tmp13;
        }
        const obj3 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: tmp4 };
        const tmp9 = guild(ReanimatedNativeViewDefault, obj3);
        cResult[3] = tmp4;
        cResult[4] = wrapperTransformStyles;
        cResult[5] = tmp9;
        tmp6 = tmp9;
      }
      const tmp5 = guild(ReanimatedNativeViewDefault, {
        style: wrapperSurfaceStyles,
        layout: layoutTransition,
        children,
      });
      cResult[0] = children;
      cResult[1] = wrapperSurfaceStyles;
      cResult[2] = tmp5;
      tmp4 = tmp5;
      obj4 = { style: wrapperSurfaceStyles, layout: layoutTransition, children };
      const tmp3 = useWrapperStyles(children.wrapperOffset);
    }
  : (children) => {
      ({ wrapperRootStyles, wrapperTransformStyles, wrapperSurfaceStyles } = useWrapperStyles(children.wrapperOffset));
      const obj = { style: wrapperRootStyles, pointerEvents: "box-none", children: null };
      const tmp = useWrapperStyles(children.wrapperOffset);
      obj2 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: null };
      const tmp2 = ReanimatedNativeViewDefault;
      obj2.children = guild(ReanimatedNativeViewDefault, {
        style: wrapperSurfaceStyles,
        layout: layoutTransition,
        children: children.children,
      });
      obj.children = guild(ReanimatedNativeViewDefault, obj2);
      return guild(tmp2, obj);
    };
const DrawerShadeOpacityPhysics = { mass: 0.6, damping: 30, stiffness: 400, overshootClamping: true };
const __initData40 = {
  code: 'function VoicePanelUITsx59(){const{withSpring,opacity,DrawerShadeOpacityPhysics}=this.__closure;return{opacity:withSpring(opacity.get(),DrawerShadeOpacityPhysics),pointerEvents:opacity.get()===0?"none":"auto"};}',
};
const __initData41 = {
  code: "function VoicePanelUITsx60(){const{withSpring,opacity,DrawerShadeOpacityPhysics}=this.__closure;return{opacity:withSpring(opacity.get(),DrawerShadeOpacityPhysics),pointerEvents:opacity.get()===0?'none':'auto'};}",
};
ReactCompilerGating = fn(558);
let closure_98 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (opacity) => {
        const cResult = opacity(576).c(9);
        opacity = opacity.opacity;
        const onPress = opacity.onPress;
        const tmp3 = closure_34();
        let obj = opacity(576);
        const fn = function o() {
          const obj = { opacity: spring.withSpring(opacity.get(), closure_95), pointerEvents: null };
          let str = "auto";
          if (0 === opacity.get()) {
            str = "none";
          }
          obj.pointerEvents = str;
          return obj;
        };
        obj2 = opacity(4612);
        fn.__closure = { withSpring: opacity(5597).withSpring, opacity, DrawerShadeOpacityPhysics };
        fn.__workletHash = 6949445761550;
        fn.__initData = __initData40;
        const animatedStyle = obj2.useAnimatedStyle(fn);
        if (cResult[0] === animatedStyle) {
          if (cResult[1] === tmp3.shade) {
            let tmp5 = cResult[2];
          }
          if (cResult[3] === onPress) {
            if (cResult[4] === tmp3.shadePressable) {
              let tmp6 = cResult[5];
            }
            if (cResult[6] === tmp5) {
              if (cResult[7] === tmp6) {
                let tmp10 = cResult[8];
              }
              return tmp10;
            }
            obj4 = {
              style: tmp5,
              importantForAccessibility: "no-hide-descendants",
              accessibilityElementsHidden: true,
              children: tmp6,
            };
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
        const obj3 = { withSpring: opacity(5597).withSpring, opacity, DrawerShadeOpacityPhysics };
      }
    : (onPress) => {
        const opacity = onPress.opacity;
        const tmp = closure_34();
        const fn = function n() {
          const obj = { opacity: spring.withSpring(opacity.get(), closure_95), pointerEvents: null };
          let str = "auto";
          if (0 === opacity.get()) {
            str = "none";
          }
          obj.pointerEvents = str;
          return obj;
        };
        let obj = opacity(4612);
        fn.__closure = { withSpring: opacity(5597).withSpring, opacity, DrawerShadeOpacityPhysics };
        fn.__workletHash = 7070087280036;
        fn.__initData = __initData41;
        const animatedStyle = obj.useAnimatedStyle(fn);
        const obj3 = {
          style: null,
          importantForAccessibility: "no-hide-descendants",
          accessibilityElementsHidden: true,
          children: closure_21(closure_6, { style: tmp.shadePressable, onPress: onPress.onPress }),
        };
        const items = [StyleSheet.absoluteFill, tmp.shade, animatedStyle];
        obj3.style = items;
        return closure_21(ReanimatedRexport.View, obj3);
      },
);
ReactCompilerGating = fn(558);
let obj12 = { backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUI.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = channelId(576).c(33);
        closure_34();
        let obj = channelId(576);
        const analyticsLocations = useAnalyticsLocationsDefault(
          AnalyticsLocationDefault.VOICE_PANEL,
        ).analyticsLocations;
        const context = noop.useContext(VoicePanelStateContextDefault);
        ({ scrollPosition, dragScrolling, channelId } = context);
        [r10033, importDefault] = noop.useState(false);
        dependencyMap = noop.useRef(-1);
        if (cResult[0] !== channelId) {
          const fn = function n(arg0) {
            closure_0 = arg0;
            clearTimeout(ref.current);
            channelId(ref[39]).batchUpdates(() => {
              if (lockEnabled) {
                const _setTimeout = setTimeout;
                closure_2.current = setTimeout(() => {
                  state = state2.getState();
                  const result = state.setChannelPanelFullscreen(closure_0, lockEnabled);
                  const state1 = state.getState();
                  const freezeLock = state1.requestFreezeLock({ lockEnabled, key: "voice-panel-freeze-" + closure_0 });
                }, 1000);
              } else {
                state = VoicePanelStore.getState();
                let result = state.setChannelPanelFullscreen(channelId, lockEnabled);
                let state1 = AppFreezeStore.getState();
                const obj = { lockEnabled, key: null };
                const _HermesInternal = HermesInternal;
                obj.key = "voice-panel-freeze-" + channelId;
                let freezeLock = state1.requestFreezeLock(obj);
              }
            });
          };
          cResult[0] = channelId;
          cResult[1] = fn;
          let tmp6 = fn;
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
          let tmp8 = items;
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
        const layoutEffect = noop.useLayoutEffect(D, tmp8);
        if (cResult[4] !== channelId) {
          class M {
            constructor(arg0) {
              state = closure_9.getState();
              setChannelPanelOpenResult = state.setChannelPanelOpen(channelId, arg0);
              return;
            }
          }
          cResult[4] = channelId;
          cResult[5] = M;
        } else {
          class M {
            constructor(arg0) {
              state = closure_9.getState();
              setChannelPanelOpenResult = state.setChannelPanelOpen(channelId, arg0);
              return;
            }
          }
        }
        if (cResult[6] !== channelId) {
          class C {
            constructor(arg0) {
              state = closure_9.getState();
              setChannelPanelPIPResult = state.setChannelPanelPIP(channelId, arg0);
              return;
            }
          }
          cResult[6] = channelId;
          cResult[7] = C;
        } else {
          class C {
            constructor(arg0) {
              state = closure_9.getState();
              setChannelPanelPIPResult = state.setChannelPanelPIP(channelId, arg0);
              return;
            }
          }
        }
        if (cResult[8] === dragScrolling) {
          class C {
            constructor(arg0) {
              state = closure_9.getState();
              setChannelPanelPIPResult = state.setChannelPanelPIP(channelId, arg0);
              return;
            }
          }
        }
        cResult[8] = dragScrolling;
        cResult[9] = scrollPosition;
        cResult[10] = tmp6;
        cResult[11] = M;
        cResult[12] = C;
        cResult[13] = { scrollPosition, dragScrolling, setPanelFullscreen: tmp6, setPanelOpen: M, setPanelPIP: C };
        const obj3 = { scrollPosition, dragScrolling, setPanelFullscreen: tmp6, setPanelOpen: M, setPanelPIP: C };
        const tmp5 = _slicedToArray(noop.useState(false), 2);
      }
    : () => {
        const tmp = closure_34();
        const context = noop.useContext(VoicePanelStateContextDefault);
        const channelId = context.channelId;
        ({ scrollPosition, dragScrolling, dismissPanel } = context);
        const tmp6 = _slicedToArray(noop.useState(false), 2);
        importDefault = tmp6[1];
        dependencyMap = noop.useRef(-1);
        const items = [channelId];
        const callback = noop.useCallback((arg0) => {
          closure_0 = arg0;
          clearTimeout(ref.current);
          channelId(ref[39]).batchUpdates(() => {
            if (lockEnabled) {
              const _setTimeout = setTimeout;
              closure_2.current = setTimeout(() => {
                state = state2.getState();
                const result = state.setChannelPanelFullscreen(closure_0, lockEnabled);
                const state1 = state.getState();
                const freezeLock = state1.requestFreezeLock({ lockEnabled, key: "voice-panel-freeze-" + closure_0 });
              }, 1000);
            } else {
              state = VoicePanelStore.getState();
              let result = state.setChannelPanelFullscreen(channelId, lockEnabled);
              let state1 = AppFreezeStore.getState();
              const obj = { lockEnabled, key: null };
              const _HermesInternal = HermesInternal;
              obj.key = "voice-panel-freeze-" + channelId;
              let freezeLock = state1.requestFreezeLock(obj);
            }
          });
        }, items);
        const layoutEffect = noop.useLayoutEffect(
          () => () => {
            clearTimeout(ref.current);
          },
          [],
        );
        const items1 = [channelId];
        const items2 = [channelId];
        const callback1 = noop.useCallback((arg0) => {
          state = VoicePanelStore.getState();
          state.setChannelPanelOpen(channelId, arg0);
        }, items1);
        const tmp4 = useAnalyticsLocationsDefault;
        let obj = {
          scrollPosition,
          dragScrolling,
          setPanelFullscreen: callback,
          setPanelOpen: callback1,
          setPanelPIP: noop.useCallback((arg0) => {
            state = VoicePanelStore.getState();
            state.setChannelPanelPIP(channelId, arg0);
          }, items2),
        };
        ({
          gestureState,
          wrapperOffset,
          gesture,
          handleScroll,
          onContentSizeChange,
          scrollViewProps,
          scrollerRef,
          scrollNativeGesture,
          viewableChunks,
          opacity,
        } = closure_81({
          scrollPosition,
          dragScrolling,
          setPanelFullscreen: callback,
          setPanelOpen: callback1,
          setPanelPIP: noop.useCallback((arg0) => {
            state = VoicePanelStore.getState();
            state.setChannelPanelPIP(channelId, arg0);
          }, items2),
        }));
        const tmp10 = closure_81({
          scrollPosition,
          dragScrolling,
          setPanelFullscreen: callback,
          setPanelOpen: callback1,
          setPanelPIP: noop.useCallback((arg0) => {
            state = VoicePanelStore.getState();
            state.setChannelPanelPIP(channelId, arg0);
          }, items2),
        });
        const effect = noop.useEffect(() => closure_1(true), []);
        let tmp13 = null;
        if (tmp6[0]) {
          obj2 = { value: tmp4(AnalyticsLocationDefault.VOICE_PANEL).analyticsLocations, children: null };
          const obj3 = { children: null };
          const items3 = [closure_21(tmp2(17210), {}), ,];
          obj4 = { opacity, onPress: dismissPanel };
          items3[1] = closure_21(closure_98, obj4);
          const obj5 = { gesture: tmp11, children: null };
          const obj6 = {
            style: tmp.accessibilityView,
            nativeID: null,
            accessibilityViewIsModal: true,
            layout: null,
            onAccessibilityEscape: null,
            children: null,
          };
          let _HermesInternal = HermesInternal;
          obj6.nativeID = "voice-panel-ui-" + channelId;
          obj6.layout = layoutTransition;
          obj6.onAccessibilityEscape = tmp2(8987);
          const items4 = [closure_21(tmp2(17212), {}), , ,];
          const obj7 = { wrapperOffset, children: null };
          const obj8 = { zIndex: 2, children: null };
          const obj9 = { wrapperOffset, gestureState, layout: layoutTransition };
          obj8.children = closure_21(tmp2(17214), obj9);
          const items5 = [closure_21(channelId(6651).LayerScope, obj8)];
          const obj10 = { gesture, children: null };
          const obj11 = {
            style: StyleSheet.absoluteFill,
            layout: layoutTransition,
            collapsable: false,
            children: null,
          };
          const tmp2Result = tmp2(17211);
          const obj12 = { gesture: scrollNativeGesture, children: null };
          const obj13 = {
            layout: scrollViewLayoutTransition,
            ref: scrollerRef,
            onScroll: handleScroll,
            onMomentumScrollEnd: NOOP,
            animatedProps: scrollViewProps,
            style: tmp.scrollView,
            onContentSizeChange,
            contentContainerStyle: tmp.scrollViewContent,
            scrollEventThrottle: 8.333333333333334,
            children: null,
          };
          const obj14 = { viewableChunks };
          const items6 = [closure_21(tmp2(17270), obj14), closure_21(tmp2(17302), {})];
          obj13.children = items6;
          obj12.children = closure_22(closure_35, obj13);
          obj11.children = closure_21(channelId(6140).GestureDetector, obj12);
          obj10.children = closure_21(tmp2(6570), obj11);
          items5[1] = closure_21(channelId(6140).GestureDetector, obj10);
          obj7.children = items5;
          items4[1] = closure_22(closure_94, obj7);
          items4[2] = closure_21(tmp2(17306), {});
          const obj15 = { gestureState };
          items4[3] = closure_21(tmp2(17312), obj15);
          obj6.children = items4;
          obj5.children = closure_22(tmp2Result, obj6);
          items3[2] = closure_21(channelId(6140).GestureDetector, obj5);
          obj3.children = items3;
          obj2.children = closure_22(channelId(6651).LayerScope, obj3);
          tmp13 = closure_21(channelId(6657).AnalyticsLocationProvider, obj2);
          const tmp2Result2 = tmp2(6570);
        }
        return tmp13;
      },
);
export const REDUCED_MOTION_OPACITY_PHYSICS = obj5;
