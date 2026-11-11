// discord_app/modules/voice_panel/native/dock/VoicePanelDock.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/05535_LegacyBaseButton.js";
import ExternalPipDefault from "../../../external_pip/ExternalPip.android.tsx";
import ContextMenu from "../../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import ContextMenuConstants from "../../../../design/components/ContextMenu/native/ContextMenuConstants.native.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import updateSharedValueIfChangedDefault from "../../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import VoicePanelSheetMorph from "VoicePanelSheetMorph.tsx";
import useVoicePanelDockContextMenuItemsDefault from "useVoicePanelDockContextMenuItems.tsx";
import useVoicePanelDockStatusDefault from "useVoicePanelDockStatus.tsx";
import useMeasureDockGlowOffsetDefault from "useMeasureDockGlowOffset.tsx";
import VoicePanelDockStatusDisplayDefault from "VoicePanelDockStatusDisplay.tsx";
import VoicePanelDockControlsDefault from "VoicePanelDockControls.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const require = globalThis.__r;
const _modDef1652 = _mod1652;

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
  const animatedRef = _mod1652.useAnimatedRef();
  const animatedRef1 = _mod1652.useAnimatedRef();
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
const VoicePanelModes = fn(11925).VoicePanelModes;
const VoicePanelDockConstants = fn(11948);
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
const GestureConstants = fn(11949);
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
const createStyles = fn(5243);
let obj = {
  dock: { position: "absolute", top: 0, left: 0, right: 0, paddingTop: DOCK_PADDING_TOP, zIndex: 10 },
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
  code: "(function VoicePanelDockTsx6(event){let[touchOrigin,touchMovement,contextMenuOpened]=this.__closure;touchOrigin.set({x:event.absoluteX,y:event.absoluteY});touchMovement.set(0);contextMenuOpened.set(false);})",
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
  code: "(function VoicePanelDockTsx11(){let[pullActive,pullSnapped,pullSnapOffset,updateSharedValueIfChanged,wrapperOffset]=this.__closure;pullActive.set(false);pullSnapped.set(false);pullSnapOffset.set(0);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});})",
};
let closure_35 = {
  code: "(function VoicePanelDockTsx12(){let[dockPressProgress]=this.__closure;return{opacity:dockPressProgress.get()};})",
};
let closure_36 = {
  code: "(function VoicePanelDockTsx13(){let[dockMinimizeProgress,wrapperDimensions,isDockConnected,getDockInset,dockPressProgress,safeArea,dockHeight,getDockRowOpacity,isDockExpanding,dockContentSwap,isDockRowTouchable]=this.__closure;const progress=1-dockMinimizeProgress.get();const{drawerHeight:drawerHeight}=wrapperDimensions.get();if(!isDockConnected.get()||drawerHeight<=0){return{opacity:0,pointerEvents:'none'};}const inset=getDockInset(dockPressProgress.get());const{left:left,right:right}=safeArea.get();return{height:dockHeight.get(),opacity:getDockRowOpacity(progress,isDockExpanding.get(),dockContentSwap.get()),pointerEvents:isDockRowTouchable(progress)?'auto':'none',paddingLeft:left+inset,paddingRight:right+inset};})",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDock.tsx");

export default noop.memo(function VoicePanelDock() {
  let tmp = closure_21();
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
  ({ isDockConnected, isDockExpanding, safeArea, mode } = context);
  items = [closure_25, dockMinimizeProgress, require("VoicePanelSheetMorph").SHEET_MORPH_PHYSICS];
  _require = undefined;
  importDefault = undefined;
  [tmp7, tmp8, tmp9] = items;
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
  let items1 = [tmp8, tmp9];
  VoicePanelDockTsx2.__closure = items1;
  VoicePanelDockTsx2.__workletHash = 9619339657143;
  VoicePanelDockTsx2.__initData = tmp7;
  let items2 = [
    closure_26,
    mode,
    c7,
    require("../../../../../_runtime/metro/01705__.js").scheduleOnRN,
    ExternalPipDefault.updateSourceTrackingView,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
  class VoicePanelDockTsx3 {
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
  VoicePanelDockTsx3.__closure = items3;
  VoicePanelDockTsx3.__workletHash = 10995549690413;
  VoicePanelDockTsx3.__initData = tmp10;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    VoicePanelDockTsx2,
    VoicePanelDockTsx3,
  );
  let items4 = [setMode, showControls];
  const callback = obj.useCallback(() => {
    _undefined7();
    _undefined6(VoicePanelModes.PANEL);
  }, items4);
  c9 = callback;
  const obj2 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue({ x: 0, y: 0 });
  c10 = sharedValue;
  const tmp6Result = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const tmp6Result14 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue2 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(false);
  let items5 = [callback, sharedValue1];
  const callback1 = obj.useCallback(() => {
    if (sharedValue1.get() <= closure_2_11) {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      _undefined10();
    }
  }, items5);
  const tmp6Result15 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue3 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const tmp6Result16 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue4 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const tmp6Result17 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue5 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(false);
  const tmp6Result18 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue6 = require("../../../../../_runtime/metro/01652__.js").useSharedValue(false);
  const tmp6Result19 = require("../../../../../_runtime/metro/01652__.js");
  let items6 = [closure_27, sharedValue6, sharedValue3, sharedValue4];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp25, tmp26, tmp27, tmp28] = items6;
  class VoicePanelDockTsx4 {
    constructor() {
      obj = { active: closure_0.get(), distance: closure_1.get(), snapOffset: closure_2.get() };
      return obj;
    }
  }
  let items7 = [tmp26, tmp27, tmp28];
  VoicePanelDockTsx4.__closure = items7;
  VoicePanelDockTsx4.__workletHash = 2673447581813;
  VoicePanelDockTsx4.__initData = tmp25;
  let items8 = [
    closure_28,
    wrapperDimensions,
    dockHeight,
    sharedValue5,
    c10,
    sharedValue6,
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
  [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36] = items8;
  class VoicePanelDockTsx5 {
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
  let items9 = [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36];
  VoicePanelDockTsx5.__closure = items9;
  VoicePanelDockTsx5.__workletHash = 14506418013998;
  VoicePanelDockTsx5.__initData = tmp29;
  const animatedReaction1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
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
    const items1 = [closure_29, c10, sharedValue1, sharedValue2];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp6, tmp7, tmp8, tmp9] = items1;
    class VoicePanelDockTsx6 {
      constructor(arg0) {
        point = { x: arg0.absoluteX, y: arg0.absoluteY };
        result = closure_0.set(point);
        result1 = closure_1.set(0);
        result2 = closure_2.set(false);
        return;
      }
    }
    const items2 = [tmp7, tmp8, tmp9];
    VoicePanelDockTsx6.__closure = items2;
    VoicePanelDockTsx6.__workletHash = 1341379641360;
    VoicePanelDockTsx6.__initData = tmp6;
    const failOffsetXResult = Gesture.Pan()
      .hitSlop({ bottom: -c0 })
      .activeOffsetY(-colors)
      .failOffsetY(colors)
      .failOffsetX(items);
    const tmp3 = c10;
    const items3 = [closure_30, sharedValue2, tmp3, sharedValue1];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp10, tmp11, tmp12, tmp13] = items3;
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
    const items4 = [tmp11, tmp12, tmp13];
    VoicePanelDockTsx7.__closure = items4;
    VoicePanelDockTsx7.__workletHash = 8011174432382;
    VoicePanelDockTsx7.__initData = tmp10;
    const onBeginResult = Gesture.Pan()
      .hitSlop({ bottom: -c0 })
      .activeOffsetY(-colors)
      .failOffsetY(colors)
      .failOffsetX(items)
      .onBegin(VoicePanelDockTsx6);
    const items5 = [
      closure_31,
      _mod1705.scheduleOnRN,
      c6,
      sharedValue5,
      sharedValue4,
      sharedValue3,
      sharedValue6,
      updateSharedValueIfChangedDefault,
      c8,
      c7,
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
    [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items5;
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
    const items6 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30];
    VoicePanelDockTsx8.__closure = items6;
    VoicePanelDockTsx8.__workletHash = 8994781233490;
    VoicePanelDockTsx8.__initData = tmp20;
    const onTouchesMoveResult = Gesture.Pan()
      .hitSlop({ bottom: -c0 })
      .activeOffsetY(-colors)
      .failOffsetY(colors)
      .failOffsetX(items)
      .onBegin(VoicePanelDockTsx6)
      .onTouchesMove(VoicePanelDockTsx7);
    const tmp19 = c8;
    const items7 = [
      closure_32,
      React6,
      sharedValue5,
      c2,
      timing_timing.withTiming,
      VoicePanelSheetMorph.DOCK_CONTENT_SWAP_TIMING,
      sharedValue4,
      closure_2_10,
      closure_2_17,
      _mod1705.scheduleOnRN,
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
    [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44] = items7;
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
    const items8 = [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44];
    VoicePanelDockTsx9.__closure = items8;
    VoicePanelDockTsx9.__workletHash = 9262954094286;
    VoicePanelDockTsx9.__initData = tmp31;
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
      _mod1705.scheduleOnRN,
      HapticUtils.triggerHapticFeedback,
      HapticUtils.HapticFeedbackTypes,
      c1,
      VoicePanelModes,
      c9,
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
    [tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55] = items9;
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
    const items10 = [tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55];
    VoicePanelDockTsx10.__closure = items10;
    VoicePanelDockTsx10.__workletHash = 6770255881329;
    VoicePanelDockTsx10.__initData = tmp45;
    const onChangeResult = Gesture.Pan()
      .hitSlop({ bottom: -c0 })
      .activeOffsetY(-colors)
      .failOffsetY(colors)
      .failOffsetX(items)
      .onBegin(VoicePanelDockTsx6)
      .onTouchesMove(VoicePanelDockTsx7)
      .onStart(VoicePanelDockTsx8)
      .onChange(VoicePanelDockTsx9);
    const items11 = [closure_34, sharedValue6, sharedValue5, sharedValue4, updateSharedValueIfChangedDefault, tmp19];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp56, tmp57, tmp58, tmp59, tmp60, tmp61] = items11;
    class VoicePanelDockTsx11 {
      constructor() {
        result = closure_0.set(false);
        result1 = closure_1.set(false);
        result2 = closure_2.set(0);
        tmp4 = closure_3(closure_4, { gestureActive: false, x: 0, y: 0 });
        return;
      }
    }
    const items12 = [tmp57, tmp58, tmp59, tmp60, tmp61];
    VoicePanelDockTsx11.__closure = items12;
    VoicePanelDockTsx11.__workletHash = 7470562693856;
    VoicePanelDockTsx11.__initData = tmp56;
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
  const tmp6Result20 = require("../../../../../_runtime/metro/01652__.js");
  const items14 = [closure_35, dockPressProgress];
  _require = undefined;
  [tmp42, tmp43] = items14;
  class VoicePanelDockTsx12 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items15 = [tmp43];
  VoicePanelDockTsx12.__closure = items15;
  VoicePanelDockTsx12.__workletHash = 16776422543157;
  VoicePanelDockTsx12.__initData = tmp42;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoicePanelDockTsx12);
  const tmp6Result21 = require("../../../../../_runtime/metro/01652__.js");
  const items16 = [
    closure_36,
    dockMinimizeProgress,
    wrapperDimensions,
    isDockConnected,
    sharedValue2,
    dockPressProgress,
    safeArea,
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
  [tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56] = items16;
  class VoicePanelDockTsx13 {
    constructor() {
      diff = 1 - closure_0.get();
      if (closure_2.get()) {
        num = 0;
        if (closure_1.get().drawerHeight > 0) {
          tmp2 = closure_3;
          tmp3 = closure_4;
          tmp4 = closure_3(closure_4.get());
          tmp5 = closure_5;
          value = closure_5.get();
          obj = { height: null, opacity: null, pointerEvents: null, paddingLeft: null, paddingRight: null };
          tmp7 = closure_6;
          ({ left, right } = value);
          obj.height = closure_6.get();
          tmp8 = closure_7;
          tmp9 = closure_8;
          tmp11 = closure_9;
          value1 = closure_8.get();
          obj.opacity = closure_7(diff, value1, closure_9.get());
          tmp12 = closure_10;
          str = "none";
          if (closure_10(diff)) {
            str = "auto";
          }
          obj.pointerEvents = str;
          obj.paddingLeft = left + tmp4;
          obj.paddingRight = right + tmp4;
          return obj;
        }
      }
      return { opacity: 0, pointerEvents: "none" };
    }
  }
  const items17 = [tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56];
  VoicePanelDockTsx13.__closure = items17;
  VoicePanelDockTsx13.__workletHash = 2524842725545;
  VoicePanelDockTsx13.__initData = tmp45;
  const animatedStyle1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoicePanelDockTsx13);
  const tmp6Result22 = require("../../../../../_runtime/metro/01652__.js");
  ({ dockRef, handleDockLayout, measureGlowOffset } = useMeasureDockGlowOffsetDefault());
  const tmp58 = useMeasureDockGlowOffsetDefault();
  const animatedRef = require("../../../../../_runtime/metro/01652__.js").useAnimatedRef();
  const tmp6Result23 = require("../../../../../_runtime/metro/01652__.js");
  const tmp6Result24 = require("KeyboardChatScrollView");
  const tmp6Result25 = require("PlatformUtils");
  const isIOSResult = require("PlatformUtils").isIOS();
  const items18 = [
    closure_24,
    tmp6Result24.useReanimatedKeyboardAnimation().height,
    isIOSResult,
    require("useWindowDimensionsSharedValue").getWindowDimensionsWorklet,
    require("../../../../../_runtime/metro/01652__.js").measure,
    animatedRef,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp61, tmp62, tmp63, tmp64, tmp65, tmp66] = items18;
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
  const items19 = [tmp62, tmp63, tmp64, tmp65, tmp66];
  VoicePanelDockTsx1.__closure = items19;
  VoicePanelDockTsx1.__workletHash = 17112345546547;
  VoicePanelDockTsx1.__initData = tmp61;
  const animatedStyle2 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoicePanelDockTsx1);
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
  items22[1] = closure_19(_modDef1652.View, obj6);
  const obj7 = { ref: animatedRef, style: null, children: null };
  const items24 = [tmp.row, animatedStyle2];
  obj7.style = items24;
  const tmp6Result26 = require("../../../../../_runtime/metro/01652__.js");
  const items25 = [
    closure_19(c5, {
      style: tmp.identity,
      pointerEvents: "none",
      children: closure_19(VoicePanelDockStatusDisplayDefault, {}),
    }),
    closure_19(VoicePanelDockControlsDefault, { measureGlowOffset }),
  ];
  obj7.children = items25;
  items22[2] = closure_20(_modDef1652.View, obj7);
  obj4.children = items22;
  obj3.children = closure_20(_modDef1652.View, obj4);
  return closure_19(require("LegacyBaseButton").GestureDetector, obj3);
});
