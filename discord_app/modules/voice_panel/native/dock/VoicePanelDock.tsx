// === Module 19508: VoicePanelDock ===

// Module 19508 (VoicePanelDock)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5400 */;
import HapticUtils from "HapticUtils" /* 5406 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5450 */;
import ExternalPipDefault from "ExternalPip" /* 6030 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11380 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11385 */;
import VoicePanelSheetMorph from "VoicePanelSheetMorph" /* 11407 */;
import useVoicePanelDockStatusDefault from "useVoicePanelDockStatus" /* 19509 */;
import VoicePanelDockStatusDisplayDefault from "VoicePanelDockStatusDisplay" /* 19511 */;
import VoicePanelDockControlsDefault from "VoicePanelDockControls" /* 19515 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const VoicePanelModes = fn(11381).VoicePanelModes;
const VoicePanelDockConstants = fn(11399);
({ DOCK_EXPAND_GESTURE_CANCEL_DISTANCE: metroImportDefault, DOCK_PULL_SNAP_DISTANCE: closure_8, DOCK_PULL_SNAP_GIVE: closure_9, DOCK_TAP_MAX_MOVEMENT: closure_10, getDockInset: closure_11, DOCK_DRAG_HANDLE_TOP, DOCK_DRAG_HANDLE_WIDTH, DOCK_GAP, DOCK_PADDING_TOP, DOCK_ROW_HEIGHT } = VoicePanelDockConstants);
const GestureConstants = fn(11400);
({ FLING_MIN_DISTANCE: closure_12, FLING_MIN_VELOCITY: map1, PULL_GESTURE_ACTIVATION_DISTANCE: closure_14, PULL_GESTURE_RESISTANCE: closure_15, PULL_GESTURE_SNAP_TIMING: closure_16, PULL_GESTURE_UNSNAP_TIMING: closure_17 } = GestureConstants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const createStyles = fn(5170);
let obj = { dock: { position: "absolute", top: 0, left: 0, right: 0, paddingTop: DOCK_PADDING_TOP, zIndex: 10 }, pressTarget: { position: "absolute", top: 0, left: 0, right: 0 }, dragHandle: null, row: null, identity: null };
let size = { position: "absolute", top: DOCK_DRAG_HANDLE_TOP, alignSelf: "center", width: DOCK_DRAG_HANDLE_WIDTH, height: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.dragHandle = size;
obj.row = { flexDirection: "row", alignItems: "center", gap: DOCK_GAP, height: DOCK_ROW_HEIGHT };
obj.identity = { flexShrink: 1, flexGrow: 1, justifyContent: "center" };
let closure_20 = createStyles.createStyles(obj);
let closure_21 = { code: "(function VoicePanelDockTsx1(){let[dockMinimizeProgress,SHEET_MORPH_PHYSICS]=this.__closure;const progress=dockMinimizeProgress.get();const restThreshold=SHEET_MORPH_PHYSICS.restDisplacementThreshold;return progress<=restThreshold||progress>=1-restThreshold;})" };
let closure_22 = { code: "(function VoicePanelDockTsx2(settled,previous){let[mode,VoicePanelModes,scheduleOnRN,updateSourceTrackingView]=this.__closure;if(settled&&previous!==settled&&mode.get()!==VoicePanelModes.DISMISSED){scheduleOnRN(updateSourceTrackingView);}})" };
let closure_23 = { code: "(function VoicePanelDockTsx3(){let[pullActive,pullDistance,pullSnapOffset]=this.__closure;return{active:pullActive.get(),distance:pullDistance.get(),snapOffset:pullSnapOffset.get()};})" };
let closure_24 = { code: "(function VoicePanelDockTsx4({active:active,distance:distance,snapOffset:snapOffset}){let[wrapperDimensions,dockHeight,pullSnapped,DOCK_PULL_SNAP_GIVE,PULL_GESTURE_RESISTANCE,updateSharedValueIfChanged,wrapperOffset]=this.__closure;if(!active){return;}const travel=wrapperDimensions.get().drawerHeight-dockHeight.get();const pulled=(pullSnapped.get()?distance-DOCK_PULL_SNAP_GIVE:distance/PULL_GESTURE_RESISTANCE)+snapOffset;updateSharedValueIfChanged(wrapperOffset,{x:0,y:Math.min(Math.max(travel-pulled,0),travel)});})" };
let closure_25 = { code: "(function VoicePanelDockTsx5(event){let[touchOrigin,touchMovement]=this.__closure;touchOrigin.set({x:event.absoluteX,y:event.absoluteY});touchMovement.set(0);})" };
let closure_26 = { code: "(function VoicePanelDockTsx6(event){let[touchOrigin,touchMovement]=this.__closure;const touch=event.changedTouches[0];if(touch==null){return;}const origin=touchOrigin.get();const moved=Math.max(Math.abs(touch.absoluteX-origin.x),Math.abs(touch.absoluteY-origin.y));if(moved>touchMovement.get()){touchMovement.set(moved);}})" };
let closure_27 = { code: "(function VoicePanelDockTsx7(event){let[scheduleOnRN,showControls,pullSnapped,pullSnapOffset,pullDistance,pullActive,updateSharedValueIfChanged,wrapperOffset,wrapperDimensions,dockHeight]=this.__closure;scheduleOnRN(showControls);pullSnapped.set(false);pullSnapOffset.set(0);pullDistance.set(Math.max(-event.translationY,0));pullActive.set(true);updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:Math.max(wrapperDimensions.get().drawerHeight-dockHeight.get(),0)});})" };
let closure_28 = { code: "(function VoicePanelDockTsx8(event){let[DOCK_PULL_SNAP_DISTANCE,pullSnapped,dockContentSwap,withTiming,DOCK_CONTENT_SWAP_TIMING,pullSnapOffset,DOCK_PULL_SNAP_GIVE,PULL_GESTURE_SNAP_TIMING,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,PULL_GESTURE_UNSNAP_TIMING,pullDistance]=this.__closure;const distance=Math.max(-event.translationY,0);const snapped=distance>=DOCK_PULL_SNAP_DISTANCE;if(snapped!==pullSnapped.get()){pullSnapped.set(snapped);dockContentSwap.set(withTiming(snapped?1:0,DOCK_CONTENT_SWAP_TIMING));if(snapped){pullSnapOffset.set(withTiming(DOCK_PULL_SNAP_GIVE,PULL_GESTURE_SNAP_TIMING));scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}else{pullSnapOffset.set(withTiming(0,PULL_GESTURE_UNSNAP_TIMING));scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.SOFT);}}pullDistance.set(distance);})" };
let closure_29 = { code: "(function VoicePanelDockTsx9(event){let[FLING_MIN_VELOCITY,FLING_MIN_DISTANCE,pullSnapped,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,committedMode,VoicePanelModes,handleExpand]=this.__closure;const distance=Math.max(-event.translationY,0);const flungOpen=event.velocityY<-FLING_MIN_VELOCITY&&distance>FLING_MIN_DISTANCE;const flungClosed=event.velocityY>FLING_MIN_VELOCITY;const opens=flungOpen||!flungClosed&&pullSnapped.get();if(opens){if(!pullSnapped.get()){scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}committedMode.set(VoicePanelModes.PANEL);scheduleOnRN(handleExpand);}else if(pullSnapped.get()){scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.SOFT);}})" };
let closure_30 = { code: "(function VoicePanelDockTsx10(){let[pullActive,pullSnapped,pullSnapOffset,updateSharedValueIfChanged,wrapperOffset]=this.__closure;pullActive.set(false);pullSnapped.set(false);pullSnapOffset.set(0);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});})" };
let closure_31 = { code: "(function VoicePanelDockTsx11(){let[dockPressProgress]=this.__closure;return{opacity:dockPressProgress.get()};})" };
let closure_32 = { code: "(function VoicePanelDockTsx12(){let[dockMinimizeProgress,wrapperDimensions,isDockConnected,getDockInset,dockPressProgress,dockHeight,getDockRowOpacity,isDockExpanding,dockContentSwap,isDockRowTouchable]=this.__closure;const progress=1-dockMinimizeProgress.get();const{drawerHeight:drawerHeight}=wrapperDimensions.get();if(!isDockConnected.get()||drawerHeight<=0){return{opacity:0,pointerEvents:'none'};}const inset=getDockInset(dockPressProgress.get());return{height:dockHeight.get(),opacity:getDockRowOpacity(progress,isDockExpanding.get(),dockContentSwap.get()),pointerEvents:isDockRowTouchable(progress)?'auto':'none',paddingLeft:inset,paddingRight:inset};})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDock.tsx");

export default noop.memo(function VoicePanelDock() {
  let tmp = closure_20();
  const bottom = useSafeAreaInsetsDefault().bottom;
  _require = bottom;
  useVoicePanelDockStatusDefault();
  const context = noop.useContext(VoicePanelStateContextDefault);
  const committedMode = context.committedMode;
  const dockContentSwap = context.dockContentSwap;
  dependencyMap = dockContentSwap;
  const dockHeight = context.dockHeight;
  noop = dockHeight;
  ({ dockPressProgress, dockPressed } = context);
  c4 = dockPressed;
  const setMode = context.setMode;
  c5 = setMode;
  const showControls = context.showControls;
  c6 = showControls;
  ({ dockMinimizeProgress, wrapperDimensions } = context);
  c7 = wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  c8 = wrapperOffset;
  ({ isDockConnected, isDockExpanding, mode } = context);
  items = [closure_21, dockMinimizeProgress, require("VoicePanelSheetMorph").SHEET_MORPH_PHYSICS];
  _require = undefined;
  importDefault = undefined;
  [tmp7, tmp8, tmp9] = items;
  class VoicePanelDockTsx1 {
    constructor() {
      value = closure_0.get();
      restDisplacementThreshold = closure_1.restDisplacementThreshold;
      tmp2 = value <= restDisplacementThreshold;
      if (!tmp2) {
        num = 1;
        tmp2 = value >= 1 - restDisplacementThreshold;
      }
      return tmp2;
    }
  }
  let items1 = [tmp8, tmp9];
  VoicePanelDockTsx1.__closure = items1;
  VoicePanelDockTsx1.__workletHash = 6869498202708;
  VoicePanelDockTsx1.__initData = tmp7;
  let items2 = [closure_22, mode, c6, require("module_1705").scheduleOnRN, ExternalPipDefault.updateSourceTrackingView];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
  class VoicePanelDockTsx2 {
    constructor(arg0, arg1) {
      tmp = arg0;
      if (arg0) {
        tmp2 = arg1;
        tmp = arg1 !== arg0;
      }
      if (tmp) {
        tmp3 = closure_0;
        tmp4 = closure_1;
        tmp = closure_0.get() !== closure_1.DISMISSED;
      }
      if (tmp) {
        tmp5 = closure_2;
        tmp6 = closure_3;
        tmp7 = closure_2(closure_3);
      }
      return;
    }
  }
  let items3 = [tmp11, tmp12, tmp13, tmp14];
  VoicePanelDockTsx2.__closure = items3;
  VoicePanelDockTsx2.__workletHash = 10170503269900;
  VoicePanelDockTsx2.__initData = tmp10;
  const animatedReaction = require("module_1652").useAnimatedReaction(VoicePanelDockTsx1, VoicePanelDockTsx2);
  let items4 = [setMode, showControls];
  const callback = obj.useCallback(() => {
    _undefined7();
    _undefined6(VoicePanelModes.PANEL);
  }, items4);
  c9 = callback;
  const obj2 = require("module_1652");
  const sharedValue = require("module_1652").useSharedValue({ x: 0, y: 0 });
  const tmp6Result = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(0);
  let items5 = [callback, sharedValue1];
  const callback1 = obj.useCallback(() => {
    if (sharedValue1.get() <= closure_2_10) {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      _undefined10();
    }
  }, items5);
  const tmp6Result9 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(0);
  const tmp6Result10 = require("module_1652");
  const sharedValue3 = require("module_1652").useSharedValue(0);
  const tmp6Result11 = require("module_1652");
  const sharedValue4 = require("module_1652").useSharedValue(false);
  const tmp6Result12 = require("module_1652");
  const sharedValue5 = require("module_1652").useSharedValue(false);
  const tmp6Result13 = require("module_1652");
  let items6 = [closure_23, sharedValue5, sharedValue2, sharedValue3];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp24, tmp25, tmp26, tmp27] = items6;
  class VoicePanelDockTsx3 {
    constructor() {
      obj = { active: closure_0.get(), distance: closure_1.get(), snapOffset: closure_2.get() };
      return obj;
    }
  }
  let items7 = [tmp25, tmp26, tmp27];
  VoicePanelDockTsx3.__closure = items7;
  VoicePanelDockTsx3.__workletHash = 16958594466066;
  VoicePanelDockTsx3.__initData = tmp24;
  let items8 = [closure_24, wrapperDimensions, dockHeight, sharedValue4, c9, sharedValue5, updateSharedValueIfChangedDefault, wrapperOffset];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items8;
  class VoicePanelDockTsx4 {
    constructor(arg0) {
      ({ distance, snapOffset } = arg0);
      if (!arg0.active) {
        return;
      } else {
        tmp = closure_0;
        tmp2 = closure_1;
        diff = closure_0.get().drawerHeight - closure_1.get();
        tmp4 = closure_2;
        if (closure_2.get()) {
          tmp7 = closure_3;
          diff1 = distance - closure_3;
        } else {
          tmp5 = closure_4;
          diff1 = distance / closure_4;
        }
        sum = diff1 + snapOffset;
        snapOffset = closure_5;
        tmp9 = closure_6;
        point = { x: 0, y: null };
        tmp10 = globalThis;
        _Math = Math;
        distance = Math.min;
        _Math2 = Math;
        num = 0;
        point.y = distance(Math.max(diff - sum, 0), diff);
        tmp11 = closure_5(closure_6, point);
      }
      return;
    }
  }
  let items9 = [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
  VoicePanelDockTsx4.__closure = items9;
  VoicePanelDockTsx4.__workletHash = 9971386700367;
  VoicePanelDockTsx4.__initData = tmp28;
  const animatedReaction1 = require("module_1652").useAnimatedReaction(VoicePanelDockTsx3, VoicePanelDockTsx4);
  let items10 = [bottom, committedMode, dockContentSwap, callback, showControls, sharedValue5, sharedValue2, sharedValue3, sharedValue4, sharedValue1, sharedValue, wrapperDimensions, wrapperOffset, dockHeight];
  let items11 = [dockPressed];
  const memo = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const obj = { bottom: -c0 };
    const hitSlopResult = Gesture.Pan().hitSlop({ bottom: -c0 });
    const activeOffsetYResult = Gesture.Pan().hitSlop({ bottom: -c0 }).activeOffsetY(-gesture);
    items = [-metroImportDefault, metroImportDefault];
    const failOffsetYResult = Gesture.Pan().hitSlop({ bottom: -c0 }).activeOffsetY(-gesture).failOffsetY(gesture);
    const items1 = [closure_25, sharedValue, sharedValue1];
    c0 = undefined;
    c1 = undefined;
    [tmp5, tmp6, tmp7] = items1;
    class VoicePanelDockTsx5 {
      constructor(arg0) {
        point = { x: arg0.absoluteX, y: arg0.absoluteY };
        result = closure_0.set(point);
        result1 = closure_1.set(0);
        return;
      }
    }
    const items2 = [tmp6, tmp7];
    VoicePanelDockTsx5.__closure = items2;
    VoicePanelDockTsx5.__workletHash = 14355401853492;
    VoicePanelDockTsx5.__initData = tmp5;
    const failOffsetXResult = Gesture.Pan().hitSlop({ bottom: -c0 }).activeOffsetY(-gesture).failOffsetY(gesture).failOffsetX(items);
    const items3 = [closure_26, sharedValue, sharedValue1];
    c0 = undefined;
    c1 = undefined;
    [tmp8, tmp9, tmp10] = items3;
    class VoicePanelDockTsx6 {
      constructor(arg0) {
        first = arg0.changedTouches[0];
        if (null != first) {
          tmp3 = closure_0;
          point = closure_0.get();
          tmp4 = globalThis;
          _Math = Math;
          _Math2 = Math;
          _Math3 = Math;
          absolute = Math.abs(first.absoluteX - point.x);
          bound = Math.max(absolute, Math.abs(first.absoluteY - point.y));
          obj = closure_1;
          if (bound > closure_1.get()) {
            result = obj.set(bound);
          }
        }
        return;
      }
    }
    const items4 = [tmp9, tmp10];
    VoicePanelDockTsx6.__closure = items4;
    VoicePanelDockTsx6.__workletHash = 4167278660905;
    VoicePanelDockTsx6.__initData = tmp8;
    const onBeginResult = Gesture.Pan().hitSlop({ bottom: -c0 }).activeOffsetY(-gesture).failOffsetY(gesture).failOffsetX(items).onBegin(VoicePanelDockTsx5);
    const items5 = [closure_27, _mod1705.scheduleOnRN, c6, sharedValue4, sharedValue3, sharedValue2, sharedValue5, updateSharedValueIfChangedDefault, c8, c7, c3];
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
    [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items5;
    class VoicePanelDockTsx7 {
      constructor(arg0) {
        tmp = closure_0(closure_1);
        result = closure_2.set(false);
        result1 = closure_3.set(0);
        result2 = closure_4.set(Math.max(-arg0.translationY, 0));
        result3 = closure_5.set(true);
        point = { gestureActive: true, x: 0, y: Math.max(closure_8.get().drawerHeight - closure_9.get(), 0) };
        tmp6 = closure_6(closure_7, point);
        return;
      }
    }
    const items6 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
    VoicePanelDockTsx7.__closure = items6;
    VoicePanelDockTsx7.__workletHash = 14444713169085;
    VoicePanelDockTsx7.__initData = tmp17;
    const onTouchesMoveResult = Gesture.Pan().hitSlop({ bottom: -c0 }).activeOffsetY(-gesture).failOffsetY(gesture).failOffsetX(items).onBegin(VoicePanelDockTsx5).onTouchesMove(VoicePanelDockTsx6);
    const tmp16 = c8;
    const items7 = [closure_28, React5, sharedValue4, c2, timing_timing.withTiming, VoicePanelSheetMorph.DOCK_CONTENT_SWAP_TIMING, sharedValue3, React6, value2, _mod1705.scheduleOnRN, HapticUtils.triggerHapticFeedback, HapticUtils.HapticFeedbackTypes, closure_2_17, sharedValue2];
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
    [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41] = items7;
    class VoicePanelDockTsx8 {
      constructor(arg0) {
        bound = Math.max(-arg0.translationY, 0);
        tmp2 = bound >= closure_0;
        obj = closure_1;
        if (tmp2 !== closure_1.get()) {
          result = obj.set(tmp2);
          tmp22 = closure_3;
          num = 0;
          tmp21 = closure_2;
          if (tmp2) {
            num = 1;
          }
          tmp3 = closure_4;
          result1 = closure_2.set(tmp22(num, closure_4));
          tmp5 = closure_5;
          set = closure_5.set;
          if (tmp2) {
            tmp12 = closure_6;
            tmp13 = closure_7;
            result2 = set(tmp22(closure_6, closure_7));
            tmp15 = closure_8;
            tmp16 = closure_9;
            tmp17 = closure_10;
            tmp18 = closure_8(closure_9, closure_10.IMPACT_MEDIUM);
          } else {
            tmp6 = closure_11;
            result3 = set(tmp22(0, closure_11));
            tmp8 = closure_8;
            tmp9 = closure_9;
            tmp10 = closure_10;
            tmp11 = closure_8(closure_9, closure_10.SOFT);
          }
        }
        result4 = closure_12.set(bound);
        return;
      }
    }
    const items8 = [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41];
    VoicePanelDockTsx8.__closure = items8;
    VoicePanelDockTsx8.__workletHash = 7181275704047;
    VoicePanelDockTsx8.__initData = tmp28;
    const onStartResult = Gesture.Pan().hitSlop({ bottom: -c0 }).activeOffsetY(-gesture).failOffsetY(gesture).failOffsetX(items).onBegin(VoicePanelDockTsx5).onTouchesMove(VoicePanelDockTsx6).onStart(VoicePanelDockTsx7);
    const items9 = [closure_29, state, application_id, sharedValue4, _mod1705.scheduleOnRN, HapticUtils.triggerHapticFeedback, HapticUtils.HapticFeedbackTypes, c1, VoicePanelModes, c9];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    [tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51] = items9;
    class VoicePanelDockTsx9 {
      constructor(arg0) {
        tmp2 = arg0.velocityY < -closure_0;
        if (tmp2) {
          tmp3 = closure_1;
          tmp2 = tmp > closure_1;
        }
        if (tmp2) {
          tmp11 = closure_2;
          if (!closure_2.get()) {
            tmp12 = closure_3;
            tmp13 = closure_4;
            tmp14 = closure_5;
            tmp15 = closure_3(closure_4, closure_5.IMPACT_MEDIUM);
          }
          tmp16 = closure_6;
          tmp17 = closure_7;
          result = closure_6.set(closure_7.PANEL);
          tmp19 = closure_3;
          tmp20 = closure_8;
          tmp21 = closure_3(closure_8);
        } else {
          if (!tmp4) {
            tmp5 = closure_2;
          }
          tmp6 = closure_2;
          if (closure_2.get()) {
            tmp7 = closure_3;
            tmp8 = closure_4;
            tmp9 = closure_5;
            tmp10 = closure_3(closure_4, closure_5.SOFT);
          }
        }
        return;
      }
    }
    const items10 = [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51];
    VoicePanelDockTsx9.__closure = items10;
    VoicePanelDockTsx9.__workletHash = 16022563199909;
    VoicePanelDockTsx9.__initData = tmp42;
    const onChangeResult = Gesture.Pan().hitSlop({ bottom: -c0 }).activeOffsetY(-gesture).failOffsetY(gesture).failOffsetX(items).onBegin(VoicePanelDockTsx5).onTouchesMove(VoicePanelDockTsx6).onStart(VoicePanelDockTsx7).onChange(VoicePanelDockTsx8);
    const items11 = [closure_30, sharedValue5, sharedValue4, sharedValue3, updateSharedValueIfChangedDefault, tmp16];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp52, tmp53, tmp54, tmp55, tmp56, tmp57] = items11;
    class VoicePanelDockTsx10 {
      constructor() {
        result = closure_0.set(false);
        result1 = closure_1.set(false);
        result2 = closure_2.set(0);
        tmp4 = closure_3(closure_4, { gestureActive: false, x: 0, y: 0 });
        return;
      }
    }
    const items12 = [tmp53, tmp54, tmp55, tmp56, tmp57];
    VoicePanelDockTsx10.__closure = items12;
    VoicePanelDockTsx10.__workletHash = 5513463782497;
    VoicePanelDockTsx10.__initData = tmp52;
    return Gesture.Pan().hitSlop({ bottom: -c0 }).activeOffsetY(-gesture).failOffsetY(gesture).failOffsetX(items).onBegin(VoicePanelDockTsx5).onTouchesMove(VoicePanelDockTsx6).onStart(VoicePanelDockTsx7).onChange(VoicePanelDockTsx8).onEnd(VoicePanelDockTsx9).onFinalize(VoicePanelDockTsx10);
  }, items10);
  let items12 = [dockPressed];
  const callback2 = obj.useCallback(() => {
    const result = _undefined5.set(true);
  }, items11);
  const callback3 = obj.useCallback(() => {
    const result = _undefined5.set(false);
  }, items12);
  const tmp6Result14 = require("module_1652");
  const items13 = [closure_31, dockPressProgress];
  _require = undefined;
  [tmp40, tmp41] = items13;
  class VoicePanelDockTsx11 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items14 = [tmp41];
  VoicePanelDockTsx11.__closure = items14;
  VoicePanelDockTsx11.__workletHash = 8563034543670;
  VoicePanelDockTsx11.__initData = tmp40;
  const animatedStyle = require("module_1652").useAnimatedStyle(VoicePanelDockTsx11);
  const tmp6Result15 = require("module_1652");
  const items15 = [closure_32, dockMinimizeProgress, wrapperDimensions, isDockConnected, sharedValue1, dockPressProgress, dockHeight, require("VoicePanelSheetMorph").getDockRowOpacity, isDockExpanding, dockContentSwap, require("VoicePanelSheetMorph").isDockRowTouchable];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53] = items15;
  class VoicePanelDockTsx12 {
    constructor() {
      diff = 1 - closure_0.get();
      if (closure_2.get()) {
        num = 0;
        if (closure_1.get().drawerHeight > 0) {
          tmp2 = closure_3;
          tmp3 = closure_4;
          tmp4 = closure_3(closure_4.get());
          obj = { height: null, opacity: null, pointerEvents: null, paddingLeft: null, paddingRight: null };
          tmp5 = closure_5;
          obj.height = closure_5.get();
          tmp6 = closure_6;
          tmp7 = closure_7;
          tmp9 = closure_8;
          value = closure_7.get();
          obj.opacity = closure_6(diff, value, closure_8.get());
          tmp10 = closure_9;
          str = "none";
          if (closure_9(diff)) {
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
  }
  const items16 = [tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53];
  VoicePanelDockTsx12.__closure = items16;
  VoicePanelDockTsx12.__workletHash = 463857718991;
  VoicePanelDockTsx12.__initData = tmp43;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(VoicePanelDockTsx12);
  const obj3 = { gesture: memo, children: null };
  const obj4 = { style: null, children: null };
  const items17 = [tmp.dock, animatedStyle1];
  obj4.style = items17;
  const obj5 = { style: null, accessibilityRole: "button", accessibilityLabel: null, onPressIn: null, onPressOut: null, onPress: null };
  const items18 = [tmp.pressTarget, { bottom }];
  obj5.style = items18;
  const intl = tmp6(1113).intl;
  obj5.accessibilityLabel = intl.string(require("util").t.oN8bqe);
  obj5.onPressIn = callback2;
  obj5.onPressOut = callback3;
  obj5.onPress = callback1;
  const items19 = [closure_18(c4, obj5), , ];
  const obj6 = { style: null, pointerEvents: "none" };
  const items20 = [tmp.dragHandle, animatedStyle];
  obj6.style = items20;
  items19[1] = closure_18(_modDef1652.View, obj6);
  const obj7 = { style: tmp.row, pointerEvents: "box-none", children: null };
  const tmp6Result16 = require("module_1652");
  const items21 = [closure_18(c5, { style: tmp.identity, pointerEvents: "none", children: closure_18(VoicePanelDockStatusDisplayDefault, {}) }), closure_18(VoicePanelDockControlsDefault, {})];
  obj7.children = items21;
  items19[2] = closure_19(c5, obj7);
  obj4.children = items19;
  obj3.children = closure_19(_modDef1652.View, obj4);
  return closure_18(require("LegacyBaseButton").GestureDetector, obj3);
});