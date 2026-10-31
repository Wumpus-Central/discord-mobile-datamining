// discord_app/modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import ReanimatedNativeViewDefault from "../../../core/native/ReanimatedNativeView.tsx";
import StreamActionCreators from "../../../../actions/StreamActionCreators.tsx";
import useGameProfileObscuredDefault from "../../../game_profile/hooks/useGameProfileObscured.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import VoiceStateIcons from "../shared/VoiceStateIcons.tsx";
import VoiceStateIconUtils from "../utils/VoiceStateIconUtils.tsx";
import usePlayingGameActivitiesDefault from "../../../activities/hooks/usePlayingGameActivities.tsx";
import useShouldOpenGameProfileModal from "../../../game_profile/hooks/useShouldOpenGameProfileModal.tsx";
import useResolveGameDefault from "../../../games/hooks/useResolveGame.tsx";
import GameProfileAnalyticUtils from "../../../game_profile/GameProfileAnalyticUtils.tsx";
import leaveEmbeddedActivity from "../../../activities/leaveEmbeddedActivity.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import VoiceXIcon from "../../../../design/components/Icon/native/redesign/generated/VoiceXIcon.tsx";
import _modDef12043 from "../../../../../_runtime/metro/12043__.js";
import useStableParticipant from "../utils/useStableParticipant.tsx";
import useVoicePanelCardUserStateIcons from "../hooks/useVoicePanelCardUserStateIcons.tsx";
import _modDef19215 from "../../../../../_runtime/metro/19215__.js";
import getRandomNumberInRangeDefault from "../utils/getRandomNumberInRange.tsx";
import _modDef19263 from "../../../../../_runtime/metro/19263__.js";
import _modDef19264 from "../../../../../_runtime/metro/19264__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";
import ReanimatedRexport_mod from "../../../reanimated/ReanimatedRexport.tsx";

require = fn;
function StreamIcon(voicePlatform) {
  voicePlatform = voicePlatform.voicePlatform;
  const controlsSpecs = noop.useContext(VoicePanelStateContextDefault).controlsSpecs;
  let tmp = closure_23();
  const fn = function o() {
    const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
    let num = 4;
    if (tmp) {
      num = 2;
    }
    const obj = { marginLeft: num, marginRight: null };
    let num2 = 0;
    if (tmp) {
      num2 = 2;
    }
    obj.marginRight = num2;
    return obj;
  };
  fn.__closure = { controlsSpecs, VoicePanelControlsModes, GAP: 4 };
  fn.__workletHash = 3270040588948;
  fn.__initData = __initData;
  const animatedStyle = controlsSpecs(5095).useAnimatedStyle(fn);
  let tmp2Result = _modDef19215;
  if (voicePlatform === constants2.XBOX) {
    tmp2Result = _modDef19263;
  } else if (voicePlatform === constants2.MOBILE) {
    tmp2Result = _modDef12043;
  } else if (voicePlatform === constants2.QUEST) {
    tmp2Result = _modDef19264;
  }
  const obj3 = { source: tmp2Result, style: null };
  const items = [tmp.iconWithoutBackground, animatedStyle];
  obj3.style = items;
  return closure_16(closure_19, obj3);
}
function AnimatedLabelIcon(icon) {
  icon = icon.icon;
  const tmp = closure_23();
  const type = icon.type;
  if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STREAM_ICON === type) {
    const obj2 = { voicePlatform: icon.voicePlatform };
    return __initData2(StreamIcon, obj2);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.SPEAKER_MUTE_ICON === type) {
    const obj3 = {
      style: tmp.speakerMuteIcon,
      hitSlop: 12,
      onPress: icon.onPress,
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    };
    const intl4 = util.intl;
    obj3.accessibilityLabel = intl4.string(util.t.Q8Uzof);
    const obj4 = { style: tmp.iconWithoutBackground };
    obj3.children = __initData2(VoiceXIcon.VoiceXIcon, obj4);
    return __initData2(Pressable, obj3);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON === type) {
    if (icon.videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
      const intl3 = util.intl;
      let stringResult = intl3.string(util.t.uv1tVh);
    } else {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t["PXMZ/+"]);
    }
    if (null != icon.onPress) {
      const obj5 = {
        style: tmp.iconContainer,
        onPress: icon.onPress,
        accessibilityRole: "button",
        accessibilityLabel: stringResult,
        children: null,
      };
      const obj6 = { style: tmp.icon, state: icon.videoIconState };
      obj5.children = __initData2(VoiceStateIcons.VideoIcon, obj6);
      let tmp16 = __initData2(Pressable, obj5);
    } else {
      const obj7 = {
        style: tmp.iconContainer,
        accessible: true,
        accessibilityRole: "image",
        accessibilityLabel: stringResult,
        children: null,
      };
      const obj8 = { style: tmp.icon, state: icon.videoIconState };
      obj7.children = __initData2(VoiceStateIcons.VideoIcon, obj8);
      tmp16 = __initData2(NativeViewDefault, obj7);
    }
    return tmp16;
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON === type) {
    const obj9 = {
      style: tmp.iconContainer,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: null,
    };
    const obj10 = { onPress: icon.onPress, hitSlop: 12, children: null };
    const obj11 = { style: tmp.icon, state: icon.muteDeafenIconState, alwaysWhite: true };
    obj10.children = __initData2(VoiceStateIcons.MuteDeafenIcon, obj11);
    obj9.children = __initData2(Pressable, obj10);
    return __initData2(NativeViewDefault, obj9);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_DISCONNECTED_ICON === type) {
    const obj = {
      style: tmp.iconContainer,
      onPress: icon.onPress,
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.HFwRpk);
    const obj12 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
    obj.children = __initData2(CircleErrorIcon.CircleErrorIcon, obj12);
    return __initData2(Pressable, obj);
  }
}
function HideableTileControl(arg0) {
  ({ style, hideStyles, layout, children } = arg0);
  const obj = {
    style,
    layout,
    pointerEvents: "box-none",
    children: __initData2(ReanimatedNativeViewDefault, { style: hideStyles, pointerEvents: "box-none", children }),
  };
  return __initData2(ReanimatedNativeViewDefault, obj);
}
get_ActivityIndicator = fn(17);
({ PixelRatio, Platform, Pressable } = get_ActivityIndicator);
const VoicePanelConstants = fn(11223);
({ MODE_CHANGE_PHYSICS: closure_9, VoicePanelModes: c10 } = VoicePanelConstants);
const VoicePanelControlsModes = fn(11221).VoicePanelControlsModes;
const VOICE_PANEL_CARD_INNER_PADDING = fn(11226).VOICE_PANEL_CARD_INNER_PADDING;
const ThemeTypes = fn(1072).ThemeTypes;
const CallConstants = fn(5681);
({ ParticipantTypes: closure_14, VoicePlatforms: closure_15 } = CallConstants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_19 = ReanimatedRexport.createAnimatedComponent(fn(1187).Icon);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_20 = ReanimatedRexport.createAnimatedComponent(Pressable);
let c21 = 28;
const paddingVertical = PixelRatio.roundToNearestPixel(4);
const createStyles = fn(5014);
let closure_23 = createStyles.createStyles(() => {
  const obj = {
    topLeftButton: null,
    topRightButton: {
      position: "absolute",
      top: VOICE_PANEL_CARD_INNER_PADDING,
      right: VOICE_PANEL_CARD_INNER_PADDING,
      zIndex: 1,
    },
    labelPositionContainer: null,
    labelHideWrapper: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
    },
    labelOuterContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      borderRadius: nativeDefault.radii.sm,
      overflow: "hidden",
      paddingHorizontal: 8,
      backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
      height: v28,
      gap: 4,
    },
    initialIcons: { display: "flex", flexDirection: "row", marginStart: -4, marginEnd: -4 },
    icon: null,
    iconWithoutBackground: null,
    iconContainer: null,
    speakerMuteIcon: null,
    floatingContainer: null,
    floatingText: null,
    ringingIconContainer: null,
    ringingIcon: null,
    secureFramesIcon: null,
  };
  const rect = {
    position: "absolute",
    top: VOICE_PANEL_CARD_INNER_PADDING,
    left: VOICE_PANEL_CARD_INNER_PADDING,
    zIndex: 1,
  };
  obj.topLeftButton = rect;
  const rect1 = { position: "absolute", left: 8, right: 8, bottom: 8, height: v28, marginHorizontal: 8 };
  obj.labelPositionContainer = rect1;
  const size = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
  obj.icon = size;
  const size1 = { width: 16, height: 16, tintColor: nativeDefault.colors.WHITE };
  obj.iconWithoutBackground = size1;
  const size2 = {
    width: 20,
    height: 20,
    borderRadius: nativeDefault.radii.round,
    alignItems: "center",
    justifyContent: "center",
  };
  obj.iconContainer = size2;
  obj.speakerMuteIcon = { marginRight: 4 };
  obj.floatingContainer = {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    overflow: "hidden",
    flexShrink: 1,
    alignSelf: "stretch",
  };
  obj.floatingText = {
    overflow: "hidden",
    paddingStart: 4,
    paddingEnd: 4,
    paddingVertical,
    marginVertical: -paddingVertical,
    flexShrink: 1,
    lineHeight: 14,
  };
  const rect2 = {
    position: "absolute",
    top: 8,
    right: 8,
    padding: 6,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  obj.ringingIconContainer = rect2;
  const obj2 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: nativeDefault.radii.sm,
    overflow: "hidden",
    paddingHorizontal: 8,
    backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
    height: v28,
    gap: 4,
  };
  const obj3 = {
    overflow: "hidden",
    paddingStart: 4,
    paddingEnd: 4,
    paddingVertical,
    marginVertical: -paddingVertical,
    flexShrink: 1,
    lineHeight: 14,
  };
  obj.ringingIcon = { tintColor: nativeDefault.colors.STATUS_POSITIVE };
  obj.secureFramesIcon = { marginEnd: -2 };
  return obj;
});
const __initData = {
  code: "function VoicePanelCardFloatingControlsTsx1(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}",
};
const hiddenOffsetY = -28 + 3 * VOICE_PANEL_CARD_INNER_PADDING;
const hiddenOffsetY2 = 28 + VOICE_PANEL_CARD_INNER_PADDING;
const __initData2 = {
  code: "function VoicePanelCardFloatingControlsTsx2(){const{withSpring,hidden,MODE_CHANGE_PHYSICS,hiddenOffsetY}=this.__closure;return{opacity:withSpring(hidden.get()?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(hidden.get()?hiddenOffsetY:0,MODE_CHANGE_PHYSICS)}]};}",
};
let closure_31 = noop.memo(function CloseButton(participant) {
  participant = participant.participant;
  const controlsHidden = participant.controlsHidden;
  let guildId;
  ({ isSelf, layout } = participant);
  guildId = noop.useContext(guildId(11222)).guildId;
  closure_129_0 = controlsHidden;
  closure_129_1 = hiddenOffsetY;
  const tmp = closure_23();
  const fn = function o() {
    let num = 1;
    if (controlsHidden.get()) {
      num = 0;
    }
    const obj3 = { opacity: spring.withSpring(num, MODE_CHANGE_PHYSICS), transform: null };
    let num2 = 0;
    if (controlsHidden.get()) {
      num2 = channelId;
    }
    const tmpResult = spring;
    const items = [{ translateY: spring.withSpring(num2, MODE_CHANGE_PHYSICS) }];
    obj3.transform = items;
    return obj3;
  };
  let obj = participant(5095);
  fn.__closure = {
    withSpring: participant(5637).withSpring,
    hidden: controlsHidden,
    MODE_CHANGE_PHYSICS,
    hiddenOffsetY,
  };
  fn.__workletHash = 10936966719458;
  fn.__initData = __initData2;
  const items = [guildId, participant];
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: tmp.topLeftButton, hideStyles: animatedStyle, layout, children: null };
  const callback = noop.useCallback(() => {
    if (obj.isStableStreamParticipant(participant)) {
      const streamForUser = ApplicationStreamingStore.getStreamForUser(participant.user.id, guildId);
      if (null != streamForUser) {
        const tmpResult = StreamActionCreators;
        tmpResult.stopStream(StreamKeyUtils.encodeStreamKey(streamForUser));
        const tmpResult4 = StreamKeyUtils;
      }
    }
    obj = useStableParticipant;
    if (tmpResult5.isStableActivityParticipant(participant)) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let _location;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const obj2 = { location: _location, applicationId: participant.applicationId };
      const result = leaveEmbeddedActivity.leaveEmbeddedActivity(obj2);
      const tmpResult6 = leaveEmbeddedActivity;
    }
    tmpResult5 = useStableParticipant;
  }, items);
  const obj4 = { icon: null, onPress: null, accessibilityLabel: null };
  let obj2 = { withSpring: participant(5637).withSpring, hidden: controlsHidden, MODE_CHANGE_PHYSICS, hiddenOffsetY };
  obj4.icon = guildId(19265);
  obj4.onPress = callback;
  const tmp6 = guildId(19143);
  let result = participant(19211).isStableActivityParticipant(participant);
  const intl = participant(1113).intl;
  const string = intl.string;
  const t = participant(1113).t;
  if (result) {
    let stringResult = string(t["R/FK4A"]);
  } else if (isSelf) {
    stringResult = string(t.S5anIc);
  } else {
    stringResult = string(t.q3O3J8);
  }
  obj4.accessibilityLabel = stringResult;
  obj3.children = closure_16(tmp6, obj4);
  return closure_16(HideableTileControl, obj3);
});
const __initData3 = {
  code: "function VoicePanelCardFloatingControlsTsx3(){const{controlsHidden,mode,VoicePanelModes}=this.__closure;return controlsHidden.get()||mode.get()===VoicePanelModes.PIP;}",
};
let closure_33 = noop.memo(function CardFocusButton(participantId) {
  participantId = participantId.participantId;
  const controlsHidden = participantId.controlsHidden;
  const targetName = participantId.targetName;
  let setFocused;
  let mode;
  ({ isActivityParticipant, layout } = participantId);
  const context = mode.useContext(controlsHidden(setFocused[16]));
  setFocused = context.setFocused;
  mode = context.mode;
  const items = [setFocused, participantId];
  const callback = mode.useCallback(() => {
    setFocused(participantId);
  }, items);
  const tmp5 = closure_23();
  const fn = function u() {
    value = controlsHidden.get();
    if (!value) {
      value = mode.get() === VoicePanelModes.PIP;
    }
    return value;
  };
  fn.__closure = { controlsHidden, mode, VoicePanelModes };
  fn.__workletHash = 2201188865769;
  fn.__initData = __initData3;
  const derivedValue = participantId(setFocused[12]).useDerivedValue(fn);
  closure_129_0 = derivedValue;
  closure_129_1 = hiddenOffsetY;
  const obj = participantId(setFocused[12]);
  const obj2 = { controlsHidden, mode, VoicePanelModes };
  const fn2 = function o() {
    let num = 1;
    if (controlsHidden.get()) {
      num = 0;
    }
    const obj3 = { opacity: spring.withSpring(num, MODE_CHANGE_PHYSICS), transform: null };
    let num2 = 0;
    if (controlsHidden.get()) {
      num2 = channelId;
    }
    const tmpResult = spring;
    const items = [{ translateY: spring.withSpring(num2, MODE_CHANGE_PHYSICS) }];
    obj3.transform = items;
    return obj3;
  };
  const obj3 = participantId(setFocused[12]);
  fn2.__closure = {
    withSpring: participantId(setFocused[28]).withSpring,
    hidden: derivedValue,
    MODE_CHANGE_PHYSICS,
    hiddenOffsetY,
  };
  fn2.__workletHash = 10936966719458;
  fn2.__initData = __initData2;
  const animatedStyle = obj3.useAnimatedStyle(fn2);
  if (isActivityParticipant) {
    const intl3 = tmp6(tmp2[22]).intl;
    let stringResult = intl3.string(tmp6(tmp2[22]).t["3ejJer"]);
  } else if (null != targetName) {
    const intl2 = tmp6(tmp2[22]).intl;
    const obj5 = { targetName };
    stringResult = intl2.formatToPlainString(tmp6(tmp2[22]).t.OervdV, obj5);
  } else {
    const intl = tmp6(tmp2[22]).intl;
    stringResult = intl.string(tmp6(tmp2[22]).t["77cRN4"]);
  }
  const obj6 = { style: tmp5.topRightButton, hideStyles: animatedStyle, layout, children: null };
  const obj7 = { icon: null, onPress: null, accessibilityLabel: null };
  const obj4 = {
    withSpring: participantId(setFocused[28]).withSpring,
    hidden: derivedValue,
    MODE_CHANGE_PHYSICS,
    hiddenOffsetY,
  };
  obj7.icon = controlsHidden(setFocused[36]);
  obj7.onPress = callback;
  obj7.accessibilityLabel = stringResult;
  obj6.children = closure_16(controlsHidden(setFocused[34]), obj7);
  return closure_16(HideableTileControl, obj6);
});
const RING_PHYSICS = { mass: 0.1, stiffness: 400, overshootClamping: true };
const __initData4 = {
  code: "function VoicePanelCardFloatingControlsTsx4(){const{flip}=this.__closure;return flip.get();}",
};
const __initData5 = {
  code: "function VoicePanelCardFloatingControlsTsx5(flipped){const{angle,withSpring,getRandomNumberInRange,RING_PHYSICS,flip}=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(45-10,45+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}else{angle.set(withSpring(getRandomNumberInRange(0-10,0+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}}",
};
let closure_37 = {
  code: "function VoicePanelCardFloatingControlsTsx6(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}",
};
let closure_38 = {
  code: "function VoicePanelCardFloatingControlsTsx7(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}",
};
const __initData6 = {
  code: "function VoicePanelCardFloatingControlsTsx8(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};}",
};
const __initData7 = {
  code: 'function VoicePanelCardFloatingControlsTsx9(){const{angle}=this.__closure;return{transform:[{rotate:angle.get()+"deg"}]};}',
};
let closure_41 = noop.memo(function RingingIcon(controlsHidden) {
  controlsHidden = controlsHidden.controlsHidden;
  let sharedValue1;
  const tmp = closure_23();
  const sharedValue = controlsHidden(sharedValue1[12]).useSharedValue(true);
  let obj = controlsHidden(sharedValue1[12]);
  sharedValue1 = controlsHidden(sharedValue1[12]).useSharedValue(0);
  let obj2 = controlsHidden(sharedValue1[12]);
  let items = [AccessibilityStore];
  const stateFromStores = controlsHidden(sharedValue1[37]).useStateFromStores(
    items,
    () => useReducedMotion.useReducedMotion,
  );
  const obj3 = controlsHidden(sharedValue1[37]);
  let fn = function o() {
    return sharedValue.get();
  };
  fn.__closure = { flip: sharedValue };
  fn.__workletHash = 7663309832237;
  fn.__initData = __initData4;
  let fn2 = function n(arg0) {
    const tmp2 = spring;
    const withSpring = tmp2.withSpring;
    const tmp3 = getRandomNumberInRangeDefault;
    if (arg0) {
      const fn2 = function o(arg0) {
        if (arg0) {
          const result = sharedValue.set(!sharedValue.get());
        }
      };
      const obj2 = { flip: sharedValue };
      fn2.__closure = obj2;
      fn2.__workletHash = 17264907521028;
      fn2.__initData = __initData;
      let result = set(withSpring(tmp3(35, 55), closure_34, "respect-motion-settings", fn2));
    } else {
      const fn = function n(arg0) {
        if (arg0) {
          const result = sharedValue.set(!sharedValue.get());
        }
      };
      const obj = { flip: sharedValue };
      fn.__closure = obj;
      fn.__workletHash = 1799436949573;
      fn.__initData = __initData2;
      const result1 = set(withSpring(tmp3(-10, 10), closure_34, "respect-motion-settings", fn));
    }
  };
  const obj4 = controlsHidden(sharedValue1[12]);
  fn2.__closure = {
    angle: sharedValue1,
    withSpring: controlsHidden(sharedValue1[28]).withSpring,
    getRandomNumberInRange: sharedValue(sharedValue1[38]),
    RING_PHYSICS,
    flip: sharedValue,
  };
  fn2.__workletHash = 15646860695268;
  fn2.__initData = __initData5;
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const obj5 = {
    angle: sharedValue1,
    withSpring: controlsHidden(sharedValue1[28]).withSpring,
    getRandomNumberInRange: sharedValue(sharedValue1[38]),
    RING_PHYSICS,
    flip: sharedValue,
  };
  const tmp7 = sharedValue;
  const fn3 = function h() {
    let top = 0;
    if (controlsHidden.get()) {
      top = -c21 + 2 * VOICE_PANEL_CARD_INNER_PADDING;
    }
    return { top };
  };
  fn3.__closure = { controlsHidden, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING };
  fn3.__workletHash = 726627995932;
  fn3.__initData = __initData6;
  const animatedStyle = controlsHidden(sharedValue1[12]).useAnimatedStyle(fn3);
  const obj6 = controlsHidden(sharedValue1[12]);
  const obj7 = { controlsHidden, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING };
  const fn4 = function p() {
    const obj = { transform: null };
    const items = [{ rotate: "" + sharedValue1.get() + "deg" }];
    obj.transform = items;
    return obj;
  };
  fn4.__closure = { angle: sharedValue1 };
  fn4.__workletHash = 791392364030;
  fn4.__initData = __initData7;
  const animatedStyle1 = controlsHidden(sharedValue1[12]).useAnimatedStyle(fn4);
  const obj9 = { style: null, children: null };
  const items1 = [animatedStyle, tmp.ringingIconContainer];
  obj9.style = items1;
  const obj8 = controlsHidden(sharedValue1[12]);
  let tmp14 = !stateFromStores;
  const tmp12 = sharedValue(sharedValue1[29]);
  if (!stateFromStores) {
    tmp14 = animatedStyle1;
  }
  const obj10 = { style: tmp14, pointerEvents: "none", children: null };
  const tmp13 = sharedValue(sharedValue1[29]);
  obj10.children = closure_16(controlsHidden(sharedValue1[13]).Icon, {
    source: tmp7(sharedValue1[39]),
    size: controlsHidden(sharedValue1[13]).IconSizes.SMALL_20,
    style: tmp.ringingIcon,
  });
  obj9.children = closure_16(tmp13, obj10);
  return closure_16(tmp12, obj9);
});
let closure_42 = noop.memo(function RingingIconWrapper(controlsHidden) {
  return __initData2(native.ThemeContextProvider, {
    theme: ThemeTypes.LIGHT,
    children: __initData2(closure_41, { controlsHidden: controlsHidden.controlsHidden }),
  });
});
let closure_43 = noop.memo(function UserTagChiplet(arg0) {
  ({ userId, textColor } = arg0);
  let gameRecord;
  importDefault = undefined;
  dependencyMap = undefined;
  const first = usePlayingGameActivitiesDefault(userId, arg0.guildId)[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  gameRecord = useResolveGameDefault({ applicationId: application_id }).gameRecord;
  const tmp6 = useGameProfileObscuredDefault(gameRecord);
  importDefault = tmp6;
  dependencyMap = noop.useRef(false);
  let items = [gameRecord, tmp6];
  const effect = noop.useEffect(() => {
    const current = ref.current;
    let tmp2 = !current;
    if (!current) {
      tmp2 = null != gameRecord;
    }
    if (tmp2) {
      tmp2 = closure_1;
    }
    if (tmp2) {
      const obj = useShouldOpenGameProfileModal;
      const items = [useShouldOpenGameProfileModal.RejectionReason.Obscured];
      obj.trackEntryPoint(false, gameRecord.id, items, GameProfileAnalyticUtils.GameProfileSources.CallTile);
      ref.current = true;
    }
  }, items);
  if (null != gameRecord) {
    if (!tmp6) {
      let obj = { game: gameRecord, userId, textColor };
      let tmp9 = closure_16(tmp(19268), obj);
    }
    return tmp9;
  }
  tmp9 = closure_16(tmp(9295), { userId, textColor });
});
const __initData8 = {
  code: "function VoicePanelCardFloatingControlsTsx10(){const{hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden}=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;return!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();}",
};
const __initData9 = {
  code: "function VoicePanelCardFloatingControlsTsx11(){const{FLOATING_BAR_HEIGHT,isPillHidden}=this.__closure;return{height:FLOATING_BAR_HEIGHT,pointerEvents:isPillHidden.get()?'none':'auto'};}",
};
const __initData10 = {
  code: "function VoicePanelCardFloatingControlsTsx12(){const{connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP}=this.__closure;const hidden=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden&&hasIcon;return{width:shouldCollapseWidth?0:'auto',marginRight:hidden?-GAP:0};}",
};
let closure_47 = noop.memo(function FloatingParticipantLabel(controlsHidden) {
  controlsHidden = controlsHidden.controlsHidden;
  ({ label, layout, participant } = controlsHidden);
  channelId = undefined;
  let controlsSpecs;
  let focused;
  let analyticsLocations;
  MODE_CHANGE_PHYSICS = undefined;
  VoicePanelModes = undefined;
  let derivedValue;
  const context = focused.useContext(channelId(controlsSpecs[16]));
  ({ guildId, channelId } = context);
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  const connected = context.connected;
  const mode = context.mode;
  const isScreenReaderEnabled = controlsHidden(controlsSpecs[48]).useIsScreenReaderEnabled();
  const tmp6 = closure_23();
  let obj = focused;
  const obj2 = controlsHidden(controlsSpecs[48]);
  let id;
  if (obj3.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  analyticsLocations = tmp(tmp2[49])().analyticsLocations;
  let items = [id, channelId, analyticsLocations];
  const callback = obj.useCallback(() => {
    if (null != id) {
      const obj = { userId: tmp, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    }
  }, items);
  obj3 = controlsHidden(controlsSpecs[30]);
  let isUserSecureFramesVerified = controlsHidden(controlsSpecs[51]).useIsUserSecureFramesVerified({
    userId: id,
    channelId,
  });
  const tmp4Result = controlsHidden(controlsSpecs[51]);
  let tmpResult = channelId(controlsSpecs[21]);
  let id1;
  if (tmp4Result7.isStableParticipantWithUser(participant)) {
    id1 = participant.user.id;
  }
  const tmpResultResult = tmpResult(participant.type, id1, guildId, channelId);
  tmp4Result7 = controlsHidden(controlsSpecs[30]);
  const tmp12 = channelId(controlsSpecs[52])({ userId: id, guildId });
  const displayNameStylesFont = controlsHidden(controlsSpecs[53]).useDisplayNameStylesFont({
    displayNameStyles: tmp12,
  });
  MODE_CHANGE_PHYSICS = tmp14;
  const tmp15 =
    tmpResultResult.filter(
      (type) => type.type !== controlsHidden(controlsSpecs[21]).VoicePanelCardUserStateIconType.STREAM_ICON,
    ).length >= 1;
  VoicePanelModes = tmp15;
  const tmp4Result8 = controlsHidden(controlsSpecs[53]);
  const fn = function c() {
    let tmp = closure_10;
    if (closure_10) {
      tmp = null == focused.get();
    }
    value = connected.get();
    let tmp5 = !value;
    if (value) {
      tmp5 = mode.get() === VoicePanelModes.PIP;
    }
    if (!tmp5) {
      value2 = !tmp;
      if (!tmp) {
        value2 = controlsHidden.get();
      }
      tmp5 = value2;
    }
    return tmp5;
  };
  fn.__closure = { hasHiddenVisibleIcon: tmp15, focused, connected, mode, VoicePanelModes, controlsHidden };
  fn.__workletHash = 14354852732719;
  fn.__initData = __initData8;
  derivedValue = controlsHidden(controlsSpecs[12]).useDerivedValue(fn);
  const obj4 = { hasHiddenVisibleIcon: tmp15, focused, connected, mode, VoicePanelModes, controlsHidden };
  const tmp4Result9 = controlsHidden(controlsSpecs[12]);
  const fn2 = function u() {
    const obj = { height, pointerEvents: null };
    let str = "auto";
    if (derivedValue.get()) {
      str = "none";
    }
    obj.pointerEvents = str;
    return obj;
  };
  fn2.__closure = { FLOATING_BAR_HEIGHT: v28, isPillHidden: derivedValue };
  fn2.__workletHash = 1647642039812;
  fn2.__initData = __initData9;
  closure_129_0 = derivedValue;
  closure_129_1 = hiddenOffsetY2;
  const animatedStyle = controlsHidden(controlsSpecs[12]).useAnimatedStyle(fn2);
  const obj5 = { FLOATING_BAR_HEIGHT: v28, isPillHidden: derivedValue };
  const tmp4Result10 = controlsHidden(controlsSpecs[12]);
  const fn3 = function o() {
    let num = 1;
    if (controlsHidden.get()) {
      num = 0;
    }
    const obj3 = { opacity: spring.withSpring(num, MODE_CHANGE_PHYSICS), transform: null };
    let num2 = 0;
    if (controlsHidden.get()) {
      num2 = channelId;
    }
    const tmpResult = spring;
    const items = [{ translateY: spring.withSpring(num2, MODE_CHANGE_PHYSICS) }];
    obj3.transform = items;
    return obj3;
  };
  const tmp4Result11 = controlsHidden(controlsSpecs[12]);
  fn3.__closure = {
    withSpring: controlsHidden(controlsSpecs[28]).withSpring,
    hidden: derivedValue,
    MODE_CHANGE_PHYSICS,
    hiddenOffsetY: hiddenOffsetY2,
  };
  fn3.__workletHash = 10936966719458;
  fn3.__initData = __initData2;
  const animatedStyle1 = tmp4Result11.useAnimatedStyle(fn3);
  const obj6 = {
    withSpring: controlsHidden(controlsSpecs[28]).withSpring,
    hidden: derivedValue,
    MODE_CHANGE_PHYSICS,
    hiddenOffsetY: hiddenOffsetY2,
  };
  const fn4 = function _() {
    value = connected.get();
    let tmp2 = !value;
    if (value) {
      let tmp4 = !isScreenReaderEnabled;
      if (!isScreenReaderEnabled) {
        tmp4 = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
      }
      if (tmp4) {
        tmp4 = closure_9;
      }
      tmp2 = tmp4;
    }
    let num = "auto";
    if (tmp2) {
      num = "auto";
      if (closure_9) {
        num = 0;
      }
    }
    const obj = { width: num, marginRight: null };
    let num2 = 0;
    if (tmp2) {
      num2 = -4;
    }
    obj.marginRight = num2;
    return obj;
  };
  fn4.__closure = {
    connected,
    isScreenReaderEnabled,
    controlsSpecs,
    VoicePanelControlsModes: derivedValue,
    hasIcon: tmpResultResult.length >= 1,
    GAP: 4,
  };
  fn4.__workletHash = 2980616778992;
  fn4.__initData = __initData10;
  const items1 = [tmp6.labelPositionContainer];
  const animatedStyle2 = controlsHidden(controlsSpecs[12]).useAnimatedStyle(fn4);
  const obj8 = { style: items1, layout, pointerEvents: "box-none", children: null };
  const obj7 = {
    connected,
    isScreenReaderEnabled,
    controlsSpecs,
    VoicePanelControlsModes: derivedValue,
    hasIcon: tmpResultResult.length >= 1,
    GAP: 4,
  };
  const tmp4Result12 = controlsHidden(controlsSpecs[12]);
  const obj9 = { style: null, pointerEvents: "box-none", children: null };
  const items2 = [tmp6.labelHideWrapper, animatedStyle1];
  obj9.style = items2;
  let tmp25;
  const tmpResult5 = channelId(controlsSpecs[29]);
  if (null != id) {
    tmp25 = callback;
  }
  const obj10 = { onPress: tmp25, style: null, layout, children: null };
  const items3 = [tmp6.labelOuterContainer, animatedStyle];
  obj10.style = items3;
  let tmp20Result = tmpResultResult.length > 0;
  if (tmp20Result) {
    const obj11 = {
      style: tmp6.initialIcons,
      children: tmpResultResult.map((icon) => closure_1_16(AnimatedLabelIcon, { icon }, icon.type)),
    };
    tmp20Result = closure_16(tmp(tmp2[26]), obj11);
    const tmpResult7 = tmp(tmp2[26]);
  }
  const items4 = [tmp20Result];
  const obj12 = { style: null, layout, children: null };
  const items5 = [tmp6.floatingContainer, animatedStyle2];
  obj12.style = items5;
  const tmpResult6 = channelId(controlsSpecs[29]);
  const items6 = [tmp6.floatingText];
  let tmp29 = null != displayNameStylesFont;
  if (tmp29) {
    const obj13 = { fontFamily: displayNameStylesFont };
    tmp29 = obj13;
  }
  const obj14 = {
    variant: "heading-sm/semibold",
    color: "text-overlay-light",
    lineClamp: 1,
    style: items6,
    ellipsizeMode: "tail",
    accessibilityLabel: null,
    children: null,
  };
  items6[1] = tmp29;
  if (
    null !=
    tmpResultResult.find(
      (type) => type.type === controlsHidden(controlsSpecs[21]).VoicePanelCardUserStateIconType.STREAM_ICON,
    )
  ) {
    const intl3 = tmp4(tmp2[22]).intl;
    const obj15 = { username: label };
    let formatToPlainStringResult = intl3.formatToPlainString(tmp4(tmp2[22]).t.I0mOAs, obj15);
  } else {
    const found = tmpResultResult.find(
      (type) => type.type === controlsHidden(controlsSpecs[21]).VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON,
    );
    formatToPlainStringResult = label;
    if (null != found) {
      const muteDeafenIconState = found.muteDeafenIconState;
      if (tmp4(tmp2[24]).MuteDeafenIconState.DEAFENED !== muteDeafenIconState) {
        if (tmp4(tmp2[24]).MuteDeafenIconState.DEAFENED_SERVER !== muteDeafenIconState) {
          const intl = tmp4(tmp2[22]).intl;
          const obj16 = { username: label };
          formatToPlainStringResult = intl.formatToPlainString(tmp4(tmp2[22]).t.Hd1oVG, obj16);
        }
      }
      const intl2 = tmp4(tmp2[22]).intl;
      const obj17 = { username: label };
      formatToPlainStringResult = intl2.formatToPlainString(tmp4(tmp2[22]).t["9hDjai"], obj17);
    }
  }
  obj14.accessibilityLabel = formatToPlainStringResult;
  obj14.children = label;
  const items7 = [closure_16(controlsHidden(controlsSpecs[54]).Text, obj14), ,];
  let tmp20Result2 = participant.type === constants.USER;
  if (tmp20Result2) {
    const obj18 = { userId: participant.user.id, guildId, textColor: "text-overlay-light" };
    tmp20Result2 = closure_16(closure_43, obj18);
  }
  items7[1] = tmp20Result2;
  if (isUserSecureFramesVerified) {
    const obj19 = { style: tmp6.secureFramesIcon, size: "xs", accessibilityLabel: null };
    const intl4 = tmp4(tmp2[22]).intl;
    obj19.accessibilityLabel = intl4.string(tmp4(tmp2[22]).t.mR9cf3);
    isUserSecureFramesVerified = closure_16(tmp4(tmp2[55]).ShieldLockIcon, obj19);
  }
  items7[2] = isUserSecureFramesVerified;
  obj12.children = items7;
  items4[1] = closure_17(channelId(controlsSpecs[29]), obj12);
  obj10.children = items4;
  obj9.children = closure_17(closure_20, obj10);
  obj8.children = closure_16(tmpResult6, obj9);
  return closure_16(tmpResult5, obj8);
});
const __initData11 = {
  code: "function VoicePanelCardFloatingControlsTsx13(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx");

export default noop.memo(function FloatingControls(arg0) {
  ({ label, participant } = arg0);
  ({ isRinging, layout } = arg0);
  let guildId;
  let controlsSpecs;
  let focused;
  const context = focused.useContext(guildId(controlsSpecs[16]));
  guildId = context.guildId;
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  const mode = context.mode;
  const items = [RTCConnectionStore];
  let stateFromStores = participant(controlsSpecs[37]).useStateFromStores(items, () => connected.isConnected());
  let obj = participant(controlsSpecs[37]);
  let tmp = guildId;
  const obj2 = participant(controlsSpecs[30]);
  const tmp6 = participant(controlsSpecs[30]).isStableParticipantWithUser(participant) && participant.isSelf;
  const items1 = [EmbeddedActivitiesStore, ApplicationStreamingStore];
  const stateFromStores1 = participant(controlsSpecs[37]).useStateFromStores(items1, () => {
    if (obj.isStableActivityParticipant(participant)) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      return participant.applicationId === applicationId;
    } else {
      let result = useStableParticipant.isStableStreamParticipant(participant);
      if (result) {
        result = null != ApplicationStreamingStore.getActiveStreamForUser(participant.user.id, guildId);
      }
      return result;
    }
    obj = useStableParticipant;
  });
  const tmp4Result = participant(controlsSpecs[37]);
  const tmp8 = tmp(controlsSpecs[56])(guildId, context.channelId, participant.id);
  const fn = function h() {
    let tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
    if (!tmp) {
      tmp = null != focused.get();
    }
    if (!tmp) {
      tmp = mode.get() === VoicePanelModes.PIP;
    }
    return tmp;
  };
  fn.__closure = { controlsSpecs, VoicePanelControlsModes, focused, mode, VoicePanelModes };
  fn.__workletHash = 16708205249554;
  fn.__initData = __initData11;
  const derivedValue = participant(controlsSpecs[12]).useDerivedValue(fn);
  let tmp10 = null != label;
  if (tmp10) {
    const obj4 = { controlsHidden: derivedValue, label, layout, participant };
    tmp10 = closure_16(closure_47, obj4);
  }
  if (isRinging) {
    const obj5 = { controlsHidden: derivedValue };
    isRinging = closure_16(closure_42, obj5);
  }
  const children = [isRinging, , ,];
  let tmp17 = stateFromStores;
  if (stateFromStores) {
    tmp17 = stateFromStores1;
  }
  if (tmp17) {
    const obj6 = { controlsHidden: derivedValue, participant, isSelf: tmp6, layout };
    tmp17 = closure_16(closure_31, obj6);
  }
  children[1] = tmp17;
  if (stateFromStores) {
    stateFromStores = tmp8;
  }
  if (stateFromStores) {
    const obj7 = {
      controlsHidden: derivedValue,
      participantId: participant.id,
      targetName: label,
      isActivityParticipant: participant(tmp2[30]).isStableActivityParticipant(participant),
      layout,
    };
    stateFromStores = closure_16(closure_33, obj7);
    const tmp4Result4 = participant(tmp2[30]);
  }
  children[2] = stateFromStores;
  children[3] = tmp10;
  return closure_17(closure_18, { children });
});
