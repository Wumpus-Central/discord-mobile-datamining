// discord_app/modules/voice_panel/native/dock/VoicePanelDock.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _mod1655 from "../../../../../_runtime/metro/01655__.js";
import _mod1708 from "../../../../../_runtime/metro/01708__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05598_LegacyBaseButton.js";
import ExternalPipDefault from "../../../external_pip/ExternalPip.android.tsx";
import ContextMenu from "../../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import ContextMenuConstants from "../../../../design/components/ContextMenu/native/ContextMenuConstants.native.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import updateSharedValueIfChangedDefault from "../../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import VoicePanelSheetMorph from "VoicePanelSheetMorph.tsx";
import useMeasureDockGlowOffsetDefault from "useMeasureDockGlowOffset.tsx";
import useVoicePanelDockContextMenuItemsDefault from "useVoicePanelDockContextMenuItems.tsx";
import VoicePanelDockStatusDisplayDefault from "VoicePanelDockStatusDisplay.tsx";
import VoicePanelDockControlsDefault from "VoicePanelDockControls.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const require = globalThis.__r;
const _modDef1655 = _mod1655;

require = fn;
function DockPressTarget(arg0) {
  ({
    style: require,
    onPressIn: importDefault,
    onPressOut: dependencyMap,
    onPress: noop,
    onContextMenuOpen: closure_4,
  } = arg0);
  ({ channel, onExpand } = arg0);
  const contextMenuAnchor = closure_21();
  const tmp = useVoicePanelDockContextMenuItemsDefault(channel, onExpand);
  const animatedRef = _mod1655.useAnimatedRef();
  const animatedRef1 = _mod1655.useAnimatedRef();
  return closure_19(ContextMenu.ContextMenu, {
    items: tmp,
    triggerOnLongPress: true,
    disableGesture: true,
    buttonRef: animatedRef,
    returnRef: animatedRef1,
    children(onLongPress) {
      onLongPress = onLongPress.onLongPress;
      const obj = {
        ref: animatedRef1,
        style: onLongPress,
        accessibilityRole: "button",
        accessibilityLabel: null,
        accessibilityActions: null,
        onAccessibilityAction: null,
        onPressIn: null,
        onPressOut: null,
        onPress: null,
        delayLongPress: null,
        onLongPress: null,
        children: null,
      };
      ({ ref, accessibilityActions, onAccessibilityAction } = onLongPress);
      const intl = require("util").intl;
      obj.accessibilityLabel = intl.string(require("util").t.oN8bqe);
      obj.accessibilityActions = accessibilityActions;
      obj.onAccessibilityAction = onAccessibilityAction;
      obj.onPressIn = onPressIn;
      obj.onPressOut = onPressOut;
      obj.onPress = onPress;
      obj.delayLongPress = require("ContextMenuConstants").CONTEXT_MENU_LONG_PRESS_DURATION_MS;
      obj.onLongPress = function onLongPress(arg0) {
        const result = HapticUtils.triggerHapticFeedback(ContextMenuConstants.CONTEXT_MENU_OPEN_HAPTIC);
        closure_2_4();
        if (onLongPress != null) {
          tmp3(arg0);
        }
      };
      obj.children = closure_1_19(contextMenuAnchor, {
        ref,
        style: contextMenuAnchor.contextMenuAnchor,
        pointerEvents: "none",
        collapsable: false,
      });
      return closure_1_19(closure_1_4, obj);
    },
  });
}
function DockPressTargetGuard(arg0) {
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores };
    const merged = Object.assign(arg0);
    tmp2 = closure_19(DockPressTarget, obj2);
  }
  return tmp2;
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const VoicePanelModes = fn(11985).VoicePanelModes;
const VoicePanelDockConstants = fn(12009);
({
  DOCK_EXPAND_GESTURE_CANCEL_DISTANCE: closure_8,
  DOCK_PULL_SNAP_DISTANCE: closure_9,
  DOCK_PULL_SNAP_GIVE: closure_10,
  DOCK_TAP_MAX_MOVEMENT: closure_11,
  getDockInset: closure_12,
  DOCK_DRAG_HANDLE_TOP,
  DOCK_DRAG_HANDLE_WIDTH,
  DOCK_GAP,
  DOCK_PADDING_TOP,
  DOCK_ROW_HEIGHT,
} = VoicePanelDockConstants);
const GestureConstants = fn(12010);
({
  FLING_MIN_DISTANCE: map1,
  FLING_MIN_VELOCITY: closure_14,
  PULL_GESTURE_ACTIVATION_DISTANCE: closure_15,
  PULL_GESTURE_RESISTANCE: closure_16,
  PULL_GESTURE_SNAP_TIMING: closure_17,
  PULL_GESTURE_UNSNAP_TIMING: closure_18,
} = GestureConstants);
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(5306);
let obj = {
  dock: { position: "absolute", top: 0, left: 0, paddingTop: DOCK_PADDING_TOP, zIndex: 10 },
  pressTarget: { position: "absolute", top: 0, left: 0, right: 0 },
  contextMenuAnchor: { position: "absolute", top: 0, alignSelf: "center", width: 220, height: 0 },
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
let closure_21 = createStyles.createStyles(obj);
let closure_24 = {
  code: "(function VoicePanelDockTsx1(){let[keyboardHeight,enabled,getWindowDimensionsWorklet,measure,rowRef]=this.__closure;const keyboardOverlap=-keyboardHeight.get();if(!enabled||keyboardOverlap<=0){return{opacity:1,pointerEvents:'box-none'};}const keyboardTop=getWindowDimensionsWorklet({ignoreKeyboard:true}).height-keyboardOverlap;const row=measure(rowRef);const covered=row!=null&&row.height>0?(row.pageY+row.height-keyboardTop)/row.height:0;const opacity=1-Math.min(Math.max(covered,0),1);return{opacity:opacity,pointerEvents:opacity>0?'box-none':'none'};})",
};
let closure_25 = {
  code: "(function VoicePanelDockTsx2(){let[dockMinimizeProgress,SHEET_MORPH_PHYSICS]=this.__closure;const progress=dockMinimizeProgress.get();const restThreshold=SHEET_MORPH_PHYSICS.restDisplacementThreshold;return progress<=restThreshold||progress>=1-restThreshold;})",
};
let closure_26 = {
  code: "(function VoicePanelDockTsx3(settled,previous){let[mode,VoicePanelModes,scheduleOnRN,updateSourceTrackingView]=this.__closure;if(settled&&previous!==settled&&mode.get()!==VoicePanelModes.DISMISSED){scheduleOnRN(updateSourceTrackingView);}})",
};
let closure_27 = {
  code: "(function VoicePanelDockTsx4(){let[pullActive,pullDistance,pullSnapOffset]=this.__closure;return{active:pullActive.get(),distance:pullDistance.get(),snapOffset:pullSnapOffset.get()};})",
};
let closure_28 = {
  code: "(function VoicePanelDockTsx5({active:active,distance:distance,snapOffset:snapOffset}){let[wrapperDimensions,dockHeight,pullSnapped,DOCK_PULL_SNAP_GIVE,PULL_GESTURE_RESISTANCE,updateSharedValueIfChanged,wrapperOffset]=this.__closure;if(!active){return;}const travel=wrapperDimensions.get().drawerHeight-dockHeight.get();const pulled=(pullSnapped.get()?distance-DOCK_PULL_SNAP_GIVE:distance/PULL_GESTURE_RESISTANCE)+snapOffset;updateSharedValueIfChanged(wrapperOffset,{x:0,y:Math.min(Math.max(travel-pulled,0),travel)});})",
};
let closure_29 = {
  code: "(function VoicePanelDockTsx6(event){let[dockTouched,touchOrigin,touchMovement,contextMenuOpened]=this.__closure;dockTouched.set(true);touchOrigin.set({x:event.absoluteX,y:event.absoluteY});touchMovement.set(0);contextMenuOpened.set(false);})",
};
let closure_30 = {
  code: "(function VoicePanelDockTsx7(event,manager){let[contextMenuOpened,touchOrigin,touchMovement]=this.__closure;if(contextMenuOpened.get()){manager.fail();return;}const touch=event.changedTouches[0];if(touch==null){return;}const origin=touchOrigin.get();const moved=Math.max(Math.abs(touch.absoluteX-origin.x),Math.abs(touch.absoluteY-origin.y));if(moved>touchMovement.get()){touchMovement.set(moved);}})",
};
let closure_31 = {
  code: "(function VoicePanelDockTsx8(event){let[scheduleOnRN,showControls,pullSnapped,pullSnapOffset,pullDistance,pullActive,updateSharedValueIfChanged,wrapperOffset,wrapperDimensions,dockHeight]=this.__closure;scheduleOnRN(showControls);pullSnapped.set(false);pullSnapOffset.set(0);pullDistance.set(Math.max(-event.translationY,0));pullActive.set(true);updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:Math.max(wrapperDimensions.get().drawerHeight-dockHeight.get(),0)});})",
};
let closure_32 = {
  code: "(function VoicePanelDockTsx9(event){let[DOCK_PULL_SNAP_DISTANCE,pullSnapped,dockContentSwap,withTiming,DOCK_CONTENT_SWAP_TIMING,pullSnapOffset,DOCK_PULL_SNAP_GIVE,PULL_GESTURE_SNAP_TIMING,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,PULL_GESTURE_UNSNAP_TIMING,pullDistance]=this.__closure;const distance=Math.max(-event.translationY,0);const snapped=distance>=DOCK_PULL_SNAP_DISTANCE;if(snapped!==pullSnapped.get()){pullSnapped.set(snapped);dockContentSwap.set(withTiming(snapped?1:0,DOCK_CONTENT_SWAP_TIMING));if(snapped){pullSnapOffset.set(withTiming(DOCK_PULL_SNAP_GIVE,PULL_GESTURE_SNAP_TIMING));scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}else{pullSnapOffset.set(withTiming(0,PULL_GESTURE_UNSNAP_TIMING));scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.SOFT);}}pullDistance.set(distance);})",
};
let closure_33 = {
  code: "(function VoicePanelDockTsx10(event){let[contextMenuOpened,FLING_MIN_VELOCITY,FLING_MIN_DISTANCE,pullSnapped,scheduleOnRN,triggerHapticFeedback,HapticFeedbackTypes,committedMode,VoicePanelModes,handleExpand]=this.__closure;if(contextMenuOpened.get()){return;}const distance=Math.max(-event.translationY,0);const flungOpen=event.velocityY<-FLING_MIN_VELOCITY&&distance>FLING_MIN_DISTANCE;const flungClosed=event.velocityY>FLING_MIN_VELOCITY;const opens=flungOpen||!flungClosed&&pullSnapped.get();if(opens){if(!pullSnapped.get()){scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.IMPACT_MEDIUM);}committedMode.set(VoicePanelModes.PANEL);scheduleOnRN(handleExpand);}else if(pullSnapped.get()){scheduleOnRN(triggerHapticFeedback,HapticFeedbackTypes.SOFT);}})",
};
let closure_34 = {
  code: "(function VoicePanelDockTsx11(){let[dockTouched,pullActive,pullSnapped,pullSnapOffset,updateSharedValueIfChanged,wrapperOffset]=this.__closure;dockTouched.set(false);pullActive.set(false);pullSnapped.set(false);pullSnapOffset.set(0);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});})",
};
let closure_35 = {
  code: "(function VoicePanelDockTsx12(){let[dockPressProgress]=this.__closure;return{opacity:dockPressProgress.get()};})",
};
let closure_36 = {
  code: "(function VoicePanelDockTsx13(){let[dockMinimizeProgress,wrapperDimensions,isDockConnected,getDockInset,dockPressProgress,safeArea,dockRestWidth,isInSlot,dockHeight,getDockRowOpacity,isDockExpanding,dockContentSwap,isDockRowTouchable]=this.__closure;const progress=1-dockMinimizeProgress.get();const{drawerWidth:drawerWidth,drawerHeight:drawerHeight}=wrapperDimensions.get();if(!isDockConnected.get()||drawerHeight<=0){return{opacity:0,pointerEvents:'none'};}const inset=getDockInset(dockPressProgress.get());const{left:left,right:right}=safeArea.get();const restWidth=dockRestWidth.get();const isBesideChat=restWidth>0&&restWidth<drawerWidth;return{width:isInSlot?'100%':isBesideChat?restWidth:drawerWidth,height:dockHeight.get(),opacity:getDockRowOpacity(progress,isDockExpanding.get(),dockContentSwap.get()),pointerEvents:isDockRowTouchable(progress)?'auto':'none',paddingLeft:left+inset,paddingRight:(isBesideChat?0:right)+inset};})",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDock.tsx");

export default noop.memo(function VoicePanelDock(isInSlot) {
  let flag = isInSlot.isInSlot;
  if (flag === undefined) {
    flag = false;
  }
  noop = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  let sharedValue2;
  let sharedValue3;
  let sharedValue4;
  let sharedValue5;
  let sharedValue6;
  let tmp = closure_21();
  const bottom = useSafeAreaInsetsDefault().bottom;
  _require = bottom;
  const context = noop.useContext(VoicePanelStateContextDefault);
  const committedMode = context.committedMode;
  const dockContentSwap = context.dockContentSwap;
  dependencyMap = dockContentSwap;
  const dockHeight = context.dockHeight;
  noop = dockHeight;
  ({ dockPressProgress, dockPressed } = context);
  c4 = dockPressed;
  const dockTouched = context.dockTouched;
  c5 = dockTouched;
  const setMode = context.setMode;
  c6 = setMode;
  const showControls = context.showControls;
  c7 = showControls;
  ({ dockMinimizeProgress, wrapperDimensions } = context);
  c8 = wrapperDimensions;
  const wrapperOffset = context.wrapperOffset;
  c9 = wrapperOffset;
  ({ dockRestWidth, isDockConnected, isDockExpanding, safeArea, mode } = context);
  items = [closure_25, dockMinimizeProgress, require("VoicePanelSheetMorph").SHEET_MORPH_PHYSICS];
  _require = undefined;
  importDefault = undefined;
  [tmp6, tmp7, tmp8] = items;
  class VoicePanelDockTsx2 {
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
  let items1 = [tmp7, tmp8];
  VoicePanelDockTsx2.__closure = items1;
  VoicePanelDockTsx2.__workletHash = 9619339657143;
  VoicePanelDockTsx2.__initData = tmp6;
  let items2 = [
    closure_26,
    mode,
    c7,
    require("../../../../../_runtime/metro/01708__.js").scheduleOnRN,
    ExternalPipDefault.updateSourceTrackingView,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp9, tmp10, tmp11, tmp12, tmp13] = items2;
  class VoicePanelDockTsx3 {
    constructor(arg0, arg1) {
      tmp = isInSlot;
      if (isInSlot) {
        tmp2 = arg1;
        tmp = arg1 !== isInSlot;
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
  let items3 = [tmp10, tmp11, tmp12, tmp13];
  VoicePanelDockTsx3.__closure = items3;
  VoicePanelDockTsx3.__workletHash = 10995549690413;
  VoicePanelDockTsx3.__initData = tmp9;
  const animatedReaction = require("../../../../../_runtime/metro/01655__.js").useAnimatedReaction(
    VoicePanelDockTsx2,
    VoicePanelDockTsx3,
  );
  let items4 = [setMode, showControls];
  const callback = obj.useCallback(() => {
    _undefined8();
    _undefined7(VoicePanelModes.PANEL);
  }, items4);
  c10 = callback;
  const obj2 = require("../../../../../_runtime/metro/01655__.js");
  const sharedValue = require("../../../../../_runtime/metro/01655__.js").useSharedValue({ x: 0, y: 0 });
  c11 = sharedValue;
  const tmp5Result = require("../../../../../_runtime/metro/01655__.js");
  const sharedValue1 = require("../../../../../_runtime/metro/01655__.js").useSharedValue(0);
  c12 = sharedValue1;
  const tmp5Result14 = require("../../../../../_runtime/metro/01655__.js");
  sharedValue2 = require("../../../../../_runtime/metro/01655__.js").useSharedValue(false);
  let items5 = [callback, sharedValue1];
  const callback1 = obj.useCallback(() => {
    if (_undefined13.get() <= closure_2_11) {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      _undefined11();
    }
  }, items5);
  const tmp5Result15 = require("../../../../../_runtime/metro/01655__.js");
  sharedValue3 = require("../../../../../_runtime/metro/01655__.js").useSharedValue(0);
  const tmp5Result16 = require("../../../../../_runtime/metro/01655__.js");
  sharedValue4 = require("../../../../../_runtime/metro/01655__.js").useSharedValue(0);
  const tmp5Result17 = require("../../../../../_runtime/metro/01655__.js");
  sharedValue5 = require("../../../../../_runtime/metro/01655__.js").useSharedValue(false);
  const tmp5Result18 = require("../../../../../_runtime/metro/01655__.js");
  sharedValue6 = require("../../../../../_runtime/metro/01655__.js").useSharedValue(false);
  const tmp5Result19 = require("../../../../../_runtime/metro/01655__.js");
  let items6 = [closure_27, sharedValue6, sharedValue3, sharedValue4];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp24, tmp25, tmp26, tmp27] = items6;
  class VoicePanelDockTsx4 {
    constructor() {
      obj = { active: closure_0.get(), distance: closure_1.get(), snapOffset: closure_2.get() };
      return obj;
    }
  }
  let items7 = [tmp25, tmp26, tmp27];
  VoicePanelDockTsx4.__closure = items7;
  VoicePanelDockTsx4.__workletHash = 2673447581813;
  VoicePanelDockTsx4.__initData = tmp24;
  let items8 = [
    closure_28,
    wrapperDimensions,
    dockHeight,
    sharedValue5,
    c10,
    sharedValue5,
    updateSharedValueIfChangedDefault,
    wrapperOffset,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items8;
  class VoicePanelDockTsx5 {
    constructor(arg0) {
      ({ distance, snapOffset } = isInSlot);
      if (!isInSlot.active) {
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
  VoicePanelDockTsx5.__closure = items9;
  VoicePanelDockTsx5.__workletHash = 14506418013998;
  VoicePanelDockTsx5.__initData = tmp28;
  const animatedReaction1 = require("../../../../../_runtime/metro/01655__.js").useAnimatedReaction(
    VoicePanelDockTsx4,
    VoicePanelDockTsx5,
  );
  let items10 = [
    bottom,
    committedMode,
    sharedValue2,
    dockContentSwap,
    callback,
    showControls,
    sharedValue6,
    sharedValue3,
    sharedValue4,
    sharedValue5,
    sharedValue1,
    sharedValue,
    wrapperDimensions,
    wrapperOffset,
    dockHeight,
    dockTouched,
  ];
  let items11 = [dockPressed];
  const memo = obj.useMemo(() => {
    const Gesture = LegacyBaseButton.Gesture;
    const PanResult = Gesture.Pan();
    const obj = { bottom: -c0 };
    const hitSlopResult = Gesture.Pan().hitSlop({ bottom: -c0 });
    const activeOffsetYResult = Gesture.Pan().hitSlop({ bottom: -c0 }).activeOffsetY(-colors);
    items = [-React5, React5];
    const failOffsetYResult = Gesture.Pan().hitSlop({ bottom: -c0 }).activeOffsetY(-colors).failOffsetY(colors);
    const items1 = [closure_29, c5, c11, c12, sharedValue2];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp7, tmp8, tmp9, tmp10, tmp11] = items1;
    class VoicePanelDockTsx6 {
      constructor(arg0) {
        result = closure_0.set(true);
        point = { x: arg0.absoluteX, y: arg0.absoluteY };
        result1 = closure_1.set(point);
        result2 = closure_2.set(0);
        result3 = closure_3.set(false);
        return;
      }
    }
    const items2 = [tmp8, tmp9, tmp10, tmp11];
    VoicePanelDockTsx6.__closure = items2;
    VoicePanelDockTsx6.__workletHash = 5711190749884;
    VoicePanelDockTsx6.__initData = tmp7;
    const failOffsetXResult = Gesture.Pan()
      .hitSlop({ bottom: -c0 })
      .activeOffsetY(-colors)
      .failOffsetY(colors)
      .failOffsetX(items);
    const tmp3 = c5;
    const tmp4 = c11;
    let tmp5 = c12;
    const items3 = [closure_30, sharedValue2, tmp4, tmp5];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp12, tmp13, tmp14, tmp15] = items3;
    class VoicePanelDockTsx7 {
      constructor(arg0, arg1) {
        if (closure_0.get()) {
          tmp5 = arg1;
          failResult = arg1.fail();
        } else {
          tmp = arg0;
          first = arg0.changedTouches[0];
          tmp3 = null;
          if (null != first) {
            tmp7 = closure_1;
            point = closure_1.get();
            tmp8 = globalThis;
            _Math = Math;
            _Math2 = Math;
            _Math3 = Math;
            absolute = Math.abs(first.absoluteX - point.x);
            bound = Math.max(absolute, Math.abs(first.absoluteY - point.y));
            obj = closure_2;
            if (bound > closure_2.get()) {
              result = obj.set(bound);
            }
          }
        }
        return;
      }
    }
    const items4 = [tmp13, tmp14, tmp15];
    VoicePanelDockTsx7.__closure = items4;
    VoicePanelDockTsx7.__workletHash = 8011174432382;
    VoicePanelDockTsx7.__initData = tmp12;
    const onBeginResult = Gesture.Pan()
      .hitSlop({ bottom: -c0 })
      .activeOffsetY(-colors)
      .failOffsetY(colors)
      .failOffsetX(items)
      .onBegin(VoicePanelDockTsx6);
    const items5 = [
      closure_31,
      _mod1708.scheduleOnRN,
      c7,
      sharedValue5,
      sharedValue4,
      sharedValue3,
      sharedValue6,
      updateSharedValueIfChangedDefault,
      c9,
      c8,
      c3,
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
    [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items5;
    class VoicePanelDockTsx8 {
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
    const items6 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
    VoicePanelDockTsx8.__closure = items6;
    VoicePanelDockTsx8.__workletHash = 8994781233490;
    VoicePanelDockTsx8.__initData = tmp22;
    const onTouchesMoveResult = Gesture.Pan()
      .hitSlop({ bottom: -c0 })
      .activeOffsetY(-colors)
      .failOffsetY(colors)
      .failOffsetX(items)
      .onBegin(VoicePanelDockTsx6)
      .onTouchesMove(VoicePanelDockTsx7);
    const tmp21 = c9;
    const items7 = [
      closure_32,
      React6,
      sharedValue5,
      c2,
      timing_timing.withTiming,
      VoicePanelSheetMorph.DOCK_CONTENT_SWAP_TIMING,
      sharedValue4,
      refs,
      closure_2_17,
      _mod1708.scheduleOnRN,
      HapticUtils.triggerHapticFeedback,
      HapticUtils.HapticFeedbackTypes,
      collapsedCategories,
      sharedValue3,
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
    [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46] = items7;
    class VoicePanelDockTsx9 {
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
    const items8 = [tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46];
    VoicePanelDockTsx9.__closure = items8;
    VoicePanelDockTsx9.__workletHash = 9262954094286;
    VoicePanelDockTsx9.__initData = tmp33;
    const onStartResult = Gesture.Pan()
      .hitSlop({ bottom: -c0 })
      .activeOffsetY(-colors)
      .failOffsetY(colors)
      .failOffsetX(items)
      .onBegin(VoicePanelDockTsx6)
      .onTouchesMove(VoicePanelDockTsx7)
      .onStart(VoicePanelDockTsx8);
    const items9 = [
      closure_33,
      sharedValue2,
      gesture,
      state,
      sharedValue5,
      _mod1708.scheduleOnRN,
      HapticUtils.triggerHapticFeedback,
      HapticUtils.HapticFeedbackTypes,
      c1,
      VoicePanelModes,
      c10,
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
    [tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57] = items9;
    class VoicePanelDockTsx10 {
      constructor(arg0) {
        if (!closure_0.get()) {
          tmp = arg0;
          tmp2 = globalThis;
          _Math = Math;
          num = 0;
          tmp5 = arg0.velocityY < -closure_1;
          tmp4 = closure_1;
          if (tmp5) {
            tmp6 = closure_2;
            tmp5 = tmp3 > closure_2;
          }
          if (tmp5) {
            tmp14 = closure_3;
            if (!closure_3.get()) {
              tmp15 = closure_4;
              tmp16 = closure_5;
              tmp17 = closure_6;
              tmp18 = closure_4(closure_5, closure_6.IMPACT_MEDIUM);
            }
            tmp19 = closure_7;
            tmp20 = closure_8;
            result = closure_7.set(closure_8.PANEL);
            tmp22 = closure_4;
            tmp23 = closure_9;
            tmp24 = closure_4(closure_9);
          } else {
            if (!tmp7) {
              tmp8 = closure_3;
            }
            tmp9 = closure_3;
            if (closure_3.get()) {
              tmp10 = closure_4;
              tmp11 = closure_5;
              tmp12 = closure_6;
              tmp13 = closure_4(closure_5, closure_6.SOFT);
            }
          }
        }
        return;
      }
    }
    const items10 = [tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57];
    VoicePanelDockTsx10.__closure = items10;
    VoicePanelDockTsx10.__workletHash = 6770255881329;
    VoicePanelDockTsx10.__initData = tmp47;
    const onChangeResult = Gesture.Pan()
      .hitSlop({ bottom: -c0 })
      .activeOffsetY(-colors)
      .failOffsetY(colors)
      .failOffsetX(items)
      .onBegin(VoicePanelDockTsx6)
      .onTouchesMove(VoicePanelDockTsx7)
      .onStart(VoicePanelDockTsx8)
      .onChange(VoicePanelDockTsx9);
    const items11 = [
      closure_34,
      tmp3,
      sharedValue6,
      sharedValue5,
      sharedValue4,
      updateSharedValueIfChangedDefault,
      tmp21,
    ];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    [tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64] = items11;
    class VoicePanelDockTsx11 {
      constructor() {
        result = closure_0.set(false);
        result1 = closure_1.set(false);
        result2 = closure_2.set(false);
        result3 = closure_3.set(0);
        tmp5 = closure_4(closure_5, { gestureActive: false, x: 0, y: 0 });
        return;
      }
    }
    const items12 = [tmp59, tmp60, tmp61, tmp62, tmp63, tmp64];
    VoicePanelDockTsx11.__closure = items12;
    VoicePanelDockTsx11.__workletHash = 10943013957799;
    VoicePanelDockTsx11.__initData = tmp58;
    return Gesture.Pan()
      .hitSlop({ bottom: -c0 })
      .activeOffsetY(-colors)
      .failOffsetY(colors)
      .failOffsetX(items)
      .onBegin(VoicePanelDockTsx6)
      .onTouchesMove(VoicePanelDockTsx7)
      .onStart(VoicePanelDockTsx8)
      .onChange(VoicePanelDockTsx9)
      .onEnd(VoicePanelDockTsx10)
      .onFinalize(VoicePanelDockTsx11);
  }, items10);
  let items12 = [dockPressed];
  const callback2 = obj.useCallback(() => {
    const result = _undefined5.set(true);
  }, items11);
  const items13 = [sharedValue2, dockPressed];
  const callback3 = obj.useCallback(() => {
    const result = _undefined5.set(false);
  }, items12);
  const callback4 = obj.useCallback(() => {
    const result = sharedValue2.set(true);
    const result1 = _undefined5.set(false);
  }, items13);
  const tmp5Result20 = require("../../../../../_runtime/metro/01655__.js");
  const items14 = [closure_35, dockPressProgress];
  _require = undefined;
  [tmp41, tmp42] = items14;
  class VoicePanelDockTsx12 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items15 = [tmp42];
  VoicePanelDockTsx12.__closure = items15;
  VoicePanelDockTsx12.__workletHash = 16776422543157;
  VoicePanelDockTsx12.__initData = tmp41;
  const animatedStyle = require("../../../../../_runtime/metro/01655__.js").useAnimatedStyle(VoicePanelDockTsx12);
  const tmp5Result21 = require("../../../../../_runtime/metro/01655__.js");
  const items16 = [
    closure_36,
    dockMinimizeProgress,
    wrapperDimensions,
    isDockConnected,
    c12,
    dockPressProgress,
    safeArea,
    dockRestWidth,
    flag,
    dockHeight,
    require("VoicePanelSheetMorph").getDockRowOpacity,
    isDockExpanding,
    dockContentSwap,
    require("VoicePanelSheetMorph").isDockRowTouchable,
  ];
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
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  [tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57] = items16;
  class VoicePanelDockTsx13 {
    constructor() {
      diff = 1 - closure_0.get();
      value = closure_1.get();
      drawerWidth = value.drawerWidth;
      if (closure_2.get()) {
        num = 0;
        if (value.drawerHeight > 0) {
          tmp11 = closure_3;
          tmp12 = closure_4;
          tmp13 = closure_3(closure_4.get());
          tmp14 = closure_5;
          value1 = closure_5.get();
          tmp16 = closure_6;
          ({ left, right } = value1);
          value2 = closure_6.get();
          tmp3 = value2 > 0 && value2 < drawerWidth;
          tmp4 = closure_7;
          str = "100%";
          if (!closure_7) {
            if (tmp3) {
              drawerWidth = value2;
            }
            str = drawerWidth;
          }
          size = {
            width: null,
            height: null,
            opacity: null,
            pointerEvents: null,
            paddingLeft: null,
            paddingRight: null,
          };
          size.width = str;
          tmp5 = closure_8;
          size.height = closure_8.get();
          tmp6 = closure_9;
          tmp7 = closure_10;
          tmp9 = closure_11;
          value3 = closure_10.get();
          size.opacity = closure_9(diff, value3, closure_11.get());
          tmp10 = closure_12;
          str2 = "none";
          if (closure_12(diff)) {
            str2 = "auto";
          }
          size.pointerEvents = str2;
          size.paddingLeft = left + tmp13;
          num2 = 0;
          if (!tmp3) {
            num2 = right;
          }
          size.paddingRight = num2 + tmp13;
          return size;
        }
      }
      return { opacity: 0, pointerEvents: "none" };
    }
  }
  const items17 = [tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57];
  VoicePanelDockTsx13.__closure = items17;
  VoicePanelDockTsx13.__workletHash = 5034155994972;
  VoicePanelDockTsx13.__initData = tmp44;
  const animatedStyle1 = require("../../../../../_runtime/metro/01655__.js").useAnimatedStyle(VoicePanelDockTsx13);
  const tmp5Result22 = require("../../../../../_runtime/metro/01655__.js");
  ({ dockRef, handleDockLayout, measureGlowOffset } = useMeasureDockGlowOffsetDefault());
  const tmp59 = useMeasureDockGlowOffsetDefault();
  const animatedRef = require("../../../../../_runtime/metro/01655__.js").useAnimatedRef();
  const tmp5Result23 = require("../../../../../_runtime/metro/01655__.js");
  const tmp5Result24 = require("KeyboardChatScrollView");
  const tmp5Result25 = require("PlatformUtils");
  const isIOSResult = require("PlatformUtils").isIOS();
  const items18 = [
    closure_24,
    tmp5Result24.useReanimatedKeyboardAnimation().height,
    isIOSResult,
    require("useWindowDimensionsSharedValue").getWindowDimensionsWorklet,
    require("../../../../../_runtime/metro/01655__.js").measure,
    animatedRef,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp62, tmp63, tmp64, tmp65, tmp66, tmp67] = items18;
  class VoicePanelDockTsx1 {
    constructor() {
      tmp = -closure_0.get();
      if (closure_1) {
        num = 0;
        if (tmp > 0) {
          tmp4 = closure_2;
          tmp6 = closure_3;
          tmp7 = closure_4;
          diff = closure_2({ ignoreKeyboard: true }).height - tmp;
          tmp8 = closure_3(closure_4);
          tmp9 = null;
          num2 = 0;
          if (null != tmp8) {
            num2 = 0;
            if (tmp8.height > 0) {
              num2 = (tmp8.pageY + tmp8.height - diff) / tmp8.height;
            }
          }
          tmp2 = globalThis;
          _Math = Math;
          _Math2 = Math;
          num3 = 1;
          diff1 = 1 - Math.min(Math.max(num2, 0), 1);
          obj = { opacity: null, pointerEvents: null };
          obj.opacity = diff1;
          str = "none";
          if (0 < diff1) {
            str = "box-none";
          }
          obj.pointerEvents = str;
          return obj;
        }
      }
      return { opacity: 1, pointerEvents: "box-none" };
    }
  }
  const items19 = [tmp63, tmp64, tmp65, tmp66, tmp67];
  VoicePanelDockTsx1.__closure = items19;
  VoicePanelDockTsx1.__workletHash = 17112345546547;
  VoicePanelDockTsx1.__initData = tmp62;
  const animatedStyle2 = require("../../../../../_runtime/metro/01655__.js").useAnimatedStyle(VoicePanelDockTsx1);
  const obj3 = { gesture: memo, children: null };
  const obj4 = { ref: dockRef, style: null, onLayout: handleDockLayout, children: null };
  const items20 = [tmp.dock, animatedStyle1];
  obj4.style = items20;
  const obj5 = {
    style: null,
    onPressIn: callback2,
    onPressOut: callback3,
    onPress: callback1,
    onExpand: callback,
    onContextMenuOpen: callback4,
  };
  const items21 = [tmp.pressTarget, { bottom }];
  obj5.style = items21;
  const items22 = [closure_19(DockPressTargetGuard, obj5), ,];
  const obj6 = { style: null, pointerEvents: "none" };
  const items23 = [tmp.dragHandle, animatedStyle];
  obj6.style = items23;
  items22[1] = closure_19(_modDef1655.View, obj6);
  const obj7 = { ref: animatedRef, style: null, children: null };
  const items24 = [tmp.row, animatedStyle2];
  obj7.style = items24;
  const tmp5Result26 = require("../../../../../_runtime/metro/01655__.js");
  const items25 = [
    closure_19(c5, {
      style: tmp.identity,
      pointerEvents: "none",
      children: closure_19(VoicePanelDockStatusDisplayDefault, {}),
    }),
    closure_19(VoicePanelDockControlsDefault, { measureGlowOffset }),
  ];
  obj7.children = items25;
  items22[2] = closure_20(_modDef1655.View, obj7);
  obj4.children = items22;
  obj3.children = closure_20(_modDef1655.View, obj4);
  return closure_19(require("LegacyBaseButton").GestureDetector, obj3);
});
