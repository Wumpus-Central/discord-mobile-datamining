// discord_app/modules/voice_panel/native/dock/VoicePanelDock.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05303_LegacyBaseButton.js";
import ExternalPipDefault from "../../../external_pip/ExternalPip.android.tsx";
import updateSharedValueIfChangedDefault from "../../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import VoicePanelSheetMorph from "VoicePanelSheetMorph.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const VoicePanelModes = fn(11223).VoicePanelModes;
const VoicePanelDockConstants = fn(11241);
({
  DOCK_EXPAND_GESTURE_CANCEL_DISTANCE: closure_7,
  DOCK_PULL_SNAP_DISTANCE: closure_8,
  DOCK_PULL_SNAP_GIVE: closure_9,
  DOCK_TAP_MAX_MOVEMENT: c10,
  getDockInset: closure_11,
  DOCK_DRAG_HANDLE_TOP,
  DOCK_DRAG_HANDLE_WIDTH,
  DOCK_GAP,
  DOCK_PADDING_TOP,
  DOCK_ROW_HEIGHT,
} = VoicePanelDockConstants);
const GestureConstants = fn(11242);
({
  FLING_MIN_DISTANCE: closure_12,
  FLING_MIN_VELOCITY: map1,
  PULL_GESTURE_ACTIVATION_DISTANCE: closure_14,
  PULL_GESTURE_RESISTANCE: closure_15,
  PULL_GESTURE_SNAP_TIMING: closure_16,
  PULL_GESTURE_UNSNAP_TIMING: closure_17,
} = GestureConstants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(5014);
let obj = {
  dock: { position: "absolute", top: 0, left: 0, right: 0, paddingTop: DOCK_PADDING_TOP, zIndex: 10 },
  pressTarget: { position: "absolute", top: 0, left: 0, right: 0 },
  dragHandle: null,
  row: null,
  identity: null,
};
let size = {
  position: "absolute",
  top: DOCK_DRAG_HANDLE_TOP,
  alignSelf: "center",
  width: DOCK_DRAG_HANDLE_WIDTH,
  height: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj.dragHandle = size;
obj.row = { flexDirection: "row", alignItems: "center", gap: DOCK_GAP, height: DOCK_ROW_HEIGHT };
obj.identity = { flexShrink: 1, flexGrow: 1, justifyContent: "center" };
let closure_20 = createStyles.createStyles(obj);
const __initData = {
  code: "function VoicePanelDockTsx1(){const{dockMinimizeProgress,SHEET_MORPH_PHYSICS}=this.__closure;const progress=dockMinimizeProgress.get();const restThreshold=SHEET_MORPH_PHYSICS.restDisplacementThreshold;return progress<=restThreshold||progress>=1-restThreshold;}",
};
const __initData2 = {
  code: "function VoicePanelDockTsx2(settled,previous){const{mode,VoicePanelModes,runOnJS,updateSourceTrackingView}=this.__closure;if(settled&&previous!==settled&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}}",
};
const __initData3 = {
  code: "function VoicePanelDockTsx3(){const{pullActive,pullDistance,pullSnapOffset}=this.__closure;return{active:pullActive.get(),distance:pullDistance.get(),snapOffset:pullSnapOffset.get()};}",
};
const __initData4 = {
  code: "function VoicePanelDockTsx4({active:active,distance:distance,snapOffset:snapOffset}){const{wrapperDimensions,dockHeight,pullSnapped,DOCK_PULL_SNAP_GIVE,PULL_GESTURE_RESISTANCE,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(!active){return;}const travel=wrapperDimensions.get().drawerHeight-dockHeight.get();const pulled=(pullSnapped.get()?distance-DOCK_PULL_SNAP_GIVE:distance/PULL_GESTURE_RESISTANCE)+snapOffset;updateSharedValueIfChanged(wrapperOffset,{x:0,y:Math.min(Math.max(travel-pulled,0),travel)});}",
};
let closure_25 = {
  code: "function VoicePanelDockTsx5(){const{pullActive,pullSnapped,pullSnapOffset,updateSharedValueIfChanged,wrapperOffset}=this.__closure;pullActive.set(false);pullSnapped.set(false);pullSnapOffset.set(0);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}",
};
let closure_26 = {
  code: "function VoicePanelDockTsx6(event){const{FLING_MIN_VELOCITY,FLING_MIN_DISTANCE,pullSnapped,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,committedMode,VoicePanelModes,handleExpand}=this.__closure;const distance=Math.max(-event.translationY,0);const flungOpen=event.velocityY<-FLING_MIN_VELOCITY&&distance>FLING_MIN_DISTANCE;const flungClosed=event.velocityY>FLING_MIN_VELOCITY;const opens=flungOpen||!flungClosed&&pullSnapped.get();if(opens){if(!pullSnapped.get()){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}committedMode.set(VoicePanelModes.PANEL);runOnJS(handleExpand)();}else if(pullSnapped.get()){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}}",
};
let closure_27 = {
  code: "function VoicePanelDockTsx7(event){const{DOCK_PULL_SNAP_DISTANCE,pullSnapped,dockContentSwap,withTiming,DOCK_CONTENT_SWAP_TIMING,pullSnapOffset,DOCK_PULL_SNAP_GIVE,PULL_GESTURE_SNAP_TIMING,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,PULL_GESTURE_UNSNAP_TIMING,pullDistance}=this.__closure;const distance=Math.max(-event.translationY,0);const snapped=distance>=DOCK_PULL_SNAP_DISTANCE;if(snapped!==pullSnapped.get()){pullSnapped.set(snapped);dockContentSwap.set(withTiming(snapped?1:0,DOCK_CONTENT_SWAP_TIMING));if(snapped){pullSnapOffset.set(withTiming(DOCK_PULL_SNAP_GIVE,PULL_GESTURE_SNAP_TIMING));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}else{pullSnapOffset.set(withTiming(0,PULL_GESTURE_UNSNAP_TIMING));runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.SOFT);}}pullDistance.set(distance);}",
};
let closure_28 = {
  code: "function VoicePanelDockTsx8(event){const{runOnJS,showControls,pullSnapped,pullSnapOffset,pullDistance,pullActive,updateSharedValueIfChanged,wrapperOffset,wrapperDimensions,dockHeight}=this.__closure;runOnJS(showControls)();pullSnapped.set(false);pullSnapOffset.set(0);pullDistance.set(Math.max(-event.translationY,0));pullActive.set(true);updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:Math.max(wrapperDimensions.get().drawerHeight-dockHeight.get(),0)});}",
};
let closure_29 = {
  code: "function VoicePanelDockTsx9(event){const{touchOrigin,touchMovement}=this.__closure;const touch=event.changedTouches[0];if(touch==null){return;}const origin=touchOrigin.get();const moved=Math.max(Math.abs(touch.absoluteX-origin.x),Math.abs(touch.absoluteY-origin.y));if(moved>touchMovement.get()){touchMovement.set(moved);}}",
};
let closure_30 = {
  code: "function VoicePanelDockTsx10(event){const{touchOrigin,touchMovement}=this.__closure;touchOrigin.set({x:event.absoluteX,y:event.absoluteY});touchMovement.set(0);}",
};
const __initData5 = {
  code: "function VoicePanelDockTsx11(){const{dockPressProgress}=this.__closure;return{opacity:dockPressProgress.get()};}",
};
const __initData6 = {
  code: "function VoicePanelDockTsx12(){const{dockMinimizeProgress,wrapperDimensions,isDockConnected,getDockInset,dockPressProgress,dockHeight,getDockRowOpacity,isDockExpanding,dockContentSwap,isDockRowTouchable}=this.__closure;const progress=1-dockMinimizeProgress.get();const{drawerHeight:drawerHeight}=wrapperDimensions.get();if(!isDockConnected.get()||drawerHeight<=0){return{opacity:0,pointerEvents:'none'};}const inset=getDockInset(dockPressProgress.get());return{height:dockHeight.get(),opacity:getDockRowOpacity(progress,isDockExpanding.get(),dockContentSwap.get()),pointerEvents:isDockRowTouchable(progress)?'auto':'none',paddingLeft:inset,paddingRight:inset};}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDock.tsx");

export default noop.memo(function VoicePanelDock() {
  let tmp = sharedValue5();
  const bottom = committedMode(dockContentSwap[8])().bottom;
  const context = dockHeight.useContext(committedMode(dockContentSwap[9]));
  committedMode = context.committedMode;
  dockContentSwap = context.dockContentSwap;
  dockHeight = context.dockHeight;
  const dockPressProgress = context.dockPressProgress;
  const dockPressed = context.dockPressed;
  const isDockConnected = context.isDockConnected;
  const isDockExpanding = context.isDockExpanding;
  const setMode = context.setMode;
  const showControls = context.showControls;
  const dockMinimizeProgress = context.dockMinimizeProgress;
  const mode = context.mode;
  const wrapperDimensions = context.wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  let fn = function l() {
    value = dockMinimizeProgress.get();
    const restDisplacementThreshold = VoicePanelSheetMorph.SHEET_MORPH_PHYSICS.restDisplacementThreshold;
    let tmp2 = value <= restDisplacementThreshold;
    if (!tmp2) {
      tmp2 = value >= 1 - restDisplacementThreshold;
    }
    return tmp2;
  };
  let obj = bottom(dockContentSwap[10]);
  fn.__closure = { dockMinimizeProgress, SHEET_MORPH_PHYSICS: bottom(dockContentSwap[11]).SHEET_MORPH_PHYSICS };
  fn.__workletHash = 224524498189;
  fn.__initData = __initData;
  let fn2 = function n(arg0, arg1) {
    let tmp = arg0;
    if (arg0) {
      tmp = arg1 !== arg0;
    }
    if (tmp) {
      tmp = mode.get() !== VoicePanelModes.DISMISSED;
    }
    if (tmp) {
      ReanimatedRexport.runOnJS(ExternalPipDefault.updateSourceTrackingView)();
    }
  };
  let obj2 = { dockMinimizeProgress, SHEET_MORPH_PHYSICS: bottom(dockContentSwap[11]).SHEET_MORPH_PHYSICS };
  fn2.__closure = {
    mode,
    VoicePanelModes: isDockConnected,
    runOnJS: bottom(dockContentSwap[10]).runOnJS,
    updateSourceTrackingView: committedMode(dockContentSwap[12]).updateSourceTrackingView,
  };
  fn2.__workletHash = 3463062968340;
  fn2.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  let items = [setMode, showControls];
  const handleExpand = dockHeight.useCallback(() => {
    showControls();
    setMode(VoicePanelModes.PANEL);
  }, items);
  let obj3 = {
    mode,
    VoicePanelModes: isDockConnected,
    runOnJS: bottom(dockContentSwap[10]).runOnJS,
    updateSourceTrackingView: committedMode(dockContentSwap[12]).updateSourceTrackingView,
  };
  const sharedValue = bottom(dockContentSwap[10]).useSharedValue({ x: 0, y: 0 });
  let obj4 = bottom(dockContentSwap[10]);
  const sharedValue1 = bottom(dockContentSwap[10]).useSharedValue(0);
  const items1 = [handleExpand, sharedValue1];
  const callback1 = dockHeight.useCallback(() => {
    if (sharedValue1.get() <= closure_2_10) {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      callback();
    }
  }, items1);
  let obj5 = bottom(dockContentSwap[10]);
  const sharedValue2 = bottom(dockContentSwap[10]).useSharedValue(0);
  const obj6 = bottom(dockContentSwap[10]);
  const sharedValue3 = bottom(dockContentSwap[10]).useSharedValue(0);
  const obj7 = bottom(dockContentSwap[10]);
  const sharedValue4 = bottom(dockContentSwap[10]).useSharedValue(false);
  const obj8 = bottom(dockContentSwap[10]);
  sharedValue5 = bottom(dockContentSwap[10]).useSharedValue(false);
  const obj9 = bottom(dockContentSwap[10]);
  function ne() {
    return { active: sharedValue5.get(), distance: sharedValue2.get(), snapOffset: sharedValue3.get() };
  }
  ne.__closure = { pullActive: sharedValue5, pullDistance: sharedValue2, pullSnapOffset: sharedValue3 };
  ne.__workletHash = 17519042371659;
  ne.__initData = __initData3;
  function te(active) {
    ({ distance, snapOffset } = active);
    if (active.active) {
      const diff = wrapperDimensions.get().drawerHeight - dockHeight.get();
      if (sharedValue4.get()) {
        let diff1 = distance - DOCK_PULL_SNAP_GIVE;
      } else {
        diff1 = distance / __initData;
      }
      const sum = diff1 + snapOffset;
      const point = { x: 0, y: null };
      distance = Math;
      const _Math = Math;
      snapOffset = Math.min(Math.max(diff - sum, 0), diff);
      point.y = snapOffset;
      updateSharedValueIfChangedDefault(wrapperOffset, point);
    }
  }
  const obj10 = bottom(dockContentSwap[10]);
  te.__closure = {
    wrapperDimensions,
    dockHeight,
    pullSnapped: sharedValue4,
    DOCK_PULL_SNAP_GIVE: showControls,
    PULL_GESTURE_RESISTANCE: sharedValue,
    updateSharedValueIfChanged: committedMode(dockContentSwap[14]),
    wrapperOffset,
  };
  te.__workletHash = 11212990198006;
  te.__initData = __initData4;
  const animatedReaction1 = obj10.useAnimatedReaction(ne, te);
  const items2 = [
    bottom,
    committedMode,
    dockContentSwap,
    handleExpand,
    showControls,
    sharedValue5,
    sharedValue2,
    sharedValue3,
    sharedValue4,
    sharedValue1,
    sharedValue,
    wrapperDimensions,
    wrapperOffset,
    dockHeight,
  ];
  const items3 = [dockPressed];
  const memo = dockHeight.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    let obj = { bottom: -bottom };
    const hitSlopResult = Gesture.Pan().hitSlop({ bottom: -bottom });
    const activeOffsetYResult = Gesture.Pan().hitSlop({ bottom: -bottom }).activeOffsetY(-closure_2_14);
    const items = [-React5, React5];
    const failOffsetYResult = Gesture.Pan()
      .hitSlop({ bottom: -bottom })
      .activeOffsetY(-closure_2_14)
      .failOffsetY(closure_2_14);
    const fn = function p(absoluteX) {
      const point = { x: absoluteX.absoluteX, y: absoluteX.absoluteY };
      const result = sharedValue.set(point);
      const result1 = sharedValue1.set(0);
    };
    fn.__closure = { touchOrigin: sharedValue, touchMovement: sharedValue1 };
    fn.__workletHash = 6099745163609;
    fn.__initData = __initData6;
    const failOffsetXResult = Gesture.Pan()
      .hitSlop({ bottom: -bottom })
      .activeOffsetY(-closure_2_14)
      .failOffsetY(closure_2_14)
      .failOffsetX(items);
    let obj2 = { touchOrigin: sharedValue, touchMovement: sharedValue1 };
    const fn2 = function l(arg0) {
      const first = arg0.changedTouches[0];
      if (null != first) {
        const point = sharedValue.get();
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const absolute = Math.abs(first.absoluteX - point.x);
        const bound = Math.max(absolute, Math.abs(first.absoluteY - point.y));
        if (bound > sharedValue1.get()) {
          const result = sharedValue1.set(bound);
        }
      }
    };
    fn2.__closure = { touchOrigin: sharedValue, touchMovement: sharedValue1 };
    fn2.__workletHash = 1057270337791;
    fn2.__initData = __initData5;
    const onBeginResult = Gesture.Pan()
      .hitSlop({ bottom: -bottom })
      .activeOffsetY(-closure_2_14)
      .failOffsetY(closure_2_14)
      .failOffsetX(items)
      .onBegin(fn);
    const fn3 = function o(translationY) {
      bottom(dockContentSwap[10]).runOnJS(showControls)();
      const result = sharedValue4.set(false);
      const result1 = sharedValue3.set(0);
      const result2 = sharedValue2.set(Math.max(-translationY.translationY, 0));
      const result3 = sharedValue5.set(true);
      const point = { gestureActive: true, x: 0, y: null };
      const obj = bottom(dockContentSwap[10]);
      point.y = Math.max(wrapperDimensions.get().drawerHeight - dockHeight.get(), 0);
      committedMode(dockContentSwap[14])(wrapperOffset, point);
    };
    const onTouchesMoveResult = Gesture.Pan()
      .hitSlop({ bottom: -bottom })
      .activeOffsetY(-closure_2_14)
      .failOffsetY(closure_2_14)
      .failOffsetX(items)
      .onBegin(fn)
      .onTouchesMove(fn2);
    fn3.__closure = {
      runOnJS: ReanimatedRexport.runOnJS,
      showControls,
      pullSnapped: sharedValue4,
      pullSnapOffset: sharedValue3,
      pullDistance: sharedValue2,
      pullActive: sharedValue5,
      updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
      wrapperOffset,
      wrapperDimensions,
      dockHeight,
    };
    fn3.__workletHash = 15832534447306;
    fn3.__initData = __initData4;
    let obj3 = {
      runOnJS: ReanimatedRexport.runOnJS,
      showControls,
      pullSnapped: sharedValue4,
      pullSnapOffset: sharedValue3,
      pullDistance: sharedValue2,
      pullActive: sharedValue5,
      updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
      wrapperOffset,
      wrapperDimensions,
      dockHeight,
    };
    const fn4 = function s(translationY) {
      const bound = Math.max(-translationY.translationY, 0);
      if (bound >= setMode !== sharedValue4.get()) {
        const result = sharedValue4.set(tmp2);
        let num = 0;
        if (tmp2) {
          num = 1;
        }
        const result1 = closure_1_2.set(
          bottom(dockContentSwap[16]).withTiming(num, bottom(dockContentSwap[11]).DOCK_CONTENT_SWAP_TIMING),
        );
        const obj4 = bottom(dockContentSwap[16]);
        const withTiming = bottom(dockContentSwap[16]).withTiming;
        if (tmp2) {
          const result2 = set(withTiming(showControls, sharedValue1));
          const tmp18Result3 = bottom(dockContentSwap[10]);
          bottom(dockContentSwap[10]).runOnJS(bottom(dockContentSwap[13]).triggerHapticFeedback)(
            bottom(dockContentSwap[13]).HapticFeedbackTypes.IMPACT_MEDIUM,
          );
          const runOnJSResult = bottom(dockContentSwap[10]).runOnJS(bottom(dockContentSwap[13]).triggerHapticFeedback);
        } else {
          const result3 = set(withTiming(0, sharedValue2));
          const tmp18Result4 = bottom(dockContentSwap[10]);
          bottom(dockContentSwap[10]).runOnJS(bottom(dockContentSwap[13]).triggerHapticFeedback)(
            bottom(dockContentSwap[13]).HapticFeedbackTypes.SOFT,
          );
          const runOnJSResult1 = bottom(dockContentSwap[10]).runOnJS(bottom(dockContentSwap[13]).triggerHapticFeedback);
        }
        const tmp18Result = bottom(dockContentSwap[16]);
      }
      const result4 = closure_1_17.set(bound);
    };
    const onStartResult = onTouchesMoveResult.onStart(fn3);
    fn4.__closure = {
      DOCK_PULL_SNAP_DISTANCE,
      pullSnapped: sharedValue4,
      dockContentSwap,
      withTiming: timing.withTiming,
      DOCK_CONTENT_SWAP_TIMING: VoicePanelSheetMorph.DOCK_CONTENT_SWAP_TIMING,
      pullSnapOffset: sharedValue3,
      DOCK_PULL_SNAP_GIVE,
      PULL_GESTURE_SNAP_TIMING,
      runOnJS: ReanimatedRexport.runOnJS,
      triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
      HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes,
      PULL_GESTURE_UNSNAP_TIMING,
      pullDistance: sharedValue2,
    };
    fn4.__workletHash = 1623835250672;
    fn4.__initData = __initData3;
    let obj4 = {
      DOCK_PULL_SNAP_DISTANCE,
      pullSnapped: sharedValue4,
      dockContentSwap,
      withTiming: timing.withTiming,
      DOCK_CONTENT_SWAP_TIMING: VoicePanelSheetMorph.DOCK_CONTENT_SWAP_TIMING,
      pullSnapOffset: sharedValue3,
      DOCK_PULL_SNAP_GIVE,
      PULL_GESTURE_SNAP_TIMING,
      runOnJS: ReanimatedRexport.runOnJS,
      triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
      HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes,
      PULL_GESTURE_UNSNAP_TIMING,
      pullDistance: sharedValue2,
    };
    const fn5 = function n(velocityY) {
      let tmp2 = velocityY.velocityY < -wrapperOffset;
      if (tmp2) {
        tmp2 = tmp > wrapperDimensions;
      }
      if (tmp2) {
        if (!sharedValue4.get()) {
          const obj2 = bottom(dockContentSwap[10]);
          bottom(dockContentSwap[10]).runOnJS(bottom(dockContentSwap[13]).triggerHapticFeedback)(
            bottom(dockContentSwap[13]).HapticFeedbackTypes.IMPACT_MEDIUM,
          );
          const runOnJSResult = bottom(dockContentSwap[10]).runOnJS(bottom(dockContentSwap[13]).triggerHapticFeedback);
        }
        const result = committedMode.set(isDockConnected.PANEL);
        bottom(dockContentSwap[10]).runOnJS(handleExpand)();
        const obj3 = bottom(dockContentSwap[10]);
      } else if (sharedValue4.get()) {
        const obj = bottom(dockContentSwap[10]);
        bottom(dockContentSwap[10]).runOnJS(bottom(dockContentSwap[13]).triggerHapticFeedback)(
          bottom(dockContentSwap[13]).HapticFeedbackTypes.SOFT,
        );
        const runOnJSResult1 = bottom(dockContentSwap[10]).runOnJS(bottom(dockContentSwap[13]).triggerHapticFeedback);
      }
    };
    const onChangeResult = onStartResult.onChange(fn4);
    fn5.__closure = {
      FLING_MIN_VELOCITY,
      FLING_MIN_DISTANCE,
      pullSnapped: sharedValue4,
      runOnJS: ReanimatedRexport.runOnJS,
      triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
      HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes,
      committedMode,
      VoicePanelModes,
      handleExpand,
    };
    fn5.__workletHash = 15141841445202;
    fn5.__initData = __initData2;
    const obj5 = {
      FLING_MIN_VELOCITY,
      FLING_MIN_DISTANCE,
      pullSnapped: sharedValue4,
      runOnJS: ReanimatedRexport.runOnJS,
      triggerHapticFeedback: HapticUtils.triggerHapticFeedback,
      HapticFeedbackTypes: HapticUtils.HapticFeedbackTypes,
      committedMode,
      VoicePanelModes,
      handleExpand,
    };
    const fn6 = function t() {
      const result = sharedValue5.set(false);
      const result1 = sharedValue4.set(false);
      const result2 = sharedValue3.set(0);
      committedMode(dockContentSwap[14])(wrapperOffset, { gestureActive: false, x: 0, y: 0 });
    };
    const onEndResult = onChangeResult.onEnd(fn5);
    fn6.__closure = {
      pullActive: sharedValue5,
      pullSnapped: sharedValue4,
      pullSnapOffset: sharedValue3,
      updateSharedValueIfChanged: updateSharedValueIfChangedDefault,
      wrapperOffset,
    };
    fn6.__workletHash = 1169438050828;
    fn6.__initData = __initData;
    return onEndResult.onFinalize(fn6);
  }, items2);
  const items4 = [dockPressed];
  const callback2 = dockHeight.useCallback(() => {
    const result = dockPressed.set(true);
  }, items3);
  const callback3 = dockHeight.useCallback(() => {
    const result = dockPressed.set(false);
  }, items4);
  const obj11 = {
    wrapperDimensions,
    dockHeight,
    pullSnapped: sharedValue4,
    DOCK_PULL_SNAP_GIVE: showControls,
    PULL_GESTURE_RESISTANCE: sharedValue,
    updateSharedValueIfChanged: committedMode(dockContentSwap[14]),
    wrapperOffset,
  };
  function ue() {
    return { opacity: dockPressProgress.get() };
  }
  ue.__closure = { dockPressProgress };
  ue.__workletHash = 1980493544431;
  ue.__initData = __initData5;
  const animatedStyle = bottom(dockContentSwap[10]).useAnimatedStyle(ue);
  const obj12 = bottom(dockContentSwap[10]);
  function de() {
    const diff = 1 - dockMinimizeProgress.get();
    if (isDockConnected.get()) {
      if (wrapperDimensions.get().drawerHeight > 0) {
        const tmp4 = closure_2_11(dockPressProgress.get());
        const obj = {
          height: dockHeight.get(),
          opacity: null,
          pointerEvents: null,
          paddingLeft: null,
          paddingRight: null,
        };
        value = isDockExpanding.get();
        obj.opacity = VoicePanelSheetMorph.getDockRowOpacity(diff, value, dockContentSwap.get());
        let str = "none";
        if (obj3.isDockRowTouchable(diff)) {
          str = "auto";
        }
        obj.pointerEvents = str;
        obj.paddingLeft = tmp4;
        obj.paddingRight = tmp4;
        return obj;
      }
    }
    return { opacity: 0, pointerEvents: "none" };
  }
  const obj13 = bottom(dockContentSwap[10]);
  de.__closure = {
    dockMinimizeProgress,
    wrapperDimensions,
    isDockConnected,
    getDockInset: mode,
    dockPressProgress,
    dockHeight,
    getDockRowOpacity: bottom(dockContentSwap[11]).getDockRowOpacity,
    isDockExpanding,
    dockContentSwap,
    isDockRowTouchable: bottom(dockContentSwap[11]).isDockRowTouchable,
  };
  de.__workletHash = 16405508542934;
  de.__initData = __initData6;
  const animatedStyle1 = obj13.useAnimatedStyle(de);
  const obj15 = { gesture: memo, children: null };
  const obj16 = { style: null, children: null };
  const items5 = [tmp.dock, animatedStyle1];
  obj16.style = items5;
  const obj17 = {
    style: null,
    accessibilityRole: "button",
    accessibilityLabel: null,
    onPressIn: null,
    onPressOut: null,
    onPress: null,
  };
  const items6 = [tmp.pressTarget, { bottom }];
  obj17.style = items6;
  const obj14 = {
    dockMinimizeProgress,
    wrapperDimensions,
    isDockConnected,
    getDockInset: mode,
    dockPressProgress,
    dockHeight,
    getDockRowOpacity: bottom(dockContentSwap[11]).getDockRowOpacity,
    isDockExpanding,
    dockContentSwap,
    isDockRowTouchable: bottom(dockContentSwap[11]).isDockRowTouchable,
  };
  const intl = bottom(dockContentSwap[18]).intl;
  obj17.accessibilityLabel = intl.string(bottom(dockContentSwap[18]).t.oN8bqe);
  obj17.onPressIn = callback2;
  obj17.onPressOut = callback3;
  obj17.onPress = callback1;
  const items7 = [sharedValue3(dockPressProgress, obj17), ,];
  const obj18 = { style: null, pointerEvents: "none" };
  const items8 = [tmp.dragHandle, animatedStyle];
  obj18.style = items8;
  items7[1] = sharedValue3(committedMode(dockContentSwap[17]), obj18);
  const obj19 = { style: tmp.row, pointerEvents: "box-none", children: null };
  const tmp18 = committedMode(dockContentSwap[17]);
  const items9 = [
    sharedValue3(dockPressed, {
      style: tmp.identity,
      pointerEvents: "none",
      children: sharedValue3(committedMode(dockContentSwap[19]), {}),
    }),
    sharedValue3(committedMode(dockContentSwap[20]), {}),
  ];
  obj19.children = items9;
  items7[2] = sharedValue4(dockPressed, obj19);
  obj16.children = items7;
  obj15.children = sharedValue4(tmp18, obj16);
  return sharedValue3(bottom(dockContentSwap[15]).GestureDetector, obj15);
});
