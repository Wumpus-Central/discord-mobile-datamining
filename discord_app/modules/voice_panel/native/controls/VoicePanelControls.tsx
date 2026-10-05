// discord_app/modules/voice_panel/native/controls/VoicePanelControls.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import LegacyBaseButton from "../../../../../_runtime/06140_LegacyBaseButton.js";
import native2 from "../../../../design/components/experimental/native.tsx";
import cheapWorkletShallowEqual2 from "../../../reanimated/native/cheapWorkletShallowEqual.tsx";
import roundToNearestPixelDefault from "../utils/roundToNearestPixel.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import calculateVoicePanelHeaderSpecsDefault from "../header/calculateVoicePanelHeaderSpecs.tsx";
import VoicePanelControlsUtils from "../utils/VoicePanelControlsUtils.tsx";
import useControlsLockDefault from "useControlsLock.tsx";
import VoicePanelFloatingCTAUtils from "utils/VoicePanelFloatingCTAUtils.tsx";
import useDrawerToggleDefault from "useDrawerToggle.tsx";
import trackVoicePanelTabOpened from "trackVoicePanelTabOpened.tsx";
import VoicePanelControlUtils from "utils/VoicePanelControlUtils.tsx";
import useConsoleConnectingInfoDefault from "../hooks/useConsoleConnectingInfo.tsx";
import VoicePanelFloatingCTAContainer from "VoicePanelFloatingCTAContainer.tsx";
import VoicePanelConsoleStatus from "VoicePanelConsoleStatus.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ChannelRTCStore_mod from "../../../calls/ChannelRTCStore.tsx";
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import VoicePanelCardConstants from "../card/VoicePanelCardConstants.tsx";
import VoicePanelControlsConstants from "VoicePanelControlsConstants.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import MetaQuestUtils from "../../../device/MetaQuestUtils.android.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require,
  addChangeListenerResult,
  batchUpdatesResult,
  controlsProps,
  dependencyMap,
  importDefault,
  lockResult,
  obj1,
  set,
  set2,
  set3,
  set4,
  set5,
  unlockResult;

let StyleSheet;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let rect;
let rect1;
let unpackModuleId;
function useControlsGesture(tab, sharedValue, sharedValue1, G) {
  let controlsSpecs;
  let sharedTab;
  let wrapperSpecs;
  _require = tab;
  importDefault = sharedValue;
  dependencyMap = sharedValue1;
  const openTab = G;
  const context = controlsSpecs.useContext(VoicePanelStateContextDefault);
  controlsSpecs = context.controlsSpecs;
  const windowDimensions = context.windowDimensions;
  const wrapperDimensions = context.wrapperDimensions;
  const safeArea = context.safeArea;
  let obj = require("ReanimatedRexport");
  let point = {
    absoluteX: 0,
    absoluteY: 0,
    x: 0,
    y: 0,
    height: 0,
    isDrawer: false,
    active: false,
    drawerTransitionHeight: v200,
    interFloatingTransitionHeight,
  };
  const gestureSpecs = obj.useSharedValue(point);
  const obj3 = require("ReanimatedRexport");
  sharedValue1 = obj3.useSharedValue(0);
  let obj4 = require("ReanimatedRexport");
  const sharedValue2 = obj4.useSharedValue(false);
  let obj5 = require("ReanimatedRexport");
  const sharedValue3 = obj5.useSharedValue(0);
  const ref = controlsSpecs.useRef(undefined);
  let obj6 = require("ReanimatedRexport");
  const sharedValue4 = obj6.useSharedValue(false);
  const items = [ref, sharedValue2, sharedValue4, sharedValue3];
  const scrollLockTargets = controlsSpecs.useMemo(
    () => ({
      gestureRef: ref,
      scrollLocked: sharedValue4,
      scrollOffsetValue: sharedValue3,
      isDragScrolling: sharedValue2,
    }),
    items,
  );
  const tmp9 = useControlsLockDefault();
  const gestureLock = tmp9;
  let obj7 = require("useToken");
  const token = obj7.useToken(nativeDefault.modules.mobile.VOICE_PANEL_GUTTER);
  const items1 = [
    controlsSpecs,
    tmp9,
    gestureSpecs,
    sharedValue2,
    G,
    safeArea,
    sharedValue4,
    sharedValue3,
    sharedValue,
    tab,
    sharedValue1,
    windowDimensions,
    wrapperDimensions,
    sharedValue1,
    token,
  ];
  const gesture = controlsSpecs.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const manualActivationResult = PanResult.manualActivation(true);
    const maxPointersResult = manualActivationResult.maxPointers(1);
    let result = maxPointersResult.shouldCancelWhenOutside(false);
    const withRefResult = result.withRef(ref);
    class M {
      constructor(absoluteX) {
        const result = sharedValue1.set(0);
        const point = {
          absoluteX: absoluteX.changedTouches[0].absoluteX,
          absoluteY: absoluteX.changedTouches[0].absoluteY,
          x: wrapperSpecs.get().x,
          y: wrapperSpecs.get().y,
          height: wrapperSpecs.get().height,
          isDrawer: controlsSpecs.get().mode === token.DRAWER,
          active: false,
          drawerTransitionHeight,
          interFloatingTransitionHeight,
        };
        const result1 = gestureSpecs.set(point);
      }
    }
    let obj = {
      touchMoveCount: sharedValue1,
      gestureSpecs,
      wrapperSpecs,
      controlsSpecs,
      VoicePanelControlsModes,
      TRANSITIONAL_HEIGHT,
      INTER_FLOATING_TRANSITIONAL_HEIGHT,
    };
    M.__closure = obj;
    M.__workletHash = 3524850376026;
    M.__initData = __initData7;
    const onTouchesDownResult = withRefResult.onTouchesDown(M);
    class O {
      constructor() {
        const obj = tab(wrapperSpecs[17]);
        obj.runOnJS(gestureLock.lock)();
      }
    }
    let obj2 = { runOnJS: ReanimatedRexport.runOnJS, gestureLock };
    O.__closure = obj2;
    O.__workletHash = 11720944776433;
    O.__initData = __initData6;
    const fn = function f(state, fail) {
      let absoluteX;
      let absoluteY;
      if (state.state === closure_0(closure_2[20]).State.BEGAN) {
        if (!gestureSpecs.get().active) {
          if (controlsSpecs.get().mode !== token.HIDDEN) {
            let num2;
            const result = sharedValue1.set(sharedValue1.get() + 1);
            const value = sharedValue1.get() <= num || sharedValue2.get();
            const value2 = sharedTab.get();
            if ("settings" === value2) {
              num2 = sharedValue3.get();
            } else {
              num2 = 0;
            }
            ({ absoluteY, absoluteX } = state.changedTouches[0]);
            const diff = gestureSpecs.get().absoluteY - absoluteY;
            let tmp15 = controlsSpecs.get().mode === token.DRAWER && value;
            if (tmp15) {
              tmp15 = diff >= 0 || num2 > 0;
            }
            if (!tmp15) {
              if (controlsSpecs.get().mode !== token.FLOATING_DEFAULT) {
                const _Math = Math;
                const _Math2 = Math;
                const absolute = Math.abs(diff);
                if (absolute > Math.abs(30)) {
                  fail.fail();
                }
              }
              const point = {
                absoluteX,
                absoluteY,
                x: closure_1_2.get().x,
                y: closure_1_2.get().y,
                height: closure_1_2.get().height,
                isDrawer: controlsSpecs.get().mode === token.DRAWER,
                active: true,
                drawerTransitionHeight,
                interFloatingTransitionHeight,
              };
              set = gestureSpecs.set;
              const result1 = set(point);
              const tmp23 = controlsSpecs.get().mode !== token.DRAWER && "settings" !== closure_1_0;
              if (tmp23) {
                const obj2 = {
                  tab: "settings",
                  source: closure_0(closure_2[21]).VoicePanelTabAnalyticsSources.GESTURE,
                  disableControlsUpdate: true,
                };
                const tmpResult = closure_0(closure_2[17]);
                const runOnJSResult = tmpResult.runOnJS(openTab);
                runOnJSResult(obj2);
              }
              const result2 = sharedValue4.set(true);
              fail.activate();
            }
          } else {
            fail.fail();
          }
        }
      }
    };
    const onStartResult = onTouchesDownResult.onStart(O);
    fn.__closure = {
      State: LegacyBaseButton.State,
      gestureSpecs,
      controlsSpecs,
      VoicePanelControlsModes,
      touchMoveCount: sharedValue1,
      SCROLL_BEGIN_GRACE_TICKS: num,
      isDragScrolling: sharedValue2,
      sharedTab,
      scrollOffsetValue: sharedValue3,
      GESTURE_VERTICAL_MINIMUM: 30,
      wrapperSpecs,
      TRANSITIONAL_HEIGHT,
      INTER_FLOATING_TRANSITIONAL_HEIGHT,
      tab,
      runOnJS: ReanimatedRexport.runOnJS,
      openTab,
      VoicePanelTabAnalyticsSources: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources,
      scrollLock: sharedValue4,
    };
    fn.__workletHash = 377889123477;
    fn.__initData = __initData5;
    ({
      State: LegacyBaseButton.State,
      gestureSpecs,
      controlsSpecs,
      VoicePanelControlsModes,
      touchMoveCount: sharedValue1,
      SCROLL_BEGIN_GRACE_TICKS: num,
      isDragScrolling: sharedValue2,
      sharedTab,
      scrollOffsetValue: sharedValue3,
      GESTURE_VERTICAL_MINIMUM: 30,
      wrapperSpecs,
      TRANSITIONAL_HEIGHT,
      INTER_FLOATING_TRANSITIONAL_HEIGHT,
      tab,
      runOnJS: ReanimatedRexport.runOnJS,
      openTab,
      VoicePanelTabAnalyticsSources: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources,
      scrollLock: sharedValue4,
    });
    const fn2 = function p(absoluteY) {
      let getControlsDefaultWidth;
      let getControlsDrawerOpenWidth;
      let height;
      let width;
      let width2;
      const diff = absoluteY.absoluteY - gestureSpecs.get().absoluteY;
      const diff1 = gestureSpecs.get().height - gestureSpecs.get().y - diff;
      if (diff1 > gestureSpecs.get().drawerTransitionHeight) {
        if (!gestureSpecs.get().isDrawer) {
          const obj2 = { isDrawer: true };
          set3 = gestureSpecs.set;
          const merged = Object.assign(gestureSpecs.get());
          set3(obj2);
        }
        const obj5 = {
          x: 0,
          y: 0,
          width: getControlsDrawerOpenWidth(width2, safeArea.get().left, safeArea.get().right),
          height: Math.min(diff1, wrapperDimensions.get().drawerHeight - height),
          drawerMode: true,
        };
        const tmp27 = sharedTab(closure_2[22]);
        height = tmp27(safeArea.get(), token).height;
        set4 = closure_1_2.set;
        const merged1 = Object.assign(closure_1_2.get());
        getControlsDrawerOpenWidth = tab(closure_2[23]).getControlsDrawerOpenWidth;
        tab(closure_2[23]);
        width2 = windowDimensions.get().width;
        const _Math = Math;
        set4(obj5);
      } else {
        const result = diff1 / gestureSpecs.get().drawerTransitionHeight;
        const height2 = controlsSpecs.get().height;
        const _Math2 = Math;
        const result1 = -1 * Math.max(diff1 - safeArea.get().bottom - height2, 0);
        if (gestureSpecs.get().isDrawer) {
          const obj6 = { isDrawer: false };
          set = gestureSpecs.set;
          const merged2 = Object.assign(gestureSpecs.get());
          const result2 = set(obj6);
        }
        const tmp6 = height2 === closure_1_2.get().height || closure_1_2.get().drawerMode;
        if (!tmp6) {
          const obj4 = tab(closure_2[17]);
          const runOnJSResult = obj4.runOnJS(tab(closure_2[24]).triggerHapticFeedback);
          runOnJSResult(tab(closure_2[24]).HapticFeedbackTypes.IMPACT_MEDIUM);
        }
        const obj7 = {
          x: 0,
          y: -1 * safeArea.get().bottom + result1 * (1 - result / 1.5),
          width: getControlsDefaultWidth(width, safeArea.get().left, safeArea.get().right),
          height: height2,
          drawerMode: false,
        };
        set2 = closure_1_2.set;
        const merged3 = Object.assign(closure_1_2.get());
        getControlsDefaultWidth = tab(closure_2[23]).getControlsDefaultWidth;
        tab(closure_2[23]);
        width = windowDimensions.get().width;
        set2(obj7);
      }
    };
    const onTouchesMoveResult = onStartResult.onTouchesMove(fn);
    let obj4 = {
      gestureSpecs,
      calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault,
      safeArea,
      edgeGutter: token,
      wrapperSpecs,
      getControlsDrawerOpenWidth: VoicePanelControlsUtils.getControlsDrawerOpenWidth,
      windowDimensions,
      wrapperDimensions,
      controlsSpecs,
      runOnJS: ReanimatedRexport.runOnJS,
      triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
      HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes,
      getControlsDefaultWidth: VoicePanelControlsUtils.getControlsDefaultWidth,
    };
    fn2.__closure = obj4;
    fn2.__workletHash = 15011671768502;
    fn2.__initData = __initData4;
    const fn3 = function h() {
      const result = sharedValue4.set(false);
      const result1 = sharedValue2.set(false);
      const obj = { active: false };
      set = gestureSpecs.set;
      const merged = Object.assign(gestureSpecs.get());
      const result2 = set(obj);
      const obj2 = tab(wrapperSpecs[17]);
      obj2.runOnJS(gestureLock.unlock)();
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn2);
    let obj5 = {
      scrollLock: sharedValue4,
      isDragScrolling: sharedValue2,
      gestureSpecs,
      runOnJS: ReanimatedRexport.runOnJS,
      gestureLock,
    };
    fn3.__closure = obj5;
    fn3.__workletHash = 9808165597638;
    fn3.__initData = __initData3;
    const fn4 = function l(velocityY) {
      let FLOATING_DEFAULT;
      let drawerHeight;
      let tmp15;
      velocityY = velocityY.velocityY;
      const absolute = Math.abs(velocityY);
      if (absolute > 200) {
        if (velocityY < 0) {
          let DRAWER2;
          const obj = { height: drawerHeight - tmp15(safeArea.get(), VoicePanelControlsModes).height };
          set = closure_1_2.set;
          const merged = Object.assign(closure_1_2.get());
          drawerHeight = wrapperDimensions.get().drawerHeight;
          tmp15 = sharedTab(closure_2[22]);
          const result = set(obj);
          if (controlsSpecs.get().mode === token.DRAWER) {
            DRAWER2 = token.RESET;
          } else {
            DRAWER2 = token.DRAWER;
          }
          FLOATING_DEFAULT = DRAWER2;
        }
        const result1 = sharedValue4.set(false);
        const result2 = sharedValue2.set(false);
        const obj2 = tab(closure_2[17]);
        obj2.runOnJS(gestureLock.unlock)(FLOATING_DEFAULT);
      }
      if (absolute < 200) {
        if (gestureSpecs.get().isDrawer) {
          let DRAWER;
          if (controlsSpecs.get().mode === token.DRAWER) {
            DRAWER = token.RESET;
          } else {
            DRAWER = token.DRAWER;
          }
          FLOATING_DEFAULT = DRAWER;
        }
      }
      if (controlsSpecs.get().mode === token.FLOATING_DEFAULT) {
        FLOATING_DEFAULT = token.RESET;
      } else {
        FLOATING_DEFAULT = token.FLOATING_DEFAULT;
      }
    };
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn3);
    let obj6 = {
      wrapperSpecs,
      wrapperDimensions,
      calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault,
      safeArea,
      edgeGutter: token,
      controlsSpecs,
      VoicePanelControlsModes,
      gestureSpecs,
      scrollLock: sharedValue4,
      isDragScrolling: sharedValue2,
      runOnJS: ReanimatedRexport.runOnJS,
      gestureLock,
    };
    fn4.__closure = obj6;
    fn4.__workletHash = 12106761920053;
    fn4.__initData = __initData2;
    const fn5 = function o() {
      const result = sharedValue4.set(false);
      const result1 = sharedValue2.set(false);
      const obj = tab(wrapperSpecs[17]);
      obj.runOnJS(gestureLock.unlock)();
    };
    const onEndResult = onTouchesCancelledResult.onEnd(fn4);
    let obj7 = {
      scrollLock: sharedValue4,
      isDragScrolling: sharedValue2,
      runOnJS: ReanimatedRexport.runOnJS,
      gestureLock,
    };
    fn5.__closure = obj7;
    fn5.__workletHash = 15918380969837;
    fn5.__initData = __initData;
    return onEndResult.onFinalize(fn5);
  }, items1);
  let fn = function h() {
    return wrapperSpecs.get().drawerMode;
  };
  fn.__closure = { wrapperSpecs: sharedValue1 };
  fn.__workletHash = 2949834828607;
  fn.__initData = __initData;
  let fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = tab(wrapperSpecs[17]);
      const runOnJSResult = obj.runOnJS(tab(wrapperSpecs[24]).triggerHapticFeedback);
      runOnJSResult(tab(wrapperSpecs[24]).HapticFeedbackTypes.IMPACT_MEDIUM);
    }
  };
  const obj8 = require("ReanimatedRexport");
  let obj2 = {
    runOnJS: require("ReanimatedRexport").runOnJS,
    triggerHapticFeedback: require("HapticUtils").triggerHapticFeedback,
    HapticFeedbackTypes: require("HapticUtils").HapticFeedbackTypes,
  };
  fn2.__closure = obj2;
  fn2.__workletHash = 10186886451735;
  fn2.__initData = __initData2;
  const animatedReaction = obj8.useAnimatedReaction(fn, fn2);
  return { gesture, scrollLockTargets, gestureSpecs };
}
({ View: hasOwnProperty, StyleSheet } = react_native);
let ChannelRTCStore = ChannelRTCStore_mod;
({
  UI_SHOW_HIDE_PHYSICS: metroImportDefault,
  MODE_CHANGE_PHYSICS: metroImportAll,
  BORDER_RADIUS_PHYSICS: c9,
  PANEL_CONTROLS_HEIGHT_PHYSICS: c10,
  VoicePanelModes: unpackModuleId,
} = VoicePanelConstants);
({ CALL_TILE_GUTTER: closure_12, EDGE_GUTTER: map1 } = VoicePanelCardConstants);
({ CONTROLS_DRAWER_HEADER_EXPANDED_SIZE: closure_14, VoicePanelControlsModes: closure_15 } =
  VoicePanelControlsConstants);
({ ComponentActions: closure_16, ThemeTypes: closure_17 } = Constants);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  accessibilityWrapper: obj2,
  wrapper: rect,
  buttonsWrapper: rect1,
  actionSheetDragHandleWrapper: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 21 },
};
obj2 = { zIndex: 1 };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
rect = {
  position: "absolute",
  bottom: 0,
  left: "50%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS,
};
rect1 = {
  position: "absolute",
  left: 0,
  right: 0,
  zIndex: 20,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginHorizontal: nativeDefault.space.PX_16,
};
let closure_21 = createStyles(obj);
let c22 = 200;
let c23 = 200;
let num = 5;
if (MetaQuestUtils.isMetaQuest()) {
  num = 15;
}
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (openTab) => {
        let accessibilityLabel;
        let ariaHidden;
        let handlePress;
        const obj = react2;
        const cResult = obj.c(7);
        openTab = openTab.openTab;
        const tmp4 = closure_21();
        ({ handlePress, accessibilityLabel, ariaHidden } = useDrawerToggleDefault(openTab));
        useDrawerToggleDefault(openTab);
        if (cResult[0] === accessibilityLabel) {
          if (cResult[1] === ariaHidden) {
            let tmp6;
            if (cResult[2] === handlePress) {
              tmp6 = cResult[3];
            }
            if (cResult[4] === tmp4.actionSheetDragHandleWrapper) {
              let tmp8;
              if (cResult[5] === tmp6) {
                tmp8 = cResult[6];
              }
              return tmp8;
            }
            const obj2 = { style: tmp4.actionSheetDragHandleWrapper, children: tmp6 };
            const tmp11 = authStore4(hasOwnProperty, obj2);
            cResult[4] = tmp4.actionSheetDragHandleWrapper;
            cResult[5] = tmp6;
            cResult[6] = tmp11;
            tmp8 = tmp11;
          }
        }
        const tmp7 = authStore4(native2.ActionSheetDragHandle, {
          onPress: handlePress,
          overlay: true,
          accessibilityLabel,
          "aria-hidden": ariaHidden,
        });
        cResult[0] = accessibilityLabel;
        cResult[1] = ariaHidden;
        cResult[2] = handlePress;
        cResult[3] = tmp7;
        tmp6 = tmp7;
      }
    : (openTab) => {
        let accessibilityLabel;
        let ariaHidden;
        let handlePress;
        openTab = openTab.openTab;
        const tmp = closure_21();
        const tmp2 = useDrawerToggleDefault(openTab);
        const obj = {
          style: tmp.actionSheetDragHandleWrapper,
          children: authStore4(native2.ActionSheetDragHandle, {
            onPress: handlePress,
            overlay: true,
            accessibilityLabel,
            "aria-hidden": ariaHidden,
          }),
        };
        ({ handlePress, accessibilityLabel, ariaHidden } = tmp2);
        return authStore4(hasOwnProperty, obj);
      },
);
let closure_26 = {
  code: "function VoicePanelControlsTsx1(){const{scrollLock,isDragScrolling,runOnJS,gestureLock}=this.__closure;scrollLock.set(false);isDragScrolling.set(false);runOnJS(gestureLock.unlock)();}",
};
let closure_27 = {
  code: "function VoicePanelControlsTsx2({velocityY:velocityY}){const{wrapperSpecs,wrapperDimensions,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,controlsSpecs,VoicePanelControlsModes,gestureSpecs,scrollLock,isDragScrolling,runOnJS,gestureLock}=this.__closure;const absoluteVelocity=Math.abs(velocityY);let resultingControlMode;if(absoluteVelocity>200&&velocityY<0){wrapperSpecs.set({...wrapperSpecs.get(),height:wrapperDimensions.get().drawerHeight-calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height});if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else if(absoluteVelocity<200&&gestureSpecs.get().isDrawer){if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.FLOATING_DEFAULT;}}scrollLock.set(false);isDragScrolling.set(false);runOnJS(gestureLock.unlock)(resultingControlMode);}",
};
let closure_28 = {
  code: "function VoicePanelControlsTsx3(){const{scrollLock,isDragScrolling,gestureSpecs,runOnJS,gestureLock}=this.__closure;console.log('ZZZZZ - ControlsGesture.onTouchesCancelled');scrollLock.set(false);isDragScrolling.set(false);gestureSpecs.set({...gestureSpecs.get(),active:false});runOnJS(gestureLock.unlock)();}",
};
let closure_29 = {
  code: "function VoicePanelControlsTsx4(event_1){const{gestureSpecs,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,wrapperSpecs,getControlsDrawerOpenWidth,windowDimensions,wrapperDimensions,controlsSpecs,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,getControlsDefaultWidth}=this.__closure;const change=event_1.absoluteY-gestureSpecs.get().absoluteY;const newHeight=gestureSpecs.get().height-gestureSpecs.get().y-change;if(newHeight>gestureSpecs.get().drawerTransitionHeight){if(!gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:true});}const headerHeight=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height;wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:0,width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(newHeight,wrapperDimensions.get().drawerHeight-headerHeight),drawerMode:true});}else{const progress=newHeight/gestureSpecs.get().drawerTransitionHeight;const floatingHeight=controlsSpecs.get().height;const yOffset=Math.max(newHeight-safeArea.get().bottom-floatingHeight,0)*-1;const newChange=yOffset*(1-progress/1.5);if(gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:false});}if(floatingHeight!==wrapperSpecs.get().height&&!wrapperSpecs.get().drawerMode){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:safeArea.get().bottom*-1+newChange,width:getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:floatingHeight,drawerMode:false});}}",
};
let closure_30 = {
  code: "function VoicePanelControlsTsx5(event_0,manager){const{State,gestureSpecs,controlsSpecs,VoicePanelControlsModes,touchMoveCount,SCROLL_BEGIN_GRACE_TICKS,isDragScrolling,sharedTab,scrollOffsetValue,GESTURE_VERTICAL_MINIMUM,wrapperSpecs,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT,tab,runOnJS,openTab,VoicePanelTabAnalyticsSources,scrollLock}=this.__closure;if(event_0.state!==State.BEGAN||gestureSpecs.get().active)return;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){manager.fail();return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=SCROLL_BEGIN_GRACE_TICKS?true:isDragScrolling.get();const scrollOffset=function(){switch(sharedTab.get()){case'settings':case'app_launcher':return scrollOffsetValue.get();default:return 0;}}();const{absoluteY:absoluteY,absoluteX:absoluteX}=event_0.changedTouches[0];const computed=gestureSpecs.get().absoluteY-absoluteY;if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&isDragging&&(computed>=0||scrollOffset>0)){return;}if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT&&computed>GESTURE_VERTICAL_MINIMUM||controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&(computed<-GESTURE_VERTICAL_MINIMUM||computed>GESTURE_VERTICAL_MINIMUM)){gestureSpecs.set({absoluteX:absoluteX,absoluteY:absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:true,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER&&tab!=='settings'){runOnJS(openTab)({tab:'settings',source:VoicePanelTabAnalyticsSources.GESTURE,disableControlsUpdate:true});}scrollLock.set(true);manager.activate();}else if(Math.abs(computed)>Math.abs(GESTURE_VERTICAL_MINIMUM)){manager.fail();}}",
};
let closure_31 = {
  code: "function VoicePanelControlsTsx6(){const{runOnJS,gestureLock}=this.__closure;runOnJS(gestureLock.lock)();}",
};
let closure_32 = {
  code: "function VoicePanelControlsTsx7(event){const{touchMoveCount,gestureSpecs,wrapperSpecs,controlsSpecs,VoicePanelControlsModes,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT}=this.__closure;touchMoveCount.set(0);gestureSpecs.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:false,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});}",
};
const __initData = {
  code: "function VoicePanelControlsTsx8(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}",
};
const __initData2 = {
  code: "function VoicePanelControlsTsx9(current,previous){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous)return;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}",
};
const __initData3 = {
  code: "function VoicePanelControlsTsx10(){const{connected,controlsSpecs,mode,windowDimensions,windowDimensionsIgnoringKeyboard,safeArea}=this.__closure;return{connected:connected.get(),currentControlsMode:controlsSpecs.get().mode,mode:mode.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,windowHeightIgnoringKeyboard:windowDimensionsIgnoringKeyboard.get().height,controlsHeightValue:controlsSpecs.get().height,safeArea:safeArea.get()};}",
};
const __initData4 = {
  code: "function VoicePanelControlsTsx11(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperSpecs,VoicePanelControlsModes,runOnJS,setControlsMode,isScreenReaderEnabled,EDGE_GUTTER,getControlsDefaultWidth,getDrawerSpec,getControlsDrawerOpenWidth}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const{currentControlsMode:currentControlsMode,mode:mode_0,windowWidth:windowWidth,windowHeightIgnoringKeyboard:windowHeightIgnoringKeyboard,controlsHeightValue:controlsHeightValue,safeArea:safeArea_0}=props;switch(mode_0){case VoicePanelModes.DISMISSED:case VoicePanelModes.PIP:{if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}return;}case VoicePanelModes.PANEL:default:}bb20:switch(currentControlsMode){case VoicePanelControlsModes.RESET:{var _previous$currentCont;runOnJS(setControlsMode)({mode:(_previous$currentCont=previous===null||previous===void 0?void 0:previous.currentControlsMode)!==null&&_previous$currentCont!==void 0?_previous$currentCont:VoicePanelControlsModes.FLOATING_DEFAULT});return;}case VoicePanelControlsModes.HIDDEN:{if(isScreenReaderEnabled){wrapperSpecs.set({...wrapperSpecs.get(),hidden:false});break bb20;}if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}break bb20;}case VoicePanelControlsModes.FLOATING_DEFAULT:{wrapperSpecs.set({x:0,y:Math.max(safeArea_0.bottom,EDGE_GUTTER)*-1,width:getControlsDefaultWidth(windowWidth,safeArea_0.left,safeArea_0.right),height:controlsHeightValue,drawerMode:false,hidden:false});break bb20;}case VoicePanelControlsModes.DRAWER:{const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(windowHeightIgnoringKeyboard,safeArea_0.top);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(wrapperSpecs.get().height<=controlsHeightValue){height=maxHeight;}else{if(previous!=null&&wrapperSpecs.get().height===getDrawerSpec(previous.windowHeight,previous.safeArea.top).maxHeight){height=maxHeight;}else{if(wrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=minHeight;}}}wrapperSpecs.set({x:0,y:0,width:getControlsDrawerOpenWidth(windowWidth,safeArea_0.left,safeArea_0.right),height:height,drawerMode:true,hidden:false});}}}",
};
const __initData5 = {
  code: "function VoicePanelControlsTsx12(){const{connected,controlsSpecs,mode,windowDimensions,windowDimensionsIgnoringKeyboard,safeArea}=this.__closure;return{connected:connected.get(),currentControlsMode:controlsSpecs.get().mode,mode:mode.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,windowHeightIgnoringKeyboard:windowDimensionsIgnoringKeyboard.get().height,controlsHeightValue:controlsSpecs.get().height,safeArea:safeArea.get()};}",
};
const __initData6 = {
  code: "function VoicePanelControlsTsx13(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperSpecs,VoicePanelControlsModes,runOnJS,setControlsMode,isScreenReaderEnabled,EDGE_GUTTER,getControlsDefaultWidth,getDrawerSpec,getControlsDrawerOpenWidth}=this.__closure;var _previous$currentCont;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{currentControlsMode:currentControlsMode,mode:mode_0,windowWidth:windowWidth,windowHeightIgnoringKeyboard:windowHeightIgnoringKeyboard,controlsHeightValue:controlsHeightValue,safeArea:safeArea_0}=props;switch(mode_0){case VoicePanelModes.DISMISSED:case VoicePanelModes.PIP:if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}return;case VoicePanelModes.PANEL:default:break;}switch(currentControlsMode){case VoicePanelControlsModes.RESET:runOnJS(setControlsMode)({mode:(_previous$currentCont=previous===null||previous===void 0?void 0:previous.currentControlsMode)!==null&&_previous$currentCont!==void 0?_previous$currentCont:VoicePanelControlsModes.FLOATING_DEFAULT});return;case VoicePanelControlsModes.HIDDEN:if(isScreenReaderEnabled){wrapperSpecs.set({...wrapperSpecs.get(),hidden:false});break;}if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}break;case VoicePanelControlsModes.FLOATING_DEFAULT:wrapperSpecs.set({x:0,y:Math.max(safeArea_0.bottom,EDGE_GUTTER)*-1,width:getControlsDefaultWidth(windowWidth,safeArea_0.left,safeArea_0.right),height:controlsHeightValue,drawerMode:false,hidden:false});break;case VoicePanelControlsModes.DRAWER:const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(windowHeightIgnoringKeyboard,safeArea_0.top);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(wrapperSpecs.get().height<=controlsHeightValue){height=maxHeight;}else if(previous!=null&&wrapperSpecs.get().height===getDrawerSpec(previous.windowHeight,previous.safeArea.top).maxHeight){height=maxHeight;}else if(wrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=minHeight;}wrapperSpecs.set({x:0,y:0,width:getControlsDrawerOpenWidth(windowWidth,safeArea_0.left,safeArea_0.right),height:height,drawerMode:true,hidden:false});break;}}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_40 = ReactCompilerGating.isReactCompilerEnabled()
  ? (wrapperSpecs) => {
      let closure_2;
      let first;
      let windowDimensions;
      _require = wrapperSpecs;
      let obj = require("react");
      const cResult = obj.c(1);
      let obj2 = require("useIsScreenReaderEnabled");
      const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { ignoreKeyboard: true };
        cResult[0] = obj3;
        first = obj3;
      } else {
        first = cResult[0];
      }
      const tmp6 = isScreenReaderEnabled(11647)(first);
      dependencyMap = tmp6;
      const context = windowDimensions.useContext(isScreenReaderEnabled(11901));
      const controlsSpecs = context.controlsSpecs;
      windowDimensions = context.windowDimensions;
      const mode = context.mode;
      const setControlsMode = context.setControlsMode;
      const safeArea = context.safeArea;
      const connected = context.connected;
      let tmpResult = tmp(4612);
      const fn = function h() {
        const obj = {
          connected: connected.get(),
          currentControlsMode: controlsSpecs.get().mode,
          mode: mode.get(),
          windowWidth: windowDimensions.get().width,
          windowHeight: windowDimensions.get().height,
          windowHeightIgnoringKeyboard: closure_2.get().height,
          controlsHeightValue: controlsSpecs.get().height,
          safeArea: safeArea.get(),
        };
        return obj;
      };
      fn.__closure = {
        connected,
        controlsSpecs,
        mode,
        windowDimensions,
        windowDimensionsIgnoringKeyboard: tmp6,
        safeArea,
      };
      fn.__workletHash = 11588370229444;
      fn.__initData = __initData3;
      const fn2 = function l(safeAreaState, currentControlsMode) {
        let controlsHeightValue;
        let maxHeight;
        let minHeight;
        let tmpResult5;
        let tmpResult8;
        let windowWidth;
        const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
        cheapWorkletShallowEqual2;
        const tmp4 = currentControlsMode;
        if (!cheapWorkletShallowEqual(safeAreaState, tmp4)) {
          ({ currentControlsMode, mode, windowWidth, controlsHeightValue, safeArea } = safeAreaState);
          if (unpackModuleId.DISMISSED !== mode) {
            if (unpackModuleId.PIP !== mode) {
              const PANEL = unpackModuleId.PANEL;
              if (constants.RESET === currentControlsMode) {
                let currentControlsMode1;
                const tmpResult = ReanimatedRexport;
                const runOnJSResult = tmpResult.runOnJS(setControlsMode);
                if (currentControlsMode != null) {
                  currentControlsMode1 = currentControlsMode.currentControlsMode;
                }
                if (currentControlsMode1 == null) {
                  currentControlsMode1 = constants.FLOATING_DEFAULT;
                }
                const obj = { mode: currentControlsMode1 };
                runOnJSResult(obj);
              } else if (constants.HIDDEN === currentControlsMode) {
                if (isScreenReaderEnabled) {
                  const obj2 = { hidden: false };
                  set4 = wrapperSpecs.set;
                  const merged = Object.assign(wrapperSpecs.get());
                  set4(obj2);
                } else if (!wrapperSpecs.get().hidden) {
                  const obj3 = { hidden: true };
                  set3 = wrapperSpecs.set;
                  const merged1 = Object.assign(wrapperSpecs.get());
                  set3(obj3);
                }
              } else if (constants.FLOATING_DEFAULT === currentControlsMode) {
                size = {
                  x: 0,
                  y: -1 * Math.max(safeArea.bottom, map1),
                  width: tmpResult5.getControlsDefaultWidth(windowWidth, safeArea.left, safeArea.right),
                  height: controlsHeightValue,
                  drawerMode: false,
                  hidden: false,
                };
                const _Math = Math;
                set2 = wrapperSpecs.set;
                tmpResult5 = VoicePanelControlsUtils;
                set2(size);
              } else if (constants.DRAWER === currentControlsMode) {
                const tmpResult6 = VoicePanelControlUtils;
                const drawerSpec = tmpResult6.getDrawerSpec(tmp5, safeArea.top);
                ({ minHeight, maxHeight } = drawerSpec);
                if (wrapperSpecs.get().height <= controlsHeightValue) {
                  minHeight = maxHeight;
                } else if (null != currentControlsMode) {
                  const height = wrapperSpecs.get().height;
                  VoicePanelControlUtils;
                }
                const size1 = {
                  x: 0,
                  y: 0,
                  width: tmpResult8.getControlsDrawerOpenWidth(windowWidth, safeArea.left, safeArea.right),
                  height: minHeight,
                  drawerMode: true,
                  hidden: false,
                };
                set = wrapperSpecs.set;
                tmpResult8 = VoicePanelControlsUtils;
                const result = set(size1);
              }
            }
          }
          if (!wrapperSpecs.get().hidden) {
            const obj4 = { hidden: true };
            set5 = wrapperSpecs.set;
            const merged2 = Object.assign(wrapperSpecs.get());
            set5(obj4);
          }
        }
      };
      let obj4 = {
        cheapWorkletShallowEqual: tmp(9074).cheapWorkletShallowEqual,
        VoicePanelModes,
        wrapperSpecs,
        VoicePanelControlsModes,
        runOnJS: tmp(4612).runOnJS,
        setControlsMode,
        isScreenReaderEnabled,
        EDGE_GUTTER,
        getControlsDefaultWidth: tmp(11909).getControlsDefaultWidth,
        getDrawerSpec: tmp(17315).getDrawerSpec,
        getControlsDrawerOpenWidth: tmp(11909).getControlsDrawerOpenWidth,
      };
      fn2.__closure = obj4;
      fn2.__workletHash = 12616753127721;
      fn2.__initData = __initData4;
      const animatedReaction = tmpResult.useAnimatedReaction(fn, fn2);
    }
  : (wrapperSpecs) => {
      let closure_2;
      let windowDimensions;
      _require = wrapperSpecs;
      let obj = require("useIsScreenReaderEnabled");
      const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
      const tmp2 = isScreenReaderEnabled(11647)({ ignoreKeyboard: true });
      dependencyMap = tmp2;
      const context = windowDimensions.useContext(isScreenReaderEnabled(11901));
      const controlsSpecs = context.controlsSpecs;
      windowDimensions = context.windowDimensions;
      const mode = context.mode;
      const setControlsMode = context.setControlsMode;
      const safeArea = context.safeArea;
      const connected = context.connected;
      let obj2 = require("ReanimatedRexport");
      const fn = function n() {
        const obj = {
          connected: connected.get(),
          currentControlsMode: controlsSpecs.get().mode,
          mode: mode.get(),
          windowWidth: windowDimensions.get().width,
          windowHeight: windowDimensions.get().height,
          windowHeightIgnoringKeyboard: closure_2.get().height,
          controlsHeightValue: controlsSpecs.get().height,
          safeArea: safeArea.get(),
        };
        return obj;
      };
      fn.__closure = {
        connected,
        controlsSpecs,
        mode,
        windowDimensions,
        windowDimensionsIgnoringKeyboard: tmp2,
        safeArea,
      };
      fn.__workletHash = 7484122181254;
      fn.__initData = __initData5;
      const fn2 = function s(safeAreaState, currentControlsMode) {
        let controlsHeightValue;
        let maxHeight;
        let minHeight;
        let tmpResult5;
        let tmpResult8;
        let windowWidth;
        const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
        cheapWorkletShallowEqual2;
        const tmp4 = currentControlsMode;
        if (!cheapWorkletShallowEqual(safeAreaState, tmp4)) {
          ({ currentControlsMode, mode, windowWidth, controlsHeightValue, safeArea } = safeAreaState);
          if (unpackModuleId.DISMISSED !== mode) {
            if (unpackModuleId.PIP !== mode) {
              const PANEL = unpackModuleId.PANEL;
              if (constants.RESET === currentControlsMode) {
                let currentControlsMode1;
                const tmpResult = ReanimatedRexport;
                const runOnJSResult = tmpResult.runOnJS(setControlsMode);
                if (currentControlsMode != null) {
                  currentControlsMode1 = currentControlsMode.currentControlsMode;
                }
                if (currentControlsMode1 == null) {
                  currentControlsMode1 = constants.FLOATING_DEFAULT;
                }
                const obj = { mode: currentControlsMode1 };
                runOnJSResult(obj);
              } else if (constants.HIDDEN === currentControlsMode) {
                if (isScreenReaderEnabled) {
                  const obj2 = { hidden: false };
                  set4 = wrapperSpecs.set;
                  const merged = Object.assign(wrapperSpecs.get());
                  set4(obj2);
                } else if (!wrapperSpecs.get().hidden) {
                  const obj3 = { hidden: true };
                  set3 = wrapperSpecs.set;
                  const merged1 = Object.assign(wrapperSpecs.get());
                  set3(obj3);
                }
              } else if (constants.FLOATING_DEFAULT === currentControlsMode) {
                size = {
                  x: 0,
                  y: -1 * Math.max(safeArea.bottom, map1),
                  width: tmpResult5.getControlsDefaultWidth(windowWidth, safeArea.left, safeArea.right),
                  height: controlsHeightValue,
                  drawerMode: false,
                  hidden: false,
                };
                const _Math = Math;
                set2 = wrapperSpecs.set;
                tmpResult5 = VoicePanelControlsUtils;
                set2(size);
              } else if (constants.DRAWER === currentControlsMode) {
                const tmpResult6 = VoicePanelControlUtils;
                const drawerSpec = tmpResult6.getDrawerSpec(tmp5, safeArea.top);
                ({ minHeight, maxHeight } = drawerSpec);
                if (wrapperSpecs.get().height <= controlsHeightValue) {
                  minHeight = maxHeight;
                } else if (null != currentControlsMode) {
                  const height = wrapperSpecs.get().height;
                  VoicePanelControlUtils;
                }
                const size1 = {
                  x: 0,
                  y: 0,
                  width: tmpResult8.getControlsDrawerOpenWidth(windowWidth, safeArea.left, safeArea.right),
                  height: minHeight,
                  drawerMode: true,
                  hidden: false,
                };
                set = wrapperSpecs.set;
                tmpResult8 = VoicePanelControlsUtils;
                const result = set(size1);
              }
            }
          }
          if (!wrapperSpecs.get().hidden) {
            const obj4 = { hidden: true };
            set5 = wrapperSpecs.set;
            const merged2 = Object.assign(wrapperSpecs.get());
            set5(obj4);
          }
        }
      };
      let obj3 = {
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        VoicePanelModes,
        wrapperSpecs,
        VoicePanelControlsModes,
        runOnJS: require("ReanimatedRexport").runOnJS,
        setControlsMode,
        isScreenReaderEnabled,
        EDGE_GUTTER,
        getControlsDefaultWidth: require("VoicePanelControlsUtils").getControlsDefaultWidth,
        getDrawerSpec: require("VoicePanelControlUtils").getDrawerSpec,
        getControlsDrawerOpenWidth: require("VoicePanelControlsUtils").getControlsDrawerOpenWidth,
      };
      fn2.__closure = obj3;
      fn2.__workletHash = 10920648880497;
      fn2.__initData = __initData6;
      const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
    };
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_41 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let accessoryHeights;
        let channelId;
        let controlsSpecs;
        let gestureState;
        let items;
        let wrapperSpecs;
        const obj = react2;
        const cResult = obj.c(16);
        ({ channelId, wrapperSpecs, controlsSpecs, accessoryHeights, gestureState } = arg0);
        const obj2 = VoicePanelFloatingCTAUtils;
        const shouldShowFloatingCTA = obj2.useShouldShowFloatingCTA(channelId);
        const tmp5 = useControlsLockDefault();
        let closure_0 = tmp5;
        const isConnectingToConsole = useConsoleConnectingInfoDefault(channelId).isConnectingToConsole;
        useConsoleConnectingInfoDefault(channelId);
        if (cResult[0] === accessoryHeights) {
          if (cResult[1] === controlsSpecs) {
            if (cResult[2] === gestureState) {
              let tmp8;
              if (cResult[3] === wrapperSpecs) {
                tmp8 = cResult[4];
              }
              if (cResult[5] === tmp5) {
                let tmp13;
                let tmp17;
                class C {
                  constructor() {
                    obj = closure_0;
                    if (isConnectingToConsole) {
                      lockResult = obj.lock();
                    } else {
                      unlockResult = obj.unlock();
                    }
                    return;
                  }
                }
                let tmp12;
                if (shouldShowFloatingCTA) {
                  tmp12 = tmp8;
                }
                if (cResult[9] !== tmp12) {
                  const obj3 = { item: null, renderItem: VoicePanelFloatingCTAContainer.renderVoicePanelFloatingCTA };
                  class C {
                    constructor() {
                      obj = closure_0;
                      if (isConnectingToConsole) {
                        lockResult = obj.lock();
                      } else {
                        unlockResult = obj.unlock();
                      }
                      return;
                    }
                  }
                  const TransitionItem = native.TransitionItem;
                  const tmp15 = authStore4(TransitionItem, obj3);
                  cResult[9] = tmp12;
                  cResult[10] = tmp15;
                  tmp13 = tmp15;
                } else {
                  tmp13 = cResult[10];
                }
                let tmp16;
                if (tmp7) {
                  tmp16 = tmp8;
                }
                if (cResult[11] !== tmp16) {
                  const obj4 = { item: null, renderItem: VoicePanelConsoleStatus.renderVoicePanelConsoleStatus };
                  class C {
                    constructor() {
                      obj = closure_0;
                      if (isConnectingToConsole) {
                        lockResult = obj.lock();
                      } else {
                        unlockResult = obj.unlock();
                      }
                      return;
                    }
                  }
                  const TransitionItem2 = native.TransitionItem;
                  const tmp19 = authStore4(TransitionItem2, obj4);
                  cResult[11] = tmp16;
                  cResult[12] = tmp19;
                  tmp17 = tmp19;
                } else {
                  tmp17 = cResult[12];
                }
                if (cResult[13] === tmp13) {
                  let tmp20;
                  if (cResult[14] === tmp17) {
                    tmp20 = cResult[15];
                  }
                  return tmp20;
                }
                const obj5 = { children: items };
                items = [tmp13, tmp17];
                const tmp23 = closure_20(closure_19, obj5);
                cResult[13] = tmp13;
                cResult[14] = tmp17;
                cResult[15] = tmp23;
                tmp20 = tmp23;
              }
              class C {
                constructor() {
                  obj = closure_0;
                  if (isConnectingToConsole) {
                    lockResult = obj.lock();
                  } else {
                    unlockResult = obj.unlock();
                  }
                  return;
                }
              }
              const items1 = [isConnectingToConsole, tmp5];
              cResult[5] = tmp5;
              cResult[6] = isConnectingToConsole;
              cResult[7] = C;
              cResult[8] = items1;
            }
          }
        }
        const obj6 = { wrapperSpecs, controlsSpecs, accessoryHeights, gestureState };
        cResult[0] = accessoryHeights;
        cResult[1] = controlsSpecs;
        cResult[2] = gestureState;
        cResult[3] = wrapperSpecs;
        cResult[4] = obj6;
        tmp8 = obj6;
      }
    : (controlsSpecs) => {
        let channelId;
        let wrapperSpecs;
        ({ channelId, wrapperSpecs } = controlsSpecs);
        controlsSpecs = controlsSpecs.controlsSpecs;
        const accessoryHeights = controlsSpecs.accessoryHeights;
        const gestureState = controlsSpecs.gestureState;
        const obj = VoicePanelFloatingCTAUtils;
        const shouldShowFloatingCTA = obj.useShouldShowFloatingCTA(channelId);
        const tmp4 = useControlsLockDefault();
        let closure_4 = tmp4;
        const tmp5 = useConsoleConnectingInfoDefault(channelId);
        const isConnectingToConsole = tmp5.isConnectingToConsole;
        const items = [wrapperSpecs, controlsSpecs, accessoryHeights, gestureState];
        const isConnectingOrConnectedToConsole = tmp5.isConnectingOrConnectedToConsole;
        const memo = react.useMemo(() => ({ wrapperSpecs, controlsSpecs, accessoryHeights, gestureState }), items);
        const items1 = [isConnectingToConsole, tmp4];
        const layoutEffect = react.useLayoutEffect(() => {
          if (isConnectingToConsole) {
            closure_4.lock();
          } else {
            closure_4.unlock();
          }
        }, items1);
        let tmp11;
        const TransitionItem = native.TransitionItem;
        if (shouldShowFloatingCTA) {
          tmp11 = memo;
        }
        const items2 = [,];
        const obj2 = { item: tmp11, renderItem: VoicePanelFloatingCTAContainer.renderVoicePanelFloatingCTA };
        items2[0] = authStore4(TransitionItem, obj2);
        let tmp12;
        const TransitionItem2 = native.TransitionItem;
        if (isConnectingOrConnectedToConsole) {
          tmp12 = memo;
        }
        const obj3 = { children: items2 };
        const obj4 = { item: tmp12, renderItem: VoicePanelConsoleStatus.renderVoicePanelConsoleStatus };
        items2[1] = authStore4(TransitionItem2, obj4);
        return closure_20(closure_19, obj3);
      },
);
const __initData7 = {
  code: 'function VoicePanelControlsTsx14(){const{controlsSpecs,connected,sharedTab,wrapperSpecs,TRANSITIONAL_HEIGHT,CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const showPushToTalkText=controlsSpecs.get().pushToTalk&&connected.get();const height=sharedTab.get()==="settings"&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?CONTROLS_DRAWER_HEADER_EXPANDED_SIZE:controlsSpecs.get().height;const translateY=function(){return sharedTab.get()!=="settings"&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?-controlsSpecs.get().height:0;}();return{top:showPushToTalkText?-4:0,height:withSpring(height,MODE_CHANGE_PHYSICS),opacity:withSpring(sharedTab.get()!=="settings"&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(translateY,MODE_CHANGE_PHYSICS)},{scale:withSpring(sharedTab.get()!=="settings"&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0.95:1,MODE_CHANGE_PHYSICS)}]};}',
};
const __initData8 = {
  code: "function VoicePanelControlsTsx15(){const{controlsSpecs,connected,sharedTab,wrapperSpecs,TRANSITIONAL_HEIGHT,CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const showPushToTalkText=controlsSpecs.get().pushToTalk&&connected.get();const height=sharedTab.get()==='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?CONTROLS_DRAWER_HEADER_EXPANDED_SIZE:controlsSpecs.get().height;const translateY=function(){return sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?-controlsSpecs.get().height:0;}();return{top:showPushToTalkText?-4:0,height:withSpring(height,MODE_CHANGE_PHYSICS),opacity:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(translateY,MODE_CHANGE_PHYSICS)},{scale:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0.95:1,MODE_CHANGE_PHYSICS)}]};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_44 = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (openTab) => {
        let controlsSpecs;
        let sharedTab;
        let tmp10;
        let tmp11;
        let obj = openTab(sharedTab[13]);
        const cResult = obj.c(18);
        const tmp = openTab;
        openTab = openTab.openTab;
        const wrapperSpecs = openTab.wrapperSpecs;
        sharedTab = openTab.sharedTab;
        const ref = controlsSpecs.useRef(true);
        const tmp6 = wrapperSpecs(sharedTab[34])(ref);
        const tmp7 = closure_21();
        const context = controlsSpecs.useContext(wrapperSpecs(sharedTab[16]));
        const obj2 = controlsSpecs;
        controlsSpecs = context.controlsSpecs;
        const connected = context.connected;
        const arr = wrapperSpecs(sharedTab[35])();
        let obj3 = openTab(sharedTab[17]);
        const fn = function s() {
          let items;
          let num4;
          let obj4;
          let tmp6Result;
          let withSpring;
          const pushToTalk = controlsSpecs.get().pushToTalk && connected.get();
          if ("settings" === sharedTab.get()) {
            let height;
            if (wrapperSpecs.get().height >= c22) {
              height = closure_14;
            }
            num = 0;
            if ("settings" !== sharedTab.get()) {
              num = 0;
              if (wrapperSpecs.get().height >= c22) {
                num = -controlsSpecs.get().height;
              }
            }
            let num2 = 0;
            if (pushToTalk) {
              num2 = -4;
            }
            const obj3 = {
              top: num2,
              height: obj4.withSpring(height, metroImportAll),
              opacity: withSpring(num4, metroImportAll),
              transform: items,
            };
            obj4 = spring;
            withSpring = spring.withSpring;
            num4 = 1;
            spring;
            if ("settings" !== sharedTab.get()) {
              num4 = 1;
              if (wrapperSpecs.get().height >= c22) {
                num4 = 0;
              }
            }
            const obj5 = { translateY: tmp6Result.withSpring(num, metroImportAll) };
            items = [obj5];
            tmp6Result = spring;
            const withSpring2 = spring.withSpring;
            let num5 = 1;
            spring;
            if ("settings" !== sharedTab.get()) {
              num5 = 1;
              if (wrapperSpecs.get().height >= c22) {
                num5 = 0.95;
              }
            }
            items[1] = { scale: withSpring2(num5, metroImportAll) };
            const obj6 = { scale: withSpring2(num5, metroImportAll) };
            return obj3;
          }
          height = controlsSpecs.get().height;
        };
        let obj4 = {
          controlsSpecs,
          connected,
          sharedTab,
          wrapperSpecs,
          TRANSITIONAL_HEIGHT: v200,
          CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,
          withSpring: openTab(sharedTab[36]).withSpring,
          MODE_CHANGE_PHYSICS,
        };
        fn.__closure = obj4;
        fn.__workletHash = 2768056234959;
        fn.__initData = __initData7;
        const animatedStyle = obj3.useAnimatedStyle(fn);
        const tmp5 = wrapperSpecs;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function n() {
            ref.current = false;
          };
          let items = [];
          num = 0;
          cResult[0] = fn2;
          let num2 = 1;
          cResult[1] = items;
          tmp10 = fn2;
          tmp11 = items;
        } else {
          [tmp10, tmp11] = cResult;
        }
        const effect = obj2.useEffect(tmp10, tmp11);
        if (cResult[2] === animatedStyle) {
          let tmp13;
          let tmp14;
          if (cResult[3] === tmp7.buttonsWrapper) {
            tmp13 = cResult[4];
          }
          if (cResult[5] === arr) {
            if (cResult[6] === openTab) {
              if (cResult[7] === wrapperSpecs) {
                tmp14 = cResult[8];
              }
              if (cResult[12] === tmp13) {
                let tmp17;
                if (cResult[13] === tmp14) {
                  tmp17 = cResult[14];
                }
                if (cResult[15] === tmp6) {
                  let tmp20;
                  if (cResult[16] === tmp17) {
                    tmp20 = cResult[17];
                  }
                  return tmp20;
                }
                let obj5 = { skipEntering: tmp6, children: tmp17 };
                const tmp22 = closure_18(tmp(sharedTab[17]).LayoutAnimationConfig, obj5);
                cResult[15] = tmp6;
                cResult[16] = tmp17;
                cResult[17] = tmp22;
                tmp20 = tmp22;
              }
              let obj6 = { style: tmp13, children: tmp14 };
              const tmp19 = closure_18(tmp5(sharedTab[37]), obj6);
              cResult[12] = tmp13;
              cResult[13] = tmp14;
              cResult[14] = tmp19;
              tmp17 = tmp19;
            }
          }
          if (cResult[9] === openTab) {
            let tmp15;
            if (cResult[10] === wrapperSpecs) {
              tmp15 = cResult[11];
            }
            const mapped = arr.map(tmp15);
            cResult[5] = arr;
            cResult[6] = openTab;
            cResult[7] = wrapperSpecs;
            cResult[8] = mapped;
            tmp14 = mapped;
          }
          const fn3 = function p(props) {
            const obj = { props, openTab, wrapperSpecs };
            return props.render(props.key, obj);
          };
          cResult[9] = openTab;
          let num4 = 10;
          cResult[10] = wrapperSpecs;
          let num5 = 11;
          cResult[11] = fn3;
          tmp15 = fn3;
        }
        const items1 = [tmp7.buttonsWrapper, animatedStyle];
        cResult[2] = animatedStyle;
        cResult[3] = tmp7.buttonsWrapper;
        cResult[4] = items1;
        tmp13 = items1;
      }
    : (sharedTab) => {
        let items;
        let obj4;
        let openTab;
        let require;
        let tmp7;
        let wrapperSpecs;
        ({ openTab: require, wrapperSpecs } = sharedTab);
        sharedTab = sharedTab.sharedTab;
        let controlsSpecs;
        const ref = controlsSpecs.useRef(true);
        const tmp2 = wrapperSpecs(sharedTab[34])(ref);
        const tmp3 = closure_21();
        const context = controlsSpecs.useContext(wrapperSpecs(sharedTab[16]));
        controlsSpecs = context.controlsSpecs;
        const connected = context.connected;
        const arr = wrapperSpecs(sharedTab[35])();
        let obj = require("ReanimatedRexport");
        const fn = function c() {
          let items;
          let num4;
          let obj4;
          let tmp6Result;
          let withSpring;
          const pushToTalk = controlsSpecs.get().pushToTalk && connected.get();
          if ("settings" === sharedTab.get()) {
            let height;
            if (wrapperSpecs.get().height >= c22) {
              height = closure_14;
            }
            num = 0;
            if ("settings" !== sharedTab.get()) {
              num = 0;
              if (wrapperSpecs.get().height >= c22) {
                num = -controlsSpecs.get().height;
              }
            }
            let num2 = 0;
            if (pushToTalk) {
              num2 = -4;
            }
            const obj3 = {
              top: num2,
              height: obj4.withSpring(height, metroImportAll),
              opacity: withSpring(num4, metroImportAll),
              transform: items,
            };
            obj4 = spring;
            withSpring = spring.withSpring;
            num4 = 1;
            spring;
            if ("settings" !== sharedTab.get()) {
              num4 = 1;
              if (wrapperSpecs.get().height >= c22) {
                num4 = 0;
              }
            }
            const obj5 = { translateY: tmp6Result.withSpring(num, metroImportAll) };
            items = [obj5];
            tmp6Result = spring;
            const withSpring2 = spring.withSpring;
            let num5 = 1;
            spring;
            if ("settings" !== sharedTab.get()) {
              num5 = 1;
              if (wrapperSpecs.get().height >= c22) {
                num5 = 0.95;
              }
            }
            items[1] = { scale: withSpring2(num5, metroImportAll) };
            const obj6 = { scale: withSpring2(num5, metroImportAll) };
            return obj3;
          }
          height = controlsSpecs.get().height;
        };
        fn.__closure = {
          controlsSpecs,
          connected,
          sharedTab,
          wrapperSpecs,
          TRANSITIONAL_HEIGHT: v200,
          CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,
          withSpring: require("spring").withSpring,
          MODE_CHANGE_PHYSICS,
        };
        fn.__workletHash = 13396289461614;
        fn.__initData = __initData8;
        ({
          controlsSpecs,
          connected,
          sharedTab,
          wrapperSpecs,
          TRANSITIONAL_HEIGHT: v200,
          CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,
          withSpring: require("spring").withSpring,
          MODE_CHANGE_PHYSICS,
        });
        const animatedStyle = obj.useAnimatedStyle(fn);
        const effect = controlsSpecs.useEffect(() => {
          ref.current = false;
        }, []);
        let obj3 = { skipEntering: tmp2, children: closure_18(tmp7, obj4) };
        const LayoutAnimationConfig = require("ReanimatedRexport").LayoutAnimationConfig;
        obj4 = {
          style: items,
          children: arr.map((props) => {
            const obj = { props, openTab: require, wrapperSpecs };
            return props.render(props.key, obj);
          }),
        };
        items = [tmp3.buttonsWrapper, animatedStyle];
        tmp7 = wrapperSpecs(sharedTab[37]);
        return closure_18(LayoutAnimationConfig, obj3);
      },
);
const __initData9 = {
  code: "function VoicePanelControlsTsx16(){const{withSpring,wrapperSpecs,borderRadius,BORDER_RADIUS_PHYSICS,PANEL_CONTROLS_HEIGHT_PHYSICS,MODE_CHANGE_PHYSICS,roundToNearestPixel,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;return{borderBottomRightRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),borderBottomLeftRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),height:withSpring(wrapperSpecs.get().height,PANEL_CONTROLS_HEIGHT_PHYSICS),width:withSpring(wrapperSpecs.get().width,MODE_CHANGE_PHYSICS),marginLeft:withSpring(roundToNearestPixel(wrapperSpecs.get().width/2)*-1,MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}",
};
const __initData10 = {
  code: "function VoicePanelControlsTsx17(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}",
};
const __initData11 = {
  code: "function VoicePanelControlsTsx18(mode_0,previousMode){const{isScreenReaderEnabled,VoicePanelControlsModes,runOnJS,setIsDrawer}=this.__closure;if(mode_0===previousMode||!isScreenReaderEnabled){return;}if(mode_0===VoicePanelControlsModes.DRAWER&&previousMode!==VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(true);}else{if(mode_0!==VoicePanelControlsModes.DRAWER&&previousMode===VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(false);}}}",
};
const __initData12 = {
  code: "function VoicePanelControlsTsx19(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}",
};
const __initData13 = {
  code: "function VoicePanelControlsTsx20(drawerMode,previousDrawerMode){const{runOnJS,setIsDrawerActive}=this.__closure;if(drawerMode===previousDrawerMode){return;}if(drawerMode){runOnJS(setIsDrawerActive)(true);}else{runOnJS(setIsDrawerActive)(false);}}",
};
const __initData14 = {
  code: "function VoicePanelControlsTsx21(){const{withSpring,wrapperSpecs,borderRadius,BORDER_RADIUS_PHYSICS,PANEL_CONTROLS_HEIGHT_PHYSICS,MODE_CHANGE_PHYSICS,roundToNearestPixel,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;return{borderBottomRightRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),borderBottomLeftRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),height:withSpring(wrapperSpecs.get().height,PANEL_CONTROLS_HEIGHT_PHYSICS),width:withSpring(wrapperSpecs.get().width,MODE_CHANGE_PHYSICS),marginLeft:withSpring(roundToNearestPixel(wrapperSpecs.get().width/2)*-1,MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}",
};
const __initData15 = {
  code: "function VoicePanelControlsTsx22(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}",
};
const __initData16 = {
  code: "function VoicePanelControlsTsx23(mode_0,previousMode){const{isScreenReaderEnabled,VoicePanelControlsModes,runOnJS,setIsDrawer}=this.__closure;if(mode_0===previousMode||!isScreenReaderEnabled)return;if(mode_0===VoicePanelControlsModes.DRAWER&&previousMode!==VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(true);}else if(mode_0!==VoicePanelControlsModes.DRAWER&&previousMode===VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(false);}}",
};
const __initData17 = {
  code: "function VoicePanelControlsTsx24(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}",
};
const __initData18 = {
  code: "function VoicePanelControlsTsx25(drawerMode,previousDrawerMode){const{runOnJS,setIsDrawerActive}=this.__closure;if(drawerMode===previousDrawerMode)return;if(drawerMode){runOnJS(setIsDrawerActive)(true);}else{runOnJS(setIsDrawerActive)(false);}}",
};
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (gestureState) => {
        let channelId;
        let closure_8;
        let closure_9;
        let gesture;
        let gestureSpecs;
        let hiddenProps;
        let hiddenStyles;
        let scrollLockTargets;
        let setControlsMode;
        let tmp49;
        let tmp = gestureState;
        let obj = gestureState(channelId[13]);
        const cResult = obj.c(72);
        gestureState = gestureState.gestureState;
        let obj2 = gestureState(channelId[25]);
        const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
        const obj3 = setControlsMode;
        const tmp5 = isScreenReaderEnabled;
        const context = setControlsMode.useContext(isScreenReaderEnabled(channelId[16]));
        channelId = context.channelId;
        const controlsSpecs = context.controlsSpecs;
        setControlsMode = context.setControlsMode;
        let mode = context.mode;
        let tmp7 = closure_21();
        let tmp9 = controlsSpecs(setControlsMode.useState(null), 2);
        const first = tmp9[0];
        ChannelRTCStore = tmp9[1];
        const obj4 = gestureState(channelId[17]);
        const sharedValue = obj4.useSharedValue(first);
        if (cResult[0] === sharedValue) {
          let tmp12;
          let tmp15;
          if (cResult[1] === first) {
            tmp12 = cResult[2];
          }
          const layoutEffect = obj3.useLayoutEffect(tmp12);
          const tmp14 = tmp5(channelId[38])(channelId);
          if (cResult[3] !== tmp14) {
            const obj5 = { shouldFetch: tmp14 };
            num = 3;
            cResult[3] = tmp14;
            let num2 = 4;
            cResult[4] = obj5;
            tmp15 = obj5;
          } else {
            tmp15 = cResult[4];
          }
          const tmpResult = tmp(tmp2[39]);
          const maybeFetchSoundboardSounds = tmpResult.useMaybeFetchSoundboardSounds(tmp15);
          if (cResult[5] === channelId) {
            if (cResult[6] === controlsSpecs) {
              let tmp17;
              if (cResult[7] === setControlsMode) {
                tmp17 = cResult[8];
              }
              MODE_CHANGE_PHYSICS = tmp17;
              const tmp18 = tmp5(channelId[41])();
              BORDER_RADIUS_PHYSICS = tmp18;
              if (cResult[9] === channelId) {
                let tmp19;
                if (cResult[10] === tmp17) {
                  tmp19 = cResult[11];
                }
                if (cResult[12] === channelId) {
                  if (cResult[13] === controlsSpecs) {
                    if (cResult[14] === tmp17) {
                      let tmp20;
                      let tmp23;
                      if (cResult[15] === first) {
                        tmp20 = cResult[16];
                      }
                      const layoutEffect1 = obj3.useLayoutEffect(tmp19, tmp20);
                      if (cResult[17] !== tmp17) {
                        class F {
                          constructor() {
                            handleOpenChatTab = function handleOpenChatTab() {
                              const obj = {
                                tab: "chat",
                                source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.HEADER_BUTTON,
                              };
                              closure_1_8(obj);
                            };
                            ComponentDispatch = gestureState(channelId[42]).ComponentDispatch;
                            subscription = ComponentDispatch.subscribe(
                              closure_1_16.VOICE_PANEL_OPEN_CHAT_TAB,
                              handleOpenChatTab,
                            );
                            return () => {
                              const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                              ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
                            };
                          }
                        }
                        let items = [tmp17];
                        cResult[17] = tmp17;
                        class Y {
                          constructor() {
                            handleStoreChange = function handleStoreChange() {
                              chatOpen = ChannelRTCStore.getChatOpen(channelId);
                              if (chatOpen !== chatOpen) {
                                if (chatOpen) {
                                  const obj = {
                                    tab: "chat",
                                    source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE,
                                    controlsProps: { debounce: true },
                                  };
                                  closure_8(obj);
                                }
                              }
                            };
                            obj = closure_6;
                            chatOpen = closure_6.getChatOpen(channelId);
                            if (chatOpen !== closure_0) {
                              closure_0 = chatOpen;
                              if (chatOpen) {
                                tmp2 = closure_8;
                                obj1 = { tab: "chat", source: null, controlsProps: null };
                                tmp3 = gestureState;
                                tmp4 = channelId;
                                obj1.source = gestureState(channelId[21]).VoicePanelTabAnalyticsSources.STORE;
                                obj1.controlsProps = { debounce: true };
                                tmp5 = closure_8(obj1);
                              }
                            }
                            addChangeListenerResult = obj.addChangeListener(handleStoreChange);
                            return () => {
                              ChannelRTCStore.removeChangeListener(handleStoreChange);
                            };
                          }
                        }
                        cResult[18] = F;
                        class G {
                          constructor(arg0) {
                            ({ tab, source, disableControlsUpdate, controlsProps } = gestureState);
                            disableControlsUpdate = undefined !== disableControlsUpdate && disableControlsUpdate;
                            obj = gestureState(channelId[40]);
                            batchUpdatesResult = obj.batchUpdates(() => {
                              let closure_0 = false;
                              const mode = closure_3.get().mode;
                              const DRAWER = constants.DRAWER;
                              chatOpen(function () {
                                /* body not rendered: F153667 */
                              });
                              if (!closure_3) {
                                const obj = { mode: constants.DRAWER };
                                const merged = Object.assign(closure_2);
                                setControlsMode(obj);
                              }
                              const tmp9 = closure_0 || mode !== DRAWER;
                              if (tmp9) {
                                isScreenReaderEnabled(channelId[21])(channelId, closure_0, closure_1);
                              }
                            });
                            return;
                          }
                        }
                        cResult[19] = items;
                        tmp23 = items;
                      } else {
                        class F {
                          constructor() {
                            handleOpenChatTab = function handleOpenChatTab() {
                              const obj = {
                                tab: "chat",
                                source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.HEADER_BUTTON,
                              };
                              closure_1_8(obj);
                            };
                            ComponentDispatch = gestureState(channelId[42]).ComponentDispatch;
                            subscription = ComponentDispatch.subscribe(
                              closure_1_16.VOICE_PANEL_OPEN_CHAT_TAB,
                              handleOpenChatTab,
                            );
                            return () => {
                              const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                              ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
                            };
                          }
                        }
                        tmp23 = cResult[19];
                      }
                      const effect = obj3.useEffect(F, tmp23);
                      let tmpResult9 = tmp(tmp2[43]);
                      class Y {
                        constructor() {
                          handleStoreChange = function handleStoreChange() {
                            chatOpen = ChannelRTCStore.getChatOpen(channelId);
                            if (chatOpen !== chatOpen) {
                              if (chatOpen) {
                                const obj = {
                                  tab: "chat",
                                  source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE,
                                  controlsProps: { debounce: true },
                                };
                                closure_8(obj);
                              }
                            }
                          };
                          obj = closure_6;
                          chatOpen = closure_6.getChatOpen(channelId);
                          if (chatOpen !== closure_0) {
                            closure_0 = chatOpen;
                            if (chatOpen) {
                              tmp2 = closure_8;
                              obj1 = { tab: "chat", source: null, controlsProps: null };
                              tmp3 = gestureState;
                              tmp4 = channelId;
                              obj1.source = gestureState(channelId[21]).VoicePanelTabAnalyticsSources.STORE;
                              obj1.controlsProps = { debounce: true };
                              tmp5 = closure_8(obj1);
                            }
                          }
                          addChangeListenerResult = obj.addChangeListener(handleStoreChange);
                          return () => {
                            ChannelRTCStore.removeChangeListener(handleStoreChange);
                          };
                        }
                      }
                      const tmpResult10 = tmp(tmp2[17]);
                      class G {
                        constructor(arg0) {
                          ({ tab, source, disableControlsUpdate, controlsProps } = gestureState);
                          disableControlsUpdate = undefined !== disableControlsUpdate && disableControlsUpdate;
                          obj = gestureState(channelId[40]);
                          batchUpdatesResult = obj.batchUpdates(() => {
                            let closure_0 = false;
                            const mode = closure_3.get().mode;
                            const DRAWER = constants.DRAWER;
                            chatOpen(function () {
                              /* body not rendered: F153667 */
                            });
                            if (!closure_3) {
                              const obj = { mode: constants.DRAWER };
                              const merged = Object.assign(closure_2);
                              setControlsMode(obj);
                            }
                            const tmp9 = closure_0 || mode !== DRAWER;
                            if (tmp9) {
                              isScreenReaderEnabled(channelId[21])(channelId, closure_0, closure_1);
                            }
                          });
                          return;
                        }
                      }
                      const useSharedValue = tmpResult10.useSharedValue;
                      const getControlsDefaultWidth = tmp(tmp2[23]).getControlsDefaultWidth;
                      tmp(channelId[23]);
                      const tmpResult12 = tmp(channelId[44]);
                      tmp27[0] = getControlsDefaultWidth(
                        tmpResult12.getWindowDimensions().width,
                        rect.left,
                        rect.right,
                      );
                      const sharedValue1 = useSharedValue(tmp27);
                      const tmpResult13 = tmp(channelId[19]);
                      const token = tmpResult13.useToken(
                        tmp5(tmp2[10]).modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS,
                      );
                      const tmpResult14 = tmp(channelId[17]);
                      class K {
                        constructor() {
                          let items;
                          let num2;
                          let tmp7;
                          let tmpResult6;
                          let tmpResult7;
                          let tmpResult9;
                          let withSpring2;
                          let withSpring3;
                          let y;
                          const withSpring = spring.withSpring;
                          num = 0;
                          spring;
                          if (!sharedValue1.get().drawerMode) {
                            num = token;
                          }
                          size = {
                            borderBottomRightRadius: withSpring(num, c9),
                            borderBottomLeftRadius: withSpring2(num2, c9),
                            height: tmpResult6.withSpring(sharedValue1.get().height, authStore),
                            width: tmpResult7.withSpring(sharedValue1.get().width, metroImportAll),
                            marginLeft: withSpring3(-1 * tmp7(sharedValue1.get().width / 2), metroImportAll),
                            transform: items,
                          };
                          withSpring2 = spring.withSpring;
                          num2 = 0;
                          spring;
                          if (!sharedValue1.get().drawerMode) {
                            num2 = token;
                          }
                          tmpResult6 = spring;
                          tmpResult7 = spring;
                          withSpring3 = spring.withSpring;
                          spring;
                          tmp7 = roundToNearestPixelDefault;
                          const obj2 = { translateX: tmpResult9.withSpring(sharedValue1.get().x, metroImportDefault) };
                          items = [obj2];
                          tmpResult9 = spring;
                          const withSpring4 = spring.withSpring;
                          spring;
                          if (sharedValue1.get().hidden) {
                            const sum = sharedValue1.get().height + closure_12;
                            y = sum + closure_9.get();
                          } else {
                            y = sharedValue1.get().y;
                          }
                          items[1] = { translateY: withSpring4(y, metroImportDefault) };
                          ({ translateY: withSpring4(y, metroImportDefault) });
                          return size;
                        }
                      }
                      const useAnimatedStyle = tmpResult14.useAnimatedStyle;
                      K.__closure = {
                        withSpring: tmp(channelId[36]).withSpring,
                        wrapperSpecs: sharedValue1,
                        borderRadius: token,
                        BORDER_RADIUS_PHYSICS,
                        PANEL_CONTROLS_HEIGHT_PHYSICS: sharedValue1,
                        MODE_CHANGE_PHYSICS,
                        roundToNearestPixel: tmp5(channelId[45]),
                        UI_SHOW_HIDE_PHYSICS: sharedValue,
                        gestureState,
                        CALL_TILE_GUTTER,
                        accessoryHeights: tmp18,
                      };
                      K.__workletHash = 280392793100;
                      K.__initData = __initData9;
                      const obj6 = {
                        withSpring: tmp(channelId[36]).withSpring,
                        wrapperSpecs: sharedValue1,
                        borderRadius: token,
                        BORDER_RADIUS_PHYSICS,
                        PANEL_CONTROLS_HEIGHT_PHYSICS: sharedValue1,
                        MODE_CHANGE_PHYSICS,
                        roundToNearestPixel: tmp5(channelId[45]),
                        UI_SHOW_HIDE_PHYSICS: sharedValue,
                        gestureState,
                        CALL_TILE_GUTTER,
                        accessoryHeights: tmp18,
                      };
                      const animatedStyle = useAnimatedStyle(K);
                      ({ hiddenProps, hiddenStyles } = tmp5(channelId[46])(mode, sharedValue1));
                      tmp5(channelId[46])(mode, sharedValue1);
                      ({ gesture, scrollLockTargets, gestureSpecs } = useControlsGesture(
                        first,
                        sharedValue,
                        sharedValue1,
                        tmp17,
                      ));
                      useControlsGesture(first, sharedValue, sharedValue1, tmp17);
                      closure_40(sharedValue1);
                      [r10168, tmp49] = controlsSpecs(obj3.useState(false), 2);
                      CALL_TILE_GUTTER = tmp49;
                      controlsSpecs(obj3.useState(false), 2);
                      function ue() {
                        return controlsSpecs.get().mode;
                      }
                      const obj7 = { controlsSpecs };
                      ue.__closure = obj7;
                      ue.__workletHash = 2335050944822;
                      ue.__initData = __initData10;
                      function pe(arg0, arg1) {
                        const tmp = arg0 !== arg1 && isScreenReaderEnabled;
                        if (tmp) {
                          if (arg0 === constants.DRAWER) {
                            if (arg1 !== constants.DRAWER) {
                              const obj2 = ReanimatedRexport;
                              obj2.runOnJS(CALL_TILE_GUTTER)(true);
                            }
                          }
                          const tmp3 = arg0 !== constants.DRAWER && arg1 === constants.DRAWER;
                          if (tmp3) {
                            const obj = ReanimatedRexport;
                            obj.runOnJS(CALL_TILE_GUTTER)(false);
                          }
                        }
                      }
                      const obj8 = {
                        isScreenReaderEnabled,
                        VoicePanelControlsModes,
                        runOnJS: tmp(channelId[17]).runOnJS,
                        setIsDrawer: tmp49,
                      };
                      const useAnimatedReaction = tmp(tmp2[17]).useAnimatedReaction;
                      tmp(channelId[17]);
                      pe.__closure = obj8;
                      pe.__workletHash = 12074663214929;
                      pe.__initData = __initData11;
                      const animatedReaction = useAnimatedReaction(ue, pe);
                      const tmp8Result2 = controlsSpecs(obj3.useState(false), 2);
                      let closure_13 = tmp57;
                      const first1 = tmp8Result2[0];
                      const tmpResult16 = tmp(channelId[17]);
                      class Ce {
                        constructor() {
                          return sharedValue1.get().drawerMode;
                        }
                      }
                      const obj9 = { wrapperSpecs: sharedValue1 };
                      Ce.__closure = obj9;
                      Ce.__workletHash = 2099961350703;
                      Ce.__initData = __initData12;
                      class Te {
                        constructor(arg0, arg1) {
                          if (arg0 !== arg1) {
                            const obj = ReanimatedRexport;
                            const runOnJSResult = obj.runOnJS(closure_13);
                            if (arg0) {
                              runOnJSResult(true);
                            } else {
                              runOnJSResult(false);
                            }
                          }
                        }
                      }
                      const useAnimatedReaction2 = tmpResult16.useAnimatedReaction;
                      Te.__closure = { runOnJS: tmp(channelId[17]).runOnJS, setIsDrawerActive: tmp8Result2[1] };
                      Te.__workletHash = 5494024190383;
                      Te.__initData = __initData13;
                      const obj10 = { runOnJS: tmp(channelId[17]).runOnJS, setIsDrawerActive: tmp8Result2[1] };
                      const animatedReaction2 = useAnimatedReaction2(Ce, Te);
                      const id = obj3.useId();
                      if (cResult[20] !== setControlsMode) {
                        class F {
                          constructor() {
                            handleOpenChatTab = function handleOpenChatTab() {
                              const obj = {
                                tab: "chat",
                                source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.HEADER_BUTTON,
                              };
                              closure_1_8(obj);
                            };
                            ComponentDispatch = gestureState(channelId[42]).ComponentDispatch;
                            subscription = ComponentDispatch.subscribe(
                              closure_1_16.VOICE_PANEL_OPEN_CHAT_TAB,
                              handleOpenChatTab,
                            );
                            return () => {
                              const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                              ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
                            };
                          }
                        }
                        cResult[20] = setControlsMode;
                        cResult[21] = tmp63;
                        class Y {
                          constructor() {
                            handleStoreChange = function handleStoreChange() {
                              chatOpen = ChannelRTCStore.getChatOpen(channelId);
                              if (chatOpen !== chatOpen) {
                                if (chatOpen) {
                                  const obj = {
                                    tab: "chat",
                                    source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE,
                                    controlsProps: { debounce: true },
                                  };
                                  closure_8(obj);
                                }
                              }
                            };
                            obj = closure_6;
                            chatOpen = closure_6.getChatOpen(channelId);
                            if (chatOpen !== closure_0) {
                              closure_0 = chatOpen;
                              if (chatOpen) {
                                tmp2 = closure_8;
                                obj1 = { tab: "chat", source: null, controlsProps: null };
                                tmp3 = gestureState;
                                tmp4 = channelId;
                                obj1.source = gestureState(channelId[21]).VoicePanelTabAnalyticsSources.STORE;
                                obj1.controlsProps = { debounce: true };
                                tmp5 = closure_8(obj1);
                              }
                            }
                            addChangeListenerResult = obj.addChangeListener(handleStoreChange);
                            return () => {
                              ChannelRTCStore.removeChangeListener(handleStoreChange);
                            };
                          }
                        }
                      } else {
                        class F {
                          constructor() {
                            handleOpenChatTab = function handleOpenChatTab() {
                              const obj = {
                                tab: "chat",
                                source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.HEADER_BUTTON,
                              };
                              closure_1_8(obj);
                            };
                            ComponentDispatch = gestureState(channelId[42]).ComponentDispatch;
                            subscription = ComponentDispatch.subscribe(
                              closure_1_16.VOICE_PANEL_OPEN_CHAT_TAB,
                              handleOpenChatTab,
                            );
                            return () => {
                              const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                              ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
                            };
                          }
                        }
                      }
                      if (cResult[22] !== sharedValue1) {
                        class F {
                          constructor() {
                            handleOpenChatTab = function handleOpenChatTab() {
                              const obj = {
                                tab: "chat",
                                source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.HEADER_BUTTON,
                              };
                              closure_1_8(obj);
                            };
                            ComponentDispatch = gestureState(channelId[42]).ComponentDispatch;
                            subscription = ComponentDispatch.subscribe(
                              closure_1_16.VOICE_PANEL_OPEN_CHAT_TAB,
                              handleOpenChatTab,
                            );
                            return () => {
                              const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                              ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
                            };
                          }
                        }
                        const obj11 = { wrapperSpecs: sharedValue1 };
                        closure_18(tmp5(channelId[47]), obj11);
                        class Y {
                          constructor() {
                            handleStoreChange = function handleStoreChange() {
                              chatOpen = ChannelRTCStore.getChatOpen(channelId);
                              if (chatOpen !== chatOpen) {
                                if (chatOpen) {
                                  const obj = {
                                    tab: "chat",
                                    source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE,
                                    controlsProps: { debounce: true },
                                  };
                                  closure_8(obj);
                                }
                              }
                            };
                            obj = closure_6;
                            chatOpen = closure_6.getChatOpen(channelId);
                            if (chatOpen !== closure_0) {
                              closure_0 = chatOpen;
                              if (chatOpen) {
                                tmp2 = closure_8;
                                obj1 = { tab: "chat", source: null, controlsProps: null };
                                tmp3 = gestureState;
                                tmp4 = channelId;
                                obj1.source = gestureState(channelId[21]).VoicePanelTabAnalyticsSources.STORE;
                                obj1.controlsProps = { debounce: true };
                                tmp5 = closure_8(obj1);
                              }
                            }
                            addChangeListenerResult = obj.addChangeListener(handleStoreChange);
                            return () => {
                              ChannelRTCStore.removeChangeListener(handleStoreChange);
                            };
                          }
                        }
                        class G {
                          constructor(arg0) {
                            ({ tab, source, disableControlsUpdate, controlsProps } = gestureState);
                            disableControlsUpdate = undefined !== disableControlsUpdate && disableControlsUpdate;
                            obj = gestureState(channelId[40]);
                            batchUpdatesResult = obj.batchUpdates(() => {
                              let closure_0 = false;
                              const mode = closure_3.get().mode;
                              const DRAWER = constants.DRAWER;
                              chatOpen(function () {
                                /* body not rendered: F153667 */
                              });
                              if (!closure_3) {
                                const obj = { mode: constants.DRAWER };
                                const merged = Object.assign(closure_2);
                                setControlsMode(obj);
                              }
                              const tmp9 = closure_0 || mode !== DRAWER;
                              if (tmp9) {
                                isScreenReaderEnabled(channelId[21])(channelId, closure_0, closure_1);
                              }
                            });
                            return;
                          }
                        }
                      } else {
                        class F {
                          constructor() {
                            handleOpenChatTab = function handleOpenChatTab() {
                              const obj = {
                                tab: "chat",
                                source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.HEADER_BUTTON,
                              };
                              closure_1_8(obj);
                            };
                            ComponentDispatch = gestureState(channelId[42]).ComponentDispatch;
                            subscription = ComponentDispatch.subscribe(
                              closure_1_16.VOICE_PANEL_OPEN_CHAT_TAB,
                              handleOpenChatTab,
                            );
                            return () => {
                              const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                              ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
                            };
                          }
                        }
                      }
                      if (cResult[24] === tmp18) {
                        class F {
                          constructor() {
                            handleOpenChatTab = function handleOpenChatTab() {
                              const obj = {
                                tab: "chat",
                                source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.HEADER_BUTTON,
                              };
                              closure_1_8(obj);
                            };
                            ComponentDispatch = gestureState(channelId[42]).ComponentDispatch;
                            subscription = ComponentDispatch.subscribe(
                              closure_1_16.VOICE_PANEL_OPEN_CHAT_TAB,
                              handleOpenChatTab,
                            );
                            return () => {
                              const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                              ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
                            };
                          }
                        }
                      }
                      const obj12 = {
                        channelId,
                        wrapperSpecs: sharedValue1,
                        controlsSpecs,
                        accessoryHeights: tmp18,
                        gestureState,
                      };
                      cResult[24] = tmp18;
                      cResult[25] = channelId;
                      cResult[26] = controlsSpecs;
                      cResult[27] = gestureState;
                      cResult[28] = sharedValue1;
                      cResult[29] = closure_18(closure_41, obj12);
                      const tmp69 = closure_18(closure_41, obj12);
                    }
                  }
                }
                const items1 = [channelId, controlsSpecs, ,];
                class Y {
                  constructor() {
                    handleStoreChange = function handleStoreChange() {
                      chatOpen = ChannelRTCStore.getChatOpen(channelId);
                      if (chatOpen !== chatOpen) {
                        if (chatOpen) {
                          const obj = {
                            tab: "chat",
                            source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE,
                            controlsProps: { debounce: true },
                          };
                          closure_8(obj);
                        }
                      }
                    };
                    obj = closure_6;
                    chatOpen = closure_6.getChatOpen(channelId);
                    if (chatOpen !== closure_0) {
                      closure_0 = chatOpen;
                      if (chatOpen) {
                        tmp2 = closure_8;
                        obj1 = { tab: "chat", source: null, controlsProps: null };
                        tmp3 = gestureState;
                        tmp4 = channelId;
                        obj1.source = gestureState(channelId[21]).VoicePanelTabAnalyticsSources.STORE;
                        obj1.controlsProps = { debounce: true };
                        tmp5 = closure_8(obj1);
                      }
                    }
                    addChangeListenerResult = obj.addChangeListener(handleStoreChange);
                    return () => {
                      ChannelRTCStore.removeChangeListener(handleStoreChange);
                    };
                  }
                }
                items1[3] = first;
                class G {
                  constructor(arg0) {
                    ({ tab, source, disableControlsUpdate, controlsProps } = gestureState);
                    disableControlsUpdate = undefined !== disableControlsUpdate && disableControlsUpdate;
                    obj = gestureState(channelId[40]);
                    batchUpdatesResult = obj.batchUpdates(() => {
                      let closure_0 = false;
                      const mode = closure_3.get().mode;
                      const DRAWER = constants.DRAWER;
                      chatOpen(function () {
                        /* body not rendered: F153667 */
                      });
                      if (!closure_3) {
                        const obj = { mode: constants.DRAWER };
                        const merged = Object.assign(closure_2);
                        setControlsMode(obj);
                      }
                      const tmp9 = closure_0 || mode !== DRAWER;
                      if (tmp9) {
                        isScreenReaderEnabled(channelId[21])(channelId, closure_0, closure_1);
                      }
                    });
                    return;
                  }
                }
                cResult[12] = channelId;
                cResult[13] = controlsSpecs;
                cResult[14] = tmp17;
                cResult[15] = first;
                cResult[16] = items1;
                tmp20 = items1;
              }
              class Y {
                constructor() {
                  handleStoreChange = function handleStoreChange() {
                    chatOpen = ChannelRTCStore.getChatOpen(channelId);
                    if (chatOpen !== chatOpen) {
                      if (chatOpen) {
                        const obj = {
                          tab: "chat",
                          source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE,
                          controlsProps: { debounce: true },
                        };
                        closure_8(obj);
                      }
                    }
                  };
                  obj = closure_6;
                  chatOpen = closure_6.getChatOpen(channelId);
                  if (chatOpen !== closure_0) {
                    closure_0 = chatOpen;
                    if (chatOpen) {
                      tmp2 = closure_8;
                      obj1 = { tab: "chat", source: null, controlsProps: null };
                      tmp3 = gestureState;
                      tmp4 = channelId;
                      obj1.source = gestureState(channelId[21]).VoicePanelTabAnalyticsSources.STORE;
                      obj1.controlsProps = { debounce: true };
                      tmp5 = closure_8(obj1);
                    }
                  }
                  addChangeListenerResult = obj.addChangeListener(handleStoreChange);
                  return () => {
                    ChannelRTCStore.removeChangeListener(handleStoreChange);
                  };
                }
              }
              class G {
                constructor(arg0) {
                  ({ tab, source, disableControlsUpdate, controlsProps } = gestureState);
                  disableControlsUpdate = undefined !== disableControlsUpdate && disableControlsUpdate;
                  obj = gestureState(channelId[40]);
                  batchUpdatesResult = obj.batchUpdates(() => {
                    let closure_0 = false;
                    const mode = closure_3.get().mode;
                    const DRAWER = constants.DRAWER;
                    chatOpen(function () {
                      /* body not rendered: F153667 */
                    });
                    if (!closure_3) {
                      const obj = { mode: constants.DRAWER };
                      const merged = Object.assign(closure_2);
                      setControlsMode(obj);
                    }
                    const tmp9 = closure_0 || mode !== DRAWER;
                    if (tmp9) {
                      isScreenReaderEnabled(channelId[21])(channelId, closure_0, closure_1);
                    }
                  });
                  return;
                }
              }
              cResult[10] = tmp17;
              cResult[11] = Y;
              tmp19 = Y;
            }
          }
          class G {
            constructor(arg0) {
              ({ tab, source, disableControlsUpdate, controlsProps } = gestureState);
              disableControlsUpdate = undefined !== disableControlsUpdate && disableControlsUpdate;
              obj = gestureState(channelId[40]);
              batchUpdatesResult = obj.batchUpdates(() => {
                let closure_0 = false;
                const mode = closure_3.get().mode;
                const DRAWER = constants.DRAWER;
                chatOpen(function () {
                  /* body not rendered: F153667 */
                });
                if (!closure_3) {
                  const obj = { mode: constants.DRAWER };
                  const merged = Object.assign(closure_2);
                  setControlsMode(obj);
                }
                const tmp9 = closure_0 || mode !== DRAWER;
                if (tmp9) {
                  isScreenReaderEnabled(channelId[21])(channelId, closure_0, closure_1);
                }
              });
              return;
            }
          }
          cResult[5] = channelId;
          cResult[6] = controlsSpecs;
          cResult[7] = setControlsMode;
          cResult[8] = G;
          tmp17 = G;
        }
        const fn = function n() {
          const result = sharedValue.set(first);
        };
        cResult[0] = sharedValue;
        cResult[1] = first;
        cResult[2] = fn;
        tmp12 = fn;
      }
    : (gestureState) => {
        let GestureDetector;
        let callback;
        let closure_9;
        let gesture;
        let gestureSpecs;
        let getControlsDefaultWidth;
        let hiddenProps;
        let hiddenStyles;
        let items4;
        let items5;
        let items6;
        let items7;
        let obj15;
        let obj16;
        let obj6;
        let scrollLockTargets;
        let tmp38;
        gestureState = gestureState.gestureState;
        let channelId;
        let setControlsMode;
        CALL_TILE_GUTTER = undefined;
        let closure_13;
        let tmp = gestureState;
        let obj = gestureState(channelId[25]);
        const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
        const context = setControlsMode.useContext(isScreenReaderEnabled(channelId[16]));
        channelId = context.channelId;
        const controlsSpecs = context.controlsSpecs;
        setControlsMode = context.setControlsMode;
        let mode = context.mode;
        const tmp6 = closure_21();
        let tmp7 = controlsSpecs(setControlsMode.useState(null), 2);
        const tab = tmp7[0];
        let chatOpen = tmp7[1];
        let obj2 = gestureState(channelId[17]);
        const sharedValue = obj2.useSharedValue(tab);
        const layoutEffect = setControlsMode.useLayoutEffect(() => {
          const result = sharedValue.set(first);
        });
        const tmp11 = isScreenReaderEnabled(channelId[38])(channelId);
        const obj3 = gestureState(channelId[39]);
        const maybeFetchSoundboardSounds = obj3.useMaybeFetchSoundboardSounds({ shouldFetch: tmp11 });
        let items = [channelId, controlsSpecs, setControlsMode];
        const openTab = setControlsMode.useCallback((controlsProps) => {
          let disableControlsUpdate;
          ({ tab: gestureState, source: isScreenReaderEnabled, disableControlsUpdate } = controlsProps);
          if (disableControlsUpdate === undefined) {
            disableControlsUpdate = false;
          }
          controlsProps = controlsProps.controlsProps;
          let obj = gestureState(channelId[40]);
          obj.batchUpdates(() => {
            let closure_0 = false;
            const mode = controlsProps.get().mode;
            const DRAWER = constants.DRAWER;
            chatOpen((arg0) => {
              gestureState = arg0 !== gestureState;
              return gestureState;
            });
            if (!disableControlsUpdate) {
              const obj = { mode: constants.DRAWER };
              const merged = Object.assign(controlsProps);
              setControlsMode(obj);
            }
            const tmp9 = closure_0 || mode !== DRAWER;
            if (tmp9) {
              isScreenReaderEnabled(channelId[21])(disableControlsUpdate, closure_0, closure_1);
            }
          });
        }, items);
        const tmp14 = isScreenReaderEnabled(channelId[41])();
        BORDER_RADIUS_PHYSICS = tmp14;
        const items1 = [channelId, controlsSpecs, openTab, tab];
        const layoutEffect1 = setControlsMode.useLayoutEffect(() => {
          function handleStoreChange() {
            chatOpen = ChannelRTCStore.getChatOpen(channelId);
            if (chatOpen !== chatOpen) {
              if (chatOpen) {
                const obj = {
                  tab: "chat",
                  source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE,
                  controlsProps: { debounce: true },
                };
                callback(obj);
              }
            }
          }
          let obj = chatOpen;
          chatOpen = chatOpen.getChatOpen(channelId);
          if (chatOpen !== chatOpen) {
            if (chatOpen) {
              const obj2 = {
                tab: "chat",
                source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.STORE,
                controlsProps: { debounce: true },
              };
              callback(obj2);
            }
          }
          obj.addChangeListener(handleStoreChange);
          return () => {
            ChannelRTCStore.removeChangeListener(handleStoreChange);
          };
        }, items1);
        const items2 = [openTab];
        const effect = setControlsMode.useEffect(() => {
          function handleOpenChatTab() {
            const obj = {
              tab: "chat",
              source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.HEADER_BUTTON,
            };
            callback(obj);
          }
          let ComponentDispatch = gestureState(channelId[42]).ComponentDispatch;
          const subscription = ComponentDispatch.subscribe(constants2.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
          return () => {
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
          };
        }, items2);
        const obj4 = gestureState(channelId[43]);
        const rect = obj4.getSafeAreaInsets();
        size = {
          width: getControlsDefaultWidth(obj6.getWindowDimensions().width, rect.left, rect.right),
          height: 0,
          x: 0,
          y: 0,
          drawerMode: false,
          hidden: false,
        };
        const useSharedValue = gestureState(channelId[17]).useSharedValue;
        gestureState(channelId[17]);
        getControlsDefaultWidth = gestureState(channelId[23]).getControlsDefaultWidth;
        gestureState(channelId[23]);
        obj6 = gestureState(channelId[44]);
        const sharedValue1 = useSharedValue(size);
        const obj7 = gestureState(channelId[19]);
        const token = obj7.useToken(
          isScreenReaderEnabled(channelId[10]).modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS,
        );
        const fn = function k() {
          let items;
          let num2;
          let tmp7;
          let tmpResult6;
          let tmpResult7;
          let tmpResult9;
          let withSpring2;
          let withSpring3;
          let y;
          const withSpring = spring.withSpring;
          num = 0;
          spring;
          if (!sharedValue1.get().drawerMode) {
            num = token;
          }
          size = {
            borderBottomRightRadius: withSpring(num, c9),
            borderBottomLeftRadius: withSpring2(num2, c9),
            height: tmpResult6.withSpring(sharedValue1.get().height, authStore),
            width: tmpResult7.withSpring(sharedValue1.get().width, metroImportAll),
            marginLeft: withSpring3(-1 * tmp7(sharedValue1.get().width / 2), metroImportAll),
            transform: items,
          };
          withSpring2 = spring.withSpring;
          num2 = 0;
          spring;
          if (!sharedValue1.get().drawerMode) {
            num2 = token;
          }
          tmpResult6 = spring;
          tmpResult7 = spring;
          withSpring3 = spring.withSpring;
          spring;
          tmp7 = roundToNearestPixelDefault;
          const obj2 = { translateX: tmpResult9.withSpring(sharedValue1.get().x, metroImportDefault) };
          items = [obj2];
          tmpResult9 = spring;
          const withSpring4 = spring.withSpring;
          spring;
          if (sharedValue1.get().hidden) {
            const sum = sharedValue1.get().height + closure_12;
            y = sum + closure_9.get();
          } else {
            y = sharedValue1.get().y;
          }
          items[1] = { translateY: withSpring4(y, metroImportDefault) };
          ({ translateY: withSpring4(y, metroImportDefault) });
          return size;
        };
        const obj8 = gestureState(channelId[17]);
        fn.__closure = {
          withSpring: gestureState(channelId[36]).withSpring,
          wrapperSpecs: sharedValue1,
          borderRadius: token,
          BORDER_RADIUS_PHYSICS,
          PANEL_CONTROLS_HEIGHT_PHYSICS: sharedValue1,
          MODE_CHANGE_PHYSICS: openTab,
          roundToNearestPixel: isScreenReaderEnabled(channelId[45]),
          UI_SHOW_HIDE_PHYSICS: sharedValue,
          gestureState,
          CALL_TILE_GUTTER,
          accessoryHeights: tmp14,
        };
        fn.__workletHash = 5600912622376;
        fn.__initData = __initData14;
        ({
          withSpring: gestureState(channelId[36]).withSpring,
          wrapperSpecs: sharedValue1,
          borderRadius: token,
          BORDER_RADIUS_PHYSICS,
          PANEL_CONTROLS_HEIGHT_PHYSICS: sharedValue1,
          MODE_CHANGE_PHYSICS: openTab,
          roundToNearestPixel: isScreenReaderEnabled(channelId[45]),
          UI_SHOW_HIDE_PHYSICS: sharedValue,
          gestureState,
          CALL_TILE_GUTTER,
          accessoryHeights: tmp14,
        });
        const animatedStyle = obj8.useAnimatedStyle(fn);
        ({ hiddenProps, hiddenStyles } = isScreenReaderEnabled(channelId[46])(mode, sharedValue1));
        isScreenReaderEnabled(channelId[46])(mode, sharedValue1);
        ({ gesture, scrollLockTargets, gestureSpecs } = useControlsGesture(tab, sharedValue, sharedValue1, openTab));
        useControlsGesture(tab, sharedValue, sharedValue1, openTab);
        closure_40(sharedValue1);
        const tmp25 = controlsSpecs(setControlsMode.useState(false), 2);
        CALL_TILE_GUTTER = tmp27;
        const first1 = tmp25[0];
        const obj10 = gestureState(channelId[17]);
        const tmp4 = isScreenReaderEnabled;
        class Q {
          constructor() {
            return controlsSpecs.get().mode;
          }
        }
        Q.__closure = { controlsSpecs };
        Q.__workletHash = 6330335092624;
        Q.__initData = __initData15;
        const fn2 = function z(arg0, arg1) {
          const tmp = arg0 !== arg1 && isScreenReaderEnabled;
          if (tmp) {
            if (arg0 === constants.DRAWER) {
              if (arg1 !== constants.DRAWER) {
                const obj2 = ReanimatedRexport;
                obj2.runOnJS(closure_12)(true);
              }
            }
            const tmp3 = arg0 !== constants.DRAWER && arg1 === constants.DRAWER;
            if (tmp3) {
              const obj = ReanimatedRexport;
              obj.runOnJS(closure_12)(false);
            }
          }
        };
        fn2.__closure = {
          isScreenReaderEnabled,
          VoicePanelControlsModes,
          runOnJS: gestureState(channelId[17]).runOnJS,
          setIsDrawer: tmp25[1],
        };
        fn2.__workletHash = 5998141114201;
        fn2.__initData = __initData16;
        ({
          isScreenReaderEnabled,
          VoicePanelControlsModes,
          runOnJS: gestureState(channelId[17]).runOnJS,
          setIsDrawer: tmp25[1],
        });
        const animatedReaction = obj10.useAnimatedReaction(Q, fn2);
        const tmp29 = controlsSpecs(setControlsMode.useState(false), 2);
        closure_13 = tmp31;
        const first2 = tmp29[0];
        function ie() {
          return sharedValue1.get().drawerMode;
        }
        ie.__closure = { wrapperSpecs: sharedValue1 };
        ie.__workletHash = 2190826266433;
        ie.__initData = __initData17;
        function ne(arg0, arg1) {
          if (arg0 !== arg1) {
            const obj = ReanimatedRexport;
            const runOnJSResult = obj.runOnJS(closure_13);
            if (arg0) {
              runOnJSResult(true);
            } else {
              runOnJSResult(false);
            }
          }
        }
        const obj12 = gestureState(channelId[17]);
        ne.__closure = { runOnJS: gestureState(channelId[17]).runOnJS, setIsDrawerActive: tmp29[1] };
        ne.__workletHash = 11506068361772;
        ne.__initData = __initData18;
        ({ runOnJS: gestureState(channelId[17]).runOnJS, setIsDrawerActive: tmp29[1] });
        const animatedReaction1 = obj12.useAnimatedReaction(ie, ne);
        const items3 = [setControlsMode];
        const id = setControlsMode.useId();
        const callback1 = setControlsMode.useCallback(() => {
          const obj = { mode: constants.FLOATING_DEFAULT };
          setControlsMode(obj);
        }, items3);
        const obj13 = { value: scrollLockTargets, children: items4 };
        const Provider = gestureState(channelId[51]).ControlsGestureScrollLock.Provider;
        items4 = [
          closure_18(isScreenReaderEnabled(channelId[47]), { wrapperSpecs: sharedValue1 }),
          closure_18(closure_41, {
            channelId,
            wrapperSpecs: sharedValue1,
            controlsSpecs,
            accessoryHeights: tmp14,
            gestureState,
          }),
        ];
        const obj14 = {
          nativeID: id,
          style: tmp6.accessibilityWrapper,
          accessibilityViewIsModal: first1,
          onAccessibilityEscape: callback1,
          pointerEvents: "box-none",
          children: closure_18(GestureDetector, obj15),
        };
        obj15 = { gesture, children: closure_20(tmp38, obj16) };
        const tmp37 = isScreenReaderEnabled(channelId[50]);
        GestureDetector = gestureState(channelId[20]).GestureDetector;
        obj16 = { style: items5, animatedProps: hiddenProps, children: items7 };
        items5 = [tmp6.wrapper, animatedStyle, hiddenStyles];
        let ONYX;
        tmp38 = isScreenReaderEnabled(channelId[37]);
        const ThemeContextProvider = gestureState(channelId[31]).ThemeContextProvider;
        if (tmp11) {
          if (!first2) {
            ONYX = constants2.ONYX;
          }
        }
        const obj17 = { theme: ONYX, children: items6 };
        items6 = [,];
        const obj18 = { matchAppTheme: !tmp11 };
        items6[0] = closure_18(tmp(channelId[48]).VoicePanelVisualEffectView, obj18);
        items6[1] = closure_18(closure_44, { openTab, wrapperSpecs: sharedValue1, sharedTab: sharedValue });
        items7 = [
          closure_20(ThemeContextProvider, obj17),
          closure_18(tmp4(tmp2[49]), {
            wrapperSpecs: sharedValue1,
            tab,
            sharedTab: sharedValue,
            gestureSpecs,
            openTab,
          }),
        ];
        const tmpResult = tmp(tmp2[11]);
        let tmp36Result = null;
        if (!tmpResult.isMetaQuest()) {
          const obj19 = { openTab };
          tmp36Result = closure_18(closure_25, obj19);
        }
        items7[2] = tmp36Result;
        items4[2] = closure_18(tmp37, obj14);
        return closure_20(Provider, obj13);
      },
);
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControls.tsx");

export default memoResult;
