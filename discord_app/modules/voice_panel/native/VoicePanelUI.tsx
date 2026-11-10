// discord_app/modules/voice_panel/native/VoicePanelUI.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import native from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../_runtime/metro/01705__.js";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import LegacyBaseButton from "../../../../_runtime/05422_LegacyBaseButton.js";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import ExternalPipDefault from "../../external_pip/ExternalPip.android.tsx";
import ReleaseChannelUtils from "../../../utils/ReleaseChannelUtils.native.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import cheapWorkletShallowEqual from "../../reanimated/native/cheapWorkletShallowEqual.tsx";
import VoicePanelStateContextDefault from "VoicePanelStateContext.tsx";
import updateSharedValueIfChangedDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import VoicePanelSheetMorph from "dock/VoicePanelSheetMorph.tsx";
import useGlobalStatusIndicatorState from "../../connectivity/native/useGlobalStatusIndicatorState.tsx";
import roundToNearestPixelDefault from "utils/roundToNearestPixel.tsx";
import useWindowDimensionsSharedValueDefault from "../../screen/useWindowDimensionsSharedValue.native.tsx";
import VoicePanelPIPUtils from "pip/VoicePanelPIPUtils.tsx";
import PanelSizeUtils from "utils/PanelSizeUtils.tsx";
import VoicePanelPIPStateContext from "pip/VoicePanelPIPStateContext.tsx";
import utils_triggerIOSHapticDefault from "utils/triggerIOSHaptic.tsx";
import VoicePanelDockSheet from "dock/VoicePanelDockSheet.tsx";
import useDockBoxShadowDefault from "dock/useDockBoxShadow.tsx";
import useVoicePanelDockMicLiveDefault from "dock/useVoicePanelDockMicLive.tsx";
import VoicePanelDockGlow from "dock/VoicePanelDockGlow.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../calls/ChannelRTCStore.tsx";
import AppFreezeStore from "../../panels/morphable/AppFreezeStore.tsx";
import VoicePanelStore from "../VoicePanelStore.tsx";

const require = globalThis.__r;
const nativeDefault = native;
const module_1652 = _mod1652;

const closeVoicePanelsDefault = tmp2(11071);
const calculateVoicePanelHeaderSpecsDefault = tmp2(11378);
const useControlsLockDefault = tmp2(19606);
const useControlsHoverGestureDefault = tmp2(19641);
const VoicePanelHeaderDefault = tmp2(19642);
const VoicePanelCardViewDefault = tmp2(19664);
const VoicePanelPreJoinContentDefault = tmp2(19697);
const VoicePanelVoiceChannelAppDefault = tmp2(19701);
const VoicePanelSystemUIManagerDefault = tmp2(19704);
const VoicePanelAccessibilityViewDefault = tmp2(19705);
const VoicePanelDismissableContentDefault = tmp2(19706);
const VoicePanelControlsDefault = tmp2(19725);
require = fn;
function NOOP() {}
function log() {
  items = [...HermesBuiltin.copyRestArgs()];
  log.log.apply(items);
}
function AnimatedWrapper(arg0) {
  ({ wrapperOffset, children } = arg0);
  c1 = undefined;
  c2 = undefined;
  let animatedStyle2;
  obj2 = useGlobalStatusIndicatorState;
  const height = obj2.useGlobalStatusIndicatorState().height;
  const tmp4 = closure_28();
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({
    wrapperDimensions,
    connected,
    dockPressProgress,
    isDockConnected,
    isDockEnabled,
    dockJoinMorphOrigin,
    dockMinimizeProgress,
    mode,
    windowDimensions,
    controlsSpecs,
    dockEntryProgress,
    dockHeight,
    focused,
    preJoinContentSize,
    safeArea,
    sheetExitProgress,
    useReducedMotion,
  } = context);
  let tmp6 = useWindowDimensionsSharedValueDefault({ ignoreKeyboard: true });
  items = [closure_54, controlsSpecs];
  c0 = undefined;
  [tmp7, tmp8] = items;
  class VoicePanelUITsx27 {
    constructor() {
      return closure_0.get().height;
    }
  }
  let items1 = [tmp8];
  VoicePanelUITsx27.__closure = items1;
  VoicePanelUITsx27.__workletHash = 8724286060056;
  VoicePanelUITsx27.__initData = tmp7;
  const derivedValue = _mod1652.useDerivedValue(VoicePanelUITsx27);
  const pIPState = VoicePanelPIPStateContext.usePIPState();
  const tmp3Result = VoicePanelPIPStateContext;
  let items2 = [
    closure_55,
    mode,
    connected,
    windowDimensions,
    safeArea,
    focused,
    pIPState,
    derivedValue,
    preJoinContentSize,
    height,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  animatedStyle2 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items2;
  class VoicePanelUITsx28 {
    constructor() {
      obj = {
        modeToSet: closure_0.get(),
        connected: closure_1.get(),
        windowWidth: closure_2.get().width,
        windowHeight: closure_2.get().height,
        safeArea: closure_3.get(),
        focused: closure_4.get(),
        pipState: closure_5,
        controlsHeight: closure_6.get(),
        preJoinContentSize: closure_7.get(),
        globalStatusIndicatorHeight: closure_8,
      };
      return obj;
    }
  }
  let items3 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  VoicePanelUITsx28.__closure = items3;
  VoicePanelUITsx28.__workletHash = 15248637951593;
  VoicePanelUITsx28.__initData = tmp11;
  let items4 = [
    closure_56,
    cheapWorkletShallowEqual.cheapWorkletShallowEqual,
    VoicePanelModes,
    isDockEnabled,
    wrapperDimensions,
    updateSharedValueIfChangedDefault,
    wrapperOffset,
    PanelSizeUtils.getMaxPanelWidth,
    PanelSizeUtils.getPanelX,
    roundToNearestPixelDefault,
    windowDimensions,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  animatedStyle2 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items4;
  class VoicePanelUITsx29 {
    constructor(arg0, arg1) {
      tmp2 = arg1;
      tmp = closure_0;
      if (!tmp(arg0, tmp2)) {
        ({ modeToSet, connected, windowWidth, windowHeight, safeArea } = arg0);
        tmp4 = closure_1;
        ({ controlsHeight, preJoinContentSize, globalStatusIndicatorHeight } = arg0);
        if (modeToSet === closure_1.PIP) {
          tmp5 = closure_2;
          if (!closure_2) {
          }
        }
        tmp6 = null == arg1;
        if (!tmp6) {
          tmp7 =
            windowHeight === arg1.windowHeight &&
            windowWidth === arg1.windowWidth &&
            safeArea.top === arg1.safeArea.top &&
            safeArea.bottom === arg1.safeArea.bottom &&
            safeArea.left === arg1.safeArea.left &&
            safeArea.right === arg1.safeArea.right;
          tmp6 = tmp7;
        }
        obj = closure_3;
        value = closure_3.get();
        ({ drawerX, drawerY } = value);
        diff = windowHeight - globalStatusIndicatorHeight;
        if (modeToSet === tmp4.PANEL) {
          if (connected) {
            tmp27 = closure_4;
            obj1 = { drawerWidth: null, drawerHeight: null, drawerX: 0, drawerY: 0, animated: null, mode: null };
            obj1.drawerWidth = windowWidth;
            obj1.drawerHeight = diff;
            obj1.animated = tmp6;
            obj1.mode = modeToSet;
            tmp28 = closure_4(obj, obj1);
            tmp29 = closure_5;
            tmp30 = closure_4(closure_5, { gestureActive: false });
          } else {
            tmp19 = closure_6;
            obj8 = { windowWidth: null, connected: null, safeAreaLeft: null, safeAreaRight: null };
            obj8.windowWidth = windowWidth;
            obj8.connected = connected;
            ({ left: obj5.safeAreaLeft, right: obj5.safeAreaRight } = safeArea);
            tmp20 = closure_6(obj8);
            tmp21 = closure_7;
            tmp23 = closure_8;
            tmp24 = globalThis;
            _Math = Math;
            num2 = 0.8;
            tmp22 = closure_7(windowWidth, tmp20);
            tmp25 = closure_4;
            obj9 = { drawerWidth: null, drawerHeight: null, drawerX: null, drawerY: null, animated: null, mode: null };
            obj9.drawerWidth = tmp20;
            obj9.drawerHeight = diff;
            obj9.drawerX = tmp22;
            obj9.drawerY = closure_8(
              Math.max(diff - preJoinContentSize - controlsHeight - safeArea.bottom, diff - 0.8 * diff),
            );
            obj9.animated = tmp6;
            obj9.mode = modeToSet;
            tmp26 = closure_4(obj, obj9);
          }
        } else {
          if (modeToSet === tmp4.PIP) {
            tmp10 = closure_2;
            if (closure_2) {
              tmp17 = closure_4;
              obj10 = { drawerWidth: null, drawerHeight: null, drawerX: 0, drawerY: 0, animated: null, mode: null };
              obj10.drawerWidth = windowWidth;
              obj10.drawerHeight = diff;
              obj10.animated = tmp6;
              obj10.mode = modeToSet;
              tmp18 = closure_4(obj, obj10);
            }
          }
          if (modeToSet === tmp4.DISMISSED) {
            tmp11 = closure_2;
            if (closure_2) {
              tmp11 = obj.get().mode === tmp4.PIP;
            }
            tmp12 = closure_4;
            if (!connected) {
              if (!tmp11) {
                obj11 = { drawerY: null, mode: null };
                tmp13 = closure_9;
                num = 60;
                obj11.drawerY = closure_9.get().height + 60;
                obj11.mode = modeToSet;
              }
              tmp12Result = tmp12(obj, obj11);
              tmp15 = closure_5;
              tmp12Result1 = tmp12(closure_5, { gestureActive: false, x: 0, y: 0 });
            }
            obj12 = { mode: null };
            obj12.mode = modeToSet;
            obj11 = obj12;
          }
        }
      }
      return;
    }
  }
  let items5 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
  VoicePanelUITsx29.__closure = items5;
  VoicePanelUITsx29.__workletHash = 3427705263199;
  VoicePanelUITsx29.__initData = tmp22;
  const animatedReaction = _mod1652.useAnimatedReaction(VoicePanelUITsx28, VoicePanelUITsx29);
  const tmp3Result8 = _mod1652;
  const items6 = [
    closure_58,
    useReducedMotion,
    wrapperDimensions,
    wrapperOffset,
    connected,
    closure_57,
    mode,
    VoicePanelModes,
    _mod1705.scheduleOnRN,
    ExternalPipDefault.updateSourceTrackingView,
    isDockEnabled,
    VoicePanelDockSheet.getDockSheetTransform,
    isDockConnected,
    dockMinimizeProgress,
    dockHeight,
    tmp6,
    height,
    dockJoinMorphOrigin,
    dockEntryProgress,
    sheetExitProgress,
    dockPressProgress,
    spring_spring.withSpring,
    gesture,
    obj2,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  animatedStyle2 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  c16 = undefined;
  c17 = undefined;
  c18 = undefined;
  c19 = undefined;
  c20 = undefined;
  c21 = undefined;
  c22 = undefined;
  [
    tmp34,
    tmp35,
    tmp36,
    tmp37,
    tmp38,
    tmp39,
    tmp40,
    tmp41,
    tmp42,
    tmp43,
    tmp44,
    tmp45,
    tmp46,
    tmp47,
    tmp48,
    tmp49,
    tmp50,
    tmp51,
    tmp52,
    tmp53,
    tmp54,
    tmp55,
    tmp56,
    tmp57,
  ] = items6;
  class VoicePanelUITsx31 {
    constructor() {
      value = closure_0.get();
      gestureActive = !value;
      if (!value) {
        tmp2 = closure_1;
        gestureActive = closure_1.get().animated;
      }
      if (!gestureActive) {
        tmp3 = closure_2;
        gestureActive = closure_2.get().gestureActive;
      }
      obj = closure_2;
      value1 = closure_2.get();
      ({ gestureActive: gestureActive2, y } = value1);
      obj2 = closure_1;
      value2 = closure_1.get();
      ({ drawerY, drawerX } = value2);
      value3 = closure_3.get();
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
      items = [, , , ,];
      items[0] = closure_4;
      items[1] = closure_5;
      items[2] = closure_6;
      items[3] = closure_7;
      items[4] = closure_8;
      [tmp11, tmp12, tmp13, tmp14, tmp15] = items;
      class VoicePanelUITsx30 {
        constructor(arg0) {
          tmp = arg0;
          if (arg0) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp = closure_0.get() !== closure_1.DISMISSED;
          }
          if (tmp) {
            tmp4 = closure_2;
            tmp5 = closure_3;
            tmp6 = closure_2(closure_3);
          }
          return;
        }
      }
      items1 = [, , ,];
      items1[0] = tmp12;
      items1[1] = tmp13;
      items1[2] = tmp14;
      items1[3] = tmp15;
      VoicePanelUITsx30.__closure = items1;
      VoicePanelUITsx30.__workletHash = 15823716906644;
      VoicePanelUITsx30.__initData = tmp11;
      tmp17 = null;
      tmp16 = closure_9;
      if (closure_9) {
        tmp18 = closure_10;
        obj1 = {
          connected: null,
          progress: null,
          wrapperDimensions: null,
          dockHeight: null,
          dockBottom: null,
          dockJoinMorphOrigin: null,
          dockEntryProgress: null,
          sheetExitProgress: null,
          dockPressProgress: null,
        };
        tmp19 = closure_11;
        obj1.connected = closure_11.get();
        tmp20 = closure_12;
        obj1.progress = closure_12.get();
        obj1.wrapperDimensions = obj2.get();
        tmp21 = closure_13;
        obj1.dockHeight = closure_13.get();
        tmp22 = closure_14;
        tmp23 = closure_15;
        obj1.dockBottom = closure_14.get().height - closure_15;
        tmp24 = closure_16;
        obj1.dockJoinMorphOrigin = closure_16.get();
        tmp25 = closure_17;
        obj1.dockEntryProgress = closure_17.get();
        tmp26 = closure_18;
        obj1.sheetExitProgress = closure_18.get();
        tmp27 = closure_19;
        obj1.dockPressProgress = closure_19.get();
        tmp17 = closure_10(obj1);
      }
      if (null != tmp17) {
        obj11 = { transform: null };
        obj12 = { translateX: null };
        obj12.translateX = tmp17.translateX;
        items2 = [, ,];
        items2[0] = obj12;
        obj13 = { translateY: null };
        obj13.translateY = tmp17.translateY;
        items2[1] = obj13;
        obj14 = { scale: null };
        obj14.scale = tmp17.scale;
        items2[2] = obj14;
        obj11.transform = items2;
        obj17 = obj11;
      } else {
        tmp41 = closure_20;
        tmp28 = obj.get().gestureActive ? closure_21 : closure_22;
        str = "animate-never";
        str2 = "animate-never";
        if (gestureActive) {
          str2 = "animate-always";
        }
        obj15 = { translateX: null };
        tmp29 = sum1;
        tmp30 = tmp28;
        tmp31 = str2;
        tmp32 = VoicePanelUITsx30;
        obj15.translateX = tmp41(sum1, tmp28, str2, VoicePanelUITsx30);
        items3 = [,];
        items3[0] = obj15;
        tmp33 = obj.get().gestureActive ? closure_21 : closure_22;
        if (gestureActive) {
          str = "animate-always";
        }
        obj16 = { translateY: null };
        tmp34 = sum;
        tmp35 = tmp33;
        tmp36 = str;
        tmp37 = VoicePanelUITsx30;
        obj16.translateY = tmp41(sum, tmp33, str, VoicePanelUITsx30);
        items3[1] = obj16;
        if (tmp16) {
          items4 = [];
          items4[0] = { scale: 1 };
          items5 = items4;
        } else {
          items5 = [];
        }
        obj17 = { transform: null };
        num3 = 2;
        tmp38 = items3;
        tmp39 = items5;
        arraySpreadResult = HermesBuiltin.arraySpread(items5, 2);
        obj17.transform = items3;
      }
      return obj17;
    }
  }
  const items7 = [
    tmp35,
    tmp36,
    tmp37,
    tmp38,
    tmp39,
    tmp40,
    tmp41,
    tmp42,
    tmp43,
    tmp44,
    tmp45,
    tmp46,
    tmp47,
    tmp48,
    tmp49,
    tmp50,
    tmp51,
    tmp52,
    tmp53,
    tmp54,
    tmp55,
    tmp56,
    tmp57,
  ];
  VoicePanelUITsx31.__closure = items7;
  VoicePanelUITsx31.__workletHash = 11708402536811;
  VoicePanelUITsx31.__initData = tmp34;
  const animatedStyle = _mod1652.useAnimatedStyle(VoicePanelUITsx31);
  const tmp3Result9 = _mod1652;
  const dockSheetSurfaceFills = VoicePanelDockSheet.useDockSheetSurfaceFills();
  const tmp3Result10 = VoicePanelDockSheet;
  const items8 = [
    closure_59,
    isDockEnabled,
    VoicePanelDockSheet.getDockSheetSurfaceStyle,
    isDockConnected,
    dockPressProgress,
    dockJoinMorphOrigin,
    mode,
    dockMinimizeProgress,
    wrapperDimensions,
    dockSheetSurfaceFills,
    VoicePanelModes,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  animatedStyle2 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70] = items8;
  class VoicePanelUITsx32 {
    constructor() {
      if (closure_0) {
        tmp4 = closure_1;
        obj1 = {
          connected: null,
          dockPressProgress: null,
          dockJoinMorphOrigin: null,
          mode: null,
          sheetMorphProgress: null,
          wrapperDimensions: null,
        };
        tmp5 = closure_2;
        obj1.connected = closure_2.get();
        tmp6 = closure_3;
        obj1.dockPressProgress = closure_3.get();
        tmp7 = closure_4;
        obj1.dockJoinMorphOrigin = closure_4.get();
        tmp8 = closure_5;
        obj1.mode = closure_5.get();
        tmp9 = closure_6;
        num = 1;
        obj1.sheetMorphProgress = 1 - closure_6.get();
        tmp10 = closure_7;
        obj1.wrapperDimensions = closure_7.get();
        tmp11 = closure_8;
        size = closure_1(obj1, closure_8);
      } else {
        size = { width: null, height: null, pointerEvents: null };
        tmp = closure_7;
        size.width = closure_7.get().drawerWidth;
        size.height = closure_7.get().drawerHeight;
        tmp2 = closure_5;
        tmp3 = closure_9;
        str = "none";
        if (closure_5.get() === closure_9.PANEL) {
          str = "auto";
        }
        size.pointerEvents = str;
      }
      return size;
    }
  }
  const items9 = [tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70];
  VoicePanelUITsx32.__closure = items9;
  VoicePanelUITsx32.__workletHash = 6941134136719;
  VoicePanelUITsx32.__initData = tmp60;
  const animatedStyle1 = _mod1652.useAnimatedStyle(VoicePanelUITsx32);
  const tmp3Result11 = _mod1652;
  const items10 = [
    closure_60,
    isDockEnabled,
    VoicePanelDockSheet.getDockSheetShape,
    isDockConnected,
    dockJoinMorphOrigin,
    dockMinimizeProgress,
    wrapperDimensions,
    VoicePanelDockSheet.getDockSheetShadowOpacity,
    dockPressProgress,
    computeBorderRadii,
    mode,
    connected,
    spring_spring.withSpring,
    closure_1_10,
    tmp4,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  animatedStyle2 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  [tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86] = items10;
  class VoicePanelUITsx33 {
    constructor() {
      if (closure_0) {
        obj1 = {};
        tmp7 = closure_1;
        obj5 = { connected: null, dockJoinMorphOrigin: null, sheetMorphProgress: null, wrapperDimensions: null };
        tmp8 = closure_2;
        obj5.connected = closure_2.get();
        tmp9 = closure_3;
        obj5.dockJoinMorphOrigin = closure_3.get();
        tmp10 = closure_4;
        num = 1;
        obj5.sheetMorphProgress = 1 - closure_4.get();
        tmp11 = closure_5;
        obj5.wrapperDimensions = closure_5.get();
        tmp12 = obj1;
        merged = Object.assign(closure_1(obj5));
        tmp14 = closure_6;
        tmp15 = closure_7;
        value = closure_7.get();
        obj1.opacity = closure_6(value, 1 - closure_4.get());
        return obj1;
      } else {
        tmp = closure_8;
        obj = { mode: null, connected: null };
        tmp2 = closure_9;
        obj.mode = closure_9.get();
        tmp3 = closure_10;
        obj.connected = closure_10.get();
        obj6 = { borderRadius: null, backgroundColor: null };
        tmp4 = closure_11;
        tmp5 = closure_12;
        obj6.borderRadius = closure_11(closure_8(obj), closure_12);
        str = "transparent";
        if (!closure_10.get()) {
          tmp6 = closure_13;
          str = closure_13.maskDefaultBackground.backgroundColor;
        }
        obj6.backgroundColor = str;
        return obj6;
      }
    }
  }
  const items11 = [tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86];
  VoicePanelUITsx33.__closure = items11;
  VoicePanelUITsx33.__workletHash = 14541233734364;
  VoicePanelUITsx33.__initData = tmp72;
  animatedStyle2 = _mod1652.useAnimatedStyle(VoicePanelUITsx33);
  if (!ReleaseChannelUtils.isStable) {
    const items12 = [closure_61, windowDimensions];
    c0 = undefined;
    [tmp90, tmp91] = items12;
    class VoicePanelUITsx34 {
      constructor() {
        return closure_0.get();
      }
    }
    const items13 = [tmp91];
    VoicePanelUITsx34.__closure = items13;
    VoicePanelUITsx34.__workletHash = 12948006080363;
    VoicePanelUITsx34.__initData = tmp90;
    const items14 = [closure_62, _mod1705.scheduleOnRN, log];
    c0 = undefined;
    c1 = undefined;
    [tmp95, tmp96, tmp97] = items14;
    class VoicePanelUITsx35 {
      constructor(arg0) {
        tmp = closure_0(closure_1, "Window dimensions changed:", JSON.stringify(arg0));
        return;
      }
    }
    const items15 = [tmp96, tmp97];
    VoicePanelUITsx35.__closure = items15;
    VoicePanelUITsx35.__workletHash = 6546169427607;
    VoicePanelUITsx35.__initData = tmp95;
    const animatedReaction1 = _mod1652.useAnimatedReaction(VoicePanelUITsx34, VoicePanelUITsx35);
    const tmp3Result13 = _mod1652;
    const items16 = [closure_63, wrapperDimensions];
    c0 = undefined;
    [tmp101, tmp102] = items16;
    class VoicePanelUITsx36 {
      constructor() {
        return closure_0.get();
      }
    }
    const items17 = [tmp102];
    VoicePanelUITsx36.__closure = items17;
    class VoicePanelUITsx27 {
      constructor() {
        return closure_0.get().height;
      }
    }
    VoicePanelUITsx36.__workletHash = 4306720524073;
    VoicePanelUITsx36.__initData = tmp101;
    const items18 = [closure_64, _mod1705.scheduleOnRN, log];
    c0 = undefined;
    c1 = undefined;
    [tmp105, tmp106, tmp107] = items18;
    class VoicePanelUITsx37 {
      constructor(arg0) {
        tmp = closure_0(closure_1, "Wrapper dimensions changed:", JSON.stringify(arg0));
        return;
      }
    }
    const items19 = [tmp106, tmp107];
    VoicePanelUITsx37.__closure = items19;
    VoicePanelUITsx37.__workletHash = 17110326766730;
    VoicePanelUITsx37.__initData = tmp105;
    const animatedReaction2 = _mod1652.useAnimatedReaction(VoicePanelUITsx36, VoicePanelUITsx37);
    const tmp3Result14 = _mod1652;
  }
  const items20 = [tmp4.wrapper, animatedStyle1, animatedStyle2, animatedStyle];
  const memo = noop.useMemo(
    () => ({
      wrapperRootStyles: _undefined.wrapper,
      wrapperTransformStyles,
      wrapperSurfaceStyles,
      wrapperSurfaceLayerStyles: animatedStyle2,
    }),
    items20,
  );
  ({ wrapperTransformStyles, wrapperSurfaceStyles, wrapperSurfaceLayerStyles } = memo);
  let obj4 = { style: memo.wrapperRootStyles, pointerEvents: "box-none", children: null };
  if (noop.useContext(VoicePanelStateContextDefault).isDockEnabled) {
    let obj5 = { wrapperTransformStyles, wrapperSurfaceStyles, wrapperSurfaceLayerStyles, children };
    let tmp110Result = collapsedCategories(DockSheetLayers, obj5);
  } else {
    let obj6 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: null };
    let obj7 = { style: wrapperSurfaceStyles, layout: layoutTransition, children: null };
    class VoicePanelUITsx34 {
      constructor() {
        return closure_0.get();
      }
    }
    let obj8 = { style: null, pointerEvents: "none" };
    const items21 = [StyleSheet.absoluteFill, wrapperSurfaceLayerStyles];
    obj8.style = items21;
    const items22 = [collapsedCategories(module_1652.View, obj8), children];
    obj7.children = items22;
    obj6.children = expandedHeight(tmp112, obj7);
    tmp110Result = collapsedCategories(module_1652.View, obj6);
  }
  obj4.children = tmp110Result;
  return collapsedCategories(module_1652.View, obj4);
}
function DockSheetLayers(arg0) {
  ({ wrapperTransformStyles, wrapperSurfaceStyles, wrapperSurfaceLayerStyles, children } = arg0);
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ channelId, handleDockSheetLayout } = context);
  const tmp2 = closure_28();
  const tmp5 = useVoicePanelDockMicLiveDefault(channelId);
  const obj = { children: null };
  obj2 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: null };
  items = [collapsedCategories(VoicePanelDockGlow.VoicePanelDockGlow, { micLive: tmp5 }), ,];
  const obj3 = { style: null, pointerEvents: "none" };
  const items1 = [
    tmp2.dockSurfaceShadow,
    { boxShadow: useDockBoxShadowDefault(native.Shadow.SHADOW_TOP_HIGH) },
    wrapperSurfaceLayerStyles,
  ];
  obj3.style = items1;
  items[1] = collapsedCategories(module_1652.View, obj3);
  const obj4 = { style: null, onLayout: handleDockSheetLayout, layout: layoutTransition, children };
  const items2 = [tmp2.dockSurfaceClip, wrapperSurfaceStyles];
  obj4.style = items2;
  items[2] = collapsedCategories(module_1652.View, obj4);
  obj2.children = items;
  const items3 = [
    expandedHeight(module_1652.View, obj2),
    collapsedCategories(VoicePanelDockGlow.VoicePanelDockBottomLine, { micLive: tmp5 }),
  ];
  obj.children = items3;
  return expandedHeight(dependencyMap, obj);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
({ Pressable: closure_6, ScrollView } = get_ActivityIndicator);
const VoicePanelConstants = fn(11372);
({
  BORDER_RADIUS_PHYSICS: closure_10,
  DEFAULT_BORDER_RADIUS,
  DRAWER_SPRING_PHYSICS,
  IS_IOS: closure_11,
  MODE_CHANGE_PHYSICS,
  VOICE_PANEL_CHUNK_DIVISOR,
} = VoicePanelConstants);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
({ LAYOUT_PHYSICS, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_14, DEFAULT_BORDER_RADIUS_PIP } = VoicePanelConstants);
const VoicePanelControlsModes = fn(11370).VoicePanelControlsModes;
const isActivityParticipant = fn(5807).isActivityParticipant;
const POP_RESISTANCE = fn(11373).POP_RESISTANCE;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
log = new LoggerDefault("VoicePanelUI");
let items = [
  {
    code: "(function layoutTransition_VoicePanelUITsx1(values){let[withSpring,LAYOUT_PHYSICS]=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'respect-motion-settings'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'respect-motion-settings'),width:withSpring(values.targetWidth,LAYOUT_PHYSICS,'respect-motion-settings'),height:withSpring(values.targetHeight,LAYOUT_PHYSICS,'respect-motion-settings')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};})",
  },
  fn(5763).withSpring,
  LAYOUT_PHYSICS,
];
let closure_129_0;
let closure_129_1;
[tmp6, tmp7, tmp8] = items;
function layoutTransition(channelId) {
  const obj = { animations: null, initialValues: null };
  const size = {
    originX: require(channelId.targetOriginX, importDefault, "respect-motion-settings"),
    originY: require(channelId.targetOriginY, importDefault, "respect-motion-settings"),
    width: require(channelId.targetWidth, importDefault, "respect-motion-settings"),
    height: require(channelId.targetHeight, importDefault, "respect-motion-settings"),
  };
  obj.animations = size;
  obj.initialValues = {
    originX: channelId.currentOriginX,
    originY: channelId.currentOriginY,
    width: channelId.currentWidth,
    height: channelId.currentHeight,
  };
  return obj;
}
let items1 = [tmp7, tmp8];
layoutTransition.__closure = items1;
layoutTransition.__workletHash = 3459874131918;
layoutTransition.__initData = tmp6;
let obj = {};
let merged = Object.assign(LAYOUT_PHYSICS);
obj.damping = 0;
let items2 = [
  {
    code: "(function scrollViewLayoutTransition_VoicePanelUITsx2(values){let[withSpring,LAYOUT_PHYSICS,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS]=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'respect-motion-settings'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'respect-motion-settings'),width:withSpring(values.targetWidth,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'respect-motion-settings'),height:withSpring(values.targetHeight,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'respect-motion-settings')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};})",
  },
  fn(5763).withSpring,
  LAYOUT_PHYSICS,
  obj,
];
let closure_130_0;
let closure_130_1;
let closure_130_2;
[tmp10, tmp11, tmp12, tmp13] = items2;
function scrollViewLayoutTransition(originX) {
  const obj = { animations: null, initialValues: null };
  const size = {
    originX: require(originX.targetOriginX, importDefault, "respect-motion-settings"),
    originY: require(originX.targetOriginY, importDefault, "respect-motion-settings"),
    width: require(originX.targetWidth, dependencyMap, "respect-motion-settings"),
    height: require(originX.targetHeight, dependencyMap, "respect-motion-settings"),
  };
  obj.animations = size;
  obj.initialValues = {
    originX: originX.currentOriginX,
    originY: originX.currentOriginY,
    width: originX.currentWidth,
    height: originX.currentHeight,
  };
  return obj;
}
let items3 = [tmp11, tmp12, tmp13];
scrollViewLayoutTransition.__closure = items3;
scrollViewLayoutTransition.__workletHash = 890837995397;
scrollViewLayoutTransition.__initData = tmp10;
let obj2 = {};
let merged1 = Object.assign(DRAWER_SPRING_PHYSICS);
obj2.mass = 0.3;
obj2.damping = 100;
obj2.stiffness = 100;
let obj3 = {};
const merged2 = Object.assign(MODE_CHANGE_PHYSICS);
obj3.mass = 2;
let items4 = [
  {
    code: "(function computeViewableChunksFromScrollPosition_VoicePanelUITsx3(scrollPosition,windowHeight,contentHeight,extraChunks=1){let[VOICE_PANEL_CHUNK_DIVISOR]=this.__closure;const chunkSize=Math.ceil(windowHeight/VOICE_PANEL_CHUNK_DIVISOR);let start=Math.max(Math.floor(scrollPosition/chunkSize)-extraChunks,0);const end=Math.min(start+VOICE_PANEL_CHUNK_DIVISOR+extraChunks*2,Math.ceil(contentHeight/chunkSize));start=Math.max(end-VOICE_PANEL_CHUNK_DIVISOR-extraChunks*2,0);return{start:start,end:end};})",
  },
  VOICE_PANEL_CHUNK_DIVISOR,
];
let closure_131_0;
[tmp16, tmp17] = items4;
function computeViewableChunksFromScrollPosition(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 1;
  }
  const rounded = Math.ceil(arg1 / require);
  const sum = Math.max(Math.floor(arg0 / rounded) - num, 0) + require + 2 * num;
  const bound = Math.min(sum, Math.ceil(arg2 / rounded));
  return { start: Math.max(bound - require - 2 * num, 0), end: bound };
}
let items5 = [tmp17];
computeViewableChunksFromScrollPosition.__closure = items5;
computeViewableChunksFromScrollPosition.__workletHash = 11811053676564;
computeViewableChunksFromScrollPosition.__initData = tmp16;
const createStyles = fn(5142);
let obj4 = {
  accessibilityView: null,
  wrapper: null,
  maskDefaultBackground: null,
  dockSurfaceClip: null,
  dockSurfaceShadow: null,
  scrollView: null,
  scrollViewContent: null,
  shade: null,
  shadePressable: null,
};
let obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj6.overflow = "hidden";
obj4.accessibilityView = obj6;
let obj7 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj7.alignItems = "flex-start";
obj7.zIndex = 1;
obj4.wrapper = obj7;
let tmp5 = new LoggerDefault("VoicePanelUI");
obj4.maskDefaultBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj4.dockSurfaceClip = { overflow: "hidden" };
obj4.dockSurfaceShadow = { position: "absolute", top: 0, left: 0 };
let obj9 = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj9.borderTopLeftRadius = DEFAULT_BORDER_RADIUS;
obj9.borderTopRightRadius = DEFAULT_BORDER_RADIUS;
obj4.scrollView = obj9;
obj4.scrollViewContent = { flexGrow: 1, flexShrink: 0 };
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj4.shade = { backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
obj4.shadePressable = { flexGrow: 1 };
let closure_28 = createStyles.createStyles(obj4);
let closure_29 = module_1652.createAnimatedComponent(ScrollView);
const MetaQuestUtils = fn(1624);
let closure_30 = MetaQuestUtils.isMetaQuest();
let closure_31 = {
  code: "(function VoicePanelUITsx4(){let[gestureState,connected,mode]=this.__closure;return{gestureActive:gestureState.get().active,connected:connected.get(),mode:mode.get()};})",
};
let closure_32 = {
  code: "(function VoicePanelUITsx5(props,previous){let[cheapWorkletShallowEqual,VoicePanelModes,scheduleOnRN,setPanelFullscreen,setPanelOpen,setPanelPIP]=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{gestureActive:gestureActive,connected:connected,mode:mode}=props;if(!connected||gestureActive||mode!==VoicePanelModes.PANEL){scheduleOnRN(setPanelFullscreen,false);}else{scheduleOnRN(setPanelFullscreen,true);}if(mode===VoicePanelModes.PANEL){scheduleOnRN(setPanelOpen,true);}else{scheduleOnRN(setPanelOpen,false);}if(mode===VoicePanelModes.PIP){scheduleOnRN(setPanelPIP,true);}else{scheduleOnRN(setPanelPIP,false);}})",
};
let closure_33 = { code: "(function VoicePanelUITsx6(){let[mode]=this.__closure;return mode.get();})" };
let closure_34 = {
  code: "(function VoicePanelUITsx7(mode,previous){let[VoicePanelModes,updateSharedValueIfChanged,gestureState]=this.__closure;if(mode===VoicePanelModes.DISMISSED&&previous!==VoicePanelModes.DISMISSED){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}})",
};
let closure_35 = {
  code: "(function VoicePanelUITsx8(){let[mode,VoicePanelModes,focused]=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;})",
};
let closure_36 = {
  code: "(function VoicePanelUITsx9(manualId,previousManualId){let[scheduleOnRN,handleFocusChange]=this.__closure;if(manualId!==previousManualId){scheduleOnRN(handleFocusChange,manualId);}})",
};
let closure_37 = {
  code: "(function VoicePanelUITsx10(){let[connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,scheduleOnRN,showControls,hideControls]=this.__closure;if(!connected.get())return;if(mode.get()===VoicePanelModes.PIP){}else if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){scheduleOnRN(showControls,{debounce:true});}else{scheduleOnRN(hideControls,{debounce:true});}})",
};
let closure_38 = {
  code: "(function VoicePanelUITsx11(event,manager){let[IS_IOS,windowDimensions,safeArea,gestureState,isFocusedVideoZoomed,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes]=this.__closure;const touch=event.allTouches[0];if(IS_IOS&&touch!=null&&touch.absoluteY>windowDimensions.get().height-safeArea.get().bottom){gestureState.set({...gestureState.get(),cancel:true});manager.activate();return;}if(isFocusedVideoZoomed.get()||mode.get()===VoicePanelModes.PANEL&&controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){gestureState.set({...gestureState.get(),cancel:true});manager.fail();}})",
};
let closure_39 = {
  code: "(function VoicePanelUITsx12(event){let[gestureState,isDockEnabled,mode,VoicePanelModes,updateSharedValueIfChanged,wrapperOffset,connected,controlsSpecs,VoicePanelControlsModes,scheduleOnRN,controlsLock]=this.__closure;if(gestureState.get().cancel)return;if(!isDockEnabled||mode.get()===VoicePanelModes.PANEL){updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});}gestureState.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:false,requiresPop:connected.get()&&mode.get()===VoicePanelModes.PANEL});if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){scheduleOnRN(controlsLock.lock);}})",
};
let closure_40 = {
  code: "(function VoicePanelUITsx13(event,manager){let[State,gestureState,mode,VoicePanelModes,scrollPosition,isQuest,MIN_GESTURE_MOVE,focused,isDockEnabled,scheduleOnRN,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset,lockScrolling]=this.__closure;if(event.state!==State.BEGAN||gestureState.get().active||gestureState.get().cancel)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=gestureState.get().absoluteYStart-absoluteY;const xDiff=gestureState.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;let startGesture=false;if(mode.get()===VoicePanelModes.PANEL){var _focused$get;const scrollPos=Math.floor(scrollPosition.get());if(yDiff<0&&scrollPos<=0){if(isQuest){startGesture=absoluteMovement>MIN_GESTURE_MOVE;}else{startGesture=true;}}else if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!=null&&isNotPullDownGesture){manager.fail();}}else if(!isDockEnabled&&mode.get()===VoicePanelModes.PIP&&absoluteMovement>MIN_GESTURE_MOVE){startGesture=true;scheduleOnRN(triggerIOSHaptic);}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true});gestureState.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY+scrollPosition.get(),cancel:false,active:true,requiresPop:gestureState.get().requiresPop});lockScrolling.set(true);manager.activate();}else{updateSharedValueIfChanged(gestureState,{absoluteYStart:absoluteY,absoluteXStart:absoluteX});}})",
};
let closure_41 = {
  code: "(function VoicePanelUITsx14(event){let[gestureState,isDockEnabled,mode,VoicePanelModes,updateSharedValueIfChanged,wrapperOffset,connected,lockScrolling,scrollPosition,PIP_POP_HEIGHT,POP_RESISTANCE,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes]=this.__closure;if(gestureState.get().cancel)return;if(!isDockEnabled&&mode.get()===VoicePanelModes.PIP){updateSharedValueIfChanged(wrapperOffset,{x:(gestureState.get().absoluteXStart-event.absoluteX)*-1,y:(gestureState.get().absoluteYStart-event.absoluteY)*-1});return;}const minYOffset=0;let newYOffset=(gestureState.get().absoluteYStart-event.absoluteY)*-1;if(!isDockEnabled&&connected.get()&&!gestureState.get().requiresPop&&newYOffset<=minYOffset){gestureState.set({...gestureState.get(),requiresPop:true});}if(lockScrolling.get()&&newYOffset<minYOffset){lockScrolling.set(false);}else if(!lockScrolling.get()&&scrollPosition.get()<=0){lockScrolling.set(true);}if(isDockEnabled){if(connected.get()){updateSharedValueIfChanged(gestureState,{requiresPop:newYOffset<=PIP_POP_HEIGHT});}}else if(gestureState.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{gestureState.set({...gestureState.get(),requiresPop:false});scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});})",
};
let closure_42 = {
  code: "(function VoicePanelUITsx15(_e){let[lockScrolling,gestureState,updateSharedValueIfChanged,isDockEnabled,mode,VoicePanelModes,wrapperOffset]=this.__closure;lockScrolling.set(false);const wasActive=gestureState.get().active;updateSharedValueIfChanged(gestureState,{cancel:false,active:false});if(!isDockEnabled||wasActive||mode.get()===VoicePanelModes.PANEL){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}console.log('onTouchesCancelled');})",
};
let closure_43 = {
  code: "(function VoicePanelUITsx16(event){let[gestureState,isDockEnabled,mode,VoicePanelModes,lockScrolling,wrapperDimensions,connected,wrapperOffset,MIN_DISMISS_MOVE_PERCENTAGE,SHEET_COMMIT_FLING_VELOCITY,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,committedMode,setMode,updateSharedValueIfChanged,dismissPanel,calculatePIPPositionFromVelocity,windowDimensions,safeArea]=this.__closure;if(gestureState.get().cancel)return;const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(isDockEnabled){if(mode.get()!==VoicePanelModes.PANEL){lockScrolling.set(false);return;}const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;if(velocityY>0){if(connected.get()){if(wrapperOffset.get().y>panelHeight*MIN_DISMISS_MOVE_PERCENTAGE||velocityY>SHEET_COMMIT_FLING_VELOCITY){scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);committedMode.set(VoicePanelModes.PIP);scheduleOnRN(setMode,VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});return;}}else if(wrapperOffset.get().y>panelHeight*MIN_DISMISS_MOVE_PERCENTAGE){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});scheduleOnRN(dismissPanel);return;}}updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);return;}if(mode.get()===VoicePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else if(mode.get()===VoicePanelModes.PANEL){if(velocityY>0){if(connected.get()){if(!gestureState.get().requiresPop){scheduleOnRN(setMode,VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}else{const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;const dismissThreshold=panelHeight*MIN_DISMISS_MOVE_PERCENTAGE;if(wrapperOffset.get().y>dismissThreshold){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});scheduleOnRN(dismissPanel);return;}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}})",
};
let closure_44 = {
  code: "(function VoicePanelUITsx17(){let[isDockEnabled,updateSharedValueIfChanged,gestureState,wrapperOffset,lockScrolling,scheduleOnRN,controlsLock,mode,VoicePanelModes]=this.__closure;if(isDockEnabled){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});lockScrolling.set(false);scheduleOnRN(controlsLock.unlock);return;}const pendingModeChange=wrapperOffset.get().y!==0&&mode.get()===VoicePanelModes.PANEL;if(!pendingModeChange){updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}scheduleOnRN(controlsLock.unlock);})",
};
let closure_45 = {
  code: "(function onBeginDrag_VoicePanelUITsx18(event){let[scrollPosition,dragScrolling]=this.__closure;scrollPosition.set(event.contentOffset.y);dragScrolling.set(true);})",
};
let closure_46 = {
  code: "(function onEndDrag_VoicePanelUITsx19(){let[dragScrolling]=this.__closure;dragScrolling.set(false);})",
};
let closure_47 = {
  code: "(function onMomentumEnd_VoicePanelUITsx20(){let[dragScrolling]=this.__closure;dragScrolling.set(false);})",
};
let closure_48 = {
  code: "(function onScroll_VoicePanelUITsx21(event){let[lockScrolling,isSnappingBack,scrollPosition,scrollTo,scrollerRef,computeViewableChunksFromScrollPosition,windowDimensions,scrollableRegionSize,updateSharedValueIfChanged,viewableChunks]=this.__closure;if(lockScrolling.get()){if(isSnappingBack.get()){return;}if(scrollPosition.get()<0){scrollPosition.set(0);}const targetScrollPosition=scrollPosition.get();if(Math.abs(event.contentOffset.y-targetScrollPosition)<0.1){return;}isSnappingBack.set(true);scrollTo(scrollerRef,0,targetScrollPosition,false);isSnappingBack.set(false);}else{let newViewableChunks;if(scrollPosition.get()!==event.contentOffset.y){newViewableChunks=computeViewableChunksFromScrollPosition(scrollPosition.get(),windowDimensions.get().height,scrollableRegionSize.get());}scrollPosition.set(event.contentOffset.y);newViewableChunks!=null&&updateSharedValueIfChanged(viewableChunks,newViewableChunks);}})",
};
let closure_49 = { code: "(function VoicePanelUITsx22(){let[mode]=this.__closure;return mode.get();})" };
let closure_50 = {
  code: "(function VoicePanelUITsx23(mode,previous){let[VoicePanelModes,lockScrolling]=this.__closure;if(previous==null||mode===previous)return;if(mode===VoicePanelModes.PANEL&&previous===VoicePanelModes.PIP){lockScrolling.set(false);}else if(mode===VoicePanelModes.PIP){lockScrolling.set(true);}})",
};
let closure_51 = {
  code: "(function VoicePanelUITsx24(){let[mode,VoicePanelModes,focused,lockScrolling,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter]=this.__closure;const isPIPMode=mode.get()===VoicePanelModes.PIP;const disableScroll=isPIPMode||focused.get()!=null;return{pointerEvents:isPIPMode?'none':'auto',scrollEnabled:!disableScroll,showsVerticalScrollIndicator:lockScrolling.get()?false:!disableScroll,scrollIndicatorInsets:{top:calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height-safeArea.get().top,bottom:safeArea.get().bottom}};})",
};
let closure_52 = {
  code: "(function VoicePanelUITsx25(){let[isDockConnected,sheetExitProgress,dockJoinMorphOrigin,windowDimensions,dockMinimizeProgress,mode,VoicePanelModes,connected,gestureState,wrapperDimensions,wrapperOffset]=this.__closure;if(isDockConnected.get()){const exitShade=1-sheetExitProgress.get();const join=dockJoinMorphOrigin.get();if(join!=null){const screenSize=windowDimensions.get().height;const startShade=Math.min(Math.max((screenSize-join.y)/screenSize,0),1);return startShade*(1-dockMinimizeProgress.get())*exitShade;}return(1-dockMinimizeProgress.get())*exitShade;}switch(mode.get()){case VoicePanelModes.PIP:case VoicePanelModes.DISMISSED:return 0;default:{if(connected.get()&&gestureState.get().active&&gestureState.get().requiresPop){return 1;}const drawerTop=wrapperDimensions.get().drawerY+wrapperOffset.get().y;const screenSize=windowDimensions.get().height;const percentage=(screenSize-drawerTop)/screenSize;return Math.min(Math.max(percentage,0),1);}}})",
};
let items6 = [
  {
    code: "(function computeBorderRadii_VoicePanelUITsx26({mode:mode,connected:connected}){let[VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP,DEFAULT_BORDER_RADIUS]=this.__closure;if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return!connected?DEFAULT_BORDER_RADIUS:0;})",
  },
  VoicePanelModes,
  DEFAULT_BORDER_RADIUS_PIP,
  DEFAULT_BORDER_RADIUS,
];
let closure_132_0;
let closure_132_1;
let closure_132_2;
[tmp21, tmp22, tmp23, tmp24] = items6;
function computeBorderRadii(mode) {
  if (mode.mode === require.PIP) {
    let num = importDefault;
  } else {
    num = 0;
    if (!tmp) {
      num = dependencyMap;
    }
  }
  return num;
}
let items7 = [tmp22, tmp23, tmp24];
computeBorderRadii.__closure = items7;
computeBorderRadii.__workletHash = 10099232782945;
computeBorderRadii.__initData = tmp21;
let closure_54 = {
  code: "(function VoicePanelUITsx27(){let[controlsSpecs]=this.__closure;return controlsSpecs.get().height;})",
};
let closure_55 = {
  code: "(function VoicePanelUITsx28(){let[mode,connected,windowDimensions,safeArea,focused,pipState,controlsHeight,preJoinContentSize,globalStatusIndicatorHeight]=this.__closure;return{modeToSet:mode.get(),connected:connected.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get(),focused:focused.get(),pipState:pipState,controlsHeight:controlsHeight.get(),preJoinContentSize:preJoinContentSize.get(),globalStatusIndicatorHeight:globalStatusIndicatorHeight};})",
};
let closure_56 = {
  code: "(function VoicePanelUITsx29(props,previous){let[cheapWorkletShallowEqual,VoicePanelModes,isDockEnabled,wrapperDimensions,updateSharedValueIfChanged,wrapperOffset,getMaxPanelWidth,getPanelX,roundToNearestPixel,windowDimensions]=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{modeToSet:modeToSet,connected:connected,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,pipState:pipState,controlsHeight:controlsHeight,preJoinContentSize:preJoinContentSize,globalStatusIndicatorHeight:globalStatusIndicatorHeight}=props;if(modeToSet===VoicePanelModes.PIP&&!isDockEnabled&&pipState.id==null){return;}const animated=previous!=null?windowHeight===previous.windowHeight&&windowWidth===previous.windowWidth&&safeArea.top===previous.safeArea.top&&safeArea.bottom===previous.safeArea.bottom&&safeArea.left===previous.safeArea.left&&safeArea.right===previous.safeArea.right:true;let{drawerX:drawerX,drawerY:drawerY}=wrapperDimensions.get();const availableHeight=windowHeight-globalStatusIndicatorHeight;if(modeToSet===VoicePanelModes.PANEL){if(connected){drawerX=0;drawerY=0;updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else{const drawerWidth=getMaxPanelWidth({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeArea.left,safeAreaRight:safeArea.right});drawerX=getPanelX(windowWidth,drawerWidth);drawerY=roundToNearestPixel(Math.max(availableHeight-preJoinContentSize-controlsHeight-safeArea.bottom,availableHeight-0.8*availableHeight));updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:drawerWidth,drawerHeight:availableHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});}}else if(modeToSet===VoicePanelModes.PIP&&isDockEnabled){updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:availableHeight,drawerX:0,drawerY:0,animated:animated,mode:modeToSet});}else if(modeToSet===VoicePanelModes.DISMISSED){const isLeavingDock=isDockEnabled&&wrapperDimensions.get().mode===VoicePanelModes.PIP;if(connected||isLeavingDock){updateSharedValueIfChanged(wrapperDimensions,{mode:modeToSet});}else{updateSharedValueIfChanged(wrapperDimensions,{drawerY:windowDimensions.get().height+60,mode:modeToSet});}updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}})",
};
let closure_57 = {
  code: "(function VoicePanelUITsx30(finished){let[mode,VoicePanelModes,scheduleOnRN,updateSourceTrackingView]=this.__closure;if(finished&&mode.get()!==VoicePanelModes.DISMISSED){scheduleOnRN(updateSourceTrackingView);}})",
};
let closure_58 = {
  code: "(function VoicePanelUITsx31(){let[useReducedMotion,wrapperDimensions,wrapperOffset,connected,_worklet_15823716906644_init_data,mode,VoicePanelModes,scheduleOnRN,updateSourceTrackingView,isDockEnabled,getDockSheetTransform,isDockConnected,dockMinimizeProgress,dockHeight,windowDimensionsIgnoringKeyboard,globalStatusIndicatorHeight,dockJoinMorphOrigin,dockEntryProgress,sheetExitProgress,dockPressProgress,withSpring,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,DRAWER_SIZE_PHYSICS]=this.__closure;const animateXY=!useReducedMotion.get()&&wrapperDimensions.get().animated||wrapperOffset.get().gestureActive;const{gestureActive:gestureActive,y:offsetY,x:offsetX}=wrapperOffset.get();let{drawerY:y,drawerX:x}=wrapperDimensions.get();const applyGestureOffset=!connected.get()&&(gestureActive||offsetY!==0);if(applyGestureOffset){y+=Math.max(offsetY,0);x+=offsetX;}const updateSourceTrackingViewHelper=function VoicePanelUITsx30Factory([_worklet_15823716906644_init_data,mode,VoicePanelModes,scheduleOnRN,updateSourceTrackingView]){const VoicePanelUITsx30=function(finished){if(finished&&mode.get()!==VoicePanelModes.DISMISSED){scheduleOnRN(updateSourceTrackingView);}};VoicePanelUITsx30.__closure=[mode,VoicePanelModes,scheduleOnRN,updateSourceTrackingView];VoicePanelUITsx30.__workletHash=15823716906644;VoicePanelUITsx30.__initData=_worklet_15823716906644_init_data;return VoicePanelUITsx30;}([_worklet_15823716906644_init_data,mode,VoicePanelModes,scheduleOnRN,updateSourceTrackingView]);const dockTransform=isDockEnabled?getDockSheetTransform({connected:isDockConnected.get(),progress:dockMinimizeProgress.get(),wrapperDimensions:wrapperDimensions.get(),dockHeight:dockHeight.get(),dockBottom:windowDimensionsIgnoringKeyboard.get().height-globalStatusIndicatorHeight,dockJoinMorphOrigin:dockJoinMorphOrigin.get(),dockEntryProgress:dockEntryProgress.get(),sheetExitProgress:sheetExitProgress.get(),dockPressProgress:dockPressProgress.get()}):null;if(dockTransform!=null){return{transform:[{translateX:dockTransform.translateX},{translateY:dockTransform.translateY},{scale:dockTransform.scale}]};}return{transform:[{translateX:withSpring(x,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},{translateY:withSpring(y,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},...(isDockEnabled?[{scale:1}]:[])]};})",
};
let closure_59 = {
  code: "(function VoicePanelUITsx32(){let[isDockEnabled,getDockSheetSurfaceStyle,isDockConnected,dockPressProgress,dockJoinMorphOrigin,mode,dockMinimizeProgress,wrapperDimensions,dockSurfaceFills,VoicePanelModes]=this.__closure;if(isDockEnabled){return getDockSheetSurfaceStyle({connected:isDockConnected.get(),dockPressProgress:dockPressProgress.get(),dockJoinMorphOrigin:dockJoinMorphOrigin.get(),mode:mode.get(),sheetMorphProgress:1-dockMinimizeProgress.get(),wrapperDimensions:wrapperDimensions.get()},dockSurfaceFills);}return{width:wrapperDimensions.get().drawerWidth,height:wrapperDimensions.get().drawerHeight,pointerEvents:mode.get()===VoicePanelModes.PANEL?'auto':'none'};})",
};
let closure_60 = {
  code: "(function VoicePanelUITsx33(){let[isDockEnabled,getDockSheetShape,isDockConnected,dockJoinMorphOrigin,dockMinimizeProgress,wrapperDimensions,getDockSheetShadowOpacity,dockPressProgress,computeBorderRadii,mode,connected,withSpring,BORDER_RADIUS_PHYSICS,styles]=this.__closure;if(isDockEnabled){return{...getDockSheetShape({connected:isDockConnected.get(),dockJoinMorphOrigin:dockJoinMorphOrigin.get(),sheetMorphProgress:1-dockMinimizeProgress.get(),wrapperDimensions:wrapperDimensions.get()}),opacity:getDockSheetShadowOpacity(dockPressProgress.get(),1-dockMinimizeProgress.get())};}const borderRadius=computeBorderRadii({mode:mode.get(),connected:connected.get()});return{borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS),backgroundColor:connected.get()?'transparent':styles.maskDefaultBackground.backgroundColor};})",
};
let closure_61 = {
  code: "(function VoicePanelUITsx34(){let[windowDimensions]=this.__closure;return windowDimensions.get();})",
};
let closure_62 = {
  code: "(function VoicePanelUITsx35(value){let[scheduleOnRN,log]=this.__closure;scheduleOnRN(log,'Window dimensions changed:',JSON.stringify(value));})",
};
let closure_63 = {
  code: "(function VoicePanelUITsx36(){let[wrapperDimensions]=this.__closure;return wrapperDimensions.get();})",
};
let closure_64 = {
  code: "(function VoicePanelUITsx37(value){let[scheduleOnRN,log]=this.__closure;scheduleOnRN(log,'Wrapper dimensions changed:',JSON.stringify(value));})",
};
let closure_67 = { mass: 0.6, damping: 30, stiffness: 400, overshootClamping: true };
let closure_68 = {
  code: "(function VoicePanelUITsx38(){let[isDockConnected,opacity,withSpring,DrawerShadeOpacityPhysics]=this.__closure;const followsMorph=isDockConnected.get();return{opacity:followsMorph?opacity.get():withSpring(opacity.get(),DrawerShadeOpacityPhysics),pointerEvents:opacity.get()===0?'none':'auto'};})",
};
let closure_69 = noop.memo(function DrawerShade(arg0) {
  ({ opacity, onPress } = arg0);
  const tmp = closure_28();
  items = [
    closure_68,
    noop.useContext(VoicePanelStateContextDefault).isDockConnected,
    opacity,
    spring_spring.withSpring,
    closure_67,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  class VoicePanelUITsx38 {
    constructor() {
      if (closure_0.get()) {
        tmp4 = closure_1;
        value = closure_1.get();
        obj = closure_1;
      } else {
        tmp = closure_2;
        obj = closure_1;
        tmp2 = closure_3;
        value = closure_2(closure_1.get(), closure_3);
      }
      obj1 = { opacity: value, pointerEvents: null };
      str = "auto";
      if (0 === obj.get()) {
        str = "none";
      }
      obj1.pointerEvents = str;
      return obj1;
    }
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8];
  VoicePanelUITsx38.__closure = items1;
  VoicePanelUITsx38.__workletHash = 7112892352003;
  VoicePanelUITsx38.__initData = tmp4;
  const animatedStyle = _mod1652.useAnimatedStyle(VoicePanelUITsx38);
  obj2 = {
    style: null,
    importantForAccessibility: "no-hide-descendants",
    accessibilityElementsHidden: true,
    children: collapsedCategories(timestampProducer, { style: tmp.shadePressable, onPress }),
  };
  const items2 = [StyleSheet.absoluteFill, tmp.shade, animatedStyle];
  obj2.style = items2;
  return collapsedCategories(module_1652.View, obj2);
});
let obj10 = { backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BACKGROUND, zIndex: 0 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelUI.tsx");

export default noop.memo(function VoicePanelUI() {
  let tmp = closure_28();
  let tmp2 = importDefault;
  let tmp105Result3 = dependencyMap;
  const context = noop.useContext(VoicePanelStateContextDefault);
  ({ scrollPosition, dragScrolling, channelId } = context);
  _require = channelId;
  const isDockEnabled = context.isDockEnabled;
  const tmp6 = c3(noop.useState(false), 2);
  noop.useRef(-1);
  items = [channelId];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    clearTimeout(_undefined3.current);
    _undefined(_undefined3[43]).batchUpdates(() => {
      if (lockEnabled) {
        const _setTimeout = setTimeout;
        c2.current = setTimeout(() => {
          state = state2.getState();
          const result = state.setChannelPanelFullscreen(closure_0, lockEnabled);
          const state1 = state.getState();
          const freezeLock = state1.requestFreezeLock({ lockEnabled, key: "voice-panel-freeze-" + closure_0 });
        }, 1000);
      } else {
        state = VoicePanelStore.getState();
        let result = state.setChannelPanelFullscreen(c0, lockEnabled);
        let state1 = AppFreezeStore.getState();
        const obj = { lockEnabled, key: null };
        const _HermesInternal = HermesInternal;
        obj.key = "voice-panel-freeze-" + c0;
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
  let items1 = [channelId];
  let items2 = [channelId];
  const callback1 = noop.useCallback((arg0) => {
    state = VoicePanelStore.getState();
    state.setChannelPanelOpen(c0, arg0);
  }, items1);
  closure_129_0 = scrollPosition;
  closure_129_25 = undefined;
  const callback2 = noop.useCallback((arg0) => {
    state = VoicePanelStore.getState();
    state.setChannelPanelPIP(c0, arg0);
  }, items2);
  const context1 = noop.useContext(VoicePanelStateContextDefault);
  const channelId2 = context1.channelId;
  closure_129_1 = channelId2;
  const committedMode = context1.committedMode;
  closure_129_2 = committedMode;
  const connected = context1.connected;
  closure_129_3 = connected;
  const controlsSpecs = context1.controlsSpecs;
  closure_129_4 = controlsSpecs;
  const dismissPanel = context1.dismissPanel;
  closure_129_5 = dismissPanel;
  const dismissToPIPGestureRef = context1.dismissToPIPGestureRef;
  closure_129_6 = dismissToPIPGestureRef;
  const focused = context1.focused;
  closure_129_7 = focused;
  const hideControls = context1.hideControls;
  closure_129_8 = hideControls;
  const isDockEnabled2 = context1.isDockEnabled;
  closure_129_9 = isDockEnabled2;
  const isFocusedVideoZoomed = context1.isFocusedVideoZoomed;
  closure_129_10 = isFocusedVideoZoomed;
  let mode = context1.mode;
  closure_129_11 = mode;
  const safeArea = context1.safeArea;
  closure_129_12 = safeArea;
  const setMode = context1.setMode;
  closure_129_13 = setMode;
  const showControls = context1.showControls;
  closure_129_14 = showControls;
  const windowDimensions = context1.windowDimensions;
  closure_129_15 = windowDimensions;
  const wrapperDimensions = context1.wrapperDimensions;
  closure_129_16 = wrapperDimensions;
  const wrapperOffset = context1.wrapperOffset;
  closure_129_17 = wrapperOffset;
  ({ isDockConnected, dockJoinMorphOrigin, dockMinimizeProgress, sheetExitProgress } = context1);
  const tmp12 = useSafeAreaInsetsDefault();
  closure_129_18 = tmp12;
  let tmp4 = useAnalyticsLocationsDefault;
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  closure_129_19 = sharedValue;
  obj2 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../_runtime/metro/01652__.js").useSharedValue(false);
  closure_129_20 = sharedValue1;
  let obj3 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue2 = require("../../../../_runtime/metro/01652__.js").useSharedValue(false);
  const obj4 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue3 = require("../../../../_runtime/metro/01652__.js").useSharedValue({
    start: 0,
    end: VOICE_PANEL_CHUNK_DIVISOR,
  });
  const tmp18 = c3(noop.useState(true), 2);
  let first = tmp18[0];
  closure_129_21 = first;
  closure_129_22 = tmp18[1];
  const memo = noop.useMemo(() => {
    const Gesture = _undefined(_undefined3[19]).Gesture;
    return Gesture.Native();
  }, []);
  closure_129_23 = memo;
  let obj5 = require("../../../../_runtime/metro/01652__.js");
  let obj6 = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
  const animatedRef = require("../../../../_runtime/metro/01652__.js").useAnimatedRef();
  const obj7 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue4 = require("../../../../_runtime/metro/01652__.js").useSharedValue({
    absoluteXStart: 0,
    absoluteYStart: 0,
    cancel: false,
    active: false,
    requiresPop: false,
  });
  closure_129_24 = sharedValue4;
  const obj8 = require("../../../../_runtime/metro/01652__.js");
  let items3 = [closure_31, sharedValue4, connected, mode];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp23, tmp24, tmp25, tmp26] = items3;
  class VoicePanelUITsx4 {
    constructor() {
      obj = { gestureActive: closure_0.get().active, connected: closure_1.get(), mode: closure_2.get() };
      return obj;
    }
  }
  let items4 = [tmp24, tmp25, tmp26];
  VoicePanelUITsx4.__closure = items4;
  VoicePanelUITsx4.__workletHash = 16463136679825;
  VoicePanelUITsx4.__initData = tmp23;
  let items5 = [
    closure_32,
    require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
    VoicePanelModes,
    require("../../../../_runtime/metro/01705__.js").scheduleOnRN,
    callback,
    callback1,
    callback2,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  pipState = undefined;
  [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34] = items5;
  class VoicePanelUITsx5 {
    constructor(arg0, arg1) {
      tmp = arg1;
      tmp2 = closure_0;
      if (!tmp2(arg0, tmp)) {
        mode = arg0.mode;
        if (arg0.connected) {
          if (!arg0.gestureActive) {
            tmp3 = closure_1;
            if (mode === closure_1.PANEL) {
              tmp4 = closure_2;
              tmp5 = closure_3;
              flag = true;
              tmp6 = closure_2(closure_3, true);
            }
            tmp10 = closure_1;
            if (mode === closure_1.PANEL) {
              tmp13 = closure_4;
              flag4 = true;
              tmp4Result = tmp4(closure_4, true);
            } else {
              tmp11 = closure_4;
              flag3 = false;
              tmp4Result1 = tmp4(closure_4, false);
            }
            if (mode === tmp10.PIP) {
              tmp17 = closure_5;
              flag6 = true;
              tmp4Result2 = tmp4(closure_5, true);
            } else {
              tmp15 = closure_5;
              flag5 = false;
              tmp4Result3 = tmp4(closure_5, false);
            }
          }
        }
        tmp7 = closure_2;
        tmp8 = closure_3;
        flag2 = false;
        tmp9 = closure_2(closure_3, false);
        tmp4 = closure_2;
      }
      return;
    }
  }
  let items6 = [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34];
  VoicePanelUITsx5.__closure = items6;
  VoicePanelUITsx5.__workletHash = 4878501935286;
  VoicePanelUITsx5.__initData = tmp28;
  const animatedReaction = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    VoicePanelUITsx4,
    VoicePanelUITsx5,
  );
  const obj9 = require("../../../../_runtime/metro/01652__.js");
  let items7 = [closure_33, mode];
  _require = undefined;
  [tmp36, tmp37] = items7;
  class VoicePanelUITsx6 {
    constructor() {
      return closure_0.get();
    }
  }
  let items8 = [tmp37];
  VoicePanelUITsx6.__closure = items8;
  VoicePanelUITsx6.__workletHash = 3932789334298;
  VoicePanelUITsx6.__initData = tmp36;
  let items9 = [closure_34, VoicePanelModes, updateSharedValueIfChangedDefault, sharedValue4];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp38, tmp39, tmp40, tmp41] = items9;
  class VoicePanelUITsx7 {
    constructor(arg0, arg1) {
      tmp2 = arg0 === closure_0.DISMISSED;
      if (tmp2) {
        tmp3 = arg1;
        tmp2 = arg1 !== tmp.DISMISSED;
      }
      if (tmp2) {
        tmp4 = closure_1;
        tmp5 = closure_2;
        tmp6 = closure_1(closure_2, { cancel: false, active: false });
      }
      return;
    }
  }
  let items10 = [tmp39, tmp40, tmp41];
  VoicePanelUITsx7.__closure = items10;
  VoicePanelUITsx7.__workletHash = 4179564093421;
  VoicePanelUITsx7.__initData = tmp38;
  const animatedReaction1 = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    VoicePanelUITsx6,
    VoicePanelUITsx7,
  );
  let items11 = [channelId2];
  const callback3 = obj.useCallback((arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = isActivityParticipant(ChannelRTCStore.getParticipant(c1, arg0));
    }
    log(!tmp);
  }, items11);
  const tmp13Result = require("../../../../_runtime/metro/01652__.js");
  let items12 = [closure_35, mode, VoicePanelModes, focused];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp44, tmp45, tmp46, tmp47] = items12;
  class VoicePanelUITsx8 {
    constructor() {
      tmp = undefined;
      if (closure_0.get() === closure_1.PANEL) {
        tmp2 = closure_2;
        value = closure_2.get();
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
  let items13 = [tmp45, tmp46, tmp47];
  VoicePanelUITsx8.__closure = items13;
  VoicePanelUITsx8.__workletHash = 15170649652392;
  VoicePanelUITsx8.__initData = tmp44;
  let items14 = [closure_36, require("../../../../_runtime/metro/01705__.js").scheduleOnRN, callback3];
  _require = undefined;
  importDefault = undefined;
  [tmp48, tmp49, tmp50] = items14;
  class VoicePanelUITsx9 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, arg0);
      }
      return;
    }
  }
  let items15 = [tmp49, tmp50];
  VoicePanelUITsx9.__closure = items15;
  VoicePanelUITsx9.__workletHash = 9775063989493;
  VoicePanelUITsx9.__initData = tmp48;
  const animatedReaction2 = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    VoicePanelUITsx8,
    VoicePanelUITsx9,
  );
  const tmp52 = useControlsLockDefault();
  closure_129_25 = tmp52;
  const items16 = [
    tmp12,
    committedMode,
    connected,
    controlsSpecs,
    dismissPanel,
    dismissToPIPGestureRef,
    focused,
    first,
    hideControls,
    sharedValue4,
    isDockEnabled2,
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
    tmp52,
  ];
  const memo1 = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const Gesture2 = LegacyBaseButton.Gesture;
    const rect1 = { left: -1 * closure_1_18.left, right: -1 * closure_1_18.right };
    const rect = closure_1_18;
    const TapResult = Gesture2.Tap();
    const hitSlopResult = Gesture2.Tap().hitSlop(rect1);
    const enabledResult = Gesture2.Tap().hitSlop(rect1).enabled(NOOP);
    items = [
      closure_37,
      c3,
      closure_1_11,
      VoicePanelModes,
      c4,
      VoicePanelControlsModes,
      _mod1705.scheduleOnRN,
      closure_1_14,
      c8,
    ];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items;
    class VoicePanelUITsx10 {
      constructor() {
        if (closure_0.get()) {
          tmp = closure_1;
          tmp2 = closure_2;
          if (closure_1.get() !== closure_2.PIP) {
            tmp3 = closure_3;
            tmp4 = closure_4;
            if (closure_3.get().mode === closure_4.HIDDEN) {
              tmp8 = closure_5;
              tmp9 = closure_6;
              tmp10 = closure_5(closure_6, { debounce: true });
            } else {
              tmp5 = closure_5;
              tmp6 = closure_7;
              tmp7 = closure_5(closure_7, { debounce: true });
            }
          }
        }
        return;
      }
    }
    const items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
    VoicePanelUITsx10.__closure = items1;
    VoicePanelUITsx10.__workletHash = 9196187473758;
    VoicePanelUITsx10.__initData = tmp9;
    const maxDistanceResult = Gesture2.Tap().hitSlop(rect1).enabled(NOOP).maxDistance(30);
    const Gesture3 = LegacyBaseButton.Gesture;
    const onStartResult = Gesture2.Tap().hitSlop(rect1).enabled(NOOP).maxDistance(30).onStart(VoicePanelUITsx10);
    const PanResult = Gesture3.Pan();
    const enabledResult1 = Gesture3.Pan().enabled(NOOP);
    const manualActivationResult = Gesture3.Pan().enabled(NOOP).manualActivation(true);
    const rect2 = { left: -1 * rect.left, right: -1 * rect.right };
    const maxPointersResult = Gesture3.Pan().enabled(NOOP).manualActivation(true).maxPointers(1);
    const hitSlopResult1 = Gesture3.Pan().enabled(NOOP).manualActivation(true).maxPointers(1).hitSlop(rect2);
    let result = Gesture3.Pan()
      .enabled(NOOP)
      .manualActivation(true)
      .maxPointers(1)
      .hitSlop(rect2)
      .withRef(c6)
      .shouldCancelWhenOutside(false);
    let result1 = result.simultaneousWithExternalGesture(log);
    const items2 = [
      closure_38,
      closure_2_11,
      closure_1_15,
      constants,
      layoutTransition,
      c10,
      closure_1_11,
      VoicePanelModes,
      c4,
      VoicePanelControlsModes,
    ];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31] = items2;
    class VoicePanelUITsx11 {
      constructor(arg0, arg1) {
        first = arg0.allTouches[0];
        if (closure_0) {
          tmp2 = null;
          if (null != first) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            if (first.absoluteY > closure_1.get().height - closure_2.get().bottom) {
              tmp16 = closure_3;
              obj1 = {};
              tmp17 = obj1;
              merged = Object.assign(closure_3.get());
              flag2 = true;
              obj1.cancel = true;
              result = closure_3.set(obj1);
              activateResult = arg1.activate();
              return;
            }
          }
        }
        value = closure_4.get();
        if (!value) {
          tmp6 = closure_5;
          tmp7 = closure_6;
          tmp8 = closure_5.get() === closure_6.PANEL;
          if (tmp8) {
            tmp9 = closure_7;
            tmp10 = closure_8;
            tmp8 = closure_7.get().mode === closure_8.DRAWER;
          }
          value = tmp8;
        }
        if (value) {
          tmp11 = closure_3;
          obj = {};
          tmp12 = obj;
          merged1 = Object.assign(closure_3.get());
          flag = true;
          obj.cancel = true;
          result1 = closure_3.set(obj);
          failResult = arg1.fail();
        }
        return;
      }
    }
    const items3 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31];
    VoicePanelUITsx11.__closure = items3;
    VoicePanelUITsx11.__workletHash = 9009260728188;
    VoicePanelUITsx11.__initData = tmp22;
    const withRefResult = Gesture3.Pan().enabled(NOOP).manualActivation(true).maxPointers(1).hitSlop(rect2).withRef(c6);
    const items4 = [
      closure_39,
      layoutTransition,
      c9,
      closure_1_11,
      VoicePanelModes,
      updateSharedValueIfChangedDefault,
      closure_1_17,
      c3,
      c4,
      VoicePanelControlsModes,
      _mod1705.scheduleOnRN,
      scrollViewLayoutTransition,
    ];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47] = items4;
    class VoicePanelUITsx12 {
      constructor(arg0) {
        obj = closure_0;
        if (!closure_0.get().cancel) {
          tmp = closure_1;
          if (closure_1) {
            tmp2 = closure_2;
            tmp3 = closure_3;
            tmp = closure_2.get() !== closure_3.PANEL;
          }
          if (!tmp) {
            tmp4 = closure_4;
            tmp5 = closure_5;
            tmp6 = closure_4(closure_5, { x: 0, y: 0 });
          }
          tmp7 = arg0;
          obj1 = { absoluteXStart: null, absoluteYStart: null, active: false, cancel: false, requiresPop: null };
          ({ absoluteX: obj2.absoluteXStart, absoluteY: obj2.absoluteYStart } = arg0);
          tmp8 = closure_6;
          value = closure_6.get();
          if (value) {
            tmp10 = closure_2;
            tmp11 = closure_3;
            value = closure_2.get() === closure_3.PANEL;
          }
          obj1.requiresPop = value;
          result = obj.set(obj1);
          tmp13 = closure_7;
          tmp14 = closure_8;
          if (closure_7.get().mode === closure_8.FLOATING_DEFAULT) {
            tmp15 = closure_9;
            tmp16 = closure_10;
            tmp17 = closure_9(closure_10.lock);
          }
        }
        return;
      }
    }
    const items5 = [tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47];
    VoicePanelUITsx12.__closure = items5;
    VoicePanelUITsx12.__workletHash = 3385022923598;
    VoicePanelUITsx12.__initData = tmp36;
    const onTouchesDownResult = result1.onTouchesDown(VoicePanelUITsx11);
    const items6 = [
      closure_40,
      LegacyBaseButton.State,
      layoutTransition,
      closure_1_11,
      VoicePanelModes,
      c0,
      closure_30,
      10,
      c7,
      c9,
      _mod1705.scheduleOnRN,
      utils_triggerIOSHapticDefault,
      updateSharedValueIfChangedDefault,
      closure_1_17,
      closure_1_20,
    ];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    c11 = undefined;
    c12 = undefined;
    c13 = undefined;
    [tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64] = items6;
    class VoicePanelUITsx13 {
      constructor(arg0, arg1) {
        if (arg0.state === closure_0.BEGAN) {
          obj4 = closure_1;
          if (!closure_1.get().active) {
            if (!obj4.get().cancel) {
              ({ absoluteY, absoluteX } = arg0.changedTouches[0]);
              diff = obj4.get().absoluteYStart - absoluteY;
              diff1 = obj4.get().absoluteXStart - absoluteX;
              tmp3 = globalThis;
              _Math = Math;
              _Math2 = Math;
              _Math3 = Math;
              absolute = Math.abs(diff);
              bound = Math.max(absolute, Math.abs(diff1));
              _Math4 = Math;
              _Math5 = Math;
              absolute1 = Math.abs(diff1);
              tmp7 = absolute1 >= Math.abs(diff);
              if (!tmp7) {
                num = 0;
                tmp7 = diff > 0;
              }
              tmp8 = arg1;
              obj = closure_2;
              if (closure_2.get() === closure_3.PANEL) {
                _Math6 = Math;
                tmp16 = closure_4;
                num2 = 0;
                if (diff < 0) {
                  if (Math.floor(closure_4.get()) <= 0) {
                    tmp23 = closure_5;
                    tmp24 = !closure_5;
                    if (closure_5) {
                      tmp25 = closure_6;
                      tmp24 = bound > closure_6;
                    }
                    flag = tmp24;
                  }
                }
                tmp17 = closure_7;
                value = closure_7.get();
                tmp19 = null;
                id = undefined;
                if (value != null) {
                  id = value.id;
                }
                tmp21 = null != id && tmp7;
                flag = false;
                if (tmp21) {
                  failResult = arg1.fail();
                  flag = false;
                }
              } else {
                tmp10 = closure_8;
                tmp11 = !closure_8;
                if (!closure_8) {
                  tmp11 = obj.get() === tmp9.PIP;
                }
                if (tmp11) {
                  tmp12 = closure_6;
                  tmp11 = bound > closure_6;
                }
                flag = false;
                if (tmp11) {
                  tmp13 = closure_9;
                  tmp14 = closure_10;
                  tmp15 = closure_9(closure_10);
                  flag = true;
                }
              }
              tmp26 = closure_11;
              if (flag) {
                tmp28 = closure_12;
                tmp26Result = tmp26(closure_12, { gestureActive: true });
                obj1 = { absoluteXStart: null, absoluteYStart: null, cancel: false, active: true, requiresPop: null };
                obj1.absoluteXStart = absoluteX;
                tmp30 = closure_4;
                obj1.absoluteYStart = absoluteY + closure_4.get();
                obj1.requiresPop = obj4.get().requiresPop;
                result = obj4.set(obj1);
                tmp32 = closure_13;
                flag2 = true;
                result1 = closure_13.set(true);
                activateResult = arg1.activate();
              } else {
                obj5 = { absoluteYStart: null, absoluteXStart: null };
                obj5.absoluteYStart = absoluteY;
                obj5.absoluteXStart = absoluteX;
                tmp26Result1 = tmp26(obj4, obj5);
              }
            }
          }
        }
        return;
      }
    }
    const items7 = [tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64];
    VoicePanelUITsx13.__closure = items7;
    VoicePanelUITsx13.__workletHash = 11771955472178;
    VoicePanelUITsx13.__initData = tmp50;
    const onBeginResult = result1.onTouchesDown(VoicePanelUITsx11).onBegin(VoicePanelUITsx12);
    const tmp48 = c0;
    const items8 = [
      closure_41,
      layoutTransition,
      c9,
      closure_1_11,
      VoicePanelModes,
      updateSharedValueIfChangedDefault,
      closure_1_17,
      c3,
      closure_1_20,
      tmp48,
      180,
      POP_RESISTANCE,
      _mod1705.scheduleOnRN,
      HapticUtils.triggerHapticFeedback,
      HapticUtils.HapticFeedbackTypes,
    ];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    c11 = undefined;
    c12 = undefined;
    c13 = undefined;
    [tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79] = items8;
    class VoicePanelUITsx14 {
      constructor(arg0) {
        obj = closure_0;
        if (!closure_0.get().cancel) {
          tmp = arg0;
          tmp2 = closure_1;
          if (!closure_1) {
            tmp3 = closure_2;
            tmp4 = closure_3;
            if (closure_2.get() === closure_3.PIP) {
              tmp5 = closure_4;
              tmp6 = closure_5;
              point = { x: null, y: null };
              num = -1;
              point.x = -1 * (obj.get().absoluteXStart - arg0.absoluteX);
              point.y = -1 * (obj.get().absoluteYStart - arg0.absoluteY);
              tmp7 = closure_4(closure_5, point);
            }
          }
          num2 = -1;
          result = -1 * (obj.get().absoluteYStart - arg0.absoluteY);
          value = !tmp2;
          if (!tmp2) {
            tmp10 = closure_6;
            value = closure_6.get();
          }
          if (value) {
            value = !obj.get().requiresPop;
          }
          if (value) {
            num3 = 0;
            value = result <= 0;
          }
          if (value) {
            obj1 = {};
            tmp11 = obj1;
            merged = Object.assign(obj.get());
            flag = true;
            obj1.requiresPop = true;
            result1 = obj.set(obj1);
          }
          obj4 = closure_7;
          if (closure_7.get()) {
            num4 = 0;
            if (result < 0) {
              flag3 = false;
              result2 = obj4.set(false);
            }
            if (tmp2) {
              tmp31 = closure_6;
              diff = result;
              if (closure_6.get()) {
                tmp32 = closure_4;
                obj8 = { requiresPop: null };
                tmp33 = closure_9;
                obj8.requiresPop = result <= closure_9;
                tmp34 = closure_4(obj, obj8);
                diff = result;
              }
            } else {
              diff = result;
              if (obj.get().requiresPop) {
                tmp20 = globalThis;
                _Math = Math;
                num6 = 0;
                bound = Math.max(result, 0);
                tmp22 = closure_9;
                if (bound > closure_9) {
                  obj9 = {};
                  tmp23 = obj9;
                  merged1 = Object.assign(obj.get());
                  flag4 = false;
                  obj9.requiresPop = false;
                  result3 = obj.set(obj9);
                  tmp26 = closure_11;
                  tmp27 = closure_12;
                  tmp28 = closure_13;
                  tmp29 = closure_11(closure_12, closure_13.IMPACT_MEDIUM);
                  diff = result;
                }
              }
              tmp30 = closure_10;
              diff = bound - bound * closure_10;
            }
            bound = closure_4;
            tmp35 = closure_5;
            point1 = { y: null, x: 0 };
            point1.y = diff;
            tmp36 = closure_4(closure_5, point1);
          }
          value1 = obj4.get();
          tmp15 = !value1;
          if (!value1) {
            tmp16 = closure_8;
            num5 = 0;
            tmp15 = closure_8.get() <= 0;
          }
          if (tmp15) {
            flag2 = true;
            result4 = obj4.set(true);
          }
        }
        return;
      }
    }
    const items9 = [tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79];
    VoicePanelUITsx14.__closure = items9;
    VoicePanelUITsx14.__workletHash = 9246796352251;
    VoicePanelUITsx14.__initData = tmp65;
    const onTouchesMoveResult = result1
      .onTouchesDown(VoicePanelUITsx11)
      .onBegin(VoicePanelUITsx12)
      .onTouchesMove(VoicePanelUITsx13);
    const items10 = [
      closure_42,
      closure_1_20,
      layoutTransition,
      updateSharedValueIfChangedDefault,
      c9,
      closure_1_11,
      VoicePanelModes,
      closure_1_17,
    ];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    [tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87] = items10;
    class VoicePanelUITsx15 {
      constructor() {
        result = closure_0.set(false);
        tmp2 = closure_2;
        tmp3 = closure_2(closure_1, { cancel: false, active: false });
        tmp4 = closure_3;
        if (closure_3) {
          tmp4 = !closure_1.get().active;
        }
        if (tmp4) {
          tmp5 = closure_4;
          tmp6 = closure_5;
          tmp4 = closure_4.get() !== closure_5.PANEL;
        }
        if (!tmp4) {
          tmp7 = closure_6;
          tmp2Result = tmp2(closure_6, { gestureActive: false, x: 0, y: 0 });
        }
        return;
      }
    }
    const items11 = [tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87];
    VoicePanelUITsx15.__closure = items11;
    VoicePanelUITsx15.__workletHash = 11178323321959;
    VoicePanelUITsx15.__initData = tmp80;
    const onChangeResult = result1
      .onTouchesDown(VoicePanelUITsx11)
      .onBegin(VoicePanelUITsx12)
      .onTouchesMove(VoicePanelUITsx13)
      .onChange(VoicePanelUITsx14);
    const items12 = [
      closure_43,
      layoutTransition,
      c9,
      closure_1_11,
      VoicePanelModes,
      closure_1_20,
      isActivityParticipant,
      c3,
      closure_1_17,
      0.2,
      VoicePanelSheetMorph.SHEET_COMMIT_FLING_VELOCITY,
      _mod1705.scheduleOnRN,
      HapticUtils.triggerHapticFeedback,
      HapticUtils.HapticFeedbackTypes,
      c2,
      closure_1_13,
      updateSharedValueIfChangedDefault,
      c5,
      VoicePanelPIPUtils.calculatePIPPositionFromVelocity,
      closure_1_15,
      constants,
    ];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    c11 = undefined;
    c12 = undefined;
    c13 = undefined;
    c14 = undefined;
    c15 = undefined;
    c16 = undefined;
    c17 = undefined;
    c18 = undefined;
    c19 = undefined;
    [
      tmp88,
      tmp89,
      tmp90,
      tmp91,
      tmp92,
      tmp93,
      tmp94,
      tmp95,
      tmp96,
      tmp97,
      tmp98,
      tmp99,
      tmp100,
      tmp101,
      tmp102,
      tmp103,
      tmp104,
      tmp105,
      tmp106,
      tmp107,
      tmp108,
    ] = items12;
    class VoicePanelUITsx16 {
      constructor(arg0) {
        obj = closure_0;
        if (!closure_0.get().cancel) {
          tmp = arg0;
          velocityY = arg0.velocityY;
          tmp2 = closure_1;
          obj2 = closure_2;
          ({ velocityX, absoluteX, absoluteY } = arg0);
          value = closure_2.get();
          tmp4 = closure_3;
          if (closure_1) {
            if (value !== tmp4.PANEL) {
              tmp70 = closure_4;
              flag5 = false;
              result = closure_4.set(false);
              return;
            } else {
              tmp72 = closure_5;
              drawerHeight = closure_5.get().drawerHeight;
              num2 = 0;
              if (velocityY > 0) {
                tmp44 = closure_6;
                tmp46 = closure_7;
                value1 = closure_6.get();
                y = closure_7.get().y;
                tmp47 = closure_8;
                result1 = tmp73 * closure_8;
                if (value1) {
                  if (y <= result1) {
                    tmp54 = closure_9;
                  }
                  tmp60 = closure_10;
                  tmp61 = closure_11;
                  tmp62 = closure_12;
                  tmp63 = closure_10(closure_11, closure_12.IMPACT_MEDIUM);
                  tmp64 = closure_13;
                  result2 = closure_13.set(tmp4.PIP);
                  tmp66 = closure_14;
                  tmp67 = closure_10(closure_14, tmp4.PIP);
                  tmp68 = closure_15;
                  tmp69 = closure_15(tmp46, { gestureActive: false, x: 0, y: 0 });
                  return;
                } else if (y > result1) {
                  tmp49 = closure_15;
                  tmp50 = closure_15(tmp46, { gestureActive: false });
                  tmp51 = closure_10;
                  tmp52 = closure_16;
                  tmp53 = closure_10(closure_16);
                  return;
                }
              }
              tmp55 = closure_15;
              tmp56 = closure_7;
              tmp57 = closure_15(closure_7, { gestureActive: false, x: 0, y: 0 });
              tmp58 = closure_4;
              flag4 = false;
              result3 = closure_4.set(false);
              return;
            }
          } else if (value === tmp4.PIP) {
            tmp35 = closure_17;
            obj1 = {
              velocityX: null,
              velocityY: null,
              absoluteX: null,
              absoluteY: null,
              windowDimensions: null,
              safeArea: null,
            };
            obj1.velocityX = velocityX;
            obj1.velocityY = velocityY;
            obj1.absoluteX = absoluteX;
            obj1.absoluteY = absoluteY;
            tmp36 = closure_18;
            obj1.windowDimensions = closure_18.get();
            tmp37 = closure_19;
            obj1.safeArea = closure_19.get();
            tmp38 = closure_17(obj1);
            tmp39 = closure_15;
            tmp40 = closure_5;
            obj5 = { pipX: null, pipY: null };
            ({ pipX: obj4.pipX, pipY: obj4.pipY } = tmp38);
            tmp41 = closure_15(closure_5, obj5);
            tmp42 = closure_7;
            tmp43 = closure_15(closure_7, { gestureActive: false });
          } else if (obj2.get() === tmp4.PANEL) {
            num = 0;
            if (velocityY > 0) {
              tmp10 = closure_6;
              if (closure_6.get()) {
                if (obj.get().requiresPop) {
                  tmp30 = closure_15;
                  tmp31 = closure_7;
                  tmp32 = closure_15(closure_7, { gestureActive: false, x: 0, y: 0 });
                  tmp33 = closure_4;
                  flag3 = false;
                  result4 = closure_4.set(false);
                } else {
                  tmp24 = closure_10;
                  tmp25 = closure_14;
                  tmp26 = closure_10(closure_14, tmp4.PIP);
                  tmp27 = closure_15;
                  tmp28 = closure_7;
                  tmp29 = closure_15(closure_7, { gestureActive: false, x: 0, y: 0 });
                }
              } else {
                tmp11 = closure_5;
                tmp13 = closure_7;
                diff = closure_5.get().drawerHeight - closure_5.get().drawerY;
                tmp14 = closure_8;
                if (closure_7.get().y > diff * closure_8) {
                  tmp19 = closure_15;
                  tmp20 = closure_15(tmp13, { gestureActive: false });
                  tmp21 = closure_10;
                  tmp22 = closure_16;
                  tmp23 = closure_10(closure_16);
                } else {
                  tmp15 = closure_15;
                  tmp16 = closure_15(tmp13, { gestureActive: false, x: 0, y: 0 });
                  tmp17 = closure_4;
                  flag2 = false;
                  result5 = closure_4.set(false);
                }
              }
            } else {
              tmp5 = closure_15;
              tmp6 = closure_7;
              tmp7 = closure_15(closure_7, { gestureActive: false, x: 0, y: 0 });
              tmp8 = closure_4;
              flag = false;
              result6 = closure_4.set(false);
            }
          }
        }
        return;
      }
    }
    const items13 = [
      tmp89,
      tmp90,
      tmp91,
      tmp92,
      tmp93,
      tmp94,
      tmp95,
      tmp96,
      tmp97,
      tmp98,
      tmp99,
      tmp100,
      tmp101,
      tmp102,
      tmp103,
      tmp104,
      tmp105,
      tmp106,
      tmp107,
      tmp108,
    ];
    VoicePanelUITsx16.__closure = items13;
    VoicePanelUITsx16.__workletHash = 4377272299898;
    VoicePanelUITsx16.__initData = tmp88;
    const onTouchesCancelledResult = result1
      .onTouchesDown(VoicePanelUITsx11)
      .onBegin(VoicePanelUITsx12)
      .onTouchesMove(VoicePanelUITsx13)
      .onChange(VoicePanelUITsx14)
      .onTouchesCancelled(VoicePanelUITsx15);
    const items14 = [
      closure_44,
      c9,
      updateSharedValueIfChangedDefault,
      layoutTransition,
      closure_1_17,
      closure_1_20,
      _mod1705.scheduleOnRN,
      scrollViewLayoutTransition,
      closure_1_11,
      VoicePanelModes,
    ];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    [tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118] = items14;
    class VoicePanelUITsx17 {
      constructor() {
        if (closure_0) {
          tmp11 = closure_1;
          tmp12 = closure_2;
          tmp13 = closure_1(closure_2, { cancel: false, active: false });
          tmp14 = closure_3;
          tmp15 = closure_1(closure_3, { gestureActive: false });
          tmp16 = closure_4;
          flag = false;
          result = closure_4.set(false);
          tmp18 = closure_5;
          tmp19 = closure_6;
          tmp20 = closure_5(closure_6.unlock);
          return;
        } else {
          tmp = closure_3;
          num = 0;
          tmp2 = 0 !== closure_3.get().y;
          if (tmp2) {
            tmp3 = closure_7;
            tmp4 = closure_8;
            tmp2 = closure_7.get() === closure_8.PANEL;
          }
          if (!tmp2) {
            tmp5 = closure_1;
            tmp6 = closure_2;
            tmp7 = closure_1(closure_2, { cancel: false, active: false });
          }
          tmp8 = closure_5;
          tmp9 = closure_6;
          tmp10 = closure_5(closure_6.unlock);
          return;
        }
      }
    }
    const items15 = [tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118];
    VoicePanelUITsx17.__closure = items15;
    VoicePanelUITsx17.__workletHash = 16258963610060;
    VoicePanelUITsx17.__initData = tmp109;
    return Gesture.Race(
      onStartResult,
      result1
        .onTouchesDown(VoicePanelUITsx11)
        .onBegin(VoicePanelUITsx12)
        .onTouchesMove(VoicePanelUITsx13)
        .onChange(VoicePanelUITsx14)
        .onTouchesCancelled(VoicePanelUITsx15)
        .onEnd(VoicePanelUITsx16)
        .onFinalize(VoicePanelUITsx17),
    );
  }, items16);
  const tmp13Result7 = require("../../../../_runtime/metro/01652__.js");
  const items17 = [closure_45, scrollPosition, dragScrolling];
  [tmp54, tmp55, tmp56] = items17;
  const obj10 = { onBeginDrag: null, onEndDrag: null, onMomentumEnd: null, onScroll: null };
  function onBeginDrag(contentOffset) {
    const result = _undefined.set(contentOffset.contentOffset.y);
    const result1 = _undefined2.set(true);
  }
  const items18 = [tmp55, tmp56];
  onBeginDrag.__closure = items18;
  onBeginDrag.__workletHash = 4847460239683;
  onBeginDrag.__initData = tmp54;
  obj10.onBeginDrag = onBeginDrag;
  const items19 = [closure_46, dragScrolling];
  [tmp57, tmp58] = items19;
  function onEndDrag() {
    const result = _undefined.set(false);
  }
  const items20 = [tmp58];
  onEndDrag.__closure = items20;
  onEndDrag.__workletHash = 13071862655366;
  onEndDrag.__initData = tmp57;
  obj10.onEndDrag = onEndDrag;
  const items21 = [closure_47, dragScrolling];
  _require = undefined;
  [tmp59, tmp60] = items21;
  function onMomentumEnd() {
    const result = _undefined.set(false);
  }
  const items22 = [tmp60];
  onMomentumEnd.__closure = items22;
  onMomentumEnd.__workletHash = 10922814847092;
  onMomentumEnd.__initData = tmp59;
  obj10.onMomentumEnd = onMomentumEnd;
  const items23 = [
    closure_48,
    sharedValue1,
    sharedValue2,
    scrollPosition,
    require("../../../../_runtime/metro/01652__.js").scrollTo,
    animatedRef,
    computeViewableChunksFromScrollPosition,
    windowDimensions,
    sharedValue,
    updateSharedValueIfChangedDefault,
    sharedValue3,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  pipState = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71] = items23;
  function onScroll(contentOffset) {
    if (_undefined.get()) {
      if (!_undefined2.get()) {
        if (_undefined3.get() < 0) {
          const result = _undefined3.set(0);
        }
        value = _undefined3.get();
        const _Math = Math;
        if (Math.abs(contentOffset.contentOffset.y - value) >= 0.1) {
          const result1 = _undefined2.set(true);
          _undefined4(c4, 0, value, false);
          const result2 = _undefined2.set(false);
        }
      }
    } else {
      let tmp;
      if (_undefined3.get() !== contentOffset.contentOffset.y) {
        value2 = _undefined3.get();
        tmp = _undefined6(value2, _undefined7.get().height, _undefined8.get());
      }
      const result3 = _undefined3.set(contentOffset.contentOffset.y);
      if (null != tmp) {
        _undefined9(c9, tmp);
      }
    }
  }
  const items24 = [tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71];
  onScroll.__closure = items24;
  onScroll.__workletHash = 13499477325275;
  onScroll.__initData = tmp61;
  obj10.onScroll = onScroll;
  const tmp13Result8 = require("../../../../_runtime/metro/01652__.js");
  const animatedScrollHandler = require("../../../../_runtime/metro/01652__.js").useAnimatedScrollHandler(obj10);
  const items25 = [closure_49, mode];
  _require = undefined;
  [tmp73, tmp74] = items25;
  class VoicePanelUITsx22 {
    constructor() {
      return closure_0.get();
    }
  }
  const items26 = [tmp74];
  VoicePanelUITsx22.__closure = items26;
  VoicePanelUITsx22.__workletHash = 178164845068;
  VoicePanelUITsx22.__initData = tmp73;
  const items27 = [closure_50, VoicePanelModes, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp75, tmp76, tmp77] = items27;
  class VoicePanelUITsx23 {
    constructor(arg0, arg1) {
      tmp = null != arg1 && arg0 !== arg1;
      if (tmp) {
        tmp2 = closure_0;
        if (arg0 === closure_0.PANEL) {
          if (arg1 === tmp2.PIP) {
            tmp5 = closure_1;
            flag2 = false;
            result = closure_1.set(false);
          }
        }
        if (arg0 === tmp2.PIP) {
          tmp3 = closure_1;
          flag = true;
          result1 = closure_1.set(true);
        }
      }
      return;
    }
  }
  const items28 = [tmp76, tmp77];
  VoicePanelUITsx23.__closure = items28;
  VoicePanelUITsx23.__workletHash = 1507689802923;
  VoicePanelUITsx23.__initData = tmp75;
  const animatedReaction3 = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    VoicePanelUITsx22,
    VoicePanelUITsx23,
  );
  const tmp13Result9 = require("../../../../_runtime/metro/01652__.js");
  const token = require("useToken").useToken(nativeDefault.modules.mobile.VOICE_PANEL_GUTTER);
  const tmp13Result10 = require("useToken");
  const items29 = [
    closure_51,
    mode,
    VoicePanelModes,
    focused,
    sharedValue1,
    calculateVoicePanelHeaderSpecsDefault,
    safeArea,
    token,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  pipState = undefined;
  c6 = undefined;
  [tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87] = items29;
  class VoicePanelUITsx24 {
    constructor() {
      tmp = closure_0.get() === closure_1.PIP;
      tmp2 = tmp;
      if (!tmp) {
        tmp3 = closure_2;
        tmp4 = null;
        tmp2 = null != closure_2.get();
      }
      str = "auto";
      if (tmp) {
        str = "none";
      }
      obj = {
        pointerEvents: str,
        scrollEnabled: null,
        showsVerticalScrollIndicator: null,
        scrollIndicatorInsets: null,
      };
      tmp5 = !tmp2;
      obj.scrollEnabled = tmp5;
      value = closure_3.get();
      tmp7 = !value;
      if (!value) {
        tmp7 = tmp5;
      }
      obj.showsVerticalScrollIndicator = tmp7;
      rect = {
        top: closure_4(closure_5.get(), closure_6).height - closure_5.get().top,
        bottom: closure_5.get().bottom,
      };
      obj.scrollIndicatorInsets = rect;
      return obj;
    }
  }
  const items30 = [tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87];
  VoicePanelUITsx24.__closure = items30;
  VoicePanelUITsx24.__workletHash = 12806965269014;
  VoicePanelUITsx24.__initData = tmp80;
  const items31 = [sharedValue];
  const animatedProps = require("../../../../_runtime/metro/01652__.js").useAnimatedProps(VoicePanelUITsx24);
  const callback4 = obj.useCallback((arg0, arg1) => {
    const result = closure_1_19.set(arg1);
  }, items31);
  const tmp13Result11 = require("../../../../_runtime/metro/01652__.js");
  const items32 = [
    closure_52,
    isDockConnected,
    sheetExitProgress,
    dockJoinMorphOrigin,
    windowDimensions,
    dockMinimizeProgress,
    mode,
    VoicePanelModes,
    connected,
    sharedValue4,
    wrapperDimensions,
    wrapperOffset,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  pipState = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101] = items32;
  class VoicePanelUITsx25 {
    constructor() {
      if (closure_0.get()) {
        tmp8 = closure_1;
        num5 = 1;
        diff = 1 - closure_1.get();
        tmp10 = closure_2;
        value = closure_2.get();
        tmp12 = null;
        if (null != value) {
          tmp14 = closure_3;
          height2 = closure_3.get().height;
          tmp15 = globalThis;
          _Math3 = Math;
          _Math4 = Math;
          num6 = 0;
          tmp17 = closure_4;
          bound = Math.min(Math.max((height2 - value.y) / height2, 0), 1);
          return bound * (1 - closure_4.get()) * diff;
        } else {
          tmp13 = closure_4;
          return (1 - closure_4.get()) * diff;
        }
      } else {
        tmp = closure_5;
        value1 = closure_5.get();
        if (closure_6.PIP !== value1) {
          if (closure_6.DISMISSED !== value1) {
            tmp18 = closure_7;
            if (closure_7.get()) {
              obj = closure_8;
              if (closure_8.get().active) {
                if (obj.get().requiresPop) {
                  num3 = 1;
                  return 1;
                }
              }
            }
            tmp3 = closure_9;
            tmp4 = closure_10;
            tmp6 = closure_3;
            sum = closure_9.get().drawerY + closure_10.get().y;
            height = closure_3.get().height;
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
  const items33 = [tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101];
  VoicePanelUITsx25.__closure = items33;
  VoicePanelUITsx25.__workletHash = 4540413793478;
  VoicePanelUITsx25.__initData = tmp90;
  const derivedValue = require("../../../../_runtime/metro/01652__.js").useDerivedValue(VoicePanelUITsx25);
  const obj11 = { children: null };
  const tmp13Result12 = require("../../../../_runtime/metro/01652__.js");
  const obj12 = {
    zIndex: 2,
    children: closure_18(VoicePanelHeaderDefault, {
      wrapperOffset,
      gestureState: sharedValue4,
      layout: layoutTransition,
    }),
  };
  const items34 = [closure_18(require("LayerScope").LayerScope, obj12), ,];
  const obj14 = { gesture: memo1, children: null };
  const obj15 = { style: pipState.absoluteFill, layout: layoutTransition, collapsable: false, children: null };
  const obj16 = { gesture: memo, children: null };
  const obj17 = {
    layout: scrollViewLayoutTransition,
    ref: animatedRef,
    onScroll: animatedScrollHandler,
    onMomentumScrollEnd: NOOP,
    animatedProps,
    style: tmp.scrollView,
    onContentSizeChange: callback4,
    contentContainerStyle: tmp.scrollViewContent,
    scrollEventThrottle: 8.333333333333334,
    children: null,
  };
  const items35 = [
    closure_18(VoicePanelCardViewDefault, { viewableChunks: sharedValue3 }),
    closure_18(VoicePanelPreJoinContentDefault, {}),
  ];
  obj17.children = items35;
  obj16.children = closure_19(closure_29, obj17);
  obj15.children = closure_18(require("LegacyBaseButton").GestureDetector, obj16);
  obj14.children = closure_18(module_1652.View, obj15);
  items34[1] = closure_18(require("LegacyBaseButton").GestureDetector, obj14);
  items34[2] = closure_18(VoicePanelVoiceChannelAppDefault, {});
  obj11.children = items34;
  const tmp107 = closure_19(closure_20, obj11);
  const effect = obj.useEffect(() => _undefined2(true), []);
  if (!tmp6[0]) {
    return null;
  } else {
    const obj18 = { value: tmp4(AnalyticsLocationDefault.VOICE_PANEL).analyticsLocations, children: null };
    const items36 = [closure_18(VoicePanelSystemUIManagerDefault, {}), ,];
    const obj19 = { opacity: derivedValue, onPress: context.dismissPanel };
    items36[1] = closure_18(closure_69, obj19);
    let obj20 = { gesture: tmp103, children: null };
    let obj21 = {
      style: tmp.accessibilityView,
      nativeID: null,
      accessibilityViewIsModal: true,
      layout: null,
      onAccessibilityEscape: null,
      children: null,
    };
    let _HermesInternal = HermesInternal;
    obj21.nativeID = "voice-panel-ui-" + channelId;
    obj21.layout = layoutTransition;
    obj21.onAccessibilityEscape = closeVoicePanelsDefault;
    const items37 = [closure_18(VoicePanelDismissableContentDefault, {}), , ,];
    const obj22 = { wrapperOffset, children: null };
    let tmp105Result = tmp107;
    if (isDockEnabled) {
      const obj23 = { children: tmp107 };
      tmp105Result = closure_18(tmp13(19608).VoicePanelContentWithDock, obj23);
    }
    obj22.children = tmp105Result;
    items37[1] = closure_18(AnimatedWrapper, obj22);
    const obj24 = { children: null };
    items37[2] = closure_18(tmp2(isDockEnabled ? 19708 : 19709), {});
    tmp2 = VoicePanelControlsDefault;
    const obj25 = { gestureState: sharedValue4 };
    tmp105Result3 = closure_18(tmp2, obj25);
    items37[3] = tmp105Result3;
    obj21.children = items37;
    obj21 = closure_19(VoicePanelAccessibilityViewDefault, obj21);
    obj20.children = obj21;
    obj20 = closure_18(tmp13(5422).GestureDetector, obj20);
    items36[2] = obj20;
    obj24.children = items36;
    obj18.children = closure_19(tmp13(5740).LayerScope, obj24);
    closure_18(tmp13(7390).AnalyticsLocationProvider, obj18);
    const tmp2Result = VoicePanelAccessibilityViewDefault;
  }
  const obj13 = { wrapperOffset, gestureState: sharedValue4, layout: layoutTransition };
  tmp103 = useControlsHoverGestureDefault();
});
export const REDUCED_MOTION_OPACITY_PHYSICS = obj3;
