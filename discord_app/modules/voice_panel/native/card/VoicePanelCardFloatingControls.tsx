// discord_app/modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import StreamKeyUtils from "../../../go_live/utils/StreamKeyUtils.tsx";
import StreamActionCreators from "../../../../actions/StreamActionCreators.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import useShouldOpenGameProfileModal from "../../../game_profile/hooks/useShouldOpenGameProfileModal.tsx";
import GameProfileAnalyticUtils from "../../../game_profile/GameProfileAnalyticUtils.tsx";
import EmbeddedActivitiesNativeManagerDefault from "../../../activities/native/EmbeddedActivitiesNativeManager.tsx";
import VoiceStateIcons from "../shared/VoiceStateIcons.tsx";
import VoiceStateIconUtils from "../utils/VoiceStateIconUtils.tsx";
import VoiceXIcon from "../../../../design/components/Icon/native/redesign/generated/VoiceXIcon.tsx";
import _modDef9524 from "../../../../../_runtime/metro/09524__.js";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import useStableParticipant from "../utils/useStableParticipant.tsx";
import useVoicePanelCardUserStateIcons from "../hooks/useVoicePanelCardUserStateIcons.tsx";
import _modDef16929 from "../../../../../_runtime/metro/16929__.js";
import getRandomNumberInRangeDefault from "../utils/getRandomNumberInRange.tsx";
import _modDef16973 from "../../../../../_runtime/metro/16973__.js";
import _modDef16974 from "../../../../../_runtime/metro/16974__.js";
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
  let tmp = closure_22();
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
  const animatedStyle = controlsSpecs(4566).useAnimatedStyle(fn);
  let tmp2Result = _modDef16929;
  if (voicePlatform === constants2.XBOX) {
    tmp2Result = _modDef16973;
  } else if (voicePlatform === constants2.MOBILE) {
    tmp2Result = _modDef9524;
  } else if (voicePlatform === constants2.QUEST) {
    tmp2Result = _modDef16974;
  }
  const obj3 = { source: tmp2Result, style: null };
  const items = [tmp.iconWithoutBackground, animatedStyle];
  obj3.style = items;
  return closure_16(closure_19, obj3);
}
function AnimatedLabelIcon(icon) {
  icon = icon.icon;
  const tmp = closure_22();
  const type = icon.type;
  if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STREAM_ICON === type) {
    const obj2 = { voicePlatform: icon.voicePlatform };
    return value2(StreamIcon, obj2);
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
    obj3.children = value2(VoiceXIcon.VoiceXIcon, obj4);
    return value2(Pressable, obj3);
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
      obj5.children = value2(VoiceStateIcons.VideoIcon, obj6);
      let tmp16 = value2(Pressable, obj5);
    } else {
      const obj7 = {
        style: tmp.iconContainer,
        accessible: true,
        accessibilityRole: "image",
        accessibilityLabel: stringResult,
        children: null,
      };
      const obj8 = { style: tmp.icon, state: icon.videoIconState };
      obj7.children = value2(VoiceStateIcons.VideoIcon, obj8);
      tmp16 = value2(NativeViewDefault, obj7);
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
    obj10.children = value2(VoiceStateIcons.MuteDeafenIcon, obj11);
    obj9.children = value2(Pressable, obj10);
    return value2(NativeViewDefault, obj9);
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
    obj.children = value2(CircleErrorIcon.CircleErrorIcon, obj12);
    return value2(Pressable, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Platform, Pressable } = get_ActivityIndicator);
const VoicePanelConstants = fn(11755);
({ MODE_CHANGE_PHYSICS: closure_9, VoicePanelModes: c10 } = VoicePanelConstants);
const VoicePanelControlsModes = fn(11753).VoicePanelControlsModes;
const VOICE_PANEL_CARD_INNER_PADDING = fn(11758).VOICE_PANEL_CARD_INNER_PADDING;
const ThemeTypes = fn(1074).ThemeTypes;
const CallConstants = fn(4857);
({ ParticipantTypes: closure_14, VoicePlatforms: closure_15 } = CallConstants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_19 = ReanimatedRexport.createAnimatedComponent(fn(1177).Icon);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_20 = ReanimatedRexport.createAnimatedComponent(Pressable);
let c21 = 28;
const createStyles = fn(4836);
let closure_22 = createStyles.createStyles(() => {
  const obj = {
    labelPositionContainer: {
      position: "absolute",
      left: 8,
      right: 8,
      bottom: 8,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 8,
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
  obj.floatingContainer = { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden", flexShrink: 1 };
  obj.floatingText = { overflow: "hidden", paddingStart: 4, paddingEnd: 4, flexShrink: 1, lineHeight: 14 };
  const rect = {
    position: "absolute",
    top: 8,
    right: 8,
    padding: 6,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  obj.ringingIconContainer = rect;
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
  obj.ringingIcon = { tintColor: nativeDefault.colors.STATUS_POSITIVE };
  obj.secureFramesIcon = { marginEnd: -2 };
  return obj;
});
const __initData = {
  code: "function VoicePanelCardFloatingControlsTsx1(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}",
};
const __initData2 = {
  code: "function VoicePanelCardFloatingControlsTsx2(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get();return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,left:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}",
};
let closure_27 = noop.memo((participant) => {
  participant = participant.participant;
  const controlsHidden = participant.controlsHidden;
  let guildId;
  ({ isSelf, layout } = participant);
  guildId = noop.useContext(guildId(11754)).guildId;
  closure_129_0 = controlsHidden;
  const fn = function n() {
    value = participant.get();
    if (value) {
      let tmp2 = -c21 + 2 * left;
    } else {
      tmp2 = left;
    }
    const rect = { position: "absolute", top: tmp2, left, opacity: null, zIndex: 1 };
    let num2 = 1;
    if (value) {
      num2 = 0;
    }
    rect.opacity = spring.withSpring(num2, MODE_CHANGE_PHYSICS);
    return rect;
  };
  let obj = participant(4566);
  fn.__closure = {
    controlsHidden,
    FLOATING_BAR_HEIGHT: v28,
    VOICE_PANEL_CARD_INNER_PADDING,
    withSpring: participant(5280).withSpring,
    MODE_CHANGE_PHYSICS,
  };
  fn.__workletHash = 4080439075039;
  fn.__initData = __initData2;
  const items = [guildId, participant];
  const animatedStyle = obj.useAnimatedStyle(fn);
  const callback = noop.useCallback(() => {
    if (obj.isStableStreamParticipant(participant)) {
      const streamForUser = ApplicationStreamingStore.getStreamForUser(participant.user.id, guildId);
      if (null != streamForUser) {
        const tmpResult = StreamActionCreators;
        tmpResult.stopStream(StreamKeyUtils.encodeStreamKey(streamForUser));
        const tmpResult3 = StreamKeyUtils;
      }
    }
    obj = useStableParticipant;
    if (tmpResult4.isStableActivityParticipant(participant)) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let _location;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const obj2 = { location: _location, applicationId: participant.applicationId };
      EmbeddedActivitiesNativeManagerDefault.leaveActivity(obj2);
    }
    tmpResult4 = useStableParticipant;
  }, items);
  let obj3 = { icon: null, onPress: null, style: null, layout: null, accessibilityLabel: null };
  let obj2 = {
    controlsHidden,
    FLOATING_BAR_HEIGHT: v28,
    VOICE_PANEL_CARD_INNER_PADDING,
    withSpring: participant(5280).withSpring,
    MODE_CHANGE_PHYSICS,
  };
  obj3.icon = guildId(16975);
  obj3.onPress = callback;
  obj3.style = animatedStyle;
  obj3.layout = layout;
  const tmp4 = guildId(16855);
  const result = participant(16925).isStableActivityParticipant(participant);
  const intl = participant(1115).intl;
  const string = intl.string;
  const t = participant(1115).t;
  if (result) {
    let stringResult = string(t["R/FK4A"]);
  } else if (isSelf) {
    stringResult = string(t.S5anIc);
  } else {
    stringResult = string(t.q3O3J8);
  }
  obj3.accessibilityLabel = stringResult;
  return closure_16(tmp4, obj3);
});
const __initData3 = {
  code: "function VoicePanelCardFloatingControlsTsx3(){const{controlsHidden,mode,VoicePanelModes,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get()||mode.get()===VoicePanelModes.PIP;return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,right:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}",
};
let closure_29 = noop.memo((participantId) => {
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
  const fn = function u() {
    value = controlsHidden.get();
    if (!value) {
      value = mode.get() === VoicePanelModes.PIP;
    }
    if (value) {
      let tmp4 = -c21 + 2 * right;
    } else {
      tmp4 = right;
    }
    const rect = { position: "absolute", top: tmp4, right, opacity: null, zIndex: 1 };
    let num2 = 1;
    if (value) {
      num2 = 0;
    }
    rect.opacity = spring.withSpring(num2, MODE_CHANGE_PHYSICS);
    return rect;
  };
  const obj = participantId(setFocused[12]);
  fn.__closure = {
    controlsHidden,
    mode,
    VoicePanelModes,
    FLOATING_BAR_HEIGHT: v28,
    VOICE_PANEL_CARD_INNER_PADDING,
    withSpring: participantId(setFocused[28]).withSpring,
    MODE_CHANGE_PHYSICS,
  };
  fn.__workletHash = 12421495364262;
  fn.__initData = __initData3;
  const animatedStyle = obj.useAnimatedStyle(fn);
  if (isActivityParticipant) {
    const intl3 = tmp5(tmp2[22]).intl;
    let stringResult = intl3.string(tmp5(tmp2[22]).t["3ejJer"]);
  } else if (null != targetName) {
    const intl2 = tmp5(tmp2[22]).intl;
    const obj3 = { targetName };
    stringResult = intl2.formatToPlainString(tmp5(tmp2[22]).t.OervdV, obj3);
  } else {
    const intl = tmp5(tmp2[22]).intl;
    stringResult = intl.string(tmp5(tmp2[22]).t["77cRN4"]);
  }
  const obj4 = { icon: null, onPress: null, style: null, layout: null, accessibilityLabel: null };
  const obj2 = {
    controlsHidden,
    mode,
    VoicePanelModes,
    FLOATING_BAR_HEIGHT: v28,
    VOICE_PANEL_CARD_INNER_PADDING,
    withSpring: participantId(setFocused[28]).withSpring,
    MODE_CHANGE_PHYSICS,
  };
  obj4.icon = controlsHidden(setFocused[35]);
  obj4.onPress = callback;
  obj4.style = animatedStyle;
  obj4.layout = layout;
  obj4.accessibilityLabel = stringResult;
  return closure_16(controlsHidden(setFocused[33]), obj4);
});
const RING_PHYSICS = { mass: 0.1, stiffness: 400, overshootClamping: true };
const __initData4 = {
  code: "function VoicePanelCardFloatingControlsTsx4(){const{flip}=this.__closure;return flip.get();}",
};
const __initData5 = {
  code: "function VoicePanelCardFloatingControlsTsx5(flipped){const{angle,withSpring,getRandomNumberInRange,RING_PHYSICS,flip}=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(45-10,45+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}else{angle.set(withSpring(getRandomNumberInRange(0-10,0+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}}",
};
let closure_33 = {
  code: "function VoicePanelCardFloatingControlsTsx6(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}",
};
let closure_34 = {
  code: "function VoicePanelCardFloatingControlsTsx7(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}",
};
const __initData6 = {
  code: "function VoicePanelCardFloatingControlsTsx8(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};}",
};
const __initData7 = {
  code: 'function VoicePanelCardFloatingControlsTsx9(){const{angle}=this.__closure;return{transform:[{rotate:angle.get()+"deg"}]};}',
};
let closure_37 = noop.memo((controlsHidden) => {
  controlsHidden = controlsHidden.controlsHidden;
  let sharedValue1;
  const tmp = closure_22();
  const sharedValue = controlsHidden(sharedValue1[12]).useSharedValue(true);
  let obj = controlsHidden(sharedValue1[12]);
  sharedValue1 = controlsHidden(sharedValue1[12]).useSharedValue(0);
  let obj2 = controlsHidden(sharedValue1[12]);
  let items = [AccessibilityStore];
  const stateFromStores = controlsHidden(sharedValue1[36]).useStateFromStores(
    items,
    () => useReducedMotion.useReducedMotion,
  );
  const obj3 = controlsHidden(sharedValue1[36]);
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
      let result = set(withSpring(tmp3(35, 55), closure_30, "respect-motion-settings", fn2));
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
      const result1 = set(withSpring(tmp3(-10, 10), closure_30, "respect-motion-settings", fn));
    }
  };
  const obj4 = controlsHidden(sharedValue1[12]);
  fn2.__closure = {
    angle: sharedValue1,
    withSpring: controlsHidden(sharedValue1[28]).withSpring,
    getRandomNumberInRange: sharedValue(sharedValue1[37]),
    RING_PHYSICS,
    flip: sharedValue,
  };
  fn2.__workletHash = 15646860695268;
  fn2.__initData = __initData5;
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const obj5 = {
    angle: sharedValue1,
    withSpring: controlsHidden(sharedValue1[28]).withSpring,
    getRandomNumberInRange: sharedValue(sharedValue1[37]),
    RING_PHYSICS,
    flip: sharedValue,
  };
  const tmp7 = sharedValue;
  class I {
    constructor() {
      top = 0;
      if (controlsHidden.get()) {
        tmp = c21;
        tmp2 = closure_12;
        num2 = 2;
        top = -c21 + 2 * closure_12;
      }
      return { top };
    }
  }
  I.__closure = { controlsHidden, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING };
  I.__workletHash = 726627995932;
  I.__initData = __initData6;
  const animatedStyle = controlsHidden(sharedValue1[12]).useAnimatedStyle(I);
  const obj6 = controlsHidden(sharedValue1[12]);
  const obj7 = { controlsHidden, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING };
  const fn3 = function p() {
    const obj = { transform: null };
    const items = [{ rotate: "" + sharedValue1.get() + "deg" }];
    obj.transform = items;
    return obj;
  };
  fn3.__closure = { angle: sharedValue1 };
  fn3.__workletHash = 791392364030;
  fn3.__initData = __initData7;
  const animatedStyle1 = controlsHidden(sharedValue1[12]).useAnimatedStyle(fn3);
  const obj9 = { style: null, children: null };
  const items1 = [animatedStyle, tmp.ringingIconContainer];
  obj9.style = items1;
  const obj8 = controlsHidden(sharedValue1[12]);
  let tmp14 = !stateFromStores;
  const tmp12 = sharedValue(sharedValue1[38]);
  if (!stateFromStores) {
    tmp14 = animatedStyle1;
  }
  const obj10 = { style: tmp14, pointerEvents: "none", children: null };
  const tmp13 = sharedValue(sharedValue1[38]);
  obj10.children = closure_16(controlsHidden(sharedValue1[13]).Icon, {
    source: tmp7(sharedValue1[39]),
    size: controlsHidden(sharedValue1[13]).IconSizes.SMALL_20,
    style: tmp.ringingIcon,
  });
  obj9.children = closure_16(tmp13, obj10);
  return closure_16(tmp12, obj9);
});
let closure_38 = noop.memo((controlsHidden) =>
  value2(native.ThemeContextProvider, {
    theme: ThemeTypes.LIGHT,
    children: value2(closure_37, { controlsHidden: controlsHidden.controlsHidden }),
  }),
);
let closure_39 = noop.memo((arg0) => {
  ({ userId, textColor } = arg0);
  let gameRecord;
  dependencyMap = undefined;
  noop = undefined;
  const showGameTag = gameRecord(16978).useConfig({ location: "VoicePanelCardFloatingControls" }).showGameTag;
  const first = gameRecord(9191)(userId, arg0.guildId, showGameTag)[0];
  let tmp5;
  let obj = gameRecord(16978);
  if (showGameTag) {
    let application_id;
    if (first != null) {
      application_id = first.application_id;
    }
    tmp5 = application_id;
  }
  gameRecord = gameRecord(8131)({ applicationId: tmp5 }).gameRecord;
  const tmp8 = gameRecord(5423)(gameRecord);
  dependencyMap = tmp8;
  noop = noop.useRef(false);
  let items = [showGameTag, gameRecord, tmp8];
  const effect = noop.useEffect(() => {
    let tmp = showGameTag;
    if (showGameTag) {
      tmp = !ref.current;
    }
    if (tmp) {
      tmp = null != gameRecord;
    }
    if (tmp) {
      tmp = closure_2;
    }
    if (tmp) {
      const obj = useShouldOpenGameProfileModal;
      const items = [useShouldOpenGameProfileModal.RejectionReason.Obscured];
      obj.trackEntryPoint(false, gameRecord.id, items, GameProfileAnalyticUtils.GameProfileSources.CallTile);
      ref.current = true;
    }
  }, items);
  if (showGameTag) {
    if (null != gameRecord) {
      if (!tmp8) {
        const obj2 = { game: gameRecord, userId, textColor };
        let tmp12 = closure_16(tmp(16979), obj2);
      }
      return tmp12;
    }
  }
  tmp12 = closure_16(tmp(9205), { userId, textColor });
  const tmp4 = gameRecord(8131);
});
const __initData8 = {
  code: "function VoicePanelCardFloatingControlsTsx10(){const{hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden}=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;return!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();}",
};
const __initData9 = {
  code: "function VoicePanelCardFloatingControlsTsx11(){const{isPillHidden}=this.__closure;return isPillHidden.get();}",
};
const __initData10 = {
  code: "function VoicePanelCardFloatingControlsTsx12(hidden){const{pillOpacity,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;pillOpacity.set(withSpring(hidden?0:1,MODE_CHANGE_PHYSICS));}",
};
const __initData11 = {
  code: "function VoicePanelCardFloatingControlsTsx13(){const{pillOpacity,isPillHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{opacity:pillOpacity.get(),top:isPillHidden.get()?FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING:0,height:FLOATING_BAR_HEIGHT,pointerEvents:isPillHidden.get()?'none':'auto'};}",
};
const __initData12 = {
  code: "function VoicePanelCardFloatingControlsTsx14(){const{connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP}=this.__closure;const hidden=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden&&hasIcon;return{width:shouldCollapseWidth?0:'auto',marginRight:hidden?-GAP:0};}",
};
let closure_45 = noop.memo((controlsHidden) => {
  controlsHidden = controlsHidden.controlsHidden;
  ({ label, layout, participant } = controlsHidden);
  channelId = undefined;
  let controlsSpecs;
  let focused;
  let analyticsLocations;
  MODE_CHANGE_PHYSICS = undefined;
  VoicePanelModes = undefined;
  let derivedValue;
  let sharedValue;
  const context = focused.useContext(channelId(controlsSpecs[16]));
  ({ guildId, channelId } = context);
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  const connected = context.connected;
  const mode = context.mode;
  const isScreenReaderEnabled = controlsHidden(controlsSpecs[49]).useIsScreenReaderEnabled();
  const tmp6 = closure_22();
  let obj = focused;
  const obj2 = controlsHidden(controlsSpecs[49]);
  let id;
  if (obj3.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  analyticsLocations = tmp(tmp2[50])().analyticsLocations;
  const items = [id, channelId, analyticsLocations];
  const callback = obj.useCallback(() => {
    if (null != id) {
      const obj = { userId: tmp, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    }
  }, items);
  obj3 = controlsHidden(controlsSpecs[29]);
  let isUserSecureFramesVerified = controlsHidden(controlsSpecs[52]).useIsUserSecureFramesVerified({
    userId: id,
    channelId,
  });
  const tmp4Result = controlsHidden(controlsSpecs[52]);
  const tmpResult = channelId(controlsSpecs[21]);
  let id1;
  if (tmp4Result8.isStableParticipantWithUser(participant)) {
    id1 = participant.user.id;
  }
  const tmpResultResult = tmpResult(participant.type, id1, guildId, channelId);
  tmp4Result8 = controlsHidden(controlsSpecs[29]);
  const tmp12 = channelId(controlsSpecs[53])({ userId: id, guildId });
  const displayNameStylesFont = controlsHidden(controlsSpecs[54]).useDisplayNameStylesFont({
    displayNameStyles: tmp12,
  });
  let num = 1;
  MODE_CHANGE_PHYSICS = tmp14;
  const tmp15 =
    tmpResultResult.filter(
      (type) => type.type !== controlsHidden(controlsSpecs[21]).VoicePanelCardUserStateIconType.STREAM_ICON,
    ).length >= 1;
  VoicePanelModes = tmp15;
  const tmp4Result9 = controlsHidden(controlsSpecs[54]);
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
  const tmp4Result10 = controlsHidden(controlsSpecs[12]);
  if (derivedValue.get()) {
    num = 0;
  }
  sharedValue = controlsHidden(controlsSpecs[12]).useSharedValue(num);
  const tmp4Result11 = controlsHidden(controlsSpecs[12]);
  const fn2 = function _() {
    return derivedValue.get();
  };
  fn2.__closure = { isPillHidden: derivedValue };
  fn2.__workletHash = 653298163833;
  fn2.__initData = __initData9;
  const fn3 = function u(arg0) {
    let num = 1;
    if (arg0) {
      num = 0;
    }
    const result = sharedValue.set(spring.withSpring(num, MODE_CHANGE_PHYSICS));
  };
  const tmp4Result12 = controlsHidden(controlsSpecs[12]);
  fn3.__closure = {
    pillOpacity: sharedValue,
    withSpring: controlsHidden(controlsSpecs[28]).withSpring,
    MODE_CHANGE_PHYSICS,
  };
  fn3.__workletHash = 158794425133;
  fn3.__initData = __initData10;
  const animatedReaction = tmp4Result12.useAnimatedReaction(fn2, fn3);
  const obj5 = {
    pillOpacity: sharedValue,
    withSpring: controlsHidden(controlsSpecs[28]).withSpring,
    MODE_CHANGE_PHYSICS,
  };
  const fn4 = function q() {
    const obj = { opacity: sharedValue.get(), top: null, height: null, pointerEvents: null };
    let num = 0;
    if (derivedValue.get()) {
      num = height + closure_12;
    }
    obj.top = num;
    obj.height = height;
    let str = "auto";
    if (derivedValue.get()) {
      str = "none";
    }
    obj.pointerEvents = str;
    return obj;
  };
  fn4.__closure = {
    pillOpacity: sharedValue,
    isPillHidden: derivedValue,
    FLOATING_BAR_HEIGHT: v28,
    VOICE_PANEL_CARD_INNER_PADDING: sharedValue,
  };
  fn4.__workletHash = 12355778282621;
  fn4.__initData = __initData11;
  const animatedStyle = controlsHidden(controlsSpecs[12]).useAnimatedStyle(fn4);
  const obj6 = {
    pillOpacity: sharedValue,
    isPillHidden: derivedValue,
    FLOATING_BAR_HEIGHT: v28,
    VOICE_PANEL_CARD_INNER_PADDING: sharedValue,
  };
  const tmp4Result13 = controlsHidden(controlsSpecs[12]);
  class Z {
    constructor() {
      value = connected.get();
      tmp2 = !value;
      if (value) {
        tmp3 = closure_6;
        tmp4 = !closure_6;
        if (!closure_6) {
          tmp5 = controlsSpecs;
          tmp6 = VoicePanelControlsModes;
          tmp4 = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
        }
        if (tmp4) {
          tmp4 = closure_9;
        }
        tmp2 = tmp4;
      }
      num = "auto";
      if (tmp2) {
        tmp7 = closure_9;
        num = "auto";
        if (closure_9) {
          num = 0;
        }
      }
      obj = { width: num, marginRight: null };
      num2 = 0;
      if (tmp2) {
        num2 = -4;
      }
      obj.marginRight = num2;
      return obj;
    }
  }
  Z.__closure = {
    connected,
    isScreenReaderEnabled,
    controlsSpecs,
    VoicePanelControlsModes: derivedValue,
    hasIcon: tmpResultResult.length >= 1,
    GAP: 4,
  };
  Z.__workletHash = 10013340978870;
  Z.__initData = __initData12;
  const items1 = [tmp6.labelPositionContainer];
  const animatedStyle1 = controlsHidden(controlsSpecs[12]).useAnimatedStyle(Z);
  const obj8 = { style: items1, layout, pointerEvents: "box-none", children: null };
  let tmp24;
  const obj7 = {
    connected,
    isScreenReaderEnabled,
    controlsSpecs,
    VoicePanelControlsModes: derivedValue,
    hasIcon: tmpResultResult.length >= 1,
    GAP: 4,
  };
  const tmp4Result14 = controlsHidden(controlsSpecs[12]);
  if (null != id) {
    tmp24 = callback;
  }
  const obj9 = { onPress: tmp24, style: null, layout, children: null };
  const items2 = [tmp6.labelOuterContainer, animatedStyle];
  obj9.style = items2;
  let tmp20Result = tmpResultResult.length > 0;
  if (tmp20Result) {
    const obj10 = {
      style: tmp6.initialIcons,
      children: tmpResultResult.map((icon) => closure_1_16(AnimatedLabelIcon, { icon }, icon.type)),
    };
    tmp20Result = closure_16(tmp(tmp2[26]), obj10);
    const tmpResult5 = tmp(tmp2[26]);
  }
  const items3 = [tmp20Result];
  const obj11 = { style: null, layout, children: null };
  const items4 = [tmp6.floatingContainer, animatedStyle1];
  obj11.style = items4;
  const tmpResult4 = channelId(controlsSpecs[38]);
  const items5 = [tmp6.floatingText];
  let tmp28 = null != displayNameStylesFont;
  if (tmp28) {
    const obj12 = { fontFamily: displayNameStylesFont };
    tmp28 = obj12;
  }
  const obj13 = {
    variant: "heading-sm/semibold",
    color: "text-overlay-light",
    lineClamp: 1,
    style: items5,
    ellipsizeMode: "tail",
    accessibilityLabel: null,
    children: null,
  };
  items5[1] = tmp28;
  if (
    null !=
    tmpResultResult.find(
      (type) => type.type === controlsHidden(controlsSpecs[21]).VoicePanelCardUserStateIconType.STREAM_ICON,
    )
  ) {
    const intl3 = tmp4(tmp2[22]).intl;
    const obj14 = { username: label };
    let formatToPlainStringResult = intl3.formatToPlainString(tmp4(tmp2[22]).t.I0mOAs, obj14);
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
          const obj15 = { username: label };
          formatToPlainStringResult = intl.formatToPlainString(tmp4(tmp2[22]).t.Hd1oVG, obj15);
        }
      }
      const intl2 = tmp4(tmp2[22]).intl;
      const obj16 = { username: label };
      formatToPlainStringResult = intl2.formatToPlainString(tmp4(tmp2[22]).t["9hDjai"], obj16);
    }
  }
  obj13.accessibilityLabel = formatToPlainStringResult;
  obj13.children = label;
  const items6 = [closure_16(controlsHidden(controlsSpecs[55]).Text, obj13), ,];
  let tmp20Result2 = participant.type === constants.USER;
  if (tmp20Result2) {
    const obj17 = { userId: participant.user.id, guildId, textColor: "text-overlay-light" };
    tmp20Result2 = closure_16(closure_39, obj17);
  }
  items6[1] = tmp20Result2;
  if (isUserSecureFramesVerified) {
    const obj18 = { style: tmp6.secureFramesIcon, size: "xs", accessibilityLabel: null };
    const intl4 = tmp4(tmp2[22]).intl;
    obj18.accessibilityLabel = intl4.string(tmp4(tmp2[22]).t.mR9cf3);
    isUserSecureFramesVerified = closure_16(tmp4(tmp2[56]).ShieldLockIcon, obj18);
  }
  items6[2] = isUserSecureFramesVerified;
  obj11.children = items6;
  items3[1] = closure_17(channelId(controlsSpecs[38]), obj11);
  obj9.children = items3;
  obj8.children = closure_17(closure_20, obj9);
  return closure_16(tmpResult4, obj8);
});
const __initData13 = {
  code: "function VoicePanelCardFloatingControlsTsx15(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}",
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
  let stateFromStores = participant(controlsSpecs[36]).useStateFromStores(items, () => connected.isConnected());
  let obj = participant(controlsSpecs[36]);
  let tmp = guildId;
  const obj2 = participant(controlsSpecs[29]);
  const tmp6 = participant(controlsSpecs[29]).isStableParticipantWithUser(participant) && participant.isSelf;
  const items1 = [EmbeddedActivitiesStore, ApplicationStreamingStore];
  const stateFromStores1 = participant(controlsSpecs[36]).useStateFromStores(items1, () => {
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
  const tmp4Result = participant(controlsSpecs[36]);
  const tmp8 = tmp(controlsSpecs[57])(guildId, context.channelId, participant.id);
  class I {
    constructor() {
      tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
      if (!tmp) {
        tmp2 = focused;
        tmp3 = null;
        tmp = null != focused.get();
      }
      if (!tmp) {
        tmp4 = mode;
        tmp5 = VoicePanelModes;
        tmp = mode.get() === VoicePanelModes.PIP;
      }
      return tmp;
    }
  }
  I.__closure = { controlsSpecs, VoicePanelControlsModes, focused, mode, VoicePanelModes };
  I.__workletHash = 8765031976276;
  I.__initData = __initData13;
  const derivedValue = participant(controlsSpecs[12]).useDerivedValue(I);
  let tmp10 = null != label;
  if (tmp10) {
    const obj4 = { controlsHidden: derivedValue, label, layout, participant };
    tmp10 = closure_16(closure_45, obj4);
  }
  if (isRinging) {
    const obj5 = { controlsHidden: derivedValue };
    isRinging = closure_16(closure_38, obj5);
  }
  const children = [isRinging, , ,];
  let tmp17 = stateFromStores;
  if (stateFromStores) {
    tmp17 = stateFromStores1;
  }
  if (tmp17) {
    const obj6 = { controlsHidden: derivedValue, participant, isSelf: tmp6, layout };
    tmp17 = closure_16(closure_27, obj6);
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
      isActivityParticipant: participant(tmp2[29]).isStableActivityParticipant(participant),
      layout,
    };
    stateFromStores = closure_16(closure_29, obj7);
    const tmp4Result4 = participant(tmp2[29]);
  }
  children[2] = stateFromStores;
  children[3] = tmp10;
  return closure_17(closure_18, { children });
});
