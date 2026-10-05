// discord_app/modules/voice_panel/native/controls/VoicePanelControls.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import LegacyBaseButton from "../../../../../_runtime/06140_LegacyBaseButton.js";
import native2 from "../../../../design/components/experimental/native.tsx";
import cheapWorkletShallowEqual from "../../../reanimated/native/cheapWorkletShallowEqual.tsx";
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
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";

require = fn;
function useControlsGesture(tab, sharedValue, sharedValue1, G) {
  _require = tab;
  importDefault = sharedValue;
  dependencyMap = sharedValue1;
  const openTab = G;
  const context = controlsSpecs.useContext(VoicePanelStateContextDefault);
  controlsSpecs = context.controlsSpecs;
  const windowDimensions = context.windowDimensions;
  const wrapperDimensions = context.wrapperDimensions;
  const safeArea = context.safeArea;
  let point = { absoluteX: 0, absoluteY: 0, x: 0, y: 0, height: 0, isDrawer: false, active: false, drawerTransitionHeight: v200, interFloatingTransitionHeight };
  const gestureSpecs = require("ReanimatedRexport").useSharedValue(point);
  let obj = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  let obj3 = require("ReanimatedRexport");
  const sharedValue2 = require("ReanimatedRexport").useSharedValue(false);
  let obj4 = require("ReanimatedRexport");
  const sharedValue3 = require("ReanimatedRexport").useSharedValue(0);
  const ref = controlsSpecs.useRef(undefined);
  let obj5 = require("ReanimatedRexport");
  const sharedValue4 = require("ReanimatedRexport").useSharedValue(false);
  const items = [ref, sharedValue2, sharedValue4, sharedValue3];
  const scrollLockTargets = controlsSpecs.useMemo(() => ({ gestureRef: ref, scrollLocked: sharedValue4, scrollOffsetValue: sharedValue3, isDragScrolling: sharedValue2 }), items);
  const tmp9 = useControlsLockDefault();
  const gestureLock = tmp9;
  let obj6 = require("ReanimatedRexport");
  const token = require("useToken").useToken(nativeDefault.modules.mobile.VOICE_PANEL_GUTTER);
  const items1 = [controlsSpecs, tmp9, gestureSpecs, sharedValue2, G, safeArea, sharedValue4, sharedValue3, sharedValue, tab, sharedValue1, windowDimensions, wrapperDimensions, sharedValue1, token];
  const gesture = controlsSpecs.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const manualActivationResult = Gesture.Pan().manualActivation(true);
    let result = Gesture.Pan().manualActivation(true).maxPointers(1).shouldCancelWhenOutside(false);
    const maxPointersResult = Gesture.Pan().manualActivation(true).maxPointers(1);
    class M {
      constructor(arg0) {
        result = closure_1_9.set(0);
        point = { absoluteX: arg0.changedTouches[0].absoluteX, absoluteY: arg0.changedTouches[0].absoluteY, x: closure_1_2.get().x, y: closure_1_2.get().y, height: closure_1_2.get().height, isDrawer: closure_1_4.get().mode === closure_15.DRAWER, active: false, drawerTransitionHeight: closure_2_22, interFloatingTransitionHeight: closure_2_23 };
        result1 = closure_1_8.set(point);
        return;
      }
    }
    M.__closure = { touchMoveCount: sharedValue1, gestureSpecs, wrapperSpecs, controlsSpecs, VoicePanelControlsModes, TRANSITIONAL_HEIGHT, INTER_FLOATING_TRANSITIONAL_HEIGHT };
    M.__workletHash = 3524850376026;
    M.__initData = __initData7;
    let obj = { touchMoveCount: sharedValue1, gestureSpecs, wrapperSpecs, controlsSpecs, VoicePanelControlsModes, TRANSITIONAL_HEIGHT, INTER_FLOATING_TRANSITIONAL_HEIGHT };
    const withRefResult = result.withRef(ref);
    class O {
      constructor() {
        obj = closure_0(closure_2[17]);
        tmp = obj.runOnJS(closure_1_14.lock)();
        return;
      }
    }
    const onTouchesDownResult = result.withRef(ref).onTouchesDown(M);
    O.__closure = { runOnJS: ReanimatedRexport.runOnJS, gestureLock };
    O.__workletHash = 11720944776433;
    O.__initData = __initData6;
    let obj2 = { runOnJS: ReanimatedRexport.runOnJS, gestureLock };
    const fn = function f(state, fail) {
      if (state.state === closure_0(dependencyMap[20]).State.BEGAN) {
        if (!gestureSpecs.get().active) {
          if (controlsSpecs.get().mode !== token.HIDDEN) {
            const result = sharedValue1.set(sharedValue1.get() + 1);
            value = sharedValue1.get() <= num;
            if (!value) {
              value = sharedValue2.get();
            }
            value2 = sharedTab.get();
            if ("settings" === value2) {
              let num2 = sharedValue3.get();
            } else {
              num2 = 0;
            }
            ({ absoluteY, absoluteX } = state.changedTouches[0]);
            const diff = gestureSpecs.get().absoluteY - absoluteY;
            let tmp15 = controlsSpecs.get().mode === token.DRAWER && value;
            if (tmp15) {
              tmp15 = diff >= 0 || num2 > 0;
              const tmp16 = diff >= 0 || num2 > 0;
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
              const point = { absoluteX, absoluteY, x: wrapperSpecs.get().x, y: wrapperSpecs.get().y, height: wrapperSpecs.get().height, isDrawer: controlsSpecs.get().mode === token.DRAWER, active: true, drawerTransitionHeight, interFloatingTransitionHeight };
              const result1 = gestureSpecs.set(point);
              let tmp23 = controlsSpecs.get().mode !== token.DRAWER;
              if (tmp23) {
                tmp23 = "settings" !== tab;
              }
              if (tmp23) {
                const obj2 = { tab: "settings", source: null, disableControlsUpdate: true };
                const tmpResult = closure_0(dependencyMap[17]);
                obj2.source = closure_0(dependencyMap[21]).VoicePanelTabAnalyticsSources.GESTURE;
                closure_0(dependencyMap[17]).runOnJS(openTab)(obj2);
                const runOnJSResult = closure_0(dependencyMap[17]).runOnJS(openTab);
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
    fn.__closure = { State: LegacyBaseButton.State, gestureSpecs, controlsSpecs, VoicePanelControlsModes, touchMoveCount: sharedValue1, SCROLL_BEGIN_GRACE_TICKS: num, isDragScrolling: sharedValue2, sharedTab, scrollOffsetValue: sharedValue3, GESTURE_VERTICAL_MINIMUM: 30, wrapperSpecs, TRANSITIONAL_HEIGHT, INTER_FLOATING_TRANSITIONAL_HEIGHT, tab, runOnJS: ReanimatedRexport.runOnJS, openTab, VoicePanelTabAnalyticsSources: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources, scrollLock: sharedValue4 };
    fn.__workletHash = 377889123477;
    fn.__initData = __initData5;
    const obj3 = { State: LegacyBaseButton.State, gestureSpecs, controlsSpecs, VoicePanelControlsModes, touchMoveCount: sharedValue1, SCROLL_BEGIN_GRACE_TICKS: num, isDragScrolling: sharedValue2, sharedTab, scrollOffsetValue: sharedValue3, GESTURE_VERTICAL_MINIMUM: 30, wrapperSpecs, TRANSITIONAL_HEIGHT, INTER_FLOATING_TRANSITIONAL_HEIGHT, tab, runOnJS: ReanimatedRexport.runOnJS, openTab, VoicePanelTabAnalyticsSources: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources, scrollLock: sharedValue4 };
    const fn2 = function p(absoluteY) {
      const diff = absoluteY.absoluteY - gestureSpecs.get().absoluteY;
      const diff1 = gestureSpecs.get().height - gestureSpecs.get().y - diff;
      if (diff1 > gestureSpecs.get().drawerTransitionHeight) {
        if (!gestureSpecs.get().isDrawer) {
          const obj2 = {};
          const merged = Object.assign(gestureSpecs.get());
          obj2.isDrawer = true;
          const result = gestureSpecs.set(obj2);
        }
        const obj5 = {};
        const merged1 = Object.assign(wrapperSpecs.get());
        obj5.x = 0;
        obj5.y = 0;
        const tmp26 = closure_1(dependencyMap[22]);
        obj5.width = closure_0(dependencyMap[23]).getControlsDrawerOpenWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
        const _Math = Math;
        obj5.height = Math.min(diff1, wrapperDimensions.get().drawerHeight - tmp26(safeArea.get(), token).height);
        obj5.drawerMode = true;
        const result1 = wrapperSpecs.set(obj5);
        const obj9 = closure_0(dependencyMap[23]);
      } else {
        const result2 = diff1 / gestureSpecs.get().drawerTransitionHeight;
        const height = controlsSpecs.get().height;
        const _Math2 = Math;
        const result3 = -1 * Math.max(diff1 - safeArea.get().bottom - height, 0);
        if (gestureSpecs.get().isDrawer) {
          const obj7 = {};
          const merged2 = Object.assign(gestureSpecs.get());
          obj7.isDrawer = false;
          const result4 = gestureSpecs.set(obj7);
        }
        if (!tmp6) {
          const obj4 = closure_0(dependencyMap[17]);
          closure_0(dependencyMap[17]).runOnJS(closure_0(dependencyMap[24]).triggerHapticFeedback)(closure_0(dependencyMap[24]).HapticFeedbackTypes.IMPACT_MEDIUM);
          const runOnJSResult = closure_0(dependencyMap[17]).runOnJS(closure_0(dependencyMap[24]).triggerHapticFeedback);
        }
        const obj8 = {};
        const merged3 = Object.assign(wrapperSpecs.get());
        obj8.x = 0;
        obj8.y = -1 * safeArea.get().bottom + result3 * (1 - result2 / 1.5);
        tmp6 = height === wrapperSpecs.get().height || wrapperSpecs.get().drawerMode;
        obj8.width = closure_0(dependencyMap[23]).getControlsDefaultWidth(windowDimensions.get().width, safeArea.get().left, safeArea.get().right);
        obj8.height = height;
        obj8.drawerMode = false;
        const result5 = wrapperSpecs.set(obj8);
        const obj6 = closure_0(dependencyMap[23]);
      }
    };
    const onTouchesMoveResult = onStartResult.onTouchesMove(fn);
    fn2.__closure = { gestureSpecs, calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault, safeArea, edgeGutter: token, wrapperSpecs, getControlsDrawerOpenWidth: VoicePanelControlsUtils.getControlsDrawerOpenWidth, windowDimensions, wrapperDimensions, controlsSpecs, runOnJS: ReanimatedRexport.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, getControlsDefaultWidth: VoicePanelControlsUtils.getControlsDefaultWidth };
    fn2.__workletHash = 15011671768502;
    fn2.__initData = __initData4;
    let obj4 = { gestureSpecs, calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault, safeArea, edgeGutter: token, wrapperSpecs, getControlsDrawerOpenWidth: VoicePanelControlsUtils.getControlsDrawerOpenWidth, windowDimensions, wrapperDimensions, controlsSpecs, runOnJS: ReanimatedRexport.runOnJS, triggerHapticFeedback: HapticUtils.triggerHapticFeedback, HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes, getControlsDefaultWidth: VoicePanelControlsUtils.getControlsDefaultWidth };
    const fn3 = function h() {
      const result = sharedValue4.set(false);
      const result1 = sharedValue2.set(false);
      const obj = {};
      const merged = Object.assign(gestureSpecs.get());
      obj.active = false;
      const result2 = gestureSpecs.set(obj);
      closure_0(dependencyMap[17]).runOnJS(gestureLock.unlock)();
    };
    const onChangeResult = onTouchesMoveResult.onChange(fn2);
    fn3.__closure = { scrollLock: sharedValue4, isDragScrolling: sharedValue2, gestureSpecs, runOnJS: ReanimatedRexport.runOnJS, gestureLock };
    fn3.__workletHash = 9808165597638;
    fn3.__initData = __initData3;
    let obj5 = { scrollLock: sharedValue4, isDragScrolling: sharedValue2, gestureSpecs, runOnJS: ReanimatedRexport.runOnJS, gestureLock };
    const fn4 = function l(velocityY) {
      velocityY = velocityY.velocityY;
      const absolute = Math.abs(velocityY);
      if (absolute > 200) {
        if (velocityY < 0) {
          const obj = {};
          const merged = Object.assign(wrapperSpecs.get());
          obj.height = wrapperDimensions.get().drawerHeight - closure_1(dependencyMap[22])(safeArea.get(), closure_1_15).height;
          const result = wrapperSpecs.set(obj);
          if (controlsSpecs.get().mode === token.DRAWER) {
            let DRAWER2 = token.RESET;
          } else {
            DRAWER2 = token.DRAWER;
          }
          const tmp16 = closure_1(dependencyMap[22]);
        }
      }
      if (absolute < 200) {
        if (gestureSpecs.get().isDrawer) {
          if (controlsSpecs.get().mode === token.DRAWER) {
            let DRAWER = token.RESET;
          } else {
            DRAWER = token.DRAWER;
          }
        }
      }
      if (controlsSpecs.get().mode === token.FLOATING_DEFAULT) {
        let FLOATING_DEFAULT = token.RESET;
      } else {
        FLOATING_DEFAULT = token.FLOATING_DEFAULT;
      }
      const result1 = sharedValue4.set(false);
      const result2 = sharedValue2.set(false);
      closure_0(dependencyMap[17]).runOnJS(gestureLock.unlock)(FLOATING_DEFAULT);
      const obj2 = closure_0(dependencyMap[17]);
    };
    const onTouchesCancelledResult = onChangeResult.onTouchesCancelled(fn3);
    fn4.__closure = { wrapperSpecs, wrapperDimensions, calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault, safeArea, edgeGutter: token, controlsSpecs, VoicePanelControlsModes, gestureSpecs, scrollLock: sharedValue4, isDragScrolling: sharedValue2, runOnJS: ReanimatedRexport.runOnJS, gestureLock };
    fn4.__workletHash = 12106761920053;
    fn4.__initData = __initData2;
    let obj6 = { wrapperSpecs, wrapperDimensions, calculateVoicePanelHeaderSpecs: calculateVoicePanelHeaderSpecsDefault, safeArea, edgeGutter: token, controlsSpecs, VoicePanelControlsModes, gestureSpecs, scrollLock: sharedValue4, isDragScrolling: sharedValue2, runOnJS: ReanimatedRexport.runOnJS, gestureLock };
    const fn5 = function o() {
      const result = sharedValue4.set(false);
      const result1 = sharedValue2.set(false);
      closure_0(dependencyMap[17]).runOnJS(gestureLock.unlock)();
    };
    const onEndResult = onTouchesCancelledResult.onEnd(fn4);
    fn5.__closure = { scrollLock: sharedValue4, isDragScrolling: sharedValue2, runOnJS: ReanimatedRexport.runOnJS, gestureLock };
    fn5.__workletHash = 15918380969837;
    fn5.__initData = __initData;
    return onEndResult.onFinalize(fn5);
  }, items1);
  let obj7 = require("useToken");
  let fn = function h() {
    return wrapperSpecs.get().drawerMode;
  };
  fn.__closure = { wrapperSpecs: sharedValue1 };
  fn.__workletHash = 2949834828607;
  fn.__initData = __initData;
  let fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = tab(wrapperSpecs[17]);
      tab(wrapperSpecs[17]).runOnJS(tab(wrapperSpecs[24]).triggerHapticFeedback)(tab(wrapperSpecs[24]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const runOnJSResult = tab(wrapperSpecs[17]).runOnJS(tab(wrapperSpecs[24]).triggerHapticFeedback);
    }
  };
  let obj8 = require("ReanimatedRexport");
  fn2.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, triggerHapticFeedback: require("HapticUtils").triggerHapticFeedback, HapticFeedbackTypes: require("HapticUtils").HapticFeedbackTypes };
  fn2.__workletHash = 10186886451735;
  fn2.__initData = __initData2;
  const animatedReaction = obj8.useAnimatedReaction(fn, fn2);
  return { gesture, scrollLockTargets, gestureSpecs };
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const VoicePanelConstants = fn(11902);
({ UI_SHOW_HIDE_PHYSICS: closure_7, MODE_CHANGE_PHYSICS: closure_8, BORDER_RADIUS_PHYSICS: closure_9, PANEL_CONTROLS_HEIGHT_PHYSICS: c10, VoicePanelModes: closure_11 } = VoicePanelConstants);
const VoicePanelCardConstants = fn(11905);
({ CALL_TILE_GUTTER: closure_12, EDGE_GUTTER: map1 } = VoicePanelCardConstants);
const VoicePanelControlsConstants = fn(11900);
({ CONTROLS_DRAWER_HEADER_EXPANDED_SIZE: closure_14, VoicePanelControlsModes: closure_15 } = VoicePanelControlsConstants);
const Constants = fn(1085);
({ ComponentActions: closure_16, ThemeTypes: closure_17 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(4890);
let obj = { accessibilityWrapper: null, wrapper: null, buttonsWrapper: null, actionSheetDragHandleWrapper: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.zIndex = 1;
obj.accessibilityWrapper = obj3;
let rect = { position: "absolute", bottom: 0, left: "50%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS };
obj.wrapper = rect;
const rect1 = { position: "absolute", left: 0, right: 0, zIndex: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: nativeDefault.space.PX_16 };
obj.buttonsWrapper = rect1;
obj.actionSheetDragHandleWrapper = { position: "absolute", top: 0, left: 0, right: 0, zIndex: 21 };
let closure_21 = createStyles.createStyles(obj);
let c22 = 200;
let c23 = 200;
const MetaQuestUtils = fn(1615);
let ReactCompilerGating = fn(558);
let closure_25 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((openTab) => {
  const cResult = c.c(7);
  const tmp4 = closure_21();
  ({ handlePress, accessibilityLabel, ariaHidden } = useDrawerToggleDefault(openTab.openTab));
  if (cResult[0] === accessibilityLabel) {
    if (cResult[1] === ariaHidden) {
      if (cResult[2] === handlePress) {
        let tmp6 = cResult[3];
      }
      if (cResult[4] === tmp4.actionSheetDragHandleWrapper) {
        if (cResult[5] === tmp6) {
          let tmp8 = cResult[6];
        }
        return tmp8;
      }
      const obj2 = { style: tmp4.actionSheetDragHandleWrapper, children: tmp6 };
      const tmp11 = collapsedCategories(hasOwnProperty, obj2);
      cResult[4] = tmp4.actionSheetDragHandleWrapper;
      cResult[5] = tmp6;
      cResult[6] = tmp11;
      tmp8 = tmp11;
    }
  }
  const tmp7 = collapsedCategories(native2.ActionSheetDragHandle, { onPress: handlePress, overlay: true, accessibilityLabel, "aria-hidden": ariaHidden });
  cResult[0] = accessibilityLabel;
  cResult[1] = ariaHidden;
  cResult[2] = handlePress;
  cResult[3] = tmp7;
  tmp6 = tmp7;
  const tmp5 = useDrawerToggleDefault(openTab.openTab);
}) : ((openTab) => {
  const tmp = closure_21();
  const tmp2 = useDrawerToggleDefault(openTab.openTab);
  ({ handlePress, accessibilityLabel, ariaHidden } = tmp2);
  return collapsedCategories(hasOwnProperty, { style: tmp.actionSheetDragHandleWrapper, children: collapsedCategories(native2.ActionSheetDragHandle, { onPress: handlePress, overlay: true, accessibilityLabel, "aria-hidden": ariaHidden }) });
}));
let closure_26 = { code: "function VoicePanelControlsTsx1(){const{scrollLock,isDragScrolling,runOnJS,gestureLock}=this.__closure;scrollLock.set(false);isDragScrolling.set(false);runOnJS(gestureLock.unlock)();}" };
let closure_27 = { code: "function VoicePanelControlsTsx2({velocityY:velocityY}){const{wrapperSpecs,wrapperDimensions,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,controlsSpecs,VoicePanelControlsModes,gestureSpecs,scrollLock,isDragScrolling,runOnJS,gestureLock}=this.__closure;const absoluteVelocity=Math.abs(velocityY);let resultingControlMode;if(absoluteVelocity>200&&velocityY<0){wrapperSpecs.set({...wrapperSpecs.get(),height:wrapperDimensions.get().drawerHeight-calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height});if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else if(absoluteVelocity<200&&gestureSpecs.get().isDrawer){if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.DRAWER;}}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT){resultingControlMode=VoicePanelControlsModes.RESET;}else{resultingControlMode=VoicePanelControlsModes.FLOATING_DEFAULT;}}scrollLock.set(false);isDragScrolling.set(false);runOnJS(gestureLock.unlock)(resultingControlMode);}" };
let closure_28 = { code: "function VoicePanelControlsTsx3(){const{scrollLock,isDragScrolling,gestureSpecs,runOnJS,gestureLock}=this.__closure;console.log('ZZZZZ - ControlsGesture.onTouchesCancelled');scrollLock.set(false);isDragScrolling.set(false);gestureSpecs.set({...gestureSpecs.get(),active:false});runOnJS(gestureLock.unlock)();}" };
let closure_29 = { code: "function VoicePanelControlsTsx4(event_1){const{gestureSpecs,calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,wrapperSpecs,getControlsDrawerOpenWidth,windowDimensions,wrapperDimensions,controlsSpecs,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,getControlsDefaultWidth}=this.__closure;const change=event_1.absoluteY-gestureSpecs.get().absoluteY;const newHeight=gestureSpecs.get().height-gestureSpecs.get().y-change;if(newHeight>gestureSpecs.get().drawerTransitionHeight){if(!gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:true});}const headerHeight=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter).height;wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:0,width:getControlsDrawerOpenWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(newHeight,wrapperDimensions.get().drawerHeight-headerHeight),drawerMode:true});}else{const progress=newHeight/gestureSpecs.get().drawerTransitionHeight;const floatingHeight=controlsSpecs.get().height;const yOffset=Math.max(newHeight-safeArea.get().bottom-floatingHeight,0)*-1;const newChange=yOffset*(1-progress/1.5);if(gestureSpecs.get().isDrawer){gestureSpecs.set({...gestureSpecs.get(),isDrawer:false});}if(floatingHeight!==wrapperSpecs.get().height&&!wrapperSpecs.get().drawerMode){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}wrapperSpecs.set({...wrapperSpecs.get(),x:0,y:safeArea.get().bottom*-1+newChange,width:getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:floatingHeight,drawerMode:false});}}" };
let closure_30 = { code: "function VoicePanelControlsTsx5(event_0,manager){const{State,gestureSpecs,controlsSpecs,VoicePanelControlsModes,touchMoveCount,SCROLL_BEGIN_GRACE_TICKS,isDragScrolling,sharedTab,scrollOffsetValue,GESTURE_VERTICAL_MINIMUM,wrapperSpecs,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT,tab,runOnJS,openTab,VoicePanelTabAnalyticsSources,scrollLock}=this.__closure;if(event_0.state!==State.BEGAN||gestureSpecs.get().active)return;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){manager.fail();return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=SCROLL_BEGIN_GRACE_TICKS?true:isDragScrolling.get();const scrollOffset=function(){switch(sharedTab.get()){case'settings':case'app_launcher':return scrollOffsetValue.get();default:return 0;}}();const{absoluteY:absoluteY,absoluteX:absoluteX}=event_0.changedTouches[0];const computed=gestureSpecs.get().absoluteY-absoluteY;if(controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&isDragging&&(computed>=0||scrollOffset>0)){return;}if(controlsSpecs.get().mode===VoicePanelControlsModes.FLOATING_DEFAULT&&computed>GESTURE_VERTICAL_MINIMUM||controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER&&(computed<-GESTURE_VERTICAL_MINIMUM||computed>GESTURE_VERTICAL_MINIMUM)){gestureSpecs.set({absoluteX:absoluteX,absoluteY:absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:true,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER&&tab!=='settings'){runOnJS(openTab)({tab:'settings',source:VoicePanelTabAnalyticsSources.GESTURE,disableControlsUpdate:true});}scrollLock.set(true);manager.activate();}else if(Math.abs(computed)>Math.abs(GESTURE_VERTICAL_MINIMUM)){manager.fail();}}" };
let closure_31 = { code: "function VoicePanelControlsTsx6(){const{runOnJS,gestureLock}=this.__closure;runOnJS(gestureLock.lock)();}" };
let closure_32 = { code: "function VoicePanelControlsTsx7(event){const{touchMoveCount,gestureSpecs,wrapperSpecs,controlsSpecs,VoicePanelControlsModes,TRANSITIONAL_HEIGHT,INTER_FLOATING_TRANSITIONAL_HEIGHT}=this.__closure;touchMoveCount.set(0);gestureSpecs.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:wrapperSpecs.get().x,y:wrapperSpecs.get().y,height:wrapperSpecs.get().height,isDrawer:controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER,active:false,drawerTransitionHeight:TRANSITIONAL_HEIGHT,interFloatingTransitionHeight:INTER_FLOATING_TRANSITIONAL_HEIGHT});}" };
const __initData = { code: "function VoicePanelControlsTsx8(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}" };
const __initData2 = { code: "function VoicePanelControlsTsx9(current,previous){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous)return;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}" };
const __initData3 = { code: "function VoicePanelControlsTsx10(){const{connected,controlsSpecs,mode,windowDimensions,windowDimensionsIgnoringKeyboard,safeArea}=this.__closure;return{connected:connected.get(),currentControlsMode:controlsSpecs.get().mode,mode:mode.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,windowHeightIgnoringKeyboard:windowDimensionsIgnoringKeyboard.get().height,controlsHeightValue:controlsSpecs.get().height,safeArea:safeArea.get()};}" };
const __initData4 = { code: "function VoicePanelControlsTsx11(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperSpecs,VoicePanelControlsModes,runOnJS,setControlsMode,isScreenReaderEnabled,EDGE_GUTTER,getControlsDefaultWidth,getDrawerSpec,getControlsDrawerOpenWidth}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const{currentControlsMode:currentControlsMode,mode:mode_0,windowWidth:windowWidth,windowHeightIgnoringKeyboard:windowHeightIgnoringKeyboard,controlsHeightValue:controlsHeightValue,safeArea:safeArea_0}=props;switch(mode_0){case VoicePanelModes.DISMISSED:case VoicePanelModes.PIP:{if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}return;}case VoicePanelModes.PANEL:default:}bb20:switch(currentControlsMode){case VoicePanelControlsModes.RESET:{var _previous$currentCont;runOnJS(setControlsMode)({mode:(_previous$currentCont=previous===null||previous===void 0?void 0:previous.currentControlsMode)!==null&&_previous$currentCont!==void 0?_previous$currentCont:VoicePanelControlsModes.FLOATING_DEFAULT});return;}case VoicePanelControlsModes.HIDDEN:{if(isScreenReaderEnabled){wrapperSpecs.set({...wrapperSpecs.get(),hidden:false});break bb20;}if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}break bb20;}case VoicePanelControlsModes.FLOATING_DEFAULT:{wrapperSpecs.set({x:0,y:Math.max(safeArea_0.bottom,EDGE_GUTTER)*-1,width:getControlsDefaultWidth(windowWidth,safeArea_0.left,safeArea_0.right),height:controlsHeightValue,drawerMode:false,hidden:false});break bb20;}case VoicePanelControlsModes.DRAWER:{const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(windowHeightIgnoringKeyboard,safeArea_0.top);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(wrapperSpecs.get().height<=controlsHeightValue){height=maxHeight;}else{if(previous!=null&&wrapperSpecs.get().height===getDrawerSpec(previous.windowHeight,previous.safeArea.top).maxHeight){height=maxHeight;}else{if(wrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=minHeight;}}}wrapperSpecs.set({x:0,y:0,width:getControlsDrawerOpenWidth(windowWidth,safeArea_0.left,safeArea_0.right),height:height,drawerMode:true,hidden:false});}}}" };
const __initData5 = { code: "function VoicePanelControlsTsx12(){const{connected,controlsSpecs,mode,windowDimensions,windowDimensionsIgnoringKeyboard,safeArea}=this.__closure;return{connected:connected.get(),currentControlsMode:controlsSpecs.get().mode,mode:mode.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,windowHeightIgnoringKeyboard:windowDimensionsIgnoringKeyboard.get().height,controlsHeightValue:controlsSpecs.get().height,safeArea:safeArea.get()};}" };
const __initData6 = { code: "function VoicePanelControlsTsx13(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperSpecs,VoicePanelControlsModes,runOnJS,setControlsMode,isScreenReaderEnabled,EDGE_GUTTER,getControlsDefaultWidth,getDrawerSpec,getControlsDrawerOpenWidth}=this.__closure;var _previous$currentCont;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{currentControlsMode:currentControlsMode,mode:mode_0,windowWidth:windowWidth,windowHeightIgnoringKeyboard:windowHeightIgnoringKeyboard,controlsHeightValue:controlsHeightValue,safeArea:safeArea_0}=props;switch(mode_0){case VoicePanelModes.DISMISSED:case VoicePanelModes.PIP:if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}return;case VoicePanelModes.PANEL:default:break;}switch(currentControlsMode){case VoicePanelControlsModes.RESET:runOnJS(setControlsMode)({mode:(_previous$currentCont=previous===null||previous===void 0?void 0:previous.currentControlsMode)!==null&&_previous$currentCont!==void 0?_previous$currentCont:VoicePanelControlsModes.FLOATING_DEFAULT});return;case VoicePanelControlsModes.HIDDEN:if(isScreenReaderEnabled){wrapperSpecs.set({...wrapperSpecs.get(),hidden:false});break;}if(!wrapperSpecs.get().hidden){wrapperSpecs.set({...wrapperSpecs.get(),hidden:true});}break;case VoicePanelControlsModes.FLOATING_DEFAULT:wrapperSpecs.set({x:0,y:Math.max(safeArea_0.bottom,EDGE_GUTTER)*-1,width:getControlsDefaultWidth(windowWidth,safeArea_0.left,safeArea_0.right),height:controlsHeightValue,drawerMode:false,hidden:false});break;case VoicePanelControlsModes.DRAWER:const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(windowHeightIgnoringKeyboard,safeArea_0.top);const heightMidpoint=(maxHeight+minHeight)/2;let height;if(wrapperSpecs.get().height<=controlsHeightValue){height=maxHeight;}else if(previous!=null&&wrapperSpecs.get().height===getDrawerSpec(previous.windowHeight,previous.safeArea.top).maxHeight){height=maxHeight;}else if(wrapperSpecs.get().height>=heightMidpoint){height=maxHeight;}else{height=minHeight;}wrapperSpecs.set({x:0,y:0,width:getControlsDrawerOpenWidth(windowWidth,safeArea_0.left,safeArea_0.right),height:height,drawerMode:true,hidden:false});break;}}" };
ReactCompilerGating = fn(558);
let closure_40 = ReactCompilerGating.isReactCompilerEnabled() ? ((wrapperSpecs) => {
  _require = wrapperSpecs;
  const cResult = require("c").c(1);
  let obj = require("c");
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { ignoreKeyboard: true };
    cResult[0] = obj3;
    let first = obj3;
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
  let obj2 = require("useIsScreenReaderEnabled");
  const fn = function h() {
    return { connected: connected.get(), currentControlsMode: controlsSpecs.get().mode, mode: mode.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, windowHeightIgnoringKeyboard: closure_2.get().height, controlsHeightValue: controlsSpecs.get().height, safeArea: safeArea.get() };
  };
  fn.__closure = { connected, controlsSpecs, mode, windowDimensions, windowDimensionsIgnoringKeyboard: tmp6, safeArea };
  fn.__workletHash = 11588370229444;
  fn.__initData = __initData3;
  const fn2 = function l(safeAreaState, currentControlsMode) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp3)) {
      ({ currentControlsMode, mode, windowWidth, controlsHeightValue, safeArea } = safeAreaState);
      if (VoicePanelModes.DISMISSED !== mode) {
        if (VoicePanelModes.PIP !== mode) {
          const PANEL = VoicePanelModes.PANEL;
          if (VoicePanelControlsModes.RESET === currentControlsMode) {
            let currentControlsMode1;
            const tmpResult = ReanimatedRexport;
            if (currentControlsMode != null) {
              currentControlsMode1 = currentControlsMode.currentControlsMode;
            }
            if (currentControlsMode1 == null) {
              currentControlsMode1 = VoicePanelControlsModes.FLOATING_DEFAULT;
            }
            const obj2 = { mode: currentControlsMode1 };
            ReanimatedRexport.runOnJS(setControlsMode)(obj2);
            const runOnJSResult = ReanimatedRexport.runOnJS(setControlsMode);
          } else if (VoicePanelControlsModes.HIDDEN === currentControlsMode) {
            if (isScreenReaderEnabled) {
              const obj3 = {};
              const merged = Object.assign(wrapperSpecs.get());
              obj3.hidden = false;
              const result = wrapperSpecs.set(obj3);
            } else if (!wrapperSpecs.get().hidden) {
              const obj4 = {};
              const merged1 = Object.assign(wrapperSpecs.get());
              obj4.hidden = true;
              const result1 = wrapperSpecs.set(obj4);
            }
          } else if (VoicePanelControlsModes.FLOATING_DEFAULT === currentControlsMode) {
            const size = { x: 0, y: null, width: null, height: null, drawerMode: false, hidden: false };
            const _Math = Math;
            size.y = -1 * Math.max(safeArea.bottom, EDGE_GUTTER);
            size.width = VoicePanelControlsUtils.getControlsDefaultWidth(windowWidth, safeArea.left, safeArea.right);
            size.height = controlsHeightValue;
            const result2 = wrapperSpecs.set(size);
            const tmpResult5 = VoicePanelControlsUtils;
          } else if (VoicePanelControlsModes.DRAWER === currentControlsMode) {
            const drawerSpec = VoicePanelControlUtils.getDrawerSpec(tmp4, safeArea.top);
            ({ minHeight, maxHeight } = drawerSpec);
            if (wrapperSpecs.get().height <= controlsHeightValue) {
              minHeight = maxHeight;
            } else if (null != currentControlsMode) {
              VoicePanelControlUtils;
            }
            const size1 = { x: 0, y: 0, width: null, height: null, drawerMode: true, hidden: false };
            const tmpResult6 = VoicePanelControlUtils;
            size1.width = VoicePanelControlsUtils.getControlsDrawerOpenWidth(windowWidth, safeArea.left, safeArea.right);
            size1.height = minHeight;
            const result3 = wrapperSpecs.set(size1);
            const tmpResult8 = VoicePanelControlsUtils;
          }
        }
      }
      if (!wrapperSpecs.get().hidden) {
        const obj5 = {};
        const merged2 = Object.assign(wrapperSpecs.get());
        obj5.hidden = true;
        const result4 = wrapperSpecs.set(obj5);
      }
    }
    obj = cheapWorkletShallowEqual;
    tmp3 = currentControlsMode;
  };
  let tmpResult = require("ReanimatedRexport");
  fn2.__closure = { cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, VoicePanelModes, wrapperSpecs, VoicePanelControlsModes, runOnJS: require("ReanimatedRexport").runOnJS, setControlsMode, isScreenReaderEnabled, EDGE_GUTTER, getControlsDefaultWidth: require("VoicePanelControlsUtils").getControlsDefaultWidth, getDrawerSpec: require("VoicePanelControlUtils").getDrawerSpec, getControlsDrawerOpenWidth: require("VoicePanelControlsUtils").getControlsDrawerOpenWidth };
  fn2.__workletHash = 12616753127721;
  fn2.__initData = __initData4;
  const animatedReaction = tmpResult.useAnimatedReaction(fn, fn2);
}) : ((wrapperSpecs) => {
  _require = wrapperSpecs;
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  const tmp2 = isScreenReaderEnabled(11647)({ ignoreKeyboard: true });
  dependencyMap = tmp2;
  const context = windowDimensions.useContext(isScreenReaderEnabled(11901));
  const controlsSpecs = context.controlsSpecs;
  windowDimensions = context.windowDimensions;
  const mode = context.mode;
  const setControlsMode = context.setControlsMode;
  const safeArea = context.safeArea;
  const connected = context.connected;
  let obj = require("useIsScreenReaderEnabled");
  const fn = function n() {
    return { connected: connected.get(), currentControlsMode: controlsSpecs.get().mode, mode: mode.get(), windowWidth: windowDimensions.get().width, windowHeight: windowDimensions.get().height, windowHeightIgnoringKeyboard: closure_2.get().height, controlsHeightValue: controlsSpecs.get().height, safeArea: safeArea.get() };
  };
  fn.__closure = { connected, controlsSpecs, mode, windowDimensions, windowDimensionsIgnoringKeyboard: tmp2, safeArea };
  fn.__workletHash = 7484122181254;
  fn.__initData = __initData5;
  const fn2 = function s(safeAreaState, currentControlsMode) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp3)) {
      ({ currentControlsMode, mode, windowWidth, controlsHeightValue, safeArea } = safeAreaState);
      if (VoicePanelModes.DISMISSED !== mode) {
        if (VoicePanelModes.PIP !== mode) {
          const PANEL = VoicePanelModes.PANEL;
          if (VoicePanelControlsModes.RESET === currentControlsMode) {
            let currentControlsMode1;
            const tmpResult = ReanimatedRexport;
            if (currentControlsMode != null) {
              currentControlsMode1 = currentControlsMode.currentControlsMode;
            }
            if (currentControlsMode1 == null) {
              currentControlsMode1 = VoicePanelControlsModes.FLOATING_DEFAULT;
            }
            const obj2 = { mode: currentControlsMode1 };
            ReanimatedRexport.runOnJS(setControlsMode)(obj2);
            const runOnJSResult = ReanimatedRexport.runOnJS(setControlsMode);
          } else if (VoicePanelControlsModes.HIDDEN === currentControlsMode) {
            if (isScreenReaderEnabled) {
              const obj3 = {};
              const merged = Object.assign(wrapperSpecs.get());
              obj3.hidden = false;
              const result = wrapperSpecs.set(obj3);
            } else if (!wrapperSpecs.get().hidden) {
              const obj4 = {};
              const merged1 = Object.assign(wrapperSpecs.get());
              obj4.hidden = true;
              const result1 = wrapperSpecs.set(obj4);
            }
          } else if (VoicePanelControlsModes.FLOATING_DEFAULT === currentControlsMode) {
            const size = { x: 0, y: null, width: null, height: null, drawerMode: false, hidden: false };
            const _Math = Math;
            size.y = -1 * Math.max(safeArea.bottom, EDGE_GUTTER);
            size.width = VoicePanelControlsUtils.getControlsDefaultWidth(windowWidth, safeArea.left, safeArea.right);
            size.height = controlsHeightValue;
            const result2 = wrapperSpecs.set(size);
            const tmpResult5 = VoicePanelControlsUtils;
          } else if (VoicePanelControlsModes.DRAWER === currentControlsMode) {
            const drawerSpec = VoicePanelControlUtils.getDrawerSpec(tmp4, safeArea.top);
            ({ minHeight, maxHeight } = drawerSpec);
            if (wrapperSpecs.get().height <= controlsHeightValue) {
              minHeight = maxHeight;
            } else if (null != currentControlsMode) {
              VoicePanelControlUtils;
            }
            const size1 = { x: 0, y: 0, width: null, height: null, drawerMode: true, hidden: false };
            const tmpResult6 = VoicePanelControlUtils;
            size1.width = VoicePanelControlsUtils.getControlsDrawerOpenWidth(windowWidth, safeArea.left, safeArea.right);
            size1.height = minHeight;
            const result3 = wrapperSpecs.set(size1);
            const tmpResult8 = VoicePanelControlsUtils;
          }
        }
      }
      if (!wrapperSpecs.get().hidden) {
        const obj5 = {};
        const merged2 = Object.assign(wrapperSpecs.get());
        obj5.hidden = true;
        const result4 = wrapperSpecs.set(obj5);
      }
    }
    obj = cheapWorkletShallowEqual;
    tmp3 = currentControlsMode;
  };
  let obj2 = require("ReanimatedRexport");
  fn2.__closure = { cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, VoicePanelModes, wrapperSpecs, VoicePanelControlsModes, runOnJS: require("ReanimatedRexport").runOnJS, setControlsMode, isScreenReaderEnabled, EDGE_GUTTER, getControlsDefaultWidth: require("VoicePanelControlsUtils").getControlsDefaultWidth, getDrawerSpec: require("VoicePanelControlUtils").getDrawerSpec, getControlsDrawerOpenWidth: require("VoicePanelControlsUtils").getControlsDrawerOpenWidth };
  fn2.__workletHash = 10920648880497;
  fn2.__initData = __initData6;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
});
ReactCompilerGating = fn(558);
let closure_41 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(16);
  ({ channelId, wrapperSpecs, controlsSpecs, accessoryHeights, gestureState } = arg0);
  const shouldShowFloatingCTA = VoicePanelFloatingCTAUtils.useShouldShowFloatingCTA(channelId);
  const tmp5 = useControlsLockDefault();
  closure_0 = tmp5;
  const isConnectingToConsole = useConsoleConnectingInfoDefault(channelId).isConnectingToConsole;
  if (cResult[0] === accessoryHeights) {
    if (cResult[1] === controlsSpecs) {
      if (cResult[2] === gestureState) {
        if (cResult[3] === wrapperSpecs) {
          let tmp8 = cResult[4];
        }
        if (cResult[5] === tmp5) {
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
            const obj3 = { item: null, renderItem: null };
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
            obj3.renderItem = VoicePanelFloatingCTAContainer.renderVoicePanelFloatingCTA;
            const tmp15 = collapsedCategories(native.TransitionItem, obj3);
            cResult[9] = tmp12;
            cResult[10] = tmp15;
            let tmp13 = tmp15;
          } else {
            tmp13 = cResult[10];
          }
          let tmp16;
          if (tmp7) {
            tmp16 = tmp8;
          }
          if (cResult[11] !== tmp16) {
            const obj4 = { item: null, renderItem: null };
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
            obj4.renderItem = VoicePanelConsoleStatus.renderVoicePanelConsoleStatus;
            const tmp19 = collapsedCategories(native.TransitionItem, obj4);
            cResult[11] = tmp16;
            cResult[12] = tmp19;
            let tmp17 = tmp19;
          } else {
            tmp17 = cResult[12];
          }
          if (cResult[13] === tmp13) {
            if (cResult[14] === tmp17) {
              let tmp20 = cResult[15];
            }
            return tmp20;
          }
          const obj5 = { children: null };
          const items = [tmp13, tmp17];
          obj5.children = items;
          const tmp23 = closure_1_20(closure_1_19, obj5);
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
  const tmp6 = useConsoleConnectingInfoDefault(channelId);
}) : ((controlsSpecs) => {
  ({ channelId, wrapperSpecs } = controlsSpecs);
  controlsSpecs = controlsSpecs.controlsSpecs;
  const accessoryHeights = controlsSpecs.accessoryHeights;
  const gestureState = controlsSpecs.gestureState;
  const shouldShowFloatingCTA = VoicePanelFloatingCTAUtils.useShouldShowFloatingCTA(channelId);
  const tmp4 = useControlsLockDefault();
  closure_4 = tmp4;
  const tmp5 = useConsoleConnectingInfoDefault(channelId);
  const isConnectingToConsole = tmp5.isConnectingToConsole;
  const items = [wrapperSpecs, controlsSpecs, accessoryHeights, gestureState];
  const memo = noop.useMemo(() => ({ wrapperSpecs, controlsSpecs, accessoryHeights, gestureState }), items);
  const items1 = [isConnectingToConsole, tmp4];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (isConnectingToConsole) {
      closure_4.lock();
    } else {
      closure_4.unlock();
    }
  }, items1);
  let tmp11;
  if (shouldShowFloatingCTA) {
    tmp11 = memo;
  }
  const items2 = [collapsedCategories(native.TransitionItem, { item: tmp11, renderItem: VoicePanelFloatingCTAContainer.renderVoicePanelFloatingCTA }), ];
  let tmp12;
  if (tmp5.isConnectingOrConnectedToConsole) {
    tmp12 = memo;
  }
  const obj3 = { children: null };
  const obj2 = { item: tmp11, renderItem: VoicePanelFloatingCTAContainer.renderVoicePanelFloatingCTA };
  items2[1] = collapsedCategories(native.TransitionItem, { item: tmp12, renderItem: VoicePanelConsoleStatus.renderVoicePanelConsoleStatus });
  obj3.children = items2;
  return closure_1_20(closure_1_19, obj3);
}));
const __initData7 = { code: "function VoicePanelControlsTsx14(){const{controlsSpecs,connected,sharedTab,wrapperSpecs,TRANSITIONAL_HEIGHT,CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const showPushToTalkText=controlsSpecs.get().pushToTalk&&connected.get();const height=sharedTab.get()===\"settings\"&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?CONTROLS_DRAWER_HEADER_EXPANDED_SIZE:controlsSpecs.get().height;const translateY=function(){return sharedTab.get()!==\"settings\"&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?-controlsSpecs.get().height:0;}();return{top:showPushToTalkText?-4:0,height:withSpring(height,MODE_CHANGE_PHYSICS),opacity:withSpring(sharedTab.get()!==\"settings\"&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(translateY,MODE_CHANGE_PHYSICS)},{scale:withSpring(sharedTab.get()!==\"settings\"&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0.95:1,MODE_CHANGE_PHYSICS)}]};}" };
const __initData8 = { code: "function VoicePanelControlsTsx15(){const{controlsSpecs,connected,sharedTab,wrapperSpecs,TRANSITIONAL_HEIGHT,CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const showPushToTalkText=controlsSpecs.get().pushToTalk&&connected.get();const height=sharedTab.get()==='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?CONTROLS_DRAWER_HEADER_EXPANDED_SIZE:controlsSpecs.get().height;const translateY=function(){return sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?-controlsSpecs.get().height:0;}();return{top:showPushToTalkText?-4:0,height:withSpring(height,MODE_CHANGE_PHYSICS),opacity:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(translateY,MODE_CHANGE_PHYSICS)},{scale:withSpring(sharedTab.get()!=='settings'&&wrapperSpecs.get().height>=TRANSITIONAL_HEIGHT?0.95:1,MODE_CHANGE_PHYSICS)}]};}" };
ReactCompilerGating = fn(558);
let closure_44 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((openTab) => {
  const cResult = openTab(sharedTab[13]).c(18);
  openTab = openTab.openTab;
  const wrapperSpecs = openTab.wrapperSpecs;
  sharedTab = openTab.sharedTab;
  const obj = openTab(sharedTab[13]);
  const obj2 = controlsSpecs;
  const tmp = openTab;
  const tmp6 = wrapperSpecs(sharedTab[34])(controlsSpecs.useRef(true));
  const tmp7 = closure_21();
  const context = controlsSpecs.useContext(wrapperSpecs(sharedTab[16]));
  controlsSpecs = context.controlsSpecs;
  const connected = context.connected;
  const arr = wrapperSpecs(sharedTab[35])();
  const ref = controlsSpecs.useRef(true);
  const tmp5 = wrapperSpecs;
  const fn = function s() {
    let pushToTalk = controlsSpecs.get().pushToTalk;
    if (pushToTalk) {
      pushToTalk = connected.get();
    }
    if ("settings" === sharedTab.get()) {
      if (wrapperSpecs.get().height >= c22) {
        let height = CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
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
      const obj3 = { top: num2, height: spring.withSpring(height, MODE_CHANGE_PHYSICS), opacity: null, transform: null };
      let num4 = 1;
      if ("settings" !== sharedTab.get()) {
        num4 = 1;
        if (wrapperSpecs.get().height >= c22) {
          num4 = 0;
        }
      }
      obj3.opacity = spring.withSpring(num4, MODE_CHANGE_PHYSICS);
      const obj6 = { translateY: null };
      obj6.translateY = spring.withSpring(num, MODE_CHANGE_PHYSICS);
      const items = [obj6, ];
      const tmp6Result = spring;
      let num5 = 1;
      if ("settings" !== sharedTab.get()) {
        num5 = 1;
        if (wrapperSpecs.get().height >= c22) {
          num5 = 0.95;
        }
      }
      const obj7 = { scale: spring.withSpring(num5, MODE_CHANGE_PHYSICS) };
      items[1] = obj7;
      obj3.transform = items;
      return obj3;
    }
    height = controlsSpecs.get().height;
  };
  let obj3 = openTab(sharedTab[17]);
  fn.__closure = { controlsSpecs, connected, sharedTab, wrapperSpecs, TRANSITIONAL_HEIGHT: v200, CONTROLS_DRAWER_HEADER_EXPANDED_SIZE, withSpring: openTab(sharedTab[36]).withSpring, MODE_CHANGE_PHYSICS };
  fn.__workletHash = 2768056234959;
  fn.__initData = __initData7;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function n() {
      ref.current = false;
    };
    let items = [];
    cResult[0] = fn2;
    cResult[1] = items;
    tmp10 = fn2;
    tmp11 = items;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const effect = obj2.useEffect(tmp10, tmp11);
  if (cResult[2] === animatedStyle) {
    if (cResult[3] === tmp7.buttonsWrapper) {
      let tmp13 = cResult[4];
    }
    if (cResult[5] === arr) {
      if (cResult[6] === openTab) {
        if (cResult[7] === wrapperSpecs) {
          if (cResult[12] === tmp13) {
            if (cResult[13] === tmp14) {
              let tmp18 = cResult[14];
            }
            if (cResult[15] === tmp6) {
              if (cResult[16] === tmp18) {
                let tmp21 = cResult[17];
              }
              return tmp21;
            }
            let obj5 = { skipEntering: tmp6, children: tmp18 };
            const tmp23 = closure_18(tmp(tmp2[17]).LayoutAnimationConfig, obj5);
            cResult[15] = tmp6;
            cResult[16] = tmp18;
            cResult[17] = tmp23;
            tmp21 = tmp23;
          }
          let obj6 = { style: tmp13, children: cResult[8] };
          const tmp20 = closure_18(tmp5(tmp2[37]), obj6);
          cResult[12] = tmp13;
          cResult[13] = cResult[8];
          cResult[14] = tmp20;
          tmp18 = tmp20;
        }
      }
    }
    if (cResult[9] === openTab) {
      if (cResult[10] === wrapperSpecs) {
        let tmp15 = cResult[11];
      }
      const mapped = arr.map(tmp15);
      cResult[5] = arr;
      cResult[6] = openTab;
      cResult[7] = wrapperSpecs;
      cResult[8] = mapped;
    }
    const fn3 = function p(props) {
      return props.render(props.key, { props, openTab, wrapperSpecs });
    };
    cResult[9] = openTab;
    cResult[10] = wrapperSpecs;
    cResult[11] = fn3;
    tmp15 = fn3;
  }
  const items1 = [tmp7.buttonsWrapper, animatedStyle];
  cResult[2] = animatedStyle;
  cResult[3] = tmp7.buttonsWrapper;
  cResult[4] = items1;
  tmp13 = items1;
  let obj4 = { controlsSpecs, connected, sharedTab, wrapperSpecs, TRANSITIONAL_HEIGHT: v200, CONTROLS_DRAWER_HEADER_EXPANDED_SIZE, withSpring: openTab(sharedTab[36]).withSpring, MODE_CHANGE_PHYSICS };
}) : ((sharedTab) => {
  ({ openTab: require, wrapperSpecs } = sharedTab);
  sharedTab = sharedTab.sharedTab;
  let controlsSpecs;
  const ref = controlsSpecs.useRef(true);
  const tmp2 = wrapperSpecs(sharedTab[34])(ref);
  const context = controlsSpecs.useContext(wrapperSpecs(sharedTab[16]));
  controlsSpecs = context.controlsSpecs;
  const connected = context.connected;
  const tmp3 = closure_21();
  const arr = wrapperSpecs(sharedTab[35])();
  const fn = function c() {
    let pushToTalk = controlsSpecs.get().pushToTalk;
    if (pushToTalk) {
      pushToTalk = connected.get();
    }
    if ("settings" === sharedTab.get()) {
      if (wrapperSpecs.get().height >= c22) {
        let height = CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
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
      const obj3 = { top: num2, height: spring.withSpring(height, MODE_CHANGE_PHYSICS), opacity: null, transform: null };
      let num4 = 1;
      if ("settings" !== sharedTab.get()) {
        num4 = 1;
        if (wrapperSpecs.get().height >= c22) {
          num4 = 0;
        }
      }
      obj3.opacity = spring.withSpring(num4, MODE_CHANGE_PHYSICS);
      const obj6 = { translateY: null };
      obj6.translateY = spring.withSpring(num, MODE_CHANGE_PHYSICS);
      const items = [obj6, ];
      const tmp6Result = spring;
      let num5 = 1;
      if ("settings" !== sharedTab.get()) {
        num5 = 1;
        if (wrapperSpecs.get().height >= c22) {
          num5 = 0.95;
        }
      }
      const obj7 = { scale: spring.withSpring(num5, MODE_CHANGE_PHYSICS) };
      items[1] = obj7;
      obj3.transform = items;
      return obj3;
    }
    height = controlsSpecs.get().height;
  };
  const obj = require("ReanimatedRexport");
  fn.__closure = { controlsSpecs, connected, sharedTab, wrapperSpecs, TRANSITIONAL_HEIGHT: v200, CONTROLS_DRAWER_HEADER_EXPANDED_SIZE, withSpring: require("spring").withSpring, MODE_CHANGE_PHYSICS };
  fn.__workletHash = 13396289461614;
  fn.__initData = __initData8;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const effect = controlsSpecs.useEffect(() => {
    ref.current = false;
  }, []);
  let obj3 = { skipEntering: tmp2, children: null };
  let obj4 = { style: null, children: null };
  let items = [tmp3.buttonsWrapper, animatedStyle];
  obj4.style = items;
  const obj2 = { controlsSpecs, connected, sharedTab, wrapperSpecs, TRANSITIONAL_HEIGHT: v200, CONTROLS_DRAWER_HEADER_EXPANDED_SIZE, withSpring: require("spring").withSpring, MODE_CHANGE_PHYSICS };
  obj4.children = arr.map((props) => props.render(props.key, { props, openTab, wrapperSpecs }));
  obj3.children = closure_18(wrapperSpecs(sharedTab[37]), obj4);
  return closure_18(require("ReanimatedRexport").LayoutAnimationConfig, obj3);
}));
const __initData9 = { code: "function VoicePanelControlsTsx16(){const{withSpring,wrapperSpecs,borderRadius,BORDER_RADIUS_PHYSICS,PANEL_CONTROLS_HEIGHT_PHYSICS,MODE_CHANGE_PHYSICS,roundToNearestPixel,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;return{borderBottomRightRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),borderBottomLeftRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),height:withSpring(wrapperSpecs.get().height,PANEL_CONTROLS_HEIGHT_PHYSICS),width:withSpring(wrapperSpecs.get().width,MODE_CHANGE_PHYSICS),marginLeft:withSpring(roundToNearestPixel(wrapperSpecs.get().width/2)*-1,MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}" };
const __initData10 = { code: "function VoicePanelControlsTsx17(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}" };
const __initData11 = { code: "function VoicePanelControlsTsx18(mode_0,previousMode){const{isScreenReaderEnabled,VoicePanelControlsModes,runOnJS,setIsDrawer}=this.__closure;if(mode_0===previousMode||!isScreenReaderEnabled){return;}if(mode_0===VoicePanelControlsModes.DRAWER&&previousMode!==VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(true);}else{if(mode_0!==VoicePanelControlsModes.DRAWER&&previousMode===VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(false);}}}" };
const __initData12 = { code: "function VoicePanelControlsTsx19(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}" };
const __initData13 = { code: "function VoicePanelControlsTsx20(drawerMode,previousDrawerMode){const{runOnJS,setIsDrawerActive}=this.__closure;if(drawerMode===previousDrawerMode){return;}if(drawerMode){runOnJS(setIsDrawerActive)(true);}else{runOnJS(setIsDrawerActive)(false);}}" };
const __initData14 = { code: "function VoicePanelControlsTsx21(){const{withSpring,wrapperSpecs,borderRadius,BORDER_RADIUS_PHYSICS,PANEL_CONTROLS_HEIGHT_PHYSICS,MODE_CHANGE_PHYSICS,roundToNearestPixel,UI_SHOW_HIDE_PHYSICS,gestureState,CALL_TILE_GUTTER,accessoryHeights}=this.__closure;return{borderBottomRightRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),borderBottomLeftRadius:withSpring(!wrapperSpecs.get().drawerMode?borderRadius:0,BORDER_RADIUS_PHYSICS),height:withSpring(wrapperSpecs.get().height,PANEL_CONTROLS_HEIGHT_PHYSICS),width:withSpring(wrapperSpecs.get().width,MODE_CHANGE_PHYSICS),marginLeft:withSpring(roundToNearestPixel(wrapperSpecs.get().width/2)*-1,MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(wrapperSpecs.get().x,UI_SHOW_HIDE_PHYSICS)},{translateY:withSpring(wrapperSpecs.get().hidden||gestureState.get().active&&!gestureState.get().requiresPop?wrapperSpecs.get().height+CALL_TILE_GUTTER+accessoryHeights.get():wrapperSpecs.get().y,UI_SHOW_HIDE_PHYSICS)}]};}" };
const __initData15 = { code: "function VoicePanelControlsTsx22(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}" };
const __initData16 = { code: "function VoicePanelControlsTsx23(mode_0,previousMode){const{isScreenReaderEnabled,VoicePanelControlsModes,runOnJS,setIsDrawer}=this.__closure;if(mode_0===previousMode||!isScreenReaderEnabled)return;if(mode_0===VoicePanelControlsModes.DRAWER&&previousMode!==VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(true);}else if(mode_0!==VoicePanelControlsModes.DRAWER&&previousMode===VoicePanelControlsModes.DRAWER){runOnJS(setIsDrawer)(false);}}" };
const __initData17 = { code: "function VoicePanelControlsTsx24(){const{wrapperSpecs}=this.__closure;return wrapperSpecs.get().drawerMode;}" };
const __initData18 = { code: "function VoicePanelControlsTsx25(drawerMode,previousDrawerMode){const{runOnJS,setIsDrawerActive}=this.__closure;if(drawerMode===previousDrawerMode)return;if(drawerMode){runOnJS(setIsDrawerActive)(true);}else{runOnJS(setIsDrawerActive)(false);}}" };
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControls.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((gestureState) => {
  const cResult = gestureState(channelId[13]).c(72);
  gestureState = gestureState.gestureState;
  let obj = gestureState(channelId[13]);
  const isScreenReaderEnabled = gestureState(channelId[25]).useIsScreenReaderEnabled();
  const context = setControlsMode.useContext(isScreenReaderEnabled(channelId[16]));
  channelId = context.channelId;
  const controlsSpecs = context.controlsSpecs;
  setControlsMode = context.setControlsMode;
  closure_21();
  const tmp9 = controlsSpecs(setControlsMode.useState(null), 2);
  const first = tmp9[0];
  ChannelRTCStore = tmp9[1];
  let obj2 = gestureState(channelId[25]);
  const sharedValue = gestureState(channelId[17]).useSharedValue(first);
  if (cResult[0] === sharedValue) {
    if (cResult[1] === first) {
      let tmp12 = cResult[2];
    }
    const layoutEffect = obj3.useLayoutEffect(tmp12);
    const tmp14 = tmp5(tmp2[38])(channelId);
    if (cResult[3] !== tmp14) {
      const obj5 = { shouldFetch: tmp14 };
      cResult[3] = tmp14;
      cResult[4] = obj5;
      let tmp15 = obj5;
    } else {
      tmp15 = cResult[4];
    }
    const maybeFetchSoundboardSounds = tmp(tmp2[39]).useMaybeFetchSoundboardSounds(tmp15);
    if (cResult[5] === channelId) {
      if (cResult[6] === controlsSpecs) {
        if (cResult[7] === setControlsMode) {
          let tmp17 = cResult[8];
        }
        MODE_CHANGE_PHYSICS = tmp17;
        const tmp18 = tmp5(tmp2[41])();
        BORDER_RADIUS_PHYSICS = tmp18;
        if (cResult[9] === channelId) {
          if (cResult[10] === tmp17) {
            let tmp19 = cResult[11];
          }
          if (cResult[12] === channelId) {
            if (cResult[13] === controlsSpecs) {
              if (cResult[14] === tmp17) {
                if (cResult[15] === first) {
                  let tmp20 = cResult[16];
                }
                const layoutEffect1 = obj3.useLayoutEffect(tmp19, tmp20);
                if (cResult[17] !== tmp17) {
                  class F {
                    constructor() {
                      handleOpenChatTab = function handleOpenChatTab() {
                        closure_1_8({ tab: "chat", source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.HEADER_BUTTON });
                      };
                      ComponentDispatch = gestureState(channelId[42]).ComponentDispatch;
                      subscription = ComponentDispatch.subscribe(closure_1_16.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
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
                            const obj = { tab: "chat", source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE, controlsProps: { debounce: true } };
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
                        closure_0 = false;
                        chatOpen(/* F153667 */ function() { ... });
                        if (!closure_3) {
                          const obj = { mode: constants.DRAWER };
                          const merged = Object.assign(closure_2);
                          setControlsMode(obj);
                        }
                        let tmp8 = closure_0;
                        if (!closure_0) {
                          tmp8 = closure_3.get().mode !== constants.DRAWER;
                        }
                        if (tmp8) {
                          isScreenReaderEnabled(channelId[21])(closure_1_2, closure_0, closure_1);
                        }
                      });
                      return;
                    }
                  }
                  cResult[19] = items;
                  let tmp23 = items;
                } else {
                  class F {
                    constructor() {
                      handleOpenChatTab = function handleOpenChatTab() {
                        closure_1_8({ tab: "chat", source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.HEADER_BUTTON });
                      };
                      ComponentDispatch = gestureState(channelId[42]).ComponentDispatch;
                      subscription = ComponentDispatch.subscribe(closure_1_16.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
                      return () => {
                        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                        ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
                      };
                    }
                  }
                  tmp23 = cResult[19];
                }
                const effect = obj3.useEffect(F, tmp23);
                tmp(tmp2[43]);
                class Y {
                  constructor() {
                    handleStoreChange = function handleStoreChange() {
                      chatOpen = ChannelRTCStore.getChatOpen(channelId);
                      if (chatOpen !== chatOpen) {
                        if (chatOpen) {
                          const obj = { tab: "chat", source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE, controlsProps: { debounce: true } };
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
                      closure_0 = false;
                      chatOpen(/* F153667 */ function() { ... });
                      if (!closure_3) {
                        const obj = { mode: constants.DRAWER };
                        const merged = Object.assign(closure_2);
                        setControlsMode(obj);
                      }
                      let tmp8 = closure_0;
                      if (!closure_0) {
                        tmp8 = closure_3.get().mode !== constants.DRAWER;
                      }
                      if (tmp8) {
                        isScreenReaderEnabled(channelId[21])(closure_1_2, closure_0, closure_1);
                      }
                    });
                    return;
                  }
                }
                let tmpResult10 = tmp(tmp2[17]);
                const tmpResult11 = tmp(tmp2[23]);
                tmp26[0] = tmpResult11.getControlsDefaultWidth(tmp(tmp2[44]).getWindowDimensions().width, rect.left, rect.right);
                const sharedValue1 = tmpResult10.useSharedValue(tmp26);
                const tmpResult12 = tmp(tmp2[44]);
                const token = tmp(tmp2[19]).useToken(tmp5(tmp2[10]).modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS);
                const tmpResult13 = tmp(tmp2[19]);
                class K {
                  constructor() {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[36]);
                    obj2 = closure_10;
                    num = 0;
                    if (!closure_10.get().drawerMode) {
                      num = closure_11;
                    }
                    size = { borderBottomRightRadius: obj.withSpring(num, BORDER_RADIUS_PHYSICS), borderBottomLeftRadius: null, height: null, width: null, marginLeft: null, transform: null };
                    tmp3 = BORDER_RADIUS_PHYSICS;
                    tmpResult = tmp(tmp2[36]);
                    num2 = 0;
                    if (!obj2.get().drawerMode) {
                      num2 = closure_11;
                    }
                    size.borderBottomLeftRadius = tmpResult.withSpring(num2, tmp3);
                    tmpResult1 = tmp(tmp2[36]);
                    size.height = tmpResult1.withSpring(obj2.get().height, closure_10);
                    tmpResult2 = tmp(tmp2[36]);
                    size.width = tmpResult2.withSpring(obj2.get().width, MODE_CHANGE_PHYSICS);
                    tmpResult3 = tmp(tmp2[36]);
                    tmp4 = closure_1(tmp2[45]);
                    size.marginLeft = tmpResult3.withSpring(-1 * tmp4(obj2.get().width / 2), MODE_CHANGE_PHYSICS);
                    obj1 = { translateX: null };
                    tmpResult4 = tmp(tmp2[36]);
                    tmp5 = UI_SHOW_HIDE_PHYSICS;
                    obj1.translateX = tmpResult4.withSpring(obj2.get().x, UI_SHOW_HIDE_PHYSICS);
                    items = [, ];
                    items[0] = obj1;
                    tmpResult5 = tmp(tmp2[36]);
                    if (obj2.get().hidden) {
                      tmp6 = CALL_TILE_GUTTER;
                      tmp8 = closure_9;
                      sum = obj2.get().height + CALL_TILE_GUTTER;
                      y = sum + closure_9.get();
                    } else {
                      obj11 = gestureState;
                      if (gestureState.get().active) {
                      }
                      y = obj2.get().y;
                    }
                    obj13 = { translateY: tmpResult5.withSpring(y, tmp5) };
                    items[1] = obj13;
                    size.transform = items;
                    return size;
                  }
                }
                const obj6 = { withSpring: tmp(tmp2[36]).withSpring, wrapperSpecs: sharedValue1, borderRadius: token, BORDER_RADIUS_PHYSICS, PANEL_CONTROLS_HEIGHT_PHYSICS: sharedValue1, MODE_CHANGE_PHYSICS, roundToNearestPixel: tmp5(tmp2[45]), UI_SHOW_HIDE_PHYSICS: sharedValue, gestureState, CALL_TILE_GUTTER, accessoryHeights: tmp18 };
                K.__closure = obj6;
                K.__workletHash = 280392793100;
                K.__initData = __initData9;
                const animatedStyle = tmp(tmp2[17]).useAnimatedStyle(K);
                const tmpResult14 = tmp(tmp2[17]);
                ({ hiddenProps, hiddenStyles } = tmp5(tmp2[46])(context.mode, sharedValue1));
                const tmp36 = tmp5(tmp2[46])(context.mode, sharedValue1);
                ({ gesture, scrollLockTargets, gestureSpecs } = useControlsGesture(first, sharedValue, sharedValue1, tmp17));
                closure_40(sharedValue1);
                const tmp42 = useControlsGesture(first, sharedValue, sharedValue1, tmp17);
                [r10168, tmp46] = tmp8(obj3.useState(false), 2);
                CALL_TILE_GUTTER = tmp46;
                const tmp8Result = tmp8(obj3.useState(false), 2);
                function ue() {
                  return controlsSpecs.get().mode;
                }
                const obj7 = { controlsSpecs };
                ue.__closure = obj7;
                ue.__workletHash = 2335050944822;
                ue.__initData = __initData10;
                function pe(arg0, arg1) {
                  if (tmp) {
                    if (arg0 === VoicePanelControlsModes.DRAWER) {
                      if (arg1 !== VoicePanelControlsModes.DRAWER) {
                        ReanimatedRexport.runOnJS(closure_12)(true);
                      }
                    }
                    if (tmp3) {
                      ReanimatedRexport.runOnJS(closure_12)(false);
                    }
                    tmp3 = arg0 !== VoicePanelControlsModes.DRAWER && arg1 === VoicePanelControlsModes.DRAWER;
                  }
                  tmp = arg0 !== arg1 && isScreenReaderEnabled;
                }
                const obj8 = { isScreenReaderEnabled, VoicePanelControlsModes, runOnJS: tmp(tmp2[17]).runOnJS, setIsDrawer: tmp46 };
                pe.__closure = obj8;
                pe.__workletHash = 12074663214929;
                pe.__initData = __initData11;
                const animatedReaction = tmp(tmp2[17]).useAnimatedReaction(ue, pe);
                const tmp8Result2 = tmp8(obj3.useState(false), 2);
                closure_13 = tmp53;
                const first1 = tmp8Result2[0];
                const tmpResult15 = tmp(tmp2[17]);
                class Ce {
                  constructor() {
                    return closure_10.get().drawerMode;
                  }
                }
                const obj9 = { wrapperSpecs: sharedValue1 };
                Ce.__closure = obj9;
                Ce.__workletHash = 2099961350703;
                Ce.__initData = __initData12;
                class Te {
                  constructor(arg0, arg1) {
                    if (gestureState !== arg1) {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      obj = closure_0(closure_2[17]);
                      tmp3 = closure_13;
                      runOnJSResult = obj.runOnJS(closure_13);
                      if (gestureState) {
                        flag2 = true;
                        tmp4Result = runOnJSResult(true);
                      } else {
                        flag = false;
                        tmp4Result1 = runOnJSResult(false);
                      }
                    }
                    return;
                  }
                }
                const obj10 = { runOnJS: tmp(tmp2[17]).runOnJS, setIsDrawerActive: tmp8Result2[1] };
                Te.__closure = obj10;
                Te.__workletHash = 5494024190383;
                Te.__initData = __initData13;
                const animatedReaction1 = tmp(tmp2[17]).useAnimatedReaction(Ce, Te);
                const id = obj3.useId();
                if (cResult[20] !== setControlsMode) {
                  class F {
                    constructor() {
                      handleOpenChatTab = function handleOpenChatTab() {
                        closure_1_8({ tab: "chat", source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.HEADER_BUTTON });
                      };
                      ComponentDispatch = gestureState(channelId[42]).ComponentDispatch;
                      subscription = ComponentDispatch.subscribe(closure_1_16.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
                      return () => {
                        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                        ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
                      };
                    }
                  }
                  cResult[20] = setControlsMode;
                  cResult[21] = tmp58;
                  class Y {
                    constructor() {
                      handleStoreChange = function handleStoreChange() {
                        chatOpen = ChannelRTCStore.getChatOpen(channelId);
                        if (chatOpen !== chatOpen) {
                          if (chatOpen) {
                            const obj = { tab: "chat", source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE, controlsProps: { debounce: true } };
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
                        closure_1_8({ tab: "chat", source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.HEADER_BUTTON });
                      };
                      ComponentDispatch = gestureState(channelId[42]).ComponentDispatch;
                      subscription = ComponentDispatch.subscribe(closure_1_16.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
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
                        closure_1_8({ tab: "chat", source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.HEADER_BUTTON });
                      };
                      ComponentDispatch = gestureState(channelId[42]).ComponentDispatch;
                      subscription = ComponentDispatch.subscribe(closure_1_16.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
                      return () => {
                        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                        ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
                      };
                    }
                  }
                  const obj11 = { wrapperSpecs: sharedValue1 };
                  class Y {
                    constructor() {
                      handleStoreChange = function handleStoreChange() {
                        chatOpen = ChannelRTCStore.getChatOpen(channelId);
                        if (chatOpen !== chatOpen) {
                          if (chatOpen) {
                            const obj = { tab: "chat", source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE, controlsProps: { debounce: true } };
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
                        closure_0 = false;
                        chatOpen(/* F153667 */ function() { ... });
                        if (!closure_3) {
                          const obj = { mode: constants.DRAWER };
                          const merged = Object.assign(closure_2);
                          setControlsMode(obj);
                        }
                        let tmp8 = closure_0;
                        if (!closure_0) {
                          tmp8 = closure_3.get().mode !== constants.DRAWER;
                        }
                        if (tmp8) {
                          isScreenReaderEnabled(channelId[21])(closure_1_2, closure_0, closure_1);
                        }
                      });
                      return;
                    }
                  }
                  const tmp60 = closure_18(tmp5(tmp2[47]), obj11);
                } else {
                  class F {
                    constructor() {
                      handleOpenChatTab = function handleOpenChatTab() {
                        closure_1_8({ tab: "chat", source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.HEADER_BUTTON });
                      };
                      ComponentDispatch = gestureState(channelId[42]).ComponentDispatch;
                      subscription = ComponentDispatch.subscribe(closure_1_16.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
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
                        closure_1_8({ tab: "chat", source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.HEADER_BUTTON });
                      };
                      ComponentDispatch = gestureState(channelId[42]).ComponentDispatch;
                      subscription = ComponentDispatch.subscribe(closure_1_16.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
                      return () => {
                        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                        ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
                      };
                    }
                  }
                }
                const obj12 = { channelId, wrapperSpecs: sharedValue1, controlsSpecs, accessoryHeights: tmp18, gestureState };
                const tmp64 = closure_18(closure_41, obj12);
                cResult[24] = tmp18;
                cResult[25] = channelId;
                cResult[26] = controlsSpecs;
                cResult[27] = gestureState;
                cResult[28] = sharedValue1;
                cResult[29] = tmp64;
                const tmpResult16 = tmp(tmp2[17]);
              }
            }
          }
          const items1 = [channelId, controlsSpecs, , ];
          class Y {
            constructor() {
              handleStoreChange = function handleStoreChange() {
                chatOpen = ChannelRTCStore.getChatOpen(channelId);
                if (chatOpen !== chatOpen) {
                  if (chatOpen) {
                    const obj = { tab: "chat", source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE, controlsProps: { debounce: true } };
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
                closure_0 = false;
                chatOpen(/* F153667 */ function() { ... });
                if (!closure_3) {
                  const obj = { mode: constants.DRAWER };
                  const merged = Object.assign(closure_2);
                  setControlsMode(obj);
                }
                let tmp8 = closure_0;
                if (!closure_0) {
                  tmp8 = closure_3.get().mode !== constants.DRAWER;
                }
                if (tmp8) {
                  isScreenReaderEnabled(channelId[21])(closure_1_2, closure_0, closure_1);
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
                  const obj = { tab: "chat", source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE, controlsProps: { debounce: true } };
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
              closure_0 = false;
              chatOpen(/* F153667 */ function() { ... });
              if (!closure_3) {
                const obj = { mode: constants.DRAWER };
                const merged = Object.assign(closure_2);
                setControlsMode(obj);
              }
              let tmp8 = closure_0;
              if (!closure_0) {
                tmp8 = closure_3.get().mode !== constants.DRAWER;
              }
              if (tmp8) {
                isScreenReaderEnabled(channelId[21])(closure_1_2, closure_0, closure_1);
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
          closure_0 = false;
          chatOpen(/* F153667 */ function() { ... });
          if (!closure_3) {
            const obj = { mode: constants.DRAWER };
            const merged = Object.assign(closure_2);
            setControlsMode(obj);
          }
          let tmp8 = closure_0;
          if (!closure_0) {
            tmp8 = closure_3.get().mode !== constants.DRAWER;
          }
          if (tmp8) {
            isScreenReaderEnabled(channelId[21])(closure_1_2, closure_0, closure_1);
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
    let tmpResult = tmp(tmp2[39]);
  }
  const fn = function n() {
    const result = sharedValue.set(first);
  };
  cResult[0] = sharedValue;
  cResult[1] = first;
  cResult[2] = fn;
  tmp12 = fn;
  const obj4 = gestureState(channelId[17]);
}) : ((gestureState) => {
  gestureState = gestureState.gestureState;
  let channelId;
  let setControlsMode;
  CALL_TILE_GUTTER = undefined;
  closure_13 = undefined;
  const isScreenReaderEnabled = gestureState(channelId[25]).useIsScreenReaderEnabled();
  const context = setControlsMode.useContext(isScreenReaderEnabled(channelId[16]));
  channelId = context.channelId;
  const controlsSpecs = context.controlsSpecs;
  setControlsMode = context.setControlsMode;
  const tmp6 = closure_21();
  const tmp7 = controlsSpecs(setControlsMode.useState(null), 2);
  const tab = tmp7[0];
  let chatOpen = tmp7[1];
  let obj = gestureState(channelId[25]);
  let tmp4 = isScreenReaderEnabled;
  const sharedValue = gestureState(channelId[17]).useSharedValue(tab);
  const layoutEffect = setControlsMode.useLayoutEffect(() => {
    const result = sharedValue.set(first);
  });
  const tmp11 = isScreenReaderEnabled(channelId[38])(channelId);
  let obj2 = gestureState(channelId[17]);
  const maybeFetchSoundboardSounds = gestureState(channelId[39]).useMaybeFetchSoundboardSounds({ shouldFetch: tmp11 });
  let items = [channelId, controlsSpecs, setControlsMode];
  const openTab = setControlsMode.useCallback((controlsProps) => {
    ({ tab: gestureState, source: isScreenReaderEnabled, disableControlsUpdate } = controlsProps);
    if (disableControlsUpdate === undefined) {
      disableControlsUpdate = false;
    }
    controlsProps = controlsProps.controlsProps;
    gestureState(channelId[40]).batchUpdates(() => {
      closure_0 = false;
      chatOpen((arg0) => {
        closure_0 = arg0 !== gestureState;
        return gestureState;
      });
      if (!disableControlsUpdate) {
        const obj = { mode: constants.DRAWER };
        const merged = Object.assign(controlsProps);
        setControlsMode(obj);
      }
      let tmp8 = closure_0;
      if (!closure_0) {
        tmp8 = controlsProps.get().mode !== constants.DRAWER;
      }
      if (tmp8) {
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
          const obj = { tab: "chat", source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.STORE, controlsProps: { debounce: true } };
          callback(obj);
        }
      }
    }
    chatOpen = chatOpen.getChatOpen(channelId);
    if (chatOpen !== chatOpen) {
      if (chatOpen) {
        const obj2 = { tab: "chat", source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.STORE, controlsProps: { debounce: true } };
        callback(obj2);
      }
    }
    chatOpen.addChangeListener(handleStoreChange);
    return () => {
      ChannelRTCStore.removeChangeListener(handleStoreChange);
    };
  }, items1);
  const items2 = [openTab];
  const effect = setControlsMode.useEffect(() => {
    function handleOpenChatTab() {
      callback({ tab: "chat", source: gestureState(channelId[21]).VoicePanelTabAnalyticsSources.HEADER_BUTTON });
    }
    let ComponentDispatch = gestureState(channelId[42]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants2.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(constants.VOICE_PANEL_OPEN_CHAT_TAB, handleOpenChatTab);
    };
  }, items2);
  let obj3 = gestureState(channelId[39]);
  const rect = gestureState(channelId[43]).getSafeAreaInsets();
  const obj4 = gestureState(channelId[43]);
  let size = { width: null, height: 0, x: 0, y: 0, drawerMode: false, hidden: false };
  const obj5 = gestureState(channelId[17]);
  const obj7 = gestureState(channelId[23]);
  size.width = obj7.getControlsDefaultWidth(gestureState(channelId[44]).getWindowDimensions().width, rect.left, rect.right);
  const sharedValue1 = obj5.useSharedValue(size);
  const obj8 = gestureState(channelId[44]);
  const token = gestureState(channelId[19]).useToken(isScreenReaderEnabled(channelId[10]).modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS);
  const obj9 = gestureState(channelId[19]);
  const fn = function k() {
    num = 0;
    if (!sharedValue1.get().drawerMode) {
      num = token;
    }
    const size = { borderBottomRightRadius: spring.withSpring(num, BORDER_RADIUS_PHYSICS), borderBottomLeftRadius: null, height: null, width: null, marginLeft: null, transform: null };
    let num2 = 0;
    if (!sharedValue1.get().drawerMode) {
      num2 = token;
    }
    size.borderBottomLeftRadius = spring.withSpring(num2, BORDER_RADIUS_PHYSICS);
    const tmpResult = spring;
    size.height = spring.withSpring(sharedValue1.get().height, v65535);
    const tmpResult6 = spring;
    size.width = spring.withSpring(sharedValue1.get().width, MODE_CHANGE_PHYSICS);
    const tmpResult7 = spring;
    const tmpResult8 = spring;
    size.marginLeft = tmpResult8.withSpring(-1 * roundToNearestPixelDefault(sharedValue1.get().width / 2), MODE_CHANGE_PHYSICS);
    const obj3 = { translateX: null };
    obj3.translateX = spring.withSpring(sharedValue1.get().x, React5);
    const items = [obj3, ];
    const tmpResult9 = spring;
    if (sharedValue1.get().hidden) {
      const sum = sharedValue1.get().height + CALL_TILE_GUTTER;
      let y = sum + closure_9.get();
    } else {
      y = sharedValue1.get().y;
    }
    const tmpResult10 = spring;
    items[1] = { translateY: spring.withSpring(y, React5) };
    size.transform = items;
    return size;
  };
  const obj10 = gestureState(channelId[17]);
  fn.__closure = { withSpring: gestureState(channelId[36]).withSpring, wrapperSpecs: sharedValue1, borderRadius: token, BORDER_RADIUS_PHYSICS, PANEL_CONTROLS_HEIGHT_PHYSICS: sharedValue1, MODE_CHANGE_PHYSICS: openTab, roundToNearestPixel: isScreenReaderEnabled(channelId[45]), UI_SHOW_HIDE_PHYSICS: sharedValue, gestureState, CALL_TILE_GUTTER, accessoryHeights: tmp14 };
  fn.__workletHash = 5600912622376;
  fn.__initData = __initData14;
  const animatedStyle = obj10.useAnimatedStyle(fn);
  const obj6 = { withSpring: gestureState(channelId[36]).withSpring, wrapperSpecs: sharedValue1, borderRadius: token, BORDER_RADIUS_PHYSICS, PANEL_CONTROLS_HEIGHT_PHYSICS: sharedValue1, MODE_CHANGE_PHYSICS: openTab, roundToNearestPixel: isScreenReaderEnabled(channelId[45]), UI_SHOW_HIDE_PHYSICS: sharedValue, gestureState, CALL_TILE_GUTTER, accessoryHeights: tmp14 };
  ({ hiddenProps, hiddenStyles } = isScreenReaderEnabled(channelId[46])(context.mode, sharedValue1));
  const tmp20 = isScreenReaderEnabled(channelId[46])(context.mode, sharedValue1);
  ({ gesture, scrollLockTargets, gestureSpecs } = useControlsGesture(tab, sharedValue, sharedValue1, openTab));
  closure_40(sharedValue1);
  const tmp23 = controlsSpecs(setControlsMode.useState(false), 2);
  CALL_TILE_GUTTER = tmp24;
  const tmp21 = useControlsGesture(tab, sharedValue, sharedValue1, openTab);
  class Q {
    constructor() {
      return controlsSpecs.get().mode;
    }
  }
  Q.__closure = { controlsSpecs };
  Q.__workletHash = 6330335092624;
  Q.__initData = __initData15;
  const fn2 = function z(arg0, arg1) {
    if (tmp) {
      if (arg0 === VoicePanelControlsModes.DRAWER) {
        if (arg1 !== VoicePanelControlsModes.DRAWER) {
          ReanimatedRexport.runOnJS(closure_12)(true);
        }
      }
      if (tmp3) {
        ReanimatedRexport.runOnJS(closure_12)(false);
      }
      tmp3 = arg0 !== VoicePanelControlsModes.DRAWER && arg1 === VoicePanelControlsModes.DRAWER;
    }
    tmp = arg0 !== arg1 && isScreenReaderEnabled;
  };
  const obj12 = gestureState(channelId[17]);
  fn2.__closure = { isScreenReaderEnabled, VoicePanelControlsModes, runOnJS: gestureState(channelId[17]).runOnJS, setIsDrawer: tmp23[1] };
  fn2.__workletHash = 5998141114201;
  fn2.__initData = __initData16;
  const animatedReaction = obj12.useAnimatedReaction(Q, fn2);
  const tmp26 = controlsSpecs(setControlsMode.useState(false), 2);
  closure_13 = tmp27;
  const obj11 = { isScreenReaderEnabled, VoicePanelControlsModes, runOnJS: gestureState(channelId[17]).runOnJS, setIsDrawer: tmp23[1] };
  function ie() {
    return sharedValue1.get().drawerMode;
  }
  ie.__closure = { wrapperSpecs: sharedValue1 };
  ie.__workletHash = 2190826266433;
  ie.__initData = __initData17;
  function ne(arg0, arg1) {
    if (arg0 !== arg1) {
      const runOnJSResult = ReanimatedRexport.runOnJS(closure_13);
      if (arg0) {
        runOnJSResult(true);
      } else {
        runOnJSResult(false);
      }
    }
  }
  const obj14 = gestureState(channelId[17]);
  ne.__closure = { runOnJS: gestureState(channelId[17]).runOnJS, setIsDrawerActive: tmp26[1] };
  ne.__workletHash = 11506068361772;
  ne.__initData = __initData18;
  const animatedReaction1 = obj14.useAnimatedReaction(ie, ne);
  const items3 = [setControlsMode];
  const id = setControlsMode.useId();
  const callback1 = setControlsMode.useCallback(() => {
    setControlsMode({ mode: VoicePanelControlsModes.FLOATING_DEFAULT });
  }, items3);
  const obj15 = { value: scrollLockTargets, children: null };
  const items4 = [closure_18(isScreenReaderEnabled(channelId[47]), { wrapperSpecs: sharedValue1 }), closure_18(closure_41, { channelId, wrapperSpecs: sharedValue1, controlsSpecs, accessoryHeights: tmp14, gestureState }), ];
  const obj16 = { nativeID: id, style: tmp6.accessibilityWrapper, accessibilityViewIsModal: tmp23[0], onAccessibilityEscape: callback1, pointerEvents: "box-none", children: null };
  const obj13 = { runOnJS: gestureState(channelId[17]).runOnJS, setIsDrawerActive: tmp26[1] };
  const obj17 = { gesture, children: null };
  const obj18 = { style: null, animatedProps: hiddenProps, children: null };
  const items5 = [tmp6.wrapper, animatedStyle, hiddenStyles];
  obj18.style = items5;
  const tmp33 = isScreenReaderEnabled(channelId[50]);
  let ONYX;
  if (tmp11) {
    if (!tmp26[0]) {
      ONYX = constants2.ONYX;
    }
  }
  const obj19 = { theme: ONYX, children: null };
  const items6 = [closure_18(gestureState(channelId[48]).VoicePanelVisualEffectView, { matchAppTheme: !tmp11 }), closure_18(closure_44, { openTab, wrapperSpecs: sharedValue1, sharedTab: sharedValue })];
  obj19.children = items6;
  const items7 = [closure_20(gestureState(channelId[31]).ThemeContextProvider, obj19), closure_18(tmp4(channelId[49]), { wrapperSpecs: sharedValue1, tab, sharedTab: sharedValue, gestureSpecs, openTab }), ];
  const obj20 = { matchAppTheme: !tmp11 };
  const tmp34 = isScreenReaderEnabled(channelId[37]);
  let tmp32Result = null;
  if (!tmpResult.isMetaQuest()) {
    const obj21 = { openTab };
    tmp32Result = closure_18(closure_25, obj21);
  }
  items7[2] = tmp32Result;
  obj18.children = items7;
  obj17.children = closure_20(tmp34, obj18);
  obj16.children = closure_18(gestureState(channelId[20]).GestureDetector, obj17);
  items4[2] = closure_18(tmp33, obj16);
  obj15.children = items4;
  return closure_20(gestureState(channelId[51]).ControlsGestureScrollLock.Provider, obj15);
}));