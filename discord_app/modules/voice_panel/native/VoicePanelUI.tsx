// === Module 19198: VoicePanelUI ===

// Module 19198 (VoicePanelUI)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 5095 */;
import HapticUtils from "HapticUtils" /* 5260 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5303 */;
import spring from "spring" /* 5637 */;
import ExternalPipDefault from "ExternalPip" /* 5874 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7241 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7326 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 10089 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11222 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11227 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 11229 */;
import VoicePanelSheetMorph from "VoicePanelSheetMorph" /* 11249 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12271 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 19107 */;
import PanelSizeUtils from "PanelSizeUtils" /* 19184 */;
import useControlsLockDefault from "useControlsLock" /* 19199 */;
import utils_triggerIOSHapticDefault from "utils/triggerIOSHaptic" /* 19200 */;
import VoicePanelDockSheet from "VoicePanelDockSheet" /* 19201 */;
import useControlsHoverGestureDefault from "useControlsHoverGesture" /* 19206 */;
import VoicePanelHeaderDefault from "VoicePanelHeader" /* 19207 */;
import VoicePanelCardViewDefault from "VoicePanelCardView" /* 19239 */;
import VoicePanelPreJoinContentDefault from "VoicePanelPreJoinContent" /* 19269 */;
import VoicePanelVoiceChannelAppDefault from "VoicePanelVoiceChannelApp" /* 19273 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6843 */;
import AppFreezeStore from "AppFreezeStore" /* 8864 */;
import VoicePanelStore from "VoicePanelStore" /* 6875 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function NOOP() {

}
function log() {
  const items = [...HermesBuiltin.copyRestArgs()];
  log.log.apply(items);
}
function AnimatedWrapper(wrapperOffset) {
  wrapperOffset = wrapperOffset.wrapperOffset;
  const context = connected.useContext(height(11222));
  const isDockEnabled = context.isDockEnabled;
  const tmp4 = closure_33();
  height = undefined;
  connected = undefined;
  let animatedStyle;
  let dockSheetSurfaceFills;
  let animatedStyle1;
  let animatedStyle2;
  let obj = connected;
  const tmp5 = height(19204);
  const tmp5Result = height(19204)(wrapperOffset(575).Shadow.SHADOW_TOP_HIGH);
  height = wrapperOffset(11857).useGlobalStatusIndicatorState().height;
  let tmp8 = closure_33();
  dependencyMap = tmp8;
  const context1 = connected.useContext(height(11222));
  const wrapperDimensions = context1.wrapperDimensions;
  connected = context1.connected;
  const controlsSpecs = context1.controlsSpecs;
  const dockEntryProgress = context1.dockEntryProgress;
  const dockHeight = context1.dockHeight;
  const dockPressProgress = context1.dockPressProgress;
  const focused = context1.focused;
  const isDockConnected = context1.isDockConnected;
  const isDockEnabled2 = context1.isDockEnabled;
  const dockJoinMorphOrigin = context1.dockJoinMorphOrigin;
  const dockMinimizeProgress = context1.dockMinimizeProgress;
  const mode = context1.mode;
  const preJoinContentSize = context1.preJoinContentSize;
  const safeArea = context1.safeArea;
  const sheetExitProgress = context1.sheetExitProgress;
  const windowDimensions = context1.windowDimensions;
  const useReducedMotion = context1.useReducedMotion;
  obj2 = wrapperOffset(11857);
  const fn = function n() {
    return controlsSpecs.get().height;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 3576504626753;
  fn.__initData = __initData15;
  const derivedValue = wrapperOffset(5095).useDerivedValue(fn);
  obj4 = wrapperOffset(19197);
  const pIPState = obj4.usePIPState();
  let obj3 = wrapperOffset(5095);
  const fn2 = function c() {
    return { modeToSet: mode.get(), connected: connected.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, safeArea: safeArea.get(), focused: focused.get(), pipState: pIPState, controlsHeight: derivedValue.get(), preJoinContentSize: preJoinContentSize.get(), globalStatusIndicatorHeight: height };
  };
  fn2.__closure = { mode, connected, windowDimensions, safeArea, focused, pipState: pIPState, controlsHeight: derivedValue, preJoinContentSize, globalStatusIndicatorHeight: height };
  fn2.__workletHash = 6530348778352;
  fn2.__initData = __initData16;
  const fn3 = function s(safeAreaState, windowHeight) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp3)) {
      ({ modeToSet, connected, windowWidth, windowHeight, safeArea } = safeAreaState);
      ({ controlsHeight, preJoinContentSize, globalStatusIndicatorHeight } = safeAreaState);
      let tmp7 = null == windowHeight;
      if (!tmp7) {
        tmp7 = windowHeight === windowHeight.windowHeight && windowWidth === windowHeight.windowWidth && safeArea.top === windowHeight.safeArea.top && safeArea.bottom === windowHeight.safeArea.bottom && safeArea.left === windowHeight.safeArea.left && safeArea.right === windowHeight.safeArea.right;
        const tmp8 = windowHeight === windowHeight.windowHeight && windowWidth === windowHeight.windowWidth && safeArea.top === windowHeight.safeArea.top && safeArea.bottom === windowHeight.safeArea.bottom && safeArea.left === windowHeight.safeArea.left && safeArea.right === windowHeight.safeArea.right;
      }
      value = wrapperDimensions.get();
      ({ drawerX, drawerY } = value);
      const diff = windowHeight - globalStatusIndicatorHeight;
      if (modeToSet === VoicePanelModes.PANEL) {
        if (connected) {
          const obj3 = { drawerWidth: windowWidth, drawerHeight: diff, drawerX: 0, drawerY: 0, animated: tmp7, mode: modeToSet };
          updateSharedValueIfChangedDefault(wrapperDimensions, obj3);
          updateSharedValueIfChangedDefault(wrapperOffset, { gestureActive: false });
        } else {
          obj4 = { windowWidth, connected, safeAreaLeft: null, safeAreaRight: null };
          ({ left: obj7.safeAreaLeft, right: obj7.safeAreaRight } = safeArea);
          const maxPanelWidth = PanelSizeUtils.getMaxPanelWidth(obj4);
          const tmpResult = PanelSizeUtils;
          const panelX = PanelSizeUtils.getPanelX(windowWidth, maxPanelWidth);
          const _Math = Math;
          const tmpResult2 = PanelSizeUtils;
          const obj5 = { drawerWidth: maxPanelWidth, drawerHeight: diff, drawerX: panelX, drawerY: roundToNearestPixelDefault(Math.max(diff - preJoinContentSize - controlsHeight - safeArea.bottom, diff - 0.8 * diff)), animated: tmp7, mode: modeToSet };
          updateSharedValueIfChangedDefault(wrapperDimensions, obj5);
          const tmp27Result = roundToNearestPixelDefault(Math.max(diff - preJoinContentSize - controlsHeight - safeArea.bottom, diff - 0.8 * diff));
        }
      } else {
        if (modeToSet === VoicePanelModes.PIP) {
          if (isDockEnabled2) {
            const obj6 = { drawerWidth: windowWidth, drawerHeight: diff, drawerX: 0, drawerY: 0, animated: tmp7, mode: modeToSet };
            updateSharedValueIfChangedDefault(wrapperDimensions, obj6);
          }
        }
        if (modeToSet === VoicePanelModes.DISMISSED) {
          let tmp12 = isDockEnabled2;
          if (isDockEnabled2) {
            tmp12 = wrapperDimensions.get().mode === VoicePanelModes.PIP;
          }
          if (!connected) {
            if (!tmp12) {
              const obj8 = { drawerY: windowDimensions.get().height + 60, mode: modeToSet };
              updateSharedValueIfChangedDefault(wrapperDimensions, obj8);
              let tmp17 = importDefault;
            }
            tmp17(11227)(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
          }
          const obj9 = { mode: modeToSet };
          updateSharedValueIfChangedDefault(wrapperDimensions, obj9);
          tmp17 = importDefault;
        }
      }
    }
    obj = cheapWorkletShallowEqual;
    tmp3 = windowHeight;
  };
  let obj5 = wrapperOffset(5095);
  fn3.__closure = { cheapWorkletShallowEqual: wrapperOffset(10089).cheapWorkletShallowEqual, VoicePanelModes: preJoinContentSize, isDockEnabled: isDockEnabled2, wrapperDimensions, updateSharedValueIfChanged: height(11227), wrapperOffset, getMaxPanelWidth: wrapperOffset(19184).getMaxPanelWidth, getPanelX: wrapperOffset(19184).getPanelX, roundToNearestPixel: height(12271), windowDimensions };
  fn3.__workletHash = 2786627914150;
  fn3.__initData = __initData17;
  const animatedReaction = obj5.useAnimatedReaction(fn2, fn3);
  let obj6 = { cheapWorkletShallowEqual: wrapperOffset(10089).cheapWorkletShallowEqual, VoicePanelModes: preJoinContentSize, isDockEnabled: isDockEnabled2, wrapperDimensions, updateSharedValueIfChanged: height(11227), wrapperOffset, getMaxPanelWidth: wrapperOffset(19184).getMaxPanelWidth, getPanelX: wrapperOffset(19184).getPanelX, roundToNearestPixel: height(12271), windowDimensions };
  class R {
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
      value1 = wrapperOffset.get();
      ({ gestureActive: gestureActive2, y } = value1);
      obj2 = wrapperDimensions;
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
      class VoicePanelUITsx31 {
        constructor(arg0) {
          tmp = wrapperOffset;
          if (wrapperOffset) {
            tmp2 = closure_1_14;
            tmp3 = preJoinContentSize;
            tmp = closure_1_14.get() !== preJoinContentSize.DISMISSED;
          }
          if (tmp) {
            tmp4 = wrapperOffset;
            tmp5 = closure_2;
            obj = wrapperOffset(closure_2[15]);
            tmp6 = height;
            tmp7 = obj.runOnJS(height(closure_2[33]).updateSourceTrackingView)();
          }
          return;
        }
      }
      obj1 = { mode, VoicePanelModes, runOnJS: closure_0(closure_2[15]).runOnJS, updateSourceTrackingView: closure_1(closure_2[33]).updateSourceTrackingView };
      tmp11 = closure_0;
      tmp12 = closure_2;
      VoicePanelUITsx31.__closure = obj1;
      VoicePanelUITsx31.__workletHash = 2447720515661;
      VoicePanelUITsx31.__initData = closure_63;
      dockSheetTransform = null;
      tmp13 = isDockEnabled;
      if (isDockEnabled) {
        tmp11Result = tmp11(tmp12[34]);
        obj15 = { connected: null, progress: null, wrapperDimensions: null, dockHeight: null, dockJoinMorphOrigin: null, dockEntryProgress: null, sheetExitProgress: null, dockPressProgress: null };
        tmp15 = isDockConnected;
        obj15.connected = isDockConnected.get();
        tmp16 = dockMinimizeProgress;
        obj15.progress = dockMinimizeProgress.get();
        obj15.wrapperDimensions = obj2.get();
        tmp17 = dockHeight;
        obj15.dockHeight = dockHeight.get();
        tmp18 = dockJoinMorphOrigin;
        obj15.dockJoinMorphOrigin = dockJoinMorphOrigin.get();
        tmp19 = dockEntryProgress;
        obj15.dockEntryProgress = dockEntryProgress.get();
        tmp20 = sheetExitProgress;
        obj15.sheetExitProgress = sheetExitProgress.get();
        tmp21 = dockPressProgress;
        obj15.dockPressProgress = dockPressProgress.get();
        dockSheetTransform = tmp11Result.getDockSheetTransform(obj15);
      }
      if (null != dockSheetTransform) {
        obj16 = { transform: null };
        obj17 = { translateX: null };
        obj17.translateX = dockSheetTransform.translateX;
        items = [, , ];
        items[0] = obj17;
        obj18 = { translateY: null };
        obj18.translateY = dockSheetTransform.translateY;
        items[1] = obj18;
        obj19 = { scale: null };
        obj19.scale = dockSheetTransform.scale;
        items[2] = obj19;
        obj16.transform = items;
        obj22 = obj16;
      } else {
        tmp11Result1 = tmp11(tmp12[12]);
        tmp22 = obj.get().gestureActive ? closure_17 : closure_31;
        str = "animate-never";
        str2 = "animate-never";
        if (gestureActive) {
          str2 = "animate-always";
        }
        obj20 = { translateX: null };
        tmp23 = tmp11Result1;
        tmp24 = sum1;
        tmp25 = tmp22;
        tmp26 = str2;
        tmp27 = VoicePanelUITsx31;
        obj20.translateX = tmp11Result1.withSpring(sum1, tmp22, str2, VoicePanelUITsx31);
        items1 = [, ];
        items1[0] = obj20;
        tmp11Result2 = tmp11(tmp12[12]);
        tmp28 = obj.get().gestureActive ? closure_17 : closure_31;
        if (gestureActive) {
          str = "animate-always";
        }
        obj21 = { translateY: null };
        tmp29 = tmp11Result2;
        class VoicePanelUITsx31 {
          constructor(arg0) {
            tmp = wrapperOffset;
            if (wrapperOffset) {
              tmp2 = closure_1_14;
              tmp3 = preJoinContentSize;
              tmp = closure_1_14.get() !== preJoinContentSize.DISMISSED;
            }
            if (tmp) {
              tmp4 = wrapperOffset;
              tmp5 = closure_2;
              obj = wrapperOffset(closure_2[15]);
              tmp6 = height;
              tmp7 = obj.runOnJS(height(closure_2[33]).updateSourceTrackingView)();
            }
            return;
          }
        }
        tmp30 = tmp28;
        tmp31 = str;
        tmp32 = VoicePanelUITsx31;
        obj21.translateY = tmp11Result2.withSpring(sum, tmp28, str, VoicePanelUITsx31);
        items1[1] = obj21;
        if (tmp13) {
          items2 = [];
          items2[0] = { scale: 1 };
          items3 = items2;
        } else {
          items3 = [];
        }
        obj22 = { transform: null };
        num3 = 2;
        tmp33 = items1;
        tmp34 = items3;
        arraySpreadResult = HermesBuiltin.arraySpread(items3, 2);
        obj22.transform = items1;
      }
      return obj22;
    }
  }
  let obj7 = wrapperOffset(5095);
  R.__closure = { useReducedMotion, wrapperDimensions, wrapperOffset, connected, mode, VoicePanelModes: preJoinContentSize, runOnJS: wrapperOffset(5095).runOnJS, updateSourceTrackingView: height(5874).updateSourceTrackingView, isDockEnabled: isDockEnabled2, getDockSheetTransform: wrapperOffset(19201).getDockSheetTransform, isDockConnected, dockMinimizeProgress, dockHeight, dockJoinMorphOrigin, dockEntryProgress, sheetExitProgress, dockPressProgress, withSpring: wrapperOffset(5637).withSpring, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: sheetExitProgress, DRAWER_SIZE_PHYSICS: obj4 };
  R.__workletHash = 1655956175061;
  R.__initData = __initData18;
  animatedStyle = obj7.useAnimatedStyle(R);
  let obj8 = { useReducedMotion, wrapperDimensions, wrapperOffset, connected, mode, VoicePanelModes: preJoinContentSize, runOnJS: wrapperOffset(5095).runOnJS, updateSourceTrackingView: height(5874).updateSourceTrackingView, isDockEnabled: isDockEnabled2, getDockSheetTransform: wrapperOffset(19201).getDockSheetTransform, isDockConnected, dockMinimizeProgress, dockHeight, dockJoinMorphOrigin, dockEntryProgress, sheetExitProgress, dockPressProgress, withSpring: wrapperOffset(5637).withSpring, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: sheetExitProgress, DRAWER_SIZE_PHYSICS: obj4 };
  dockSheetSurfaceFills = wrapperOffset(19201).useDockSheetSurfaceFills();
  let obj9 = wrapperOffset(19201);
  class J {
    constructor() {
      if (isDockEnabled) {
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj2 = closure_0(closure_2[34]);
        obj1 = { connected: null, dockPressProgress: null, dockJoinMorphOrigin: null, mode: null, sheetMorphProgress: null, wrapperDimensions: null };
        tmp6 = isDockConnected;
        obj1.connected = isDockConnected.get();
        tmp7 = dockPressProgress;
        obj1.dockPressProgress = dockPressProgress.get();
        tmp8 = dockJoinMorphOrigin;
        obj1.dockJoinMorphOrigin = dockJoinMorphOrigin.get();
        tmp9 = mode;
        obj1.mode = mode.get();
        tmp10 = dockMinimizeProgress;
        num = 1;
        obj1.sheetMorphProgress = 1 - dockMinimizeProgress.get();
        tmp11 = wrapperDimensions;
        obj1.wrapperDimensions = wrapperDimensions.get();
        tmp12 = closure_23;
        dockSheetSurfaceStyle = obj2.getDockSheetSurfaceStyle(obj1, closure_23);
      } else {
        dockSheetSurfaceStyle = { width: null, height: null, pointerEvents: null };
        tmp = wrapperDimensions;
        dockSheetSurfaceStyle.width = wrapperDimensions.get().drawerWidth;
        dockSheetSurfaceStyle.height = wrapperDimensions.get().drawerHeight;
        tmp2 = mode;
        tmp3 = VoicePanelModes;
        str = "none";
        if (mode.get() === VoicePanelModes.PANEL) {
          str = "auto";
        }
        dockSheetSurfaceStyle.pointerEvents = str;
      }
      return dockSheetSurfaceStyle;
    }
  }
  let obj10 = wrapperOffset(5095);
  J.__closure = { isDockEnabled: isDockEnabled2, getDockSheetSurfaceStyle: wrapperOffset(19201).getDockSheetSurfaceStyle, isDockConnected, dockPressProgress, dockJoinMorphOrigin, mode, dockMinimizeProgress, wrapperDimensions, dockSurfaceFills: dockSheetSurfaceFills, VoicePanelModes: preJoinContentSize };
  J.__workletHash = 14748671783030;
  J.__initData = __initData20;
  animatedStyle1 = obj10.useAnimatedStyle(J);
  let obj11 = { isDockEnabled: isDockEnabled2, getDockSheetSurfaceStyle: wrapperOffset(19201).getDockSheetSurfaceStyle, isDockConnected, dockPressProgress, dockJoinMorphOrigin, mode, dockMinimizeProgress, wrapperDimensions, dockSurfaceFills: dockSheetSurfaceFills, VoicePanelModes: preJoinContentSize };
  class U {
    constructor() {
      if (isDockEnabled) {
        obj1 = {};
        tmp10 = closure_0;
        tmp11 = closure_2;
        obj5 = closure_0(closure_2[34]);
        obj8 = { connected: null, dockJoinMorphOrigin: null, sheetMorphProgress: null, wrapperDimensions: null };
        tmp12 = isDockConnected;
        obj8.connected = isDockConnected.get();
        tmp13 = dockJoinMorphOrigin;
        obj8.dockJoinMorphOrigin = dockJoinMorphOrigin.get();
        tmp14 = dockMinimizeProgress;
        num2 = 1;
        obj8.sheetMorphProgress = 1 - dockMinimizeProgress.get();
        tmp15 = wrapperDimensions;
        obj8.wrapperDimensions = wrapperDimensions.get();
        tmp16 = obj1;
        merged = Object.assign(obj5.getDockSheetShape(obj8));
        tmp18 = closure_0;
        tmp19 = closure_2;
        obj7 = closure_0(closure_2[34]);
        tmp20 = dockPressProgress;
        value = dockPressProgress.get();
        obj1.opacity = obj7.getDockSheetShadowOpacity(value, 1 - dockMinimizeProgress.get());
        return obj1;
      } else {
        tmp = computeBorderRadii;
        tmp2 = mode;
        obj = connected;
        value1 = mode.get();
        if (typeof computeBorderRadii === "function") {
          tmp5 = VoicePanelModes;
          if (value1 === VoicePanelModes.PIP) {
            num = DEFAULT_BORDER_RADIUS_PIP;
          } else {
            num = 0;
            if (!tmp4) {
              num = DEFAULT_BORDER_RADIUS;
            }
          }
          obj9 = { borderRadius: null, backgroundColor: null };
          tmp6 = closure_0;
          tmp7 = closure_2;
          obj3 = closure_0(closure_2[12]);
          tmp8 = BORDER_RADIUS_PHYSICS;
          obj9.borderRadius = obj3.withSpring(num, BORDER_RADIUS_PHYSICS);
          str = "transparent";
          if (!obj.get()) {
            tmp9 = closure_2;
            str = closure_2.maskDefaultBackground.backgroundColor;
          }
          obj9.backgroundColor = str;
          return obj9;
        } else {
          str2 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  }
  const obj12 = wrapperOffset(5095);
  U.__closure = { isDockEnabled: isDockEnabled2, getDockSheetShape: wrapperOffset(19201).getDockSheetShape, isDockConnected, dockJoinMorphOrigin, dockMinimizeProgress, wrapperDimensions, getDockSheetShadowOpacity: wrapperOffset(19201).getDockSheetShadowOpacity, dockPressProgress, computeBorderRadii, mode, connected, withSpring: wrapperOffset(5637).withSpring, BORDER_RADIUS_PHYSICS: isDockConnected, styles: tmp8 };
  U.__workletHash = 13910949523845;
  U.__initData = __initData21;
  animatedStyle2 = obj12.useAnimatedStyle(U);
  if (!wrapperOffset(6541).isStable) {
    class W {
      constructor() {
        return windowDimensions.get();
      }
    }
    const obj14 = { windowDimensions };
    W.__closure = obj14;
    W.__workletHash = 7828684875250;
    W.__initData = __initData22;
    class F {
      constructor(arg0) {
        obj = wrapperOffset(closure_2[15]);
        runOnJSResult = obj.runOnJS(closure_1_27);
        tmpResult = runOnJSResult("Window dimensions changed:", JSON.stringify(wrapperOffset));
        return;
      }
    }
    const obj15 = { runOnJS: tmp6(5095).runOnJS, log };
    F.__closure = obj15;
    F.__workletHash = 16968320948483;
    F.__initData = __initData23;
    const animatedReaction1 = tmp6(5095).useAnimatedReaction(W, F);
    const tmp6Result = tmp6(5095);
    class X {
      constructor() {
        return wrapperDimensions.get();
      }
    }
    const obj16 = { wrapperDimensions };
    X.__closure = obj16;
    X.__workletHash = 14691592383856;
    X.__initData = __initData24;
    class N {
      constructor(arg0) {
        obj = wrapperOffset(closure_2[15]);
        runOnJSResult = obj.runOnJS(closure_1_27);
        tmpResult = runOnJSResult("Wrapper dimensions changed:", JSON.stringify(wrapperOffset));
        return;
      }
    }
    const obj17 = { runOnJS: tmp6(5095).runOnJS, log };
    N.__closure = obj17;
    N.__workletHash = 13591095165246;
    N.__initData = __initData25;
    const animatedReaction2 = tmp6(5095).useAnimatedReaction(X, N);
    const tmp6Result2 = tmp6(5095);
  }
  let items = [tmp8.wrapper, animatedStyle1, animatedStyle2, animatedStyle];
  const memo = obj.useMemo(() => ({ wrapperRootStyles: closure_2.wrapper, wrapperTransformStyles: animatedStyle, wrapperSurfaceStyles: animatedStyle1, wrapperSurfaceLayerStyles: animatedStyle2 }), items);
  const wrapperSurfaceLayerStyles = memo.wrapperSurfaceLayerStyles;
  ({ wrapperRootStyles, wrapperTransformStyles, wrapperSurfaceStyles } = memo);
  const obj18 = { style: wrapperRootStyles, pointerEvents: "box-none", children: null };
  const obj13 = { isDockEnabled: isDockEnabled2, getDockSheetShape: wrapperOffset(19201).getDockSheetShape, isDockConnected, dockJoinMorphOrigin, dockMinimizeProgress, wrapperDimensions, getDockSheetShadowOpacity: wrapperOffset(19201).getDockSheetShadowOpacity, dockPressProgress, computeBorderRadii, mode, connected, withSpring: wrapperOffset(5637).withSpring, BORDER_RADIUS_PHYSICS: isDockConnected, styles: tmp8 };
  const obj19 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: null };
  let tmp25Result = null;
  let tmpResult = height(7241);
  if (isDockEnabled) {
    const obj20 = { style: null, pointerEvents: "none" };
    class W {
      constructor() {
        return windowDimensions.get();
      }
    }
    tmp30[0] = tmp4.dockSurfaceShadow;
    const obj21 = { boxShadow: tmp5Result };
    tmp30[1] = obj21;
    tmp30[2] = wrapperSurfaceLayerStyles;
    obj20.style = tmp30;
    tmp25Result = tmp25(tmp(7241), obj20);
  }
  let items1 = [tmp25Result, ];
  let dockSurfaceClip = null;
  const tmpResult3 = height(7241);
  if (isDockEnabled) {
    dockSurfaceClip = tmp4.dockSurfaceClip;
  }
  const obj22 = { style: null, onLayout: null, layout: null, children: null };
  let items2 = [dockSurfaceClip, wrapperSurfaceStyles];
  obj22.style = items2;
  let prop;
  if (isDockEnabled) {
    prop = context.handleDockSheetLayout;
  }
  obj22.onLayout = prop;
  obj22.layout = layoutTransition;
  let tmp25Result2 = null;
  if (!isDockEnabled) {
    const obj23 = { style: null, pointerEvents: "none" };
    class W {
      constructor() {
        return windowDimensions.get();
      }
    }
    let items3 = [controlsSpecs.absoluteFill, wrapperSurfaceLayerStyles];
    obj23.style = items3;
    tmp25Result2 = tmp25(tmp(7241), obj23);
  }
  const items4 = [tmp25Result2, wrapperOffset.children];
  obj22.children = items4;
  items1[1] = animatedStyle(height(7241), obj22);
  obj19.children = items1;
  obj18.children = animatedStyle(tmpResult3, obj19);
  return pIPState(tmpResult, obj18);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ Pressable: metroRequire, ScrollView } = get_ActivityIndicator);
const VoicePanelConstants = fn(11223);
({ BORDER_RADIUS_PHYSICS: c10, DEFAULT_BORDER_RADIUS } = VoicePanelConstants);
const DEFAULT_BORDER_RADIUS_PIP = VoicePanelConstants.DEFAULT_BORDER_RADIUS_PIP;
({ DRAWER_SPRING_PHYSICS, IS_IOS: map1, MODE_CHANGE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR } = VoicePanelConstants);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const LAYOUT_PHYSICS = VoicePanelConstants.LAYOUT_PHYSICS;
let closure_17 = VoicePanelConstants.DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE;
const VoicePanelControlsModes = fn(11221).VoicePanelControlsModes;
const isActivityParticipant = fn(5681).isActivityParticipant;
const POP_RESISTANCE = fn(11224).POP_RESISTANCE;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
let c25 = 0.2;
log = new LoggerDefault("VoicePanelUI");
function layoutTransition(id) {
  const obj = { animations: null, initialValues: null };
  const size = { originX: spring.withSpring(id.targetOriginX, LAYOUT_PHYSICS, "respect-motion-settings"), originY: null, width: null, height: null };
  size.originY = spring.withSpring(id.targetOriginY, LAYOUT_PHYSICS, "respect-motion-settings");
  size.width = spring.withSpring(id.targetWidth, LAYOUT_PHYSICS, "respect-motion-settings");
  size.height = spring.withSpring(id.targetHeight, LAYOUT_PHYSICS, "respect-motion-settings");
  obj.animations = size;
  obj.initialValues = { originX: id.currentOriginX, originY: id.currentOriginY, width: id.currentWidth, height: id.currentHeight };
  return obj;
}
let tmp5 = new LoggerDefault("VoicePanelUI");
layoutTransition.__closure = { withSpring: fn(5637).withSpring, LAYOUT_PHYSICS };
layoutTransition.__workletHash = 16293847539255;
layoutTransition.__initData = { code: "function layoutTransition_VoicePanelUITsx1(values){const{withSpring,LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'respect-motion-settings'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'respect-motion-settings'),width:withSpring(values.targetWidth,LAYOUT_PHYSICS,'respect-motion-settings'),height:withSpring(values.targetHeight,LAYOUT_PHYSICS,'respect-motion-settings')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
let obj2 = {};
let merged = Object.assign(LAYOUT_PHYSICS);
obj2.damping = 0;
function scrollViewLayoutTransition(originX) {
  const obj = { animations: null, initialValues: null };
  const size = { originX: spring.withSpring(originX.targetOriginX, LAYOUT_PHYSICS, "respect-motion-settings"), originY: null, width: null, height: null };
  size.originY = spring.withSpring(originX.targetOriginY, LAYOUT_PHYSICS, "respect-motion-settings");
  size.width = spring.withSpring(originX.targetWidth, obj2, "respect-motion-settings");
  size.height = spring.withSpring(originX.targetHeight, obj2, "respect-motion-settings");
  obj.animations = size;
  obj.initialValues = { originX: originX.currentOriginX, originY: originX.currentOriginY, width: originX.currentWidth, height: originX.currentHeight };
  return obj;
}
let obj = { withSpring: fn(5637).withSpring, LAYOUT_PHYSICS };
scrollViewLayoutTransition.__closure = { withSpring: fn(5637).withSpring, LAYOUT_PHYSICS, EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS: obj2 };
scrollViewLayoutTransition.__workletHash = 10653209622652;
scrollViewLayoutTransition.__initData = { code: "function scrollViewLayoutTransition_VoicePanelUITsx2(values){const{withSpring,LAYOUT_PHYSICS,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'respect-motion-settings'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'respect-motion-settings'),width:withSpring(values.targetWidth,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'respect-motion-settings'),height:withSpring(values.targetHeight,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'respect-motion-settings')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}" };
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
computeViewableChunksFromScrollPosition.__initData = { code: "function computeViewableChunksFromScrollPosition_VoicePanelUITsx3(scrollPosition,windowHeight,contentHeight,extraChunks=1){const{VOICE_PANEL_CHUNK_DIVISOR}=this.__closure;const chunkSize=Math.ceil(windowHeight/VOICE_PANEL_CHUNK_DIVISOR);let start=Math.max(Math.floor(scrollPosition/chunkSize)-extraChunks,0);const end=Math.min(start+VOICE_PANEL_CHUNK_DIVISOR+extraChunks*2,Math.ceil(contentHeight/chunkSize));start=Math.max(end-VOICE_PANEL_CHUNK_DIVISOR-extraChunks*2,0);return{start:start,end:end};}" };
const createStyles = fn(5014);
let obj6 = { accessibilityView: null, wrapper: null, maskDefaultBackground: null, dockSurfaceClip: null, dockSurfaceShadow: null, scrollView: null, scrollViewContent: null, shade: null, shadePressable: null };
let obj8 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj8.overflow = "hidden";
obj6.accessibilityView = obj8;
let obj9 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj9.alignItems = "flex-start";
obj9.zIndex = 1;
obj6.wrapper = obj9;
let obj3 = { withSpring: fn(5637).withSpring, LAYOUT_PHYSICS, EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS: obj2 };
obj6.maskDefaultBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj6.dockSurfaceClip = { overflow: "hidden" };
obj6.dockSurfaceShadow = { position: "absolute", top: 0, left: 0 };
let obj11 = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj11.borderTopLeftRadius = DEFAULT_BORDER_RADIUS;
obj11.borderTopRightRadius = DEFAULT_BORDER_RADIUS;
obj6.scrollView = obj11;
obj6.scrollViewContent = { flexGrow: 1, flexShrink: 0 };
let obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj6.shade = { backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
obj6.shadePressable = { flexGrow: 1 };
let closure_33 = createStyles.createStyles(obj6);
let closure_34 = ReanimatedRexport.createAnimatedComponent(ScrollView);
const MetaQuestUtils = fn(1622);
let closure_35 = MetaQuestUtils.isMetaQuest();
const __initData = { code: "function VoicePanelUITsx4(){const{gestureState,connected,mode}=this.__closure;return{gestureActive:gestureState.get().active,connected:connected.get(),mode:mode.get()};}" };
const __initData2 = { code: "function VoicePanelUITsx5(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,runOnJS,setPanelFullscreen,setPanelOpen,setPanelPIP}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{gestureActive:gestureActive,connected:connected,mode:mode}=props;if(!connected||gestureActive||mode!==VoicePanelModes.PANEL){runOnJS(setPanelFullscreen)(false);}else{runOnJS(setPanelFullscreen)(true);}if(mode===VoicePanelModes.PANEL){runOnJS(setPanelOpen)(true);}else{runOnJS(setPanelOpen)(false);}if(mode===VoicePanelModes.PIP){runOnJS(setPanelPIP)(true);}else{runOnJS(setPanelPIP)(false);}}" };
const __initData3 = { code: "function VoicePanelUITsx6(){const{mode}=this.__closure;return mode.get();}" };
const __initData4 = { code: "function VoicePanelUITsx7(mode,previous){const{VoicePanelModes,updateSharedValueIfChanged,gestureState}=this.__closure;if(mode===VoicePanelModes.DISMISSED&&previous!==VoicePanelModes.DISMISSED){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}}" };
const __initData5 = { code: "function VoicePanelUITsx8(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
const __initData6 = { code: "function VoicePanelUITsx9(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
let closure_42 = { code: "function VoicePanelUITsx10(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(!connected.get())return;if(mode.get()===VoicePanelModes.PIP){}else if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}" };
let closure_43 = { code: "function VoicePanelUITsx11(){const{isDockEnabled,updateSharedValueIfChanged,gestureState,wrapperOffset,lockScrolling,runOnJS,controlsLock,mode,VoicePanelModes}=this.__closure;if(isDockEnabled){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});lockScrolling.set(false);runOnJS(controlsLock.unlock)();return;}const pendingModeChange=wrapperOffset.get().y!==0&&mode.get()===VoicePanelModes.PANEL;if(!pendingModeChange){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}runOnJS(controlsLock.unlock)();}" };
let closure_44 = { code: "function VoicePanelUITsx12(event){const{gestureState,isDockEnabled,mode,VoicePanelModes,lockScrolling,wrapperDimensions,connected,wrapperOffset,MIN_DISMISS_MOVE_PERCENTAGE,SHEET_COMMIT_FLING_VELOCITY,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,committedMode,setMode,updateSharedValueIfChanged,dismissPanel,calculatePIPPositionFromVelocity,windowDimensions,safeArea}=this.__closure;if(gestureState.get().cancel)return;const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(isDockEnabled){if(mode.get()!==VoicePanelModes.PANEL){lockScrolling.set(false);return;}const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;if(velocityY>0){if(connected.get()){if(wrapperOffset.get().y>panelHeight*MIN_DISMISS_MOVE_PERCENTAGE||velocityY>SHEET_COMMIT_FLING_VELOCITY){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);committedMode.set(VoicePanelModes.PIP);runOnJS(setMode)(VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});return;}}else if(wrapperOffset.get().y>panelHeight*MIN_DISMISS_MOVE_PERCENTAGE){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(dismissPanel)();return;}}updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);return;}if(mode.get()===VoicePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else if(mode.get()===VoicePanelModes.PANEL){if(velocityY>0){if(connected.get()){if(!gestureState.get().requiresPop){runOnJS(setMode)(VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}else{const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;const dismissThreshold=panelHeight*MIN_DISMISS_MOVE_PERCENTAGE;if(wrapperOffset.get().y>dismissThreshold){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(dismissPanel)();return;}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}" };
let closure_45 = { code: "function VoicePanelUITsx13(_e){const{lockScrolling,gestureState,updateSharedValueIfChanged,isDockEnabled,mode,VoicePanelModes,wrapperOffset}=this.__closure;lockScrolling.set(false);const wasActive=gestureState.get().active;updateSharedValueIfChanged(gestureState,{cancel:false,active:false});if(!isDockEnabled||wasActive||mode.get()===VoicePanelModes.PANEL){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}console.log('onTouchesCancelled');}" };
let closure_46 = { code: "function VoicePanelUITsx14(event){const{gestureState,isDockEnabled,mode,VoicePanelModes,updateSharedValueIfChanged,wrapperOffset,connected,lockScrolling,scrollPosition,PIP_POP_HEIGHT,POP_RESISTANCE,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(gestureState.get().cancel)return;if(!isDockEnabled&&mode.get()===VoicePanelModes.PIP){updateSharedValueIfChanged(wrapperOffset,{x:(gestureState.get().absoluteXStart-event.absoluteX)*-1,y:(gestureState.get().absoluteYStart-event.absoluteY)*-1});return;}const minYOffset=0;let newYOffset=(gestureState.get().absoluteYStart-event.absoluteY)*-1;if(!isDockEnabled&&connected.get()&&!gestureState.get().requiresPop&&newYOffset<=minYOffset){gestureState.set({...gestureState.get(),requiresPop:true});}if(lockScrolling.get()&&newYOffset<minYOffset){lockScrolling.set(false);}else if(!lockScrolling.get()&&scrollPosition.get()<=0){lockScrolling.set(true);}if(isDockEnabled){if(connected.get()){updateSharedValueIfChanged(gestureState,{requiresPop:newYOffset<=PIP_POP_HEIGHT});}}else if(gestureState.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{gestureState.set({...gestureState.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}" };
let closure_47 = { code: "function VoicePanelUITsx15(event,manager){const{State,gestureState,mode,VoicePanelModes,scrollPosition,isQuest,MIN_GESTURE_MOVE,focused,isDockEnabled,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset,lockScrolling}=this.__closure;if(event.state!==State.BEGAN||gestureState.get().active||gestureState.get().cancel)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=gestureState.get().absoluteYStart-absoluteY;const xDiff=gestureState.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;let startGesture=false;if(mode.get()===VoicePanelModes.PANEL){var _focused$get;const scrollPos=Math.floor(scrollPosition.get());if(yDiff<0&&scrollPos<=0){if(isQuest){startGesture=absoluteMovement>MIN_GESTURE_MOVE;}else{startGesture=true;}}else if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!=null&&isNotPullDownGesture){manager.fail();}}else if(!isDockEnabled&&mode.get()===VoicePanelModes.PIP&&absoluteMovement>MIN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true});gestureState.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY+scrollPosition.get(),cancel:false,active:true,requiresPop:gestureState.get().requiresPop});lockScrolling.set(true);manager.activate();}else{updateSharedValueIfChanged(gestureState,{absoluteYStart:absoluteY,absoluteXStart:absoluteX});}}" };
let closure_48 = { code: "function VoicePanelUITsx16(event){const{gestureState,isDockEnabled,mode,VoicePanelModes,updateSharedValueIfChanged,wrapperOffset,connected,controlsSpecs,VoicePanelControlsModes,runOnJS,controlsLock}=this.__closure;if(gestureState.get().cancel)return;if(!isDockEnabled||mode.get()===VoicePanelModes.PANEL){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});}gestureState.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:false,requiresPop:connected.get()&&mode.get()===VoicePanelModes.PANEL});if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){runOnJS(controlsLock.lock)();}}" };
let closure_49 = { code: "function VoicePanelUITsx17(event,manager){const{IS_IOS,windowDimensions,safeArea,gestureState,isFocusedVideoZoomed,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes}=this.__closure;const touch=event.allTouches[0];if(IS_IOS&&touch!=null&&touch.absoluteY>windowDimensions.get().height-safeArea.get().bottom){gestureState.set({...gestureState.get(),cancel:true});manager.activate();return;}if(isFocusedVideoZoomed.get()||mode.get()===VoicePanelModes.PANEL&&controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){gestureState.set({...gestureState.get(),cancel:true});manager.fail();}}" };
const __initData7 = { code: "function onBeginDrag_VoicePanelUITsx18(event){const{scrollPosition,dragScrolling}=this.__closure;scrollPosition.set(event.contentOffset.y);dragScrolling.set(true);}" };
const __initData8 = { code: "function onEndDrag_VoicePanelUITsx19(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
const __initData9 = { code: "function onMomentumEnd_VoicePanelUITsx20(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}" };
const __initData10 = { code: "function onScroll_VoicePanelUITsx21(event){const{lockScrolling,isSnappingBack,scrollPosition,scrollTo,scrollerRef,computeViewableChunksFromScrollPosition,windowDimensions,scrollableRegionSize,updateSharedValueIfChanged,viewableChunks}=this.__closure;if(lockScrolling.get()){if(isSnappingBack.get()){return;}if(scrollPosition.get()<0){scrollPosition.set(0);}const targetScrollPosition=scrollPosition.get();if(Math.abs(event.contentOffset.y-targetScrollPosition)<0.1){return;}isSnappingBack.set(true);scrollTo(scrollerRef,0,targetScrollPosition,false);isSnappingBack.set(false);}else{let newViewableChunks;if(scrollPosition.get()!==event.contentOffset.y){newViewableChunks=computeViewableChunksFromScrollPosition(scrollPosition.get(),windowDimensions.get().height,scrollableRegionSize.get());}scrollPosition.set(event.contentOffset.y);newViewableChunks!=null&&updateSharedValueIfChanged(viewableChunks,newViewableChunks);}}" };
const __initData11 = { code: "function VoicePanelUITsx22(){const{mode}=this.__closure;return mode.get();}" };
const __initData12 = { code: "function VoicePanelUITsx23(mode,previous){const{VoicePanelModes,lockScrolling}=this.__closure;if(previous==null||mode===previous)return;if(mode===VoicePanelModes.PANEL&&previous===VoicePanelModes.PIP){lockScrolling.set(false);}else if(mode===VoicePanelModes.PIP){lockScrolling.set(true);}}" };
const __initData13 = { code: "function VoicePanelUITsx24(){const{mode,VoicePanelModes,focused,lockScrolling,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter}=this.__closure;const isPIPMode=mode.get()===VoicePanelModes.PIP;const disableScroll=isPIPMode||focused.get()!=null;return{pointerEvents:isPIPMode?'none':'auto',scrollEnabled:!disableScroll,showsVerticalScrollIndicator:lockScrolling.get()?false:!disableScroll,scrollIndicatorInsets:{top:calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height-safeArea.get().top,bottom:safeArea.get().bottom}};}" };
const __initData14 = { code: "function VoicePanelUITsx25(){const{isDockConnected,sheetExitProgress,dockJoinMorphOrigin,windowDimensions,dockMinimizeProgress,mode,VoicePanelModes,connected,gestureState,wrapperDimensions,wrapperOffset}=this.__closure;if(isDockConnected.get()){const exitShade=1-sheetExitProgress.get();const join=dockJoinMorphOrigin.get();if(join!=null){const screenSize=windowDimensions.get().height;const startShade=Math.min(Math.max((screenSize-join.y)/screenSize,0),1);return startShade*(1-dockMinimizeProgress.get())*exitShade;}return(1-dockMinimizeProgress.get())*exitShade;}switch(mode.get()){case VoicePanelModes.PIP:case VoicePanelModes.DISMISSED:return 0;default:{if(connected.get()&&gestureState.get().active&&gestureState.get().requiresPop){return 1;}const drawerTop=wrapperDimensions.get().drawerY+wrapperOffset.get().y;const screenSize=windowDimensions.get().height;const percentage=(screenSize-drawerTop)/screenSize;return Math.min(Math.max(percentage,0),1);}}}" };
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
const __initData17 = { code: "function VoicePanelUITsx29(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,isDockEnabled,wrapperDimensions,updateSharedValueIfChanged,wrapperOffset,getMaxPanelWidth,getPanelX,roundToNearestPixel,windowDimensions}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{modeToSet:modeToSet,connected:connected,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,pipState:pipState,controlsHeight:controlsHeight,preJoinContentSize:preJoinContentSize,globalStatusIndicatorHeight:globalStatusIndicatorHeight}=props;if(modeToSet===VoicePanelModes.PIP&&!isDockEnabled&&pipState.id==null){return;}const animated=previous!=null?windowHeight===previous.windowHeight&&windowWidth===previous.windowWidth&&safeArea.top===previous.safeArea.top&&safeArea.bottom===previous.safeArea.bottom&&safeArea.left===previous.safeArea.left&&safeArea.right===previous.safeArea.right:true;let{drawerX:drawerX,drawerY:drawerY}=wrapperDimensions.get();const availableHeight=windowHeight-globalStatusIndicatorHeight;if(modeToSet===VoicePanelModes.PANEL){if(connected){drawerX=0;drawerY=0;updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else{const drawerWidth=getMaxPanelWidth({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeArea.left,safeAreaRight:safeArea.right});drawerX=getPanelX(windowWidth,drawerWidth);drawerY=roundToNearestPixel(Math.max(availableHeight-preJoinContentSize-controlsHeight-safeArea.bottom,availableHeight-0.8*availableHeight));updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:drawerWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});}}else if(modeToSet===VoicePanelModes.PIP&&isDockEnabled){updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:availableHeight,drawerX:0,drawerY:0,animated:animated,mode:modeToSet});}else if(modeToSet===VoicePanelModes.DISMISSED){const isLeavingDock=isDockEnabled&&wrapperDimensions.get().mode===VoicePanelModes.PIP;if(connected||isLeavingDock){updateSharedValueIfChanged(wrapperDimensions,{mode:modeToSet});}else{updateSharedValueIfChanged(wrapperDimensions,{drawerY:windowDimensions.get().height+60,mode:modeToSet});}updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}}" };
const __initData18 = { code: "function VoicePanelUITsx30(){const{useReducedMotion,wrapperDimensions,wrapperOffset,connected,mode,VoicePanelModes,runOnJS,updateSourceTrackingView,isDockEnabled,getDockSheetTransform,isDockConnected,dockMinimizeProgress,dockHeight,dockJoinMorphOrigin,dockEntryProgress,sheetExitProgress,dockPressProgress,withSpring,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,DRAWER_SIZE_PHYSICS}=this.__closure;const animateXY=!useReducedMotion.get()&&wrapperDimensions.get().animated||wrapperOffset.get().gestureActive;const{gestureActive:gestureActive,y:offsetY,x:offsetX}=wrapperOffset.get();let{drawerY:y,drawerX:x}=wrapperDimensions.get();const applyGestureOffset=!connected.get()&&(gestureActive||offsetY!==0);if(applyGestureOffset){y+=Math.max(offsetY,0);x+=offsetX;}const updateSourceTrackingViewHelper=function(finished){if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}};const dockTransform=isDockEnabled?getDockSheetTransform({connected:isDockConnected.get(),progress:dockMinimizeProgress.get(),wrapperDimensions:wrapperDimensions.get(),dockHeight:dockHeight.get(),dockJoinMorphOrigin:dockJoinMorphOrigin.get(),dockEntryProgress:dockEntryProgress.get(),sheetExitProgress:sheetExitProgress.get(),dockPressProgress:dockPressProgress.get()}):null;if(dockTransform!=null){return{transform:[{translateX:dockTransform.translateX},{translateY:dockTransform.translateY},{scale:dockTransform.scale}]};}return{transform:[{translateX:withSpring(x,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},{translateY:withSpring(y,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},...(isDockEnabled?[{scale:1}]:[])]};}" };
const __initData19 = { code: "function VoicePanelUITsx31(finished){const{mode,VoicePanelModes,runOnJS,updateSourceTrackingView}=this.__closure;if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}}" };
const __initData20 = { code: "function VoicePanelUITsx32(){const{isDockEnabled,getDockSheetSurfaceStyle,isDockConnected,dockPressProgress,dockJoinMorphOrigin,mode,dockMinimizeProgress,wrapperDimensions,dockSurfaceFills,VoicePanelModes}=this.__closure;if(isDockEnabled){return getDockSheetSurfaceStyle({connected:isDockConnected.get(),dockPressProgress:dockPressProgress.get(),dockJoinMorphOrigin:dockJoinMorphOrigin.get(),mode:mode.get(),sheetMorphProgress:1-dockMinimizeProgress.get(),wrapperDimensions:wrapperDimensions.get()},dockSurfaceFills);}return{width:wrapperDimensions.get().drawerWidth,height:wrapperDimensions.get().drawerHeight,pointerEvents:mode.get()===VoicePanelModes.PANEL?'auto':'none'};}" };
const __initData21 = { code: "function VoicePanelUITsx33(){const{isDockEnabled,getDockSheetShape,isDockConnected,dockJoinMorphOrigin,dockMinimizeProgress,wrapperDimensions,getDockSheetShadowOpacity,dockPressProgress,computeBorderRadii,mode,connected,withSpring,BORDER_RADIUS_PHYSICS,styles}=this.__closure;if(isDockEnabled){return{...getDockSheetShape({connected:isDockConnected.get(),dockJoinMorphOrigin:dockJoinMorphOrigin.get(),sheetMorphProgress:1-dockMinimizeProgress.get(),wrapperDimensions:wrapperDimensions.get()}),opacity:getDockSheetShadowOpacity(dockPressProgress.get(),1-dockMinimizeProgress.get())};}const borderRadius=computeBorderRadii({mode:mode.get(),connected:connected.get()});return{borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS),backgroundColor:connected.get()?'transparent':styles.maskDefaultBackground.backgroundColor};}" };
const __initData22 = { code: "function VoicePanelUITsx34(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
const __initData23 = { code: "function VoicePanelUITsx35(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Window dimensions changed:',JSON.stringify(value));}" };
const __initData24 = { code: "function VoicePanelUITsx36(){const{wrapperDimensions}=this.__closure;return wrapperDimensions.get();}" };
const __initData25 = { code: "function VoicePanelUITsx37(value){const{runOnJS,log}=this.__closure;runOnJS(log)('Wrapper dimensions changed:',JSON.stringify(value));}" };
const DrawerShadeOpacityPhysics = { mass: 0.6, damping: 30, stiffness: 400, overshootClamping: true };
const __initData26 = { code: "function VoicePanelUITsx38(){const{isDockConnected,opacity,withSpring,DrawerShadeOpacityPhysics}=this.__closure;const followsMorph=isDockConnected.get();return{opacity:followsMorph?opacity.get():withSpring(opacity.get(),DrawerShadeOpacityPhysics),pointerEvents:opacity.get()===0?'none':'auto'};}" };
let closure_73 = noop.memo(function DrawerShade(onPress) {
  const opacity = onPress.opacity;
  let isDockConnected;
  const tmp = closure_33();
  isDockConnected = noop.useContext(isDockConnected(11222)).isDockConnected;
  const fn = function l() {
    if (isDockConnected.get()) {
      let withSpringResult = opacity.get();
      obj2 = opacity;
    } else {
      obj2 = opacity;
      withSpringResult = spring.withSpring(opacity.get(), closure_71);
    }
    const obj3 = { opacity: withSpringResult, pointerEvents: null };
    let str = "auto";
    if (0 === obj2.get()) {
      str = "none";
    }
    obj3.pointerEvents = str;
    return obj3;
  };
  let obj = opacity(5095);
  fn.__closure = { isDockConnected, opacity, withSpring: opacity(5637).withSpring, DrawerShadeOpacityPhysics };
  fn.__workletHash = 2070286054042;
  fn.__initData = __initData26;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = { style: null, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_21(closure_6, { style: tmp.shadePressable, onPress: onPress.onPress }) };
  const items = [StyleSheet.absoluteFill, tmp.shade, animatedStyle];
  obj3.style = items;
  return closure_21(isDockConnected(5095).View, obj3);
});
let obj12 = { backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUI.tsx");

export default noop.memo(function VoicePanelUI() {
  let tmp = closure_33();
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ scrollPosition, dragScrolling, channelId } = context);
  ({ dismissPanel, isDockEnabled } = context);
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp6[1];
  dependencyMap = noop.useRef(-1);
  const items = [channelId];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    clearTimeout(ref.current);
    channelId(ref[40]).batchUpdates(() => {
      if (lockEnabled) {
        const _setTimeout = setTimeout;
        closure_2.current = setTimeout(() => {
          const state = dismissPanel.getState();
          const result = state.setChannelPanelFullscreen(closure_0, lockEnabled);
          const state1 = controlsSpecs.getState();
          const freezeLock = state1.requestFreezeLock({ lockEnabled, key: "voice-panel-freeze-" + closure_0 });
        }, 1000);
      } else {
        let state = VoicePanelStore.getState();
        let result = state.setChannelPanelFullscreen(channelId, lockEnabled);
        let state1 = AppFreezeStore.getState();
        const obj = { lockEnabled, key: null };
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
    const state = VoicePanelStore.getState();
    state.setChannelPanelOpen(channelId, arg0);
  }, items1);
  const items2 = [channelId];
  const callback2 = noop.useCallback((arg0) => {
    const state = VoicePanelStore.getState();
    state.setChannelPanelPIP(channelId, arg0);
  }, items2);
  closure_129_0 = scrollPosition;
  closure_129_1 = dragScrolling;
  closure_129_2 = callback;
  closure_129_3 = callback1;
  closure_129_4 = callback2;
  closure_129_32 = undefined;
  closure_129_36 = undefined;
  closure_129_37 = undefined;
  closure_129_38 = undefined;
  const context1 = noop.useContext(VoicePanelStateContextDefault);
  const channelId2 = context1.channelId;
  closure_129_5 = channelId2;
  const committedMode = context1.committedMode;
  closure_129_6 = committedMode;
  const connected = context1.connected;
  closure_129_7 = connected;
  const controlsSpecs = context1.controlsSpecs;
  closure_129_8 = controlsSpecs;
  const dismissPanel2 = context1.dismissPanel;
  closure_129_9 = dismissPanel2;
  const dismissToPIPGestureRef = context1.dismissToPIPGestureRef;
  closure_129_10 = dismissToPIPGestureRef;
  const focused = context1.focused;
  closure_129_11 = focused;
  const hideControls = context1.hideControls;
  closure_129_12 = hideControls;
  const isDockConnected = context1.isDockConnected;
  closure_129_13 = isDockConnected;
  const isDockEnabled2 = context1.isDockEnabled;
  closure_129_14 = isDockEnabled2;
  const isFocusedVideoZoomed = context1.isFocusedVideoZoomed;
  closure_129_15 = isFocusedVideoZoomed;
  const dockJoinMorphOrigin = context1.dockJoinMorphOrigin;
  closure_129_16 = dockJoinMorphOrigin;
  const dockMinimizeProgress = context1.dockMinimizeProgress;
  closure_129_17 = dockMinimizeProgress;
  let mode = context1.mode;
  closure_129_18 = mode;
  const safeArea = context1.safeArea;
  closure_129_19 = safeArea;
  const setMode = context1.setMode;
  closure_129_20 = setMode;
  const sheetExitProgress = context1.sheetExitProgress;
  closure_129_21 = sheetExitProgress;
  const showControls = context1.showControls;
  closure_129_22 = showControls;
  const windowDimensions = context1.windowDimensions;
  closure_129_23 = windowDimensions;
  const wrapperDimensions = context1.wrapperDimensions;
  closure_129_24 = wrapperDimensions;
  const wrapperOffset = context1.wrapperOffset;
  closure_129_25 = wrapperOffset;
  const tmp12 = useSafeAreaInsetsDefault();
  closure_129_26 = tmp12;
  const tmp4 = useAnalyticsLocationsDefault;
  const sharedValue = channelId(5095).useSharedValue(0);
  closure_129_27 = sharedValue;
  let obj = channelId(5095);
  const sharedValue1 = channelId(5095).useSharedValue(false);
  closure_129_28 = sharedValue1;
  obj2 = channelId(5095);
  const sharedValue2 = channelId(5095).useSharedValue(false);
  closure_129_29 = sharedValue2;
  let obj3 = channelId(5095);
  const sharedValue3 = channelId(5095).useSharedValue({ start: 0, end: VOICE_PANEL_CHUNK_DIVISOR });
  closure_129_30 = sharedValue3;
  [first, closure_129_32] = noop.useState(true);
  closure_129_31 = first;
  const memo = noop.useMemo(() => {
    const Gesture = channelId(ref[19]).Gesture;
    return Gesture.Native();
  }, []);
  closure_129_33 = memo;
  obj4 = channelId(5095);
  let obj5 = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
  const animatedRef = channelId(5095).useAnimatedRef();
  closure_129_34 = animatedRef;
  let obj6 = channelId(5095);
  const sharedValue4 = channelId(5095).useSharedValue({ absoluteXStart: 0, absoluteYStart: 0, cancel: false, active: false, requiresPop: false });
  closure_129_35 = sharedValue4;
  let obj7 = channelId(5095);
  let fn = function p() {
    return { gestureActive: closure_1_35.get().active, connected: connected.get(), mode: mode.get() };
  };
  fn.__closure = { gestureState: sharedValue4, connected, mode };
  fn.__workletHash = 5596084348360;
  fn.__initData = __initData;
  let fn2 = function h(mode, current) {
    if (!obj.cheapWorkletShallowEqual(mode, tmp)) {
      mode = mode.mode;
      if (mode.connected) {
        if (!mode.gestureActive) {
          if (mode === VoicePanelModes.PANEL) {
            ReanimatedRexport2.runOnJS(closure_2)(true);
            const tmp2Result = ReanimatedRexport2;
          }
          if (mode === VoicePanelModes.PANEL) {
            ReanimatedRexport2.runOnJS(_slicedToArray)(true);
            const tmp2Result6 = ReanimatedRexport2;
          } else {
            ReanimatedRexport2.runOnJS(_slicedToArray)(false);
            const tmp2Result7 = ReanimatedRexport2;
          }
          if (mode === VoicePanelModes.PIP) {
            ReanimatedRexport2.runOnJS(noop)(true);
            const tmp2Result8 = ReanimatedRexport2;
          } else {
            ReanimatedRexport2.runOnJS(noop)(false);
            const tmp2Result9 = ReanimatedRexport2;
          }
        }
      }
      ReanimatedRexport2.runOnJS(closure_2)(false);
      const tmp2Result10 = ReanimatedRexport2;
    }
    obj = cheapWorkletShallowEqual;
    tmp = current;
  };
  let obj8 = channelId(5095);
  fn2.__closure = { cheapWorkletShallowEqual: channelId(10089).cheapWorkletShallowEqual, VoicePanelModes, runOnJS: channelId(5095).runOnJS, setPanelFullscreen: callback, setPanelOpen: callback1, setPanelPIP: callback2 };
  fn2.__workletHash = 10989484188294;
  fn2.__initData = __initData2;
  const animatedReaction = obj8.useAnimatedReaction(fn, fn2);
  let obj9 = { cheapWorkletShallowEqual: channelId(10089).cheapWorkletShallowEqual, VoicePanelModes, runOnJS: channelId(5095).runOnJS, setPanelFullscreen: callback, setPanelOpen: callback1, setPanelPIP: callback2 };
  class P {
    constructor() {
      return closure_1_18.get();
    }
  }
  P.__closure = { mode };
  P.__workletHash = 455036316035;
  P.__initData = __initData3;
  let fn3 = function f(arg0, arg1) {
    let tmp2 = arg0 === VoicePanelModes.DISMISSED;
    if (tmp2) {
      tmp2 = arg1 !== tmp.DISMISSED;
    }
    if (tmp2) {
      updateSharedValueIfChangedDefault(closure_1_35, { cancel: false, active: false });
    }
  };
  let obj10 = channelId(5095);
  fn3.__closure = { VoicePanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState: sharedValue4 };
  fn3.__workletHash = 8982251844724;
  fn3.__initData = __initData4;
  const animatedReaction1 = obj10.useAnimatedReaction(P, fn3);
  const items3 = [channelId2];
  const callback3 = noop.useCallback((arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = isActivityParticipant(ChannelRTCStore.getParticipant(StyleSheet, arg0));
    }
    computeViewableChunksFromScrollPosition(!tmp);
  }, items3);
  closure_129_36 = callback3;
  const obj11 = { VoicePanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState: sharedValue4 };
  class Ce {
    constructor() {
      tmp = undefined;
      if (closure_1_18.get() === VoicePanelModes.PANEL) {
        tmp2 = closure_1_11;
        value = closure_1_11.get();
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
  Ce.__closure = { mode, VoicePanelModes, focused };
  Ce.__workletHash = 16350113088465;
  Ce.__initData = __initData5;
  class Ae {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[15]);
        tmp3 = closure_1_36;
        tmp4 = obj.runOnJS(closure_1_36)(arg0);
      }
      return;
    }
  }
  const obj12 = channelId(5095);
  Ae.__closure = { runOnJS: channelId(5095).runOnJS, handleFocusChange: callback3 };
  Ae.__workletHash = 169980789473;
  Ae.__initData = __initData6;
  const animatedReaction2 = obj12.useAnimatedReaction(Ce, Ae);
  const tmp27 = useControlsLockDefault();
  closure_129_37 = tmp27;
  const items4 = [tmp12, committedMode, connected, controlsSpecs, dismissPanel2, dismissToPIPGestureRef, focused, first, hideControls, sharedValue4, isDockEnabled2, isFocusedVideoZoomed, sharedValue1, mode, safeArea, scrollPosition, memo, setMode, showControls, windowDimensions, wrapperDimensions, wrapperOffset, tmp27];
  const memo1 = noop.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    const rect = { left: -1 * log.left, right: -1 * log.right };
    const TapResult = Gesture2.Tap();
    const hitSlopResult = Gesture2.Tap().hitSlop(rect);
    const enabledResult = Gesture2.Tap().hitSlop(rect).enabled(obj4);
    const fn = function h() {
      if (connected.get()) {
        if (closure_1_18.get() !== isFocusedVideoZoomed.PIP) {
          if (controlsSpecs.get().mode === mode.HIDDEN) {
            channelId(5095).runOnJS(showControls)({ debounce: true });
            obj2 = channelId(5095);
          } else {
            channelId(5095).runOnJS(hideControls)({ debounce: true });
            const obj = channelId(5095);
          }
        }
      }
    };
    const maxDistanceResult = Gesture2.Tap().hitSlop(rect).enabled(obj4).maxDistance(30);
    fn.__closure = { connected, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes, runOnJS: ReanimatedRexport2.runOnJS, showControls, hideControls };
    fn.__workletHash = 7439125251278;
    fn.__initData = __initData;
    let obj = { connected, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes, runOnJS: ReanimatedRexport2.runOnJS, showControls, hideControls };
    const Gesture3 = LegacyBaseButton.Gesture;
    const onStartResult = maxDistanceResult.onStart(fn);
    const PanResult = Gesture3.Pan();
    const enabledResult1 = Gesture3.Pan().enabled(obj4);
    const manualActivationResult = Gesture3.Pan().enabled(obj4).manualActivation(true);
    const rect1 = { left: -1 * log.left, right: -1 * log.right };
    const maxPointersResult = Gesture3.Pan().enabled(obj4).manualActivation(true).maxPointers(1);
    const hitSlopResult1 = Gesture3.Pan().enabled(obj4).manualActivation(true).maxPointers(1).hitSlop(rect1);
    let result = Gesture3.Pan().enabled(obj4).manualActivation(true).maxPointers(1).hitSlop(rect1).withRef(closure_1_10).shouldCancelWhenOutside(false);
    let result1 = result.simultaneousWithExternalGesture(closure_1_33);
    class S {
      constructor(arg0, arg1) {
        first = arg0.allTouches[0];
        if (closure_2_13) {
          tmp2 = null;
          if (null != first) {
            tmp3 = closure_1_23;
            tmp4 = closure_1_19;
            if (first.absoluteY > closure_1_23.get().height - closure_1_19.get().bottom) {
              tmp16 = closure_1_35;
              obj1 = {};
              tmp17 = obj1;
              merged = Object.assign(closure_1_35.get());
              flag2 = true;
              obj1.cancel = true;
              result = closure_1_35.set(obj1);
              activateResult = arg1.activate();
              return;
            }
          }
        }
        value = closure_1_15.get();
        if (!value) {
          tmp6 = closure_1_18;
          tmp7 = closure_2_15;
          tmp8 = closure_1_18.get() === closure_2_15.PANEL;
          if (tmp8) {
            tmp9 = closure_1_8;
            tmp10 = closure_2_18;
            tmp8 = closure_1_8.get().mode === closure_2_18.DRAWER;
          }
          value = tmp8;
        }
        if (value) {
          tmp11 = closure_1_35;
          obj = {};
          tmp12 = obj;
          merged1 = Object.assign(closure_1_35.get());
          flag = true;
          obj.cancel = true;
          result1 = closure_1_35.set(obj);
          failResult = arg1.fail();
        }
        return;
      }
    }
    S.__closure = { IS_IOS, windowDimensions, safeArea, gestureState, isFocusedVideoZoomed, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes };
    S.__workletHash = 1018234940483;
    S.__initData = __initData8;
    obj2 = { IS_IOS, windowDimensions, safeArea, gestureState, isFocusedVideoZoomed, mode, VoicePanelModes, controlsSpecs, VoicePanelControlsModes };
    const withRefResult = Gesture3.Pan().enabled(obj4).manualActivation(true).maxPointers(1).hitSlop(rect1).withRef(closure_1_10);
    const fn2 = function u(arg0) {
      if (!closure_1_35.get().cancel) {
        let tmp = isDockEnabled;
        if (isDockEnabled) {
          tmp = closure_1_18.get() !== isFocusedVideoZoomed.PANEL;
        }
        if (!tmp) {
          closure_1(11227)(closure_1_25, { x: 0, y: 0 });
        }
        obj4 = { absoluteXStart: null, absoluteYStart: null, active: false, cancel: false, requiresPop: null };
        ({ absoluteX: obj2.absoluteXStart, absoluteY: obj2.absoluteYStart } = arg0);
        value = connected.get();
        if (value) {
          value = closure_1_18.get() === isFocusedVideoZoomed.PANEL;
        }
        obj4.requiresPop = value;
        const result = closure_1_35.set(obj4);
        if (controlsSpecs.get().mode === mode.FLOATING_DEFAULT) {
          channelId(5095).runOnJS(controlsLock.lock)();
          const obj3 = channelId(5095);
        }
      }
    };
    const onTouchesDownResult = result1.onTouchesDown(S);
    fn2.__closure = { gestureState, isDockEnabled, mode, VoicePanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, connected, controlsSpecs, VoicePanelControlsModes, runOnJS: ReanimatedRexport2.runOnJS, controlsLock };
    fn2.__workletHash = 5562428303410;
    fn2.__initData = __initData7;
    let obj3 = { gestureState, isDockEnabled, mode, VoicePanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, connected, controlsSpecs, VoicePanelControlsModes, runOnJS: ReanimatedRexport2.runOnJS, controlsLock };
    const fn3 = function l(state, fail) {
      if (state.state === channelId(5303).State.BEGAN) {
        if (!closure_1_35.get().active) {
          if (!closure_1_35.get().cancel) {
            ({ absoluteY, absoluteX } = state.changedTouches[0]);
            const diff = closure_1_35.get().absoluteYStart - absoluteY;
            const diff1 = closure_1_35.get().absoluteXStart - absoluteX;
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
            if (mode.get() === isFocusedVideoZoomed.PANEL) {
              const _Math6 = Math;
              if (diff < 0) {
                if (Math.floor(closure_1_0.get()) <= 0) {
                  let tmp24 = !closure_2_35;
                  if (closure_2_35) {
                    tmp24 = bound > 10;
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
              let tmp13 = !isDockEnabled;
              if (!isDockEnabled) {
                tmp13 = mode.get() === tmp11.PIP;
              }
              if (tmp13) {
                tmp13 = bound > 10;
              }
              flag = false;
              if (tmp13) {
                channelId(5095).runOnJS(closure_1(19200))();
                flag = true;
                const tmpResult = channelId(5095);
              }
            }
            const tmp26 = closure_1(11227);
            if (flag) {
              tmp26(closure_1_25, { gestureActive: true });
              obj2 = { absoluteXStart: absoluteX, absoluteYStart: absoluteY + closure_1_0.get(), cancel: false, active: true, requiresPop: closure_1_35.get().requiresPop };
              const result = closure_1_35.set(obj2);
              const result1 = lockScrolling.set(true);
              fail.activate();
            } else {
              const obj3 = { absoluteYStart: absoluteY, absoluteXStart: absoluteX };
              tmp26(closure_1_35, obj3);
            }
          }
        }
      }
    };
    const onBeginResult = onTouchesDownResult.onBegin(fn2);
    fn3.__closure = { State: LegacyBaseButton.State, gestureState, mode, VoicePanelModes, scrollPosition: channelId, isQuest, MIN_GESTURE_MOVE: 10, focused, isDockEnabled, runOnJS: ReanimatedRexport2.runOnJS, triggerIOSHaptic: utils_triggerIOSHapticDefault, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, lockScrolling };
    fn3.__workletHash = 6330669366540;
    fn3.__initData = __initData6;
    obj4 = { State: LegacyBaseButton.State, gestureState, mode, VoicePanelModes, scrollPosition: channelId, isQuest, MIN_GESTURE_MOVE: 10, focused, isDockEnabled, runOnJS: ReanimatedRexport2.runOnJS, triggerIOSHaptic: utils_triggerIOSHapticDefault, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, lockScrolling };
    const fn4 = function c(absoluteX) {
      if (!closure_1_35.get().cancel) {
        if (!isDockEnabled) {
          if (mode.get() === isFocusedVideoZoomed.PIP) {
            const point = { x: -1 * (closure_1_35.get().absoluteXStart - absoluteX.absoluteX), y: -1 * (closure_1_35.get().absoluteYStart - absoluteX.absoluteY) };
            closure_1(11227)(closure_1_25, point);
            const tmp7 = closure_1(11227);
          }
        }
        const result = -1 * (closure_1_35.get().absoluteYStart - absoluteX.absoluteY);
        value = !isDockEnabled;
        if (!isDockEnabled) {
          value = connected.get();
        }
        if (value) {
          value = !closure_1_35.get().requiresPop;
        }
        if (value) {
          value = result <= 0;
        }
        if (value) {
          obj2 = {};
          const merged = Object.assign(closure_1_35.get());
          obj2.requiresPop = true;
          const result1 = closure_1_35.set(obj2);
        }
        if (lockScrolling.get()) {
          if (result < 0) {
            const result2 = lockScrolling.set(false);
          }
          if (isDockEnabled) {
            let diff = result;
            if (connected.get()) {
              const obj3 = { requiresPop: result <= 180 };
              closure_1(11227)(closure_1_35, obj3);
              diff = result;
            }
          } else {
            diff = result;
            if (closure_1_35.get().requiresPop) {
              const _Math = Math;
              let bound = Math.max(result, 0);
              if (bound > 180) {
                const obj5 = {};
                const merged1 = Object.assign(closure_1_35.get());
                obj5.requiresPop = false;
                const result3 = closure_1_35.set(obj5);
                const obj8 = channelId(5095);
                channelId(5095).runOnJS(channelId(5260).triggerHapticFeedback)(channelId(5260).HapticFeedbackTypes.IMPACT_MEDIUM);
                diff = result;
                const runOnJSResult = channelId(5095).runOnJS(channelId(5260).triggerHapticFeedback);
              }
            }
            diff = bound - bound * setMode;
          }
          bound = closure_1(11227);
          const point1 = { y: diff, x: 0 };
          bound(closure_1_25, point1);
        }
        value2 = lockScrolling.get();
        let tmp17 = !value2;
        if (!value2) {
          tmp17 = closure_1_0.get() <= 0;
        }
        if (tmp17) {
          const result4 = lockScrolling.set(true);
        }
      }
    };
    const onTouchesMoveResult = onBeginResult.onTouchesMove(fn3);
    fn4.__closure = { gestureState, isDockEnabled, mode, VoicePanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, connected, lockScrolling, scrollPosition: channelId, PIP_POP_HEIGHT: 180, POP_RESISTANCE, runOnJS: ReanimatedRexport2.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes };
    fn4.__workletHash = 5763844933711;
    fn4.__initData = __initData5;
    let obj5 = { gestureState, isDockEnabled, mode, VoicePanelModes, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, wrapperOffset, connected, lockScrolling, scrollPosition: channelId, PIP_POP_HEIGHT: 180, POP_RESISTANCE, runOnJS: ReanimatedRexport2.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes };
    const fn5 = function s() {
      const result = lockScrolling.set(false);
      closure_1(11227)(closure_1_35, { cancel: false, active: false });
      let tmp5 = isDockEnabled;
      if (isDockEnabled) {
        tmp5 = !closure_1_35.get().active;
      }
      if (tmp5) {
        tmp5 = mode.get() !== isFocusedVideoZoomed.PANEL;
      }
      if (!tmp5) {
        closure_1(11227)(closure_1_25, { gestureActive: false, x: 0, y: 0 });
      }
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn4);
    fn5.__closure = { lockScrolling, gestureState, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, isDockEnabled, mode, VoicePanelModes, wrapperOffset };
    fn5.__workletHash = 12617975861528;
    fn5.__initData = __initData4;
    let obj6 = { lockScrolling, gestureState, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, isDockEnabled, mode, VoicePanelModes, wrapperOffset };
    const fn6 = function o(velocityY) {
      if (!closure_1_35.get().cancel) {
        velocityY = velocityY.velocityY;
        ({ velocityX, absoluteX, absoluteY } = velocityY);
        value = mode.get();
        if (isDockEnabled) {
          if (value !== isFocusedVideoZoomed.PANEL) {
            const result = lockScrolling.set(false);
          } else {
            const drawerHeight = wrapperDimensions.get().drawerHeight;
            if (velocityY > 0) {
              value2 = connected.get();
              const y = closure_1_25.get().y;
              const result1 = tmp94 * v02;
              if (value2) {
                const obj9 = channelId(5095);
                channelId(5095).runOnJS(channelId(5260).triggerHapticFeedback)(channelId(5260).HapticFeedbackTypes.IMPACT_MEDIUM);
                const result2 = committedMode.set(isFocusedVideoZoomed.PIP);
                const runOnJSResult = channelId(5095).runOnJS(channelId(5260).triggerHapticFeedback);
                channelId(5095).runOnJS(setMode)(isFocusedVideoZoomed.PIP);
                closure_1(11227)(closure_1_25, { gestureActive: false, x: 0, y: 0 });
                const obj10 = channelId(5095);
              } else if (y > result1) {
                closure_1(11227)(closure_1_25, { gestureActive: false });
                channelId(5095).runOnJS(dismissPanel)();
                const obj8 = channelId(5095);
              }
            }
            closure_1(11227)(closure_1_25, { gestureActive: false, x: 0, y: 0 });
            const result3 = lockScrolling.set(false);
          }
        } else if (value === isFocusedVideoZoomed.PIP) {
          const obj6 = { velocityX, velocityY, absoluteX, absoluteY, windowDimensions: windowDimensions.get(), safeArea: safeArea.get() };
          const result4 = channelId(19107).calculatePIPPositionFromVelocity(obj6);
          ({ pipX, pipY } = result4);
          const obj7 = { pipX, pipY };
          closure_1(11227)(wrapperDimensions, obj7);
          closure_1(11227)(closure_1_25, { gestureActive: false });
          const obj5 = channelId(19107);
        } else if (mode.get() === isFocusedVideoZoomed.PANEL) {
          if (velocityY > 0) {
            if (connected.get()) {
              if (closure_1_35.get().requiresPop) {
                closure_1(11227)(closure_1_25, { gestureActive: false, x: 0, y: 0 });
                const result5 = lockScrolling.set(false);
              } else {
                channelId(5095).runOnJS(setMode)(isFocusedVideoZoomed.PIP);
                closure_1(11227)(closure_1_25, { gestureActive: false, x: 0, y: 0 });
                obj4 = channelId(5095);
              }
            } else {
              const diff = wrapperDimensions.get().drawerHeight - wrapperDimensions.get().drawerY;
              if (closure_1_25.get().y > diff * v02) {
                closure_1(11227)(closure_1_25, { gestureActive: false });
                channelId(5095).runOnJS(dismissPanel)();
                const obj3 = channelId(5095);
              } else {
                closure_1(11227)(closure_1_25, { gestureActive: false, x: 0, y: 0 });
                const result6 = lockScrolling.set(false);
              }
            }
          } else {
            closure_1(11227)(closure_1_25, { gestureActive: false, x: 0, y: 0 });
            const result7 = lockScrolling.set(false);
          }
        }
      }
    };
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn5);
    fn6.__closure = { gestureState, isDockEnabled, mode, VoicePanelModes, lockScrolling, wrapperDimensions, connected, wrapperOffset, MIN_DISMISS_MOVE_PERCENTAGE, SHEET_COMMIT_FLING_VELOCITY: VoicePanelSheetMorph.SHEET_COMMIT_FLING_VELOCITY, runOnJS: ReanimatedRexport2.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, committedMode, setMode, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, dismissPanel, calculatePIPPositionFromVelocity: VoicePanelPIPUtils.calculatePIPPositionFromVelocity, windowDimensions, safeArea };
    fn6.__workletHash = 10169964943722;
    fn6.__initData = __initData3;
    let obj7 = { gestureState, isDockEnabled, mode, VoicePanelModes, lockScrolling, wrapperDimensions, connected, wrapperOffset, MIN_DISMISS_MOVE_PERCENTAGE, SHEET_COMMIT_FLING_VELOCITY: VoicePanelSheetMorph.SHEET_COMMIT_FLING_VELOCITY, runOnJS: ReanimatedRexport2.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, committedMode, setMode, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, dismissPanel, calculatePIPPositionFromVelocity: VoicePanelPIPUtils.calculatePIPPositionFromVelocity, windowDimensions, safeArea };
    const fn7 = function t() {
      if (isDockEnabled) {
        closure_1(11227)(closure_1_35, { cancel: false, active: false });
        closure_1(11227)(closure_1_25, { gestureActive: false });
        const result = lockScrolling.set(false);
        channelId(5095).runOnJS(controlsLock.unlock)();
        obj2 = channelId(5095);
      } else {
        let tmp2 = 0 !== closure_1_25.get().y;
        if (tmp2) {
          tmp2 = mode.get() === isFocusedVideoZoomed.PANEL;
        }
        if (!tmp2) {
          closure_1(11227)(closure_1_35, { cancel: false, active: false });
        }
        channelId(5095).runOnJS(controlsLock.unlock)();
        const obj = channelId(5095);
      }
    };
    const onEndResult = onTouchesCancelledResult.onEnd(fn6);
    fn7.__closure = { isDockEnabled, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, gestureState, wrapperOffset, lockScrolling, runOnJS: ReanimatedRexport2.runOnJS, controlsLock, mode, VoicePanelModes };
    fn7.__workletHash = 15051989893818;
    fn7.__initData = __initData2;
    return Gesture.Race(onStartResult, onEndResult.onFinalize(fn7));
  }, items4);
  const obj13 = { runOnJS: channelId(5095).runOnJS, handleFocusChange: callback3 };
  const obj15 = { onBeginDrag: null, onEndDrag: null, onMomentumEnd: null, onScroll: null };
  function xe(contentOffset) {
    const result = channelId.set(contentOffset.contentOffset.y);
    const result1 = closure_1.set(true);
  }
  xe.__closure = { scrollPosition, dragScrolling };
  xe.__workletHash = 7129316645562;
  xe.__initData = __initData7;
  obj15.onBeginDrag = xe;
  class Ye {
    constructor() {
      result = closure_1.set(false);
      return;
    }
  }
  Ye.__closure = { dragScrolling };
  Ye.__workletHash = 16780787183039;
  Ye.__initData = __initData8;
  obj15.onEndDrag = Ye;
  function ye() {
    const result = closure_1.set(false);
  }
  ye.__closure = { dragScrolling };
  ye.__workletHash = 13772673540365;
  ye.__initData = __initData9;
  obj15.onMomentumEnd = ye;
  class He {
    constructor(arg0) {
      if (closure_1_28.get()) {
        obj3 = closure_1_29;
        if (closure_1_29.get()) {
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
            tmp15 = closure_1_34;
            flag2 = false;
            tmp16 = obj5;
            num7 = 0;
            tmp17 = value;
            flag3 = false;
            scrollToResult = obj5.scrollTo(closure_1_34, 0, value, false);
            result2 = obj3.set(false);
          }
        }
      } else {
        obj = channelId;
        tmp = undefined;
        if (channelId.get() !== arg0.contentOffset.y) {
          tmp20 = computeViewableChunksFromScrollPosition;
          tmp22 = closure_1_23;
          value1 = obj.get();
          tmp23 = closure_1_27;
          if (typeof computeViewableChunksFromScrollPosition === "function") {
            tmp2 = globalThis;
            _Math = Math;
            tmp3 = VOICE_PANEL_CHUNK_DIVISOR;
            rounded = Math.ceil(closure_1_23.get().height / VOICE_PANEL_CHUNK_DIVISOR);
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
            obj1 = { start: null, end: null };
            _Math6 = Math;
            obj1.start = Math.max(bound - VOICE_PANEL_CHUNK_DIVISOR - num4, 0);
            obj1.end = bound;
            tmp = obj1;
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
          tmp27 = closure_1_30;
          tmp28 = closure_1(closure_2[21])(closure_1_30, tmp);
        }
      }
      return;
    }
  }
  const obj14 = channelId(5095);
  He.__closure = { lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: channelId(5095).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, viewableChunks: sharedValue3 };
  He.__workletHash = 3971019682754;
  He.__initData = __initData10;
  obj15.onScroll = He;
  const obj16 = { lockScrolling: sharedValue1, isSnappingBack: sharedValue2, scrollPosition, scrollTo: channelId(5095).scrollTo, scrollerRef: animatedRef, computeViewableChunksFromScrollPosition, windowDimensions, scrollableRegionSize: sharedValue, updateSharedValueIfChanged: updateSharedValueIfChangedDefault, viewableChunks: sharedValue3 };
  const animatedScrollHandler = obj14.useAnimatedScrollHandler(obj15);
  class Je {
    constructor() {
      return closure_1_18.get();
    }
  }
  Je.__closure = { mode };
  Je.__workletHash = 17369688194549;
  Je.__initData = __initData11;
  class Re {
    constructor(arg0, arg1) {
      tmp = null != arg1 && arg0 !== arg1;
      if (tmp) {
        tmp2 = VoicePanelModes;
        if (arg0 === VoicePanelModes.PANEL) {
          if (arg1 === tmp2.PIP) {
            tmp5 = closure_1_28;
            flag2 = false;
            result = closure_1_28.set(false);
          }
        }
        if (arg0 === tmp2.PIP) {
          tmp3 = closure_1_28;
          flag = true;
          result1 = closure_1_28.set(true);
        }
      }
      return;
    }
  }
  Re.__closure = { VoicePanelModes, lockScrolling: sharedValue1 };
  Re.__workletHash = 1687129825906;
  Re.__initData = __initData12;
  const animatedReaction3 = channelId(5095).useAnimatedReaction(Je, Re);
  const obj17 = channelId(5095);
  const token = channelId(5596).useToken(nativeDefault.modules.mobile.VOICE_PANEL_GUTTER);
  closure_129_38 = token;
  const obj18 = channelId(5596);
  class Xe {
    constructor() {
      tmp = closure_1_18.get() === VoicePanelModes.PIP;
      tmp2 = tmp;
      if (!tmp) {
        tmp3 = closure_1_11;
        tmp4 = null;
        tmp2 = null != closure_1_11.get();
      }
      str = "auto";
      if (tmp) {
        str = "none";
      }
      obj = { pointerEvents: str, scrollEnabled: null, showsVerticalScrollIndicator: null, scrollIndicatorInsets: null };
      tmp5 = !tmp2;
      obj.scrollEnabled = tmp5;
      value = closure_1_28.get();
      tmp7 = !value;
      if (!value) {
        tmp7 = tmp5;
      }
      obj.showsVerticalScrollIndicator = tmp7;
      rect = { top: null, bottom: null };
      tmp8 = closure_1(closure_2[28]);
      rect.top = tmp8(closure_1_19.get(), closure_1_38).height - closure_1_19.get().top;
      rect.bottom = closure_1_19.get().bottom;
      obj.scrollIndicatorInsets = rect;
      return obj;
    }
  }
  const obj19 = channelId(5095);
  Xe.__closure = { mode, VoicePanelModes, focused, lockScrolling: sharedValue1, calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault, safeArea, edgeGutter: token };
  Xe.__workletHash = 12205535325007;
  Xe.__initData = __initData13;
  const items5 = [sharedValue];
  const animatedProps = obj19.useAnimatedProps(Xe);
  const callback4 = noop.useCallback((arg0, arg1) => {
    const result = log.set(arg1);
  }, items5);
  const obj20 = { mode, VoicePanelModes, focused, lockScrolling: sharedValue1, calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault, safeArea, edgeGutter: token };
  class Fe {
    constructor() {
      if (closure_1_13.get()) {
        tmp8 = closure_1_21;
        num5 = 1;
        diff = 1 - closure_1_21.get();
        tmp10 = closure_1_16;
        value = closure_1_16.get();
        tmp12 = null;
        if (null != value) {
          tmp14 = closure_1_23;
          height2 = closure_1_23.get().height;
          tmp15 = globalThis;
          _Math3 = Math;
          _Math4 = Math;
          num6 = 0;
          tmp17 = closure_1_17;
          bound = Math.min(Math.max((height2 - value.y) / height2, 0), 1);
          return bound * (1 - closure_1_17.get()) * diff;
        } else {
          tmp13 = closure_1_17;
          return (1 - closure_1_17.get()) * diff;
        }
      } else {
        tmp = closure_1_18;
        value1 = closure_1_18.get();
        if (VoicePanelModes.PIP !== value1) {
          if (VoicePanelModes.DISMISSED !== value1) {
            tmp18 = closure_1_7;
            if (closure_1_7.get()) {
              obj = closure_1_35;
              if (closure_1_35.get().active) {
                if (obj.get().requiresPop) {
                  num3 = 1;
                  return 1;
                }
              }
            }
            tmp3 = closure_1_24;
            tmp4 = closure_1_25;
            tmp6 = closure_1_23;
            sum = closure_1_24.get().drawerY + closure_1_25.get().y;
            height = closure_1_23.get().height;
            tmp7 = globalThis;
            _Math = Math;
            _Math2 = Math;
            num = 0;
            num2 = 1;
            return Math.min(Math.max((height - sum) / height, 0), 1);
          }
        }
        num4 = 0;
        return 0;
      }
    }
  }
  Fe.__closure = { isDockConnected, sheetExitProgress, dockJoinMorphOrigin, windowDimensions, dockMinimizeProgress, mode, VoicePanelModes, connected, gestureState: sharedValue4, wrapperDimensions, wrapperOffset };
  Fe.__workletHash = 4650267051519;
  Fe.__initData = __initData14;
  const derivedValue = channelId(5095).useDerivedValue(Fe);
  const obj22 = { children: null };
  const obj21 = channelId(5095);
  const obj23 = { zIndex: 2, children: closure_21(VoicePanelHeaderDefault, { wrapperOffset, gestureState: sharedValue4, layout: layoutTransition }) };
  const items6 = [closure_21(channelId(5611).LayerScope, obj23), , ];
  const obj25 = { gesture: memo1, children: null };
  const obj26 = { style: StyleSheet.absoluteFill, layout: layoutTransition, collapsable: false, children: null };
  const obj24 = { wrapperOffset, gestureState: sharedValue4, layout: layoutTransition };
  const tmp35 = useControlsHoverGestureDefault();
  const obj27 = { gesture: memo, children: null };
  const obj28 = { layout: scrollViewLayoutTransition, ref: animatedRef, onScroll: animatedScrollHandler, onMomentumScrollEnd: NOOP, animatedProps, style: tmp.scrollView, onContentSizeChange: callback4, contentContainerStyle: tmp.scrollViewContent, scrollEventThrottle: 8.333333333333334, children: null };
  const items7 = [closure_21(VoicePanelCardViewDefault, { viewableChunks: sharedValue3 }), closure_21(VoicePanelPreJoinContentDefault, {})];
  obj28.children = items7;
  obj27.children = showControls(closure_34, obj28);
  obj26.children = closure_21(channelId(5303).GestureDetector, obj27);
  obj25.children = closure_21(ReanimatedNativeViewDefault, obj26);
  items6[1] = closure_21(channelId(5303).GestureDetector, obj25);
  items6[2] = closure_21(VoicePanelVoiceChannelAppDefault, {});
  obj22.children = items6;
  const tmp40 = showControls(windowDimensions, obj22);
  const effect = noop.useEffect(() => closure_1(true), []);
  let tmp37Result2 = null;
  if (tmp6[0]) {
    const obj29 = { value: tmp4(AnalyticsLocationDefault.VOICE_PANEL).analyticsLocations, children: null };
    const items8 = [closure_21(tmp2(19276), {}), , ];
    const obj30 = { opacity: derivedValue, onPress: dismissPanel };
    items8[1] = closure_21(closure_73, obj30);
    const obj31 = { gesture: tmp35, children: null };
    const obj32 = { style: tmp.accessibilityView, nativeID: null, accessibilityViewIsModal: true, layout: null, onAccessibilityEscape: null, children: null };
    let _HermesInternal = HermesInternal;
    obj32.nativeID = "voice-panel-ui-" + channelId;
    obj32.layout = layoutTransition;
    obj32.onAccessibilityEscape = tmp2(10929);
    const items9 = [closure_21(tmp2(19278), {}), , , ];
    const obj33 = { wrapperOffset, children: null };
    let tmp37Result = tmp40;
    if (isDockEnabled) {
      const obj34 = { children: tmp40 };
      tmp37Result = closure_21(channelId(19201).VoicePanelContentWithDock, obj34);
    }
    const obj35 = { children: null };
    obj33.children = tmp37Result;
    items9[1] = closure_21(AnimatedWrapper, obj33);
    items9[2] = closure_21(tmp2(19280), {});
    const obj36 = { gestureState: sharedValue4 };
    items9[3] = closure_21(tmp2(19288), obj36);
    obj32.children = items9;
    obj31.children = tmp36(tmp2(19277), obj32);
    items8[2] = closure_21(channelId(5303).GestureDetector, obj31);
    obj35.children = items8;
    obj29.children = tmp36(channelId(5611).LayerScope, obj35);
    tmp37Result2 = closure_21(channelId(7326).AnalyticsLocationProvider, obj29);
    let tmp2Result = tmp2(19277);
  }
  return tmp37Result2;
});
export const REDUCED_MOTION_OPACITY_PHYSICS = obj5;